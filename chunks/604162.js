n.d(t, {
    F9: function () {
        return s;
    },
    G6: function () {
        return u;
    },
    JC: function () {
        return o;
    },
    yv: function () {
        return l;
    }
}),
    n(47120);
var r = n(192379),
    i = n(918701),
    a = n(388032);
let s = (e) => {
        let t = (0, i.si)(e);
        return e.percentComplete > 0 ? a.intl.formatToPlainString(a.t['c59/Tk'], { remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) }) : a.intl.formatToPlainString(a.t.GNsKiY, { remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) });
    },
    o = (e) => null != e.text;
function l(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [i, a] = (0, r.useState)(e),
        s = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () => () => {
                null != s.current && clearTimeout(s.current);
            },
            [e]
        ),
        [
            i,
            () => {
                a(t),
                    null != s.current && clearTimeout(s.current),
                    (s.current = setTimeout(() => {
                        a(e);
                    }, n));
            }
        ]
    );
}
