n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(937615), a = n(689938);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available)
        return a.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
    if (e.premium && !n)
        return a.Z.Messages.APPLICATION_STORE_FREE_WITH_PREMIUM;
    let s = e.getPrice(null, t);
    if (null != s)
        return s.amount > 0 ? (0, i.T4)(s.amount, s.currency) : a.Z.Messages.APPLICATION_STORE_FREE;
    return a.Z.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
}
