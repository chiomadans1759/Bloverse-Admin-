import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'

describe('App Component', () => {
  it('should render correctly', () => {
    Vue.use(VueRouter)
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
});
