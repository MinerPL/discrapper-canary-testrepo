"use strict";
a.r(t), a.d(t, {
  openReportRaidModal: function() {
    return l
  },
  openSafetyChannelSetupModal: function() {
    return s
  }
});
var n = a("37983");
a("884691");
var i = a("77078");

function l(e) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await a.el("423588").then(a.bind(a, "423588"));
    return a => (0, n.jsx)(t, {
      ...a,
      guildId: e
    })
  })
}

function s(e) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await a.el("982537").then(a.bind(a, "982537"));
    return a => (0, n.jsx)(t, {
      ...a,
      guildId: e
    })
  })
}