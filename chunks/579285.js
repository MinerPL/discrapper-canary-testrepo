"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120"), n("653041");
var i = n("735250"),
  r = n("470079"),
  a = n("512722"),
  s = n.n(a),
  o = n("153832"),
  l = n("924826"),
  u = n("442837"),
  d = n("481060"),
  _ = n("749210"),
  c = n("112724"),
  E = n("434404"),
  I = n("271383"),
  T = n("430824"),
  f = n("496675"),
  S = n("700785"),
  h = n("785717"),
  A = n("256226"),
  m = n("314172"),
  N = n("981631"),
  p = n("689938"),
  O = n("384878");
let C = (0, c.default)(function(e) {
  let {
    user: t,
    currentUser: n,
    guild: a,
    guildMember: _,
    userRoles: c,
    highestRole: E,
    canManageRoles: I,
    width: f,
    onAddRole: h,
    onRemoveRole: C,
    onOpenProfile: R
  } = e;
  s()(null != f, "Unexpected null width");
  let g = r.useRef({}),
    L = (e, t) => {
      null != t ? g.current[e] = t : delete g.current[e]
    },
    v = (0, u.useStateFromStores)([T.default], () => T.default.getRoles(a.id)),
    D = r.useMemo(() => Object.values(v).filter(e => c.includes(e.id)).sort((e, t) => {
      var n, i;
      let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
        a = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
      return r && !a ? 1 : !r && a ? -1 : 0
    }), [v, c]),
    [M, y] = r.useState(D),
    [P, U] = r.useState(f),
    b = M.length < D.length,
    G = I && null != _,
    w = r.useRef(null),
    k = r.useRef(null);
  r.useLayoutEffect(() => {
    var e, t, n, i, r, a;
    let s = null !== (r = null === (t = w.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.width) && void 0 !== r ? r : 0,
      o = null !== (a = null === (i = k.current) || void 0 === i ? void 0 : null === (n = i.getBoundingClientRect()) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : 0,
      l = f - (s > 0 ? s + 4 : 0) - (o > 0 ? o + 4 : 0),
      u = [];
    for (let e = 0; e < 2; e++) {
      let t = 1 === e,
        n = 0;
      for (let e = u.length; e < D.length; e++) {
        let i = D[e],
          r = g.current[i.id];
        if (null != r) {
          if (n > 0 && !t && n + r.offsetWidth > f || n > 0 && t && n + r.offsetWidth > l) break;
          n += r.offsetWidth + 4, u.push(i)
        }
      }
    }
    U(l), y(e => e.length !== u.length ? u : e)
  }, [f, D, M]);
  let B = r.useMemo(() => "roles-".concat((0, o.v4)()), []),
    V = (0, l.default)({
      id: B,
      isEnabled: !0,
      scrollToStart: N.NOOP_PROMISE,
      scrollToEnd: N.NOOP_PROMISE,
      wrap: !0
    }),
    x = D.length,
    F = 0 === x ? p.default.Messages.ROLE_LIST_EMPTY : p.default.Messages.ROLES_LIST.format({
      numRoles: x
    }),
    H = M.map((e, r) => {
      var s;
      return (0, i.jsx)(A.default, {
        role: e,
        guildId: a.id,
        style: {
          maxWidth: r === M.length - 1 ? P : f
        },
        disableBorderColor: !0,
        ref: t => L(e.id, t),
        onRemove: () => C(e),
        canRemove: I ? S.isRoleHigher(a, n.id, E, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && t.id === n.id
      }, e.id)
    });
  return (0, i.jsx)(l.ListNavigatorProvider, {
    navigator: V,
    children: (0, i.jsx)(l.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...n
        } = e;
        return (0, i.jsxs)("div", {
          className: O.root,
          "aria-label": F,
          ref: t,
          ...n,
          children: [H, b && (0, i.jsx)(d.Clickable, {
            innerRef: w,
            onClick: R,
            className: O.showMoreButton,
            children: (0, i.jsx)(d.Text, {
              variant: "text-xs/medium",
              children: "+".concat(D.length - M.length)
            })
          }), G && (0, i.jsx)(m.default, {
            buttonRef: k,
            guild: a,
            guildMember: _,
            highestRole: E,
            onAddRole: h,
            compact: D.length > 0
          })]
        })
      }
    })
  })
});

function R(e) {
  let {
    user: t,
    currentUser: n,
    guild: a,
    onOpenProfile: s
  } = e, {
    trackUserProfileAction: o
  } = (0, h.useUserProfileAnalyticsContext)(), l = (0, u.useStateFromStores)([I.default], () => I.default.getMember(a.id, t.id)), d = null == l ? void 0 : l.roles, c = null == d || 0 === d.length, T = S.getHighestRole(a, n.id), [A] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.can(N.Permissions.MANAGE_ROLES, a), null != a ? f.default.getGuildVersion(a.id) : null]), m = r.useCallback(e => {
    var n, i;
    o({
      action: "REMOVE_ROLE"
    });
    let r = null !== (i = null == d ? void 0 : d.filter(t => t !== e.id)) && void 0 !== i ? i : [];
    (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? _.default.unassignGuildRoleConnection(a.id, e.id) : E.default.updateMemberRoles(a.id, t.id, r, [], [e.id])
  }, [d, a.id, t.id, o]), p = r.useCallback(e => {
    o({
      action: "ADD_ROLE"
    });
    let n = null != d ? d : []; - 1 === n.indexOf(e) && (n = n.concat([e])), E.default.updateMemberRoles(a.id, t.id, n, [e], [])
  }, [d, a.id, t.id, o]);
  return c && !A ? null : (0, i.jsx)("div", {
    children: (0, i.jsx)(C, {
      user: t,
      currentUser: n,
      guild: a,
      guildMember: l,
      userRoles: null != d ? d : [],
      highestRole: T,
      canManageRoles: A,
      onAddRole: p,
      onRemoveRole: m,
      onOpenProfile: s
    })
  })
}