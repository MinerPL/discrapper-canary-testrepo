"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  u = n("845579"),
  i = n("49111");

function d(e, t) {
  u.AlwaysPreviewVideo.getSetting() ? (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("381736").then(n.bind(n, "381736"));
    return n => (0, a.jsx)(t, {
      ...n,
      onEnable: e,
      videoEnabled: !1
    })
  }, {
    modalKey: "camera-preview",
    contextKey: t === i.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
  }) : null == e || e()
}