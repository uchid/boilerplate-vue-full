import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from './types';
import { sample } from './sample';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0,0',
  },
  modules: {
    sample,
  },
};

export default new Vuex.Store<RootState>(store);
