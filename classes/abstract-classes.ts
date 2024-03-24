abstract class Logger {

    abstract log(message: any): void

    printDate() {
        this.log(new Date())
    }
}

class ChildLogger extends Logger {
    log(message: any): void {
        console.log(message)
    }

    logWithDate() {
        this.log(new Date())
        console.log('Message test')
    }
}

const test = new ChildLogger()

test.logWithDate()
