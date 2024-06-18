"use strict";
n.d(t, {
  y: function() {
    return r
  }
});
var i = n(137920);

function r(e, t) {
  let n = 0;
  return null != t.games && (n += 2 * t.games.filter(t => e.games.includes(t)).length), null != t.playstyle && (t.playstyle === e.playstyle ? n += 2 : i.J[e.playstyle] === i.J[t.playstyle] && (n += 1)), null != t.traits && (n += 2 * Array.from(t.traits).filter(t => e.traits.includes(t)).length), n += Math.random()
}