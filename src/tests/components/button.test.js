import React from 'react';
import { shallow } from "enzyme";

import { Button } from '../../components';

describe('Tests for Button Component', () => {
	it('renders without crashing and ensures props are properly passed through', () => {
		const wrapper = shallow(
			<Button type="button" disabled>
				Submit!
			</Button>
		);
		expect(wrapper.props().type).toEqual('button');
		expect(wrapper.props().disabled).toEqual(true);
		expect(wrapper.props().children).toEqual("Submit!");
	});
});