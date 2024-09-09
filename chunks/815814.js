var r = n(640767),
    i = n(393020),
    a = n(493883),
    s = n(414916),
    o = n(383718),
    l = n(713720),
    u = n(1213),
    c = n(124084),
    d = n(581527),
    _ = n(192853),
    E = n(163494),
    f = Object('a'),
    h = 'a' !== f[0] || !(0 in f),
    p = _('String.prototype.split');
e.exports = function (e) {
    var t,
        n = c(this),
        _ = u((h && E(n) ? p(n, '') : n).length);
    if (!l(e)) throw TypeError('Array.prototype.map callback must be a function');
    arguments.length > 1 && (t = arguments[1]);
    for (var f = r(n, _), m = 0; m < _; ) {
        var I = d(m);
        if (o(n, I)) {
            var T = i(e, t, [s(n, I), m, n]);
            a(f, I, T);
        }
        m += 1;
    }
    return f;
};
