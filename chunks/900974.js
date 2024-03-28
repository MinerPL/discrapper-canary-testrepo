"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140");
let i = !1,
  r = null;
t.default = {
  init() {
    l.default.subscribe("CONNECTION_OPEN", e => {
      let {
        pendingPayments: t
      } = e;
      if (null != t && t.length > 0) {
        var l;
        if (r === t[0] || null == (r = t[0])) return;
        l = r, i || (i = !0, (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("62903")]).then(n.bind(n, "645586"));
          return t => {
            let {
              transitionState: n,
              onClose: s
            } = t;
            return (0, a.jsx)(e, {
              pendingPayment: l,
              transitionState: n,
              onClose: () => (i = !1, s())
            })
          }
        }))
      }
    })
  }
}