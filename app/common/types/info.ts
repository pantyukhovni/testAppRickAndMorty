type Pagination = number | null;

type Info = {
  count: number;
  pages: number;
  next: Pagination;
  prev: Pagination;
};

export type { Info };
