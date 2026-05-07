import { z } from 'zod';
export const ruleSchema = z.enum(['area', 'yagura', 'hoko', 'asari']);
export const searchSchema = z.object({ q: z.string().trim().max(40).default('') });
export const rankingQuerySchema = z.object({
  rule: ruleSchema.optional(),
  weapon: z.string().trim().max(80).optional(),
  weaponType: z.string().trim().max(80).optional(),
  limit: z.coerce.number().int().min(1).max(500).default(100)
});
