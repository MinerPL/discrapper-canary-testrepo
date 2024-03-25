"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("158195");

function i(e) {
  let {
    guildId: t,
    productId: n,
    attachmentId: i,
    ...r
  } = e, {
    isLoading: o,
    downloadAttachment: u
  } = (0, l.default)(t, n);
  return (0, s.jsx)(a.Button, {
    ...r,
    submitting: o,
    onClick: function() {
      u(i)
    }
  })
}