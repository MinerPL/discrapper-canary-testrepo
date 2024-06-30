n.d(t, {
    N4: function () {
        return o;
    },
    uZ: function () {
        return a;
    },
    zk: function () {
        return i;
    }
});
var r = n(470079);
function i(e, t, n) {
    let [i, a] = (0, r.useState)(e || t), o = (0, r.useRef)(void 0 !== e), s = void 0 !== e;
    (0, r.useEffect)(() => {
        let e = o.current;
        e !== s && console.warn(`WARN: A component changed from ${ e ? 'controlled' : 'uncontrolled' } to ${ s ? 'controlled' : 'uncontrolled' }.`), o.current = s;
    }, [s]);
    let l = s ? e : i, u = (0, r.useCallback)((e, ...t) => {
            let r = (e, ...t) => {
                n && !Object.is(l, e) && n(e, ...t), !s && (l = e);
            };
            if ('function' == typeof e) {
                console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');
                a((n, ...i) => {
                    let a = e(s ? l : n, ...i);
                    return (r(a, ...t), s) ? n : a;
                });
            } else
                !s && a(e), r(e, ...t);
        }, [
            s,
            l,
            n
        ]);
    return [
        l,
        u
    ];
}
function a(e, t = -1 / 0, n = 1 / 0) {
    return Math.min(Math.max(e, t), n);
}
function o(e, t, n, r) {
    t = Number(t), n = Number(n);
    let i = (e - (isNaN(t) ? 0 : t)) % r, a = 2 * Math.abs(i) >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i;
    isNaN(t) ? !isNaN(n) && a > n && (a = Math.floor(n / r) * r) : a < t ? a = t : !isNaN(n) && a > n && (a = t + Math.floor((n - t) / r) * r);
    let o = r.toString(), s = o.indexOf('.'), l = s >= 0 ? o.length - s : 0;
    if (l > 0) {
        let e = Math.pow(10, l);
        a = Math.round(a * e) / e;
    }
    return a;
}
