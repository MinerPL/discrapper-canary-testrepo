"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("153867"),
  i = n("468026"),
  r = n("740492"),
  o = n("689938");

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
    n = t => {
      s.default.updatedUnsyncedSettings({
        disableEmbeddedActivityPopOutAlert: !0
      }), t(), e()
    };
  r.default.disableEmbeddedActivityPopOutAlert ? e() : (0, l.openModal)(l => (0, a.jsx)(i.default, {
    confirmText: o.default.Messages.EMBEDDED_ACTIVITIES_YEP,
    secondaryConfirmText: o.default.Messages.DONT_ASK_AGAIN,
    title: o.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
    cancelText: o.default.Messages.EMBEDDED_ACTIVITIES_NVM,
    onConfirm: () => {
      l.onClose(), e()
    },
    onCancel: t,
    onConfirmSecondary: () => n(l.onClose),
    body: o.default.Messages.EMBEDDED_ACTIVITIES_POP_IN_WARNING,
    ...l
  }), {}, l.POPOUT_MODAL_CONTEXT)
}