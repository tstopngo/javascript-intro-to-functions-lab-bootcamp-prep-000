function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log (`${string.toUpperCase()}`)
}

function logWhisper(string){
  console.log(`${string.toLowerCase()}`)
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) {
    return "I cant hear you!"
  }
  else if (string === "I love you, Grandma.") {
    return "YES INDEED!"
  }
  else{
  return "I love you, too."
  }
}


