function getSplittedHalf<T> (data: Array<T>): Array<T> {
    const middle = data.length / 2
    return data.splice(0, middle)
}

function toString<T>(data: T): string {
    switch (typeof data) {
     
        case 'boolean':
            return String(data).toString()
     
        case 'undefined':
            return String(data).toString()
                
        case 'function':
            return JSON.stringify(data)

        case 'object':
            return JSON.stringify(data)
        
        default:
            if (data) {
                return data.toString()
            } else return 'error to convert'
        
    }
}

console.log(toString({to: 1}))
console.log(toString([1, 3, 'to']))
console.log(toString(Symbol('test')))
console.log(toString(1))
console.log(toString('test'))
console.log(toString(false))
console.log(toString(() => {}))
console.log(toString(function test1() {return false}))
console.log(toString(undefined))
console.log(toString(null))

console.log('null', null == null)

interface ITest {
    first: string
}

type test = {
    test1: ITest
}