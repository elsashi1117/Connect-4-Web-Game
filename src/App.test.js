import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('test App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('ComponentDidMount', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, "initBoard");
    instance.componentDidMount();
    expect(instance.initBoard).toHaveBeenCalledTimes(1);
  });

  it('calls clickBoard event should toggle msg and curPlayer', () => {
    const wrapper = mount(<App />);
    // wrapper.instance().clickBoard = jest.fn(); 
    // wrapper.instance().forceUpdate()
    // wrapper.update();
    wrapper.find('Row').first().find('Cell').at(0).find('.cell').prop('onClick')();
    // console.log(wrapper.instance.debug())
    // expect(wrapper.instance().clickBoard).toHaveBeenCalled();
    //only update twice can haveBeenCalled,but I shouldn test if it is called only when clickBoard is props.
    //avoid using instance, too expensive
    expect(wrapper.state('msg')).toEqual('Player 2, please select a coin spot');
    expect(wrapper.state('curPlayer')).toEqual('purple');
  })

  it('calls clickBoard event should toggle msg and curPlayer', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      board: [
        ["purple", "purple","purple", null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, "orange", null, null, null],
        [null, null, null, "orange", "orange", "orange", null],
        [null, null, null, null, null, null, null]
    ],
    curPlayer: "purple"
    })
    wrapper.find('Row').first().find('Cell').at(3).find('.cell').simulate('click',{r: 0, c: 3});
    // console.log(wrapper.state('board'))
    expect(wrapper.find('p').first().text()).toEqual('Player 2 wins !!!');
    expect(wrapper.state('gameOver')).toEqual(true);
    wrapper.find('Row').first().find('Cell').at(3).find('.cell').simulate('click',{r: 1, c: 3});
    expect(wrapper.find('p').first().text()).toEqual('Game over. Please start a new game.');
  })

})