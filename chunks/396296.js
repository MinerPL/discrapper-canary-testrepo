"use strict";
let l, a;
n.r(t);
var s = n("735250");
n("470079");
var i = n("481060"),
  r = n("570140"),
  o = n("401131"),
  u = n("981631");
let d = null,
  c = null;

function f(e) {
  null != l && null != d ? l(d) : null != a && a(e), l = null, a = null
}
t.default = {
  init() {
    r.default.subscribe("PURCHASE_CONFIRMATION_MODAL_OPEN", e => {
      if (f(), c = e.context, d = e.entitlements, l = e.resolve, a = e.reject, u.CURRENT_APP_CONTEXT === e.context) {
        var t, r, h, C;
        let l;
        t = e.context, r = e.applicationId, h = e.skuId, C = e.analyticsSource, l = null, (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("20177"), n.e("41887")]).then(n.bind(n, "359012"));
          return n => {
            let {
              onClose: a,
              ...i
            } = n;
            return (0, s.jsx)(e, {
              ...i,
              onClose: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                l = e, a()
              },
              applicationId: r,
              skuId: h,
              analyticsSource: C,
              isIAP: t === u.AppContext.OVERLAY
            })
          }
        }, {
          onCloseCallback: () => {
            (0, o.closePurchaseConfirmationModal)(l)
          }
        })
      }
    }), r.default.subscribe("PURCHASE_CONFIRMATION_MODAL_CLOSE", e => {
      let {
        error: t
      } = e;
      c = null, f(t)
    }), r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
      let {
        locked: t
      } = e;
      t && null != c && (c = null, f())
    })
  }
}