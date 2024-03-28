"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("653041"), n("47120");
var r = n("131704");

function l(e) {
  let t = [];
  for (let n = 0; n < e._categories.length; n++) {
    let l = e._categories[n].channel,
      a = e[l.id].map(e => e.channel).filter(e => r.GUILD_FAVORITES_CHANNEL_TYPES.has(e.type));
    if (null != a && 0 !== a.length)
      for (let e of ("null" !== l.id && t.push(l), a)) t.push(e)
  }
  return t
}