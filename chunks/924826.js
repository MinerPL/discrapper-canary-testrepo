"use strict";
n.d(t, {
  ZP: function() {
    return _
  }
}), n(47120);
var i = n(470079),
  r = n(372817),
  s = n(25441),
  o = n(585627),
  a = n(536895),
  l = n(260866);

function u(e, t) {
  var n;
  return Array.from((null !== (n = t.current) && void 0 !== n ? n : document).querySelectorAll("[".concat(l.ie, '^="').concat(e, '"]')))
}

function _(e) {
  let {
    id: t,
    defaultFocused: n,
    isEnabled: _,
    scrollToStart: d,
    scrollToEnd: c,
    onNavigatePreviousAtStart: E,
    onNavigateNextAtEnd: I,
    setFocus: T,
    setFocusOnList: h,
    preserveFocusPosition: S = !0,
    useVirtualFocus: f = !1,
    wrap: N = !1,
    orientation: A = a.hy.VERTICAL,
    disableClickOnSpace: m = !1
  } = e, O = i.useRef(n ? (0, l.jb)(t, n) : null), R = i.useRef(!1), C = i.useRef(null), p = i.useRef(_);

  function g(e) {
    var t;
    return (null !== (t = C.current) && void 0 !== t ? t : document).querySelector(e)
  }

  function L(e) {
    var t;
    null === (t = g(e)) || void 0 === t || t.focus()
  }
  i.useLayoutEffect(() => {
    p.current = _
  }, [_]);
  let v = i.useCallback((e, t) => {
      p.current && (null != T ? T : L)(e, t)
    }, [T]),
    D = i.useCallback(e => {
      p.current && (null != h ? h : L)(e)
    }, [h]),
    M = i.useCallback(e => {
      O.current = e;
      let n = (0, l.P1)(e),
        i = (0, l.x3)(e);
      v(n, i), (0, s.h)(t, i, S)
    }, [t, S, v]),
    P = i.useMemo(() => (0, r.E)({
      getFocusableElements: () => u(t, C),
      getActiveElement() {
        var e;
        return null === (e = C.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
      },
      scrollToStart: d,
      scrollToEnd: c
    }), [t, d, c]),
    [y, U] = i.useState(!1),
    b = i.useRef(y);
  i.useLayoutEffect(() => {
    b.current = y
  }, [y]), i.useLayoutEffect(() => {
    let e = C.current;
    if (null != e) {
      if (!_) return;
      return e.addEventListener("focusin", n), e.addEventListener("focusout", i), e.addEventListener("focus", r), e.addEventListener("scroll", s, {
        passive: !0
      }), () => {
        e.removeEventListener("focusin", n), e.removeEventListener("focusout", i), e.removeEventListener("focus", r), e.removeEventListener("scroll", s)
      }
    }

    function n() {
      U(!0)
    }

    function i(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) U(!1), requestAnimationFrame(() => {
        let e = O.current;
        null !== e && null == g((0, l.P1)(e)) && D((0, l.P1)(t, l.kn))
      })
    }
    async function r() {
      let e = C.current;
      if (b.current || null == e) return;
      let n = O.current;
      if (S && null !== n) {
        let t = (0, l.P1)(n),
          i = g(t);
        if (null != i) {
          if (!0 !== R.current) return v(t, (0, l.x3)(n));
          if (await (0, o.JJ)(e, i)) return v(t, (0, l.x3)(n))
        }
      }
      let i = await (0, o.KG)(e, u(t, C));
      null !== i && M(i)
    }

    function s() {
      R.current = !0
    }
  }, [_, t, S, v, h, D, M]);
  let G = i.useMemo(() => ({
      wrap: N,
      get from() {
        if (!f) return;
        let t = O.current;
        if (null != t) {
          var e;
          return null !== (e = g((0, l.P1)(t))) && void 0 !== e ? e : void 0
        }
        return
      }
    }), [f, N]),
    w = i.useCallback(async () => {
      let e = await P.getNextFocusableElement(G),
        t = null == e ? void 0 : e.getAttribute(l.ie);
      null != t ? M(t) : null == e && null != I && I()
    }, [P, G, I, M]),
    k = i.useCallback(async () => {
      let e = await P.getPreviousFocusableElement(G),
        t = null == e ? void 0 : e.getAttribute(l.ie);
      null != t ? M(t) : null == e && null != E && E()
    }, [P, G, E, M]),
    B = i.useCallback(e => {
      if (!p.current || !f && !b.current) return;
      let n = A === a.hy.HORIZONTAL ? a.R8.RIGHT : a.R8.DOWN,
        i = A === a.hy.HORIZONTAL ? a.R8.LEFT : a.R8.UP;
      switch (e.key) {
        case n:
          e.stopPropagation(), e.preventDefault(), w();
          return;
        case i:
          e.stopPropagation(), e.preventDefault(), k();
          return;
        case a.R8.HOME:
          e.stopPropagation(), e.preventDefault(), d().then(() => {
            var e;
            let n = null === (e = u(t, C)[0]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
            null != n && M(n)
          });
          return;
        case a.R8.END:
          e.stopPropagation(), e.preventDefault(), c().then(() => {
            var e;
            let n = u(t, C),
              i = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
            null != i && M(i)
          });
          return;
        case a.R8.SPACE:
        case a.R8.ENTER: {
          if (e.key === a.R8.SPACE && m || e.repeat) return;
          let t = O.current;
          if (null != t) {
            var r;
            let n = g((0, l.P1)(t)),
              i = null !== (r = null == n ? void 0 : n.ownerDocument) && void 0 !== r ? r : document,
              s = f || n === i.activeElement;
            null != n && s && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
          }
        }
      }
    }, [w, k, t, A, c, d, M, f]),
    x = i.useCallback(e => {
      let n = null != e ? (0, l.jb)(t, e) : null;
      O.current = n
    }, [t]);
  return i.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: B,
      ref: C,
      tabIndex: y && S ? -1 : 0
    },
    orientation: A,
    setFocus: x,
    async focusLastVisibleItem() {
      var e;
      let n = await (0, o.jo)(null !== (e = C.current) && void 0 !== e ? e : document.body, u(t, C));
      null !== n && M(n)
    },
    async focusFirstVisibleItem() {
      var e;
      let n = await (0, o.KG)(null !== (e = C.current) && void 0 !== e ? e : document.body, u(t, C));
      null !== n && M(n)
    },
    focusPreviousItem: k,
    focusNextItem: w,
    focusedItemId() {
      let e = O.current;
      return e ? (0, l.x3)(e) : null
    }
  }), [t, B, A, y, S, x, k, w, M])
}