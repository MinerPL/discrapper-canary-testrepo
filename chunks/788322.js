n.d(t, {
  Y: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(481060),
  o = n(239091),
  c = n(906732),
  d = n(372769),
  u = n(134432),
  _ = n(451603),
  h = n(885714),
  E = n(806519),
  I = n(768581),
  m = n(900849),
  g = n(556017),
  p = n(879484),
  T = n(26580),
  S = n(206887),
  f = n(981631),
  C = n(689938),
  N = n(465423),
  A = n(129512),
  v = n(330065);
let Z = () => (0, i.jsx)('div', {
  className: N.placeholder
});
t.Z = e => {
  var t;
  let {
guild: s,
theme: Z,
onView: L,
onTagClick: O
  } = e, {
id: R,
discoverySplash: x,
icon: b,
name: P,
description: M,
presenceCount: D,
memberCount: y,
keywords: j
  } = s, [U, G] = a.useState(!1), [k, w] = a.useState(!1), {
analyticsLocations: B
  } = (0, c.ZP)(), H = I.ZP.getGuildDiscoverySplashURL({
id: R,
splash: x,
size: 240 * (0, u.x_)()
  }), V = null != H ? H : function(e) {
switch (e) {
  case f.BRd.DARK:
    return A;
  case f.BRd.LIGHT:
    return v;
}
  }(Z), F = null !== (t = I.ZP.getGuildIconURL({
id: R,
icon: b,
size: 32
  })) && void 0 !== t ? t : void 0, Y = async e => {
let {
  className: t
} = e.target;
if (!t.includes('Menu')) {
  if ((0, _.yU)()) {
    (0, h.Z)({
      analyticsSource: {
        page: f.ZY5.GUILD_DISCOVERY
      },
      analyticsLocation: {
        page: f.ZY5.GUILD_DISCOVERY,
        section: f.jXE.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: B
    });
    return;
  }
  w(!0);
  try {
    null != L && await L(s.id);
  } finally {
    w(!1);
  }
}
  };
  a.useEffect(() => p.w.trackExposure({
location: '4302e4_1'
  }));
  let {
shouldDisplayTags: W
  } = p.w.useExperiment({
location: '4302e4_2'
  }, {
autoTrackExposure: !1
  }), z = (0, g.I)();
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: N.card,
    children: [
      k ? (0, i.jsx)(l.Spinner, {
        type: l.Spinner.Type.PULSING_ELLIPSIS,
        className: N.spinner
      }) : null,
      (0, i.jsxs)(l.Clickable, {
        className: r()(N.container, {
          [N.hover]: U,
          [N.submitting]: k
        }),
        onClick: Y,
        onContextMenu: e => {
          (0, o.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 455839));
            return t => (0, i.jsx)(e, {
              ...t,
              guild: s
            });
          });
        },
        onMouseEnter: () => G(!0),
        onMouseLeave: () => G(!1),
        children: [
          (0, i.jsx)('div', {
            className: r()(N.splashContainer, {
              [N.splashContainerWithTags]: W
            }),
            children: (0, i.jsx)('img', {
              src: V,
              alt: '',
              className: N.splashImage,
              width: 240
            })
          }),
          (0, i.jsxs)('div', {
            className: r()(N.content, {
              [N.contentWithTags]: W
            }),
            children: [
              (0, i.jsxs)('div', {
                className: N.header,
                children: [
                  (0, i.jsx)(E.ZP, {
                    mask: E.ZP.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    children: (0, i.jsx)('img', {
                      src: F,
                      alt: '',
                      className: N.avatar
                    })
                  }),
                  (0, i.jsxs)('div', {
                    className: N.headerName,
                    children: [
                      (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.Z, {
                          guild: s,
                          className: N.guildBadge,
                          size: 16
                        })
                      }),
                      (0, i.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        className: N.headerTitle,
                        children: P
                      })
                    ]
                  })
                ]
              }),
              (0, i.jsx)(l.Text, {
                className: N.description,
                variant: 'text-sm/normal',
                children: M
              }),
              W && null != j && null != O && (0, i.jsx)(T.F, {
                guildId: s.id,
                discoveryTagStyle: T.B.ALT,
                onTagClick: e => O(e, s.id),
                tags: j,
                section: m.P1.SEARCH
              }),
              (0, i.jsxs)('div', {
                className: N.memberInfo,
                children: [
                  null != D && (0, i.jsx)('div', {
                    className: N.memberCount,
                    children: (0, i.jsx)(l.Text, {
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: C.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                        membersOnline: D
                      })
                    })
                  }),
                  null != y && (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)('div', {
                        className: N.dotSeparator
                      }),
                      (0, i.jsx)('div', {
                        className: N.memberCount,
                        children: (0, i.jsx)(l.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: C.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                            count: y
                          })
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          z ? (0, i.jsx)('div', {
            className: N.actionButtons,
            children: (0, i.jsx)(S.Z, {
              guild: s
            })
          }) : null
        ]
      })
    ]
  }),
  (0, i.jsx)('hr', {
    className: N.separator
  })
]
  });
};