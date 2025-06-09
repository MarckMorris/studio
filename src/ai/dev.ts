import { config } from 'dotenv';
config();

import '@/ai/flows/convert-vulnerability-description-to-plain-english.ts';
import '@/ai/flows/suggest-fix.ts';
import '@/ai/flows/generate-report-summary.ts';