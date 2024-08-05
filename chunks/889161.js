n.d(t, {
  Gw: function() {
return h;
  },
  XJ: function() {
return f;
  }
}), n(47120);
var r = n(470079),
  i = n(149765),
  a = n(442837),
  s = n(601964);
n(984933);
var o = n(496675),
  l = n(594174);
n(700785);
var u = n(85243),
  c = n(231338);
let d = {
canCreateExpressions: !1,
canCreateGuildEvent: !1,
canManageAllExpressions: !1,
canManageAllEvents: !1,
canManageGuildExpression: () => !1,
canManageGuildEvent: () => !1
  },
  _ = (e, t, n, r) => {
if (null == e)
  return !1;
if (n)
  return !0;
if ('creator_id' in e)
  return r && null != t && e.creator_id === t.id;
if ('userId' in e)
  return r && null != t && e.userId === t.id;
if ('user' in e) {
  var i;
  return r && null != t && (null === (i = e.user) || void 0 === i ? void 0 : i.id) === t.id;
}
return !1;
  },
  E = e => {
if (null == e)
  return [
    c.Pl.CREATE_EVENTS,
    c.Pl.MANAGE_EVENTS
  ];
let t = u.TT;
return e.isGuildStageVoice() ? t = u.LK : e.isGuildVoice() && (t = u.AN), [
  i.$e(t, c.Pl.CREATE_EVENTS),
  i.$e(t, c.Pl.MANAGE_EVENTS)
];
  },
  f = e => {
let [t, n] = e instanceof s.ZP ? [
  c.Pl.CREATE_EVENTS,
  c.Pl.MANAGE_EVENTS
] : E(e), [i, u, f, h] = (0, a.Wu)([o.Z], () => [
  o.Z.can(c.Pl.CREATE_GUILD_EXPRESSIONS, e),
  o.Z.can(c.Pl.MANAGE_GUILD_EXPRESSIONS, e),
  o.Z.can(t, e),
  o.Z.can(n, e)
]), p = (0, a.e7)([l.default], () => l.default.getCurrentUser()), m = r.useCallback(e => _(e, p, u, i), [
  i,
  u,
  p
]), I = r.useCallback(e => _(e, p, h, f), [
  h,
  f,
  p
]);
return null == e ? d : {
  canCreateExpressions: i,
  canCreateGuildEvent: f,
  canManageAllExpressions: u,
  canManageAllEvents: h,
  canManageGuildExpression: m,
  canManageGuildEvent: I
};
  },
  h = function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
  [r, i] = e instanceof s.ZP ? [
    c.Pl.CREATE_EVENTS,
    c.Pl.MANAGE_EVENTS
  ] : E(e),
  a = t.can(c.Pl.CREATE_GUILD_EXPRESSIONS, e),
  u = t.can(c.Pl.MANAGE_GUILD_EXPRESSIONS, e),
  f = t.can(r, e),
  h = t.can(i, e),
  p = n.getCurrentUser();
return null == e ? d : {
  canCreateExpressions: a,
  canCreateGuildEvent: f,
  canManageAllExpressions: u,
  canManageAllEvents: h,
  canManageGuildExpression: e => _(e, p, u, a),
  canManageGuildEvent: e => _(e, p, h, f)
};
  };