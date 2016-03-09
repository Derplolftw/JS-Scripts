function log(text,type) {
  switch(type) {
    case "error":
      console.log("ERROR: " + text)
    break;
    case "warning":
      console.log("WARNING: " + text)
    break;
    case "important":
      console.log("IMPORTANT: " + text)
    break;
  }
}
