"use strict";
s.r(t), s.d(t, {
  default: function() {
    return y
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("204875"),
  r = s("715796"),
  o = s("434404"),
  d = s("999382"),
  u = s("962086"),
  c = s("225675"),
  E = s("703656"),
  _ = s("577275"),
  I = s("430824"),
  T = s("594174"),
  S = s("682864"),
  f = s("823379"),
  m = s("730647"),
  N = s("584825"),
  g = s("723047"),
  h = s("303737"),
  C = s("568074"),
  R = s("411667"),
  x = s("903773"),
  L = s("822531"),
  O = s("909656"),
  A = s("210591"),
  p = s("927731"),
  M = s("798680"),
  D = s("509026"),
  v = s("981631"),
  j = s("176505"),
  G = s("829857"),
  U = s("689938"),
  P = s("891747");

function b(e) {
  let {
    application: t,
    guild: s
  } = e, n = (0, N.useSubscriptionsSettings)(s.id), i = (0, N.useSubscriptionListingsForGuild)(s.id), r = i.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), o = (0, l.useStateFromStores)([I.default], () => I.default.getRoles(s.id)), d = i.map(e => o[e.role_id]).some(e => null != e && 0 !== e.color), u = i.some(e => e.role_benefits.benefits.length > 0), c = null != t && s.hasFeature(v.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED), E = [{
    title: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT,
    items: [{
      description: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_PAYMENT_ENABLE,
      completed: c
    }]
  }, {
    title: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO,
    items: [{
      description: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_FORMAT,
      completed: !0
    }, {
      description: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_DESCRIPTION,
      completed: (null == n ? void 0 : n.description) != null && "" !== n.description
    }, {
      description: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_COVER_IMAGE,
      completed: (null == n ? void 0 : n.cover_image_asset) != null
    }]
  }, {
    title: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS,
    items: [{
      description: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_BASICS,
      completed: r
    }, {
      description: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_FLAIR,
      completed: d
    }, {
      description: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_PERKS,
      completed: u
    }]
  }];
  return (0, a.jsx)(A.default, {
    children: E
  })
}

function B(e) {
  let {
    application: t
  } = e, {
    teams: s
  } = (0, _.default)({
    refreshOnDepChange: !1
  }), l = s.find(e => {
    var s;
    return e.id === (null == t ? void 0 : null === (s = t.team) || void 0 === s ? void 0 : s.id)
  }), n = [G.PayoutAccountStatuses.ACTION_REQUIRED, G.PayoutAccountStatuses.BLOCKED, G.PayoutAccountStatuses.SUSPENDED];
  return (null == l ? void 0 : l.payout_account_status) != null && n.includes(null == l ? void 0 : l.payout_account_status) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S.default, {
      size: 16
    }), (0, a.jsx)(x.default, {
      children: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYOUTS_PROBLEM_WARNING.format({
        url: v.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(l.id)
      })
    }), (0, a.jsx)(S.default, {
      size: 16
    })]
  }) : null
}

function y(e) {
  let t, {
      guild: s,
      application: n
    } = e,
    i = (0, l.useStateFromStores)([d.default], () => d.default.getProps().subsection),
    o = null != n && s.hasFeature(v.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  return (0, r.useNewOwnerOnboardingRequired)(s), t = o ? function(e) {
    if (e === v.GuildSettingsSubsections.ROLE_SUBSCRIPTION_EMOJI) return M.TabBarSection.EMOJIS;
    return M.TabBarSection.TIERS
  }(i) : M.TabBarSection.PAYMENT, (0, a.jsx)(m.GroupListingsFetchContextProvider, {
    guildId: s.id,
    refetchOnMount: !0,
    children: (0, a.jsx)(g.RoleSubscriptionSettingsDisabledContextProvider, {
      guildId: s.id,
      children: (0, a.jsx)(M.TabBarContextProvider, {
        initialTab: t,
        children: (0, a.jsx)(F, {
          guild: s,
          application: n
        })
      })
    })
  })
}

function F(e) {
  let t, {
      guild: s,
      application: r
    } = e,
    d = null != r && s.hasFeature(v.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: _,
      setCurrentTab: S
    } = (0, M.useTabBarState)(),
    N = (0, m.useGroupListingsFetchContext)(),
    g = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    x = (0, C.default)(s.id),
    A = s.isOwner(g),
    G = () => {
      let e = I.default.getRole(s.id, s.getEveryoneRoleId());
      if (null == e) return;
      o.default.close();
      let t = {
        [e.id]: e
      };
      (0, u.startImpersonating)(s.id, {
        type: c.ImpersonateType.SERVER_SHOP,
        roles: t,
        initialTab: "role_subscriptions",
        returnToSection: v.GuildSettingsSections.ROLE_SUBSCRIPTIONS
      }), (0, h.announceCreateTemplateChannels)(s.id), (0, E.transitionTo)(v.Routes.CHANNEL(s.id, j.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
    };
  if (!N) return (0, a.jsx)(n.Spinner, {});
  switch (_) {
    case M.TabBarSection.BASIC_INFO:
      t = (0, a.jsx)(O.default, {
        guild: s
      });
      break;
    case M.TabBarSection.TIERS:
      t = (0, a.jsx)(p.default, {
        guildId: s.id
      });
      break;
    case M.TabBarSection.PAYMENT:
      t = (0, a.jsx)(L.default, {
        guild: s
      });
      break;
    case M.TabBarSection.EMOJIS:
      t = (0, a.jsx)(D.default, {
        guild: s
      });
      break;
    default:
      (0, f.assertNever)(_)
  }
  return (0, a.jsxs)("div", {
    className: P.container,
    children: [(0, a.jsxs)("div", {
      className: P.mainContent,
      children: [(0, a.jsx)(n.FormTitle, {
        tag: "h1",
        children: U.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      }), (0, a.jsx)(n.FormText, {
        type: n.FormText.Types.DESCRIPTION,
        children: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DESCRIPTION
      }), (0, a.jsx)(R.default, {
        guild: s
      }), d && (0, a.jsx)(B, {
        application: r
      }), (0, a.jsxs)("div", {
        className: P.tabBarContainer,
        children: [(0, a.jsxs)(n.TabBar, {
          className: P.tabBar,
          "aria-label": U.default.Messages.OPTIONS,
          selectedItem: _,
          type: "top",
          look: "brand",
          onItemSelect: S,
          children: [(0, a.jsx)(i.default, {
            id: M.TabBarSection.BASIC_INFO,
            disabledTooltip: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO
          }), (0, a.jsx)(i.default, {
            id: M.TabBarSection.TIERS,
            disabledTooltip: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS
          }), (0, a.jsx)(i.default, {
            id: M.TabBarSection.EMOJIS,
            disabledTooltip: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_EMOJI
          }), A ? (0, a.jsx)(n.TabBar.Item, {
            className: P.__invalid_tabBarItem,
            id: M.TabBarSection.PAYMENT,
            children: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT
          }) : null]
        }), d && (0, a.jsx)("div", {
          className: P.previewButton,
          children: (0, a.jsx)(n.Tooltip, {
            text: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW_DISABLED,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: s
              } = e;
              return (0, a.jsx)(n.Button, {
                disabled: x,
                onMouseEnter: x ? t : void 0,
                onMouseLeave: x ? s : void 0,
                onClick: G,
                color: n.Button.Colors.PRIMARY,
                size: n.Button.Sizes.SMALL,
                grow: !x,
                look: n.Button.Looks.OUTLINED,
                className: P.previewButton,
                children: U.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
              })
            }
          })
        })]
      }), t]
    }), (0, a.jsx)(b, {
      application: r,
      guild: s
    })]
  })
}