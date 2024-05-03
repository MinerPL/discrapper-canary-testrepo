"use strict";
n.r(t), n.d(t, {
  getInitialSubscriptionPayload: function() {
    return d
  }
});
var a = n("317381"),
  s = n("573979"),
  l = n("42352"),
  i = n("886355"),
  r = n("238679"),
  o = n("981631"),
  u = n("701488");
async function d(e, t, n) {
  var d, c;
  switch (t) {
    case o.RPCEvents.ACTIVITY_PIP_MODE_UPDATE: {
      let t = null === (d = e.application) || void 0 === d ? void 0 : d.id,
        n = null != t ? a.default.getLayoutModeForApp(t) : null;
      return null != n ? {
        is_pip_mode: n !== u.ActivityLayoutMode.FOCUSED
      } : null
    }
    case o.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE: {
      let t = null === (c = e.application) || void 0 === c ? void 0 : c.id,
        n = null != t ? a.default.getLayoutModeForApp(t) : null;
      return null != n ? {
        layout_mode: n
      } : null
    }
    case o.RPCEvents.THERMAL_STATE_UPDATE: {
      let e = await (0, l.default)();
      if (null == e) return null;
      return {
        thermal_state: (0, s.default)(e)
      }
    }
    case o.RPCEvents.ORIENTATION_UPDATE: {
      let e = i.default.isScreenLandscape();
      if (null == e) return null;
      {
        let t = e ? u.ActivityScreenOrientation.LANDSCAPE : u.ActivityScreenOrientation.PORTRAIT,
          n = t === u.ActivityScreenOrientation.PORTRAIT ? "portrait" : "landscape";
        return {
          screen_orientation: t,
          orientation: n
        }
      }
    }
    case o.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
      return (0, r.activityInstanceConnectedParticipants)();
    default:
      return null
  }
}