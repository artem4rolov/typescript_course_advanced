abstract class Logger {

    abstract log(): void

    printDate(date: Date) {
        console.log(date)
    }
}

class ChildLogger extends Logger {
    log(): void {
        
    }

    logWithDate() {
        
    }
    
}