"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("913144"),
  u = s("79112"),
  c = s("642950"),
  S = s("812204"),
  E = s("716241"),
  T = s("685665"),
  f = s("360871"),
  _ = s("184900"),
  m = s("11899"),
  g = s("713135"),
  h = s("102985"),
  N = s("697218"),
  I = s("599110"),
  p = s("701909"),
  C = s("719923"),
  A = s("929423"),
  O = s("424562"),
  x = s("872306"),
  R = s("527274"),
  M = s("185153"),
  D = s("49111"),
  v = s("782340");

function L() {
  I.default.track(D.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: D.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS,
    location_object: D.AnalyticsObjects.BADGE
  }), (0, A.closeGuildIdentitySettings)(), u.default.open(D.UserSettingsSections.PREMIUM)
}

function P(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await s.el("414242").then(s.bind(s, "414242"));
    return s => (0, a.jsx)(t, {
      source: {
        ...e,
        page: D.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS
      },
      ...s
    })
  })
}

function j(e) {
  let {
    selectedGuild: t
  } = e, {
    AnalyticsLocationProvider: s
  } = (0, T.default)(S.default.GUILD_PROFILE), l = (0, r.useStateFromStores)([N.default], () => {
    let e = N.default.getCurrentUser();
    return i(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), u = (0, r.useStateFromStores)([g.default], () => !g.default.isFetchingProfile(l.id)), I = (0, r.useStateFromStores)([h.default], () => h.default.hidePersonalInformation), {
    pendingAvatar: j,
    pendingAvatarDecoration: b,
    pendingProfileEffectId: U,
    pendingNickname: y,
    pendingBanner: B,
    pendingBio: F,
    pendingPronouns: G,
    pendingThemeColors: k,
    source: H
  } = (0, r.useStateFromStoresObject)([O.default], () => ({
    ...O.default.getAllPending(),
    source: O.default.getSource()
  }));
  if (n.useEffect(() => () => d.default.wait(A.resetAllPending), []), n.useEffect(() => {
      null != H && E.default.trackWithMetadata(D.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        destination_pane: D.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
        source: H
      })
    }, [H]), I) return (0, a.jsx)(c.default, {});
  if (!u) return (0, a.jsx)(o.Spinner, {});
  let w = C.default.canUsePremiumProfileCustomization(l),
    V = {
      user: l,
      guild: t,
      canUsePremiumCustomization: w,
      onAvatarChange: A.setPendingAvatar,
      onBannerChange: A.setPendingBanner,
      onUpsellClick: P,
      pendingAvatar: j,
      pendingAvatarDecoration: b,
      pendingProfileEffectId: U,
      pendingBanner: B,
      pendingBio: F,
      pendingPronouns: G,
      pendingNickname: y,
      activityName: v.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE,
      activityCharacter: f.FakeActivityCharacter.PHIBI,
      openPremiumSettings: L
    };
  return (0, a.jsxs)(s, {
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: v.default.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: p.default.getArticleURL(D.HelpdeskArticles.GUILD_PROFILES)
      })
    }), null != t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, A.setCurrentGuild)(e)
        }
      }), (0, a.jsx)(m.default, {
        previewTitle: v.default.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == t ? void 0 : t.name
        }),
        profilePreview: (0, a.jsx)(_.default, {
          ...V,
          pendingThemeColors: k
        }),
        children: (0, a.jsx)(R.default, {})
      })]
    }) : (0, a.jsx)(x.default, {})]
  })
}