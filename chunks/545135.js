"use strict";
i.r(t), i.d(t, {
  default: function() {
    return v
  }
});
var n = i("735250");
i("470079");
var s = i("512722"),
  a = i.n(s),
  u = i("442837"),
  l = i("481060"),
  o = i("239091"),
  d = i("100527"),
  r = i("906732"),
  c = i("299206"),
  S = i("894059"),
  f = i("423589"),
  E = i("837949"),
  N = i("122074"),
  _ = i("314897"),
  g = i("984933"),
  M = i("594174"),
  I = i("241851"),
  A = i("94953"),
  h = i("976192"),
  T = i("904483"),
  m = i("429824"),
  L = i("919815"),
  p = i("858822"),
  O = i("993356"),
  C = i("58338"),
  G = i("422525"),
  x = i("522762"),
  b = i("466330"),
  U = i("981631"),
  j = i("689938");

function R(e) {
  let {
    guild: t,
    onSelect: s,
    hideSettings: d
  } = e, r = t.id, R = g.default.getDefaultChannel(r), v = (0, u.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return a()(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), P = (0, b.default)({
    guild: t,
    source: U.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: R
  }), D = (0, x.default)(r), y = (0, p.default)(t), F = (0, O.default)(t), k = (0, G.default)(t), B = (0, h.default)({
    guildId: t.id,
    userId: _.default.getId(),
    analyticsLocation: {
      page: U.AnalyticsPages.GUILD_CHANNEL,
      section: U.AnalyticsSections.CHAT_USERNAME,
      object: U.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), H = (0, A.default)({
    guildId: t.id,
    userId: _.default.getId(),
    analyticsLocation: {
      page: U.AnalyticsPages.GUILD_CHANNEL,
      section: U.AnalyticsSections.CHAT_USERNAME,
      object: U.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), Y = (0, T.default)(t), w = (0, S.default)(t.id), V = (0, c.default)({
    id: t.id,
    label: j.default.Messages.COPY_ID_GUILD
  }), K = (0, L.default)(t, {
    section: U.AnalyticsSections.GUILD_LIST
  }), z = (0, E.default)(t.id), W = (0, C.default)(t.id), X = (0, N.useCustomNotificationSoundGuildContextMenuItem)(t.id, !1), Q = (0, m.default)(t), Z = (0, f.useShouldUseNewNotificationSystem)("GuildContextMenu");

  function q() {
    (0, l.openModal)(e => (0, n.jsx)(I.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return t.hasFeature(U.GuildFeatures.HUB) ? (0, n.jsxs)(l.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": j.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, n.jsxs)(l.MenuGroup, {
      children: [P, (0, n.jsx)(l.MenuItem, {
        id: "privacy",
        label: j.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("59500")]).then(i.bind(i, "241420"));
          return i => (0, n.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), B]
    }), v ? null : (0, n.jsx)(l.MenuGroup, {
      children: (0, n.jsx)(l.MenuItem, {
        id: "leave-guild",
        label: j.default.Messages.LEAVE_HUB,
        action: q,
        color: "danger"
      })
    }), (0, n.jsx)(l.MenuGroup, {
      children: V
    })]
  }) : (0, n.jsxs)(l.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": j.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, n.jsx)(l.MenuGroup, {
      children: K
    }), (0, n.jsx)(l.MenuGroup, {
      children: P
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [y, Z || __OVERLAY__ ? null : F, Z && !__OVERLAY__ ? W : null, X, D, z]
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [d ? null : k, __OVERLAY__ ? null : (0, n.jsx)(l.MenuItem, {
        id: "privacy",
        label: j.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("59500")]).then(i.bind(i, "241420"));
          return i => (0, n.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), B, H]
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [Y, w]
    }), (0, n.jsxs)(l.MenuGroup, {
      children: [Q, !v && (0, n.jsx)(l.MenuItem, {
        id: "leave-guild",
        label: j.default.Messages.LEAVE_SERVER,
        action: q,
        color: "danger"
      })]
    }), (0, n.jsx)(l.MenuGroup, {
      children: V
    })]
  })
}

function v(e) {
  let {
    analyticsLocations: t
  } = (0, r.default)(d.default.CONTEXT_MENU);
  return (0, n.jsx)(r.AnalyticsLocationProvider, {
    value: t,
    children: (0, n.jsx)(R, {
      ...e
    })
  })
}