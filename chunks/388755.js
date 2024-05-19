"use strict";
n.r(t), n.d(t, {
  MobileHeader: function() {
    return f
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  i = n("557533"),
  a = n.n(i),
  r = n("39383"),
  o = n.n(r),
  c = n("608863"),
  u = n("66037"),
  d = n("643103"),
  p = n("34211"),
  h = n("231338"),
  N = n("431138"),
  g = n("987016");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let k = h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
class f extends l.PureComponent {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }
  render() {
    let {
      className: e,
      NavigationMessages: t,
      TrackClick: n,
      onChangeLocale: l,
      avoidRouter: i,
      openNavAriaLabel: r,
      hideNavAriaLabel: o
    } = this.props, {
      menuOpen: m
    } = this.state;
    return (0, s.jsx)("header", {
      className: a()(g.header, e),
      children: (0, s.jsxs)("nav", {
        className: g.headerInner,
        children: [(0, s.jsx)(n, {
          tag: "div",
          eventName: k,
          className: g.headerLogo,
          data: {
            linkClicked: "logo"
          },
          children: (0, s.jsx)(u.default, {
            avoidRouter: i,
            className: g.logoWrapper,
            to: h.WebRoutes.INDEX,
            from: h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
            children: (0, s.jsx)("img", {
              className: g.logo,
              src: N.Images.ASSET_LOGO_DISCORD_SVG,
              alt: "Discord",
              itemProp: "logo"
            })
          })
        }), (0, s.jsx)(n, {
          tag: "div",
          className: g.hamburgerButton,
          eventName: k,
          data: {
            linkClicked: "mobile-menu"
          },
          children: (0, s.jsx)(c.HamburgerButton, {
            open: m,
            "aria-haspopup": "true",
            "aria-label": m ? o : r,
            "aria-expanded": m,
            "aria-controls": this._mainNavId,
            onClick: this.toggleMenu
          })
        }), (0, s.jsxs)("ul", {
          className: m ? g.headerNavOpen : g.headerNav,
          children: [(0, s.jsx)(p.MainNavigation, {
            avoidRouter: i,
            TrackClick: n,
            styles: g,
            isMobile: !0,
            isVisible: m,
            NavigationMessages: t
          }), (0, s.jsx)(d.LocalePicker, {
            onChange: l
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), m(this, "_mainNavId", o()("mainNav")), m(this, "state", {
      menuOpen: !1
    }), m(this, "toggleMenu", () => {
      this.setState({
        menuOpen: !this.state.menuOpen
      })
    }), m(this, "handleKeyDown", e => {
      let {
        menuOpen: t
      } = this.state;
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), t && this.toggleMenu())
    })
  }
}