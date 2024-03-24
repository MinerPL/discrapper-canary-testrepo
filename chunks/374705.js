"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
});
var i = n("37983");
n("884691");
var s = n("627445"),
  a = n.n(s),
  l = n("446674"),
  u = n("77078"),
  o = n("272030"),
  d = n("812204"),
  r = n("685665"),
  c = n("861370"),
  f = n("255812"),
  E = n("47495"),
  S = n("724026"),
  _ = n("271938"),
  g = n("923959"),
  M = n("697218"),
  N = n("578411"),
  I = n("230947"),
  T = n("544955"),
  h = n("747867"),
  A = n("555914"),
  p = n("513472"),
  L = n("527660"),
  O = n("823772"),
  U = n("177508"),
  C = n("263673"),
  R = n("58622"),
  m = n("49111"),
  v = n("782340");

function G(e) {
  let {
    guild: t,
    onSelect: s,
    hideSettings: d
  } = e, r = t.id, G = g.default.getDefaultChannel(r), b = (0, l.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), x = (0, R.default)({
    guild: t,
    source: m.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: G
  }), y = (0, C.default)(r), F = (0, p.default)(t), j = (0, L.default)(t), D = (0, U.default)(t), P = (0, I.default)({
    guildId: t.id,
    userId: _.default.getId(),
    analyticsLocation: {
      page: m.AnalyticsPages.GUILD_CHANNEL,
      section: m.AnalyticsSections.CHAT_USERNAME,
      object: m.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), H = (0, T.default)(t), Y = (0, f.default)(t.id), V = (0, c.default)({
    id: t.id,
    label: v.default.Messages.COPY_ID_GUILD
  }), B = (0, A.default)(t, {
    section: m.AnalyticsSections.GUILD_LIST
  }), w = (0, S.default)(t.id), k = (0, O.default)(t.id), Z = (0, h.default)(t), z = (0, E.useShouldUseNewNotificationSystem)("GuildContextMenu"), J = t.hasFeature(m.GuildFeatures.HUB);

  function W() {
    (0, u.openModal)(e => (0, i.jsx)(N.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return J ? (0, i.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, i.jsxs)(u.MenuGroup, {
      children: [x, (0, i.jsx)(u.MenuItem, {
        id: "privacy",
        label: v.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("349406").then(n.bind(n, "349406"));
          return n => (0, i.jsx)(e, {
            ...n,
            guild: t
          })
        })
      }), P]
    }), b ? null : (0, i.jsx)(u.MenuGroup, {
      children: (0, i.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: v.default.Messages.LEAVE_HUB,
        action: W,
        color: "danger"
      })
    }), (0, i.jsx)(u.MenuGroup, {
      children: V
    })]
  }) : (0, i.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, i.jsx)(u.MenuGroup, {
      children: B
    }), (0, i.jsx)(u.MenuGroup, {
      children: x
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [F, z || __OVERLAY__ ? null : j, z && !__OVERLAY__ ? k : null, y, w]
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [d ? null : D, __OVERLAY__ ? null : (0, i.jsx)(u.MenuItem, {
        id: "privacy",
        label: v.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("349406").then(n.bind(n, "349406"));
          return n => (0, i.jsx)(e, {
            ...n,
            guild: t
          })
        })
      }), P]
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [H, Y]
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [Z, !b && (0, i.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: v.default.Messages.LEAVE_SERVER,
        action: W,
        color: "danger"
      })]
    }), (0, i.jsx)(u.MenuGroup, {
      children: V
    })]
  })
}

function b(e) {
  let {
    AnalyticsLocationProvider: t
  } = (0, r.default)(d.default.CONTEXT_MENU);
  return (0, i.jsx)(t, {
    children: (0, i.jsx)(G, {
      ...e
    })
  })
}