import { ActionTree } from 'vuex'

import { SampleState, RootState } from '../types';
import { SampleActionType } from './action-types';

export const actions: ActionTree<SampleState, RootState> = {
  [SampleActionType.SAMPLE]: () => {
    
  }
}