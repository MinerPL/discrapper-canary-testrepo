"use strict";
n.d(t, {
  PS: function() {
    return o
  },
  Q3: function() {
    return c
  },
  W0: function() {
    return p
  },
  tL: function() {
    return u
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
  },
  a = {
    ...i,
    customError: !0,
    valid: !1
  },
  o = {
    isInvalid: !1,
    validationDetails: i,
    validationErrors: []
  },
  s = (0, r.createContext)({}),
  u = "__formValidationState" + Date.now();

function c(e) {
  if (e[u]) {
    let {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: i,
      commitValidation: a
    } = e[u];
    return {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: i,
      commitValidation: a
    }
  }
  return function(e) {
    let {
      isInvalid: t,
      validationState: n,
      name: i,
      value: u,
      builtinValidation: c,
      validate: p,
      validationBehavior: h = "aria"
    } = e;
    n && (t || (t = "invalid" === n));
    let m = t ? {
        isInvalid: !0,
        validationErrors: [],
        validationDetails: a
      } : null,
      g = (0, r.useMemo)(() => d(function(e, t) {
        if ("function" == typeof e) {
          let n = e(t);
          if (n && "boolean" != typeof n) return l(n)
        }
        return []
      }(p, u)), [p, u]);
    (null == c ? void 0 : c.validationDetails.valid) && (c = null);
    let _ = (0, r.useContext)(s),
      b = (0, r.useMemo)(() => i ? Array.isArray(i) ? i.flatMap(e => l(_[e])) : l(_[i]) : [], [_, i]),
      [v, y] = (0, r.useState)(_),
      [E, S] = (0, r.useState)(!1);
    _ !== v && (y(_), S(!1));
    let x = (0, r.useMemo)(() => d(E ? [] : b), [E, b]),
      w = (0, r.useRef)(o),
      [C, T] = (0, r.useState)(o),
      D = (0, r.useRef)(o),
      [M, O] = (0, r.useState)(!1);
    return (0, r.useEffect)(() => {
      if (!M) return;
      O(!1);
      let e = g || c || w.current;
      !f(e, D.current) && (D.current = e, T(e))
    }), {
      realtimeValidation: m || x || g || c || o,
      displayValidation: "native" === h ? m || x || C : m || x || g || c || C,
      updateValidation(e) {
        "aria" !== h || f(C, e) ? w.current = e : T(e)
      },
      resetValidation() {
        !f(o, D.current) && (D.current = o, T(o)), "native" === h && O(!1), S(!0)
      },
      commitValidation() {
        "native" === h && O(!0), S(!0)
      }
    }
  }(e)
}

function l(e) {
  return e ? Array.isArray(e) ? e : [e] : []
}

function d(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: a
  } : null
}

function f(e, t) {
  return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n)
}

function p(...e) {
  let t = new Set,
    n = !1,
    r = {
      ...i
    };
  for (let i of e) {
    for (let e of i.validationErrors) t.add(e);
    for (let e in n || (n = i.isInvalid), r) r[e] || (r[e] = i.validationDetails[e])
  }
  return r.valid = !n, {
    isInvalid: n,
    validationErrors: [...t],
    validationDetails: r
  }
}