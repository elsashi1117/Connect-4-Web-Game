import React from 'react';
import Row from './Row';
import { shallow } from 'enzyme';

describe('Test Row component', () => {
    it('each row contains 7 cells', () => {
        const row = new Array(7).fill(null);
        const wrapper = shallow(<Row row={row} />);
        expect(wrapper.find("tr").first().find("Cell").length).toBe(7);
    })

    // it('calls clickBoard event on click of a cell', () => { 
    //     const row = new Array(7).fill(null);
    //     const clickBoard = jest.fn();
    //     const wrapper = mount(<Row clickBoard={clickBoard} row={row}/>);
    //     wrapper.find('Cell').at(1).find('.cell').simulate('click');        
    //     console.log(wrapper.find('Cell').at(1).find('.cell').debug())
    //     // expect(row[0]).toEqual('orange');
    //     expect(clickBoard).toHaveBeenCalled();
    //   })
})