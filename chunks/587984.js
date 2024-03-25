"use strict";
n.r(t), n.d(t, {
  openActivityShareMomentModal: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("870346"),
  i = n("49111");

function r(e) {
  let {
    applicationId: t,
    channelId: r,
    mediaUrl: o
  } = e, u = l.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT), d = u ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("611598").then(n.bind(n, "611598"));
    return n => (0, a.jsx)(e, {
      applicationId: t,
      channelId: r,
      mediaUrl: o,
      ...n
    })
  }, {
    modalKey: "activity-share-moment-modal",
    contextKey: d
  })
}