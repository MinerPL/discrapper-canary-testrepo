"use strict";
n.r(t), n.d(t, {
  ContentTypes: function() {
    return a
  },
  DefaultCustomContentScroller: function() {
    return P
  },
  ListContentScroller: function() {
    return I
  },
  SectionTypes: function() {
    return C
  }
});
var i, s, l, r, o, a, c = n("735250"),
  u = n("470079"),
  d = n("803997"),
  h = n.n(d),
  m = n("718017"),
  p = n("608863"),
  f = n("873546"),
  S = n("215569"),
  b = n("481060"),
  g = n("110924"),
  v = n("864293"),
  x = n("358085"),
  N = n("792125"),
  T = n("425493"),
  j = n("595663");
let C = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  E = u.createContext(null);
class I extends(o = u.PureComponent) {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(b.ListAuto, {
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

function P(e) {
  let {
    children: t
  } = e;
  return (0, c.jsx)("div", {
    className: j.customColumn,
    children: (0, c.jsx)("div", {
      className: j.customContainer,
      children: (0, c.jsx)(b.ScrollerAuto, {
        className: h()(j.customScroller, j.contentRegionScroller),
        children: t
      })
    })
  })
}
l = {
  paddingTop: 60,
  paddingBottom: 60
}, (s = "defaultProps") in(i = I) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, (r = a || (a = {})).MINIMAL = "minimal", r.CUSTOM = "custom", r.DEFAULT = "default", r.WIDE = "wide";
let y = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function R(e) {
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
    children: (0, c.jsx)(b.FocusRingScope, {
      containerRef: s,
      children: (0, c.jsx)("div", {
        className: j.tools,
        children: (0, c.jsx)(T.default, {
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
    closeAction: l,
    sidebarTheme: r,
    contentType: o,
    scrollerRef: a,
    mobileSidebarOpen: d,
    toggleSidebar: x,
    hideSidebar: T = !1
  } = e, C = u.useRef(null), I = u.useRef(null), P = (0, g.default)(s), A = (0, m.useTransition)(T, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: T,
    config: m.config.stiff
  }), O = u.useCallback(e => {
    C.current = e, null != a && (a.current = e)
  }, [a]);
  u.useLayoutEffect(() => {
    null != C.current && P !== s && C.current.scrollTo({
      to: 0
    })
  }, [s, P, C]);
  let M = (0, c.jsx)(R, {
    isMobile: f.isMobile,
    mobileSidebarOpen: d,
    closeAction: l
  });

  function _() {
    return null == i ? null : (0, c.jsx)(v.default, {
      className: h()(j.noticeRegion, {
        [j.noticeRegionHiddenSidebar]: T
      }),
      children: i
    }, s)
  }
  return (0, c.jsx)(c.Fragment, {
    children: A((e, i) => (0, c.jsxs)(m.animated.div, {
      style: e,
      className: j.standardSidebarView,
      children: [!i && (null == t ? null : (0, c.jsx)("div", {
        className: h()(j.sidebarRegion, (0, N.getThemeClass)(r), {
          [j.flexFullWidth]: f.isMobile,
          [j.hidden]: f.isMobile && !1 === d
        }),
        children: (0, c.jsx)(b.AdvancedScrollerThin, {
          className: j.sidebarRegionScroller,
          fade: !0,
          children: (0, c.jsxs)("nav", {
            className: h()(j.sidebar, {
              [j.mobileSidebar]: f.isMobile
            }),
            children: [f.isMobile && (0, c.jsx)("div", {
              className: j.mobileSidebarHeader,
              children: M
            }), t]
          })
        })
      })), function() {
        let e = null != x && null != l && d,
          t = f.isMobile && (0, c.jsxs)("div", {
            className: h()(j.mobileContentHeader, {
              [j.hideHamburger]: !e
            }),
            children: [e && (0, c.jsx)(p.HamburgerButton, {
              onClick: x
            }), M]
          });
        if ("custom" === o) return (0, c.jsxs)(S.TransitionGroup, {
          component: "div",
          className: j.contentRegion,
          children: [t, n, !f.isMobile && M, _()]
        });
        let i = y[null != o ? o : "default"];
        return (0, c.jsxs)(S.TransitionGroup, {
          component: "div",
          className: h()(j.contentRegion, {
            [j.hidden]: f.isMobile && !0 === d
          }),
          children: [(0, c.jsxs)("div", {
            className: j.contentTransitionWrap,
            children: [t, (0, c.jsxs)(b.AdvancedScrollerAuto, {
              className: h()(j.contentRegionScroller, T ? j.contentRegionHiddenSidebar : j.contentRegionShownSidebar),
              ref: O,
              children: [(0, c.jsx)(E.Provider, {
                value: C.current,
                children: (0, c.jsx)(b.TabBar.Panel, {
                  id: s,
                  className: h()(j.contentColumn, j[i], {
                    [j.mobileContent]: f.isMobile
                  }),
                  ref: I,
                  style: f.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: T ? n : (0, c.jsx)(b.FocusRingScope, {
                    containerRef: I,
                    children: n
                  })
                })
              }), !f.isMobile && M]
            })]
          }), _()]
        })
      }()]
    }))
  })
}