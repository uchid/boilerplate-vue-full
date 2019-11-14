<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// For sample to use store-module with vuex-class.
import { State, Action, namespace, Mutation } from 'vuex-class';
import { SampleActionType } from '@/store/sample/action-types'
import { SampleMutationType } from '@/store/sample/mutation-types'

const sampleModule = namespace('sample');

@Component
export default class App extends Vue {

  // For sample to use store-module with vuex-class.
  @sampleModule.State('sample') stateSample: any;
  @sampleModule.Action(SampleActionType.SAMPLE) actionSample: any;
  @sampleModule.Mutation(SampleMutationType.SAMPLE) mutationSample: any;

}
</script>

<style lang="scss">
@import '@/assets/stylesheets/common.sass';

#app {
}
</style>
