"use strict";
n.r(t), n.d(t, {
  showVotesForAnswer: function() {
    return l
  }
});
var s = n("37983");
n("884691");
var a = n("77078");

function l(e) {
  let {
    message: t,
    initialAnswerId: l
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("915299").then(n.bind(n, "915299"));
    return n => (0, s.jsx)(e, {
      ...n,
      message: t,
      initialAnswerId: l
    })
  })
}