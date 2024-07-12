n.d(t, {
  K_: function() {
return u;
  },
  P3: function() {
return d;
  },
  PE: function() {
return h;
  }
}), n(789020);
var i = n(399606),
  a = n(271383),
  l = n(630388),
  s = n(563534),
  r = n(846121),
  o = n(460347),
  c = n(372897);

function d(e, t) {
  var n;
  let a = (0, o.Z)(e),
l = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e), [e]),
c = (0, i.e7)([r.Z], () => r.Z.getCompletedActions(e));
  if (!a)
return {};
  let d = null !== (n = null == l ? void 0 : l.findIndex(e => e.channelId === t.id)) && void 0 !== n ? n : 0,
u = d >= 0 && null != l ? l[d] : null,
h = null != u && (null == c ? void 0 : c[u.channelId]) === !0;
  return {
channelAction: u,
completed: h
  };
}

function u(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e)),
a = (0, i.e7)([r.Z], () => r.Z.getCompletedActions(e));
  return null == n ? void 0 : n.find(e => (null == a ? void 0 : a[e.channelId]) !== !0 && e.channelId !== t);
}

function h(e) {
  var t;
  let n = (0, i.e7)([a.ZP], () => a.ZP.getSelfMember(e));
  return (0, l.yE)(null !== (t = null == n ? void 0 : n.flags) && void 0 !== t ? t : 0, c.q.COMPLETED_HOME_ACTIONS);
}