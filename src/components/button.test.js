import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    console.log('hello');
    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button />);
        wrapper.find('button').simulate('click');
    });
});
