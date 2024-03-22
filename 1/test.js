
  function findMiddle(string) {
    if (string.length % 2 === 1) {
      console.log(string[Math.round(string.length / 2) - 1])
      return string[Math.round(string.length / 2) - 1]
    } else {
      console.log([string[Math.round(string.length / 2) - 1], string[Math.round(string.length / 2)] ].join(''))
      return [string[Math.round(string.length / 2) - 1], string[Math.round(string.length / 2)] ].join()
    }
  }

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

findMiddle("test")
findMiddle( "testing")