var a = s("447479"),
  l = s("658141"),
  n = s("401427"),
  i = RegExp("['’]", "g");
e.exports = function(e) {
  return function(t) {
    return a(n(l(t).replace(i, "")), e, "")
  }
}