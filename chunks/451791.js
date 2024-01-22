"use strict";
n.r(t), n.d(t, {
  useNumberFieldState: function() {
    return s
  }
}), n("222007");
var r = n("679750"),
  i = n("676231"),
  o = n("884691");

function s(e) {
  let {
    minValue: t,
    maxValue: n,
    step: s,
    formatOptions: c,
    value: u,
    defaultValue: d,
    onChange: l,
    locale: f,
    isDisabled: p,
    isReadOnly: h
  } = e, [g, b] = (0, r.useControlledState)(u, isNaN(d) ? NaN : d, l), [v, m] = (0, o.useState)(() => isNaN(g) ? "" : new(0, i.NumberFormatter)(f, c).format(g)), y = (0, o.useMemo)(() => new i.NumberParser(f, c), [f, c]), x = (0, o.useMemo)(() => y.getNumberingSystem(v), [y, v]), w = (0, o.useMemo)(() => new i.NumberFormatter(f, {
    ...c,
    numberingSystem: x
  }), [f, c, x]), S = (0, o.useMemo)(() => w.resolvedOptions(), [w]), k = (0, o.useCallback)(e => isNaN(e) || null === e ? "" : w.format(e), [w]), _ = isNaN(s) ? 1 : s;
  "percent" === S.style && isNaN(s) && (_ = .01);
  let [E, M] = (0, o.useState)(g), [D, C] = (0, o.useState)(f), [P, T] = (0, o.useState)(c);
  (!Object.is(g, E) || f !== D || c !== P) && (m(k(g)), M(g), C(f), T(c));
  let A = (0, o.useMemo)(() => y.parse(v), [y, v]),
    R = (e, i) => {
      if (isNaN(A)) {
        let e = isNaN(i) ? 0 : i;
        return (0, r.snapValueToStep)(e, t, n, _)
      } {
        let i = (0, r.snapValueToStep)(A, t, n, _);
        return "+" === e && i > A || "-" === e && i < A ? i : (0, r.snapValueToStep)(a(e, A, _), t, n, _)
      }
    },
    I = (0, o.useMemo)(() => !p && !h && (isNaN(A) || isNaN(n) || (0, r.snapValueToStep)(A, t, n, _) > A || a("+", A, _) <= n), [p, h, t, n, _, A]),
    O = (0, o.useMemo)(() => !p && !h && (isNaN(A) || isNaN(t) || (0, r.snapValueToStep)(A, t, n, _) < A || a("-", A, _) >= t), [p, h, t, n, _, A]);
  return {
    validate: e => y.isValidPartialNumber(e, t, n),
    increment: () => {
      let e = R("+", t);
      e === g && m(k(e)), b(e)
    },
    incrementToMax: () => {
      null != n && b((0, r.snapValueToStep)(n, t, n, _))
    },
    decrement: () => {
      let e = R("-", n);
      e === g && m(k(e)), b(e)
    },
    decrementToMin: () => {
      null != t && b(t)
    },
    canIncrement: I,
    canDecrement: O,
    minValue: t,
    maxValue: n,
    numberValue: A,
    setNumberValue: b,
    setInputValue: m,
    inputValue: v,
    commit: () => {
      let e;
      if (!v.length) {
        b(NaN), m(void 0 === u ? "" : k(g));
        return
      }
      if (isNaN(A)) {
        m(k(g));
        return
      }
      e = isNaN(s) ? (0, r.clamp)(A, t, n) : (0, r.snapValueToStep)(A, t, n, s), b(e = y.parse(k(e))), m(k(void 0 === u ? e : g))
    }
  }
}

function a(e, t, n) {
  let r = "+" === e ? t + n : t - n;
  if (t % 1 != 0 || n % 1 != 0) {
    let i = t.toString().split("."),
      o = n.toString().split("."),
      s = i[1] && i[1].length || 0,
      a = o[1] && o[1].length || 0,
      c = Math.pow(10, Math.max(s, a));
    t = Math.round(t * c), n = Math.round(n * c), r = ("+" === e ? t + n : t - n) / c
  }
  return r
}