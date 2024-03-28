"use strict";
a.r(e), a.d(e, {
  default: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("406877");

function i(t) {
  let {
    guildId: e,
    productId: a,
    attachmentId: i,
    ...r
  } = t, {
    isLoading: u,
    downloadAttachment: o
  } = (0, l.default)(e, a);
  return (0, n.jsx)(s.Button, {
    ...r,
    submitting: u,
    onClick: function() {
      o(i)
    }
  })
}