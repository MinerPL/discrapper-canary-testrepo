"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("442837"),
  r = s("481060"),
  o = s("295474"),
  d = s("150039"),
  u = s("126631"),
  c = s("433411"),
  S = s("532432"),
  E = s("134795"),
  T = s("513901"),
  f = s("451392"),
  _ = s("906364"),
  m = s("621853"),
  g = s("271383"),
  I = s("594174"),
  h = s("466111"),
  N = s("74538"),
  p = s("51144"),
  C = s("18438"),
  A = s("778825"),
  O = s("52597"),
  x = s("430131"),
  R = s("133484"),
  M = s("689938"),
  v = s("30314");

function L(e) {
  var t, s, n, L;
  let {
    guild: D
  } = e, P = (0, i.useStateFromStores)([I.default], () => {
    let e = I.default.getCurrentUser();
    return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: j,
    pendingNickname: b,
    pendingBanner: U,
    pendingBio: y,
    pendingPronouns: B,
    pendingThemeColors: G,
    errors: F,
    guild: k
  } = (0, i.useStateFromStoresObject)([A.default], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: s,
      pendingPronouns: a,
      pendingBanner: n,
      pendingThemeColors: l
    } = A.default.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: n,
      pendingBio: s,
      pendingPronouns: a,
      pendingThemeColors: l,
      errors: A.default.getErrors(),
      guild: A.default.getGuild()
    }
  }), w = null != D ? D : k;
  l()(null != w, "guild should not be null");
  let H = (0, o.useGuildAutomodProfileQuarantineErrors)(w.id),
    V = (0, i.useStateFromStores)([g.default], () => null == w.id ? null : g.default.getMember(w.id, P.id)),
    Y = (0, i.useStateFromStores)([m.default], () => m.default.getGuildMemberProfile(P.id, w.id)),
    W = N.default.canUsePremiumProfileCustomization(P),
    K = (0, d.showRemoveAvatar)(j, null == V ? void 0 : V.avatar),
    z = (0, d.showRemoveBanner)(U, null == Y ? void 0 : Y.banner),
    Q = (0, O.canResetThemeColors)(G, null == Y ? void 0 : Y.themeColors),
    q = null !== (t = null == Y ? void 0 : Y.bio) && void 0 !== t ? t : "",
    Z = null !== (s = null == Y ? void 0 : Y.pronouns) && void 0 !== s ? s : "",
    X = (e, t, s) => {
      s(null != e ? e : null != t ? null : void 0)
    };
  return (0, a.jsxs)("div", {
    className: v.sectionsContainer,
    children: [(0, a.jsx)(x.default, {
      errors: null !== (n = null == F ? void 0 : F.nick) && void 0 !== n ? n : null == H ? void 0 : H.nick,
      username: p.default.getName(P),
      pendingNick: b,
      currentNick: null == V ? void 0 : V.nick,
      guild: w
    }, "nick"), (0, a.jsx)(_.default, {
      sectionTitle: M.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == F ? void 0 : F.pronouns,
      onPronounsChange: e => {
        (0, O.setNewPendingGuildIdentityPronouns)(e, Z)
      },
      pendingPronouns: B,
      currentPronouns: Z
    }, "pronouns"), (0, a.jsxs)(R.default, {
      user: P,
      showOverlay: !W,
      children: [(0, a.jsx)(S.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(h.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: K,
        onAvatarChange: e => X(e, null == V ? void 0 : V.avatar, C.setPendingAvatar),
        errors: null == F ? void 0 : F.avatar,
        guildId: w.id,
        disabled: !W
      }, "avatar"), (0, a.jsx)(c.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(h.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        user: P,
        guild: w
      }, "decoration"), (0, a.jsx)(T.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(h.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        user: P,
        guild: w
      }, "effect"), (0, a.jsx)(E.default, {
        showRemoveBannerButton: z,
        errors: null == F ? void 0 : F.banner,
        onBannerChange: e => X(e, null == Y ? void 0 : Y.banner, C.setPendingBanner),
        guildId: null == w ? void 0 : w.id,
        disabled: !W
      }, "banner"), (0, a.jsx)(f.default, {
        user: P,
        pendingAvatar: j,
        pendingColors: G,
        onThemeColorsChange: e => {
          (0, O.setNewPendingGuildIdentityThemeColors)(e, null == Y ? void 0 : Y.themeColors)
        },
        guildId: null == w ? void 0 : w.id,
        showResetThemeButton: Q
      }), (0, a.jsx)(u.default, {
        placeholder: M.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [M.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
            text: M.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(h.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, O.setNewPendingGuildIdentityBio)(e, q),
        errors: null !== (L = null == F ? void 0 : F.bio) && void 0 !== L ? L : null == H ? void 0 : H.bio,
        pendingBio: y,
        currentBio: q,
        disabled: !W
      }, "about")]
    })]
  })
}