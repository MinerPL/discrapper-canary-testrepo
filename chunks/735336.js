n.d(t, {
  Z: function() {
return F;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(866442),
  l = n(442837),
  u = n(692547),
  c = n(481060),
  d = n(230711),
  _ = n(100527),
  E = n(906732),
  f = n(220082),
  h = n(583405),
  p = n(279745),
  m = n(300284),
  I = n(695346),
  T = n(314897),
  g = n(430824),
  S = n(594174),
  A = n(451478),
  N = n(626135),
  v = n(768581),
  O = n(74538),
  R = n(785717),
  C = n(888778),
  y = n(943217),
  D = n(793397),
  L = n(841040),
  b = n(228168),
  M = n(981631),
  P = n(474936),
  U = n(689938),
  w = n(439779);
let x = {
[b.y0.POPOUT]: 18,
[b.y0.MODAL]: 24,
[b.y0.SETTINGS]: 0,
[b.y0.PANEL]: 18,
[b.y0.POMELO_POPOUT]: 18,
[b.y0.CANCEL_MODAL]: 0
  },
  G = {
[b.y0.MODAL]: M.ZY5.USER_PROFILE,
[b.y0.POPOUT]: M.ZY5.USER_POPOUT,
[b.y0.SETTINGS]: M.ZY5.USER_POPOUT,
[b.y0.PANEL]: M.ZY5.DM_CHANNEL,
[b.y0.POMELO_POPOUT]: M.ZY5.POMELO_POPOUT,
[b.y0.CANCEL_MODAL]: M.ZY5.USER_POPOUT
  };

function k(e) {
  let {
type: t,
shown: a,
onClick: o
  } = e, u = (0, l.e7)([S.default], () => {
let e = S.default.getCurrentUser();
return O.ZP.canUsePremiumProfileCustomization(e);
  }), f = i.useRef(!1), {
analyticsLocations: h
  } = (0, E.ZP)(_.Z.BADGE);
  return i.useEffect(() => {
a && !f.current && (f.current = !0, N.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
  type: P.cd.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
  location: {
    page: G[t],
    section: M.jXE.NITRO_BANNER,
    object: M.qAy.NITRO_BADGE
  },
  location_stack: h
}));
  }, [
h,
a,
t
  ]), (0, r.jsx)(c.Tooltip, {
tooltipContentClassName: w.premiumIconTooltipContent,
text: u ? U.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : U.Z.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
children: e => (0, r.jsx)(c.Clickable, {
  ...e,
  onClick: u ? void 0 : () => {
    var e;
    e = h, (0, c.openModalLazy)(async () => {
      let {
        default: t
      } = await n.e('30364').then(n.bind(n, 968031));
      return n => {
        let {
          onClose: i,
          ...a
        } = n;
        return (0, r.jsx)(t, {
          analyticsLocations: e,
          title: U.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
          description: U.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
            onAndMoreWithPremiumClick: () => {
              i(), d.Z.open(M.oAB.PREMIUM, null, {
                analyticsLocations: e
              });
            }
          }),
          onClose: i,
          ...a
        });
      };
    }), null == o || o();
  },
  className: s()(w.premiumIconWrapper, {
    [w.visible]: a,
    [w.clickable]: !u
  }),
  children: (0, r.jsx)(c.TextBadge, {
    color: 'rgba(32, 34, 37, 0.8)',
    text: (0, r.jsx)(c.NitroWheelIcon, {
      size: 'xs',
      color: 'currentColor',
      className: w.premiumIcon
    })
  })
})
  });
}

function B(e) {
  let {
darkenOnHover: t,
profileType: n,
profileLabel: i,
icon: a,
...s
  } = e, o = x[n], l = 'pencil' === a ? c.PencilIcon : c.SettingsIcon;
  return (0, r.jsx)(c.Clickable, {
...s,
'aria-label': i,
className: t ? w.pencilContainerDark : w.pencilContainer,
children: (0, r.jsx)(c.Tooltip, {
  text: i,
  children: e => (0, r.jsx)(l, {
    ...e,
    color: 'currentColor',
    size: 'custom',
    width: o,
    height: o,
    className: w.editIcon
  })
})
  });
}

function F(e) {
  var t, n;
  let {
user: a,
displayProfile: d,
onClose: _,
guildId: E,
profileType: S,
isHovering: N,
animateOnHover: x,
allowEdit: G = !0,
showPremiumBadgeUpsell: F = !0,
hasProfileEffect: V = !1
  } = e, H = (0, l.e7)([g.Z], () => g.Z.getGuild(E)), Z = (0, l.e7)([T.default], () => T.default.getId()) === a.id && G, Y = O.ZP.isPremiumAtLeast(null == d ? void 0 : d.premiumType, P.p9.TIER_2), {
trackUserProfileAction: j
  } = (0, R.KZ)(), [W, K] = i.useState(!1), z = (0, l.e7)([A.Z], () => A.Z.isFocused()), q = I.QK.getSetting(), {
bannerSrc: Q,
status: X
  } = (0, C.Z)({
displayProfile: d,
size: (0, D.e7)(S),
canAnimate: x || !q ? W : z
  }), $ = (0, c.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(), J = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80), ee = (0, o._i)((0, f.ZP)(a.getAvatarURL(E, J), $, !1)), et = (0, h.Z)(null !== (t = null == d ? void 0 : d.primaryColor) && void 0 !== t ? t : ee).hsl, en = (0, m.Z)({
analyticsLocation: {
  page: M.ZY5.USER_POPOUT,
  section: M.jXE.PROFILE_POPOUT
}
  });
  return (0, r.jsx)(y.Z, {
isPremium: Y,
hasThemeColors: null !== (n = null == d ? void 0 : d.canEditThemes) && void 0 !== n && n,
profileType: S,
hasBanner: null != Q,
hasProfileEffect: V,
children: (0, r.jsxs)('div', {
  className: s()(w.banner, (0, D.Ae)({
    profileType: S,
    user: {
      hasBanner: null != Q,
      isPremium: Y,
      hasProfileEffect: V
    }
  }), {
    [w.reducedMotion]: !q
  }),
  onMouseMove: () => K(!0),
  onMouseLeave: () => K(!1),
  style: {
    backgroundImage: null != Q ? 'url('.concat(Q, ')') : void 0,
    backgroundColor: X !== C.s.COMPLETE ? u.Z.unsafe_rawColors.PRIMARY_800.css : et
  },
  children: [
    Z ? null == H ? (0, r.jsx)(B, {
      darkenOnHover: V && N,
      profileType: S,
      profileLabel: U.Z.Messages.EDIT_PROFILE,
      icon: 'pencil',
      onClick: () => {
        j({
          action: 'EDIT_PROFILE'
        }), null == _ || _(), en();
      }
    }) : (0, r.jsx)(c.Popout, {
      spacing: 6,
      position: 'bottom',
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(L.Z, {
          onClose: t,
          onSelect: _,
          guild: H
        });
      },
      children: e => (0, r.jsx)(B, {
        darkenOnHover: V && N,
        profileLabel: U.Z.Messages.EDIT_PROFILE,
        icon: 'pencil',
        ...e,
        profileType: S
      })
    }) : F && null != Q && S !== b.y0.SETTINGS ? (0, r.jsx)(k, {
      type: S,
      shown: void 0 === N ? W : N,
      onClick: () => {
        j({
          action: 'PRESS_PREMIUM_UPSELL'
        }), null == _ || _();
      }
    }) : null,
    !q && (0, v.F8)(Q) && (0, r.jsx)(p.Z, {
      className: w.gifTag
    })
  ]
})
  });
}