n.d(t, {
  P: function() {
return _;
  }
}), n(789020);
var r = n(592125),
  i = n(271383),
  a = n(430824),
  o = n(630388),
  s = n(563534),
  l = n(846121),
  u = n(199689),
  c = n(981631),
  d = n(372897);

function _(e, t) {
  var n, _;
  let E = a.Z.getGuild(e),
f = r.Z.getChannel(t);
  return null != E && null != f && (0, u.Z)(E) && E.hasFeature(c.oNc.GUILD_SERVER_GUIDE) && !o.yE(null !== (_ = null === (n = i.ZP.getSelfMember(E.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== _ ? _ : 0, d.q.COMPLETED_HOME_ACTIONS) && s.Z.hasMemberAction(E.id, f.id) && !l.Z.hasCompletedActionForChannel(E.id, f.id);
}