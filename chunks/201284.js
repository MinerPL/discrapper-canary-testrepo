n.d(t, {
    PS: function () {
        return o;
    },
    Q3: function () {
        return u;
    },
    W0: function () {
        return E;
    },
    tL: function () {
        return l;
    }
});
var r = n(470079);
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
    }, a = {
        ...i,
        customError: !0,
        valid: !1
    }, o = {
        isInvalid: !1,
        validationDetails: i,
        validationErrors: []
    }, s = (0, r.createContext)({}), l = '__formValidationState' + Date.now();
function u(e) {
    if (e[l]) {
        let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: a
        } = e[l];
        return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: a
        };
    }
    return function (e) {
        let {
            isInvalid: t,
            validationState: n,
            name: i,
            value: l,
            builtinValidation: u,
            validate: E,
            validationBehavior: f = 'aria'
        } = e;
        n && (t || (t = 'invalid' === n));
        let h = t ? {
                isInvalid: !0,
                validationErrors: [],
                validationDetails: a
            } : null, p = (0, r.useMemo)(() => d(function (e, t) {
                if ('function' == typeof e) {
                    let n = e(t);
                    if (n && 'boolean' != typeof n)
                        return c(n);
                }
                return [];
            }(E, l)), [
                E,
                l
            ]);
        (null == u ? void 0 : u.validationDetails.valid) && (u = null);
        let m = (0, r.useContext)(s), I = (0, r.useMemo)(() => i ? Array.isArray(i) ? i.flatMap(e => c(m[e])) : c(m[i]) : [], [
                m,
                i
            ]), [T, g] = (0, r.useState)(m), [S, A] = (0, r.useState)(!1);
        m !== T && (g(m), A(!1));
        let N = (0, r.useMemo)(() => d(S ? [] : I), [
                S,
                I
            ]), v = (0, r.useRef)(o), [O, R] = (0, r.useState)(o), C = (0, r.useRef)(o), [y, D] = (0, r.useState)(!1);
        return (0, r.useEffect)(() => {
            if (!y)
                return;
            D(!1);
            let e = p || u || v.current;
            !_(e, C.current) && (C.current = e, R(e));
        }), {
            realtimeValidation: h || N || p || u || o,
            displayValidation: 'native' === f ? h || N || O : h || N || p || u || O,
            updateValidation(e) {
                'aria' !== f || _(O, e) ? v.current = e : R(e);
            },
            resetValidation() {
                !_(o, C.current) && (C.current = o, R(o)), 'native' === f && D(!1), A(!0);
            },
            commitValidation() {
                'native' === f && D(!0), A(!0);
            }
        };
    }(e);
}
function c(e) {
    return e ? Array.isArray(e) ? e : [e] : [];
}
function d(e) {
    return e.length ? {
        isInvalid: !0,
        validationErrors: e,
        validationDetails: a
    } : null;
}
function _(e, t) {
    return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n);
}
function E(...e) {
    let t = new Set(), n = !1, r = { ...i };
    for (let i of e) {
        for (let e of i.validationErrors)
            t.add(e);
        for (let e in (n || (n = i.isInvalid), r))
            r[e] || (r[e] = i.validationDetails[e]);
    }
    return r.valid = !n, {
        isInvalid: n,
        validationErrors: [...t],
        validationDetails: r
    };
}
