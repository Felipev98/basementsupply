import axios from "axios";
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

import { shallowMount,mount } from "@vue/test-utils";
import Item from "../../src/components/Index/Item.vue";
import BaseItemCart from "../../src/components/Cart/BaseItemCart.vue";

 describe("Product Cards", () => {
   afterAll(() => mock.restore());
   beforeEach(() => mock.reset());

  //  it("loads Products", async () => {
  //    mock
  //      .onGet("https://pokeapi.co/api/v2/ability/")
  //      .reply(200, [{ title: "Black t-shirt" }, { title: "Black hoodie" }, { title: "Black cap" }]);

  //    const wrapper = shallowMount(Item);
  //    await wrapper.vm.getProducts();
  //    const listItems = wrapper.findAll(".card");
  //    expect(listItems).toHaveLength(3);
  //  });
   it('button click should increment the count', () => { 
    const wrapper = shallowMount(BaseItemCart)
    expect(wrapper.vm.count).toBe(0) 
    const button = wrapper.find('.increment-quantity') 
    button.trigger('click') 
    expect(wrapper.vm.count).toBe(1) 
 });
 });
