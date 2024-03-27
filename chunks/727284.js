"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  a = n("845579"),
  l = n("49111");

function u(e, t) {
  a.AlwaysPreviewVideo.getSetting() ? (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("381736").then(n.bind(n, "381736"));
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