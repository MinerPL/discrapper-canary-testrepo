var r = n(706178);
(e.exports = m), (m.simpleSieve = h), (m.fermatTest = p);
var i = n(814033),
    a = new i(24),
    s = new (n(687363))(),
    o = new i(1),
    l = new i(2),
    u = new i(5);
new i(16), new i(8);
var c = new i(10),
    d = new i(3);
new i(7);
var _ = new i(11),
    E = new i(4);
new i(12);
var f = null;
function h(e) {
    for (
        var t = (function () {
                if (null !== f) return f;
                var e = [];
                e[0] = 2;
                for (var t = 1, n = 3; n < 1048576; n += 2) {
                    for (var r = Math.ceil(Math.sqrt(n)), i = 0; i < t && e[i] <= r && n % e[i] != 0; i++);
                    (t === i || !(e[i] <= r)) && (e[t++] = n);
                }
                return (f = e), e;
            })(),
            n = 0;
        n < t.length;
        n++
    )
        if (0 === e.modn(t[n])) {
            if (0 !== e.cmpn(t[n])) return !1;
            break;
        }
    return !0;
}
function p(e) {
    var t = i.mont(e);
    return 0 === l.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1);
}
function m(e, t) {
    var n, f;
    if (e < 16) return 2 === t || 5 === t ? new i([140, 123]) : new i([140, 39]);
    for (t = new i(t); ; ) {
        for (n = new i(r(Math.ceil(e / 8))); n.bitLength() > e; ) n.ishrn(1);
        if ((n.isEven() && n.iadd(o), !n.testn(1) && n.iadd(l), t.cmp(l))) {
            if (!t.cmp(u)) for (; n.mod(c).cmp(d); ) n.iadd(E);
        } else for (; n.mod(a).cmp(_); ) n.iadd(E);
        if (h((f = n.shrn(1))) && h(n) && p(f) && p(n) && s.test(f) && s.test(n)) return n;
    }
}
