class Formatter {

  static capitalize(string) {
    return string.charAt().toUpperCase() + string.slice(1)

  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')

  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let final = [];
    let arrayOfWords = string.split(" ")
    for ( let i = 0; i < arrayOfWords.length; i++) {
      if ( i == 0 ) {
        final.push(this.capitalize( arrayOfWords[i]))
      } else {
        if (exceptions.includes(arrayOfWords[i])) {
          final.push(arrayOfWords[i])
        } else {
          final.push(this.capitalize(arrayOfWords[i]))
        }
      }

    }
    return final.join( " " );
  }
  //add static methods here
}