"use strict";
n.r(t), n.d(t, {
  openActivityShareMomentModal: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("522474"),
  i = n("981631");

function r(e) {
  let {
    applicationId: t,
    channelId: r,
    mediaUrl: o
  } = e, u = l.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("4530")]).then(n.bind(n, "899201"));
    return n => (0, a.jsx)(e, {
      applicationId: t,
      channelId: r,
      mediaUrl: o,
      ...n
    })
  }, {
    modalKey: "activity-share-moment-modal",
    contextKey: u
  })
}