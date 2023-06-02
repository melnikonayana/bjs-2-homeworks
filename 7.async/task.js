class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(newTime, newCallback) {
        if (!newTime || !newCallback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        const newArr = this.alarmCollection.filter((value) => value.time === newTime);
        if (newArr.length > 0) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({callback: newCallback, time: newTime, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((value) => value.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString('ru-RU', {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach((value) => {
            if (value.time === this.getCurrentFormattedTime() && value.canCall) {
                value.canCall = false;
                value.callback();
            }
        }, 1000));
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach((value) => {
            value.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}