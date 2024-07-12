t(47120);
var a = t(735250),
  r = t(470079),
  i = t(688619),
  s = t.n(i),
  o = t(120356),
  l = t.n(o),
  c = t(866442),
  d = t(442837),
  u = t(481060),
  m = t(231467),
  f = t(650774),
  C = t(430824),
  _ = t(175557),
  h = t(688298),
  x = t(995119),
  g = t(116175),
  p = t(308083),
  T = t(689938),
  I = t(417968),
  E = t(363778);
let b = [{
  name: 'Night Sky',
  bannerKind: p.qC.NIGHT_SKY,
  icon: u.ThemeDarkIcon
},
{
  name: 'Castle',
  bannerKind: p.qC.CASTLE,
  icon: u.CrownIcon
},
{
  name: 'World Map',
  bannerKind: p.qC.WORLD_MAP,
  icon: u.GlobeEarthIcon
},
{
  name: 'Sea Foam',
  bannerKind: p.qC.SEA_FOAM,
  icon: u.PrivacyAndSafetyIcon
},
{
  name: 'Warp',
  bannerKind: p.qC.WARP_TUNNEL,
  icon: u.BlurBackgroundIcon
},
{
  name: 'House',
  bannerKind: p.qC.HOUSE,
  icon: u.TreehouseIcon
},
{
  name: 'Pulsar',
  bannerKind: p.qC.HEIGHTMAP,
  icon: u.WaveformIcon
},
{
  name: 'Mesh',
  bannerKind: p.qC.MESH,
  icon: u.GridVerticalIcon
},
{
  name: 'Spatter',
  bannerKind: p.qC.SPATTER,
  icon: u.PaintbrushThickIcon
}
  ],
  N = e => {
let {
  name: n,
  primaryColor: t,
  secondaryColor: r,
  isCustom: i
} = e;
return (0, a.jsxs)(a.Fragment, {
  children: [
    i ? (0, a.jsx)(u.PaintPaletteIcon, {
      size: 'md'
    }) : (0, a.jsx)('div', {
      className: I.brandItemCircle,
      style: {
        background: 'linear-gradient(-45deg, '.concat(r, ' 50%, ').concat(t, ' 50% )')
      }
    }),
    (0, a.jsx)(u.Text, {
      variant: 'text-sm/medium',
      color: 'interactive-normal',
      className: I.noWrap,
      children: n
    })
  ]
});
  };
n.Z = e => {
  var n, t, i, o;
  let {
handleUpdate: v,
progress: y,
guildId: S
  } = e, {
banner: A,
brandPrimaryColor: M,
brandSecondaryColor: j,
badgePrimaryColor: R,
badgeSecondaryColor: L
  } = y, O = (0, d.e7)([C.Z], () => C.Z.getGuild(S)), Z = null !== (n = (0, d.e7)([f.Z], () => f.Z.getMemberCount(S))) && void 0 !== n ? n : 0, k = r.useMemo(() => ({
primary: null != M ? M : p.OH,
secondary: null != j ? j : p.K_
  }), [
M,
j
  ]), D = r.useMemo(() => {
if (M === R && j === L)
  return 1;
for (let e = 0; e < p.ym.length; e++)
  if (p.ym[e].primary === y.brandPrimaryColor && p.ym[e].secondary === y.brandSecondaryColor)
    return 2 + e;
return 0;
  }, [
M,
j,
R,
L,
y.brandPrimaryColor,
y.brandSecondaryColor
  ]), [P, w] = r.useState(!1), F = 0 === D, G = 1 === D, B = r.useMemo(() => {
if (F)
  return k;
if (G)
  return {
    primary: null != R ? R : g.Nh,
    secondary: null != L ? L : g.vY
  };
{
  let e = p.ym[D - 2];
  return {
    primary: e.primary,
    secondary: e.secondary
  };
}
  }, [
k,
G,
F,
R,
L,
D
  ]), U = r.useCallback(() => {
let e = b[Math.floor(Math.random() * b.length)].bannerKind,
  n = s().random().hex();
v({
  banner: e,
  brandPrimaryColor: n,
  brandSecondaryColor: s().random().hex()
});
  }, [v]);
  return r.useEffect(() => {
v({
  banner: A,
  brandPrimaryColor: B.primary,
  brandSecondaryColor: B.secondary
});
  }, [
v,
A,
B.primary,
B.secondary
  ]), (0, a.jsxs)('div', {
className: E.slideContent,
children: [
  (0, a.jsx)(u.Heading, {
    variant: 'heading-xxl/medium',
    className: E.title,
    children: T.Z.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
  }),
  (0, a.jsx)(u.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: E.subtitle,
    children: T.Z.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
  }),
  (0, a.jsxs)('div', {
    className: I.content,
    children: [
      (0, a.jsx)('div', {
        className: I.leftColumn,
        children: (0, a.jsxs)('div', {
          className: I.colorsContainer,
          children: [
            (0, a.jsx)(x.Z, {
              onClick: U
            }),
            (0, a.jsxs)('div', {
              className: I.colorPickerContainer,
              children: [
                (0, a.jsx)(u.Text, {
                  variant: 'text-xs/semibold',
                  color: 'text-muted',
                  children: T.Z.Messages.CLAN_LOOK_BRAND_COLOR
                }),
                (0, a.jsxs)('div', {
                  className: I.colorPickerGrid,
                  children: [
                    (0, a.jsx)(h.Z, {
                      showSecondaryColor: !0,
                      palette: k,
                      onPrimaryColorChange: e => {
                        v({
                          brandPrimaryColor: (0, c.Rf)(e)
                        });
                      },
                      onSecondaryColorChange: e => {
                        v({
                          brandSecondaryColor: (0, c.Rf)(e)
                        });
                      },
                      shouldShow: P,
                      onRequestClose: () => w(!1),
                      children: e => (0, a.jsx)(u.Clickable, {
                        ...e,
                        onClick: () => {
                          w(e => !e);
                        },
                        className: l()(I.brandItemContainer, {
                          [I.brandItemContainerSelected]: 0 === D
                        }),
                        children: (0, a.jsx)(N, {
                          name: T.Z.Messages.CLAN_LOOK_PRESET_CUSTOM,
                          isCustom: !0
                        })
                      })
                    }),
                    (0, a.jsx)(u.Clickable, {
                      onClick: () => {
                        v({
                          brandPrimaryColor: null != R ? R : p.OH,
                          brandSecondaryColor: null != L ? L : p.K_
                        });
                      },
                      className: l()(I.brandItemContainer, {
                        [I.brandItemContainerSelected]: 1 === D
                      }),
                      children: (0, a.jsx)(N, {
                        name: T.Z.Messages.CLAN_LOOK_PRESET_BADGE,
                        primaryColor: R,
                        secondaryColor: L
                      })
                    }),
                    p.ym.map((e, n) => (0, a.jsx)(u.Clickable, {
                      'aria-label': e.name,
                      onClick: () => {
                        v({
                          brandPrimaryColor: p.ym[n].primary,
                          brandSecondaryColor: p.ym[n].secondary
                        });
                      },
                      className: l()(I.brandItemContainer, {
                        [I.brandItemContainerSelected]: D === n + 2
                      }),
                      children: (0, a.jsx)(N, {
                        name: e.name,
                        primaryColor: e.primary,
                        secondaryColor: e.secondary
                      })
                    }, n))
                  ]
                })
              ]
            }),
            (0, a.jsxs)('div', {
              className: I.bannerPickerContainer,
              children: [
                (0, a.jsx)(u.Text, {
                  variant: 'text-xs/semibold',
                  color: 'text-muted',
                  children: T.Z.Messages.CLAN_LOOK_BANNER
                }),
                (0, a.jsx)('div', {
                  className: I.bannerPickerGrid,
                  children: b.map((e, n) => (0, a.jsxs)(u.Clickable, {
                    'aria-label': e.name,
                    onClick: () => {
                      v({
                        banner: e.bannerKind
                      });
                    },
                    className: l()(I.bannerItemContainer, {
                      [I.bannerItemContainerSelected]: e.bannerKind === A
                    }),
                    children: [
                      (0, a.jsx)(e.icon, {
                        size: 'md',
                        color: 'currentColor'
                      }),
                      (0, a.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        className: I.noWrap,
                        children: e.name
                      })
                    ]
                  }, n))
                })
              ]
            })
          ]
        })
      }),
      (0, a.jsx)('div', {
        className: I.clanCardWrapper,
        children: (0, a.jsx)(m.xV, {
          bannerComponent: (0, a.jsx)(_.Z, {
            banner: A,
            primaryTintColor: B.primary,
            secondaryTintColor: B.secondary,
            className: I.clanBannerPreview
          }),
          clan: {
            ...y,
            id: S,
            name: null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : '',
            icon: null == O ? void 0 : O.icon,
            memberCount: Z,
            games: Array.from(y.gameApplicationIds),
            traits: Array.from(y.interests),
            banner: A,
            badge: {
              badgeKind: y.badgeKind,
              primaryColor: null != R ? R : p.OH,
              secondaryColor: null != L ? L : p.K_
            },
            branding: {
              primaryColor: null !== (i = B.primary) && void 0 !== i ? i : p.OH,
              secondaryColor: null !== (o = B.secondary) && void 0 !== o ? o : p.K_
            }
          }
        })
      })
    ]
  })
]
  });
};