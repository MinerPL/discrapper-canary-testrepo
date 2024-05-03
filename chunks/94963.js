"use strict";
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("866442"),
  o = n("19602"),
  c = n("911504"),
  d = n("86934"),
  u = n("683692"),
  f = n("442837"),
  m = n("481060"),
  h = n("231467"),
  E = n("650774"),
  T = n("430824"),
  p = n("175557"),
  _ = n("688298"),
  C = n("116175"),
  g = n("308083"),
  x = n("689938"),
  I = n("868878"),
  v = n("418571");
let N = g.CLAN_BRAND_PALETTE_PRESETS.length + 1,
  S = [{
    name: "Night Sky",
    bannerKind: g.ClanBannerKind.NIGHT_SKY,
    icon: u.ScreenSystemRequirementsIcon
  }, {
    name: "Castle",
    bannerKind: g.ClanBannerKind.CASTLE,
    icon: d.MenuIcon
  }, {
    name: "Map",
    bannerKind: g.ClanBannerKind.WORLD_MAP,
    icon: o.EyeDropperIcon
  }, {
    name: "Sea Foam",
    bannerKind: g.ClanBannerKind.SEA_FOAM,
    icon: c.MagicWandIcon
  }, {
    name: "Warp",
    bannerKind: g.ClanBannerKind.WARP_TUNNEL,
    icon: o.EyeDropperIcon
  }, {
    name: "House",
    bannerKind: g.ClanBannerKind.HOUSE,
    icon: u.ScreenSystemRequirementsIcon
  }, {
    name: "Heightmap",
    bannerKind: g.ClanBannerKind.HEIGHTMAP,
    icon: c.MagicWandIcon
  }, {
    name: "Mesh",
    bannerKind: g.ClanBannerKind.MESH,
    icon: u.ScreenSystemRequirementsIcon
  }, {
    name: "Spatter",
    bannerKind: g.ClanBannerKind.SPATTER,
    icon: d.MenuIcon
  }],
  A = e => {
    let {
      name: t,
      primaryColor: n,
      secondaryColor: i,
      isCustom: r
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [r ? (0, a.jsx)(o.EyeDropperIcon, {
        width: 24,
        height: 24
      }) : (0, a.jsx)("div", {
        className: I.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(i, " 50%, ").concat(n, " 50% )")
        }
      }), (0, a.jsx)(m.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: I.noWrap,
        children: t
      })]
    })
  };
t.default = e => {
  var t, n, r, o, c, d, u, R;
  let {
    handleUpdate: M,
    progress: L,
    guildId: b
  } = e, y = (0, f.useStateFromStores)([T.default], () => T.default.getGuild(b)), j = null !== (t = (0, f.useStateFromStores)([E.default], () => E.default.getMemberCount(b))) && void 0 !== t ? t : 0, [O, D] = i.useState(L.banner), [P, F] = i.useState({
    primary: null !== (n = L.brandPrimaryColor) && void 0 !== n ? n : g.CLAN_BRAND_PRIMARY_DEFAULT,
    secondary: null !== (r = L.brandSecondaryColor) && void 0 !== r ? r : g.CLAN_BRAND_SECONDARY_DEFAULT
  }), [w, U] = i.useState(() => {
    if (L.brandPrimaryColor === L.badgePrimaryColor && L.brandSecondaryColor === L.badgeSecondaryColor) return 0;
    for (let e = 0; e < g.CLAN_BRAND_PALETTE_PRESETS.length; e++)
      if (g.CLAN_BRAND_PALETTE_PRESETS[e].primary === L.brandPrimaryColor && g.CLAN_BRAND_PALETTE_PRESETS[e].secondary === L.brandSecondaryColor) return e + 1;
    return N
  }), [G, B] = i.useState(!1), k = N === w, H = 0 === w, V = i.useMemo(() => {
    if (k) return P;
    if (H) {
      var e, t;
      return {
        primary: null !== (e = L.badgePrimaryColor) && void 0 !== e ? e : C.CLAN_BADGE_PRIMARY_DEFAULT,
        secondary: null !== (t = L.badgeSecondaryColor) && void 0 !== t ? t : C.CLAN_BADGE_SECONDARY_DEFAULT
      }
    } {
      let e = g.CLAN_BRAND_PALETTE_PRESETS[w - 1];
      return {
        primary: e.primary,
        secondary: e.secondary
      }
    }
  }, [P, H, k, L.badgePrimaryColor, L.badgeSecondaryColor, w]);
  return i.useEffect(() => {
    M({
      banner: O,
      brandPrimaryColor: V.primary,
      brandSecondaryColor: V.secondary
    })
  }, [M, O, V.primary, V.secondary]), (0, a.jsxs)("div", {
    className: v.slideContentWithSidebar,
    children: [(0, a.jsx)(m.Heading, {
      variant: "heading-xxl/medium",
      className: v.title,
      children: x.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE
    }), (0, a.jsx)(m.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: v.subtitle,
      children: x.default.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: v.content,
      children: [(0, a.jsxs)("div", {
        className: I.colorsContainer,
        children: [(0, a.jsxs)("div", {
          className: I.colorPickerContainer,
          children: [(0, a.jsx)(m.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: x.default.Messages.CLAN_LOOK_BRAND_COLOR
          }), (0, a.jsxs)("div", {
            className: I.colorPickerGrid,
            children: [(0, a.jsx)(m.Clickable, {
              onClick: () => {
                var e, t;
                U(0), F({
                  primary: null !== (e = L.badgePrimaryColor) && void 0 !== e ? e : g.CLAN_BRAND_PRIMARY_DEFAULT,
                  secondary: null !== (t = L.badgeSecondaryColor) && void 0 !== t ? t : g.CLAN_BRAND_SECONDARY_DEFAULT
                })
              },
              className: s()(I.brandItemContainer, {
                [I.brandItemContainerSelected]: 0 === w
              }),
              children: (0, a.jsx)(A, {
                name: x.default.Messages.CLAN_LOOK_PRESET_BADGE,
                primaryColor: L.badgePrimaryColor,
                secondaryColor: L.badgeSecondaryColor
              })
            }), g.CLAN_BRAND_PALETTE_PRESETS.map((e, t) => (0, a.jsx)(m.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                U(t + 1), F(g.CLAN_BRAND_PALETTE_PRESETS[t])
              },
              className: s()(I.brandItemContainer, {
                [I.brandItemContainerSelected]: w === t + 1
              }),
              children: (0, a.jsx)(A, {
                name: e.name,
                primaryColor: e.primary,
                secondaryColor: e.secondary
              })
            }, t)), (0, a.jsx)(_.default, {
              showSecondaryColor: !0,
              palette: P,
              onPrimaryColorChange: e => {
                F(t => ({
                  ...t,
                  primary: (0, l.int2hex)(e)
                }))
              },
              onSecondaryColorChange: e => {
                F(t => ({
                  ...t,
                  secondary: (0, l.int2hex)(e)
                }))
              },
              shouldShow: G,
              onRequestClose: () => B(!1),
              children: e => (0, a.jsx)(m.Clickable, {
                ...e,
                onClick: () => {
                  U(N), B(e => !e)
                },
                className: s()(I.brandItemContainer, {
                  [I.brandItemContainerSelected]: w === N
                }),
                children: (0, a.jsx)(A, {
                  name: x.default.Messages.CLAN_LOOK_PRESET_CUSTOM,
                  isCustom: !0
                })
              })
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: I.bannerPickerContainer,
          children: [(0, a.jsx)(m.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: x.default.Messages.CLAN_LOOK_BANNER
          }), (0, a.jsx)("div", {
            className: I.bannerPickerGrid,
            children: S.map((e, t) => (0, a.jsxs)(m.Clickable, {
              "aria-label": e.name,
              onClick: () => {
                D(e.bannerKind)
              },
              className: s()(I.bannerItemContainer, {
                [I.bannerItemContainerSelected]: e.bannerKind === O
              }),
              children: [(0, a.jsx)(e.icon, {
                width: 24,
                height: 24
              }), (0, a.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "interactive-normal",
                className: I.noWrap,
                children: e.name
              })]
            }, t))
          })]
        })]
      }), (0, a.jsx)("div", {
        className: I.clanCardWrapper,
        children: (0, a.jsx)(h.ClanDiscoveryCardView, {
          bannerComponent: (0, a.jsx)(p.default, {
            banner: O,
            primaryTintColor: V.primary,
            secondaryTintColor: V.secondary,
            className: I.clanBannerPreview
          }),
          clan: {
            ...L,
            id: b,
            name: null !== (o = null == y ? void 0 : y.name) && void 0 !== o ? o : "",
            icon: null == y ? void 0 : y.icon,
            memberCount: j,
            games: Array.from(L.gameApplicationIds),
            traits: Array.from(L.interests),
            banner: O,
            badge: {
              badgeKind: L.badgeKind,
              primaryColor: null !== (c = L.badgePrimaryColor) && void 0 !== c ? c : g.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (d = L.badgeSecondaryColor) && void 0 !== d ? d : g.CLAN_BRAND_SECONDARY_DEFAULT
            },
            branding: {
              primaryColor: null !== (u = V.primary) && void 0 !== u ? u : g.CLAN_BRAND_PRIMARY_DEFAULT,
              secondaryColor: null !== (R = V.secondary) && void 0 !== R ? R : g.CLAN_BRAND_SECONDARY_DEFAULT
            }
          }
        })
      })]
    })]
  })
}