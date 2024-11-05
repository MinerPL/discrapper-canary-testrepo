n.d(t, {
    PS: function () {
        return s;
    },
    Q3: function () {
        return u;
    },
    W0: function () {
        return _;
    },
    tL: function () {
        return l;
    }
});
var r = n(192379);
let i = {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valueMissing: !1,
        valid: !0
    },
    a = {
        ...i,
        customError: !0,
        valid: !1
    },
    s = {
        isInvalid: !1,
        validationDetails: i,
        validationErrors: []
    },
    o = (0, r.createContext)({}),
    l = '__formValidationState' + Date.now();
function u(e) {
    if (e[l]) {
        let { realtimeValidation: t, displayValidation: n, updateValidation: r, resetValidation: i, commitValidation: a } = e[l];
        return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: a
        };
    }
    return (function (e) {
        let { isInvalid: t, validationState: n, name: i, value: l, builtinValidation: u, validate: _, validationBehavior: h = 'aria' } = e;
        n && (t || (t = 'invalid' === n));
        let p = t
                ? {
                      isInvalid: !0,
                      validationErrors: [],
                      validationDetails: a
                  }
                : null,
            m = (0, r.useMemo)(
                () =>
                    d(
                        (function (e, t) {
                            if ('function' == typeof e) {
                                let n = e(t);
                                if (n && 'boolean' != typeof n) return c(n);
                            }
                            return [];
                        })(_, l)
                    ),
                [_, l]
            );
        (null == u ? void 0 : u.validationDetails.valid) && (u = null);
        let g = (0, r.useContext)(o),
            E = (0, r.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => c(g[e])) : c(g[i])) : []), [g, i]),
            [v, I] = (0, r.useState)(g),
            [S, T] = (0, r.useState)(!1);
        g !== v && (I(g), T(!1));
        let b = (0, r.useMemo)(() => d(S ? [] : E), [S, E]),
            y = (0, r.useRef)(s),
            [A, N] = (0, r.useState)(s),
            C = (0, r.useRef)(s),
            [R, O] = (0, r.useState)(!1);
        return (
            (0, r.useEffect)(() => {
                if (!R) return;
                O(!1);
                let e = m || u || y.current;
                !f(e, C.current) && ((C.current = e), N(e));
            }),
            {
                realtimeValidation: p || b || m || u || s,
                displayValidation: 'native' === h ? p || b || A : p || b || m || u || A,
                updateValidation(e) {
                    'aria' !== h || f(A, e) ? (y.current = e) : N(e);
                },
                resetValidation() {
                    !f(s, C.current) && ((C.current = s), N(s)), 'native' === h && O(!1), T(!0);
                },
                commitValidation() {
                    'native' === h && O(!0), T(!0);
                }
            }
        );
    })(e);
}
function c(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function d(e) {
    return e.length
        ? {
              isInvalid: !0,
              validationErrors: e,
              validationDetails: a
          }
        : null;
}
function f(e, t) {
    return e === t || (e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n));
}
function _(...e) {
    let t = new Set(),
        n = !1,
        r = { ...i };
    for (let i of e) {
        for (let e of i.validationErrors) t.add(e);
        for (let e in (n || (n = i.isInvalid), r)) r[e] || (r[e] = i.validationDetails[e]);
    }
    return (
        (r.valid = !n),
        {
            isInvalid: n,
            validationErrors: [...t],
            validationDetails: r
        }
    );
}
