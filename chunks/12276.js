var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    s = '\uD83C[\uDFFB-\uDFFF]',
    a = '[^' + t + ']',
    i = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    r = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    l = '(?:' + n + '|' + s + ')?',
    o = '[\\ufe0e\\ufe0f]?',
    c = '(?:\\u200d(?:' + [a, i, r].join('|') + ')' + o + l + ')*',
    d = RegExp(s + '(?=' + s + ')|' + ('(?:' + [a + n + '?', n, i, r, '[' + t + ']'].join('|') + ')') + (o + l + c), 'g');
e.exports = function (e) {
    return e.match(d) || [];
};
