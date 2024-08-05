t.d(n, {
  Z: function() {
return T;
  }
}), t(653041);
var i = t(735250),
  r = t(470079),
  a = t(442837),
  s = t(481060),
  l = t(139387),
  o = t(230711),
  u = t(213459),
  d = t(434404),
  c = t(430824),
  E = t(496675),
  _ = t(981631),
  I = t(689938);

function T(e) {
  let {
user: n,
guildId: t,
channel: T,
context: N
  } = e, S = c.Z.getGuild(t), p = (0, a.e7)([E.Z], () => null != S ? E.Z.can(_.Plq.MANAGE_GUILD, S) : null), f = (0, u.em)(T, !0, !0), A = (0, u.PL)(!0, !0), {
isUserApp: O,
isGuildApp: h
  } = r.useMemo(() => {
var e, t, i, r;
if ((null == n ? void 0 : n.id) == null)
  return {
    isGuildApp: !1,
    isUserApp: !1
  };
let a = Object.values(null !== (i = null === (e = f.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
  s = Object.values(null !== (r = null === (t = A.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {});
return {
  isGuildApp: a.some(e => {
    var t;
    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
  }),
  isUserApp: s.some(e => {
    var t;
    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
  })
};
  }, [
f,
A,
null == n ? void 0 : n.id
  ]), Z = r.useCallback(() => {
if ((null == S ? void 0 : S.id) != null)
  d.Z.open(S.id, _.pNK.INTEGRATIONS), l.Z.setSection(_.b4C.APPLICATION, null == n ? void 0 : n.id);
  }, [
null == n ? void 0 : n.id,
null == S ? void 0 : S.id
  ]), M = r.useCallback(() => {
o.Z.open(_.oAB.AUTHORIZED_APPS);
  }, []), m = N === _.IlC.POPOUT;
  if (!(null == n ? void 0 : n.bot) || !p || m || !h && !O)
return null;
  let g = [];
  return h && g.push((0, i.jsx)(s.MenuItem, {
id: 'manage-integration',
label: I.Z.Messages.MANAGE_INTEGRATION,
action: Z
  }, 'manage-integration')), O && g.push((0, i.jsx)(s.MenuItem, {
id: 'manage-authorized-app',
label: I.Z.Messages.MANAGE_AUTHORIZED_APP,
action: M
  }, 'manage-authorized-app')), g;
}