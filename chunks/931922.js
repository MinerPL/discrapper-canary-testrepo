"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("316693"),
  d = n("509043"),
  c = n("446674"),
  f = n("77078"),
  h = n("18054"),
  C = n("798609"),
  p = n("679653"),
  m = n("454273"),
  E = n("462430"),
  g = n("592407"),
  S = n("367376"),
  T = n("305961"),
  A = n("957255"),
  _ = n("697218"),
  M = n("987772"),
  I = n("155207"),
  N = n("917686"),
  v = n("317134"),
  x = n("991170"),
  L = n("158998"),
  y = n("938244"),
  R = n("172554"),
  O = n("730859"),
  D = n("49111"),
  P = n("782340"),
  b = n("948746");

function j(e) {
  let {
    channel: t
  } = e, [n, l] = a.useState(!1), r = (0, p.default)(t, !0), j = t.guild_id, k = (0, c.useStateFromStores)([T.default], () => null != j ? T.default.getRoles(j) : void 0), F = (0, c.useStateFromStores)([_.default, T.default], () => {
    var e;
    return _.default.getUser(null === (e = T.default.getGuild(j)) || void 0 === e ? void 0 : e.ownerId)
  }), H = a.useMemo(() => null != j ? o(k).sortBy(e => -e.position).filter(e => !(0, m.isEveryoneRoleId)(j, e.id)).value() : [], [j, k]), U = a.useMemo(() => o(H).filter(e => {
    if (null == j) return !1;
    let n = x.computePermissionsForRoles({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return u.has(n, D.Permissions.ADMINISTRATOR) || u.has(n, D.Permissions.VIEW_CHANNEL)
  }).value(), [t, j, H]), G = (0, c.useStateFromStoresArray)([_.default], () => {
    let e = {};
    for (let n of (null != F && (e[F.id] = F), Object.values(t.permissionOverwrites))) {
      if (n.type !== C.PermissionOverwriteType.MEMBER || null != e[n.id]) continue;
      let t = _.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return o(e).filter(e => {
      var n;
      let s = x.can({
          permission: D.Permissions.ADMINISTRATOR,
          user: e,
          context: t
        }),
        a = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : x.NONE,
        l = u.has(a.allow, D.Permissions.VIEW_CHANNEL);
      return s || l
    }).value()
  }, [t, F]), B = A.default.can(D.Permissions.MANAGE_CHANNELS, t) || A.default.can(D.Permissions.MANAGE_ROLES, t);

  function V() {
    h.default.open(t.id)
  }
  let w = a.useCallback(() => l(!1), []);
  return (0, s.jsxs)(R.default, {
    channelId: t.id,
    children: [(0, s.jsx)(R.EmptyMessageIcon, {
      locked: !0,
      channelType: t.type
    }), (0, s.jsx)(R.EmptyMessageHeader, {
      children: P.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: r
      })
    }), (0, s.jsx)(R.EmptyMessageBody, {
      children: P.default.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format({
        channelName: r,
        topicHook: () => S.default.parseTopic(t.topic, !0, {
          channelId: t.id
        })
      })
    }), B ? (0, s.jsxs)("div", {
      className: b.channelSettingButtons,
      children: [(0, s.jsx)(y.default, {
        label: P.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
        onClick: () => l(!0),
        icon: (0, s.jsx)(I.default, {
          width: 16,
          height: 16
        })
      }), (0, s.jsx)(y.default, {
        label: P.default.Messages.EDIT_CHANNEL,
        onClick: V,
        icon: (0, s.jsx)(M.default, {
          width: 16,
          height: 16
        })
      })]
    }) : null, (0, s.jsxs)("div", {
      className: b.members,
      children: [function() {
        if (1 !== G.length || U.length > 0) return (0, s.jsx)(O.default, {
          guildId: t.guild_id,
          className: b.avatars,
          maxUsers: 5,
          users: G
        });
        let e = G[0],
          n = L.default.getName(e);
        return (0, s.jsxs)("div", {
          className: b.avatars,
          children: [(0, s.jsx)(f.Avatar, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: f.AvatarSizes.SIZE_24
          }), (0, s.jsx)(f.Text, {
            tag: "span",
            className: b.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, s.jsx)(f.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: P.default.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE
          })]
        })
      }(), U.map((e, n) => {
        var a, l;
        let r = null !== (l = e.colorString) && void 0 !== l ? l : (0, d.int2hex)(D.DEFAULT_ROLE_COLOR),
          o = (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) !== void 0;
        return B ? (0, s.jsx)(N.default, {
          className: i(b.role, {
            [b.last]: n === U.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          disabled: !B,
          verified: o,
          onClick: () => {
            g.default.open(t.guild_id, D.GuildSettingsSections.MEMBERS), g.default.selectRole(e.id)
          }
        }, e.id) : (0, s.jsx)(v.default, {
          className: i(b.role, {
            [b.last]: n === U.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          verified: o
        }, e.id)
      })]
    }), n ? (0, s.jsx)(f.Modal, {
      renderModal: e => (0, s.jsx)(E.default, {
        ...e,
        onClose: () => (w(), e.onClose()),
        channelId: t.id
      }),
      onCloseRequest: () => l(!1)
    }) : null]
  })
}