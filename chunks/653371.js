a.d(t, {
  a: function() {
return I;
  }
}), a(47120), a(653041);
var n = a(735250),
  i = a(470079),
  r = a(557533),
  l = a.n(r),
  o = a(771950),
  s = a(860911),
  c = a(66037),
  d = a(787907),
  u = a(643103),
  h = a(34211),
  m = a(231338),
  p = a(436620),
  N = a(431138),
  k = a(791364);

function _(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
value: a,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = a, e;
}
let f = m.j_.MAIN_NAVIGATION_MENU,
  g = () => [{
  route: (0, o.L)(m.RK.TWITTER),
  linkClicked: 'twitter',
  alt: 'Discord\'s Twitter',
  img: N.r.ASSET_SOCIAL_TWITTER
},
{
  route: m.fK.FACEBOOK_URL,
  linkClicked: 'facebook',
  alt: 'Discord\'s Facebook',
  img: N.r.ASSET_SOCIAL_FACEBOOK
},
{
  route: m.fK.INSTAGRAM_URL,
  linkClicked: 'instagram',
  alt: 'Discord\'s Instagram',
  img: N.r.ASSET_SOCIAL_INSTAGRAM
}
  ];
class I extends i.PureComponent {
  componentDidMount() {
this.setState({
  isAppCompatible: p.KO
});
  }
  render() {
let {
  className: e,
  mainContentId: t,
  skipToContentLabel: a,
  NavigationMessages: i,
  onChangeLocale: r,
  TrackClick: o,
  avoidRouter: s
} = this.props;
return (0, n.jsxs)('header', {
  className: l()(k.header, e),
  children: [
    (0, n.jsxs)('nav', {
      className: k.headerInner,
      children: [
        (0, n.jsxs)('div', {
          className: k.headerLogo,
          children: [
            (0, n.jsx)(o, {
              tag: 'div',
              eventName: f,
              data: {
                linkClicked: 'logo'
              },
              children: (0, n.jsx)(c.Z, {
                avoidRouter: s,
                to: m.am.INDEX,
                from: m.j_.MAIN_NAVIGATION_MENU,
                children: (0, n.jsx)(d.O, {})
              })
            }),
            null != t ? (0, n.jsx)('a', {
              className: k.skipToContent,
              href: '#'.concat(t),
              children: a
            }) : null
          ]
        }),
        (0, n.jsx)('ul', {
          className: k.headerNav,
          children: (0, n.jsx)(h.o, {
            avoidRouter: s,
            TrackClick: o,
            styles: k,
            NavigationMessages: i
          })
        }),
        (0, n.jsxs)('ul', {
          className: k.headerNavRight,
          children: [
            this.renderSocialMediaNav(),
            (0, n.jsx)(u.p, {
              onChange: r
            })
          ]
        })
      ]
    }),
    null != t && (0, n.jsx)('div', {
      id: t,
      tabIndex: -1
    })
  ]
});
  }
  constructor(...e) {
super(...e), _(this, 'state', {
  isAppCompatible: !0
}), _(this, 'getAppButton', () => {
  let {
    token: e,
    NavigationMessages: t,
    TrackClick: a,
    authRedirectTo: i
  } = this.props, {
    isAppCompatible: r
  } = this.state, l = (0, s.U)(i), o = t.LOGIN;
  return null != e && (l = m.$w.ME, o = t.OPEN), r ? (0, n.jsx)('li', {
    className: k.listItemInactive,
    children: (0, n.jsx)(a, {
      eventName: f,
      className: k.appButton,
      data: {
        linkClicked: e ? 'open' : 'login',
        googleAnalytics: !0
      },
      href: l,
      children: o
    })
  }, 'app-button') : null;
}), _(this, 'renderSocialMediaNav', () => {
  let {
    TrackClick: e
  } = this.props, t = g().map(t => (0, n.jsx)('li', {
    className: l()(k.listItemInactive, k.listItemSocialMedia),
    children: (0, n.jsx)(e, {
      eventName: f,
      className: k.rightNavLink,
      data: {
        linkClicked: t.linkClicked
      },
      href: t.route,
      rel: 'me',
      target: '_blank',
      children: (0, n.jsx)('img', {
        src: t.img,
        alt: t.alt
      })
    })
  }, t.route)), a = this.getAppButton();
  return null != a && t.push(a), t;
});
  }
}