"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("272030"),
  u = n("812204"),
  d = n("685665"),
  c = n("619335"),
  f = n("506885"),
  h = n("981601"),
  C = n("26989"),
  p = n("697218"),
  m = n("959097"),
  E = n("158998"),
  g = n("172554"),
  S = n("49111"),
  T = n("782340"),
  A = n("247703");

function _(e) {
  var t, a;
  let {
    userId: c,
    channel: m
  } = e, {
    analyticsLocations: g
  } = (0, d.default)(u.default.USERNAME), S = (0, i.useStateFromStores)([p.default], () => p.default.getUser(c)), T = (0, i.useStateFromStores)([C.default], () => null != c ? C.default.getMember(m.guild_id, c) : null);

  function _(e) {
    if (null == S) return null;
    (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("721429").then(n.bind(n, "721429"));
      return t => (0, s.jsx)(e, {
        ...t,
        user: S,
        guildId: m.guild_id,
        channel: m
      })
    })
  }
  let M = null !== (a = null !== (t = null == T ? void 0 : T.nick) && void 0 !== t ? t : E.default.getName(S)) && void 0 !== a ? a : "???",
    I = null == T ? void 0 : T.colorString;
  return null == S ? (0, s.jsx)("span", {
    className: l(A.threadCreatorName, A.unknownCreatorName),
    children: M
  }) : (0, s.jsx)(d.AnalyticsLocationProvider, {
    value: g,
    children: (0, s.jsx)(r.Popout, {
      preload: () => (0, f.default)(S.id, S.getAvatarURL(m.guild_id, 80), {
        guildId: m.guild_id,
        channelId: m.id
      }),
      renderPopout: e => (0, s.jsx)(h.default, {
        userId: S.id,
        guildId: m.guild_id,
        channelId: m.id,
        roleId: null == T ? void 0 : T.colorRoleId,
        ...e
      }),
      position: "right",
      children: e => (0, s.jsx)(r.Clickable, {
        ...e,
        tag: "span",
        className: A.threadCreatorName,
        onContextMenu: _,
        children: (0, s.jsx)(r.NameWithRole, {
          name: M,
          color: null != I ? I : void 0
        })
      })
    })
  })
}

function M(e) {
  let {
    channel: t
  } = e, {
    threadMetadata: n
  } = t;
  return null == n ? (0, s.jsx)("div", {
    style: {
      marginTop: -8
    }
  }) : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: (0, s.jsx)("div", {
        className: A.subtitle,
        children: T.default.Messages.THREAD_STARTED_BY.format({
          usernameHook: (e, n) => (0, s.jsx)(_, {
            userId: t.ownerId,
            channel: t
          }, n)
        })
      })
    }), t.type === S.ChannelTypes.PRIVATE_THREAD ? (0, s.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: T.default.Messages.EMPTY_MESSAGE_PRIVATE_THREAD_INSTRUCTIONS
    }) : null]
  })
}

function I(e) {
  var t;
  let {
    channel: n
  } = e, a = null !== (t = (0, c.default)(n)) && void 0 !== t ? t : m.default;
  return (0, s.jsxs)(g.default, {
    channelId: n.id,
    children: [(0, s.jsx)("div", {
      className: A.iconWrapper,
      children: (0, s.jsx)(a, {
        className: A.icon
      })
    }), (0, s.jsx)(g.EmptyMessageHeader, {
      children: n.name
    }), (0, s.jsx)(M, {
      channel: n
    })]
  })
}