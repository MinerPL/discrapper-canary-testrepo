"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("848246"),
  a = n("442837"),
  s = n("358221"),
  i = n("557457"),
  r = n("386542");

function o(e, t) {
  let n = (0, a.useStateFromStores)([s.default], () => null != e ? s.default.getStreamParticipants(e).find(e => e.user.id === t) : void 0, [e, t]),
    {
      activated: o,
      available: u,
      hqStreamingState: {
        hqStreamingIsEnabled: d
      }
    } = (0, r.usePerksDemo)(l.EntitlementFeatureNames.STREAM_HIGH_QUALITY);
  if (!o || !u || !d) return;
  let c = null != n ? (0, i.getMaxQuality)(n) : void 0;
  return null != c ? "".concat((0, i.getResolutionText)(c.maxResolution), " ").concat((0, i.getFPSText)(c.maxFrameRate)) : void 0
}