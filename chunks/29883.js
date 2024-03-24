"use strict";
n.r(t), n.d(t, {
  useJoinOrStartButtonState: function() {
    return o
  }
});
var s, l, a = n("884691"),
  i = n("501260"),
  r = n("782340");

function o(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: s
  } = e;
  return a.useMemo(() => (function(e) {
    let {
      embeddedActivity: t,
      joinability: n,
      currentEmbeddedActivity: s
    } = e, l = null == t, a = {
      disabled: !1,
      isJoinAction: !l,
      text: l ? r.default.Messages.START : r.default.Messages.EMBEDDED_ACTIVITIES_JOIN,
      tooltip: void 0
    }, o = null != t && null != s && t.instanceId === s.instanceId;
    if (o) return {
      ...a,
      disabled: !0,
      text: r.default.Messages.EMBEDDED_ACTIVITIES_JOINED,
      tooltip: r.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
    };
    if (null != n && n !== i.EmbeddedActivityJoinability.CAN_JOIN) {
      let e;
      switch (n) {
        case i.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
          e = r.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case i.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
          e = r.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case i.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
          e = r.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
          break;
        case i.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
          e = r.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS;
          break;
        case i.EmbeddedActivityJoinability.CHANNEL_FULL:
          e = r.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL;
          break;
        case i.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
          e = r.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION;
          break;
        case i.EmbeddedActivityJoinability.NO_CHANNEL:
        case i.EmbeddedActivityJoinability.NO_GUILD:
        case i.EmbeddedActivityJoinability.NO_USER:
        case i.EmbeddedActivityJoinability.IS_AFK_CHANNEL:
          e = r.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL
      }
      return {
        ...a,
        disabled: !0,
        tooltip: e
      }
    }
    return a
  })({
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: s
  }), [t, n, s])
}(s = l || (l = {}))[s.ACTIVE = 0] = "ACTIVE", s[s.ENDED = 1] = "ENDED"