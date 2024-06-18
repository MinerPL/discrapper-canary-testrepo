"use strict";
n.d(t, {
  F: function() {
    return p
  },
  t: function() {
    return m
  }
});
var r = n(387103),
  i = n(697898),
  a = n(470079);

function o(e, t, n) {
  return null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0
}

function s(e, t, n, r, i) {
  let a = {};
  for (let e in t) a[e] = Math.floor(t[e] / 2), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
  let o = u(e, t, n).subtract(a);
  return l(e, o, t, n, r, i)
}

function u(e, t, n, i, a) {
  let o = e;
  return t.years ? o = (0, r.em)(e) : t.months ? o = (0, r.Nm)(e) : t.weeks && (o = (0, r.zJ)(e, n)), l(e, o, t, n, i, a)
}

function c(e, t, n, r, i) {
  let a = {
    ...t
  };
  t.days ? a.days-- : t.weeks ? a.weeks-- : t.months ? a.months-- : t.years && a.years--;
  let o = u(e, t, n).subtract(a);
  return l(e, o, t, n, r, i)
}

function l(e, t, n, i, a, o) {
  return a && e.compare(a) >= 0 && (t = (0, r.l7)(t, u((0, r.WG)(a), n, i))), o && 0 >= e.compare(o) && (t = (0, r.Mb)(t, c((0, r.WG)(o), n, i))), t
}

function d(e, t, n) {
  return t && (e = (0, r.l7)(e, (0, r.WG)(t))), n && (e = (0, r.Mb)(e, (0, r.WG)(n))), e
}

function f(e, t, n) {
  if (!n) return e;
  for (; e.compare(t) >= 0 && n(e);) e = e.subtract({
    days: 1
  });
  if (e.compare(t) >= 0) return e
}

function p(e) {
  let t = (0, a.useMemo)(() => new r.CN(e.locale), [e.locale]),
    n = (0, a.useMemo)(() => t.resolvedOptions(), [t]),
    {
      locale: p,
      createCalendar: m,
      visibleDuration: g = {
        months: 1
      },
      minValue: _,
      maxValue: b,
      selectionAlignment: v,
      isDateUnavailable: y,
      pageBehavior: E = "visible"
    } = e,
    S = (0, a.useMemo)(() => m(n.calendar), [m, n.calendar]),
    [x, w] = (0, i.zk)(e.value, e.defaultValue, e.onChange),
    C = (0, a.useMemo)(() => x ? (0, r.Mw)((0, r.WG)(x), S) : null, [x, S]),
    T = (0, a.useMemo)(() => x && "timeZone" in x ? x.timeZone : n.timeZone, [x, n.timeZone]),
    D = (0, a.useMemo)(() => e.focusedValue ? d((0, r.Mw)((0, r.WG)(e.focusedValue), S), _, b) : void 0, [e.focusedValue, S, _, b]),
    M = (0, a.useMemo)(() => d(e.defaultFocusedValue ? (0, r.Mw)((0, r.WG)(e.defaultFocusedValue), S) : C || (0, r.Mw)((0, r.Lg)(T), S), _, b), [e.defaultFocusedValue, C, T, S, _, b]),
    [O, A] = (0, i.zk)(D, M, e.onFocusChange),
    [k, R] = (0, a.useState)(() => {
      switch (v) {
        case "start":
          return u(O, g, p, _, b);
        case "end":
          return c(O, g, p, _, b);
        default:
          return s(O, g, p, _, b)
      }
    }),
    [N, I] = (0, a.useState)(e.autoFocus || !1),
    L = (0, a.useMemo)(() => {
      let e = {
        ...g
      };
      return e.days ? e.days-- : e.days = -1, k.add(e)
    }, [k, g]),
    [P, B] = (0, a.useState)(S.identifier);
  if (S.identifier !== P) {
    let e = (0, r.Mw)(O, S);
    R(s(e, g, p, _, b)), A(e), B(S.identifier)
  }

  function F(e) {
    A(e = d(e, _, b))
  }

  function U(t) {
    !e.isDisabled && !e.isReadOnly && (t = f(t = d(t, _, b), k, y)) && (t = (0, r.Mw)(t, (null == x ? void 0 : x.calendar) || new r.IQ), x && "hour" in x ? w(x.set(t)) : w(t))
  }
  o(O, _, b) ? A(d(O, _, b)) : 0 > O.compare(k) ? R(c(O, g, p, _, b)) : O.compare(L) > 0 && R(u(O, g, p, _, b));
  let j = (0, a.useMemo)(() => !!C && (!!(y && y(C)) || o(C, _, b)), [C, y, _, b]),
    Y = e.isInvalid || "invalid" === e.validationState || j,
    z = (0, a.useMemo)(() => "visible" === E ? g : h(g), [E, g]);
  return {
    isDisabled: e.isDisabled,
    isReadOnly: e.isReadOnly,
    value: C,
    setValue: U,
    visibleRange: {
      start: k,
      end: L
    },
    minValue: _,
    maxValue: b,
    focusedDate: O,
    timeZone: T,
    validationState: Y ? "invalid" : null,
    isValueInvalid: Y,
    setFocusedDate(e) {
      F(e), I(!0)
    },
    focusNextDay() {
      F(O.add({
        days: 1
      }))
    },
    focusPreviousDay() {
      F(O.subtract({
        days: 1
      }))
    },
    focusNextRow() {
      g.days ? this.focusNextPage() : (g.weeks || g.months || g.years) && F(O.add({
        weeks: 1
      }))
    },
    focusPreviousRow() {
      g.days ? this.focusPreviousPage() : (g.weeks || g.months || g.years) && F(O.subtract({
        weeks: 1
      }))
    },
    focusNextPage() {
      let e = k.add(z);
      A(d(O.add(z), _, b)), R(u(l(O, e, z, p, _, b), z, p))
    },
    focusPreviousPage() {
      let e = k.subtract(z);
      A(d(O.subtract(z), _, b)), R(u(l(O, e, z, p, _, b), z, p))
    },
    focusSectionStart() {
      g.days ? F(k) : g.weeks ? F((0, r.zJ)(O, p)) : (g.months || g.years) && F((0, r.Nm)(O))
    },
    focusSectionEnd() {
      g.days ? F(L) : g.weeks ? F((0, r.vV)(O, p)) : (g.months || g.years) && F((0, r.Vf)(O))
    },
    focusNextSection(e) {
      if (!e && !g.days) {
        F(O.add(h(g)));
        return
      }
      g.days ? this.focusNextPage() : g.weeks ? F(O.add({
        months: 1
      })) : (g.months || g.years) && F(O.add({
        years: 1
      }))
    },
    focusPreviousSection(e) {
      if (!e && !g.days) {
        F(O.subtract(h(g)));
        return
      }
      g.days ? this.focusPreviousPage() : g.weeks ? F(O.subtract({
        months: 1
      })) : (g.months || g.years) && F(O.subtract({
        years: 1
      }))
    },
    selectFocusedDate() {
      U(O)
    },
    selectDate(e) {
      U(e)
    },
    isFocused: N,
    setFocused: I,
    isInvalid: e => o(e, _, b),
    isSelected(e) {
      return null != C && (0, r.KC)(e, C) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
    },
    isCellFocused: e => N && O && (0, r.KC)(e, O),
    isCellDisabled(t) {
      return e.isDisabled || 0 > t.compare(k) || t.compare(L) > 0 || this.isInvalid(t, _, b)
    },
    isCellUnavailable: t => e.isDateUnavailable && e.isDateUnavailable(t),
    isPreviousVisibleRangeInvalid() {
      let e = k.subtract({
        days: 1
      });
      return (0, r.KC)(e, k) || this.isInvalid(e, _, b)
    },
    isNextVisibleRangeInvalid() {
      let e = L.add({
        days: 1
      });
      return (0, r.KC)(e, L) || this.isInvalid(e, _, b)
    },
    getDatesInWeek(e, t = k) {
      let n = t.add({
          weeks: e
        }),
        i = [];
      n = (0, r.zJ)(n, p);
      let a = (0, r.ji)(n, p);
      for (let e = 0; e < a; e++) i.push(null);
      for (; i.length < 7;) {
        i.push(n);
        let e = n.add({
          days: 1
        });
        if ((0, r.KC)(n, e)) break;
        n = e
      }
      for (; i.length < 7;) i.push(null);
      return i
    }
  }
}

function h(e) {
  let t = {
    ...e
  };
  for (let n in e) t[n] = 1;
  return t
}

function m(e) {
  let {
    value: t,
    defaultValue: n,
    onChange: u,
    createCalendar: c,
    locale: l,
    visibleDuration: h = {
      months: 1
    },
    minValue: m,
    maxValue: v,
    ...y
  } = e, [E, S] = (0, i.zk)(t, n || null, u), [x, w] = (0, a.useState)(null), C = "center";
  if (E && E.start && E.end) {
    let e = s((0, r.WG)(E.start), h, l, m, v).add(h).subtract({
      days: 1
    });
    E.end.compare(e) > 0 && (C = "start")
  }
  let T = (0, a.useRef)(null),
    [D, M] = (0, a.useState)(null),
    O = (0, a.useMemo)(() => (0, r.l7)(m, null == D ? void 0 : D.start), [m, D]),
    A = (0, a.useMemo)(() => (0, r.Mb)(v, null == D ? void 0 : D.end), [v, D]),
    k = p({
      ...y,
      value: E && E.start,
      createCalendar: c,
      locale: l,
      visibleDuration: h,
      minValue: O,
      maxValue: A,
      selectionAlignment: C
    }),
    R = t => {
      t && e.isDateUnavailable && !e.allowsNonContiguousRanges ? (T.current = {
        start: b(t, k, -1),
        end: b(t, k, 1)
      }, M(T.current)) : (T.current = null, M(null))
    },
    [N, I] = (0, a.useState)(k.visibleRange);
  (!(0, r.N9)(k.visibleRange.start, N.start) || !(0, r.N9)(k.visibleRange.end, N.end)) && (R(x), I(k.visibleRange));
  let L = e => {
      e ? (w(e), R(e)) : (w(null), R(null))
    },
    P = x ? g(x, k.focusedDate) : E && g(E.start, E.end),
    B = t => {
      if (!e.isReadOnly) {
        if (t = f(t = d(t, O, A), k.visibleRange.start, e.isDateUnavailable)) {
          if (x) {
            let e = g(x, t);
            S({
              start: _(e.start, null == E ? void 0 : E.start),
              end: _(e.end, null == E ? void 0 : E.end)
            }), L(null)
          } else L(t)
        }
      }
    },
    [F, U] = (0, a.useState)(!1),
    {
      isDateUnavailable: j
    } = e,
    Y = (0, a.useMemo)(() => !!E && !x && (!!(j && (j(E.start) || j(E.end))) || o(E.start, m, v) || o(E.end, m, v)), [j, E, x, m, v]),
    z = e.isInvalid || "invalid" === e.validationState || Y;
  return {
    ...k,
    value: E,
    setValue: S,
    anchorDate: x,
    setAnchorDate: L,
    highlightedRange: P,
    validationState: z ? "invalid" : null,
    isValueInvalid: z,
    selectFocusedDate() {
      B(k.focusedDate)
    },
    selectDate: B,
    highlightDate(e) {
      x && k.setFocusedDate(e)
    },
    isSelected: e => P && e.compare(P.start) >= 0 && 0 >= e.compare(P.end) && !k.isCellDisabled(e) && !k.isCellUnavailable(e),
    isInvalid(e) {
      var t, n;
      return k.isInvalid(e) || o(e, null === (t = T.current) || void 0 === t ? void 0 : t.start, null === (n = T.current) || void 0 === n ? void 0 : n.end)
    },
    isDragging: F,
    setDragging: U
  }
}

function g(e, t) {
  return e && t ? (0 > t.compare(e) && ([e, t] = [t, e]), {
    start: (0, r.WG)(e),
    end: (0, r.WG)(t)
  }) : null
}

function _(e, t) {
  return (e = (0, r.Mw)(e, (null == t ? void 0 : t.calendar) || new r.IQ), t && "hour" in t) ? t.set(e) : e
}

function b(e, t, n) {
  let r = e.add({
    days: n
  });
  for (;
    (n < 0 ? r.compare(t.visibleRange.start) >= 0 : 0 >= r.compare(t.visibleRange.end)) && !t.isCellUnavailable(r);) r = r.add({
    days: n
  });
  return t.isCellUnavailable(r) ? r.add({
    days: -n
  }) : null
}