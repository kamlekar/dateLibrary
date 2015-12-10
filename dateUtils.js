/**
 * This is pure javascript library for add on Date functions
 * Free to use by any one just don't forget to credit the author
 * Author: Vamsi Krishna Kollipara
 */
(function(w){
	// Instead of adding the methods to JavaScript's Date object, you can add a wrapper here if needed
	var newDate = w.Date;
	newDate.monthFullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	newDate.monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
	newDate.monthLetters = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

	newDate.DayFullNames = ["Sunday", "Monday", "Tuesday", "WednesDay", "Thursday", "Friday", "Saturday"];
	newDate.DayShortNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	newDate.DayLetters = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

	newDate.daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
	newDate.daysInMonthLeapYear = [31,29,31,30,31,30,31,31,30,31,30,31];


	newDate.prototype.getFullMonthName = function() {
		return newDate.monthFullNames[this.getMonth()];
	}
	newDate.prototype.getShortMonthName = function() {
		return newDate.monthShortNames[this.getMonth()];
	}
	newDate.prototype.getMonthLetter = function() {
		return newDate.monthLetters[this.getMonth()];
	}

	newDate.prototype.getFullDayName = function() {
		return newDate.DayFullNames[this.getDay()];
	}
	newDate.prototype.getShortDayName = function() {
		return newDate.DayShortNames[this.getDay()];
	}
	newDate.prototype.getDayLetter = function() {
		return newDate.DayLetters[this.getDay()];
	}

	newDate.prototype.getWeek = function() {
	}

	newDate.prototype.addDays = function(days) {
		return new newDate(this.setDate(this.getDate() + days));
	}
	newDate.prototype.removeDays = function(days) {
		return new newDate(this.setDate(this.getDate() - days));
	}

	newDate.prototype.addMonths = function(months) {
		return new newDate(this.setMonth(this.getMonth() + months));
	}
	newDate.prototype.removeMonths = function(months) {
		return new newDate(this.setMonth(this.getMonth() - months));
	}

	newDate.prototype.addYears = function(years) {
		return new newDate(this.setFullYear(this.getFullYear() + years));
	}
	newDate.prototype.removeYears = function(years) {
		return new newDate(this.setFullYear(this.getFullYear() - years));
	}

	newDate.prototype.addHours = function(hours) {
		return new newDate(this.setHours(this.getHours() + hours));
	}
	newDate.prototype.removeHours = function(hours) {
		return new newDate(this.setHours(this.getHours() - hours));
	}

	newDate.prototype.addMinutes = function(minutes) {
		return new newDate(this.setMinutes(this.getMinutes() + minutes));
	}
	newDate.prototype.removeMinutes = function(minutes) {
		return new newDate(this.setMinutes(this.getMinutes() - minutes));
	}

	newDate.prototype.addSeconds = function(seconds) {
		return new newDate(this.setSeconds(this.getSeconds() + seconds));
	}
	newDate.prototype.removeSeconds = function(seconds) {
		return new newDate(this.setSeconds(this.getSeconds() - seconds));
	}

	newDate.prototype.addMilliSeconds = function(ms) {
		return new newDate(this.setMilliseconds(this.getMilliseconds() + ms));
	}
	newDate.prototype.removeMilliSeconds = function(ms) {
		return new newDate(this.setMilliseconds(this.getMilliseconds() - ms));
	}

	newDate.prototype.compareWith = function() {
	}
	newDate.prototype.isBetween = function(firstDate, secondDate) {
		return (firstDate < this && secondDate > this)
	}

	newDate.prototype.isSunday =function() {
		return (this.getDay()==0);
	}
	newDate.prototype.isMonday =function() {
		return (this.getDay()==1);
	}
	newDate.prototype.isTuesday =function() {
		return (this.getDay()==2);
	}
	newDate.prototype.isWednesday =function() {
		return (this.getDay()==3);
	}
	newDate.prototype.isThursday =function() {
		return (this.getDay()==4);
	}
	newDate.prototype.isFriday =function() {
		return (this.getDay()==5);
	}
	newDate.prototype.isSaturday =function() {
		return (this.getDay()==6);
	}


	/*
	 * dateOptions @Object
	 * dateOptions = {
	 * "year":
	 * "month":
	 * "date":
	 * "hours":
	 * "minutes":
	 * "seconds":
	 * "milliSeconds":
	 * }
	 */
	newDate.prototype.add = function(dateOptions) {
		if(!isNaN(dateOptions.year)) {
			this.setFullYear(dateOptions.year)
		}
		
		if(!isNaN(dateOptions.month)) {
			this.setMonth(dateOptions.month)
		}
		
		if(!isNaN(dateOptions.hours)) {
			this.setHours(dateOptions.hours)
		}
		
		if(!isNaN(dateOptions.minutes)) {
			this.setMinutes(dateOptions.minutes)
		}
		
		if(!isNaN(dateOptions.seconds)) {
			this.setSeconds(dateOptions.seconds)
		}
		
		if(!isNaN(dateOptions.milliSeconds)) {
			this.setMilliSeconds(dateOptions.milliSeconds)
		}	
	}
	newDate.prototype.remove = function(dateOptions) {
	}
	newDate.prototype.set = function(dateOptions) {
	}
	newDate.prototype.get = function() {
	}

	newDate.prototype.clearTime = function() {
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliSeconds(0);
		return new newDate(this);
	}
	newDate.prototype.isEqualTo = function(date) {
	}

	newDate.prototype.moveToEndOfWeek = function() {
		return new newDate(this.addDays(6-this.getDay()));
	}
	newDate.prototype.moveToEndOfMonth = function() {
		return new newDate(this.addDays(this.daysInMonth()-this.getDate()))
	}
	newDate.prototype.moveToEndOfYear = function() {
		this.setMonth(11);
		return new newDate(this.setDate(31));
	}

	newDate.prototype.moveToStartOfWeek = function() {
		return new newDate(this.removeDays(this.getDay()));
	}
	newDate.prototype.moveToStartOfMonth = function() {
		return new newDate(this.removeDays(this.getDate()-1));
	}
	newDate.prototype.moveToStartOfYear = function() {
		this.removeDays(this.getDate()-1)
		return new newDate(this.removeMonths(this.getMonth()));
	}


	newDate.prototype.isWeekDay = function() {
		return !(this.getDay() == 0 || this.getDay() == 6);
	}
	newDate.prototype.isWeekEnd = function() {
		return (this.getDay() == 0 || this.getDay() == 6);
	}
	newDate.prototype.isEndOfWeek = function() {
		return (this.getDay() == 0 || this.getDay() == 6);
	}
	newDate.prototype.isEndOfMonth = function() {
		return (this.isLeapYear() ? (this.getDate() == Date.daysInMonthLeapYear[this.getMonth()]) : (this.getDate() == Date.daysInMonth[this.getMonth()]));  
	}
	newDate.prototype.isEndOfYear = function() {
		var x=new Date(this);
		return (x.addDays(1).getMonth() == 0);
	}

	newDate.prototype.isLeapYear = function() {
		return ((this.getFullYear() % 4 == 0) && (this.getFullYear() % 100 != 0)) || (this.getFullYear() % 400 == 0);
	}
	newDate.prototype.daysInMonth = function() {
		return (this.isLeapYear() ? (Date.daysInMonthLeapYear[this.getMonth()]) : (Date.daysInMonth[this.getMonth()])); 
	}
	newDate.prototype.next = function() {
		return this.addDays(1);
	}

	newDate.prototype.previous = function() {
		return this.removeDays(1);
	}

	newDate.prototype.getWeekNumber = function() {
		var onejan = new Date(this.getFullYear(),0,1);
		var nowDate = this
		return Math.ceil((((nowDate - onejan) / 86400000) + onejan.getDay()+1)/7);
	}
})(window);
