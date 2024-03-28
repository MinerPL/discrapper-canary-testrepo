"use strict";
n.r(t), n.d(t, {
  DesktopHeader: function() {
    return x
  }
}), n("47120"), n("653041");
var s = n("735250"),
  l = n("470079"),
  a = n("557533"),
  i = n.n(a),
  r = n("771950"),
  o = n("860911"),
  c = n("66037"),
  u = n("787907"),
  d = n("643103"),
  p = n("34211"),
  h = n("231338"),
  N = n("436620"),
  g = n("431138"),
  m = n("97026");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
  C = () => [{
    route: (0, r.getLocalizedLink)(h.LocalizedLinks.TWITTER),
    linkClicked: "twitter",
    alt: "Discord's Twitter",
    img: g.Images.ASSET_SOCIAL_TWITTER
  }, {
    route: h.SOCIAL_LINKS.FACEBOOK_URL,
    linkClicked: "facebook",
    alt: "Discord's Facebook",
    img: g.Images.ASSET_SOCIAL_FACEBOOK
  }, {
    route: h.SOCIAL_LINKS.INSTAGRAM_URL,
    linkClicked: "instagram",
    alt: "Discord's Instagram",
    img: g.Images.ASSET_SOCIAL_INSTAGRAM
  }];
class x extends l.PureComponent {
  componentDidMount() {
    this.setState({
      isAppCompatible: N.IS_APP_COMPATIBLE_BROWSER
    })
  }
  render() {
    let {
      className: e,
      mainContentId: t,
      skipToContentLabel: n,
      NavigationMessages: l,
      onChangeLocale: a,
      TrackClick: r,
      avoidRouter: o
    } = this.props;
    return (0, s.jsxs)("header", {
      className: i()(m.header, e),
      children: [(0, s.jsxs)("nav", {
        className: m.headerInner,
        children: [(0, s.jsxs)("div", {
          className: m.headerLogo,
          children: [(0, s.jsx)(r, {
            tag: "div",
            eventName: f,
            data: {
              linkClicked: "logo"
            },
            children: (0, s.jsx)(c.default, {
              avoidRouter: o,
              to: h.WebRoutes.INDEX,
              from: h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
              children: (0, s.jsx)(u.DesktopHeaderLogo, {})
            })
          }), null != t ? (0, s.jsx)("a", {
            className: m.skipToContent,
            href: "#".concat(t),
            children: n
          }) : null]
        }), (0, s.jsx)("ul", {
          className: m.headerNav,
          children: (0, s.jsx)(p.MainNavigation, {
            avoidRouter: o,
            TrackClick: r,
            styles: m,
            NavigationMessages: l
          })
        }), (0, s.jsxs)("ul", {
          className: m.headerNavRight,
          children: [this.renderSocialMediaNav(), (0, s.jsx)(d.LocalePicker, {
            onChange: a
          })]
        })]
      }), null != t && (0, s.jsx)("div", {
        id: t,
        tabIndex: -1
      })]
    })
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      isAppCompatible: !0
    }), k(this, "getAppButton", () => {
      let {
        token: e,
        NavigationMessages: t,
        TrackClick: n,
        authRedirectTo: l
      } = this.props, {
        isAppCompatible: a
      } = this.state, i = (0, o.getLoginPath)(l), r = t.LOGIN;
      return null != e && (i = h.AppRoutes.ME, r = t.OPEN), a ? (0, s.jsx)("li", {
        className: m.listItemInactive,
        children: (0, s.jsx)(n, {
          eventName: f,
          className: m.appButton,
          data: {
            linkClicked: e ? "open" : "login",
            googleAnalytics: !0
          },
          href: i,
          children: r
        })
      }, "app-button") : null
    }), k(this, "renderSocialMediaNav", () => {
      let {
        TrackClick: e
      } = this.props, t = C().map(t => (0, s.jsx)("li", {
        className: i()(m.listItemInactive, m.listItemSocialMedia),
        children: (0, s.jsx)(e, {
          eventName: f,
          className: m.rightNavLink,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          target: "_blank",
          children: (0, s.jsx)("img", {
            src: t.img,
            alt: t.alt
          })
        })
      }, t.route)), n = this.getAppButton();
      return null != n && t.push(n), t
    })
  }
}