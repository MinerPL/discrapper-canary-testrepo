n.d(t, {
    j: function () {
        return s;
    }
});
var r = n(239700),
    i = n(881085),
    a = n(192379);
function s(e) {
    let { minValue: t, maxValue: n, step: s, formatOptions: l, value: u, defaultValue: c, onChange: d, locale: f, isDisabled: _, isReadOnly: h } = e,
        [p, m] = (0, r.zk)(u, isNaN(c) ? NaN : c, d),
        [g, E] = (0, a.useState)(() => (isNaN(p) ? '' : new (0, i.e)(f, l).format(p))),
        v = (0, a.useMemo)(() => new i.d(f, l), [f, l]),
        I = (0, a.useMemo)(() => v.getNumberingSystem(g), [v, g]),
        S = (0, a.useMemo)(
            () =>
                new i.e(f, {
                    ...l,
                    numberingSystem: I
                }),
            [f, l, I]
        ),
        T = (0, a.useMemo)(() => S.resolvedOptions(), [S]),
        b = (0, a.useCallback)((e) => (isNaN(e) || null === e ? '' : S.format(e)), [S]),
        y = isNaN(s) ? 1 : s;
    'percent' === T.style && isNaN(s) && (y = 0.01);
    let [A, N] = (0, a.useState)(p),
        [C, R] = (0, a.useState)(f),
        [O, D] = (0, a.useState)(l);
    (!Object.is(p, A) || f !== C || l !== O) && (E(b(p)), N(p), R(f), D(l));
    let L = (0, a.useMemo)(() => v.parse(g), [v, g]),
        x = (e, i) => {
            if (isNaN(L)) {
                let e = isNaN(i) ? 0 : i;
                return (0, r.N4)(e, t, n, y);
            }
            {
                let i = (0, r.N4)(L, t, n, y);
                return ('+' === e && i > L) || ('-' === e && i < L) ? i : (0, r.N4)(o(e, L, y), t, n, y);
            }
        },
        w = (0, a.useMemo)(() => !_ && !h && (isNaN(L) || isNaN(n) || (0, r.N4)(L, t, n, y) > L || o('+', L, y) <= n), [_, h, t, n, y, L]),
        M = (0, a.useMemo)(() => !_ && !h && (isNaN(L) || isNaN(t) || (0, r.N4)(L, t, n, y) < L || o('-', L, y) >= t), [_, h, t, n, y, L]);
    return {
        validate: (e) => v.isValidPartialNumber(e, t, n),
        increment: () => {
            let e = x('+', t);
            e === p && E(b(e)), m(e);
        },
        incrementToMax: () => {
            null != n && m((0, r.N4)(n, t, n, y));
        },
        decrement: () => {
            let e = x('-', n);
            e === p && E(b(e)), m(e);
        },
        decrementToMin: () => {
            null != t && m(t);
        },
        canIncrement: w,
        canDecrement: M,
        minValue: t,
        maxValue: n,
        numberValue: L,
        setNumberValue: m,
        setInputValue: E,
        inputValue: g,
        commit: () => {
            let e;
            if (!g.length) {
                m(NaN), E(void 0 === u ? '' : b(p));
                return;
            }
            if (isNaN(L)) {
                E(b(p));
                return;
            }
            (e = isNaN(s) ? (0, r.uZ)(L, t, n) : (0, r.N4)(L, t, n, s)), m((e = v.parse(b(e)))), E(b(void 0 === u ? e : p));
        }
    };
}
function o(e, t, n) {
    let r = '+' === e ? t + n : t - n;
    if (t % 1 != 0 || n % 1 != 0) {
        let i = t.toString().split('.'),
            a = n.toString().split('.'),
            s = (i[1] && i[1].length) || 0,
            o = Math.pow(10, Math.max(s, (a[1] && a[1].length) || 0));
        (t = Math.round(t * o)), (n = Math.round(n * o)), (r = ('+' === e ? t + n : t - n) / o);
    }
    return r;
}
