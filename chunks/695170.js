n.d(t, {
    $e: function () {
        return T;
    },
    DY: function () {
        return A;
    },
    Eg: function () {
        return u;
    },
    FO: function () {
        return m;
    },
    J_: function () {
        return c;
    },
    L1: function () {
        return S;
    },
    Od: function () {
        return N;
    },
    VQ: function () {
        return s;
    },
    ZY: function () {
        return R;
    },
    d9: function () {
        return g;
    },
    fv: function () {
        return f;
    },
    gE: function () {
        return v;
    },
    qb: function () {
        return d;
    },
    t2: function () {
        return i;
    },
    wz: function () {
        return I;
    },
    zU: function () {
        return h;
    }
});
var r = n(686942),
    i = function (e, t, n, r, i, a) {
        return void 0 === r && (r = 0), void 0 === i && (i = 0), void 0 === a && (a = 0), new Date(Date.UTC(e, t - 1, n, r, i, a));
    },
    a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    s = 9999,
    o = i(1970, 1, 1),
    l = [6, 0, 1, 2, 3, 4, 5],
    u = function (e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    },
    c = function (e) {
        return e instanceof Date;
    },
    d = function (e) {
        return c(e) && !isNaN(e.getTime());
    },
    _ = function (e) {
        return 60000 * e.getTimezoneOffset();
    },
    E = function (e, t) {
        var n = e.getTime() - _(e),
            r = t.getTime() - _(t);
        return Math.round((n - r) / 86400000);
    },
    f = function (e) {
        return E(e, o);
    },
    h = function (e) {
        return new Date(o.getTime() + 86400000 * e);
    },
    p = function (e) {
        var t = e.getUTCMonth();
        return 1 === t && u(e.getUTCFullYear()) ? 29 : a[t];
    },
    m = function (e) {
        return l[e.getUTCDay()];
    },
    I = function (e, t) {
        var n = i(e, t + 1, 1);
        return [m(n), p(n)];
    },
    T = function (e, t) {
        return (t = t || e), new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    },
    g = function (e) {
        return new Date(e.getTime());
    },
    S = function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(g(e[n]));
        return t;
    },
    A = function (e) {
        e.sort(function (e, t) {
            return e.getTime() - t.getTime();
        });
    },
    N = function (e, t) {
        void 0 === t && (t = !0);
        var n = new Date(e);
        return [(0, r.Sk)(n.getUTCFullYear().toString(), 4, '0'), (0, r.Sk)(n.getUTCMonth() + 1, 2, '0'), (0, r.Sk)(n.getUTCDate(), 2, '0'), 'T', (0, r.Sk)(n.getUTCHours(), 2, '0'), (0, r.Sk)(n.getUTCMinutes(), 2, '0'), (0, r.Sk)(n.getUTCSeconds(), 2, '0'), t ? 'Z' : ''].join('');
    },
    v = function (e) {
        var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
        if (!t) throw Error('Invalid UNTIL value: '.concat(e));
        return new Date(Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[5], 10) || 0, parseInt(t[6], 10) || 0, parseInt(t[7], 10) || 0));
    },
    O = function (e, t) {
        return e.toLocaleString('sv-SE', { timeZone: t }).replace(' ', 'T') + 'Z';
    },
    R = function (e, t) {
        var n = new Date(O(e, Intl.DateTimeFormat().resolvedOptions().timeZone)),
            r = new Date(O(e, null != t ? t : 'UTC')).getTime() - n.getTime();
        return new Date(e.getTime() - r);
    };
