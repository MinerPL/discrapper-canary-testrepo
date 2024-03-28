"use strict";
a.r(t), a.d(t, {
  GridNavigatorProvider: function() {
    return _
  },
  default: function() {
    return h
  },
  useForumGridItem: function() {
    return C
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("25441"),
  r = a("536895"),
  i = a("260866");
let o = "data-grid-item-id",
  d = "data-grid-section",
  u = "data-grid-prev-section-boundary",
  c = new Set([r.Keys.UP, r.Keys.DOWN, r.Keys.LEFT, r.Keys.RIGHT]);

function m(e) {
  let {
    section: t,
    column: a,
    row: s
  } = e, n = "[".concat(d, '="').concat(t, '"]'), l = "[".concat("aria-colindex", '="').concat(a, '"]'), r = "[".concat("aria-rowindex", '="').concat(s, '"]');
  return "".concat(n).concat(l).concat(r)
}

function h(e) {
  let {
    id: t,
    isEnabled: a,
    setFocus: s
  } = e, d = n.useRef(null), h = n.useRef(!1), f = n.useRef(null), g = n.useRef(a);
  n.useLayoutEffect(() => {
    g.current = a
  }, [a]);
  let x = n.useCallback(e => {
      var t;
      return (null !== (t = f.current) && void 0 !== t ? t : document).querySelector(e)
    }, []),
    C = n.useCallback((e, t) => {
      g.current && s(e, t)
    }, [s]),
    _ = n.useCallback(e => {
      if (g.current) {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus()
      }
    }, []),
    S = n.useCallback(e => {
      d.current = e;
      let a = (0, i.createSelector)(e, o),
        s = (0, i.getItemId)(e);
      C(a, s), (0, l.notifyFocusSubscribers)(t, s, !0)
    }, [t, C]),
    [T, p] = n.useState(!1),
    E = n.useRef(T);
  n.useLayoutEffect(() => {
    E.current = T
  }, [T]), n.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return e.addEventListener("focusin", a), e.addEventListener("focusout", s), e.addEventListener("focus", n), e.addEventListener("scroll", l, {
      passive: !0
    }), () => {
      e.removeEventListener("focusin", a), e.removeEventListener("focusout", s), e.removeEventListener("focus", n), e.removeEventListener("scroll", l)
    };

    function a() {
      p(!0)
    }

    function s(e) {
      !e.currentTarget.contains(e.relatedTarget) && (p(!1), requestAnimationFrame(() => {
        let e = d.current;
        null !== e && null == x((0, i.createSelector)(e, o)) && _((0, i.createSelector)(t, "data-grid-id"))
      }))
    }

    function n() {
      let e = f.current;
      if (E.current || null == e) return
    }

    function l() {
      h.current = !0
    }
  }, [t, C, _, S, x]);
  let N = n.useCallback(e => {
      var t, a;
      if (!g.current) return;
      let s = d.current,
        n = f.current;
      if (null == s) return;
      let l = (0, i.createSelector)(s, o),
        h = null == n ? void 0 : n.querySelector(l);
      if (null == h) return;
      let C = parseInt(null !== (t = h.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
        _ = parseInt(h.getAttribute("aria-rowindex")),
        T = parseInt(h.getAttribute("aria-colindex"));
      switch (c.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case r.Keys.RIGHT: {
          let e = x(m({
            section: C,
            row: _,
            column: T + 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && S(t)
          }
          return
        }
        case r.Keys.LEFT: {
          let e = x(m({
            section: C,
            row: _,
            column: T - 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && S(t)
          }
          return
        }
        case r.Keys.DOWN: {
          let e = x(m({
            section: C,
            row: _ + 1,
            column: T
          }));
          if (null == e && (e = x(m({
              section: C + 1,
              row: 0,
              column: T
            }))), null != e) {
            let t = e.getAttribute(o);
            null != t && S(t)
          }
          return
        }
        case r.Keys.UP: {
          let e;
          if (0 === _) {
            let t = parseInt(h.getAttribute(u));
            null == (e = x(m({
              section: C - 1,
              row: t,
              column: T
            }))) && (e = x(m({
              section: C - 1,
              row: t - 1,
              column: T
            })))
          } else e = x(m({
            section: C,
            row: _ - 1,
            column: T
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && S(t)
          }
          return
        }
        case r.Keys.SPACE:
        case r.Keys.ENTER: {
          if (e.repeat) return;
          let t = d.current;
          if (null != t) {
            let s = x((0, i.createSelector)(t, o)),
              n = null !== (a = null == s ? void 0 : s.ownerDocument) && void 0 !== a ? a : document,
              l = s === n.activeElement;
            null != s && l && (e.preventDefault(), e.stopPropagation(), null == s || s.click())
          }
        }
      }
    }, [x, S]),
    M = n.useCallback(e => {
      let a = null != e ? (0, i.createListItemId)(t, e) : null;
      d.current = a
    }, [t]);
  return n.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: N,
      ref: f
    },
    setFocus: M
  }), [t, N, M])
}
let f = {
    id: "NO_LIST",
    onKeyDown() {},
    ref: n.createRef()
  },
  g = n.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  x = n.createContext(f);

function C(e) {
  let {
    id: t,
    section: a,
    row: s,
    column: r,
    boundaries: c
  } = e, [m, h] = n.useState(0 === s && 0 === r ? 0 : -1), {
    id: f,
    setFocus: x
  } = n.useContext(g), C = n.useCallback(() => x(t), [t, x]);
  return n.useLayoutEffect(() => (0, l.addFocusSubscriber)(f, e => {
    h(e === t ? 0 : -1)
  }), [t, f]), {
    [o]: (0, i.createListItemId)(f, t),
    [d]: a,
    [u]: c[a],
    role: "gridcell",
    "aria-rowindex": s,
    "aria-colindex": r,
    tabIndex: m,
    onFocus: C
  }
}

function _(e) {
  let {
    children: t,
    navigator: a
  } = e, {
    id: l,
    setFocus: r,
    containerProps: {
      onKeyDown: i,
      ref: o
    }
  } = a, d = n.useMemo(() => ({
    id: l,
    setFocus: r
  }), [l, r]), u = n.useMemo(() => ({
    onKeyDown: i,
    ref: o,
    id: l
  }), [i, o, l]);
  return (0, s.jsx)(x.Provider, {
    value: u,
    children: (0, s.jsx)(g.Provider, {
      value: d,
      children: t
    })
  })
}