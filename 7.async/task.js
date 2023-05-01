class AlarmClock {
	constructor(alarmCollection, intervalId) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null) {
			throw new Error("Отсутствуют обязательные аргументы");
		} else if (callback === undefined) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		for (let alarm of this.alarmCollection) {
			if (alarm.time === time) {
				console.warn("Уже присутствует звонок на это же время");
			}
		}
		const obj = {
			time,
			callback,
			canCall: true,
		};
		this.alarmCollection.push(obj);
	}

	removeClock(time) {
		let calls = this.alarmCollection.filter((object) => object.time !== time);
		this.alarmCollection = calls;
	}

	getCurrentFormattedTime() {
		let time = new Date();
		return time.toLocaleTimeString().slice(0, -3);
	}

	start() {
		if (this.intervalId) {
			return;
		}
		setInterval(() => this.alarmCollection.forEach((call) => {
				if (
					call.time === this.getCurrentFormattedTime() &&
					call.canCall === true
				) {
					call.canCall = false;
					call.callback();
				}
			}),
			1000
		);

	}

	stop() {
		clearInterval(this.alarmCollection);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((call) => (call.canCall = true));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}