"use strict";
n.r(t), n.d(t, {
  ContentTypes: function() {
    return a
  },
  DefaultCustomContentScroller: function() {
    return R
  },
  ListContentScroller: function() {
    return P
  },
  SectionTypes: function() {
    return C
  }
});
var i, s, r, l, o, a, c = n("735250"),
  u = n("470079"),
  d = n("120356"),
  h = n.n(d),
  m = n("920906"),
  p = n("608863"),
  f = n("873546"),
  b = n("215569"),
  S = n("481060"),
  g = n("110924"),
  v = n("864293"),
  x = n("358085"),
  T = n("792125"),
  N = n("425493"),
  j = n("84885");
let C = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  E = u.createContext(null);
class P extends(o = u.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(S.ListAuto, {
        ...t,
        className: h()(j.customScroller, j.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, c.jsx)("div", {
      className: j.customColumn,
      children: this.renderContent()
    })
  }
}

function R(e) {
  let {
    children: t
  } = e;
  return (0, c.jsx)("div", {
    className: j.customColumn,
    children: (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(S.ScrollerAuto, {
        className: h()(j.customScroller, j.contentRegionScroller),
        children: t
      })
    })
  })
}
r = {
  paddingTop: 60,
  paddingBottom: 60
}, (s = "defaultProps") in(i = P) ? Object.defineProperty(i, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = r, (l = a || (a = {})).MINIMAL = "minimal", l.CUSTOM = "custom", l.DEFAULT = "default", l.WIDE = "wide";
let I = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function y(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, s = u.useRef(null);
  return null == i ? null : (0, c.jsx)("div", {
    className: h()(j.toolsContainer, {
      [j.mobileToolsContainer]: t,
      [j.mobileSidebarTools]: t,
      [j.closeIconOnly]: !n,
      [j.isMobileAndroid]: !n && !0 === (0, x.isAndroidWeb)()
    }),
    ref: s,
    children: (0, c.jsx)(S.FocusRingScope, {
      containerRef: s,
      children: (0, c.jsx)("div", {
        className: j.tools,
        children: (0, c.jsx)(N.default, {
          className: h()({
            [j.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
          keybind: "ESC"
        })
      })
    })
  })
}
t.default = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: i,
    section: s,
    closeAction: r,
    sidebarTheme: l,
    contentType: o,
    scrollerRef: a,
    mobileSidebarOpen: d,
    toggleSidebar: x,
    hideSidebar: N = !1
  } = e, C = u.useRef(null), P = u.useRef(null), R = (0, g.default)(s), A = (0, m.useTransition)(N, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: N,
    config: m.config.stiff
  }), _ = u.useCallback(e => {
    C.current = e, null != a && (a.current = e)
  }, [a]);
  u.useLayoutEffect(() => {
    null != C.current && R !== s && C.current.scrollTo({
      to: 0
    })
  }, [s, R, C]);
  let O = (0, c.jsx)(y, {
    isMobile: f.isMobile,
    mobileSidebarOpen: d,
    closeAction: r
  });

  function M() {
    return null == i ? null : (0, c.jsx)(v.default, {
      className: h()(j.noticeRegion, {
        [j.noticeRegionHiddenSidebar]: N
      }),
      children: i
    }, s)
  }
  return (0, c.jsx)(c.Fragment, {
    children: A((e, i) => (0, c.jsxs)(m.animated.div, {
      style: e,
      className: j.standardSidebarView,
      children: [!i && (null == t ? null : (0, c.jsx)("div", {
        className: h()(j.sidebarRegion, (0, T.getThemeClass)(l), {
          [j.flexFullWidth]: f.isMobile,
          [j.hidden]: f.isMobile && !1 === d
        }),
        children: (0, c.jsx)(S.AdvancedScrollerThin, {
          className: j.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: h()(j.sidebar, {
              [j.mobileSidebar]: f.isMobile
            }),
            children: [f.isMobile && (0, c.jsx)("div", {
              className: j.mobileSidebarHeader,
              children: O
            }), t]
          })
        })
      })), function() {
        let e = null != x && null != r && d,
          t = f.isMobile && (0, c.jsxs)("div", {
            className: h()(j.mobileContentHeader, {
              [j.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(p.HamburgerButton, {
              onClick: x
            }), O]
          });
        if ("custom" === o) return (0, c.jsxs)(b.TransitionGroup, {
          component: "div",
          className: j.contentRegion,
          children: [t, n, !f.isMobile && O, M()]
        });
        let i = I[null != o ? o : "default"];
        return (0, c.jsxs)(b.TransitionGroup, {
          component: "div",
          className: h()(j.contentRegion, {
            [j.hidden]: f.isMobile && !0 === d
          }),
          children: [(0, c.jsxs)("div", {
            className: j.contentTransitionWrap,
            children: [t, (0, c.jsxs)(S.AdvancedScrollerAuto, {
              className: h()(j.contentRegionScroller, N ? j.contentRegionHiddenSidebar : j.contentRegionShownSidebar),
              ref: _,
              children: [(0, c.jsx)(E.Provider, {
                value: C.current,
                children: (0, c.jsx)(S.TabBar.Panel, {
                  id: s,
                  className: h()(j.contentColumn, j[i], {
                    [j.mobileContent]: f.isMobile
                  }),
                  ref: P,
                  style: f.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: N ? n : (0, c.jsx)(S.FocusRingScope, {
                    containerRef: P,
                    children: n
                  })
                })
              }), !f.isMobile && O]
            })]
          }), M()]
        })
      }()]
    }))
  })
}