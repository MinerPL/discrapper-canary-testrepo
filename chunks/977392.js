n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(399606),
  i = n(592125),
  a = n(271383),
  o = n(430824),
  s = n(275759);

function l(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
u = (0, r.e7)([a.ZP], () => null != e ? a.ZP.getMember(e.id, t) : null, [
  e,
  t
]),
c = (0, r.e7)([i.Z], () => i.Z.getChannel(n), [n]),
d = (0, r.e7)([i.Z], () => i.Z.getChannel(null == c ? void 0 : c.parent_id), [c]),
_ = (0, r.e7)([o.Z], () => null != e ? o.Z.getRoles(e.id) : void 0);
  return null == e || null == _ || null == u ? null : (0, s.Ur)({
guild: e,
guildRoles: _,
guildMember: u,
channel: null != c && c.isThread() && null != d ? d : c,
onlyChannelConnectionRoles: l
  });
}