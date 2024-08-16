var s = n(851707),
    a = n(263604),
    i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    r = RegExp('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]', 'g');
e.exports = function (e) {
    return (e = a(e)) && e.replace(i, s).replace(r, '');
};
