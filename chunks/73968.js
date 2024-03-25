"use strict";
n.r(t), n.d(t, {
  openGuildSettingsPickerModal: function() {
    return l
  }
});
var a = n("37983");
n("884691");
var s = n("77078");

function l(e) {
  (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("945216").then(n.bind(n, "945216"));
    return n => (0, a.jsx)(t, {
      ...n,
      ...e
    })
  }, {
    modalKey: "Guild Settings Picker Modal"
  })
}