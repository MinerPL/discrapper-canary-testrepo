"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("740492"),
  i = n("626135"),
  r = n("358085"),
  o = n("998502"),
  u = n("258220"),
  d = n("981631");
let c = "activity-hardware-acceleration-modal";

function f(e) {
  !l.default.disableActivityHardwareAccelerationPrompt && r.isPlatformEmbedded && !o.default.getEnableHardwareAcceleration() && (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, "258220"));
    return n => (0, a.jsx)(t, {
      applicationId: e,
      ...n
    })
  }, {
    modalKey: c,
    onCloseRequest: () => {
      i.default.track(d.AnalyticEvents.MODAL_DISMISSED, {
        type: u.ACTIVITY_ENCOURAGES_HW_ACCELERATION
      }), (0, s.closeModal)(c)
    }
  })
}