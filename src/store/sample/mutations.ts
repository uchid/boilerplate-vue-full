import { MutationTree } from 'vuex';

import { SampleState } from '../types';
import * as mTypes from './mutation-types';

export const mutations: MutationTree<SampleState> = {
  [mTypes.SAMPLE]: () => {},
};
