type Bucket = { count: number; reset: number };
const buckets = new Map<string, Bucket>();
export function rateLimit(key: string, limit = 60, windowMs = 60_000) {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.reset < now) { buckets.set(key, { count: 1, reset: now + windowMs }); return true; }
  if (bucket.count >= limit) return false;
  bucket.count++;
  return true;
}
export function ipFromRequest(req: Request) {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}
