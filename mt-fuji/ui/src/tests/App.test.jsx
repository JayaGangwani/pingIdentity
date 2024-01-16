import React from "react";
import { shallow } from "enzyme";
import { App } from "../App.jsx";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
