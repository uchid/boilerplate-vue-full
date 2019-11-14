import { MutationTree } from 'vuex'

import { SampleState, RootState } from '../types';
import { SampleMutationType } from './mutation-types';

export const mutations: MutationTree<SampleState> = {
  [SampleMutationType.SAMPLE]: () => {

  }
}