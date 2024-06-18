"use strict";
n.d(t, {
  Z: function() {
    return _
  }
}), n(724458), n(653041), n(47120);
var i = n(658722),
  r = n.n(i),
  s = n(339085),
  o = n(633302),
  a = n(697426),
  l = n(242291);
let u = [];

function _(e, t, n, i) {
  if (0 === e.length) return u;
  let _ = t.reduce((e, t) => {
      for (let n of t.items) t.categoryInfo.type !== a.bg.FAVORITES && n.type === a.vB.SOUND && e.push(n.sound);
      return e
    }, []),
    d = _.reduce((t, a) => (t[a.soundId] = function(e, t, n, i) {
      var a;
      let u = 0,
        _ = t.name.toLocaleLowerCase(),
        d = null != t.emojiId ? s.Z.getCustomEmojiById(t.emojiId) : null,
        c = null != t.emojiName ? o.ZP.convertSurrogateToName(t.emojiName, !1) : null,
        E = null != c ? o.ZP.getByName(c) : null,
        I = null != d ? [d.name] : null !== (a = null == E ? void 0 : E.names) && void 0 !== a ? a : [];
      return e === _ && (u += 8), I.includes(e) && (u += 7), _.startsWith(e) && (u += 6), I.some(t => t.startsWith(e)) && (u += 5), _.endsWith(e) && (u += 4), I.some(t => t.endsWith(e)) && (u += 3), r()(e, t.name.toLocaleLowerCase()) && (u += 2), I.some(t => r()(e, t)) && (u += 1), u > 0 && (0, l.Nq)(n, t, i) && (u += 100), u
    }(e.toLocaleLowerCase(), a, n, i), t), {});
  return _.filter(e => d[e.soundId] > 0).sort((e, t) => d[t.soundId] - d[e.soundId])
}