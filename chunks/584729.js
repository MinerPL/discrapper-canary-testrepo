n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(271383),
  a = n(5192),
  s = n(354459),
  l = n(689938);

function r(e, t, n) {
  var r, o;
  if (t.type === s.fO.ACTIVITY)
return null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : null;
  let c = i.ZP.isGuestOrLurker(e.guild_id, null === (r = t.user) || void 0 === r ? void 0 : r.id);
  return a.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? ' '.concat(l.Z.Messages.GUEST_NAME_SUFFIX) : '');
}