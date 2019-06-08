import React from 'react';
import { shallow } from "enzyme";

import { Calendar } from '../../components';

describe('Tests for Calendar Component', () => {
	it('renders without crashing and ensures updating props renders img', () => {
		const wrapper = shallow(<Calendar />);
		expect(wrapper.hasClass("no_result")).toBeTruthy();
		wrapper.setProps({
			result: {
				urls: {
					small: "...."
				},
				alt_description: "testing",
				id: 123
			}
		});
		expect(wrapper.hasClass("no_result")).toEqual(false);
		expect(wrapper.find("img").exists()).toBeTruthy();
	});
});