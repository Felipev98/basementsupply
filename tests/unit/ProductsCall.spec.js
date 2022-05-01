import axios from "axios";
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

import { shallowMount,mount } from "@vue/test-utils";
import Item from "../../src/components/Index/Item.vue";

 describe("Product Cards", () => {
   afterAll(() => mock.restore());
   beforeEach(() => mock.reset());

   it("loads Products", async () => {
     mock
       .onGet("https://apifake9898.herokuapp.com/products")
       .reply(200, [{ title: "Black t-shirt" }, { title: "Black hoodie" }, { title: "Black cap" }]);

     const wrapper = shallowMount(Item);
     await wrapper.vm.getProducts();
     const listItems = wrapper.findAll(".card");
     expect(listItems).toHaveLength(3);
   });

 });
