import React, { Component } from 'react';

import "../styles/components/calendar.css";

export class Calendar extends Component {

	constructor() {
		super();

		this.state = {
			height: 0,
			width: 0
		}

		this.interval = null;
		this.forceUpdateAndRecreate = this.forceUpdateAndRecreate.bind(this);
	}

	componentWillMount() {
		window.addEventListener("resize", this.debounce(this.forceUpdateAndRecreate, 500)); // add event listener on mount
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.debounce(this.forceUpdateAndRecreate, 500)); // remove event listener on dismount
	}

	componentDidMount() {
		this.forceUpdateAndRecreate();
	}

	componentDidUpdate(prevProps) {
		const { props } = this;
		if ((!prevProps.result && props.result) ||
			(prevProps.result && props.result &&
				prevProps.result.id !== props.result.id)) {
			this.forceUpdateAndRecreate();
		}
	}

	debounce = (callback, time) => {
		return (...args) => {
			clearTimeout(this.interval);
			this.interval = setTimeout(() => {
				this.interval = null;
				callback(...args);
			}, time);
		};
	};

	forceUpdateAndRecreate = () => {
		const fire = () => {
			if (this.img_node) {
				this.setState({
					height: this.img_node.offsetHeight,
					width: this.img_node.offsetWidth
				});
			}
		}

		setTimeout(fire, 500);
	};

	generateMonthName = () => {
		const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const d = new Date();
		return `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
	};

	generateCalendar = () => {
		const date = new Date();
		const y = date.getFullYear();
		const m = date.getMonth();
		const currentDate = date.getDate();
		const firstDayOfWeek = new Date(y, m, 1).getDay();
		const firstDay = new Date(y, m, 1).getDate();
		const lastDay = new Date(y, (m + 1), 0).getDate();
		const dayNumbers = [];

		for (let x = 0; x < firstDayOfWeek; x++) {dayNumbers.push("");}
		for(let i = firstDay; i <= lastDay; i++) {dayNumbers.push(i);}

		return (
			<div className="calendar_days">
				{["S", "M", "T", "W", "T", "F", "S"].map(day => <div className="day week" key={`day_${day}`}>{day}</div>)}
				{dayNumbers.map(number => <div key={`day_${number}`} className={`day${number === currentDate ? " today" : ""}`}>{number}</div>)}
			</div>
		);
	};

	determinePictureSize = () => {
		const screenWidth = window.innerWidth;
		if (screenWidth > 2000) return "full";
		else if (screenWidth > 1000) return "regular";
		else return "small";
	};

    render() {
    	const { result } = this.props;

        return result ? (
            <section className="component_calendar">
            	<div className="img_wrapper" style={{transform: `translate(-${(this.state.width / 2)}px, 0)`}}>
            		<h1 className="calendar_month_year">{this.generateMonthName()}</h1>
	            	<img
	            		ref={node => this.img_node = node}
	            		src={result.urls[this.determinePictureSize()]}
	            		alt={result.alt_description} />
	            	<div className="calendar_content" style={{height: this.state.height, width: this.state.width}}>
	            		{this.generateCalendar()}
	            	</div>
	            </div>
            </section>
        ) : (
        	<section className="component_calendar no_result">
        		<h6>Oops! We couldn't find a match for your search. Maybe try again?</h6>
        	</section>
        );
    }
}
