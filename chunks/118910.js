"use strict";
n.d(t, {
  a: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(378298),
  o = n(473092),
  a = n(237292);

function l(e) {
  let {
    channelId: t,
    warningId: l,
    senderId: u,
    warningType: _
  } = e;
  if (!!(0, a.mG)({
      location: "takeover-modal"
    }))(0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("49508"), n.e("51934")]).then(n.bind(n, 955708));
    return n => (0, i.jsx)(e, {
      channelId: t,
      warningId: l,
      senderId: u,
      warningType: _,
      modalProps: n
    })
  }, {
    backdropStyle: r.BackdropStyles.BLUR,
    onCloseCallback: () => {
      (0, s.T)(t, [l]), (0, o.qc)({
        channelId: t,
        senderId: u,
        warningId: l,
        warningType: _,
        cta: o.NM.USER_TAKEOVER_MODAL_DISMISS,
        isNudgeWarning: !1
      })
    }
  })
}