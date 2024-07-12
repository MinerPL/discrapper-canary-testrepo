n.d(t, {
  $U: function() {
return E;
  },
  Jw: function() {
return m;
  },
  Kg: function() {
return f;
  },
  PO: function() {
return I;
  },
  Wx: function() {
return g;
  },
  bd: function() {
return h;
  },
  f$: function() {
return A;
  },
  gc: function() {
return _;
  },
  gd: function() {
return S;
  },
  s6: function() {
return T;
  },
  xQ: function() {
return p;
  }
}), n(653041);
var r = n(470079),
  i = n(442837),
  a = n(809206),
  o = n(18438),
  s = n(778825),
  l = n(350327),
  u = n(621853),
  c = n(271383),
  d = n(25990);

function _(e) {
  return r.useMemo(() => {
let t = c.ZP.getMutableAllGuildsAndMembers(),
  n = {};
for (let i in t) {
  var r;
  let a = null === (r = t[i][e]) || void 0 === r ? void 0 : r.avatar;
  if (null != a)
    null == n[a] && (n[a] = []), n[a].push(i);
}
return null != n ? Object.entries(n).map(e => e[1][0]) : [];
  }, [e]);
}

function E(e, t) {
  let n = (0, i.e7)([c.ZP], () => void 0 === t ? null : c.ZP.getMember(t.id, e.id)),
{
  pendingUserAvatarDecoration: r,
  userErrors: a
} = (0, i.cj)([d.Z], () => ({
  pendingUserAvatarDecoration: d.Z.getPendingAvatarDecoration(),
  userErrors: d.Z.getErrors().avatarDecoration
})),
{
  pendingGuildAvatarDecoration: o,
  guildErrors: l
} = (0, i.cj)([s.Z], () => ({
  pendingGuildAvatarDecoration: s.Z.getPendingAvatarDecoration(),
  guildErrors: s.Z.getErrors().avatarDecoration
}));
  return {
userAvatarDecoration: e.avatarDecoration,
guildAvatarDecoration: null == n ? void 0 : n.avatarDecoration,
pendingAvatarDecoration: null != t ? o : r,
pendingErrors: null != t ? l : a
  };
}

function f(e, t) {
  return (0, i.e7)([u.Z], () => {
var n, r;
return null == t ? null === (n = u.Z.getUserProfile(e.id)) || void 0 === n ? void 0 : n.profileEffectId : null === (r = u.Z.getGuildMemberProfile(e.id, t.id)) || void 0 === r ? void 0 : r.profileEffectId;
  }, [
e,
t
  ]);
}

function h(e) {
  return (0, i.cj)([
d.Z,
s.Z
  ], () => null == e ? {
pendingProfileEffectId: d.Z.getPendingProfileEffectId(),
errors: d.Z.getErrors().profileEffect
  } : {
pendingProfileEffectId: s.Z.getPendingProfileEffectId(),
errors: s.Z.getErrors().profileEffect
  }, [e]);
}

function p(e, t) {
  (0, l.Cf)(e === t ? void 0 : e);
}

function m(e, t) {
  (0, a.I5)(e === t ? void 0 : e);
}

function I(e, t) {
  (null != e ? o.cV : a.cV)(t);
}

function T(e, t, n) {
  if (e === t) {
null == n ? (0, a.xn)(void 0) : (0, o.xn)(void 0);
return;
  }
  null == n ? (0, a.xn)(e) : (0, o.xn)(e);
}

function g(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e)
return '' === e ? {
  value: r ? n : null,
  isUsingGuildValue: !1
} : {
  value: e,
  isUsingGuildValue: r
};
  return null != t && '' !== t ? {
value: t,
isUsingGuildValue: !0
  } : {
value: n,
isUsingGuildValue: !1
  };
}

function S(e, t) {
  return void 0 === e ? null != t : null != e;
}

function A(e, t) {
  return void 0 === e ? null != t : null != e;
}