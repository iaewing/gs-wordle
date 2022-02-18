import { shallowMount } from '@vue/test-utils'
import Tile from '@/components/LetterTile.vue'

describe('LetterTile.vue', () => {
  it('renders with the default transparent background', () => {
    const wrapper = shallowMount(Tile)
    const tile = wrapper.findComponent(Tile);
    expect(tile.classes()).toContain('bg-transparent')
  });
});
