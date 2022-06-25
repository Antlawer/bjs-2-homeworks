class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;  //id
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text')
        }

        if (this.alarmCollection.some(element => element.id === id)) {
            console.error('уже существует');
        } else {
            this.alarmCollection.push({
                id: id,
                time: time,
                callback: callback
            });
        }   
    }

    removeClock(id) {
        const lenStart = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
        const lenEnd = this.alarmCollection.length;
        return lenStart > lenEnd
    }

    getCurrentFormattedTime() {
        const curTime = new Date();
        const hoursMin = curTime.toTimeString().slice(0, 5);
        return hoursMin;
    }

    start() {
        if (this.timerId === null) {
            const checkClock = () => {
                this.alarmCollection.forEach(element => {
                    if(element.time === this.getCurrentFormattedTime()) {
                        element.callback();
                    }
                });
            }

            this.timerId = setInterval(checkClock, 1000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => {
            console.log(`${element.id} и ${element.time}`);
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}

function testCase() {
    const clock = new AlarmClock();
    clock.addClock(clock.getCurrentFormattedTime(), () => {console.log("Пора вставать")}, 1);
    clock.addClock((clock.getCurrentFormattedTime() + 1), () => {
        console.log("Пора вставать");
        clock.removeClock(2);
    }, 2);
    clock.addClock((clock.getCurrentFormattedTime() + 2), () => {console.log("Пора вставать")}, 3)
    clock.stop();
    clock.clearAlarms();
    clock.printAlarms();
}
