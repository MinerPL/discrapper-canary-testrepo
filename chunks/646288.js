"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("937615"),
  a = n("689938");

function l(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!e.available) return a.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
  if (e.premium && !n) return a.default.Messages.APPLICATION_STORE_FREE_WITH_PREMIUM;
  let l = e.getPrice(null, t);
  if (null != l) return l.amount > 0 ? (0, s.formatPrice)(l.amount, l.currency) : a.default.Messages.APPLICATION_STORE_FREE;
  return a.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE
}