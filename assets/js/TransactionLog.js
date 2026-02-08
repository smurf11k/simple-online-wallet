class TransactionLog {
  static log(message) {
    const line = `[${new Date().toLocaleTimeString()}] ${message}`;
    document.getElementById("log").innerHTML += line + "<br>";
  }
}
