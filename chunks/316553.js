"use strict";
n.r(t), n.d(t, {
  useDiscoveryGameApplicationId: function() {
    return i
  }
});
var a = n("470079"),
  s = n("207796"),
  l = n("308083");

function i(e) {
  let {
    selectedGame: t
  } = e;
  return a.useMemo(() => {
    switch (t) {
      case s.ClanDiscoveryGame.GENSHIN:
        return l.GENSHIN_ID;
      case s.ClanDiscoveryGame.VALORANT:
        return l.VALORANT_ID
    }
  }, [t])
}