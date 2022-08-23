type MockDate = {
  id: string;
  text: string;
  completed: boolean;
};

type Merge<T> = { [K in keyof T]: T[K] };

export type { Merge, MockDate };
