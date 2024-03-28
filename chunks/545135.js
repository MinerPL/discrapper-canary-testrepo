"use strict";
i.r(t), i.d(t, {
  default: function() {
    return j
  }
});
var s = i("735250");
i("470079");
var n = i("512722"),
  a = i.n(n),
  l = i("442837"),
  u = i("481060"),
  o = i("239091"),
  d = i("100527"),
  r = i("906732"),
  c = i("299206"),
  S = i("894059"),
  E = i("423589"),
  f = i("837949"),
  g = i("314897"),
  _ = i("984933"),
  N = i("594174"),
  M = i("241851"),
  h = i("976192"),
  I = i("904483"),
  L = i("429824"),
  A = i("919815"),
  p = i("858822"),
  T = i("993356"),
  G = i("58338"),
  O = i("422525"),
  m = i("522762"),
  b = i("466330"),
  x = i("981631"),
  R = i("689938");

function U(e) {
  let {
    guild: t,
    onSelect: n,
    hideSettings: d
  } = e, r = t.id, U = _.default.getDefaultChannel(r), j = (0, l.useStateFromStores)([N.default], () => {
    let e = N.default.getCurrentUser();
    return a()(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), C = (0, b.default)({
    guild: t,
    source: x.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: U
  }), P = (0, m.default)(r), v = (0, p.default)(t), F = (0, T.default)(t), y = (0, O.default)(t), D = (0, h.default)({
    guildId: t.id,
    userId: g.default.getId(),
    analyticsLocation: {
      page: x.AnalyticsPages.GUILD_CHANNEL,
      section: x.AnalyticsSections.CHAT_USERNAME,
      object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), k = (0, I.default)(t), H = (0, S.default)(t.id), B = (0, c.default)({
    id: t.id,
    label: R.default.Messages.COPY_ID_GUILD
  }), Y = (0, A.default)(t, {
    section: x.AnalyticsSections.GUILD_LIST
  }), w = (0, f.default)(t.id), V = (0, G.default)(t.id), z = (0, L.default)(t), X = (0, E.useShouldUseNewNotificationSystem)("GuildContextMenu");

  function W() {
    (0, u.openModal)(e => (0, s.jsx)(M.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return t.hasFeature(x.GuildFeatures.HUB) ? (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": R.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsxs)(u.MenuGroup, {
      children: [C, (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: R.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("59500")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), D]
    }), j ? null : (0, s.jsx)(u.MenuGroup, {
      children: (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: R.default.Messages.LEAVE_HUB,
        action: W,
        color: "danger"
      })
    }), (0, s.jsx)(u.MenuGroup, {
      children: B
    })]
  }) : (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": R.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsx)(u.MenuGroup, {
      children: Y
    }), (0, s.jsx)(u.MenuGroup, {
      children: C
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [v, X || __OVERLAY__ ? null : F, X && !__OVERLAY__ ? V : null, P, w]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [d ? null : y, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: R.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("59500")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), D]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [k, H]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [z, !j && (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: R.default.Messages.LEAVE_SERVER,
        action: W,
        color: "danger"
      })]
    }), (0, s.jsx)(u.MenuGroup, {
      children: B
    })]
  })
}

function j(e) {
  let {
    analyticsLocations: t
  } = (0, r.default)(d.default.CONTEXT_MENU);
  return (0, s.jsx)(r.AnalyticsLocationProvider, {
    value: t,
    children: (0, s.jsx)(U, {
      ...e
    })
  })
}