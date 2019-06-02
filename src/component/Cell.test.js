import React from 'react';
import Cell from './Cell';
import { shallow } from 'enzyme';

describe('Test Cell component', () => {

    //what it renders  
    it("always renders a td", () => {
        const wapper = shallow(<Cell />);
        const td = wapper.find("td");
        expect(td.length).toBe(1);
    });

    //when color is not passed
    it('it should not has color classname', () => {
        const wrapper = shallow(<Cell />);
        expect(wrapper.find('.outer').hasClass('orange')).toEqual(false);
        expect(wrapper.find('.inner').length).toBe(0);
    });

    //when color is passed
    it('it should has color classname', () => {
        const wrapper = shallow(<Cell color="orange" />);
        expect(wrapper.find('.outer').hasClass('orange')).toEqual(true);
        expect(wrapper.find('.inner').hasClass('orange')).toEqual(true);
    });

    it('calls clickBoard event on click of a cell', () => {
        const color = null;
        const clickBoard = jest.fn();
        const wrapper = shallow(<Cell color={color} clickBoard={clickBoard} />);
        wrapper.find('.cell').simulate('click');
        expect(clickBoard).toHaveBeenCalled();
    })

});