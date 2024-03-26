"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("974889"),
  i = n("954016"),
  r = n("49111");

function o(e) {
  let {
    channel: t,
    guildId: o,
    locationObject: u,
    openInPopout: d,
    initialSelectedApplicationId: c,
    initialSlide: E = i.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: f = !1,
    analyticsLocations: _
  } = e;
  d && (0, l.default)(r.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  let T = d ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
  return (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("605455").then(n.bind(n, "605455"));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: t,
      guildId: o,
      locationObject: u,
      initialSlide: E,
      initialSelectedApplicationId: c,
      enableSelectedTextChannelInvite: f,
      analyticsLocations: _
    })
  }, {
    modalKey: i.ACTIVITY_SHELF_WEB_MODAL_KEY,
    contextKey: T
  })
}