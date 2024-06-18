"use strict";
n.d(t, {
  KT: function() {
    return E
  },
  ZP: function() {
    return m
  },
  nX: function() {
    return f
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(25441),
  i = n(536895),
  r = n(260866);
let o = "data-grid-item-id",
  c = "data-grid-section",
  d = "data-grid-prev-section-boundary",
  u = new Set([i.R8.UP, i.R8.DOWN, i.R8.LEFT, i.R8.RIGHT]);

function h(e) {
  let {
    section: t,
    column: n,
    row: s
  } = e, l = "[".concat(c, '="').concat(t, '"]'), a = "[".concat("aria-colindex", '="').concat(n, '"]'), i = "[".concat("aria-rowindex", '="').concat(s, '"]');
  return "".concat(l).concat(a).concat(i)
}

function m(e) {
  let {
    id: t,
    isEnabled: n,
    setFocus: s
  } = e, c = l.useRef(null), m = l.useRef(!1), g = l.useRef(null), x = l.useRef(n);
  l.useLayoutEffect(() => {
    x.current = n
  }, [n]);
  let _ = l.useCallback(e => {
      var t;
      return (null !== (t = g.current) && void 0 !== t ? t : document).querySelector(e)
    }, []),
    f = l.useCallback((e, t) => {
      x.current && s(e, t)
    }, [s]),
    E = l.useCallback(e => {
      if (x.current) {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus()
      }
    }, []),
    N = l.useCallback(e => {
      c.current = e;
      let n = (0, r.P1)(e, o),
        s = (0, r.x3)(e);
      f(n, s), (0, a.h)(t, s, !0)
    }, [t, f]),
    [T, C] = l.useState(!1),
    p = l.useRef(T);
  l.useLayoutEffect(() => {
    p.current = T
  }, [T]), l.useLayoutEffect(() => {
    let e = g.current;
    if (null != e) return e.addEventListener("focusin", n), e.addEventListener("focusout", s), e.addEventListener("focus", l), e.addEventListener("scroll", a, {
      passive: !0
    }), () => {
      e.removeEventListener("focusin", n), e.removeEventListener("focusout", s), e.removeEventListener("focus", l), e.removeEventListener("scroll", a)
    };

    function n() {
      C(!0)
    }

    function s(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) C(!1), requestAnimationFrame(() => {
        let e = c.current;
        null !== e && null == _((0, r.P1)(e, o)) && E((0, r.P1)(t, "data-grid-id"))
      })
    }

    function l() {
      let e = g.current;
      if (p.current || null == e) return
    }

    function a() {
      m.current = !0
    }
  }, [t, f, E, N, _]);
  let v = l.useCallback(e => {
      var t, n;
      if (!x.current) return;
      let s = c.current,
        l = g.current;
      if (null == s) return;
      let a = (0, r.P1)(s, o),
        m = null == l ? void 0 : l.querySelector(a);
      if (null == m) return;
      let f = parseInt(null !== (t = m.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
        E = parseInt(m.getAttribute("aria-rowindex")),
        T = parseInt(m.getAttribute("aria-colindex"));
      switch (u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case i.R8.RIGHT: {
          let e = _(h({
            section: f,
            row: E,
            column: T + 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && N(t)
          }
          return
        }
        case i.R8.LEFT: {
          let e = _(h({
            section: f,
            row: E,
            column: T - 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && N(t)
          }
          return
        }
        case i.R8.DOWN: {
          let e = _(h({
            section: f,
            row: E + 1,
            column: T
          }));
          if (null == e && (e = _(h({
              section: f + 1,
              row: 0,
              column: T
            }))), null != e) {
            let t = e.getAttribute(o);
            null != t && N(t)
          }
          return
        }
        case i.R8.UP: {
          let e;
          if (0 === E) {
            let t = parseInt(m.getAttribute(d));
            null == (e = _(h({
              section: f - 1,
              row: t,
              column: T
            }))) && (e = _(h({
              section: f - 1,
              row: t - 1,
              column: T
            })))
          } else e = _(h({
            section: f,
            row: E - 1,
            column: T
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && N(t)
          }
          return
        }
        case i.R8.SPACE:
        case i.R8.ENTER: {
          if (e.repeat) return;
          let t = c.current;
          if (null != t) {
            let s = _((0, r.P1)(t, o)),
              l = null !== (n = null == s ? void 0 : s.ownerDocument) && void 0 !== n ? n : document,
              a = s === l.activeElement;
            null != s && a && (e.preventDefault(), e.stopPropagation(), null == s || s.click())
          }
        }
      }
    }, [_, N]),
    M = l.useCallback(e => {
      let n = null != e ? (0, r.jb)(t, e) : null;
      c.current = n
    }, [t]);
  return l.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: v,
      ref: g
    },
    setFocus: M
  }), [t, v, M])
}
let g = {
    id: "NO_LIST",
    onKeyDown() {},
    ref: l.createRef()
  },
  x = l.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  _ = l.createContext(g);

function f(e) {
  let {
    id: t,
    section: n,
    row: s,
    column: i,
    boundaries: u
  } = e, [h, m] = l.useState(0 === s && 0 === i ? 0 : -1), {
    id: g,
    setFocus: _
  } = l.useContext(x), f = l.useCallback(() => _(t), [t, _]);
  return l.useLayoutEffect(() => (0, a.N)(g, e => {
    m(e === t ? 0 : -1)
  }), [t, g]), {
    [o]: (0, r.jb)(g, t),
    [c]: n,
    [d]: u[n],
    role: "gridcell",
    "aria-rowindex": s,
    "aria-colindex": i,
    tabIndex: h,
    onFocus: f
  }
}

function E(e) {
  let {
    children: t,
    navigator: n
  } = e, {
    id: a,
    setFocus: i,
    containerProps: {
      onKeyDown: r,
      ref: o
    }
  } = n, c = l.useMemo(() => ({
    id: a,
    setFocus: i
  }), [a, i]), d = l.useMemo(() => ({
    onKeyDown: r,
    ref: o,
    id: a
  }), [r, o, a]);
  return (0, s.jsx)(_.Provider, {
    value: d,
    children: (0, s.jsx)(x.Provider, {
      value: c,
      children: t
    })
  })
}