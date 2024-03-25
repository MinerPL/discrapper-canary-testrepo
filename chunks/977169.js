"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  },
  ViewingRolesSettingsNotice: function() {
    return G
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
  h = n("18494"),
  _ = n("162771"),
  g = n("246053"),
  p = n("461380"),
  C = n("423487"),
  I = n("489622"),
  m = n("773336"),
  T = n("479756"),
  v = n("38654"),
  R = n("593916"),
  N = n("49111"),
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

function D() {
  let e = (0, s.useStateFromStores)([_.default], () => _.default.getGuildId()),
    t = (0, s.useStateFromStores)([h.default], () => h.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: r,
      isFullServerPreview: l,
      isServerShopPreview: m
    } = (0, s.useStateFromStoresObject)([v.default], () => ({
      viewingRoles: null != e ? v.default.getViewingRoles(e) : null,
      backNavigationSection: v.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && v.default.isFullServerPreview(e),
      isServerShopPreview: null != e && v.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let D = function(e) {
      switch (e) {
        case N.GuildSettingsSections.INTEGRATIONS:
          return L.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case N.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return L.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case N.GuildSettingsSections.ONBOARDING:
          return L.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return L.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(r),
    G = r === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? L.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : L.default.Messages.VIEWING_AS_ROLES_SELECT,
    w = t === M.StaticChannelRoute.GUILD_ONBOARDING,
    F = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (v.default.isFullServerPreview(e) && (0, E.transitionTo)(N.Routes.CHANNEL(e)), d.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, c.discardOnboardingPromise)(e)), (0, T.stopImpersonating)(e), n && S.default.open(e, r), r === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
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
      }), D]
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
        renderPopout: () => (0, i.jsx)(R.default, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, i.jsxs)(x, {
            onClick: t,
            children: [G, (0, i.jsx)(p.default, {
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
      }), m && (0, i.jsx)(o.TooltipContainer, {
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
    }), l || r === N.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(P, {
      onClick: () => F({
        backToSettings: !1
      })
    })]
  })
}

function G(e) {
  let {
    guildId: t
  } = e, n = (0, s.useStateFromStores)([v.default], () => v.default.isViewingRoles(t));
  return n ? (0, i.jsx)("div", {
    className: l(b.settingsWrapper, {
      [b.windows]: (0, m.isWindows)(),
      [b.osx]: (0, m.isMac)()
    }),
    children: (0, i.jsx)(D, {})
  }) : null
}