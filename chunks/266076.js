"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("43267"),
  r = n("93687"),
  o = n("785232");
t.default = l.memo(function(e) {
  let {
    channel: t,
    size: n,
    facepileSizeOverride: l,
    experimentLocation: u,
    isTyping: d,
    status: c,
    className: f,
    animated: h = !1,
    ...m
  } = e, {
    isFacepileEnabled: p
  } = r.default.useExperiment({
    location: u
  }, {
    autoTrackExposure: !0
  });
  return t.recipients.length >= 2 && p && null == t.icon ? (0, a.jsx)(o.default, {
    "aria-label": m["aria-label"],
    "aria-hidden": m["aria-hidden"],
    className: f,
    recipients: t.recipients,
    size: null != l ? l : n,
    isTyping: d,
    status: c
  }) : (0, a.jsx)(s.Avatar, {
    "aria-hidden": m["aria-hidden"],
    "aria-label": m["aria-label"],
    className: f,
    size: n,
    src: (0, i.getChannelIconURL)(t, 80, h)
  })
})