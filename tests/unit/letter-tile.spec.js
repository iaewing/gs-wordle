import { shallowMount } from '@vue/test-utils'
import Tile from '@/components/LetterTile.vue'

describe('LetterTile.vue', () => {
  it('renders with the default transparent background', () => {
    const wrapper = shallowMount(Tile)
    const tile = wrapper.findComponent(Tile);
    expect(tile.classes()).toContain('bg-transparent')
  });

  it ('renders green when it receives "correct"', () => {
    const wrapper = shallowMount(Tile, {propsData: {colour: 'correct'}});
    const tile = wrapper.findComponent(Tile);
    expect(tile.classes()).toContain('bg-green-400');
  });

  it ('renders yellow when it receives "wrong spot"', () => {
    const wrapper = shallowMount(Tile, {propsData: {colour: 'wrong spot'}});
    const tile = wrapper.findComponent(Tile);
    expect(tile.classes()).toContain('bg-yellow-400');
  });

  it ('renders gray when it receives "not in word"', () => {
    const wrapper = shallowMount(Tile, {propsData: {colour: 'not in word'}});
    const tile = wrapper.findComponent(Tile);
    expect(tile.classes()).toContain('bg-gray-400');
  });
});
