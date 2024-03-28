var t = "\ud800-\udfff",
  s = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  a = "\ud83c[\udffb-\udfff]",
  l = "[^" + t + "]",
  n = "(?:\ud83c[\udde6-\uddff]){2}",
  i = "[\ud800-\udbff][\udc00-\udfff]",
  r = "(?:" + s + "|" + a + ")?",
  o = "[\\ufe0e\\ufe0f]?",
  d = "(?:\\u200d(?:" + [l, n, i].join("|") + ")" + o + r + ")*",
  u = RegExp(a + "(?=" + a + ")|" + ("(?:" + [l + s + "?", s, n, i, "[" + t + "]"].join("|") + ")") + (o + r + d), "g");
e.exports = function(e) {
  return e.match(u) || []
}