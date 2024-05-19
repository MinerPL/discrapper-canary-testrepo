"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("153832"),
  n = s("924826"),
  r = s("442837"),
  o = s("749210"),
  u = s("434404"),
  d = s("271383"),
  c = s("430824"),
  f = s("496675"),
  S = s("700785"),
  m = s("785717"),
  E = s("256226"),
  I = s("314172"),
  v = s("192591"),
  _ = s("981631"),
  T = s("689938"),
  g = s("323353");

function A(e) {
  let {
    user: t,
    currentUser: s,
    guild: o,
    guildMember: u,
    userRoles: d,
    highestRole: f,
    canManageRoles: m,
    onAddRole: v,
    onRemoveRole: A
  } = e, x = (0, r.useStateFromStores)([c.default], () => c.default.getRoles(o.id)), U = a.useMemo(() => Object.values(x).filter(e => d.includes(e.id)).sort((e, t) => {
    var s, l;
    let a = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      i = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [x, d]), N = m && null != u, p = a.useMemo(() => "roles-".concat((0, i.v4)()), []), C = (0, n.default)({
    id: p,
    isEnabled: !0,
    scrollToStart: _.NOOP_PROMISE,
    scrollToEnd: _.NOOP_PROMISE,
    wrap: !0
  }), h = U.length, R = 0 === h ? T.default.Messages.ROLE_LIST_EMPTY : T.default.Messages.ROLES_LIST.format({
    numRoles: h
  }), P = U.map(e => {
    var a;
    return (0, l.jsx)(E.default, {
      role: e,
      guildId: o.id,
      disableBorderColor: !0,
      onRemove: () => A(e),
      canRemove: m ? S.isRoleHigher(o, s.id, f, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === s.id
    }, e.id)
  });
  return (0, l.jsx)(n.ListNavigatorProvider, {
    navigator: C,
    children: (0, l.jsx)(n.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...s
        } = e;
        return (0, l.jsxs)("div", {
          className: g.root,
          "aria-label": R,
          ref: t,
          ...s,
          children: [P, N && (0, l.jsx)(I.default, {
            guild: o,
            guildMember: u,
            highestRole: f,
            onAddRole: v,
            compact: U.length > 0
          })]
        })
      }
    })
  })
}

function x(e) {
  let {
    user: t,
    currentUser: s,
    guild: i
  } = e, {
    trackUserProfileAction: n
  } = (0, m.useUserProfileAnalyticsContext)(), c = (0, r.useStateFromStores)([d.default], () => d.default.getMember(i.id, t.id)), E = null == c ? void 0 : c.roles, I = null == E || 0 === E.length, g = S.getHighestRole(i, s.id), [x] = (0, r.useStateFromStoresArray)([f.default], () => [f.default.can(_.Permissions.MANAGE_ROLES, i), null != i ? f.default.getGuildVersion(i.id) : null]), U = a.useCallback(e => {
    var s, l;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (l = null == E ? void 0 : E.filter(t => t !== e.id)) && void 0 !== l ? l : [];
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? o.default.unassignGuildRoleConnection(i.id, e.id) : u.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [E, i.id, t.id, n]), N = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let s = null != E ? E : []; - 1 === s.indexOf(e) && (s = s.concat([e])), u.default.updateMemberRoles(i.id, t.id, s, [e], [])
  }, [E, i.id, t.id, n]);
  return I && !x ? null : (0, l.jsx)(v.default, {
    title: T.default.Messages.ROLES,
    children: (0, l.jsx)(A, {
      user: t,
      currentUser: s,
      guild: i,
      guildMember: c,
      userRoles: null != E ? E : [],
      highestRole: g,
      canManageRoles: x,
      onAddRole: N,
      onRemoveRole: U
    })
  })
}