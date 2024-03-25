var i = "\ud800-\udfff",
  a = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  l = "\ud83c[\udffb-\udfff]",
  s = "[^" + i + "]",
  o = "(?:\ud83c[\udde6-\uddff]){2}",
  r = "[\ud800-\udbff][\udc00-\udfff]",
  d = "(?:" + a + "|" + l + ")?",
  u = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [s, o, r].join("|") + ")" + u + d + ")*",
  f = RegExp(l + "(?=" + l + ")|" + ("(?:" + [s + a + "?", a, o, r, "[" + i + "]"].join("|") + ")") + (u + d + c), "g");
e.exports = function(e) {
  return e.match(f) || []
}