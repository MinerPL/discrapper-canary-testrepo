"use strict";
n.r(t), n.d(t, {
  SectionTypes: function() {
    return x
  },
  ListContentScroller: function() {
    return T
  },
  DefaultCustomContentScroller: function() {
    return j
  },
  ContentTypes: function() {
    return s
  },
  default: function() {
    return I
  }
});
var i, s, l = n("37983"),
  r = n("884691"),
  o = n("414456"),
  a = n.n(o),
  c = n("146606"),
  u = n("353386"),
  d = n("394846"),
  h = n("266491"),
  m = n("77078"),
  p = n("84339"),
  f = n("965397"),
  S = n("773336"),
  b = n("439932"),
  g = n("304580"),
  v = n("7691");
let x = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  N = r.createContext(null);
class T extends r.PureComponent {
  renderContent() {
    let {
      scrollerRef: e,
      ...t
    } = this.props;
    return (0, l.jsx)("div", {
      className: v.customContainer,
      children: (0, l.jsx)(m.ListAuto, {
        ...t,
        className: a(v.customScroller, v.contentRegionScroller),
        ref: e
      })
    })
  }
  render() {
    return (0, l.jsx)("div", {
      className: v.customColumn,
      children: this.renderContent()
    })
  }
}

function j(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: v.customColumn,
    children: (0, l.jsx)("div", {
      className: v.customContainer,
      children: (0, l.jsx)(m.ScrollerAuto, {
        className: a(v.customScroller, v.contentRegionScroller),
        children: t
      })
    })
  })
}
T.defaultProps = {
  paddingTop: 60,
  paddingBottom: 60
}, (i = s || (s = {})).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide";
let C = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide"
});

function E(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, s = r.useRef(null);
  return null == i ? null : (0, l.jsx)("div", {
    className: a(v.toolsContainer, {
      [v.mobileToolsContainer]: t,
      [v.mobileSidebarTools]: t,
      [v.closeIconOnly]: !n,
      [v.isMobileAndroid]: !n && !0 === (0, S.isAndroidWeb)()
    }),
    ref: s,
    children: (0, l.jsx)(m.FocusRingScope, {
      containerRef: s,
      children: (0, l.jsx)("div", {
        className: v.tools,
        children: (0, l.jsx)(g.default, {
          className: a({
            [v.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
          keybind: "ESC"
        })
      })
    })
  })
}
var I = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: i,
    section: s,
    closeAction: o,
    sidebarTheme: S,
    contentType: g,
    scrollerRef: x,
    mobileSidebarOpen: T,
    toggleSidebar: j,
    hideSidebar: I = !1
  } = e, P = r.useRef(null), R = r.useRef(null), y = (0, p.default)(s), A = (0, c.useTransition)(I, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: I,
    config: c.config.stiff
  }), M = r.useCallback(e => {
    P.current = e, null != x && (x.current = e)
  }, [x]);
  r.useLayoutEffect(() => {
    null != P.current && y !== s && P.current.scrollTo({
      to: 0
    })
  }, [s, y, P]);
  let O = (0, l.jsx)(E, {
    isMobile: d.isMobile,
    mobileSidebarOpen: T,
    closeAction: o
  });

  function _() {
    return null == i ? null : (0, l.jsx)(f.default, {
      className: a(v.noticeRegion, {
        [v.noticeRegionHiddenSidebar]: I
      }),
      children: i
    }, s)
  }
  return (0, l.jsx)(l.Fragment, {
    children: A((e, i) => (0, l.jsxs)(c.animated.div, {
      style: e,
      className: v.standardSidebarView,
      children: [!i && (null == t ? null : (0, l.jsx)("div", {
        className: a(v.sidebarRegion, (0, b.getThemeClass)(S), {
          [v.flexFullWidth]: d.isMobile,
          [v.hidden]: d.isMobile && !1 === T
        }),
        children: (0, l.jsx)(m.AdvancedScrollerThin, {
          className: v.sidebarRegionScroller,
          fade: !0,
          children: (0, l.jsxs)("nav", {
            className: a(v.sidebar, {
              [v.mobileSidebar]: d.isMobile
            }),
            children: [d.isMobile && (0, l.jsx)("div", {
              className: v.mobileSidebarHeader,
              children: O
            }), t]
          })
        })
      })), function() {
        let e = null != j && null != o && T,
          t = d.isMobile && (0, l.jsxs)("div", {
            className: a(v.mobileContentHeader, {
              [v.hideHamburger]: !e
            }),
            children: [e && (0, l.jsx)(u.HamburgerButton, {
              onClick: j
            }), O]
          });
        if ("custom" === g) return (0, l.jsxs)(h.TransitionGroup, {
          component: "div",
          className: v.contentRegion,
          children: [t, n, !d.isMobile && O, _()]
        });
        let i = C[null != g ? g : "default"];
        return (0, l.jsxs)(h.TransitionGroup, {
          component: "div",
          className: a(v.contentRegion, {
            [v.hidden]: d.isMobile && !0 === T
          }),
          children: [(0, l.jsxs)("div", {
            className: v.contentTransitionWrap,
            children: [t, (0, l.jsxs)(m.AdvancedScrollerAuto, {
              className: a(v.contentRegionScroller, I ? v.contentRegionHiddenSidebar : v.contentRegionShownSidebar),
              ref: M,
              children: [(0, l.jsx)(N.Provider, {
                value: P.current,
                children: (0, l.jsx)(m.TabBar.Panel, {
                  id: s,
                  className: a(v.contentColumn, v[i], {
                    [v.mobileContent]: d.isMobile
                  }),
                  ref: R,
                  style: d.isMobile ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: I ? n : (0, l.jsx)(m.FocusRingScope, {
                    containerRef: R,
                    children: n
                  })
                })
              }), !d.isMobile && O]
            })]
          }), _()]
        })
      }()]
    }))
  })
}