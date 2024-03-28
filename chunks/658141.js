var a = s("851707"),
  l = s("263604"),
  n = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  i = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
e.exports = function(e) {
  return (e = l(e)) && e.replace(n, a).replace(i, "")
}