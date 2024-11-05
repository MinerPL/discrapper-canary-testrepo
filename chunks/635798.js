n.d(t, {
    x: function () {
        return a;
    }
});
var r = n(239700),
    i = n(192379);
function a(e) {
    var t;
    let { isDisabled: n = !1, minValue: a = 0, maxValue: u = 100, numberFormatter: c, step: d = 1, orientation: f = 'horizontal' } = e,
        _ = (0, i.useMemo)(() => {
            let e = (u - a) / 10;
            return Math.max((e = (0, r.N4)(e, 0, e + d, d)), d);
        }, [d, u, a]),
        h = (0, i.useMemo)(() => o(e.value), [e.value]),
        p = (0, i.useMemo)(() => (null !== (t = o(e.defaultValue)) && void 0 !== t ? t : [a]), [e.defaultValue, a]),
        m = l(e.value, e.defaultValue, e.onChange),
        g = l(e.value, e.defaultValue, e.onChangeEnd),
        [E, v] = (0, r.zk)(h, p, m),
        [I, S] = (0, i.useState)(Array(E.length).fill(!1)),
        T = (0, i.useRef)(Array(E.length).fill(!0)),
        [b, y] = (0, i.useState)(void 0),
        A = (0, i.useRef)(E),
        N = (0, i.useRef)(I),
        C = (e) => {
            (A.current = e), v(e);
        },
        R = (e) => {
            (N.current = e), S(e);
        };
    function O(e) {
        return (e - a) / (u - a);
    }
    function D(e) {
        return 0 === e ? a : E[e - 1];
    }
    function L(e) {
        return e === E.length - 1 ? u : E[e + 1];
    }
    function x(e) {
        return T.current[e];
    }
    function w(e, t) {
        if (n || !x(e)) return;
        let i = D(e),
            a = L(e);
        (t = (0, r.N4)(t, i, a, d)), C(s(A.current, e, t));
    }
    function M(e) {
        return c.format(e);
    }
    function P(e) {
        let t = e * (u - a) + a;
        return (0, r.uZ)(Math.round((t - a) / d) * d + a, a, u);
    }
    return {
        values: E,
        getThumbValue: (e) => E[e],
        setThumbValue: w,
        setThumbPercent: function (e, t) {
            w(e, P(t));
        },
        isThumbDragging: (e) => I[e],
        setThumbDragging: function (e, t) {
            if (n || !x(e)) return;
            let r = N.current[e];
            (N.current = s(N.current, e, t)), R(N.current), g && r && !N.current.some(Boolean) && g(A.current);
        },
        focusedThumb: b,
        setFocusedThumb: y,
        getThumbPercent: (e) => O(E[e]),
        getValuePercent: O,
        getThumbValueLabel: (e) => M(E[e]),
        getFormattedValue: M,
        getThumbMinValue: D,
        getThumbMaxValue: L,
        getPercentValue: P,
        isThumbEditable: x,
        setThumbEditable: function (e, t) {
            T.current[e] = t;
        },
        incrementThumb: function (e, t = 1) {
            let n = Math.max(t, d);
            w(e, (0, r.N4)(E[e] + n, a, u, d));
        },
        decrementThumb: function (e, t = 1) {
            let n = Math.max(t, d);
            w(e, (0, r.N4)(E[e] - n, a, u, d));
        },
        step: d,
        pageSize: _,
        orientation: f,
        isDisabled: n
    };
}
function s(e, t, n) {
    return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
}
function o(e) {
    if (null != e) return Array.isArray(e) ? e : [e];
}
function l(e, t, n) {
    return (r) => {
        'number' == typeof e || 'number' == typeof t ? null == n || n(r[0]) : null == n || n(r);
    };
}
