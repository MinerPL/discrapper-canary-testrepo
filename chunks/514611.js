n(47120);
var i, s = n(735250),
  a = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(622535),
  c = n(481060),
  d = n(239091),
  u = n(556017),
  _ = n(879484),
  h = n(26580),
  E = n(206887),
  I = n(134432),
  m = n(695346),
  g = n(768581),
  p = n(900849),
  T = n(940627),
  S = n(806519),
  C = n(981631),
  f = n(689938),
  N = n(445222),
  A = n(129512),
  Z = n(330065),
  L = n(755386);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class O extends(i = a.PureComponent) {
  getDefaultSplashURL(e, t) {
if (t)
  return L;
switch (e) {
  case C.BRd.DARK:
    return A;
  case C.BRd.LIGHT:
    return Z;
}
  }
  render() {
var e;
let {
  guild: t,
  className: n,
  theme: i,
  onTagClick: a
} = this.props, {
  loaded: r,
  hasBeenSeen: d,
  isVisible: A,
  submitting: Z
} = this.state, {
  name: L,
  description: v,
  presenceCount: O,
  memberCount: R,
  keywords: x
} = t, b = null === (e = t.features) || void 0 === e ? void 0 : e.has(C.oNc.HUB), P = g.ZP.getGuildDiscoverySplashURL({
  id: t.id,
  splash: t.discoverySplash,
  size: 300 * (0, I.x_)()
}), M = null != P ? P : this.getDefaultSplashURL(i, b), D = g.ZP.getGuildIconURL({
  id: t.id,
  icon: t.icon,
  size: 40
});
_.w.trackExposure({
  location: 'de1ef6_1'
});
let {
  shouldDisplayTags: y
} = _.w.getCurrentConfig({
  location: 'de1ef6_2'
}, {
  autoTrackExposure: !1
}), {
  canSeeInAppReportingButtons: j
} = u.N.getCurrentConfig({
  location: 'de1ef6_3'
}, {
  autoTrackExposure: !1
});
u.N.trackExposure({
  location: 'de1ef6_4'
});
let U = m.Sb.getSetting();
return (0, s.jsx)(o.$, {
  active: !A,
  onChange: this.setIsVisible,
  threshold: 0.1,
  children: A ? (0, s.jsx)(o.$, {
    onChange: this.handleVisibilityChange,
    active: !d,
    threshold: 0.55,
    children: (0, s.jsxs)('div', {
      className: l()(n, {
        [N.loaded]: r,
        [N.loading]: !r
      }),
      children: [
        Z ? (0, s.jsx)(c.Spinner, {
          type: c.Spinner.Type.PULSING_ELLIPSIS,
          className: N.spinner
        }) : null,
        (0, s.jsxs)(c.Clickable, {
          onClick: this.handleClickView,
          className: l()(N.card, {
            [N.submitting]: Z,
            [N.cardWithTags]: y
          }),
          onContextMenu: this.handleContextMenu,
          children: [
            (0, s.jsxs)('div', {
              className: N.cardHeader,
              children: [
                (0, s.jsx)('div', {
                  className: N.splash,
                  children: (0, s.jsx)('img', {
                    src: M,
                    alt: '',
                    className: l()(N.splashImage, {
                      [N.splashImageHeight]: !b
                    }),
                    onLoad: () => this.setState({
                      loaded: !0
                    })
                  })
                }),
                U || j ? (0, s.jsx)('div', {
                  className: N.actionButtons,
                  children: (0, s.jsx)(E.Z, {
                    guild: t
                  })
                }) : null,
                (0, s.jsx)('div', {
                  className: N.guildIcon,
                  children: (0, s.jsx)(S.ZP, {
                    mask: S.ZP.Masks.SQUIRCLE,
                    width: 48,
                    height: 48,
                    children: (0, s.jsx)('div', {
                      className: N.iconMask,
                      children: (0, s.jsx)(S.ZP, {
                        mask: S.ZP.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, s.jsx)('img', {
                          src: D,
                          alt: '',
                          className: N.avatar
                        })
                      })
                    })
                  })
                })
              ]
            }),
            (0, s.jsxs)('div', {
              className: N.guildInfo,
              children: [
                (0, s.jsxs)('div', {
                  className: N.title,
                  children: [
                    (0, s.jsx)(T.Z, {
                      className: N.guildBadge,
                      guild: t,
                      tooltipColor: c.Tooltip.Colors.PRIMARY
                    }),
                    (0, s.jsx)(c.Heading, {
                      variant: 'heading-md/semibold',
                      className: N.guildName,
                      children: L
                    })
                  ]
                }),
                (0, s.jsx)(c.Text, {
                  className: N.description,
                  variant: 'text-sm/normal',
                  color: 'header-secondary',
                  children: v
                }),
                y && null != x && null != a && (0, s.jsx)(h.F, {
                  tags: x,
                  onTagClick: e => a(e, t.id),
                  guildId: t.id,
                  section: p.P1.POPULAR
                }),
                (0, s.jsxs)('div', {
                  className: N.memberInfo,
                  children: [
                    null != O && (0, s.jsxs)('div', {
                      className: N.memberCount,
                      children: [
                        (0, s.jsx)('div', {
                          className: N.dotOnline
                        }),
                        (0, s.jsx)(c.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                            membersOnline: O
                          })
                        })
                      ]
                    }),
                    null != R && (0, s.jsxs)('div', {
                      className: N.memberCount,
                      children: [
                        (0, s.jsx)('div', {
                          className: N.dotOffline
                        }),
                        (0, s.jsx)(c.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                            count: R
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  }) : (0, s.jsx)('div', {
    className: l()(N.card, {
      [N.cardWithTags]: y
    })
  })
});
  }
  constructor(...e) {
super(...e), v(this, 'state', {
  loaded: !1,
  hasBeenSeen: !1,
  isVisible: !1,
  submitting: !1
}), v(this, 'handleClickView', async e => {
  let {
    className: t
  } = e.target;
  if (t.includes('Menu'))
    return;
  let {
    onView: n,
    guild: i
  } = this.props;
  e.stopPropagation(), this.setState({
    submitting: !0
  });
  try {
    null != n && await n(i.id);
  } finally {
    this.setState({
      submitting: !1
    });
  }
}), v(this, 'handleVisibilityChange', e => {
  let {
    onGuildCardSeen: t,
    guild: n
  } = this.props;
  null != n && !this.state.hasBeenSeen && e && (this.setState({
    hasBeenSeen: e
  }), null != t && t(n.id));
}), v(this, 'handleContextMenu', e => {
  (0, d.jW)(e, async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 455839));
    return t => (0, s.jsx)(e, {
      ...t,
      guild: this.props.guild
    });
  });
}), v(this, 'setIsVisible', e => {
  this.setState({
    isVisible: e
  });
});
  }
}
v(O, 'Placeholder', e => (0, s.jsx)('div', {
  className: l()(e.className, N.cardPlaceholder)
})), t.Z = O;