import { NextResponse, type NextRequest } from "next/server"

const DAY = 24 * 60 * 60 * 1000
const MONTH = 30 * DAY
const LIMIT = 5
const hits = new Map<string, { count: number, resetAt: number }>()

const EMAILS_PER_REQUEST = 2
const SAFETY_FACTOR = 2
const RESEND_FREE_DAILY_EMAILS = 100
const RESEND_FREE_MONTHLY_EMAILS = 3000
const GLOBAL_DAILY_LIMIT = RESEND_FREE_DAILY_EMAILS / EMAILS_PER_REQUEST / SAFETY_FACTOR
const GLOBAL_MONTHLY_LIMIT = RESEND_FREE_MONTHLY_EMAILS / EMAILS_PER_REQUEST / SAFETY_FACTOR
let acceptedRequests: number[] = []

function isRateLimited(ip: string) {
    const now = Date.now()
    const entry = hits.get(ip)

    if (!entry || entry.resetAt < now) {
        hits.set(ip, { count: 1, resetAt: now + DAY })
        return false
    }

    entry.count++
    return entry.count > LIMIT
}

function startOfUtcDay(now: number) {
    const date = new Date(now)
    return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
}

function isGloballyLimited() {
    const now = Date.now()
    acceptedRequests = acceptedRequests.filter(timestamp => timestamp > now - MONTH)

    const todayStart = startOfUtcDay(now)
    const acceptedToday = acceptedRequests.filter(timestamp => timestamp >= todayStart).length

    if (acceptedToday >= GLOBAL_DAILY_LIMIT || acceptedRequests.length >= GLOBAL_MONTHLY_LIMIT) {
        return true
    }

    acceptedRequests.push(now)
    return false
}

export function proxy(request: NextRequest) {
    if (request.method !== "POST") return NextResponse.next()

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
    if (isRateLimited(ip)) {
        return new NextResponse("Too many requests, try again tomorrow", { status: 429 })
    }
    if (isGloballyLimited()) {
        return new NextResponse("Service temporarily unavailable, try again later", { status: 503 })
    }
    return NextResponse.next()
}

export const config = {
    matcher: "/api/:path*",
}
