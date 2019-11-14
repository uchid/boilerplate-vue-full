import { Module } from 'vuex';
import { RootState, SampleState } from '../types';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const state: SampleState = {
  sample: 'sample'
}

export const sample: Module<SampleState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}