n.d(t, {
    Ay: function () {
        return c;
    },
    He: function () {
        return _;
    },
    K_: function () {
        return l;
    },
    Qh: function () {
        return o;
    },
    ZB: function () {
        return d;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(55935),
    s = n(70956);
let o = {
        t: (e) => (0, a.vc)(e, 'LT'),
        T: (e) => (0, a.vc)(e, 'LTS'),
        d: (e) => (0, a.vc)(e, 'L'),
        D: (e) => (0, a.vc)(e, 'LL'),
        f: (e) => (0, a.vc)(e, 'LLL'),
        F: (e) => (0, a.vc)(e, 'LLLL'),
        R: (e) => {
            let t = i().relativeTimeThreshold('s');
            i().relativeTimeThreshold('s', 60);
            let n = i().relativeTimeThreshold('ss');
            i().relativeTimeThreshold('ss', -1);
            let r = i().relativeTimeThreshold('m');
            i().relativeTimeThreshold('m', 60);
            let a = null;
            try {
                a = i()(e.toDate()).fromNow();
            } catch (e) {}
            return i().relativeTimeThreshold('s', t), i().relativeTimeThreshold('ss', n), i().relativeTimeThreshold('m', r), null != a ? a : i()(e.toDate()).fromNow();
        }
    },
    l = 'f';
Object.setPrototypeOf(o, null);
let u = Object.keys(o).join('|'),
    c = new RegExp('^<t:(-?\\d{1,17})(?::('.concat(u, '))?>'));
function d(e, t) {
    let n = i()(Number(e) * s.Z.Millis.SECOND);
    if (!n.isValid()) return null;
    let r = null != t ? o[t] : void 0;
    return (
        null == r && (r = o[l]),
        {
            timestamp: e,
            format: t,
            parsed: n,
            full: o.F(n),
            formatted: r(n)
        }
    );
}
function _(e, t) {
    return null != t ? '<t:'.concat(e, ':').concat(t, '>') : '<t:'.concat(e, '>');
}
