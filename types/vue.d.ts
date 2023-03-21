import Vue from 'vue';
import { VueI18n } from '@nuxtjs/i18n';

declare module 'vue/types/vue' {
  interface Vue {
    $i18n: VueI18n;
    $t: VueI18n['t'];
  }
}
