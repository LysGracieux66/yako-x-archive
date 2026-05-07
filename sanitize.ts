export function cleanText(input: unknown, max = 80) {
  return String(input ?? '').replace(/[<>]/g, '').trim().slice(0, max);
}
