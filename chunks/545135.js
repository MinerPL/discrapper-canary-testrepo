"use strict";
i.r(t), i.d(t, {
  default: function() {
    return v
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
  L = i("429824"),
  m = i("919815"),
  O = i("858822"),
  p = i("993356"),
  G = i("58338"),
  C = i("422525"),
  b = i("522762"),
  x = i("466330"),
  U = i("981631"),
  R = i("689938");

function j(e) {
  let {
    guild: t,
    onSelect: n,
    hideSettings: d
  } = e, r = t.id, j = g.default.getDefaultChannel(r), v = (0, l.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return a()(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), P = (0, x.default)({
    guild: t,
    source: U.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: j
  }), y = (0, b.default)(r), F = (0, O.default)(t), D = (0, p.default)(t), k = (0, C.default)(t), B = (0, h.default)({
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
    label: R.default.Messages.COPY_ID_GUILD
  }), K = (0, m.default)(t, {
    section: U.AnalyticsSections.GUILD_LIST
  }), z = (0, E.default)(t.id), W = (0, G.default)(t.id), X = (0, N.default)(t.id), Q = (0, L.default)(t), q = (0, f.useShouldUseNewNotificationSystem)("GuildContextMenu");

  function J() {
    (0, u.openModal)(e => (0, s.jsx)(I.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return t.hasFeature(U.GuildFeatures.HUB) ? (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": R.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsxs)(u.MenuGroup, {
      children: [P, (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: R.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("88408")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), B]
    }), v ? null : (0, s.jsx)(u.MenuGroup, {
      children: (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: R.default.Messages.LEAVE_HUB,
        action: J,
        color: "danger"
      })
    }), (0, s.jsx)(u.MenuGroup, {
      children: V
    })]
  }) : (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": R.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsx)(u.MenuGroup, {
      children: K
    }), (0, s.jsx)(u.MenuGroup, {
      children: P
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [F, q || __OVERLAY__ ? null : D, q && !__OVERLAY__ ? W : null, X, y, z]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [d ? null : k, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: R.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("88408")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), B, H]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [Y, w]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [Q, !v && (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: R.default.Messages.LEAVE_SERVER,
        action: J,
        color: "danger"
      })]
    }), (0, s.jsx)(u.MenuGroup, {
      children: V
    })]
  })
}

function v(e) {
  let {
    analyticsLocations: t
  } = (0, r.default)(d.default.CONTEXT_MENU);
  return (0, s.jsx)(r.AnalyticsLocationProvider, {
    value: t,
    children: (0, s.jsx)(j, {
      ...e
    })
  })
}