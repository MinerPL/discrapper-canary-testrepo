var e = n(936940),
    i = n(879);
t.exports = !e(function () {
    var t = Error('a');
    return !('stack' in t) || (Object.defineProperty(t, 'stack', i(1, 7)), 7 !== t.stack);
});
