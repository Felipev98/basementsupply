import { mount, flushPromises,shallowMount  } from '@vue/test-utils'
import axios from 'axios'
import Item from '../../src/components/Index/Item.vue'

const mockPostList = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'title2' }
]

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockPostList` instead
jest.spyOn(axios, 'get').mockResolvedValue(mockPostList)

test('loads posts on button click', async () => {
  const wrapper = mount(Item)

  // Let's assert that we've called axios.get the right amount of times and
  // with the right parameters.

  await wrapper.get('.button').trigger('click')

  // expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/products')
  // Wait until the DOM updates.
  await flushPromises()

  // Finally, we make sure we've rendered the content from the API.
  const posts = wrapper.findAll('[data-test="post"]')

  expect(posts).toHaveLength(2)
  expect(posts[0].text()).toContain('title1')
  expect(posts[1].text()).toContain('title2')
  await wrapper.vm.$forceUpdate()

})












