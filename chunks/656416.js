"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var l = s("37983"),
  a = s("884691"),
  i = s("446674"),
  r = s("77078"),
  o = s("463848"),
  n = s("373469"),
  u = s("824563"),
  d = s("765698"),
  c = s("453649"),
  f = s("49111"),
  S = s("260787"),
  m = s("568719");

function E(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([n.default], () => null != n.default.getAnyStreamForUser(t.id)), E = (0, i.useStateFromStores)([u.default], () => u.default.getActivities(t.id)), T = a.useMemo(() => E.filter(e => e.type !== f.ActivityTypes.CUSTOM_STATUS), [E]), x = a.useMemo(() => s ? T.find(e => e.type === f.ActivityTypes.PLAYING) : null, [T, s]), N = a.useMemo(() => T.filter(e => e !== x), [x, T]), p = (0, c.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), h = null != p && !s, {
    showVoiceActivityInProfile: v
  } = d.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: h
  });
  return (0, l.jsxs)(r.ScrollerThin, {
    className: m.listScroller,
    fade: !0,
    children: [v && h ? (0, l.jsx)("div", {
      className: S.voiceActivity,
      children: (0, l.jsx)(c.default, {
        ...p,
        color: S.actionColor
      })
    }) : null, s ? (0, l.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: S.userProfileActivity,
      activity: x,
      actionColor: S.actionColor
    }) : null, N.map(e => (0, l.jsx)(o.default, {
      type: o.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: S.userProfileActivity,
      actionColor: S.actionColor
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}