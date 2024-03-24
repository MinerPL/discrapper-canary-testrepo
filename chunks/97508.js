"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
});
var n = l("37983");
l("884691");
var u = l("509043"),
  i = l("446674"),
  o = l("77078"),
  r = l("206230"),
  a = l("454273"),
  d = l("130037"),
  s = l("592407"),
  c = l("26989"),
  f = l("305961"),
  M = l("957255"),
  O = l("449008"),
  h = l("49111"),
  E = l("782340"),
  R = l("235324");

function p(e, t) {
  var l, i;
  return (0, n.jsxs)("div", {
    className: R.roleRow,
    children: ["dot" === t ? (0, n.jsx)(o.RoleDot, {
      className: R.roleDot,
      color: null !== (l = e.colorString) && void 0 !== l ? l : (0, u.int2hex)(h.DEFAULT_ROLE_COLOR),
      background: !1,
      tooltip: !1
    }) : (0, n.jsx)(o.RoleCircle, {
      className: R.roleDot,
      color: null !== (i = e.colorString) && void 0 !== i ? i : (0, u.int2hex)(h.DEFAULT_ROLE_COLOR)
    }), (0, n.jsx)("div", {
      children: e.name
    })]
  })
}

function x(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    R = (0, i.useStateFromStores)([f.default], () => f.default.getGuild(t)),
    x = (0, i.useStateFromStores)([f.default], () => f.default.getRoles(t)),
    _ = (0, i.useStateFromStores)([r.default], () => r.default.roleStyle),
    m = (0, d.useTrackModerationAction)(t, {
      location: u,
      targetUserId: e
    }),
    {
      userRoles: v,
      isGuildMember: g,
      canManageRoles: S
    } = (0, i.useStateFromStoresObject)([c.default, M.default], () => {
      let l = c.default.getMember(t, e);
      return {
        userRoles: null != l ? l.roles : [],
        isGuildMember: null != l,
        canManageRoles: null != R && M.default.can(h.Permissions.MANAGE_ROLES, R)
      }
    }, [e, t, R]);
  if (__OVERLAY__ || null == v || null == R || !g) return null;
  let b = M.default.getHighestRole(R),
    j = Object.values(x).filter(e => !(0, a.isEveryoneRoleId)(R.id, e.id)),
    L = S ? j.map(l => {
      let u = l.managed || !M.default.isRoleHigher(R, b, l),
        i = -1 !== v.indexOf(l.id);
      return u && !i ? null : (0, n.jsx)(o.MenuCheckboxItem, {
        id: l.id,
        label: () => p(l, _),
        disabled: u,
        action: () => {
          var n;
          return n = l, void(v.includes(n.id) ? (s.default.updateMemberRoles(t, e, v.filter(e => e !== n.id), [], [n.id]), m(d.ModerationActionType.REMOVE_ROLE)) : (s.default.updateMemberRoles(t, e, v.concat([n.id]), [n.id], []), m(d.ModerationActionType.ADD_ROLE)))
        },
        checked: i
      }, l.id)
    }) : j.filter(e => -1 !== v.indexOf(e.id)).map(e => (0, a.isEveryoneRoleId)(R.id, e.id) ? null : (0, n.jsx)(o.MenuItem, {
      id: e.id,
      label: () => p(e, _)
    }, e.id));
  return 0 === L.filter(O.isNotNullish).length ? null : l ? L : (0, n.jsx)(o.MenuItem, {
    id: "roles",
    label: E.default.Messages.ROLES_LIST.format({
      numRoles: L.length
    }),
    children: L
  })
}