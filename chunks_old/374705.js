"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var i = n("37983");
n("884691");
var s = n("627445"),
  a = n.n(s),
  l = n("446674"),
  u = n("77078"),
  d = n("272030"),
  o = n("812204"),
  r = n("685665"),
  c = n("861370"),
  f = n("255812"),
  S = n("47495"),
  E = n("724026"),
  g = n("271938"),
  _ = n("923959"),
  M = n("697218"),
  N = n("578411"),
  h = n("230947"),
  I = n("544955"),
  A = n("747867"),
  T = n("555914"),
  L = n("513472"),
  p = n("527660"),
  O = n("823772"),
  U = n("177508"),
  m = n("263673"),
  G = n("58622"),
  R = n("49111"),
  C = n("782340");

function b(e) {
  let {
    guild: t,
    onSelect: s,
    hideSettings: o
  } = e, r = t.id, b = _.default.getDefaultChannel(r), v = (0, l.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), x = (0, G.default)({
    guild: t,
    source: R.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: b
  }), j = (0, m.default)(r), y = (0, L.default)(t), F = (0, p.default)(t), D = (0, U.default)(t), P = (0, h.default)({
    guildId: t.id,
    userId: g.default.getId(),
    analyticsLocation: {
      page: R.AnalyticsPages.GUILD_CHANNEL,
      section: R.AnalyticsSections.CHAT_USERNAME,
      object: R.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), H = (0, I.default)(t), k = (0, f.default)(t.id), Y = (0, c.default)({
    id: t.id,
    label: C.default.Messages.COPY_ID_GUILD
  }), V = (0, T.default)(t, {
    section: R.AnalyticsSections.GUILD_LIST
  }), B = (0, E.default)(t.id), w = (0, O.default)(t.id), X = (0, A.default)(t), W = (0, S.useShouldUseNewNotificationSystem)("GuildContextMenu"), z = t.hasFeature(R.GuildFeatures.HUB);

  function Z() {
    (0, u.openModal)(e => (0, i.jsx)(N.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return z ? (0, i.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: d.closeContextMenu,
    "aria-label": C.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, i.jsxs)(u.MenuGroup, {
      children: [x, (0, i.jsx)(u.MenuItem, {
        id: "privacy",
        label: C.default.Messages.HUB_PRIVACY_SETTINGS,
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
    }), v ? null : (0, i.jsx)(u.MenuGroup, {
      children: (0, i.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: C.default.Messages.LEAVE_HUB,
        action: Z,
        color: "danger"
      })
    }), (0, i.jsx)(u.MenuGroup, {
      children: Y
    })]
  }) : (0, i.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: d.closeContextMenu,
    "aria-label": C.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, i.jsx)(u.MenuGroup, {
      children: V
    }), (0, i.jsx)(u.MenuGroup, {
      children: x
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [y, W || __OVERLAY__ ? null : F, W && !__OVERLAY__ ? w : null, j, B]
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [o ? null : D, __OVERLAY__ ? null : (0, i.jsx)(u.MenuItem, {
        id: "privacy",
        label: C.default.Messages.PRIVACY_SETTINGS,
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
      children: [H, k]
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [X, !v && (0, i.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: C.default.Messages.LEAVE_SERVER,
        action: Z,
        color: "danger"
      })]
    }), (0, i.jsx)(u.MenuGroup, {
      children: Y
    })]
  })
}

function v(e) {
  let {
    analyticsLocations: t
  } = (0, r.default)(o.default.CONTEXT_MENU);
  return (0, i.jsx)(r.AnalyticsLocationProvider, {
    value: t,
    children: (0, i.jsx)(b, {
      ...e
    })
  })
}