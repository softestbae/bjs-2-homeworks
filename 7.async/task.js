class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }


addClock (time, callback) {
    if(!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
    }
    else if(this.alarmCollection.includes(time)) {
        console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({callback, time, canCall: true});
}

removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(element => element.time !== time);
    return this.alarmCollection;
}

getCurrentFormattedTime() {
    const date = new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
    return date;
}

start(intervalId) {
    if(this.intervalId) {
        return;
    }
    
    this.intervalId = setInterval(startAlarm(() => {
        this.alarmCollection.forEach((element) => {
            if(element.time === this.getCurrentFormattedTime() && element.canCall === true) {
                this.canCall = false;
                element.callback();
            }
         })
    }), 1000);
}


stop(intervalId) {
    clearInterval(intervalId);
    this.intervalId = null;
}

resetAllCalls() {
    this.alarmCollection.forEach((element) => {
        element.canCall = true;
    });
}

clearAlarms() {
    this.stop();
    this.alarmCollection = [];
}
}