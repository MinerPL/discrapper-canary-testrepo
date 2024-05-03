"use strict";
n.r(t), n.d(t, {
  useFormattedGameNames: function() {
    return d
  }
});
var a = n("392711"),
  l = n.n(a),
  s = n("442837"),
  i = n("77498"),
  r = n("823379"),
  o = n("353093"),
  u = n("308083");

function d(e) {
  return (0, s.useStateFromStores)([i.default], () => {
    let t = l()(e).map(e => {
      var t;
      return null === (t = i.default.getGameById(e)) || void 0 === t ? void 0 : t.name
    }).filter(r.isNotNullish).value();
    return (0, o.formatSelectionList)(t, u.MAX_GAMES_TO_DISPLAY)
  })
}