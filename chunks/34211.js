"use strict";
n.r(t), n.d(t, {
  MainNavigation: function() {
    return N
  }
}), n("47120");
var s, l = n("735250"),
  a = n("470079"),
  i = n("948789"),
  r = n("66037"),
  o = n("248108"),
  c = n("231338"),
  u = n("330711");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = c.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
  h = (e, t) => [{
    route: c.WebRoutes.DOWNLOAD,
    linkClicked: "download",
    title: t.DOWNLOAD
  }, {
    route: c.WebRoutes.NITRO,
    linkClicked: "nitro",
    title: t.NITRO,
    external: !0
  }, {
    route: c.WebRoutes.JOBS,
    linkClicked: "jobs",
    title: t.JOBS,
    external: !0
  }, {
    title: t.DEVELOPERS,
    links: [{
      route: c.WebRoutes.RICH_PRESENCE,
      linkClicked: "rich_presence",
      title: t.RICH_PRESENCE
    }, {
      route: c.WebRoutes.VERIFICATION,
      linkClicked: "verification",
      title: t.VERIFICATION,
      external: !0
    }, {
      route: c.Links.DEV_PORTAL,
      linkClicked: "developers",
      title: t.DEVELOPER_PORTAL,
      external: !0
    }, {
      route: c.Links.DEV_PORTAL_DOCUMENTATION,
      linkClicked: "documentation",
      title: t.DOCUMENTATION,
      external: !0
    }]
  }, {
    title: t.COMMUNITY,
    links: [{
      route: c.WebRoutes.OPEN_SOURCE,
      linkClicked: "open_source",
      title: t.OPEN_SOURCE
    }, {
      route: c.WebRoutes.PARTNERS,
      linkClicked: "partners",
      title: t.PARTNERS,
      external: !0
    }, {
      route: c.WebRoutes.HYPESQUAD,
      linkClicked: "hypesquad",
      title: t.HYPESQUAD,
      external: !0
    }, {
      route: c.WebRoutes.GUIDELINES,
      linkClicked: "guidelines",
      title: t.GUIDELINES,
      external: !0
    }]
  }, {
    title: t.SUPPORT,
    links: [{
      route: "//support.discord.com/hc/".concat(e),
      linkClicked: "helpandsupport",
      title: t.HELP_AND_SUPPORT,
      external: !0
    }, {
      route: c.Links.STATUS,
      linkClicked: "status",
      title: t.STATUS,
      external: !0
    }, {
      route: c.WebRoutes.SAFETY_LANDING,
      linkClicked: "safetycenter",
      title: t.SAFETY_CENTER,
      external: !0
    }]
  }];
class N extends(s = a.PureComponent) {
  render() {
    let e = (0, i.isActiveCreator)(this.context.router),
      {
        isMobile: t,
        isVisible: n,
        styles: s,
        NavigationMessages: a,
        TrackClick: d,
        avoidRouter: N
      } = this.props,
      {
        sectionShown: g
      } = this.state;
    return h(null != u.default ? u.default.getLocale().toLowerCase() : "", a).map(a => {
      if (null != a.links) return (0, l.jsx)(o.default, {
        title: a.title,
        links: a.links,
        isOpen: g === a.title,
        isMobile: t,
        avoidRouter: N,
        TrackClick: d,
        onClose: this.closeSubNav,
        onOpen: this.openSubNav
      }, a.title);
      if (a.external && null != a.route) return (0, l.jsx)("li", {
        className: s.listItemInactive,
        role: "none",
        children: (0, l.jsx)(d, {
          className: s.mainNavLink,
          eventName: p,
          data: a.linkClicked ? {
            linkClicked: a.linkClicked
          } : {},
          href: a.route,
          rel: "me",
          children: a.title
        })
      }, "external_link_".concat(a.route));
      if (null != a.route) return (0, l.jsx)("li", {
        className: e(a.route) ? s.listItemActive : s.listItemInactive,
        role: "none",
        children: (0, l.jsx)(r.default, {
          avoidRouter: N,
          to: a.route,
          from: c.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
          tabIndex: n ? 0 : -1,
          role: "menuitem",
          children: (0, l.jsx)(d, {
            tag: "span",
            className: s.mainNavLink,
            eventName: p,
            data: {
              linkClicked: a.linkClicked
            },
            children: a.title
          })
        })
      }, "link_".concat(a.route));
      return []
    })
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      sectionShown: null
    }), d(this, "closeSubNav", () => {
      let {
        sectionShown: e
      } = this.state;
      null !== e && this.setState({
        sectionShown: null
      })
    }), d(this, "openSubNav", e => {
      let {
        sectionShown: t
      } = this.state;
      t !== e && this.setState({
        sectionShown: e
      })
    })
  }
}
d(N, "defaultProps", {
  isMobile: !1,
  isVisible: !0
})