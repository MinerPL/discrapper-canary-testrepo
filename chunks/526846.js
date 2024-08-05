n.d(t, {
  m: function() {
return k;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(613828),
  o = n(772848),
  c = n(442837),
  u = n(481060),
  d = n(2052),
  h = n(40851),
  p = n(607070),
  m = n(100527),
  _ = n(906732),
  f = n(703656),
  E = n(210887),
  g = n(390322),
  C = n(626135),
  I = n(348600),
  x = n(566620),
  T = n(520599),
  N = n(155342),
  v = n(127255),
  S = n(5200),
  Z = n(558317),
  A = n(403404),
  M = n(701488),
  b = n(981631),
  R = n(689938),
  j = n(791499),
  L = n(587952),
  P = n(736733),
  O = n(932463),
  y = n(952619);
let D = 'vc-activities-'.concat((0, o.Z)()),
  k = a.forwardRef(function(e, t) {
let {
  channel: n,
  isHovered: s,
  closePopout: o,
  onMouseEnter: k,
  onMouseLeave: U,
  onClick: w,
  className: B
} = e, {
  enabled: H
} = I.Z.useExperiment({
  location: '8009ca_3'
}), {
  enableAmazonMusicShelfPoster: G
} = T.p.useExperiment({
  location: 'ActivitiesMiniShelf'
}, {
  autoTrackExposure: !0
}), {
  enableRoll20MiniShelfBanner: V
} = N.S.useExperiment({
  location: 'ActivitiesMiniShelf'
}, {
  autoTrackExposure: !0
}), F = (0, c.e7)([E.Z], () => E.Z.getState().theme), W = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), {
  id: z,
  guild_id: Y
} = n;
a.useEffect(() => {
  C.default.track(b.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
    channel_id: z,
    guild_id: Y
  });
}, [
  z,
  Y
]), a.useEffect(() => {
  !s && o();
}, [
  o,
  s
]);
let K = (0, h.bp)(),
  {
    analyticsLocations: q
  } = (0, _.ZP)(m.Z.ACTIVITIES_MINI_SHELF),
  {
    analyticsLocations: X
  } = (0, _.ZP)([
    ...q,
    m.Z.ACTIVITIES_MINI_SHELF_BANNER
  ]),
  Q = K === b.IlC.POPOUT,
  J = (0, d.O)(),
  $ = function(e) {
    return (0, v.Z)({
      guildId: e
    }).slice(0, 5);
  }(n.getGuildId());
a.useEffect(() => {
  let e = setTimeout(() => x.ux(), 1000);
  return () => clearTimeout(e);
}, []);
let ee = a.useCallback(() => {
    var e;
    (0, A.Z)({
      channel: n,
      guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
      locationObject: J.location,
      openInPopout: Q,
      analyticsLocations: q,
      opensAppLauncherModal: !0
    }), U(), w();
  }, [
    J,
    q,
    n,
    w,
    U,
    Q
  ]),
  et = a.useCallback(e => {
    k(), C.default.track(b.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
      channel_id: n.id,
      guild_id: n.getGuildId()
    });
  }, [
    k,
    n
  ]),
  en = H ? (0, i.jsxs)(r.rU, {
    to: b.Z5c.ACTIVITIES,
    children: [
      (0, i.jsx)('img', {
        alt: R.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT,
        src: 'light' === F ? L : P,
        className: j.poster
      }),
      (0, i.jsx)('div', {
        className: j.posterDivider
      })
    ]
  }) : G ? (0, i.jsxs)(u.Clickable, {
    className: l()(j.clickableBanner),
    onClick: () => {
      w(), o(), (0, f.uL)(b.Z5c.ACTIVITY_DETAILS(M.Fu), {
        sourceLocationStack: X
      });
    },
    children: [
      (0, i.jsx)('img', {
        alt: R.Z.Messages.EMBEDDED_ACTIVITIES_AMAZON_MUSIC_PROMO_BANNER_ALT,
        src: O,
        className: j.poster
      }),
      (0, i.jsx)('div', {
        className: j.posterDivider
      })
    ]
  }) : V ? (0, i.jsxs)(u.Clickable, {
    className: l()(j.clickableBanner),
    onClick: () => {
      w(), o(), (0, f.uL)(b.Z5c.ACTIVITY_DETAILS(M.lj), {
        sourceLocationStack: X
      });
    },
    children: [
      (0, i.jsx)('img', {
        alt: R.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_ROLL20_POSTER_ALT,
        src: y,
        className: j.poster
      }),
      (0, i.jsx)('div', {
        className: j.posterDivider
      })
    ]
  }) : null;
return (0, i.jsx)(_.Gt, {
  value: q,
  children: (0, i.jsx)(g.Z, {
    children: (0, i.jsxs)(u.Dialog, {
      ref: t,
      'aria-labelledby': D,
      className: B,
      children: [
        (0, i.jsx)(u.HeadingLevel, {
          forceLevel: 2,
          children: (0, i.jsx)(u.HiddenVisually, {
            children: (0, i.jsx)(u.H, {
              id: D,
              children: R.Z.Messages.EMBEDDED_ACTIVITIES_MINI_SHELF_TITLE
            })
          })
        }),
        (0, i.jsxs)('div', {
          className: j.container,
          onMouseEnter: et,
          onMouseLeave: U,
          children: [
            (0, i.jsxs)('div', {
              className: j.titleContainer,
              children: [
                (0, i.jsxs)('div', {
                  className: j.titleLeft,
                  children: [
                    (0, i.jsx)(u.ActivitiesIcon, {
                      size: 'md',
                      className: j.titleLeftIcon,
                      color: 'var(--interactive-active)'
                    }),
                    (0, i.jsx)(u.Text, {
                      variant: 'eyebrow',
                      children: R.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_ACTIVITIES_TITLE
                    })
                  ]
                }),
                (0, i.jsxs)(u.Clickable, {
                  className: j.titleRight,
                  onClick: ee,
                  children: [
                    (0, i.jsx)(u.Text, {
                      variant: 'eyebrow',
                      children: R.Z.Messages.EMBEDDED_ACTIVITIES_AUTO_SUGGEST_SEE_ALL
                    }),
                    (0, i.jsx)(u.ChevronSmallRightIcon, {
                      size: 'custom',
                      width: 12,
                      height: 12,
                      color: 'var(--interactive-active)',
                      className: j.titleRightIcon
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)(_.Gt, {
              value: X,
              children: en
            }),
            (0, i.jsxs)('div', {
              className: j.activityContainer,
              children: [
                $.map(e => (0, i.jsx)(S.Y, {
                  channel: n,
                  activityItem: e,
                  onClick: () => {
                    o(), w();
                  },
                  aspectRatio: S.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                  animatedDivClass: j.activitySuggestion
                }, e.application.id)),
                (0, i.jsx)('div', {
                  className: l()(j.wumpusRocketOuterContainer, {
                    [j.wumpusReducedMotion]: W
                  }),
                  children: (0, i.jsx)('div', {
                    className: j.wumpusRocketInnerContainer,
                    children: (0, i.jsx)(Z.Z, {
                      className: j.wumpusRocket
                    })
                  })
                })
              ]
            })
          ]
        })
      ]
    })
  })
});
  });