var i = "\ud800-\udfff",
  a = "\\u2700-\\u27bf",
  l = "a-z\\xdf-\\xf6\\xf8-\\xff",
  s = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  o = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  r = "['’]",
  d = "[" + o + "]",
  u = "[" + l + "]",
  c = "[^" + i + o + "\\d+" + a + l + s + "]",
  f = "(?:\ud83c[\udde6-\uddff]){2}",
  h = "[\ud800-\udbff][\udc00-\udfff]",
  p = "[" + s + "]",
  g = "(?:" + u + "|" + c + ")",
  m = "(?:" + r + "(?:d|ll|m|re|s|t|ve))?",
  E = "(?:" + r + "(?:D|LL|M|RE|S|T|VE))?",
  S = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
  v = "[\\ufe0e\\ufe0f]?",
  y = "(?:\\u200d(?:" + ["[^" + i + "]", f, h].join("|") + ")" + v + S + ")*",
  O = "(?:" + ["[" + a + "]", f, h].join("|") + ")" + (v + S + y),
  C = RegExp([p + "?" + u + "+" + m + "(?=" + [d, p, "$"].join("|") + ")", "(?:" + p + "|" + c + ")+" + E + "(?=" + [d, p + g, "$"].join("|") + ")", p + "?" + g + "+" + m, p + "+" + E, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", O].join("|"), "g");
e.exports = function(e) {
  return e.match(C) || []
}