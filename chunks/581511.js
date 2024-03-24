"use strict";
l.r(t), l.d(t, {
  default: function() {
    return L
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("627445"),
  o = l.n(r),
  d = l("509043"),
  u = l("446674"),
  c = l("77078"),
  f = l("272030"),
  m = l("524768"),
  I = l("389153"),
  T = l("419830"),
  N = l("405645"),
  E = l("42203"),
  h = l("26989"),
  g = l("305961"),
  p = l("102985"),
  S = l("697218"),
  O = l("593195"),
  _ = l("45029"),
  A = l("682344"),
  C = l("483093"),
  x = l("158998"),
  R = l("49111"),
  M = l("782340"),
  v = l("164886");

function L(e) {
  let {
    guild: t,
    id: s,
    type: i,
    isLocked: r,
    lockTooltipText: d
  } = e, u = !r || null != d;
  o(u, "No lockTooltipText provided while isLocked=true");
  let c = a.useCallback(e => {
    (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.el("443070").then(l.bind(l, "443070"));
      return t => (0, n.jsx)(e, {
        ...t,
        id: s,
        label: M.default.Messages.COPY_ID_COMMAND
      })
    })
  }, [s]);
  switch (i) {
    case m.ApplicationCommandPermissionType.CHANNEL:
      return (0, n.jsx)(j, {
        guild: t,
        id: s,
        isLocked: r,
        lockTooltipText: d,
        openEntryContextMenu: c
      });
    case m.ApplicationCommandPermissionType.ROLE:
      return (0, n.jsx)(b, {
        guild: t,
        id: s,
        isLocked: r,
        lockTooltipText: d,
        openEntryContextMenu: c
      });
    case m.ApplicationCommandPermissionType.USER:
      return (0, n.jsx)(P, {
        guild: t,
        id: s,
        isLocked: r,
        lockTooltipText: d,
        openEntryContextMenu: c
      })
  }
}

function j(e) {
  let {
    guild: t,
    id: l,
    isLocked: s,
    lockTooltipText: r,
    openEntryContextMenu: o
  } = e, d = (0, I.allChannelsSentinel)(t.id), {
    icon: f,
    name: m,
    categoryName: N
  } = (0, u.useStateFromStoresObject)([E.default], () => {
    if (d === l) return {
      name: M.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
      icon: O.default
    };
    let e = E.default.getChannel(l),
      n = (null == e ? void 0 : e.parent_id) != null ? E.default.getChannel(e.parent_id) : null,
      a = null != e ? (0, T.getChannelIconComponent)(e, t) : null;
    return {
      icon: a,
      name: null == e ? void 0 : e.name,
      categoryName: null == n ? void 0 : n.name
    }
  }, [d, t, l]), h = a.useCallback(e => {
    l !== d && o(e)
  }, [d, l, o]);
  return null == f || null == m ? null : (0, n.jsxs)("div", {
    onContextMenu: h,
    className: v.identifier,
    children: [(0, n.jsx)(f, {
      width: 20,
      height: 20,
      className: i(v.channelIcon, v.image)
    }), (0, n.jsx)(c.Text, {
      className: v.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: m
    }), null != N ? (0, n.jsxs)(c.Text, {
      className: v.tag,
      variant: "text-sm/normal",
      children: ["(", N, ")"]
    }) : null, s ? (0, n.jsx)(D, {
      tooltipText: r
    }) : null]
  })
}

function b(e) {
  var t;
  let {
    guild: s,
    id: r,
    isLocked: o,
    lockTooltipText: m
  } = e, I = (0, u.useStateFromStores)([g.default], () => g.default.getRole(s.id, r)), T = (0, N.useRoleIcon)({
    guildId: s.id,
    roleId: r,
    size: 24
  }), E = a.useCallback(e => {
    null != s && null != I && (0, f.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.el("178521").then(l.bind(l, "178521"));
      return t => (0, n.jsx)(e, {
        ...t,
        guild: s,
        role: I
      })
    })
  }, [s, I]);
  return (null == I ? void 0 : I.name) == null ? null : (0, n.jsxs)("div", {
    onContextMenu: E,
    className: v.identifier,
    children: [null != T ? (0, n.jsx)(C.default, {
      className: i(v.icon, v.image),
      ...T
    }) : (0, n.jsx)(A.default, {
      className: i(v.shield, v.image),
      color: null !== (t = I.colorString) && void 0 !== t ? t : (0, d.int2hex)(R.DEFAULT_ROLE_COLOR)
    }), (0, n.jsx)(c.Text, {
      className: v.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: I.name
    }), o ? (0, n.jsx)(D, {
      tooltipText: m
    }) : null]
  })
}

function P(e) {
  let {
    guild: t,
    id: l,
    isLocked: a,
    lockTooltipText: s,
    openEntryContextMenu: i
  } = e, r = (0, u.useStateFromStores)([S.default], () => S.default.getUser(l)), o = (0, u.useStateFromStores)([h.default], () => {
    var e;
    return null === (e = h.default.getMember(t.id, l)) || void 0 === e ? void 0 : e.nick
  }, [t.id, l]), d = (0, u.useStateFromStores)([p.default], () => p.default.hidePersonalInformation);
  return null == r ? null : (0, n.jsxs)("div", {
    onContextMenu: i,
    className: v.identifier,
    children: [(0, n.jsx)(c.Avatar, {
      className: v.image,
      src: r.getAvatarURL(t.id, 24),
      "aria-label": r.username,
      size: c.AvatarSizes.SIZE_24
    }), (0, n.jsx)(c.Text, {
      className: v.roleName,
      color: "header-primary",
      variant: "text-md/normal",
      children: null != o ? o : r.username
    }), d ? null : (0, n.jsx)(c.Text, {
      className: v.tag,
      variant: "text-sm/normal",
      children: x.default.getUserTag(r)
    }), a ? (0, n.jsx)(D, {
      tooltipText: s
    }) : null]
  })
}

function D(e) {
  let {
    tooltipText: t
  } = e;
  return (0, n.jsx)(c.Tooltip, {
    text: t,
    children: e => (0, n.jsx)("div", {
      className: v.lockIcon,
      ...e,
      children: (0, n.jsx)(_.default, {
        width: 16,
        height: 16
      })
    })
  })
}