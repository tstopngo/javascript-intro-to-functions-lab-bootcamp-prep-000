function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var spy = "log"
  console.log (`${string.toUpperCase}`)
  console.log (spy)
}

