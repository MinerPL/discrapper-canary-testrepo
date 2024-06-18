"use strict";
n.d(t, {
  V: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(522474),
  o = n(981631);

function a(e) {
  let {
    application: t,
    onAgree: a,
    onDisagree: l
  } = e, u = s.Z.getWindowOpen(o.KJ3.CHANNEL_CALL_POPOUT) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
  return (0, r.openModalLazy)(async () => {
    let {
      ActivityAgeGateModal: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("43782")]).then(n.bind(n, 224604));
    return n => (0, i.jsx)(e, {
      ...n,
      application: t,
      onAgree: a,
      onDisagree: l
    })
  }, {
    modalKey: "activity-age-gate",
    contextKey: u
  }), Promise.resolve()
}