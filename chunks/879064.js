"use strict";
n.r(t), n.d(t, {
  openGuildSettingsPickerModal: function() {
    return l
  }
});
var a = n("735250");
n("470079");
var s = n("481060");

function l(e) {
  (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("8102")]).then(n.bind(n, "674189"));
    return n => (0, a.jsx)(t, {
      ...n,
      ...e
    })
  }, {
    modalKey: "Guild Settings Picker Modal"
  })
}