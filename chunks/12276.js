var t = '\uD800-\uDFFF',
  n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
  i = '\uD83C[\uDFFB-\uDFFF]',
  s = '[^' + t + ']',
  a = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
  o = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
  r = '(?:' + n + '|' + i + ')?',
  l = '[\\ufe0e\\ufe0f]?',
  c = '(?:\\u200d(?:' + [
s,
a,
o
  ].join('|') + ')' + l + r + ')*',
  d = RegExp(i + '(?=' + i + ')|' + ('(?:' + [
s + n + '?',
n,
a,
o,
'[' + t + ']'
  ].join('|') + ')') + (l + r + c), 'g');
e.exports = function(e) {
  return e.match(d) || [];
};