import Enzyme,{shallow} from 'enzyme';
import Adaptor from '@cfaester/enzyme-adapter-react-18';
import App from './App';

Enzyme.configure({ adapter:new Adaptor() });

test("checking h1 content",()=>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('h1').text()).toContain('Hello World!');
})

  test("checking para content",()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').text()).toContain('This is para testing');

})

test("checking props",()=>{
  const wrapper = shallow(<App name="React" />);
  expect(wrapper.find('#test').text()).toBe('welcome to React');
})

test("checking state initial value",()=>{
  const wrapper = shallow(<App name="React" />);
  expect(wrapper.find('#init').text()).toBe('0');
})

test("checking onclick",()=>{
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');
  expect(wrapper.find('#init').text()).toBe('1');
})

