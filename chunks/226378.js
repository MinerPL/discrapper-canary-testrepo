"use strict";
n.r(t), n.d(t, {
  useJoinOrStartButtonState: function() {
    return u
  }
});
var s, a, l = n("470079"),
  i = n("867176"),
  r = n("527805"),
  o = n("689938");

function u(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: s,
    channel: a
  } = e;
  return l.useMemo(() => (function(e) {
    let {
      embeddedActivity: t,
      joinability: n,
      currentEmbeddedActivity: s,
      channel: a
    } = e, l = null == t, u = {
      disabled: !1,
      isJoinAction: !l,
      text: l ? o.default.Messages.START : o.default.Messages.EMBEDDED_ACTIVITIES_JOIN,
      tooltip: void 0
    }, d = (0, i.isActivitiesInTextEnabled)(a, l, "EmbeddedApplicationInstanceUtils");
    if (null != t && null != s && t.launchId === s.launchId) return {
      ...u,
      disabled: !0,
      text: o.default.Messages.EMBEDDED_ACTIVITIES_JOINED,
      tooltip: o.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
    };
    if (l) return {
      ...u,
      disabled: !d,
      tooltip: d ? void 0 : o.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START
    };
    if (null != n && n !== r.EmbeddedActivityJoinability.CAN_JOIN) {
      let e;
      switch (n) {
        case r.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
          e = o.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case r.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
          e = o.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case r.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
          e = o.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
          break;
        case r.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
          e = o.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS;
          break;
        case r.EmbeddedActivityJoinability.CHANNEL_FULL:
          e = o.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL;
          break;
        case r.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
          e = o.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION;
          break;
        case r.EmbeddedActivityJoinability.NO_CHANNEL:
        case r.EmbeddedActivityJoinability.NO_GUILD:
        case r.EmbeddedActivityJoinability.NO_USER:
        case r.EmbeddedActivityJoinability.IS_AFK_CHANNEL:
          e = o.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL
      }
      return {
        ...u,
        disabled: !0,
        tooltip: e
      }
    }
    return u
  })({
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: s,
    channel: a
  }), [t, n, s, a])
}(s = a || (a = {}))[s.ACTIVE = 0] = "ACTIVE", s[s.ENDED = 1] = "ENDED"