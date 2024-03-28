"use strict";
n.r(t), n.d(t, {
  getTutorialPopoutAttributes: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("486458"),
  s = n("113570"),
  i = n("482641"),
  r = n("613725");
let o = Object.freeze({
    "voice-conversations": {
      popoutPosition: "right",
      highPriority: !0,
      textAlign: l.TextAlignments.CENTER,
      media: () => (0, a.jsx)(i.default, {})
    },
    "writing-messages": {
      popoutPosition: "top",
      highPriority: !0,
      textAlign: l.TextAlignments.CENTER,
      spacing: 10,
      media: () => (0, a.jsx)(r.default, {})
    },
    "direct-messages": {
      popoutPosition: "right"
    },
    "create-first-server": {
      popoutPosition: "right",
      highPriority: !0
    },
    "organize-by-topic": {
      popoutPosition: "right",
      textAlign: l.TextAlignments.CENTER,
      spacing: 8,
      media: () => (0, a.jsx)(s.default, {})
    },
    "instant-invite": {
      popoutPosition: "right",
      spacing: 24,
      highPriority: !0
    },
    "whos-online": {
      spacing: 16,
      popoutPosition: "left"
    },
    "server-settings": {
      popoutPosition: "bottom",
      spacing: 10
    },
    "friends-list": {
      spacing: 8,
      popoutPosition: "right"
    },
    "create-more-servers": {
      spacing: 8,
      popoutPosition: "right"
    }
  }),
  u = e => e in o ? o[e] : null