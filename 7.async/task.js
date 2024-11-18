class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }


addClock (startTime, callback) {
    if(!startTime || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
    }
    else if(this.alarmCollection.includes(startTime)) {
        console.warn('Уже присутствует звонок на это же время');
    }
    let canCall = true;
    const alarm = {callback, startTime, canCall};
    this.alarmCollection.push(alarm);
}

removeClock(startTime) {
    const deleteAlarm = this.alarmCollection.filter(element => element.startTime === startTime);
    deleteAlarm.splice(0);
}

getCurrentFormattedTime() {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    const now = hour + ':' + minutes;
    return now;
}

start(intervalId) {
    if(this.intervalId) {
        return;
    }
    
    const that = AlarmClock;
    function startAlarm() {
        that.alarmCollection.forEach((element) => {
            if(that.startTime === now && that.canCall === true) {
                that.canCall === false;
                callback();
            }
        });
    }
    let intervalID = setInterval(startAlarm, 1000);
    that.intervalId = intervalID;
}

stop() {
    clearInterval();
    this.intervalId = null;
}

resetAllCalls() {
    this.alarmCollection.forEach((element) => {
        this.canCall = true;
    });
}

clearAlarms() {
    stop();
    this.alarmCollection = [];
}
}