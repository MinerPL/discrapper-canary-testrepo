var e = r(926515), o = r(622281), i = r(323979), u = r(995739), c = r(337856), f = r(641236), a = TypeError, s = f('toPrimitive');
t.exports = function (t, n) {
    if (!o(t) || i(t))
        return t;
    var r, f = u(t, s);
    if (f) {
        if (void 0 === n && (n = 'default'), !o(r = e(f, t, n)) || i(r))
            return r;
        throw a('Can\'t convert object to primitive value');
    }
    return void 0 === n && (n = 'number'), c(t, n);
};
