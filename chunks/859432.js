"use strict";
a.r(t);
var n = a("735250"),
  i = a("470079"),
  l = a("512722"),
  s = a.n(l),
  u = a("442837"),
  d = a("481060"),
  r = a("5036"),
  o = a("553385"),
  c = a("52011"),
  f = a("890477"),
  g = a("458034"),
  E = a("362658"),
  p = a("241851"),
  I = a("294978"),
  M = a("513102"),
  m = a("976192"),
  h = a("429824"),
  _ = a("466330"),
  x = a("191471"),
  S = a("162157"),
  A = a("623624"),
  v = a("894059"),
  G = a("771212"),
  R = a("434404"),
  T = a("41776"),
  C = a("837949"),
  L = a("703656"),
  b = a("271383"),
  j = a("496675"),
  N = a("9156"),
  D = a("594174"),
  y = a("825185"),
  P = a("808602"),
  U = a("386103"),
  O = a("632310"),
  H = a("615814"),
  V = a("937482"),
  w = a("709586"),
  F = a("185403"),
  k = a("151785"),
  B = a("288176"),
  z = a("833571"),
  Y = a("626135"),
  W = a("981631"),
  Z = a("647086"),
  K = a("689938");

function X(e) {
  (0, d.openModal)(t => (0, n.jsx)(p.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let q = i.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: p
  } = e, q = (0, u.useStateFromStores)([D.default], () => D.default.getCurrentUser());
  s()(null != q, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
    Y.default.track(W.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let J = (0, u.useStateFromStores)([N.default], () => N.default.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: Q,
      canManageChannels: $,
      showGuildAnalytics: ee
    } = (0, u.useStateFromStoresObject)([j.default], () => {
      let e = j.default.can(W.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(W.GuildFeatures.COMMUNITY);
      return {
        canAccessSettings: j.default.canAccessGuildSettings(t),
        canManageChannels: j.default.can(W.Permissions.MANAGE_CHANNELS, t),
        showGuildAnalytics: (0, G.staffOnlyGuildSettingsAccess)(t.id) || e
      }
    }, [t]),
    et = (0, S.useCanReportRaid)(t),
    ea = t.isOwner(q),
    en = (0, u.useStateFromStores)([T.default], () => T.default.isLurking(t.id), [t.id]),
    ei = (0, u.useStateFromStores)([b.default], () => b.default.isCurrentUserGuest(t.id)),
    el = (0, v.default)(t.id, !0),
    es = (0, g.default)(t),
    eu = (0, _.default)({
      source: W.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    ed = (0, m.default)({
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
    ec = (0, C.default)(t.id),
    ef = (0, I.default)(t),
    eg = (0, M.default)(t),
    eE = (0, h.default)(t, !0),
    {
      isFavoritesPerk: ep
    } = (0, E.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: eI
    } = f.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: eM
    } = c.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    });
  return en || ei ? (0, n.jsx)(d.Menu, {
    onSelect: p,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, n.jsx)(d.MenuItem, {
      id: "leave-guild",
      label: K.default.Messages.LEAVE_SERVER,
      icon: O.default,
      action: () => {
        R.default.leaveGuild(t.id), !ei && (0, L.transitionTo)(W.Routes.GUILD_DISCOVERY)
      }
    })
  }) : eo ? (0, n.jsxs)(d.Menu, {
    onSelect: p,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(d.MenuGroup, {
      children: [ep && (0, n.jsx)(d.MenuItem, {
        id: "add-channel",
        label: K.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: k.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("29608")]).then(a.bind(a, "610617"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      }), (0, n.jsx)(d.MenuItem, {
        id: "create-category",
        label: K.default.Messages.CREATE_CATEGORY,
        icon: H.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("1812")]).then(a.bind(a, "477782"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, n.jsx)(d.MenuGroup, {
      children: (0, n.jsx)(d.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: K.default.Messages.HIDE_MUTED_CHANNELS,
        checked: J,
        action: () => r.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : er ? (0, n.jsxs)(d.Menu, {
    onSelect: p,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(d.MenuGroup, {
      children: [Q ? (0, n.jsx)(d.MenuItem, {
        id: "settings",
        label: K.default.Messages.SERVER_SETTINGS,
        icon: V.default,
        action: () => {
          R.default.open(t.id, W.GuildSettingsSections.OVERVIEW)
        }
      }) : null, eu, (0, n.jsx)(d.MenuItem, {
        id: "privacy",
        label: K.default.Messages.PRIVACY_SETTINGS,
        icon: z.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("59500")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), ed]
    }), ea ? null : (0, n.jsx)(d.MenuGroup, {
      children: (0, n.jsx)(d.MenuItem, {
        id: "leave",
        label: K.default.Messages.LEAVE_HUB,
        icon: O.default,
        color: "danger",
        action: () => X(t)
      })
    })]
  }) : (0, n.jsxs)(d.Menu, {
    onSelect: p,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(d.MenuGroup, {
      children: (0, n.jsx)(d.MenuItem, {
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
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [ea && q.isStaff() && eI ? (0, n.jsx)(d.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: U.default,
        action: () => {
          (0, o.forcePrompt)(t.id, W.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, ea && q.isStaff() && eM ? (0, n.jsx)(d.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: U.default,
        action: () => {
          (0, o.forcePrompt)(t.id, W.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, eu, Q ? (0, n.jsx)(d.MenuItem, {
        id: "settings",
        label: K.default.Messages.SERVER_SETTINGS,
        icon: V.default,
        action: () => {
          R.default.open(t.id, W.GuildSettingsSections.OVERVIEW)
        }
      }) : null, ee ? (0, n.jsx)(d.MenuItem, {
        id: "insights",
        label: K.default.Messages.SERVER_INSIGHTS,
        icon: y.default,
        action: () => R.default.open(t.id, W.GuildSettingsSections.ANALYTICS)
      }) : null, $ ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.MenuItem, {
          id: "create-channel",
          label: K.default.Messages.CREATE_CHANNEL,
          icon: k.default,
          action: () => (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: W.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, n.jsx)(d.MenuItem, {
          id: "create-category",
          label: K.default.Messages.CREATE_CATEGORY,
          icon: H.default,
          action: () => (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: W.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, el, ef, eg, es]
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [ec, (0, n.jsx)(d.MenuItem, {
        id: "notifications",
        label: K.default.Messages.NOTIFICATION_SETTINGS,
        icon: P.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("60411")]).then(a.bind(a, "751212"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, n.jsx)(d.MenuItem, {
        id: "privacy",
        label: K.default.Messages.PRIVACY_SETTINGS,
        icon: z.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("59500")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      })]
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [ed, (0, n.jsx)(d.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: K.default.Messages.HIDE_MUTED_CHANNELS,
        checked: J,
        action: () => r.default.toggleCollapseGuild(t.id)
      })]
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [eE, et && t.isCommunity() ? (0, n.jsx)(d.MenuItem, {
        id: "report-raid",
        label: K.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: B.default,
        color: "danger",
        action: () => (0, x.openReportRaidModal)(t.id)
      }) : null, ea ? null : (0, n.jsx)(d.MenuItem, {
        id: "leave",
        label: K.default.Messages.LEAVE_SERVER,
        icon: O.default,
        color: "danger",
        action: () => X(t)
      })]
    })]
  })
});
t.default = q