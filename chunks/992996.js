"use strict";
a.r(t), a.d(t, {
  default: function() {
    return J
  }
});
var n = a("37983"),
  i = a("884691"),
  l = a("627445"),
  s = a.n(l),
  d = a("446674"),
  u = a("77078"),
  r = a("126501"),
  o = a("388142"),
  c = a("473528"),
  f = a("578899"),
  g = a("685058"),
  p = a("498139"),
  E = a("578411"),
  I = a("383292"),
  h = a("163139"),
  M = a("230947"),
  m = a("747867"),
  _ = a("58622"),
  x = a("413266"),
  S = a("701203"),
  A = a("95039"),
  v = a("255812"),
  G = a("199938"),
  R = a("592407"),
  C = a("267567"),
  T = a("724026"),
  b = a("393414"),
  L = a("26989"),
  D = a("957255"),
  j = a("282109"),
  N = a("697218"),
  y = a("756609"),
  U = a("660279"),
  O = a("171710"),
  P = a("796454"),
  H = a("919765"),
  V = a("474571"),
  w = a("118503"),
  F = a("987772"),
  k = a("351825"),
  B = a("561359"),
  z = a("148337"),
  Y = a("599110"),
  W = a("49111"),
  Z = a("695838"),
  K = a("782340");

function X(e) {
  (0, u.openModal)(t => (0, n.jsx)(E.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let q = i.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: E
  } = e, q = (0, d.useStateFromStores)([N.default], () => N.default.getCurrentUser());
  s(null != q, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
    Y.default.track(W.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let J = (0, d.useStateFromStores)([j.default], () => j.default.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: Q,
      canManageChannels: $,
      showGuildAnalytics: ee
    } = (0, d.useStateFromStoresObject)([D.default], () => {
      let e = D.default.can(W.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(W.GuildFeatures.COMMUNITY);
      return {
        canAccessSettings: D.default.canAccessGuildSettings(t),
        canManageChannels: D.default.can(W.Permissions.MANAGE_CHANNELS, t),
        showGuildAnalytics: (0, G.staffOnlyGuildSettingsAccess)(t.id) || e
      }
    }, [t]),
    et = (0, S.useCanReportRaid)(t),
    ea = t.isOwner(q),
    en = (0, d.useStateFromStores)([C.default], () => C.default.isLurking(t.id), [t.id]),
    ei = (0, d.useStateFromStores)([L.default], () => L.default.isCurrentUserGuest(t.id)),
    el = (0, v.default)(t.id, !0),
    es = (0, g.default)(t),
    ed = (0, _.default)({
      source: W.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    eu = (0, M.default)({
      guildId: t.id,
      userId: q.id,
      analyticsLocation: {
        page: W.AnalyticsPages.GUILD_CHANNEL,
        section: W.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: F.default
    }),
    er = t.hasFeature(W.GuildFeatures.HUB),
    eo = t.id === Z.FAVORITES_RAW_GUILD_ID,
    ec = (0, T.default)(t.id),
    ef = (0, I.default)(t),
    eg = (0, h.default)(t),
    ep = (0, m.default)(t, !0),
    {
      isFavoritesPerk: eE
    } = (0, p.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: eI
    } = f.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: eh
    } = c.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    });
  return en || ei ? (0, n.jsx)(u.Menu, {
    onSelect: E,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, n.jsx)(u.MenuItem, {
      id: "leave-guild",
      label: K.default.Messages.LEAVE_SERVER,
      icon: P.default,
      action: () => {
        R.default.leaveGuild(t.id), !ei && (0, b.transitionTo)(W.Routes.GUILD_DISCOVERY)
      }
    })
  }) : eo ? (0, n.jsxs)(u.Menu, {
    onSelect: E,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(u.MenuGroup, {
      children: [eE && (0, n.jsx)(u.MenuItem, {
        id: "add-channel",
        label: K.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: k.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("746039").then(a.bind(a, "746039"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      }), (0, n.jsx)(u.MenuItem, {
        id: "create-category",
        label: K.default.Messages.CREATE_CATEGORY,
        icon: H.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("515680").then(a.bind(a, "515680"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: K.default.Messages.HIDE_MUTED_CHANNELS,
        checked: J,
        action: () => r.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : er ? (0, n.jsxs)(u.Menu, {
    onSelect: E,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(u.MenuGroup, {
      children: [Q ? (0, n.jsx)(u.MenuItem, {
        id: "settings",
        label: K.default.Messages.SERVER_SETTINGS,
        icon: V.default,
        action: () => {
          R.default.open(t.id, W.GuildSettingsSections.OVERVIEW)
        }
      }) : null, ed, (0, n.jsx)(u.MenuItem, {
        id: "privacy",
        label: K.default.Messages.PRIVACY_SETTINGS,
        icon: z.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("349406").then(a.bind(a, "349406"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), eu]
    }), ea ? null : (0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "leave",
        label: K.default.Messages.LEAVE_HUB,
        icon: P.default,
        color: "danger",
        action: () => X(t)
      })
    })]
  }) : (0, n.jsxs)(u.Menu, {
    onSelect: E,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "premium-subscribe",
        label: K.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: w.default,
        action: () => {
          (0, A.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: W.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [ea && q.isStaff() && eI ? (0, n.jsx)(u.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: O.default,
        action: () => {
          (0, o.forcePrompt)(t.id, W.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, ea && q.isStaff() && eh ? (0, n.jsx)(u.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: O.default,
        action: () => {
          (0, o.forcePrompt)(t.id, W.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, ed, Q ? (0, n.jsx)(u.MenuItem, {
        id: "settings",
        label: K.default.Messages.SERVER_SETTINGS,
        icon: V.default,
        action: () => {
          R.default.open(t.id, W.GuildSettingsSections.OVERVIEW)
        }
      }) : null, ee ? (0, n.jsx)(u.MenuItem, {
        id: "insights",
        label: K.default.Messages.SERVER_INSIGHTS,
        icon: y.default,
        action: () => R.default.open(t.id, W.GuildSettingsSections.ANALYTICS)
      }) : null, $ ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.MenuItem, {
          id: "create-channel",
          label: K.default.Messages.CREATE_CHANNEL,
          icon: k.default,
          action: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await a.el("581354").then(a.bind(a, "581354"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: W.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, n.jsx)(u.MenuItem, {
          id: "create-category",
          label: K.default.Messages.CREATE_CATEGORY,
          icon: H.default,
          action: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await a.el("581354").then(a.bind(a, "581354"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: W.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, el, ef, eg, es]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [ec, (0, n.jsx)(u.MenuItem, {
        id: "notifications",
        label: K.default.Messages.NOTIFICATION_SETTINGS,
        icon: U.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("747593").then(a.bind(a, "747593"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, n.jsx)(u.MenuItem, {
        id: "privacy",
        label: K.default.Messages.PRIVACY_SETTINGS,
        icon: z.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("349406").then(a.bind(a, "349406"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      })]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [eu, (0, n.jsx)(u.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: K.default.Messages.HIDE_MUTED_CHANNELS,
        checked: J,
        action: () => r.default.toggleCollapseGuild(t.id)
      })]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [ep, et && t.isCommunity() ? (0, n.jsx)(u.MenuItem, {
        id: "report-raid",
        label: K.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: B.default,
        color: "danger",
        action: () => (0, x.openReportRaidModal)(t.id)
      }) : null, ea ? null : (0, n.jsx)(u.MenuItem, {
        id: "leave",
        label: K.default.Messages.LEAVE_SERVER,
        icon: P.default,
        color: "danger",
        action: () => X(t)
      })]
    })]
  })
});
var J = q