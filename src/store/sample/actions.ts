import { ActionTree } from 'vuex';

import { SampleState, RootState } from '../types';
import * as aTypes from './action-types';

export const actions: ActionTree<SampleState, RootState> = {
  [aTypes.SAMPLE]: () => {},
};
