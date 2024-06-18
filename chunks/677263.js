"use strict";
n.d(t, {
  j: function() {
    return o
  }
});
var r = n(697898),
  i = n(881085),
  a = n(470079);

function o(e) {
  let {
    minValue: t,
    maxValue: n,
    step: o,
    formatOptions: u,
    value: c,
    defaultValue: l,
    onChange: d,
    locale: f,
    isDisabled: p,
    isReadOnly: h
  } = e, [m, g] = (0, r.zk)(c, isNaN(l) ? NaN : l, d), [_, b] = (0, a.useState)(() => isNaN(m) ? "" : new(0, i.e)(f, u).format(m)), v = (0, a.useMemo)(() => new i.d(f, u), [f, u]), y = (0, a.useMemo)(() => v.getNumberingSystem(_), [v, _]), E = (0, a.useMemo)(() => new i.e(f, {
    ...u,
    numberingSystem: y
  }), [f, u, y]), S = (0, a.useMemo)(() => E.resolvedOptions(), [E]), x = (0, a.useCallback)(e => isNaN(e) || null === e ? "" : E.format(e), [E]), w = isNaN(o) ? 1 : o;
  "percent" === S.style && isNaN(o) && (w = .01);
  let [C, T] = (0, a.useState)(m), [D, M] = (0, a.useState)(f), [O, A] = (0, a.useState)(u);
  (!Object.is(m, C) || f !== D || u !== O) && (b(x(m)), T(m), M(f), A(u));
  let k = (0, a.useMemo)(() => v.parse(_), [v, _]),
    R = (e, i) => {
      if (isNaN(k)) {
        let e = isNaN(i) ? 0 : i;
        return (0, r.N4)(e, t, n, w)
      } {
        let i = (0, r.N4)(k, t, n, w);
        return "+" === e && i > k || "-" === e && i < k ? i : (0, r.N4)(s(e, k, w), t, n, w)
      }
    },
    N = (0, a.useMemo)(() => !p && !h && (isNaN(k) || isNaN(n) || (0, r.N4)(k, t, n, w) > k || s("+", k, w) <= n), [p, h, t, n, w, k]),
    I = (0, a.useMemo)(() => !p && !h && (isNaN(k) || isNaN(t) || (0, r.N4)(k, t, n, w) < k || s("-", k, w) >= t), [p, h, t, n, w, k]);
  return {
    validate: e => v.isValidPartialNumber(e, t, n),
    increment: () => {
      let e = R("+", t);
      e === m && b(x(e)), g(e)
    },
    incrementToMax: () => {
      null != n && g((0, r.N4)(n, t, n, w))
    },
    decrement: () => {
      let e = R("-", n);
      e === m && b(x(e)), g(e)
    },
    decrementToMin: () => {
      null != t && g(t)
    },
    canIncrement: N,
    canDecrement: I,
    minValue: t,
    maxValue: n,
    numberValue: k,
    setNumberValue: g,
    setInputValue: b,
    inputValue: _,
    commit: () => {
      let e;
      if (!_.length) {
        g(NaN), b(void 0 === c ? "" : x(m));
        return
      }
      if (isNaN(k)) {
        b(x(m));
        return
      }
      e = isNaN(o) ? (0, r.uZ)(k, t, n) : (0, r.N4)(k, t, n, o), g(e = v.parse(x(e))), b(x(void 0 === c ? e : m))
    }
  }
}

function s(e, t, n) {
  let r = "+" === e ? t + n : t - n;
  if (t % 1 != 0 || n % 1 != 0) {
    let i = t.toString().split("."),
      a = n.toString().split("."),
      o = i[1] && i[1].length || 0,
      s = Math.pow(10, Math.max(o, a[1] && a[1].length || 0));
    t = Math.round(t * s), n = Math.round(n * s), r = ("+" === e ? t + n : t - n) / s
  }
  return r
}