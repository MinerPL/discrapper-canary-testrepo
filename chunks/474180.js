var e = r(936940), o = r(354848), i = /#|\.prototype\./, u = function (t, n) {
        var r = f[c(t)];
        return r === s || r !== a && (o(n) ? e(n) : !!n);
    }, c = u.normalize = function (t) {
        return String(t).replace(i, '.').toLowerCase();
    }, f = u.data = {}, a = u.NATIVE = 'N', s = u.POLYFILL = 'P';
t.exports = u;
