export type SuccessResult = {
  success: boolean;
  id: bigint;
  status: 201;
};

export type ErrorResult = {
  error: string;
  status: 400;
};
