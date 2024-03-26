"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("37983");
s("884691");
var n = s("627445"),
  l = s.n(n),
  i = s("446674"),
  r = s("77078"),
  o = s("956967"),
  d = s("906932"),
  u = s("702877"),
  c = s("668688"),
  S = s("447645"),
  E = s("52704"),
  T = s("741781"),
  f = s("121370"),
  _ = s("370505"),
  m = s("713135"),
  g = s("26989"),
  h = s("697218"),
  N = s("216422"),
  I = s("719923"),
  p = s("158998"),
  C = s("929423"),
  A = s("424562"),
  O = s("754893"),
  x = s("8204"),
  R = s("250590"),
  M = s("49111"),
  D = s("782340"),
  v = s("999997");

function L(e) {
  var t, s, n, L;
  let {
    guild: P
  } = e, j = (0, i.useStateFromStores)([h.default], () => {
    let e = h.default.getCurrentUser();
    return l(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: b,
    pendingNickname: U,
    pendingBanner: y,
    pendingBio: B,
    pendingPronouns: F,
    pendingThemeColors: G,
    errors: k,
    guild: H
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
  }), w = null != P ? P : H;
  l(null != w, "guild should not be null");
  let V = (0, o.useGuildAutomodProfileQuarantineErrors)(w.id),
    Y = (0, i.useStateFromStores)([g.default], () => null == w.id ? null : g.default.getMember(w.id, j.id)),
    K = (0, i.useStateFromStores)([m.default], () => m.default.getGuildMemberProfile(j.id, w.id)),
    W = I.default.canUsePremiumProfileCustomization(j),
    z = (0, d.showRemoveAvatar)(b, null == Y ? void 0 : Y.avatar),
    Q = (0, d.showRemoveBanner)(y, null == K ? void 0 : K.banner),
    X = (0, O.canResetThemeColors)(G, null == K ? void 0 : K.themeColors),
    q = null !== (t = null == K ? void 0 : K.bio) && void 0 !== t ? t : "",
    Z = null !== (s = null == K ? void 0 : K.pronouns) && void 0 !== s ? s : "",
    J = (e, t, s) => {
      s(null != e ? e : null != t ? null : void 0)
    };
  return (0, a.jsxs)("div", {
    className: v.sectionsContainer,
    children: [(0, a.jsx)(x.default, {
      errors: null !== (n = null == k ? void 0 : k.nick) && void 0 !== n ? n : null == V ? void 0 : V.nick,
      username: p.default.getName(j),
      pendingNick: U,
      currentNick: null == Y ? void 0 : Y.nick,
      guild: w
    }, "nick"), (0, a.jsx)(_.default, {
      sectionTitle: D.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == k ? void 0 : k.pronouns,
      onPronounsChange: e => {
        (0, O.setNewPendingGuildIdentityPronouns)(e, Z)
      },
      pendingPronouns: F,
      currentPronouns: Z
    }, "pronouns"), (0, a.jsxs)(R.default, {
      user: j,
      showOverlay: !W,
      children: [(0, a.jsx)(S.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [D.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
            text: D.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: z,
        onAvatarChange: e => J(e, null == Y ? void 0 : Y.avatar, C.setPendingAvatar),
        errors: null == k ? void 0 : k.avatar,
        guildId: w.id,
        disabled: !W
      }, "avatar"), (0, a.jsx)(c.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [D.default.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, a.jsx)(r.Tooltip, {
            text: D.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        user: j,
        guild: w
      }, "decoration"), (0, a.jsx)(T.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [D.default.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, a.jsx)(r.Tooltip, {
            text: D.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        user: j,
        guild: w
      }, "effect"), (0, a.jsx)(E.default, {
        showRemoveBannerButton: Q,
        errors: null == k ? void 0 : k.banner,
        onBannerChange: e => J(e, null == K ? void 0 : K.banner, C.setPendingBanner),
        guildId: null == w ? void 0 : w.id,
        disabled: !W
      }, "banner"), (0, a.jsx)(f.default, {
        user: j,
        pendingAvatar: b,
        pendingColors: G,
        onThemeColorsChange: e => {
          (0, O.setNewPendingGuildIdentityThemeColors)(e, null == K ? void 0 : K.themeColors)
        },
        guildId: null == w ? void 0 : w.id,
        showResetThemeButton: X
      }), (0, a.jsx)(u.default, {
        placeholder: D.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [D.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
            text: D.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(N.default, {
              ...e,
              className: v.nitroWheel
            })
          })]
        }),
        onBioChange: e => {
          (0, O.setNewPendingGuildIdentityBio)(e, q), (0, C.setDisableSubmit)(null != e && e.length > M.BIO_MAX_LENGTH)
        },
        errors: null !== (L = null == k ? void 0 : k.bio) && void 0 !== L ? L : null == V ? void 0 : V.bio,
        pendingBio: B,
        currentBio: q,
        disabled: !W
      }, "about")]
    })]
  })
}