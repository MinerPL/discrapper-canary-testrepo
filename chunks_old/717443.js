"use strict";
s.r(t), s.d(t, {
  MobileHeader: function() {
    return k
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  a = s("421898"),
  i = s.n(a),
  r = s("582909"),
  o = s.n(r),
  c = s("353386"),
  u = s("146230"),
  d = s("904934"),
  p = s("156713"),
  h = s("843455"),
  N = s("352220"),
  g = s("116161");
let m = h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
class k extends l.PureComponent {
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
      TrackClick: s,
      onChangeLocale: l,
      avoidRouter: a,
      openNavAriaLabel: r,
      hideNavAriaLabel: o
    } = this.props, {
      menuOpen: k
    } = this.state;
    return (0, n.jsx)("header", {
      className: i(g.header, e),
      children: (0, n.jsxs)("nav", {
        className: g.headerInner,
        children: [(0, n.jsx)(s, {
          tag: "div",
          eventName: m,
          className: g.headerLogo,
          data: {
            linkClicked: "logo"
          },
          children: (0, n.jsx)(u.default, {
            avoidRouter: a,
            className: g.logoWrapper,
            to: h.WebRoutes.INDEX,
            from: h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
            children: (0, n.jsx)("img", {
              className: g.logo,
              src: N.Images.ASSET_LOGO_DISCORD_SVG,
              alt: "Discord",
              itemProp: "logo"
            })
          })
        }), (0, n.jsx)(s, {
          tag: "div",
          className: g.hamburgerButton,
          eventName: m,
          data: {
            linkClicked: "mobile-menu"
          },
          children: (0, n.jsx)(c.HamburgerButton, {
            open: k,
            "aria-haspopup": "true",
            "aria-label": k ? o : r,
            "aria-expanded": k,
            "aria-controls": this._mainNavId,
            onClick: this.toggleMenu
          })
        }), (0, n.jsxs)("ul", {
          className: k ? g.headerNavOpen : g.headerNav,
          children: [(0, n.jsx)(p.MainNavigation, {
            avoidRouter: a,
            TrackClick: s,
            styles: g,
            isMobile: !0,
            isVisible: k,
            NavigationMessages: t
          }), (0, n.jsx)(d.LocalePicker, {
            onChange: l
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this._mainNavId = o("mainNav"), this.state = {
      menuOpen: !1
    }, this.toggleMenu = () => {
      this.setState({
        menuOpen: !this.state.menuOpen
      })
    }, this.handleKeyDown = e => {
      let {
        menuOpen: t
      } = this.state;
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), t && this.toggleMenu())
    }
  }
}