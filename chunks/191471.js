"use strict";
n.r(t), n.d(t, {
  openReportRaidModal: function() {
    return a
  },
  openSafetyChannelSetupModal: function() {
    return i
  }
});
var u = n("735250");
n("470079");
var l = n("481060");

function a(e) {
  (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("9354")]).then(n.bind(n, "461533"));
    return n => (0, u.jsx)(t, {
      ...n,
      guildId: e
    })
  })
}

function i(e) {
  (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("31270")]).then(n.bind(n, "866266"));
    return n => (0, u.jsx)(t, {
      ...n,
      guildId: e
    })
  })
}