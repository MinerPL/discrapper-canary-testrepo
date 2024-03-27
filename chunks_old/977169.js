"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  },
  ViewingRolesSettingsNotice: function() {
    return D
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("446674"),
  u = n("669491"),
  o = n("77078"),
  a = n("921031"),
  d = n("471706"),
  c = n("937692"),
  f = n("432153"),
  S = n("592407"),
  E = n("393414"),
  _ = n("18494"),
  h = n("162771"),
  g = n("246053"),
  p = n("461380"),
  C = n("423487"),
  I = n("489622"),
  T = n("773336"),
  m = n("479756"),
  R = n("38654"),
  N = n("593916"),
  v = n("49111"),
  M = n("724210"),
  O = n("307785"),
  A = n("677795"),
  L = n("782340"),
  b = n("459186");

function x(e) {
  let {
    className: t,
    onClick: n,
    children: r
  } = e;
  return (0, i.jsx)(o.Button, {
    className: l(b.button, t),
    innerClassName: b.buttonInner,
    look: o.Button.Looks.OUTLINED,
    color: o.Button.Colors.WHITE,
    size: o.Button.Sizes.NONE,
    onClick: n,
    children: r
  })
}

function P(e) {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(x, {
    onClick: t,
    children: L.default.Messages.DISABLE
  })
}

function G() {
  let e = (0, s.useStateFromStores)([h.default], () => h.default.getGuildId()),
    t = (0, s.useStateFromStores)([_.default], () => _.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: r,
      isFullServerPreview: l,
      isServerShopPreview: T
    } = (0, s.useStateFromStoresObject)([R.default], () => ({
      viewingRoles: null != e ? R.default.getViewingRoles(e) : null,
      backNavigationSection: R.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && R.default.isFullServerPreview(e),
      isServerShopPreview: null != e && R.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let G = function(e) {
      switch (e) {
        case v.GuildSettingsSections.INTEGRATIONS:
          return L.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case v.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return L.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case v.GuildSettingsSections.ONBOARDING:
          return L.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return L.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(r),
    D = r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? L.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : L.default.Messages.VIEWING_AS_ROLES_SELECT,
    w = t === M.StaticChannelRoute.GUILD_ONBOARDING,
    F = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (R.default.isFullServerPreview(e) && (0, E.transitionTo)(v.Routes.CHANNEL(e)), d.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, c.discardOnboardingPromise)(e)), (0, m.stopImpersonating)(e), n && S.default.open(e, r), r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, i.jsxs)(I.default, {
    color: I.NoticeColors.BRAND,
    className: b.notice,
    children: [(0, i.jsxs)(x, {
      onClick: () => F({
        backToSettings: !0
      }),
      className: b.backButton,
      children: [(0, i.jsx)(g.default, {
        width: 16,
        height: 16,
        direction: g.default.Directions.LEFT,
        className: b.backArrow
      }), G]
    }), w && l ? (0, i.jsx)("div", {
      className: b.noticeContents,
      children: (0, i.jsx)("div", {
        className: b.noticeText,
        children: L.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, i.jsxs)("div", {
      className: b.noticeContents,
      children: [(0, i.jsx)("div", {
        className: b.noticeText,
        children: l ? L.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : L.default.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(n).length
        })
      }), (0, i.jsx)(o.Popout, {
        position: "bottom",
        renderPopout: () => (0, i.jsx)(N.default, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, i.jsxs)(x, {
            onClick: t,
            children: [D, (0, i.jsx)(p.default, {
              width: 16,
              height: 16,
              direction: p.default.Directions.DOWN,
              className: b.selectCaret
            })]
          })
        }
      }), l && (0, i.jsx)(o.TooltipContainer, {
        className: b.previewWarning,
        text: L.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, i.jsx)(C.default, {
          width: 16,
          height: 16,
          color: u.default.unsafe_rawColors.YELLOW_300.css
        })
      }), T && (0, i.jsx)(o.TooltipContainer, {
        className: b.previewWarning,
        text: L.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: A.MAX_SUBSCRIPTION_TIERS,
          maxProducts: O.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, i.jsx)(C.default, {
          width: 16,
          height: 16,
          color: u.default.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || r === v.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(P, {
      onClick: () => F({
        backToSettings: !1
      })
    })]
  })
}

function D(e) {
  let {
    guildId: t
  } = e, n = (0, s.useStateFromStores)([R.default], () => R.default.isViewingRoles(t));
  return n ? (0, i.jsx)("div", {
    className: l(b.settingsWrapper, {
      [b.windows]: (0, T.isWindows)(),
      [b.osx]: (0, T.isMac)()
    }),
    children: (0, i.jsx)(G, {})
  }) : null
}