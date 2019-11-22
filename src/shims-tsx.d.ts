/* eslint 
  @typescript-eslint/no-unused-vars: 0,
  @typescript-eslint/no-empty-interface: 0,
  @typescript-eslint/no-explicit-any: 0,
*/

import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
