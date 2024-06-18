"use strict";
n.d(t, {
  Qs: function() {
    return S
  },
  Uf: function() {
    return h
  },
  VO: function() {
    return f
  },
  Xs: function() {
    return T
  },
  ep: function() {
    return I
  },
  t$: function() {
    return A
  },
  yi: function() {
    return N
  }
}), n(47120), n(653041);
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(536895),
  a = n(566064),
  l = n(611144),
  u = n(468194),
  _ = n(477690),
  d = n(691251),
  c = n(981631);
let E = (0, u.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  I = e => {
    let {
      gridWrapperRef: t,
      containerWidth: n,
      showingEmptyState: r,
      listPaddingLeft: o = E,
      listScrollbarWidth: a = 8
    } = e, [l, u] = i.useState(void 0), _ = i.useCallback(() => {
      if (null == t.current) return null;
      u(t.current.offsetWidth - o - a)
    }, [t, o, a]);
    return i.useLayoutEffect(() => {
      _()
    }, [n, _, r]), i.useEffect(() => {
      let e = s().debounce(_, 250);
      return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, [_]), l
  },
  T = e => {
    let {
      activeCategoryIndex: t,
      listRef: n,
      searchQuery: r
    } = e, s = i.useRef(r), o = i.useRef(!0);
    i.useLayoutEffect(() => {
      if ("" === r && "" !== s.current) {
        var e;
        null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t)
      }
      s.current = r
    }, [r, t, n]), i.useLayoutEffect(() => {
      if (o.current) {
        var e;
        null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t), o.current = !1
      }
    }, [t, n]), i.useEffect(() => {
      s.current = r
    }, [r])
  },
  h = e => {
    let {
      listRef: t,
      searchQuery: n,
      setShowUpsell: r,
      setUpsellGlowOpacity: s,
      emojiSectionDescriptors: o
    } = e, a = i.useCallback(e => {
      if ("" !== n) {
        s(0);
        return
      }
      if (null == t.current) return;
      let i = o.findIndex(e => e.isNitroLocked);
      if (-1 === i) {
        s(0);
        return
      }
      let r = t.current.getSectionDescriptors();
      if (null == r || 0 === r.length || r.length !== o.length) return;
      let a = r[i],
        l = e + t.current.getListDimensions().height;
      s(Math.min(Math.max((a.offset.top - (l - 250)) / 250, 0), 1))
    }, [n, t, o, s]), l = i.useCallback(e => {
      if ("" !== n) {
        r(!1);
        return
      }
      if (null == t.current) return;
      let i = t.current.getSectionDescriptors();
      if (null == i || 0 === i.length || i.length !== o.length) return;
      let s = t.current.getListDimensions().height,
        a = e + .7 * s,
        l = e + .85 * s,
        u = !1,
        _ = !1;
      o.forEach((e, t) => {
        if (!e.isNitroLocked) return;
        let n = i[t];
        n.offset.top <= l && n.offset.bottom >= l && (_ = !0), n.offset.top <= a && n.offset.bottom >= a && (u = !0)
      }), r(_ && u)
    }, [n, t, o, r]);
    return i.useCallback(e => {
      l(e), a(e)
    }, [l, a])
  },
  S = e => {
    let {
      activeCategoryIndex: t,
      listRef: n,
      isScrolling: r,
      searchQuery: o,
      scrollOffset: a = 0,
      onActiveCategoryIndexChange: l,
      disableForSearch: u = !0
    } = e, _ = i.useRef(c.xAR), d = i.useMemo(() => s().debounce(() => {
      r.current = !1
    }, 250), [r]), E = i.useMemo(() => s().debounce(e => {
      ("" === o || !u) && (window.cancelAnimationFrame(_.current), _.current = window.requestAnimationFrame(() => {
        var i;
        let r = null === (i = n.current) || void 0 === i ? void 0 : i.getSectionDescriptors();
        if (null == r) return;
        let s = r.findIndex((t, n) => {
            let i = r[n + 1],
              s = e + a >= t.offset.top,
              o = null != i && e + a < i.offset.top;
            return null != i && !s && !o || s && o || s && null == i
          }),
          o = -1 === s ? 0 : s;
        t !== o && l(o)
      }))
    }, 0), [o, n, t, a, l, u]);
    return i.useCallback(e => {
      r.current = !0, d(), E(e)
    }, [r, d, E])
  },
  f = e => {
    let {
      columnCounts: t,
      gridNavigatorId: n,
      itemGrid: r,
      itemList: s,
      onGridNavigatorItemSelect: l,
      onGridNavigatorPositionChange: u
    } = e, _ = i.useRef(!1), d = i.useCallback((e, t) => {
      let n = r[t];
      if (null != n) return n[e]
    }, [r]), c = i.useCallback(e => {
      let {
        focusedX: t,
        focusedY: n
      } = e;
      _.current = !0;
      let i = d(t, n);
      if (null == i) return;
      let {
        visibleRowIndex: r,
        columnIndex: o
      } = i;
      u(o, r), null != s.current && s.current.scrollRowIntoView(n)
    }, [d, s, u]), E = i.useCallback((e, t, n) => {
      switch (n.type) {
        case o.Us.NAVIGATE_UP:
        case o.Us.NAVIGATE_DOWN:
        case o.Us.NAVIGATE_RIGHT:
        case o.Us.NAVIGATE_LEFT:
        case o.Us.NAVIGATE_INLINE_START:
        case o.Us.NAVIGATE_INLINE_END:
        case o.Us.NAVIGATE_START:
        case o.Us.NAVIGATE_END:
        case o.Us.NAVIGATE_CROSSLINE_START:
        case o.Us.NAVIGATE_CROSSLINE_END:
          c(t)
      }
    }, [c]), I = i.useCallback((e, t, n) => {
      let i = d(e, t);
      null != i && l(i, n)
    }, [d, l]), {
      dispatch: T,
      getItemProps: h,
      getRowProps: S,
      getContainerProps: f
    } = (0, a.Z)({
      navId: n,
      columnCounts: t,
      onDispatch: E,
      onSelect: I,
      autoFocusElement: !1,
      useVirtualFocus: !0
    }), {
      gridContainerProps: N,
      handleGridContainerKeyDown: A
    } = i.useMemo(() => {
      let e = f();
      return {
        gridContainerProps: e,
        handleGridContainerKeyDown: e.onKeyDown
      }
    }, [f]);
    return i.useEffect(() => {
      let e = () => {
        _.current = !1
      };
      return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
    }, []), {
      gridDispatch: T,
      getItemProps: h,
      getRowProps: S,
      gridContainerProps: N,
      handleGridContainerKeyDown: A,
      isUsingKeyboardNavigation: _
    }
  };

function N(e) {
  let {
    categories: t,
    collapsedCategories: n,
    gridWidth: r = 0,
    listPaddingRight: s = 0,
    itemNodeWidth: o,
    itemNodeMargin: a = 0
  } = e;
  return i.useMemo(() => {
    let e = Math.max(1, Math.floor((r - s + a) / (o + a))),
      i = Math.floor(Math.max(a, (r - s - o * e) / (e - 1))),
      l = [],
      u = [],
      _ = [],
      d = 0,
      c = 0,
      E = 0;
    if (0 !== r) {
      let i = function(t, n) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = Math.ceil(t.length / e);
        u[c] = i ? 0 : r;
        for (let s = 0; s < r; s++) {
          let r = s * e,
            o = r + e,
            a = t.slice(r, o).map((e, t) => ({
              item: e,
              gridSectionIndex: c,
              rowIndex: d,
              columnIndex: t,
              visibleRowIndex: E,
              category: n
            }));
          !i && (E++, _.push(a), l.push(a.length)), d++
        }
        c++
      };
      for (let e of t)
        if (e.items.length > 0) {
          var I;
          i(e.items, e.categoryInfo.type, null !== (I = null == n ? void 0 : n.has("".concat(e.key))) && void 0 !== I && I)
        }
    }
    return {
      expressionsGrid: _,
      rowCount: d,
      rowCountBySection: u,
      columnCounts: l,
      gutterWidth: i
    }
  }, [t, n, r, a, o, s])
}

function A(e) {
  let {
    columnCounts: t,
    expressionsGrid: n,
    expressionsListRef: r,
    store: s,
    gridNavigatorId: o,
    onSelectItem: a
  } = e, {
    gridDispatch: u,
    getItemProps: _,
    getRowProps: c,
    gridContainerProps: E,
    handleGridContainerKeyDown: I,
    isUsingKeyboardNavigation: T
  } = f({
    columnCounts: t,
    gridNavigatorId: o,
    itemGrid: n,
    itemList: r,
    onGridNavigatorItemSelect: a,
    onGridNavigatorPositionChange: s.setInspectedExpressionPosition
  });
  return i.useEffect(() => s.useStore.subscribe(e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: n,
      source: i
    } = e;
    i !== d.u.GRID_NAVIGATOR_EVENT && u({
      type: l.s.SET_FOCUSED_POSITION,
      x: t,
      y: n
    })
  }, e => e.inspectedExpressionPosition), [u, s]), {
    getItemProps: _,
    getRowProps: c,
    gridContainerProps: E,
    handleGridContainerKeyDown: I,
    isUsingKeyboardNavigation: T
  }
}