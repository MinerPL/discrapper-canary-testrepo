"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("653041");
var a = s("442837"),
  l = s("977258"),
  n = s("958832"),
  i = s("592125"),
  r = s("981631");

function o(e) {
  return (0, a.useStateFromStoresArray)([n.default, i.default], () => {
    var t;
    let s = (null !== (t = n.default.getTopChannelIds(e.id)) && void 0 !== t ? t : []).map(e => i.default.getChannel(e)).filter(t => null == t || t.id !== e.rulesChannelId),
      a = [],
      o = 0;
    return s.forEach(e => {
      if (e.type === r.ChannelTypes.GUILD_ANNOUNCEMENT) {
        if (o >= 2) return;
        o++
      }
      a.length < 5 && !a.includes(e) && a.push(e)
    }), a.sort((t, s) => ((0, l.canChannelBeDefault)(e.id, s.id) ? 1 : 0) - ((0, l.canChannelBeDefault)(e.id, t.id) ? 1 : 0)), a
  })
}