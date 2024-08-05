n.d(t, {
  Z: function() {
return a;
  }
});
var i = n(937615),
  s = n(689938);

function a(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!e.available)
return s.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
  if (e.premium && !n)
return s.Z.Messages.APPLICATION_STORE_FREE_WITH_PREMIUM;
  let a = e.getPrice(null, t);
  if (null != a)
return a.amount > 0 ? (0, i.T4)(a.amount, a.currency) : s.Z.Messages.APPLICATION_STORE_FREE;
  return s.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
}