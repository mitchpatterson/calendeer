import React from 'react';
import { shallow } from "enzyme";

import { Input } from '../../components';

describe('Tests for Input Component', () => {
	it('renders without crashing and ensures props are properly passed through', () => {
		const wrapper = shallow(
			<Input type="search" value="test" disabled />
		);
		expect(wrapper.props().type).toEqual('search');
		expect(wrapper.props().disabled).toEqual(true);
		expect(wrapper.props().value).toEqual("test");
	});
});