import React from 'react'
import { FavoritesComponent } from './Favorites'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Favorite } from './Favorite'
import favorites from '../../favorites'

describe('FavoritesComponent', () => {
  it('should show list of favorites', () => {
    const favorites = [{id: '1', content: '//Test1 Hello'}, {id: '2', content: '//Test2 Again'}]
    const wrapper = shallow(<FavoritesComponent scripts={favorites} dispatch={() => null}/>)
    expect(wrapper.find(Favorite)).to.have.length(2)
  })
})
