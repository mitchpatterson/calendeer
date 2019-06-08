import React from 'react';
import { shallow } from "enzyme";

import { Header } from '../../components';

describe('Tests for Header Component', () => {
	it('renders without crashing and does not initialize', () => {
		const wrapper = shallow(
			<Header />
		);
		expect(wrapper.hasClass("initialized")).toEqual(false);
		wrapper.setProps({initialized: true});
		expect(wrapper.hasClass("initialized")).toBeTruthy();
	});

	it('renders without crashing and does initialize', () => {
		const wrapper = shallow(
			<Header initialized />
		);
		expect(wrapper.hasClass("initialized")).toBeTruthy();
	});
});