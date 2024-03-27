"use strict";
s.r(t), s.d(t, {
  MainNavigation: function() {
    return p
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  a = s("701800"),
  i = s("146230"),
  r = s("292273"),
  o = s("843455"),
  c = s("792788");
let u = o.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
  d = (e, t) => [{
    route: o.WebRoutes.DOWNLOAD,
    linkClicked: "download",
    title: t.DOWNLOAD
  }, {
    route: o.WebRoutes.NITRO,
    linkClicked: "nitro",
    title: t.NITRO,
    external: !0
  }, {
    route: o.WebRoutes.JOBS,
    linkClicked: "jobs",
    title: t.JOBS,
    external: !0
  }, {
    title: t.DEVELOPERS,
    links: [{
      route: o.WebRoutes.RICH_PRESENCE,
      linkClicked: "rich_presence",
      title: t.RICH_PRESENCE
    }, {
      route: o.WebRoutes.VERIFICATION,
      linkClicked: "verification",
      title: t.VERIFICATION,
      external: !0
    }, {
      route: o.Links.DEV_PORTAL,
      linkClicked: "developers",
      title: t.DEVELOPER_PORTAL,
      external: !0
    }, {
      route: o.Links.DEV_PORTAL_DOCUMENTATION,
      linkClicked: "documentation",
      title: t.DOCUMENTATION,
      external: !0
    }]
  }, {
    title: t.COMMUNITY,
    links: [{
      route: o.WebRoutes.OPEN_SOURCE,
      linkClicked: "open_source",
      title: t.OPEN_SOURCE
    }, {
      route: o.WebRoutes.PARTNERS,
      linkClicked: "partners",
      title: t.PARTNERS,
      external: !0
    }, {
      route: o.WebRoutes.HYPESQUAD,
      linkClicked: "hypesquad",
      title: t.HYPESQUAD,
      external: !0
    }, {
      route: o.WebRoutes.GUIDELINES,
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
      route: o.Links.STATUS,
      linkClicked: "status",
      title: t.STATUS,
      external: !0
    }, {
      route: o.WebRoutes.SAFETY_LANDING,
      linkClicked: "safetycenter",
      title: t.SAFETY_CENTER,
      external: !0
    }]
  }];
class p extends l.PureComponent {
  render() {
    let e = (0, a.isActiveCreator)(this.context.router),
      {
        isMobile: t,
        isVisible: s,
        styles: l,
        NavigationMessages: p,
        TrackClick: h,
        avoidRouter: N
      } = this.props,
      {
        sectionShown: g
      } = this.state,
      m = null != c.default ? c.default.getLocale().toLowerCase() : "";
    return d(m, p).map(a => {
      if (null != a.links) return (0, n.jsx)(r.default, {
        title: a.title,
        links: a.links,
        isOpen: g === a.title,
        isMobile: t,
        avoidRouter: N,
        TrackClick: h,
        onClose: this.closeSubNav,
        onOpen: this.openSubNav
      }, a.title);
      if (a.external && null != a.route) return (0, n.jsx)("li", {
        className: l.listItemInactive,
        role: "none",
        children: (0, n.jsx)(h, {
          className: l.mainNavLink,
          eventName: u,
          data: a.linkClicked ? {
            linkClicked: a.linkClicked
          } : {},
          href: a.route,
          rel: "me",
          children: a.title
        })
      }, "external_link_".concat(a.route));
      if (null != a.route) return (0, n.jsx)("li", {
        className: e(a.route) ? l.listItemActive : l.listItemInactive,
        role: "none",
        children: (0, n.jsx)(i.default, {
          avoidRouter: N,
          to: a.route,
          from: o.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
          tabIndex: s ? 0 : -1,
          role: "menuitem",
          children: (0, n.jsx)(h, {
            tag: "span",
            className: l.mainNavLink,
            eventName: u,
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
    super(...e), this.state = {
      sectionShown: null
    }, this.closeSubNav = () => {
      let {
        sectionShown: e
      } = this.state;
      null !== e && this.setState({
        sectionShown: null
      })
    }, this.openSubNav = e => {
      let {
        sectionShown: t
      } = this.state;
      t !== e && this.setState({
        sectionShown: e
      })
    }
  }
}
p.defaultProps = {
  isMobile: !1,
  isVisible: !0
}