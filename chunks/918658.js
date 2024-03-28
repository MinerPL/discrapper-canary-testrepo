"use strict";
n.r(t), n.d(t, {
  ViewingRolesSettingsNotice: function() {
    return F
  },
  default: function() {
    return y
  }
});
var r = n("735250");
n("470079");
var i = n("803997"),
  l = n.n(i),
  s = n("442837"),
  o = n("692547"),
  u = n("481060"),
  a = n("549817"),
  c = n("819553"),
  d = n("17181"),
  f = n("303737"),
  S = n("434404"),
  g = n("703656"),
  h = n("944486"),
  E = n("914010"),
  p = n("671533"),
  _ = n("259580"),
  m = n("759231"),
  C = n("644766"),
  I = n("358085"),
  T = n("962086"),
  v = n("160404"),
  N = n("889695"),
  R = n("981631"),
  M = n("176505"),
  b = n("302463"),
  A = n("293810"),
  O = n("689938"),
  L = n("935983");

function x(e) {
  let {
    className: t,
    onClick: n,
    children: i
  } = e;
  return (0, r.jsx)(u.Button, {
    className: l()(L.button, t),
    innerClassName: L.buttonInner,
    look: u.Button.Looks.OUTLINED,
    color: u.Button.Colors.WHITE,
    size: u.Button.Sizes.NONE,
    onClick: n,
    children: i
  })
}

function P(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(x, {
    onClick: t,
    children: O.default.Messages.DISABLE
  })
}

function y() {
  let e = (0, s.useStateFromStores)([E.default], () => E.default.getGuildId()),
    t = (0, s.useStateFromStores)([h.default], () => h.default.getChannelId(e)),
    {
      viewingRoles: n,
      backNavigationSection: i,
      isFullServerPreview: l,
      isServerShopPreview: I
    } = (0, s.useStateFromStoresObject)([v.default], () => ({
      viewingRoles: null != e ? v.default.getViewingRoles(e) : null,
      backNavigationSection: v.default.getBackNavigationSection(e),
      isFullServerPreview: null != e && v.default.isFullServerPreview(e),
      isServerShopPreview: null != e && v.default.isViewingServerShop(e)
    }));
  if (null == n || null == e) return null;
  let y = function(e) {
      switch (e) {
        case R.GuildSettingsSections.INTEGRATIONS:
          return O.default.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
        case R.GuildSettingsSections.ROLE_SUBSCRIPTIONS:
          return O.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
        case R.GuildSettingsSections.ONBOARDING:
          return O.default.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
        default:
          return O.default.Messages.VIEWING_AS_ROLES_BACK
      }
    }(i),
    F = i === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? O.default.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : O.default.Messages.VIEWING_AS_ROLES_SELECT,
    G = t === M.StaticChannelRoute.GUILD_ONBOARDING,
    D = t => {
      let {
        backToSettings: n
      } = t;
      null != e && (v.default.isFullServerPreview(e) && (0, g.transitionTo)(R.Routes.CHANNEL(e)), c.default.shouldShowOnboarding(e) && (a.default.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, T.stopImpersonating)(e), n && S.default.open(e, i), i === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(e))
    };
  return (0, r.jsxs)(C.default, {
    color: C.NoticeColors.BRAND,
    className: L.notice,
    children: [(0, r.jsxs)(x, {
      onClick: () => D({
        backToSettings: !0
      }),
      className: L.backButton,
      children: [(0, r.jsx)(p.default, {
        width: 16,
        height: 16,
        direction: p.default.Directions.LEFT,
        className: L.backArrow
      }), y]
    }), G && l ? (0, r.jsx)("div", {
      className: L.noticeContents,
      children: (0, r.jsx)("div", {
        className: L.noticeText,
        children: O.default.Messages.VIEW_AS_MEMBER_DESCRIPTION
      })
    }) : (0, r.jsxs)("div", {
      className: L.noticeContents,
      children: [(0, r.jsx)("div", {
        className: L.noticeText,
        children: l ? O.default.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({
          numRoles: Object.keys(n).length
        }) : O.default.Messages.VIEWING_AS_ROLES.format({
          numRoles: Object.keys(n).length
        })
      }), (0, r.jsx)(u.Popout, {
        position: "bottom",
        renderPopout: () => (0, r.jsx)(N.default, {
          guildId: e
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(x, {
            onClick: t,
            children: [F, (0, r.jsx)(_.default, {
              width: 16,
              height: 16,
              direction: _.default.Directions.DOWN,
              className: L.selectCaret
            })]
          })
        }
      }), l && (0, r.jsx)(u.TooltipContainer, {
        className: L.previewWarning,
        text: O.default.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
        children: (0, r.jsx)(m.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      }), I && (0, r.jsx)(u.TooltipContainer, {
        className: L.previewWarning,
        text: O.default.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
          maxTiers: A.MAX_SUBSCRIPTION_TIERS,
          maxProducts: b.MAX_PUBLISHED_GUILD_PRODUCT_LISTINGS
        }),
        children: (0, r.jsx)(m.default, {
          width: 16,
          height: 16,
          color: o.default.unsafe_rawColors.YELLOW_300.css
        })
      })]
    }), l || i === R.GuildSettingsSections.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(P, {
      onClick: () => D({
        backToSettings: !1
      })
    })]
  })
}

function F(e) {
  let {
    guildId: t
  } = e;
  return (0, s.useStateFromStores)([v.default], () => v.default.isViewingRoles(t)) ? (0, r.jsx)("div", {
    className: l()(L.settingsWrapper, {
      [L.windows]: (0, I.isWindows)(),
      [L.osx]: (0, I.isMac)()
    }),
    children: (0, r.jsx)(y, {})
  }) : null
}