n.d(t, {
    j: function () {
        return o;
    }
});
var r = n(697898), i = n(881085), a = n(470079);
function o(e) {
    let {
            minValue: t,
            maxValue: n,
            step: o,
            formatOptions: l,
            value: u,
            defaultValue: c,
            onChange: d,
            locale: _,
            isDisabled: E,
            isReadOnly: f
        } = e, [h, p] = (0, r.zk)(u, isNaN(c) ? NaN : c, d), [m, I] = (0, a.useState)(() => isNaN(h) ? '' : new (0, i.e)(_, l).format(h)), T = (0, a.useMemo)(() => new i.d(_, l), [
            _,
            l
        ]), g = (0, a.useMemo)(() => T.getNumberingSystem(m), [
            T,
            m
        ]), S = (0, a.useMemo)(() => new i.e(_, {
            ...l,
            numberingSystem: g
        }), [
            _,
            l,
            g
        ]), A = (0, a.useMemo)(() => S.resolvedOptions(), [S]), N = (0, a.useCallback)(e => isNaN(e) || null === e ? '' : S.format(e), [S]), v = isNaN(o) ? 1 : o;
    'percent' === A.style && isNaN(o) && (v = 0.01);
    let [O, R] = (0, a.useState)(h), [C, y] = (0, a.useState)(_), [D, L] = (0, a.useState)(l);
    (!Object.is(h, O) || _ !== C || l !== D) && (I(N(h)), R(h), y(_), L(l));
    let b = (0, a.useMemo)(() => T.parse(m), [
            T,
            m
        ]), M = (e, i) => {
            if (isNaN(b)) {
                let e = isNaN(i) ? 0 : i;
                return (0, r.N4)(e, t, n, v);
            }
            {
                let i = (0, r.N4)(b, t, n, v);
                return '+' === e && i > b || '-' === e && i < b ? i : (0, r.N4)(s(e, b, v), t, n, v);
            }
        }, P = (0, a.useMemo)(() => !E && !f && (isNaN(b) || isNaN(n) || (0, r.N4)(b, t, n, v) > b || s('+', b, v) <= n), [
            E,
            f,
            t,
            n,
            v,
            b
        ]), U = (0, a.useMemo)(() => !E && !f && (isNaN(b) || isNaN(t) || (0, r.N4)(b, t, n, v) < b || s('-', b, v) >= t), [
            E,
            f,
            t,
            n,
            v,
            b
        ]);
    return {
        validate: e => T.isValidPartialNumber(e, t, n),
        increment: () => {
            let e = M('+', t);
            e === h && I(N(e)), p(e);
        },
        incrementToMax: () => {
            null != n && p((0, r.N4)(n, t, n, v));
        },
        decrement: () => {
            let e = M('-', n);
            e === h && I(N(e)), p(e);
        },
        decrementToMin: () => {
            null != t && p(t);
        },
        canIncrement: P,
        canDecrement: U,
        minValue: t,
        maxValue: n,
        numberValue: b,
        setNumberValue: p,
        setInputValue: I,
        inputValue: m,
        commit: () => {
            let e;
            if (!m.length) {
                p(NaN), I(void 0 === u ? '' : N(h));
                return;
            }
            if (isNaN(b)) {
                I(N(h));
                return;
            }
            e = isNaN(o) ? (0, r.uZ)(b, t, n) : (0, r.N4)(b, t, n, o), p(e = T.parse(N(e))), I(N(void 0 === u ? e : h));
        }
    };
}
function s(e, t, n) {
    let r = '+' === e ? t + n : t - n;
    if (t % 1 != 0 || n % 1 != 0) {
        let i = t.toString().split('.'), a = n.toString().split('.'), o = i[1] && i[1].length || 0, s = Math.pow(10, Math.max(o, a[1] && a[1].length || 0));
        t = Math.round(t * s), n = Math.round(n * s), r = ('+' === e ? t + n : t - n) / s;
    }
    return r;
}
