n.d(t, {
  I: function() {
return l;
  },
  M: function() {
return o;
  }
});
var r = n(442837),
  i = n(487419),
  a = n(496675),
  s = n(981631);

function o(e) {
  return (0, r.e7)([a.Z], () => null != e && a.Z.can(s.Plq.MANAGE_GUILD, e), [e]);
}

function l(e) {
  var t;
  let n = o(e),
a = (0, r.e7)([i.Z], () => null != e ? i.Z.getGuildIncident(e.id) : null),
l = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, s.oNc.INVITES_DISABLED)) || (null == a ? void 0 : a.invitesDisabledUntil) != null && new Date(a.invitesDisabledUntil) > new Date();
  return n && l;
}