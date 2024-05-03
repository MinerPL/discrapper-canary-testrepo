"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("239091"),
  u = n("100527"),
  d = n("906732"),
  c = n("995123"),
  f = n("484459"),
  h = n("103575"),
  m = n("271383"),
  p = n("594174"),
  E = n("934458"),
  C = n("51144"),
  g = n("967128"),
  S = n("981631"),
  _ = n("689938"),
  T = n("232024");

function I(e) {
  var t, l;
  let {
    userId: c,
    channel: E
  } = e, {
    analyticsLocations: g
  } = (0, d.default)(u.default.USERNAME), S = (0, i.useStateFromStores)([p.default], () => p.default.getUser(c)), _ = (0, i.useStateFromStores)([m.default], () => null != c ? m.default.getMember(E.guild_id, c) : null);

  function I(e) {
    if (null == S) return null;
    (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("70675")]).then(n.bind(n, "654663"));
      return t => (0, a.jsx)(e, {
        ...t,
        user: S,
        guildId: E.guild_id,
        channel: E
      })
    })
  }
  let A = null !== (l = null !== (t = null == _ ? void 0 : _.nick) && void 0 !== t ? t : C.default.getName(S)) && void 0 !== l ? l : "???",
    N = null == _ ? void 0 : _.colorString;
  return null == S ? (0, a.jsx)("span", {
    className: s()(T.threadCreatorName, T.unknownCreatorName),
    children: A
  }) : (0, a.jsx)(d.AnalyticsLocationProvider, {
    value: g,
    children: (0, a.jsx)(r.Popout, {
      preload: () => (0, f.maybeFetchUserProfileForPopout)(S, {
        guildId: E.guild_id,
        channelId: E.id
      }),
      renderPopout: e => (0, a.jsx)(h.default, {
        location: "ThreadEmptyMessage",
        userId: S.id,
        guildId: E.guild_id,
        channelId: E.id,
        roleId: null == _ ? void 0 : _.colorRoleId,
        ...e
      }),
      position: "right",
      children: e => (0, a.jsx)(r.Clickable, {
        ...e,
        tag: "span",
        className: T.threadCreatorName,
        onContextMenu: I,
        children: (0, a.jsx)(r.NameWithRole, {
          name: A,
          color: null != N ? N : void 0
        })
      })
    })
  })
}

function A(e) {
  let {
    channel: t
  } = e, {
    threadMetadata: n
  } = t;
  return null == n ? (0, a.jsx)("div", {
    style: {
      marginTop: -8
    }
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: (0, a.jsx)("div", {
        className: T.subtitle,
        children: _.default.Messages.THREAD_STARTED_BY.format({
          usernameHook: (e, n) => (0, a.jsx)(I, {
            userId: t.ownerId,
            channel: t
          }, n)
        })
      })
    }), t.type === S.ChannelTypes.PRIVATE_THREAD ? (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: _.default.Messages.EMPTY_MESSAGE_PRIVATE_THREAD_INSTRUCTIONS
    }) : null]
  })
}

function N(e) {
  var t;
  let {
    channel: n
  } = e, l = null !== (t = (0, c.default)(n)) && void 0 !== t ? t : E.default;
  return (0, a.jsxs)(g.default, {
    channelId: n.id,
    children: [(0, a.jsx)("div", {
      className: T.iconWrapper,
      children: (0, a.jsx)(l, {
        className: T.icon
      })
    }), (0, a.jsx)(g.EmptyMessageHeader, {
      children: n.name
    }), (0, a.jsx)(A, {
      channel: n
    })]
  })
}