"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
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
  m = s("555898"),
  g = s("713135"),
  h = s("26989"),
  N = s("697218"),
  I = s("216422"),
  p = s("719923"),
  C = s("158998"),
  A = s("929423"),
  O = s("424562"),
  x = s("754893"),
  R = s("8204"),
  M = s("250590"),
  D = s("49111"),
  v = s("782340"),
  L = s("999997");

function P(e) {
  var t, s, n, P;
  let {
    guild: j
  } = e, b = (0, i.useStateFromStores)([N.default], () => {
    let e = N.default.getCurrentUser();
    return l(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: U,
    pendingNickname: y,
    pendingBanner: B,
    pendingBio: F,
    pendingPronouns: G,
    pendingThemeColors: k,
    errors: H,
    guild: w
  } = (0, i.useStateFromStoresObject)([O.default], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: s,
      pendingPronouns: a,
      pendingBanner: n,
      pendingThemeColors: l
    } = O.default.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: n,
      pendingBio: s,
      pendingPronouns: a,
      pendingThemeColors: l,
      errors: O.default.getErrors(),
      guild: O.default.getGuild()
    }
  }), V = null != j ? j : w;
  l(null != V, "guild should not be null");
  let Y = (0, o.useGuildAutomodProfileQuarantineErrors)(V.id),
    K = (0, i.useStateFromStores)([h.default], () => null == V.id ? null : h.default.getMember(V.id, b.id)),
    W = (0, i.useStateFromStores)([g.default], () => g.default.getGuildMemberProfile(b.id, V.id)),
    z = p.default.canUsePremiumProfileCustomization(b),
    Q = (0, d.showRemoveAvatar)(U, null == K ? void 0 : K.avatar),
    X = (0, d.showRemoveBanner)(B, null == W ? void 0 : W.banner),
    q = (0, x.canResetThemeColors)(k, null == W ? void 0 : W.themeColors),
    Z = null !== (t = null == W ? void 0 : W.bio) && void 0 !== t ? t : "",
    J = null !== (s = null == W ? void 0 : W.pronouns) && void 0 !== s ? s : "",
    $ = (0, m.useCanCustomizeGuildCollectibleItem)({
      location: "GuildIdentityCustomizationSections"
    }),
    ee = (e, t, s) => {
      s(null != e ? e : null != t ? null : void 0)
    };
  return (0, a.jsxs)("div", {
    className: L.sectionsContainer,
    children: [(0, a.jsx)(R.default, {
      errors: null !== (n = null == H ? void 0 : H.nick) && void 0 !== n ? n : null == Y ? void 0 : Y.nick,
      username: C.default.getName(b),
      pendingNick: y,
      currentNick: null == K ? void 0 : K.nick,
      guild: V
    }, "nick"), (0, a.jsx)(_.default, {
      sectionTitle: v.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: null == H ? void 0 : H.pronouns,
      onPronounsChange: e => {
        (0, x.setNewPendingGuildIdentityPronouns)(e, J)
      },
      pendingPronouns: G,
      currentPronouns: J
    }, "pronouns"), (0, a.jsxs)(M.default, {
      user: b,
      showOverlay: !z,
      children: [(0, a.jsx)(S.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [v.default.Messages.USER_SETTINGS_AVATAR, (0, a.jsx)(r.Tooltip, {
            text: v.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(I.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: Q,
        onAvatarChange: e => ee(e, null == K ? void 0 : K.avatar, A.setPendingAvatar),
        errors: null == H ? void 0 : H.avatar,
        guildId: V.id,
        disabled: !z
      }, "avatar"), $ ? (0, a.jsx)(c.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [v.default.Messages.USER_SETTINGS_AVATAR_DECORATION, (0, a.jsx)(r.Tooltip, {
            text: v.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(I.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        user: b,
        guild: V
      }, "decoration") : null, $ ? (0, a.jsx)(T.default, {
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [v.default.Messages.USER_SETTINGS_PROFILE_EFFECT, (0, a.jsx)(r.Tooltip, {
            text: v.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(I.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        user: b,
        guild: V
      }, "effect") : null, (0, a.jsx)(E.default, {
        showRemoveBannerButton: X,
        errors: null == H ? void 0 : H.banner,
        onBannerChange: e => ee(e, null == W ? void 0 : W.banner, A.setPendingBanner),
        guildId: null == V ? void 0 : V.id,
        disabled: !z
      }, "banner"), (0, a.jsx)(f.default, {
        user: b,
        pendingAvatar: U,
        pendingColors: k,
        onThemeColorsChange: e => {
          (0, x.setNewPendingGuildIdentityThemeColors)(e, null == W ? void 0 : W.themeColors)
        },
        guildId: null == V ? void 0 : V.id,
        showResetThemeButton: q
      }), (0, a.jsx)(u.default, {
        placeholder: v.default.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
        sectionTitle: (0, a.jsxs)(a.Fragment, {
          children: [v.default.Messages.USER_PROFILE_ABOUT_ME, (0, a.jsx)(r.Tooltip, {
            text: v.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            children: e => (0, a.jsx)(I.default, {
              ...e,
              className: L.nitroWheel
            })
          })]
        }),
        onBioChange: e => {
          (0, x.setNewPendingGuildIdentityBio)(e, Z), (0, A.setDisableSubmit)(null != e && e.length > D.BIO_MAX_LENGTH)
        },
        errors: null !== (P = null == H ? void 0 : H.bio) && void 0 !== P ? P : null == Y ? void 0 : Y.bio,
        pendingBio: F,
        currentBio: Z,
        disabled: !z
      }, "about")]
    })]
  })
}