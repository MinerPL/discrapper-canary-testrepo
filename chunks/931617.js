"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var a = l("735250");
l("470079");
var n = l("866442"),
  u = l("442837"),
  d = l("481060"),
  s = l("607070"),
  r = l("605436"),
  i = l("910693"),
  o = l("434404"),
  f = l("271383"),
  c = l("430824"),
  m = l("496675"),
  M = l("823379"),
  E = l("981631"),
  S = l("689938"),
  _ = l("139877");

function g(e, t) {
  var l, u;
  return (0, a.jsxs)("div", {
    className: _.roleRow,
    children: ["dot" === t ? (0, a.jsx)(d.RoleDot, {
      className: _.roleDot,
      color: null !== (l = e.colorString) && void 0 !== l ? l : (0, n.int2hex)(E.DEFAULT_ROLE_COLOR),
      background: !1,
      tooltip: !1
    }) : (0, a.jsx)(d.RoleCircle, {
      className: _.roleDot,
      color: null !== (u = e.colorString) && void 0 !== u ? u : (0, n.int2hex)(E.DEFAULT_ROLE_COLOR)
    }), (0, a.jsx)("div", {
      children: e.name
    })]
  })
}

function I(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    _ = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)),
    I = (0, u.useStateFromStores)([c.default], () => c.default.getRoles(t)),
    C = (0, u.useStateFromStores)([s.default], () => s.default.roleStyle),
    R = (0, i.useTrackModerationAction)(t, {
      location: n,
      targetUserId: e
    }),
    {
      userRoles: N,
      isGuildMember: A,
      canManageRoles: T
    } = (0, u.useStateFromStoresObject)([f.default, m.default], () => {
      let l = f.default.getMember(t, e);
      return {
        userRoles: null != l ? l.roles : [],
        isGuildMember: null != l,
        canManageRoles: null != _ && m.default.can(E.Permissions.MANAGE_ROLES, _)
      }
    }, [e, t, _]);
  if (__OVERLAY__ || null == N || null == _ || !A) return null;
  let v = m.default.getHighestRole(_),
    h = Object.values(I).filter(e => !(0, r.isEveryoneRoleId)(_.id, e.id)),
    O = T ? h.map(l => {
      let n = l.managed || !m.default.isRoleHigher(_, v, l),
        u = -1 !== N.indexOf(l.id);
      return n && !u ? null : (0, a.jsx)(d.MenuCheckboxItem, {
        id: l.id,
        label: () => g(l, C),
        disabled: n,
        action: () => {
          var a;
          return a = l, void(N.includes(a.id) ? (o.default.updateMemberRoles(t, e, N.filter(e => e !== a.id), [], [a.id]), R(i.ModerationActionType.REMOVE_ROLE)) : (o.default.updateMemberRoles(t, e, N.concat([a.id]), [a.id], []), R(i.ModerationActionType.ADD_ROLE)))
        },
        checked: u
      }, l.id)
    }) : h.filter(e => -1 !== N.indexOf(e.id)).map(e => (0, r.isEveryoneRoleId)(_.id, e.id) ? null : (0, a.jsx)(d.MenuItem, {
      id: e.id,
      label: () => g(e, C)
    }, e.id));
  return 0 === O.filter(M.isNotNullish).length ? null : l ? O : (0, a.jsx)(d.MenuItem, {
    id: "roles",
    label: S.default.Messages.ROLES_LIST.format({
      numRoles: O.length
    }),
    children: O
  })
}