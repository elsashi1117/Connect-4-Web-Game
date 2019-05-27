import React from 'react';
import Cell from './Cell';
import {shallow} from 'enzyme';

describe('Test Cell component', () => {
    it('renders without crashing', () => {
        shallow(<Cell/>)
    })
});