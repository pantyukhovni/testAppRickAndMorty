import type { EntityState } from '@reduxjs/toolkit';

import type { MockDate } from '@app/common/types';

type ListState = {
  suggestions: EntityState<MockDate>;
};

export type { ListState };
