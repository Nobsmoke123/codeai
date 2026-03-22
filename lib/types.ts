import { ExplanationComplexity } from "@/utils/generated/prisma/enums";

export type SuccessResult = {
  success: boolean;
  id: bigint;
  status: 201;
};

export type ErrorResult = {
  error: string;
  status: 400;
};

export type ExplanationStep = {
  step_number: number;
  line_start: number;
  line_end: number;
  text: string;
};

export type Explanation = {
  title: string;
  language: string;
  code: string;
  code_hash: string;
  complexity: ExplanationComplexity;
  summary: string;
  longSummary: string;
  optimization_tip: string;
  performance_impact: string;
  model: string;
  explanation_steps: Array<ExplanationStep>;
  created_at: Date;
};
