export class Clock {
    constructor(timeInSeconds) {
        this.timeGiven = timeInSeconds
        this.timeElapsed = 0
        this.timeLeft = timeInSeconds
        this.intervalId = null
    }
}

Clock.prototype.startCountdown = function () {
    this.intervalId = setInterval(() => {
        this.timeElapsed += 1
        if (this.timeLeft) {
            this.timeLeft -= 1
        }
    }, 1000)
}

Clock.prototype.stopCountdown = function () {
    clearInterval(this.intervalId)
}

Clock.prototype.resetCountdown = function () {
    this.timeElapsed = 0
    this.timeLeft = this.timeGiven
}