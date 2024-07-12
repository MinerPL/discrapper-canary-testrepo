t.d(n, {
  Z: function() {
return T;
  }
}), t(653041);
var i = t(735250),
  r = t(470079),
  a = t(442837),
  u = t(481060),
  o = t(139387),
  l = t(230711),
  s = t(213459),
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
  } = e, S = c.Z.getGuild(t), p = (0, a.e7)([E.Z], () => null != S ? E.Z.can(_.Plq.MANAGE_GUILD, S) : null), A = (0, s.em)(T, !0, !0), O = (0, s.PL)(!0, !0), {
isUserApp: f,
isGuildApp: h
  } = r.useMemo(() => {
var e, t, i, r;
if ((null == n ? void 0 : n.id) == null)
  return {
    isGuildApp: !1,
    isUserApp: !1
  };
let a = Object.values(null !== (i = null === (e = A.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
  u = Object.values(null !== (r = null === (t = O.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {});
return {
  isGuildApp: a.some(e => {
    var t;
    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
  }),
  isUserApp: u.some(e => {
    var t;
    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === (null == n ? void 0 : n.id);
  })
};
  }, [
A,
O,
null == n ? void 0 : n.id
  ]), M = r.useCallback(() => {
if ((null == S ? void 0 : S.id) != null)
  d.Z.open(S.id, _.pNK.INTEGRATIONS), o.Z.setSection(_.b4C.APPLICATION, null == n ? void 0 : n.id);
  }, [
null == n ? void 0 : n.id,
null == S ? void 0 : S.id
  ]), R = r.useCallback(() => {
l.Z.open(_.oAB.AUTHORIZED_APPS);
  }, []), m = N === _.IlC.POPOUT;
  if (!(null == n ? void 0 : n.bot) || !p || m || !h && !f)
return null;
  let Z = [];
  return h && Z.push((0, i.jsx)(u.MenuItem, {
id: 'manage-integration',
label: I.Z.Messages.MANAGE_INTEGRATION,
action: M
  }, 'manage-integration')), f && Z.push((0, i.jsx)(u.MenuItem, {
id: 'manage-authorized-app',
label: I.Z.Messages.MANAGE_AUTHORIZED_APP,
action: R
  }, 'manage-authorized-app')), Z;
}