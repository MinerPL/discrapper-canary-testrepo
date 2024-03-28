"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("776862"),
  i = n("701488"),
  r = n("981631");

function o(e) {
  let {
    channel: t,
    guildId: o,
    locationObject: u,
    openInPopout: d,
    initialSelectedApplicationId: c,
    initialSlide: f = i.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: E = !1,
    analyticsLocations: _
  } = e;
  d && (0, l.default)(r.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  let T = d ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
  return (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("80954"), n.e("12610"), n.e("36892")]).then(n.bind(n, "471840"));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: t,
      guildId: o,
      locationObject: u,
      initialSlide: f,
      initialSelectedApplicationId: c,
      enableSelectedTextChannelInvite: E,
      analyticsLocations: _
    })
  }, {
    modalKey: i.ACTIVITY_SHELF_WEB_MODAL_KEY,
    contextKey: T
  })
}