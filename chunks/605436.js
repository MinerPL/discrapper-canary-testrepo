"use strict";
n.d(t, {
  $7: function() {
    return Y
  },
  $e: function() {
    return x
  },
  GJ: function() {
    return f
  },
  Gy: function() {
    return C
  },
  RD: function() {
    return H
  },
  RZ: function() {
    return D
  },
  Tj: function() {
    return j
  },
  W: function() {
    return A
  },
  Wx: function() {
    return L
  },
  X0: function() {
    return N
  },
  Yh: function() {
    return V
  },
  Yk: function() {
    return Z
  },
  _A: function() {
    return B
  },
  aq: function() {
    return m
  },
  cR: function() {
    return G
  },
  iI: function() {
    return b
  },
  ik: function() {
    return g
  },
  kA: function() {
    return v
  },
  nT: function() {
    return F
  },
  pM: function() {
    return R
  },
  yv: function() {
    return k
  },
  zB: function() {
    return w
  }
}), n(653041);
var i = n(149765),
  r = n(866442),
  s = n(741361),
  o = n(911969),
  a = n(131704),
  l = n(271383),
  u = n(594174),
  _ = n(934415),
  d = n(823379),
  c = n(700785),
  E = n(709054),
  I = n(51144),
  T = n(71080),
  h = n(981631),
  S = n(689938);

function f(e) {
  return i.e$(e.permissions, h.Plq.ADMINISTRATOR)
}

function N(e) {
  var t, n;
  let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  let o = (n = e, i.e$(n.permissions, h.Plq.ADMINISTRATOR) ? T.aC.ADMINISTRATOR : T.aC.ROLE);
  return {
    rowType: o,
    colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, r.Rf)(h.p6O),
    name: e.name,
    id: e.id,
    disabled: f(e) || s,
    key: "".concat(o, ":").concat(e.id),
    tags: e.tags
  }
}

function A(e, t) {
  let n = f(e) ? 0 : 1,
    i = f(t) ? 0 : 1;
  return n !== i ? n - i : t.position - e.position
}

function m() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
  return [{
    rowType: T.aC.EMPTY_STATE,
    colorString: (0, r.Rf)(h.p6O),
    name: e,
    disabled: !0,
    id: "EMPTY_STATE"
  }]
}

function O(e, t, n, r) {
  let s = u.default.getCurrentUser();
  if (null == s) return !1;
  if (null == e) return s.id !== t;
  let o = e.permissionOverwrites[t];
  return (null == r ? void 0 : r[t]) != null && (o = r[t]), null == o || !i.e$(o.allow, n)
}

function R(e, t) {
  return E.default.castGuildIdAsEveryoneGuildRoleId(e) === t
}

function C(e, t) {
  return !R(e, t)
}

function p(e, t) {
  return !R(e.id, t.id)
}

function g(e, t, n, i) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
  return Object.values(t).filter(t => !f(t) && O(n, t.id, i) && p(e, t) && r(t.name)).sort(A).map(e => N(e))
}

function L(e, t, n, r) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
  return Object.values(t).filter(t => !f(t) && O(n, t.id, r) && p(e, t) && s(t.name)).sort(A).map(e => N(e, i.e$(e.permissions, r)))
}

function v(e, t, n, i, r) {
  var s, o, a, l, u;
  let _ = [];
  return 0 === (_ = (s = e, o = t, a = n, l = i, u = r, Object.values(o).filter(e => f(e) || !O(a, e.id, l, u) && p(s, e))).sort(A).map(e => N(e))).length ? m(S.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : _
}

function D(e, t, n, r, s) {
  var o, a, l, u, _;
  let d = [];
  return 0 === (d = (o = e, a = t, l = n, u = r, _ = s, Object.values(a).filter(e => {
    var t;
    return f(e) || !O(l, e.id, u, _) && p(o, e) || i.e$(i.$e(e.permissions, null === (t = l.permissionOverwrites[e.id]) || void 0 === t ? void 0 : t.allow), u)
  })).sort(A).map(e => N(e, i.e$(e.permissions, r)))).length ? m(S.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : d
}

function M(e, t) {
  var n;
  return null !== (n = l.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : I.ZP.getName(e)
}

function P(e, t) {
  return t.isOwner(e)
}

function y(e, t) {
  var n, i, r;
  let s = (i = e, t.isOwner(i) ? T.aC.OWNER : T.aC.MEMBER);
  return {
    rowType: s,
    name: M(e, t),
    nickname: null !== (n = l.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : null,
    username: I.ZP.getName(e),
    id: e.id,
    avatarURL: e.getAvatarURL(t.id, 24),
    bot: e.bot,
    verifiedBot: e.isVerifiedBot(),
    disabled: (r = e, t.isOwner(r)),
    key: "".concat(s, ":").concat(e.id)
  }
}

function U(e, t) {
  return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
}

function b(e, t, n, i) {
  let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
  return e.map(u.default.getUser).filter(d.lm).filter(e => !n.isOwner(e) && O(t, e.id, i) && (r(M(e, n)) || r(e.username) || r(e.discriminator))).map(e => y(e, n)).sort(U)
}

function G(e, t, n, i, r) {
  var s, o, a, l, _;
  return (s = e, o = t, a = n, l = i, _ = r, s.map(u.default.getUser).filter(d.lm).filter(e => {
    var t;
    return !O(o, e.id, l, _) || (t = e, a.isOwner(t))
  })).map(e => y(e, n)).sort(U)
}

function w(e, t) {
  switch (e) {
    case T.aC.ROLE:
      return S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
    case T.aC.OWNER:
      return S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
    case T.aC.ADMINISTRATOR:
      return S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
    case T.aC.MEMBER:
      return t ? S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
    case T.aC.USER:
      return S.Z.Messages.USER;
    case T.aC.GUILD:
      return S.Z.Messages.SERVER;
    case T.aC.EMPTY_STATE:
      return null
  }
}

function k(e) {
  switch (e) {
    case T.aC.ROLE:
      return S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
    case T.aC.OWNER:
      return S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case T.aC.ADMINISTRATOR:
      return S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case T.aC.MEMBER:
      return S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
    case T.aC.EMPTY_STATE:
    default:
      return null
  }
}

function B(e, t, n) {
  let r = e.permissionOverwrites[e.guild_id];
  null == r && (r = c.we(e.guild_id));
  let s = {
    ...r
  };
  return s.deny = i.Od(s.deny, t), s.allow = i.Od(s.allow, t), !n && (s.deny = i.IH(s.deny, t)), s
}

function x(e, t, n) {
  let i = B(e, t, n);
  (0, s.kY)(e, i.id, i.allow, i.deny)
}

function V(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let r = e.permissionOverwrites[n.id];
  if (null == r) {
    let r = {
      id: n.id,
      type: o.BN.MEMBER,
      allow: i.IH(c.Hn, t),
      deny: c.Hn
    };
    return (0, s.hw)(e.id, [r], !0)
  } {
    let {
      allow: n,
      deny: o
    } = r;
    return n = i.IH(n, t), (0, s.kY)(e, r.id, n, o)
  }
}

function Z(e, t) {
  if (null == e) return !1;
  let n = e.permissionOverwrites[e.guild_id];
  return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && i.e$(n.deny, e.accessPermissions)
}

function H(e, t) {
  let n = Object.keys(t);
  return 0 !== n.length && (1 !== n.length || n[0] !== e.id)
}

function F(e, t, n) {
  return e === h.d4z.GUILD_TEXT || e === h.d4z.GUILD_ANNOUNCEMENT ? t : !(0, a.bw)(e) && e !== h.d4z.GUILD_CATEGORY || t && n
}

function Y(e) {
  switch (e) {
    case h.d4z.GUILD_TEXT:
    case h.d4z.GUILD_ANNOUNCEMENT:
      return S.Z.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
    case h.d4z.GUILD_VOICE:
      return S.Z.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
    case h.d4z.GUILD_CATEGORY:
      return S.Z.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
    default:
      return null
  }
}

function j(e, t) {
  let n = [];
  return Object.values(e).forEach(e => {
    let {
      row: i
    } = e;
    null != i.id && "" !== i.id && (i.rowType === T.aC.ROLE ? n.push((0, _.rX)(i.id, t)) : i.rowType === T.aC.MEMBER && n.push((0, _.jZ)(i.id, t)))
  }), n
}