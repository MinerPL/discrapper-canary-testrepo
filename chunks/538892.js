var t = '\uD800-\uDFFF',
    n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
    r = '\uD83C[\uDFFB-\uDFFF]',
    i = '[^' + t + ']',
    a = '(?:\uD83C[\uDDE6-\uDDFF]){2}',
    s = '[\uD800-\uDBFF][\uDC00-\uDFFF]',
    o = '(?:' + n + '|' + r + ')?',
    l = '[\\ufe0e\\ufe0f]?',
    u = '(?:\\u200d(?:' + [i, a, s].join('|') + ')' + l + o + ')*',
    c = RegExp(r + '(?=' + r + ')|' + ('(?:' + [i + n + '?', n, a, s, '[' + t + ']'].join('|') + ')') + (l + o + u), 'g');
e.exports = function (e) {
    return e.match(c) || [];
};
