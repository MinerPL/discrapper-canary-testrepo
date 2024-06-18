"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(149765),
  r = n(430824),
  s = n(981631);
let o = [s.d4z.GUILD_TEXT, s.d4z.GUILD_VOICE, s.d4z.GUILD_ANNOUNCEMENT, s.d4z.GUILD_FORUM, s.d4z.PUBLIC_THREAD, s.d4z.PRIVATE_THREAD],
  a = i.$e(s.Plq.VIEW_CHANNEL, s.Plq.SEND_MESSAGES);

function l(e) {
  if (null == e || !o.includes(e.type)) return [];
  let t = r.Z.getGuild(e.guild_id);
  return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
    var n, s;
    return 0 === e.type && (null === (s = r.Z.getRoles(t.id)[e.id]) || void 0 === s ? void 0 : null === (n = s.tags) || void 0 === n ? void 0 : n.guild_connections) === null && !i.Db(e.deny, a)
  }).map(e => r.Z.getRoles(t.id)[e.id]).filter(e => null != e)
}