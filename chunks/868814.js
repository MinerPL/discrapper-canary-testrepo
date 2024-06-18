"use strict";
t.d(s, {
  Z: function() {
    return o
  }
}), t(653041);
var n = t(442837),
  i = t(977258),
  l = t(958832),
  a = t(592125),
  r = t(981631);

function o(e) {
  return (0, n.Wu)([l.Z, a.Z], () => {
    var s;
    let t = (null !== (s = l.Z.getTopChannelIds(e.id)) && void 0 !== s ? s : []).map(e => a.Z.getChannel(e)).filter(s => null == s || s.id !== e.rulesChannelId),
      n = [],
      o = 0;
    return t.forEach(e => {
      if (e.type === r.d4z.GUILD_ANNOUNCEMENT) {
        if (o >= 2) return;
        o++
      }
      n.length < 5 && !n.includes(e) && n.push(e)
    }), n.sort((s, t) => ((0, i.s)(e.id, t.id) ? 1 : 0) - ((0, i.s)(e.id, s.id) ? 1 : 0)), n
  })
}