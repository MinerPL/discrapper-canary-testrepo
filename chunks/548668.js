let n;
a.d(t, {
  $: function() {
return C;
  }
});
var i, r = a(735250),
  l = a(470079),
  o = a(557533),
  s = a.n(o),
  c = a(622535),
  d = a(213919),
  u = a(982905),
  h = a(794010),
  m = a(66037),
  p = a(231338),
  N = a(436620),
  k = a(330711),
  _ = a(357042);

function f(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
value: a,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = a, e;
}
let g = 'Footer Navigation',
  I = {
BLURPLE: 'Blurple',
PRIMARY: 'Primary'
  },
  b = e => [{
  title: e.PRODUCT,
  routes: [{
      link: p.am.DOWNLOAD,
      title: e.DOWNLOAD,
      tracking: 'download'
    },
    {
      link: p.am.BRANDING,
      title: e.BRANDING,
      tracking: 'branding'
    },
    {
      link: p.am.NITRO,
      title: e.NITRO,
      tracking: 'nitro',
      external: !0
    }
  ]
},
{
  title: e.DEVELOPERS,
  routes: [{
      link: p.am.RICH_PRESENCE,
      title: e.RICH_PRESENCE,
      tracking: 'rich_presence'
    },
    {
      link: p.am.VERIFICATION,
      title: e.VERIFICATION,
      tracking: 'verification',
      external: !0
    },
    {
      link: p.yX.DEV_PORTAL_APPLICATIONS,
      title: e.APPLICATIONS,
      tracking: 'developers',
      external: !0
    },
    {
      link: p.yX.DEV_PORTAL_DOCUMENTATION,
      title: e.DOCUMENTATION,
      tracking: 'documentation',
      external: !0
    }
  ]
},
{
  title: e.RESOURCES,
  routes: [{
      link: p.yX.HELP_AND_SUPPORT,
      title: e.HELP_AND_SUPPORT,
      tracking: 'helpandsupport',
      external: !0
    },
    {
      link: p.am.GUIDELINES,
      title: e.GUIDELINES,
      tracking: 'guidelines',
      external: !0
    },
    {
      link: p.yX.FEEDBACK,
      title: e.FEEDBACK,
      tracking: 'feedback',
      external: !0
    },
    {
      link: p.am.TERMS,
      title: e.TERMS,
      tracking: 'terms',
      external: !0
    },
    {
      link: p.am.PRIVACY,
      title: e.PRIVACY,
      tracking: 'privacy',
      external: !0
    },
    {
      link: p.am.SECURITY,
      title: e.SECURITY,
      tracking: 'security'
    },
    {
      link: p.yX.STATUS,
      title: e.STATUS,
      tracking: 'status',
      external: !0
    },
    {
      link: p.am.SAFETY_LANDING,
      title: e.SAFETY_CENTER,
      tracking: 'safetycenter',
      external: !0
    }
  ]
},
{
  title: e.COMPANY,
  routes: [{
      link: p.am.COMPANY,
      title: e.ABOUT,
      tracking: 'about'
    },
    {
      link: p.am.BLOG,
      title: e.BLOG,
      tracking: 'blog',
      external: !0
    },
    {
      link: p.am.JOBS,
      title: e.JOBS,
      tracking: 'join',
      external: !0
    }
  ]
},
{
  title: e.MORE,
  routes: [{
      link: p.am.PARTNERS,
      title: e.PARTNERS,
      tracking: 'partners',
      external: !0
    },
    {
      link: p.am.HYPESQUAD,
      title: e.HYPESQUAD,
      tracking: 'hypesquad',
      external: !0
    },
    {
      link: p.yX.PRESS_INQUIRIES,
      title: e.PRESS_INQUIRIES,
      tracking: 'pressinquiries',
      external: !0
    },
    {
      link: p.am.OPEN_SOURCE,
      title: e.OPEN_SOURCE,
      tracking: 'open_source'
    }
  ]
}
  ],
  v = e => {
let {
  colorVariant: t,
  animate: a
} = e;
return (0, r.jsx)('svg', {
  className: (0, u.l)(_, 'footerBackground', t),
  preserveAspectRatio: 'none',
  width: '1920',
  height: '100%',
  viewBox: '0 0 1920 330',
  version: '1.1',
  children: (0, r.jsx)('path', {
    className: (0, u.l)(_, 'footerBackground', a ? 'Play' : 'Paused'),
    fill: '#1a1c1e',
    fillOpacity: '0.3',
    d: 'M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z'
  })
});
  };
class C extends(i = l.PureComponent) {
  componentDidMount() {
this.setState({
  token: (0, d.getToken)(),
  isAppCompatible: N.KO
});
  }
  renderAppButton(e) {
if ('STATIC_RENDERER' === this.props.platform)
  return null;
let {
  downloadLink: t,
  isMobile: a,
  mobileDownloadText: i,
  platform: l,
  variant: o,
  authRedirectTo: s
} = this.props, {
  isAppCompatible: c
} = this.state;
if (a)
  return (0, r.jsx)(n, {
    eventName: 'Download App',
    data: {
      Platform: l,
      PTB: !1,
      Released: !0,
      'Referring Location': 'Footer'
    },
    alt: 'Download Discord',
    target: '_blank',
    className: (0, u.l)(_, 'button', o),
    href: t,
    children: i
  });
if (!c)
  return (0, r.jsx)(n, {
    eventName: 'Download App',
    data: {
      Platform: l,
      PTB: !1,
      Released: !0,
      'Referring Location': 'Footer'
    },
    alt: 'Download Discord',
    className: (0, u.l)(_, 'button', o),
    href: p.am.DOWNLOAD,
    children: k.Z.Messages.Navigation.DOWNLOAD
  });
let d = null != s ? p.$w.REGISTER_WITH_REDIRECT(s) : p.$w.REGISTER,
  h = k.Z.Messages.Common.SIGN_UP_NOW;
return e && (d = p.$w.ME, h = k.Z.Messages.Common.OPEN_DISCORD), (0, r.jsx)(n, {
  eventName: g,
  className: (0, u.l)(_, 'button', this.props.variant),
  data: {
    linkClicked: e ? 'open' : 'login',
    googleAnalytics: !0
  },
  href: d,
  children: h
});
  }
  render() {
let {
  variant: e,
  style: t,
  className: i,
  avoidRouter: l,
  showWave: o
} = this.props, {
  animateBackground: d,
  token: h
} = this.state, N = b(k.Z.Messages.Navigation).map(e => {
  let t = e.routes.map((e, t) => e.external ? (0, r.jsx)(n, {
    className: _.route,
    eventName: g,
    data: {
      linkClicked: e.tracking
    },
    href: e.link,
    children: e.title
  }, e.link || t) : (0, r.jsx)(m.Z, {
    avoidRouter: l,
    to: e.link,
    from: 'footer_navigation',
    className: _.route,
    children: (0, r.jsx)(n, {
      tag: 'span',
      eventName: g,
      data: {
        linkClicked: e.tracking
      },
      children: e.title
    })
  }, e.link));
  return (0, r.jsxs)('div', {
    className: _.navigationSection,
    children: [
      (0, r.jsx)('h3', {
        className: _.navigationHeader,
        children: e.title
      }),
      t
    ]
  }, e.title);
});
return (0, r.jsx)(c.$, {
  onChange: this.handleVisibility,
  children: (0, r.jsxs)('footer', {
    className: s()((0, u.l)(_, 'footer', e), i),
    style: t,
    children: [
      o ? (0, r.jsx)(v, {
        colorVariant: e,
        animate: d
      }) : null,
      (0, r.jsxs)('div', {
        className: _.footerContent,
        children: [
          (0, r.jsxs)('div', {
            className: _.navigation,
            children: [
              (0, r.jsx)('div', {
                className: _.logoWrap,
                children: (0, r.jsx)(n, {
                  className: _.logo,
                  href: p.am.INDEX,
                  eventName: g,
                  data: {
                    linkClicked: 'logo'
                  },
                  children: (0, r.jsx)('img', {
                    alt: k.Z.Messages.Navigation.HOME,
                    src: a(131529)
                  })
                })
              }),
              N
            ]
          }),
          (0, r.jsx)('div', {
            className: _.separator
          }),
          (0, r.jsxs)('div', {
            className: _.joinDiscord,
            children: [
              (0, r.jsxs)('div', {
                className: _.stats,
                children: [
                  (0, r.jsx)('h2', {
                    className: _.readyToJoin,
                    children: k.Z.Messages.Footer.READY_TO_TRY_DISCORD
                  }),
                  (0, r.jsx)('h3', {
                    className: _.joinOtherPlayers,
                    children: k.Z.Messages.Footer.JOIN_OVER_PLAYERS_TODAY.format({
                      num: p.vS
                    })
                  })
                ]
              }),
              this.renderAppButton(h)
            ]
          })
        ]
      })
    ]
  })
});
  }
  constructor(e) {
super(e), f(this, 'state', {
  animateBackground: !1,
  isMobile: null,
  token: null,
  isAppCompatible: !0
}), f(this, 'handleVisibility', e => {
  this.setState({
    animateBackground: e
  });
}), null != e.locale && k.Z.setLocale(e.locale), n = t => (0, r.jsx)(h.Z, {
  track: e.track,
  trackOutboundLink: e.trackOutboundLink,
  ...t
});
  }
}
f(C, 'Variants', I), f(C, 'defaultProps', {
  variant: I.PRIMARY,
  showWave: !0
});