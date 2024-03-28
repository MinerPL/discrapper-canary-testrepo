"use strict";
let l, a;
n.r(t);
var s = n("735250");
n("470079");
var i = n("481060"),
  r = n("570140"),
  o = n("341382"),
  u = n("981631");
let d = null;

function c(e) {
  null != l && e ? l() : null != a && a(), l = null, a = null
}
t.default = {
  init() {
    r.default.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", e => {
      if (c(!1), d = e.context, l = e.resolve, a = e.reject, u.CURRENT_APP_CONTEXT === e.context) {
        let e;
        e = !1, (0, i.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("39305")]).then(n.bind(n, "134817"));
          return n => {
            let {
              onClose: l,
              ...a
            } = n;
            return (0, s.jsx)(t, {
              ...a,
              onClose: t => {
                e = t, l()
              }
            })
          }
        }, {
          onCloseCallback: () => {
            (0, o.closeModal)(e)
          }
        })
      }
    }), r.default.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", e => {
      let {
        shouldContinue: t
      } = e;
      d = null, c(t)
    }), r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
      let {
        locked: t
      } = e;
      t && null != d && (d = null, c(!1))
    })
  }
}