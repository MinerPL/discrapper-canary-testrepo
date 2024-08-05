a.d(t, {
  o: function() {
return p;
  }
}), a(47120);
var n, i = a(735250),
  r = a(470079),
  l = a(948789),
  o = a(66037),
  s = a(248108),
  c = a(231338),
  d = a(330711);

function u(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
value: a,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = a, e;
}
let h = c.j_.MAIN_NAVIGATION_MENU,
  m = (e, t) => [{
  route: c.am.DOWNLOAD,
  linkClicked: 'download',
  title: t.DOWNLOAD
},
{
  route: c.am.NITRO,
  linkClicked: 'nitro',
  title: t.NITRO,
  external: !0
},
{
  route: c.am.JOBS,
  linkClicked: 'jobs',
  title: t.JOBS,
  external: !0
},
{
  title: t.DEVELOPERS,
  links: [{
      route: c.am.RICH_PRESENCE,
      linkClicked: 'rich_presence',
      title: t.RICH_PRESENCE
    },
    {
      route: c.am.VERIFICATION,
      linkClicked: 'verification',
      title: t.VERIFICATION,
      external: !0
    },
    {
      route: c.yX.DEV_PORTAL,
      linkClicked: 'developers',
      title: t.DEVELOPER_PORTAL,
      external: !0
    },
    {
      route: c.yX.DEV_PORTAL_DOCUMENTATION,
      linkClicked: 'documentation',
      title: t.DOCUMENTATION,
      external: !0
    }
  ]
},
{
  title: t.COMMUNITY,
  links: [{
      route: c.am.OPEN_SOURCE,
      linkClicked: 'open_source',
      title: t.OPEN_SOURCE
    },
    {
      route: c.am.PARTNERS,
      linkClicked: 'partners',
      title: t.PARTNERS,
      external: !0
    },
    {
      route: c.am.HYPESQUAD,
      linkClicked: 'hypesquad',
      title: t.HYPESQUAD,
      external: !0
    },
    {
      route: c.am.GUIDELINES,
      linkClicked: 'guidelines',
      title: t.GUIDELINES,
      external: !0
    }
  ]
},
{
  title: t.SUPPORT,
  links: [{
      route: '//support.discord.com/hc/'.concat(e),
      linkClicked: 'helpandsupport',
      title: t.HELP_AND_SUPPORT,
      external: !0
    },
    {
      route: c.yX.STATUS,
      linkClicked: 'status',
      title: t.STATUS,
      external: !0
    },
    {
      route: c.am.SAFETY_LANDING,
      linkClicked: 'safetycenter',
      title: t.SAFETY_CENTER,
      external: !0
    }
  ]
}
  ];
class p extends(n = r.PureComponent) {
  render() {
let e = (0, l.fQ)(this.context.router),
  {
    isMobile: t,
    isVisible: a,
    styles: n,
    NavigationMessages: r,
    TrackClick: u,
    avoidRouter: p
  } = this.props,
  {
    sectionShown: N
  } = this.state;
return m(null != d.Z ? d.Z.getLocale().toLowerCase() : '', r).map(r => {
  if (null != r.links)
    return (0, i.jsx)(s.Z, {
      title: r.title,
      links: r.links,
      isOpen: N === r.title,
      isMobile: t,
      avoidRouter: p,
      TrackClick: u,
      onClose: this.closeSubNav,
      onOpen: this.openSubNav
    }, r.title);
  if (r.external && null != r.route)
    return (0, i.jsx)('li', {
      className: n.listItemInactive,
      role: 'none',
      children: (0, i.jsx)(u, {
        className: n.mainNavLink,
        eventName: h,
        data: r.linkClicked ? {
          linkClicked: r.linkClicked
        } : {},
        href: r.route,
        rel: 'me',
        children: r.title
      })
    }, 'external_link_'.concat(r.route));
  if (null != r.route)
    return (0, i.jsx)('li', {
      className: e(r.route) ? n.listItemActive : n.listItemInactive,
      role: 'none',
      children: (0, i.jsx)(o.Z, {
        avoidRouter: p,
        to: r.route,
        from: c.j_.MAIN_NAVIGATION_MENU,
        tabIndex: a ? 0 : -1,
        role: 'menuitem',
        children: (0, i.jsx)(u, {
          tag: 'span',
          className: n.mainNavLink,
          eventName: h,
          data: {
            linkClicked: r.linkClicked
          },
          children: r.title
        })
      })
    }, 'link_'.concat(r.route));
  return [];
});
  }
  constructor(...e) {
super(...e), u(this, 'state', {
  sectionShown: null
}), u(this, 'closeSubNav', () => {
  let {
    sectionShown: e
  } = this.state;
  null !== e && this.setState({
    sectionShown: null
  });
}), u(this, 'openSubNav', e => {
  let {
    sectionShown: t
  } = this.state;
  t !== e && this.setState({
    sectionShown: e
  });
});
  }
}
u(p, 'defaultProps', {
  isMobile: !1,
  isVisible: !0
});