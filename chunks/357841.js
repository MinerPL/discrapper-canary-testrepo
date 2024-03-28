"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060");
t.default = {
  open: function(e, t) {
    (0, n.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([s.e("99387"), s.e("37880")]).then(s.bind(s, "897511"));
      return s => (0, a.jsx)(n, {
        payment: e,
        paymentSource: t,
        ...s
      })
    })
  }
}