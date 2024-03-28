"use strict";
let s;
n.r(t), n.d(t, {
  Footer: function() {
    return R
  }
});
var l, a = n("735250"),
  i = n("470079"),
  r = n("557533"),
  o = n.n(r),
  c = n("622535"),
  u = n("213919"),
  d = n("982905"),
  p = n("794010"),
  h = n("66037"),
  N = n("231338"),
  g = n("436620"),
  m = n("330711"),
  k = n("188091");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = "Footer Navigation",
  x = {
    BLURPLE: "Blurple",
    PRIMARY: "Primary"
  },
  A = e => [{
    title: e.PRODUCT,
    routes: [{
      link: N.WebRoutes.DOWNLOAD,
      title: e.DOWNLOAD,
      tracking: "download"
    }, {
      link: N.WebRoutes.BRANDING,
      title: e.BRANDING,
      tracking: "branding"
    }, {
      link: N.WebRoutes.NITRO,
      title: e.NITRO,
      tracking: "nitro",
      external: !0
    }]
  }, {
    title: e.DEVELOPERS,
    routes: [{
      link: N.WebRoutes.RICH_PRESENCE,
      title: e.RICH_PRESENCE,
      tracking: "rich_presence"
    }, {
      link: N.WebRoutes.VERIFICATION,
      title: e.VERIFICATION,
      tracking: "verification",
      external: !0
    }, {
      link: N.Links.DEV_PORTAL_APPLICATIONS,
      title: e.APPLICATIONS,
      tracking: "developers",
      external: !0
    }, {
      link: N.Links.DEV_PORTAL_DOCUMENTATION,
      title: e.DOCUMENTATION,
      tracking: "documentation",
      external: !0
    }]
  }, {
    title: e.RESOURCES,
    routes: [{
      link: N.Links.HELP_AND_SUPPORT,
      title: e.HELP_AND_SUPPORT,
      tracking: "helpandsupport",
      external: !0
    }, {
      link: N.WebRoutes.GUIDELINES,
      title: e.GUIDELINES,
      tracking: "guidelines",
      external: !0
    }, {
      link: N.Links.FEEDBACK,
      title: e.FEEDBACK,
      tracking: "feedback",
      external: !0
    }, {
      link: N.WebRoutes.TERMS,
      title: e.TERMS,
      tracking: "terms",
      external: !0
    }, {
      link: N.WebRoutes.PRIVACY,
      title: e.PRIVACY,
      tracking: "privacy",
      external: !0
    }, {
      link: N.WebRoutes.SECURITY,
      title: e.SECURITY,
      tracking: "security"
    }, {
      link: N.Links.STATUS,
      title: e.STATUS,
      tracking: "status",
      external: !0
    }, {
      link: N.WebRoutes.SAFETY_LANDING,
      title: e.SAFETY_CENTER,
      tracking: "safetycenter",
      external: !0
    }]
  }, {
    title: e.COMPANY,
    routes: [{
      link: N.WebRoutes.COMPANY,
      title: e.ABOUT,
      tracking: "about"
    }, {
      link: N.WebRoutes.BLOG,
      title: e.BLOG,
      tracking: "blog",
      external: !0
    }, {
      link: N.WebRoutes.JOBS,
      title: e.JOBS,
      tracking: "join",
      external: !0
    }]
  }, {
    title: e.MORE,
    routes: [{
      link: N.WebRoutes.PARTNERS,
      title: e.PARTNERS,
      tracking: "partners",
      external: !0
    }, {
      link: N.WebRoutes.HYPESQUAD,
      title: e.HYPESQUAD,
      tracking: "hypesquad",
      external: !0
    }, {
      link: N.Links.PRESS_INQUIRIES,
      title: e.PRESS_INQUIRIES,
      tracking: "pressinquiries",
      external: !0
    }, {
      link: N.WebRoutes.OPEN_SOURCE,
      title: e.OPEN_SOURCE,
      tracking: "open_source"
    }]
  }],
  v = e => {
    let {
      colorVariant: t,
      animate: n
    } = e;
    return (0, a.jsx)("svg", {
      className: (0, d.getClass)(k, "footerBackground", t),
      preserveAspectRatio: "none",
      width: "1920",
      height: "100%",
      viewBox: "0 0 1920 330",
      version: "1.1",
      children: (0, a.jsx)("path", {
        className: (0, d.getClass)(k, "footerBackground", n ? "Play" : "Paused"),
        fill: "#1a1c1e",
        fillOpacity: "0.3",
        d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z"
      })
    })
  };
class R extends(l = i.PureComponent) {
  componentDidMount() {
    this.setState({
      token: (0, u.getToken)(),
      isAppCompatible: g.IS_APP_COMPATIBLE_BROWSER
    })
  }
  renderAppButton(e) {
    if ("STATIC_RENDERER" === this.props.platform) return null;
    let {
      downloadLink: t,
      isMobile: n,
      mobileDownloadText: l,
      platform: i,
      variant: r,
      authRedirectTo: o
    } = this.props, {
      isAppCompatible: c
    } = this.state;
    if (n) return (0, a.jsx)(s, {
      eventName: "Download App",
      data: {
        Platform: i,
        PTB: !1,
        Released: !0,
        "Referring Location": "Footer"
      },
      alt: "Download Discord",
      target: "_blank",
      className: (0, d.getClass)(k, "button", r),
      href: t,
      children: l
    });
    if (!c) return (0, a.jsx)(s, {
      eventName: "Download App",
      data: {
        Platform: i,
        PTB: !1,
        Released: !0,
        "Referring Location": "Footer"
      },
      alt: "Download Discord",
      className: (0, d.getClass)(k, "button", r),
      href: N.WebRoutes.DOWNLOAD,
      children: m.default.Messages.Navigation.DOWNLOAD
    });
    let u = null != o ? N.AppRoutes.REGISTER_WITH_REDIRECT(o) : N.AppRoutes.REGISTER,
      p = m.default.Messages.Common.SIGN_UP_NOW;
    return e && (u = N.AppRoutes.ME, p = m.default.Messages.Common.OPEN_DISCORD), (0, a.jsx)(s, {
      eventName: C,
      className: (0, d.getClass)(k, "button", this.props.variant),
      data: {
        linkClicked: e ? "open" : "login",
        googleAnalytics: !0
      },
      href: u,
      children: p
    })
  }
  render() {
    let {
      variant: e,
      style: t,
      className: l,
      avoidRouter: i,
      showWave: r
    } = this.props, {
      animateBackground: u,
      token: p
    } = this.state, g = A(m.default.Messages.Navigation).map(e => {
      let t = e.routes.map((e, t) => e.external ? (0, a.jsx)(s, {
        className: k.route,
        eventName: C,
        data: {
          linkClicked: e.tracking
        },
        href: e.link,
        children: e.title
      }, e.link || t) : (0, a.jsx)(h.default, {
        avoidRouter: i,
        to: e.link,
        from: "footer_navigation",
        className: k.route,
        children: (0, a.jsx)(s, {
          tag: "span",
          eventName: C,
          data: {
            linkClicked: e.tracking
          },
          children: e.title
        })
      }, e.link));
      return (0, a.jsxs)("div", {
        className: k.navigationSection,
        children: [(0, a.jsx)("h3", {
          className: k.navigationHeader,
          children: e.title
        }), t]
      }, e.title)
    });
    return (0, a.jsx)(c.VisibilitySensor, {
      onChange: this.handleVisibility,
      children: (0, a.jsxs)("footer", {
        className: o()((0, d.getClass)(k, "footer", e), l),
        style: t,
        children: [r ? (0, a.jsx)(v, {
          colorVariant: e,
          animate: u
        }) : null, (0, a.jsxs)("div", {
          className: k.footerContent,
          children: [(0, a.jsxs)("div", {
            className: k.navigation,
            children: [(0, a.jsx)("div", {
              className: k.logoWrap,
              children: (0, a.jsx)(s, {
                className: k.logo,
                href: N.WebRoutes.INDEX,
                eventName: C,
                data: {
                  linkClicked: "logo"
                },
                children: (0, a.jsx)("img", {
                  alt: m.default.Messages.Navigation.HOME,
                  src: n("131529")
                })
              })
            }), g]
          }), (0, a.jsx)("div", {
            className: k.separator
          }), (0, a.jsxs)("div", {
            className: k.joinDiscord,
            children: [(0, a.jsxs)("div", {
              className: k.stats,
              children: [(0, a.jsx)("h2", {
                className: k.readyToJoin,
                children: m.default.Messages.Footer.READY_TO_TRY_DISCORD
              }), (0, a.jsx)("h3", {
                className: k.joinOtherPlayers,
                children: m.default.Messages.Footer.JOIN_OVER_PLAYERS_TODAY.format({
                  num: N.ROUGH_COUNT_MILLION_PLAYERS
                })
              })]
            }), this.renderAppButton(p)]
          })]
        })]
      })
    })
  }
  constructor(e) {
    super(e), f(this, "state", {
      animateBackground: !1,
      isMobile: null,
      token: null,
      isAppCompatible: !0
    }), f(this, "handleVisibility", e => {
      this.setState({
        animateBackground: e
      })
    }), null != e.locale && m.default.setLocale(e.locale), s = t => (0, a.jsx)(p.default, {
      track: e.track,
      trackOutboundLink: e.trackOutboundLink,
      ...t
    })
  }
}
f(R, "Variants", x), f(R, "defaultProps", {
  variant: x.PRIMARY,
  showWave: !0
})