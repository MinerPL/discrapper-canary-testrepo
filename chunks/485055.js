"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  },
  useForumGridItem: function() {
    return C
  },
  GridNavigatorProvider: function() {
    return T
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("909283"),
  r = s("942367"),
  i = s("74139");
let o = "data-grid-item-id",
  u = "data-grid-section",
  d = "data-grid-prev-section-boundary",
  c = new Set([r.Keys.UP, r.Keys.DOWN, r.Keys.LEFT, r.Keys.RIGHT]);

function m(e) {
  let {
    section: t,
    column: s,
    row: a
  } = e, n = "[".concat(u, '="').concat(t, '"]'), l = "[".concat("aria-colindex", '="').concat(s, '"]'), r = "[".concat("aria-rowindex", '="').concat(a, '"]');
  return "".concat(n).concat(l).concat(r)
}

function h(e) {
  let {
    id: t,
    isEnabled: s,
    setFocus: a
  } = e, u = n.useRef(null), h = n.useRef(!1), f = n.useRef(null), g = n.useRef(s);
  n.useLayoutEffect(() => {
    g.current = s
  }, [s]);
  let x = n.useCallback(e => {
      var t;
      return (null !== (t = f.current) && void 0 !== t ? t : document).querySelector(e)
    }, []),
    C = n.useCallback((e, t) => {
      g.current && a(e, t)
    }, [a]),
    T = n.useCallback(e => {
      if (g.current) {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus()
      }
    }, []),
    _ = n.useCallback(e => {
      u.current = e;
      let s = (0, i.createSelector)(e, o),
        a = (0, i.getItemId)(e);
      C(s, a), (0, l.notifyFocusSubscribers)(t, a, !0)
    }, [t, C]),
    [S, p] = n.useState(!1),
    E = n.useRef(S);
  n.useLayoutEffect(() => {
    E.current = S
  }, [S]), n.useLayoutEffect(() => {
    let e = f.current;
    if (null != e) return e.addEventListener("focusin", s), e.addEventListener("focusout", a), e.addEventListener("focus", n), e.addEventListener("scroll", l, {
      passive: !0
    }), () => {
      e.removeEventListener("focusin", s), e.removeEventListener("focusout", a), e.removeEventListener("focus", n), e.removeEventListener("scroll", l)
    };

    function s() {
      p(!0)
    }

    function a(e) {
      !e.currentTarget.contains(e.relatedTarget) && (p(!1), requestAnimationFrame(() => {
        let e = u.current;
        if (null !== e) {
          let s = (0, i.createSelector)(e, o);
          null == x(s) && T((0, i.createSelector)(t, "data-grid-id"))
        }
      }))
    }

    function n() {
      let e = f.current,
        t = E.current;
      if (t || null == e) return
    }

    function l() {
      h.current = !0
    }
  }, [t, C, T, _, x]);
  let N = n.useCallback(e => {
      var t, s;
      if (!g.current) return;
      let a = u.current,
        n = f.current;
      if (null == a) return;
      let l = (0, i.createSelector)(a, o),
        h = null == n ? void 0 : n.querySelector(l);
      if (null == h) return;
      let C = parseInt(null !== (t = h.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
        T = parseInt(h.getAttribute("aria-rowindex")),
        S = parseInt(h.getAttribute("aria-colindex"));
      switch (c.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case r.Keys.RIGHT: {
          let e = x(m({
            section: C,
            row: T,
            column: S + 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && _(t)
          }
          return
        }
        case r.Keys.LEFT: {
          let e = x(m({
            section: C,
            row: T,
            column: S - 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && _(t)
          }
          return
        }
        case r.Keys.DOWN: {
          let e = x(m({
            section: C,
            row: T + 1,
            column: S
          }));
          if (null == e && (e = x(m({
              section: C + 1,
              row: 0,
              column: S
            }))), null != e) {
            let t = e.getAttribute(o);
            null != t && _(t)
          }
          return
        }
        case r.Keys.UP: {
          let e;
          if (0 === T) {
            let t = parseInt(h.getAttribute(d));
            null == (e = x(m({
              section: C - 1,
              row: t,
              column: S
            }))) && (e = x(m({
              section: C - 1,
              row: t - 1,
              column: S
            })))
          } else e = x(m({
            section: C,
            row: T - 1,
            column: S
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && _(t)
          }
          return
        }
        case r.Keys.SPACE:
        case r.Keys.ENTER: {
          if (e.repeat) return;
          let t = u.current;
          if (null != t) {
            let a = (0, i.createSelector)(t, o),
              n = x(a),
              l = null !== (s = null == n ? void 0 : n.ownerDocument) && void 0 !== s ? s : document,
              r = n === l.activeElement;
            null != n && r && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
          }
        }
      }
    }, [x, _]),
    M = n.useCallback(e => {
      let s = null != e ? (0, i.createListItemId)(t, e) : null;
      u.current = s
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
    section: s,
    row: a,
    column: r,
    boundaries: c
  } = e, [m, h] = n.useState(0 === a && 0 === r ? 0 : -1), f = n.useContext(g), {
    id: x,
    setFocus: C
  } = f, T = n.useCallback(() => C(t), [t, C]);
  return n.useLayoutEffect(() => (0, l.addFocusSubscriber)(x, e => {
    h(e === t ? 0 : -1)
  }), [t, x]), {
    [o]: (0, i.createListItemId)(x, t),
    [u]: s,
    [d]: c[s],
    role: "gridcell",
    "aria-rowindex": a,
    "aria-colindex": r,
    tabIndex: m,
    onFocus: T
  }
}

function T(e) {
  let {
    children: t,
    navigator: s
  } = e, {
    id: l,
    setFocus: r,
    containerProps: {
      onKeyDown: i,
      ref: o
    }
  } = s, u = n.useMemo(() => ({
    id: l,
    setFocus: r
  }), [l, r]), d = n.useMemo(() => ({
    onKeyDown: i,
    ref: o,
    id: l
  }), [i, o, l]);
  return (0, a.jsx)(x.Provider, {
    value: d,
    children: (0, a.jsx)(g.Provider, {
      value: u,
      children: t
    })
  })
}