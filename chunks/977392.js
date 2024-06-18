"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(399606),
  r = n(592125),
  s = n(271383),
  o = n(430824),
  a = n(275759);

function l(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    u = (0, i.e7)([s.ZP], () => null != e ? s.ZP.getMember(e.id, t) : null, [e, t]),
    _ = (0, i.e7)([r.Z], () => r.Z.getChannel(n), [n]),
    d = (0, i.e7)([r.Z], () => r.Z.getChannel(null == _ ? void 0 : _.parent_id), [_]),
    c = (0, i.e7)([o.Z], () => null != e ? o.Z.getRoles(e.id) : void 0);
  return null == e || null == c || null == u ? null : (0, a.Ur)({
    guild: e,
    guildRoles: c,
    guildMember: u,
    channel: null != _ && _.isThread() && null != d ? d : _,
    onlyChannelConnectionRoles: l
  })
}