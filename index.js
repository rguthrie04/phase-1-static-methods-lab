class Formatter {
  static capitalize(capWord) {
    return capWord.charAt(0).toUpperCase()+capWord.slice(1)
  }

  static sanitize(removeNums) {
    return removeNums.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const final = []
    const arrayOfWords = sentence.split(" ")
        for (let i = 0; i < arrayOfWords.length; i++){
      if( i == 0) {
        final.push(this.capitalize(arrayOfWords[i]))
      } else {
        if (exceptions.includes(arrayOfWords[i])){
          final.push(arrayOfWords[i])
          } else{
            final.push(this.capitalize(arrayOfWords[i]))
          }
        }
      }
      return final.join(" ")
      
}
}