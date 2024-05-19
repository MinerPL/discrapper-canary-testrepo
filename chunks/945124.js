    "use strict";
    r.r(t), r.d(t, {
      getClanDiscoveryAffinity: function() {
        return i
      }
    });
    var n = r("137920");

    function i(e, t) {
      let r = 0;
      return null != t.games && (r += 2 * t.games.filter(t => e.games.includes(t)).length), null != t.playstyle && (t.playstyle === e.playstyle ? r += 2 : n.PLAYSTYLE_GROUPS[e.playstyle] === n.PLAYSTYLE_GROUPS[t.playstyle] && (r += 1)), null != t.traits && (r += 2 * Array.from(t.traits).filter(t => e.traits.includes(t)).length), r
    }