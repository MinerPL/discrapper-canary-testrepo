"use strict";
n.d(t, {
  Z: function() {
    return z
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(866442),
  l = n(442837),
  u = n(692547),
  _ = n(481060),
  d = n(230711),
  c = n(100527),
  E = n(906732),
  I = n(220082),
  T = n(583405),
  h = n(556084),
  S = n(300284),
  f = n(695346),
  N = n(314897),
  A = n(592125),
  m = n(430824),
  O = n(944486),
  R = n(594174),
  C = n(451478),
  p = n(311715),
  g = n(465670),
  L = n(937482),
  v = n(466111),
  D = n(185403),
  M = n(626135),
  P = n(768581),
  y = n(74538),
  U = n(785717),
  b = n(621853),
  G = n(888778),
  w = n(943217),
  k = n(793397),
  B = n(841040),
  x = n(228168),
  V = n(981631),
  Z = n(474936),
  H = n(689938),
  F = n(214572);
let Y = {
    [x.y0.POPOUT]: 18,
    [x.y0.MODAL]: 24,
    [x.y0.SETTINGS]: 0,
    [x.y0.PANEL]: 18,
    [x.y0.POMELO_POPOUT]: 18,
    [x.y0.CANCEL_MODAL]: 0
  },
  j = {
    [x.y0.MODAL]: V.ZY5.USER_PROFILE,
    [x.y0.POPOUT]: V.ZY5.USER_POPOUT,
    [x.y0.SETTINGS]: V.ZY5.USER_POPOUT,
    [x.y0.PANEL]: V.ZY5.DM_CHANNEL,
    [x.y0.POMELO_POPOUT]: V.ZY5.POMELO_POPOUT,
    [x.y0.CANCEL_MODAL]: V.ZY5.USER_POPOUT
  };

function W(e) {
  let {
    type: t,
    shown: s,
    onClick: a
  } = e, u = (0, l.e7)([R.default], () => {
    let e = R.default.getCurrentUser();
    return y.ZP.canUsePremiumProfileCustomization(e)
  }), I = r.useRef(!1), {
    analyticsLocations: T
  } = (0, E.ZP)(c.Z.BADGE);
  return r.useEffect(() => {
    s && !I.current && (I.current = !0, M.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Z.cd.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
      location: {
        page: j[t],
        section: V.jXE.NITRO_BANNER,
        object: V.qAy.NITRO_BADGE
      },
      location_stack: T
    }))
  }, [T, s, t]), (0, i.jsx)(_.Tooltip, {
    tooltipContentClassName: F.premiumIconTooltipContent,
    text: u ? H.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : H.Z.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
    children: e => (0, i.jsx)(_.Clickable, {
      ...e,
      onClick: u ? void 0 : () => {
        var e;
        e = T, (0, _.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("30364")]).then(n.bind(n, 968031));
          return n => {
            let {
              onClose: r,
              ...s
            } = n;
            return (0, i.jsx)(t, {
              analyticsLocations: e,
              title: H.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
              description: H.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                onAndMoreWithPremiumClick: () => {
                  r(), d.Z.open(V.oAB.PREMIUM, null, {
                    analyticsLocations: e
                  })
                }
              }),
              onClose: r,
              ...s
            })
          }
        }), null == a || a()
      },
      className: o()(F.premiumIconWrapper, {
        [F.visible]: s,
        [F.clickable]: !u
      }),
      children: (0, i.jsx)(_.TextBadge, {
        color: "rgba(32, 34, 37, 0.8)",
        text: (0, i.jsx)(v.Z, {
          width: 16,
          height: 16,
          className: F.premiumIcon
        })
      })
    })
  })
}

function K(e) {
  let {
    darkenOnHover: t,
    profileType: n,
    profileLabel: r,
    icon: s,
    ...o
  } = e, a = Y[n], l = "pencil" === s ? D.Z : L.Z;
  return (0, i.jsx)(_.Clickable, {
    ...o,
    "aria-label": r,
    className: t ? F.pencilContainerDark : F.pencilContainer,
    children: (0, i.jsx)(_.Tooltip, {
      text: r,
      children: e => (0, i.jsx)(l, {
        ...e,
        width: a,
        height: a,
        className: F.editIcon
      })
    })
  })
}

function z(e) {
  var t, n, s;
  let {
    user: d,
    displayProfile: c,
    onClose: E,
    guildId: R,
    profileType: L,
    isHovering: v,
    animateOnHover: D,
    allowEdit: M = !0,
    showPremiumBadgeUpsell: Y = !0,
    hasProfileEffect: j = !1
  } = e, z = (0, l.e7)([m.Z], () => m.Z.getGuild(R)), q = (0, l.e7)([N.default], () => N.default.getId()) === d.id && M, X = y.ZP.isPremiumAtLeast(null == c ? void 0 : c.premiumType, Z.p9.TIER_2), {
    trackUserProfileAction: Q
  } = (0, U.KZ)(), [J, $] = r.useState(!1), ee = (0, l.e7)([C.Z], () => C.Z.isFocused()), et = f.QK.getSetting(), {
    bannerSrc: en,
    status: ei
  } = (0, G.Z)({
    displayProfile: c,
    size: (0, k.e7)(L),
    canAnimate: D || !et ? J : ee
  }), er = (0, _.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(), es = (0, _.getAvatarSize)(_.AvatarSizes.SIZE_80), eo = (0, a._i)((0, I.ZP)(d.getAvatarURL(R, es), er, !1)), ea = (0, T.Z)(null !== (t = null == c ? void 0 : c.primaryColor) && void 0 !== t ? t : eo).hsl, el = (0, l.e7)([b.Z], () => b.Z.getUserProfile(d.id)), eu = A.Z.getChannel(O.Z.getChannelId()), {
    appsInGDMEnabled: e_,
    availableApplications: ed
  } = (0, h.j)({
    channelId: null !== (n = null == eu ? void 0 : eu.id) && void 0 !== n ? n : V.lds
  }), ec = null == el ? void 0 : el.application, eE = e_ && null != ed.find(e => e.id === (null == ec ? void 0 : ec.id)), eI = (0, S.Z)({
    analyticsLocation: {
      page: V.ZY5.USER_POPOUT,
      section: V.jXE.PROFILE_POPOUT
    }
  });
  return (0, i.jsx)(w.Z, {
    isPremium: X,
    hasThemeColors: null !== (s = null == c ? void 0 : c.canEditThemes) && void 0 !== s && s,
    profileType: L,
    hasBanner: null != en,
    hasProfileEffect: j,
    children: (0, i.jsxs)("div", {
      className: o()(F.banner, (0, k.Ae)({
        profileType: L,
        user: {
          hasBanner: null != en,
          isPremium: X,
          hasProfileEffect: j
        }
      }), {
        [F.reducedMotion]: !et
      }),
      onMouseMove: () => $(!0),
      onMouseLeave: () => $(!1),
      style: {
        backgroundImage: null != en ? "url(".concat(en, ")") : void 0,
        backgroundColor: ei !== G.s.COMPLETE ? u.Z.unsafe_rawColors.PRIMARY_800.css : ea
      },
      children: [q ? null == z ? (0, i.jsx)(K, {
        darkenOnHover: j && v,
        profileType: L,
        profileLabel: H.Z.Messages.EDIT_PROFILE,
        icon: "pencil",
        onClick: () => {
          Q({
            action: "EDIT_PROFILE"
          }), null == E || E(), eI()
        }
      }) : (0, i.jsx)(_.Popout, {
        spacing: 6,
        position: "bottom",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(B.Z, {
            onClose: t,
            onSelect: E,
            guild: z
          })
        },
        children: e => (0, i.jsx)(K, {
          darkenOnHover: j && v,
          profileLabel: H.Z.Messages.EDIT_PROFILE,
          icon: "pencil",
          ...e,
          profileType: L
        })
      }) : Y && null != en && L !== x.y0.SETTINGS ? (0, i.jsx)(W, {
        type: L,
        shown: void 0 === v ? J : v,
        onClick: () => {
          Q({
            action: "PRESS_PREMIUM_UPSELL"
          }), null == E || E()
        }
      }) : null, eE ? L !== x.y0.MODAL ? null : (0, i.jsx)(_.Clickable, {
        onClick: E,
        "aria-label": H.Z.Messages.BACK,
        className: F.pencilContainer,
        children: (0, i.jsx)(_.Tooltip, {
          text: H.Z.Messages.BACK,
          children: e => (0, i.jsx)(g.Z, {
            ...e,
            className: F.closeIcon,
            color: "white"
          })
        })
      }) : null, !et && (0, P.F8)(en) && (0, i.jsx)(p.Z, {
        className: F.gifTag
      })]
    })
  })
}