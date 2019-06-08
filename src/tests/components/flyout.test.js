import React from 'react';
import { mount } from "enzyme";

import { Flyout, Button, Input } from '../../components';

describe('Tests for Flyout Component', () => {
	it('renders without crashing + ensure prop and state updates work', () => {
		const wrapper = mount(<Flyout />);
		expect(wrapper.hasClass("active")).toEqual(false);
		wrapper.setProps({
			active: true
		});
		wrapper.update();
		expect(wrapper.find(Button)).toBeTruthy();
		const search = wrapper.find(Input).first();
		search.simulate("change", {target: { value: "Testing" }});
		wrapper.update();
		expect(wrapper.state().searchQuery).toEqual("Testing");
	});
});