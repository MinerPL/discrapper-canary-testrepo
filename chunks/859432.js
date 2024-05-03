"use strict";
a.r(t), a("47120");
var n = a("735250"),
  i = a("470079"),
  l = a("512722"),
  s = a.n(l),
  u = a("442837"),
  d = a("524437"),
  r = a("481060"),
  o = a("5036"),
  c = a("553385"),
  f = a("52011"),
  g = a("890477"),
  E = a("458034"),
  I = a("706140"),
  p = a("362658"),
  M = a("241851"),
  m = a("294978"),
  h = a("513102"),
  _ = a("976192"),
  S = a("429824"),
  x = a("466330"),
  A = a("191471"),
  G = a("162157"),
  v = a("623624"),
  C = a("894059"),
  T = a("771212"),
  R = a("434404"),
  L = a("41776"),
  N = a("837949"),
  b = a("11352"),
  D = a("703656"),
  j = a("271383"),
  y = a("496675"),
  P = a("9156"),
  U = a("594174"),
  O = a("825185"),
  H = a("808602"),
  V = a("386103"),
  w = a("632310"),
  F = a("615814"),
  B = a("937482"),
  k = a("709586"),
  z = a("185403"),
  Y = a("151785"),
  W = a("288176"),
  Z = a("833571"),
  K = a("26290"),
  X = a("626135"),
  q = a("981631"),
  J = a("647086"),
  Q = a("689938"),
  $ = a("653938");

function ee(e) {
  (0, r.openModal)(t => (0, n.jsx)(M.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let et = i.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: M
  } = e, et = (0, u.useStateFromStores)([U.default], () => U.default.getCurrentUser());
  s()(null != et, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
    X.default.track(q.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let ea = (0, u.useStateFromStores)([P.default], () => P.default.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: en,
      canManageChannels: ei,
      showGuildAnalytics: el
    } = (0, u.useStateFromStoresObject)([y.default], () => {
      let e = y.default.can(q.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(q.GuildFeatures.COMMUNITY);
      return {
        canAccessSettings: y.default.canAccessGuildSettings(t),
        canManageChannels: y.default.can(q.Permissions.MANAGE_CHANNELS, t),
        showGuildAnalytics: (0, T.staffOnlyGuildSettingsAccess)(t.id) || e
      }
    }, [t]),
    es = (0, G.useCanReportRaid)(t),
    eu = t.isOwner(et),
    ed = (0, u.useStateFromStores)([L.default], () => L.default.isLurking(t.id), [t.id]),
    er = (0, u.useStateFromStores)([j.default], () => j.default.isCurrentUserGuest(t.id)),
    eo = (0, C.default)(t.id, !0),
    ec = (0, E.default)(t),
    ef = (0, x.default)({
      source: q.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    eg = (0, _.default)({
      guildId: t.id,
      userId: et.id,
      analyticsLocation: {
        page: q.AnalyticsPages.GUILD_CHANNEL,
        section: q.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: z.default
    }),
    eE = t.hasFeature(q.GuildFeatures.HUB),
    eI = t.id === J.FAVORITES_RAW_GUILD_ID,
    ep = (0, N.default)(t.id),
    eM = (0, m.default)(t),
    em = (0, h.default)(t),
    eh = (0, S.default)(t, !0),
    {
      isFavoritesPerk: e_
    } = (0, p.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: eS
    } = g.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: ex
    } = f.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    eA = b.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildHeaderPopout"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [eG] = (0, I.useGetDismissibleContent)([d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    ev = eA && eG === d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return ed || er ? (0, n.jsx)(r.Menu, {
    onSelect: M,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, n.jsx)(r.MenuItem, {
      id: "leave-guild",
      label: Q.default.Messages.LEAVE_SERVER,
      icon: w.default,
      action: () => {
        R.default.leaveGuild(t.id), !er && (0, D.transitionTo)(q.Routes.GUILD_DISCOVERY)
      }
    })
  }) : eI ? (0, n.jsxs)(r.Menu, {
    onSelect: M,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(r.MenuGroup, {
      children: [e_ && (0, n.jsx)(r.MenuItem, {
        id: "add-channel",
        label: Q.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: Y.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("29608")]).then(a.bind(a, "178125"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      }), (0, n.jsx)(r.MenuItem, {
        id: "create-category",
        label: Q.default.Messages.CREATE_CATEGORY,
        icon: F.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("1812")]).then(a.bind(a, "477782"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, n.jsx)(r.MenuGroup, {
      children: (0, n.jsx)(r.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: Q.default.Messages.HIDE_MUTED_CHANNELS,
        checked: ea,
        action: () => o.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : eE ? (0, n.jsxs)(r.Menu, {
    onSelect: M,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(r.MenuGroup, {
      children: [en ? (0, n.jsx)(r.MenuItem, {
        id: "settings",
        label: Q.default.Messages.SERVER_SETTINGS,
        icon: B.default,
        action: () => {
          R.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
        }
      }) : null, ef, (0, n.jsx)(r.MenuItem, {
        id: "privacy",
        label: Q.default.Messages.PRIVACY_SETTINGS,
        icon: Z.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("88408")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), eg]
    }), eu ? null : (0, n.jsx)(r.MenuGroup, {
      children: (0, n.jsx)(r.MenuItem, {
        id: "leave",
        label: Q.default.Messages.LEAVE_HUB,
        icon: w.default,
        color: "danger",
        action: () => ee(t)
      })
    })]
  }) : (0, n.jsxs)(r.Menu, {
    onSelect: M,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(r.MenuGroup, {
      children: (0, n.jsx)(r.MenuItem, {
        id: "premium-subscribe",
        label: Q.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: k.default,
        action: () => {
          (0, v.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: q.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [eu && et.isStaff() && eS ? (0, n.jsx)(r.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: V.default,
        action: () => {
          (0, c.forcePrompt)(t.id, q.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, eu && et.isStaff() && ex ? (0, n.jsx)(r.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: V.default,
        action: () => {
          (0, c.forcePrompt)(t.id, q.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, ef, en ? (0, n.jsx)(r.MenuItem, {
        id: "settings",
        label: Q.default.Messages.SERVER_SETTINGS,
        icon: B.default,
        action: () => {
          R.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
        }
      }) : null, el ? (0, n.jsx)(r.MenuItem, {
        id: "insights",
        label: Q.default.Messages.SERVER_INSIGHTS,
        icon: O.default,
        action: () => R.default.open(t.id, q.GuildSettingsSections.ANALYTICS)
      }) : null, ei ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.MenuItem, {
          id: "create-channel",
          label: Q.default.Messages.CREATE_CHANNEL,
          icon: Y.default,
          action: () => (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: q.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, n.jsx)(r.MenuItem, {
          id: "create-category",
          label: Q.default.Messages.CREATE_CATEGORY,
          icon: F.default,
          action: () => (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: q.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, eo, eM, em, ec]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [ep, (0, n.jsx)(r.MenuItem, {
        id: "notifications",
        label: (0, n.jsxs)("div", {
          className: $.newBadgeRow,
          children: [Q.default.Messages.NOTIFICATION_SETTINGS, ev && (0, n.jsx)(K.TextBadge, {
            className: $.newBadge,
            text: Q.default.Messages.NEW
          })]
        }),
        icon: ev ? void 0 : H.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("29041")]).then(a.bind(a, "751212"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, n.jsx)(r.MenuItem, {
        id: "privacy",
        label: Q.default.Messages.PRIVACY_SETTINGS,
        icon: Z.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("88408")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      })]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [eg, (0, n.jsx)(r.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: Q.default.Messages.HIDE_MUTED_CHANNELS,
        checked: ea,
        action: () => o.default.toggleCollapseGuild(t.id)
      })]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [eh, es && t.isCommunity() ? (0, n.jsx)(r.MenuItem, {
        id: "report-raid",
        label: Q.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: W.default,
        color: "danger",
        action: () => (0, A.openReportRaidModal)(t.id)
      }) : null, eu ? null : (0, n.jsx)(r.MenuItem, {
        id: "leave",
        label: Q.default.Messages.LEAVE_SERVER,
        icon: w.default,
        color: "danger",
        action: () => ee(t)
      })]
    })]
  })
});
t.default = et