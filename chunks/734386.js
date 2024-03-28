"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("149765"),
  d = n("866442"),
  c = n("442837"),
  f = n("481060"),
  h = n("787014"),
  m = n("911969"),
  p = n("933557"),
  E = n("605436"),
  C = n("185413"),
  g = n("434404"),
  S = n("454585"),
  _ = n("430824"),
  T = n("496675"),
  I = n("594174"),
  A = n("185403"),
  v = n("158010"),
  N = n("183156"),
  x = n("52736"),
  M = n("700785"),
  R = n("51144"),
  L = n("396769"),
  y = n("967128"),
  O = n("318374"),
  j = n("981631"),
  P = n("689938"),
  D = n("996650");

function b(e) {
  let {
    channel: t
  } = e, [n, s] = l.useState(!1), r = (0, p.default)(t, !0), b = t.guild_id, U = (0, c.useStateFromStores)([_.default], () => null != b ? _.default.getRoles(b) : void 0), F = (0, c.useStateFromStores)([I.default, _.default], () => {
    var e;
    return I.default.getUser(null === (e = _.default.getGuild(b)) || void 0 === e ? void 0 : e.ownerId)
  }), w = l.useMemo(() => null != b ? o()(U).sortBy(e => -e.position).filter(e => !(0, E.isEveryoneRoleId)(b, e.id)).value() : [], [b, U]), k = l.useMemo(() => o()(w).filter(e => {
    if (null == b) return !1;
    let n = M.computePermissionsForRoles({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return u.has(n, j.Permissions.ADMINISTRATOR) || u.has(n, j.Permissions.VIEW_CHANNEL)
  }).value(), [t, b, w]), H = (0, c.useStateFromStoresArray)([I.default], () => {
    let e = {};
    for (let n of (null != F && (e[F.id] = F), Object.values(t.permissionOverwrites))) {
      if (n.type !== m.PermissionOverwriteType.MEMBER || null != e[n.id]) continue;
      let t = I.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return o()(e).filter(e => {
      var n;
      let a = M.can({
          permission: j.Permissions.ADMINISTRATOR,
          user: e,
          context: t
        }),
        l = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : M.NONE,
        s = u.has(l.allow, j.Permissions.VIEW_CHANNEL);
      return a || s
    }).value()
  }, [t, F]), B = T.default.can(j.Permissions.MANAGE_CHANNELS, t) || T.default.can(j.Permissions.MANAGE_ROLES, t);

  function G() {
    h.default.open(t.id)
  }
  let V = l.useCallback(() => s(!1), []);
  return (0, a.jsxs)(y.default, {
    channelId: t.id,
    children: [(0, a.jsx)(y.EmptyMessageIcon, {
      locked: !0,
      channelType: t.type
    }), (0, a.jsx)(y.EmptyMessageHeader, {
      children: P.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: r
      })
    }), (0, a.jsx)(y.EmptyMessageBody, {
      children: P.default.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format({
        channelName: r,
        topicHook: () => S.default.parseTopic(t.topic, !0, {
          channelId: t.id
        })
      })
    }), B ? (0, a.jsxs)("div", {
      className: D.channelSettingButtons,
      children: [(0, a.jsx)(L.default, {
        label: P.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
        onClick: () => s(!0),
        icon: (0, a.jsx)(v.default, {
          width: 16,
          height: 16
        })
      }), (0, a.jsx)(L.default, {
        label: P.default.Messages.EDIT_CHANNEL,
        onClick: G,
        icon: (0, a.jsx)(A.default, {
          width: 16,
          height: 16
        })
      })]
    }) : null, (0, a.jsxs)("div", {
      className: D.members,
      children: [function() {
        if (1 !== H.length || k.length > 0) return (0, a.jsx)(O.default, {
          guildId: t.guild_id,
          className: D.avatars,
          maxUsers: 5,
          users: H
        });
        let e = H[0],
          n = R.default.getName(e);
        return (0, a.jsxs)("div", {
          className: D.avatars,
          children: [(0, a.jsx)(f.Avatar, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: f.AvatarSizes.SIZE_24
          }), (0, a.jsx)(f.Text, {
            tag: "span",
            className: D.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, a.jsx)(f.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: P.default.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE
          })]
        })
      }(), k.map((e, n) => {
        var l, s;
        let r = null !== (s = e.colorString) && void 0 !== s ? s : (0, d.int2hex)(j.DEFAULT_ROLE_COLOR),
          o = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== void 0;
        return B ? (0, a.jsx)(N.default, {
          className: i()(D.role, {
            [D.last]: n === k.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          disabled: !B,
          verified: o,
          onClick: () => {
            g.default.open(t.guild_id, j.GuildSettingsSections.MEMBERS), g.default.selectRole(e.id)
          }
        }, e.id) : (0, a.jsx)(x.default, {
          className: i()(D.role, {
            [D.last]: n === k.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          verified: o
        }, e.id)
      })]
    }), n ? (0, a.jsx)(f.Modal, {
      renderModal: e => (0, a.jsx)(C.default, {
        ...e,
        onClose: () => (V(), e.onClose()),
        channelId: t.id
      }),
      onCloseRequest: () => s(!1)
    }) : null]
  })
}