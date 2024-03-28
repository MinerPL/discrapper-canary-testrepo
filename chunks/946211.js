"use strict";
r.r(t), r.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return c
  }
});
var n = r("735250");
r("470079");
var s = r("409813"),
  a = r("443650"),
  l = r("464797"),
  u = r("743893");

function i(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: r
  } = (0, l.useGuildProductPurchaseContext)();
  return (0, n.jsx)(a.default, {
    guildProductListing: r,
    className: u.header,
    onClose: t
  })
}
let c = (e, t, r) => r === s.Step.CONFIRM ? null : (0, n.jsx)(i, {
  onClose: () => t(!1)
})