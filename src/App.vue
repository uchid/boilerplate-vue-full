<template>
  <div id="app" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// For sample to use store-module with vuex-class.
import { namespace } from 'vuex-class';
import * as aTypes from '@/store/sample/action-types';
import * as mTypes from '@/store/sample/mutation-types';
import { SampleState } from '@/store/types';

const sampleModule = namespace('sample');

@Component
export default class App extends Vue {
  // For sample to use store-module with vuex-class.
  @sampleModule.State('sample') stateSample!: SampleState;
  @sampleModule.Action(aTypes.SAMPLE)
  actionSample!: Promise<SampleState>;
  @sampleModule.Mutation(mTypes.SAMPLE) mutationSample!: void;
}
</script>

<style lang="scss">
@import '@/assets/stylesheets/common.scss';

#app {
  color: black;
}
</style>
