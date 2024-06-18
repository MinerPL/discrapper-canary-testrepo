var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\ud83c[\udffb-\udfff]",
  s = "[^" + t + "]",
  l = "(?:\ud83c[\udde6-\uddff]){2}",
  a = "[\ud800-\udbff][\udc00-\udfff]",
  o = "(?:" + n + "|" + i + ")?",
  r = "[\\ufe0e\\ufe0f]?",
  d = "(?:\\u200d(?:" + [s, l, a].join("|") + ")" + r + o + ")*",
  c = RegExp(i + "(?=" + i + ")|" + ("(?:" + [s + n + "?", n, l, a, "[" + t + "]"].join("|") + ")") + (r + o + d), "g");
e.exports = function(e) {
  return e.match(c) || []
}