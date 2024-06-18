"use strict";
n.d(t, {
  v: function() {
    return c
  }
}), n(653041), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(952639),
  l = n.n(a),
  u = n(84735),
  _ = n(562701),
  d = n(689197);

function c(e, t, n, s) {
  let a = (0, _.G6)(e),
    c = new Map,
    E = new s(e => {
      e.forEach(e => {
        var t;
        let {
          target: n
        } = e;
        null === (t = c.get(n)) || void 0 === t || t(e)
      })
    });
  return r.forwardRef(function(s, I) {
    let {
      className: T,
      onScroll: h,
      onResize: S = null,
      onContentResize: f = null,
      dir: N = "ltr",
      sections: A,
      sectionHeight: m,
      rowHeight: O,
      footerHeight: R = 0,
      sidebarHeight: C,
      listHeaderHeight: p = 0,
      renderSection: g,
      renderRow: L,
      renderFooter: v,
      renderSidebar: D,
      renderListHeader: M,
      wrapSection: P,
      getAnchorId: y,
      paddingTop: U,
      paddingBottom: b,
      fade: G = !1,
      customTheme: w = !1,
      chunkSize: k,
      style: B,
      innerId: x,
      innerRole: V,
      innerAriaLabel: Z,
      innerAriaMultiselectable: H,
      innerAriaOrientation: F,
      innerClassName: Y,
      innerTag: j = "div",
      ...W
    } = s, K = r.useRef(null), z = r.useRef(null), [q, X] = r.useState(!1), {
      scrollerRef: Q,
      scrollerState: J,
      getScrollerState: $
    } = (0, _.T4)();
    (0, _.tT)({
      scrollerRef: Q,
      className: T,
      specs: a,
      orientation: "vertical",
      dir: N
    });
    let {
      spacerTop: ee,
      totalHeight: et,
      items: en,
      isSidebarVisible: ei,
      listComputer: er,
      forceUpdateOnChunkChange: es,
      anchor: eo
    } = (0, _.aU)({
      sections: A,
      sectionHeight: m,
      rowHeight: O,
      footerHeight: R,
      sidebarHeight: C,
      listHeaderHeight: p,
      paddingTop: U,
      paddingBottom: b,
      chunkSize: k,
      getScrollerState: $,
      getAnchorId: y
    }), ea = (0, _.t2)(Q), el = r.useRef(S), eu = r.useRef(f);
    r.useLayoutEffect(() => {
      el.current = S, eu.current = f
    });
    let e_ = r.useCallback(function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
        if (e > J.current.dirty && (J.current.dirty = e), 2 === e) {
          var t;
          null === (t = el.current) || void 0 === t || t.call(el)
        }
        es(e)
      }, [es, J]),
      ed = r.useCallback(() => e_(), [e_]);
    (0, _.zn)({
      ref: Q,
      onUpdate: ed,
      key: "container",
      resizeObserver: E,
      listenerMap: c
    }), (0, _.zn)({
      ref: z,
      onUpdate: () => {
        var e;
        return null === (e = eu.current) || void 0 === e ? void 0 : e.call(eu)
      },
      key: "content",
      resizeObserver: E,
      listenerMap: c
    });
    let ec = function(e) {
        let t = r.useRef(e);
        return r.useEffect(() => void(t.current = e), [e]), r.useCallback(() => t.current, [])
      }(en),
      eE = function(e) {
        let t = r.useRef(e);
        return r.useEffect(() => void(t.current = e), [e]), r.useCallback(e => {
          let {
            current: n
          } = t, i = 0;
          for (let t = 0; t < n.length; t++) {
            let r = n[t];
            if (i <= e && i + r >= e) return [t, e - i];
            i += r
          }
          return [0, 0]
        }, [])
      }(A);
    r.useImperativeHandle(I, () => ({
      getScrollerNode: () => Q.current,
      getScrollerState: $,
      getItems: ec,
      getSectionRowFromIndex: eE,
      ...(0, _.rH)(Q, $, er, ea)
    }), [Q, $, eE, ec, er, ea]);
    let eI = r.useCallback(e => {
      e_(1), null == K.current ? X(!0) : clearTimeout(K.current), K.current = setTimeout(() => {
        K.current = null, X(!1)
      }, 200), null != h && h(e)
    }, [h, e_]);
    return r.useLayoutEffect(() => {
      2 !== J.current.dirty && (J.current.dirty = 2)
    }, [en, g, L, v, P, et, ee, J]), (0, _.rS)({
      scrollerRef: Q,
      anchor: eo,
      getScrollerState: $,
      listComputer: er,
      getAnchorId: y,
      totalHeight: et
    }), (0, i.jsxs)("div", {
      ref: Q,
      onScroll: eI,
      className: o()(T, {
        [e]: !0,
        [t]: G,
        [n]: w,
        [d.scrolling]: q
      }),
      style: (0, _.uT)(B),
      ...W,
      children: [r.useMemo(() => (0, i.jsx)(j, {
        id: x,
        role: V,
        "aria-label": Z,
        "aria-multiselectable": H,
        "aria-orientation": F,
        style: {
          height: et
        },
        className: o()(d.content, Y),
        ref: z,
        children: (0, i.jsx)(u.J, {
          containerRef: z,
          children: function(e) {
            let {
              renderSection: t,
              renderRow: n,
              renderFooter: r,
              renderListHeader: s,
              wrapSection: o,
              items: a,
              spacerTop: u
            } = e, _ = [(0, i.jsx)("div", {
              "aria-hidden": !0,
              style: {
                height: u
              }
            }, "---list-spacer-top")], d = [], c = 0;
            if (a.forEach(e => {
                var i;
                switch (e.section !== c && d.length > 0 && (_.push(null != o ? o(c, d) : d), d = []), c = null !== (i = e.section) && void 0 !== i ? i : 0, e.type) {
                  case "section":
                    null != t && d.push(t(e));
                    break;
                  case "row":
                    d.push(n(e));
                    break;
                  case "footer":
                    null != r && d.push(r(e));
                    break;
                  case "header":
                    null != s && d.push(s())
                }
              }), d.length > 0) {
              var E;
              _.push(null !== (E = null == o ? void 0 : o(c, d)) && void 0 !== E ? E : d)
            }
            return l()(_)
          }({
            items: en,
            renderListHeader: M,
            renderSection: g,
            renderRow: L,
            renderFooter: v,
            wrapSection: P,
            spacerTop: ee
          })
        })
      }), [x, V, Z, H, F, Y, j, et, en, g, L, v, M, P, ee]), r.useMemo(() => (function(e) {
        let {
          renderSidebar: t,
          sidebarHeight: n,
          isSidebarVisible: i,
          isListVisible: r
        } = e;
        return null == n || null == t ? null : t(r, i)
      })({
        isSidebarVisible: ei,
        renderSidebar: D,
        sidebarHeight: C,
        isListVisible: 0 !== en.length
      }), [ei, D, C, en.length])]
    })
  })
}