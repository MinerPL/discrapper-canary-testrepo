"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(872810),
  o = n(451467),
  a = n(174609),
  l = n(928518),
  u = n(120522),
  _ = n(933843),
  d = n(614011),
  c = n(430824),
  E = n(131951),
  I = n(594174),
  T = n(358085),
  h = n(981631),
  S = n(37113);

function f(e, t, f) {
  let N = l.Z.getWindowOpen(h.KJ3.CHANNEL_CALL_POPOUT) ? h.KJ3.CHANNEL_CALL_POPOUT : null;
  if ((0, a.Z)(N), T.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("12977")]).then(n.bind(n, 60594));
    return n => (0, i.jsx)(t, {
      ...n,
      guildId: e,
      analyticsLocation: f
    })
  }), (0, _.F4)() && ((0, u.z)(), (0, d.O)());
  else {
    var A;
    let n = (0, o.Z)(S.tI.PRESET_CUSTOM, S.LY.RESOLUTION_1080, S.ws.FPS_30, I.default.getCurrentUser(), null === (A = c.Z.getGuild(e)) || void 0 === A ? void 0 : A.premiumTier) ? {
      width: 1920,
      height: 1080
    } : {
      width: 1280,
      height: 720
    };
    E.Z.getMediaEngine().getDesktopSource(n, !0).then(n => {
      (0, s.WH)(e, t, {
        pid: null,
        sourceId: n,
        sourceName: null
      })
    })
  }
}