"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("695346"),
  l = n("981631");

function u(e, t) {
  a.AlwaysPreviewVideo.getSetting() ? (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("5528"), n.e("13170")]).then(n.bind(n, "601572"));
    return n => (0, i.jsx)(t, {
      ...n,
      onEnable: e,
      videoEnabled: !1
    })
  }, {
    modalKey: "camera-preview",
    contextKey: t === l.AppContext.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
  }) : null == e || e()
}