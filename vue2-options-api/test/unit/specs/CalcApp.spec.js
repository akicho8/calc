import Vue from 'vue'
import CalcApp from '@/components/CalcApp'

describe('CalcApp.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CalcApp)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
