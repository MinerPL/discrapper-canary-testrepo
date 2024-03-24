"use strict";
n.r(t), n.d(t, {
  showVotesForAnswer: function() {
    return a
  }
});
var s = n("37983");
n("884691");
var l = n("77078");

function a(e) {
  let {
    message: t,
    initialAnswerId: a
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("915299").then(n.bind(n, "915299"));
    return n => (0, s.jsx)(e, {
      ...n,
      message: t,
      initialAnswerId: a
    })
  })
}