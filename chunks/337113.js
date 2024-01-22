"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  r = s("866227"),
  i = s.n(r),
  o = s("77078"),
  u = s("32238"),
  d = s("718517"),
  c = s("782340"),
  m = s("17366"),
  h = e => {
    let {
      rateLimitPerUser: t,
      slowmodeCooldownGuess: s,
      isBypassSlowmode: n,
      leadingIcon: r = !1
    } = e, h = "", f = "";
    if (t >= d.default.Seconds.HOUR) {
      let e = Math.floor(t / d.default.Seconds.HOUR),
        s = Math.floor((t - e * d.default.Seconds.HOUR) / d.default.Seconds.MINUTE),
        a = t - e * d.default.Seconds.HOUR - s * d.default.Seconds.MINUTE;
      f = c.default.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
        hours: e,
        minutes: s,
        seconds: a
      })
    } else if (t >= 60) {
      let e = Math.floor(t / 60);
      f = c.default.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
        minutes: e,
        seconds: t - 60 * e
      })
    } else f = c.default.Messages.FORUM_SLOWMODE_DESC.format({
      seconds: t
    });
    if (!n && s > 0) {
      let e = i.duration(s);
      if (s > d.default.Millis.HOUR) {
        let t = "".concat(e.minutes()).padStart(2, "0"),
          s = "".concat(e.seconds()).padStart(2, "0");
        h = "".concat(e.hours(), ":").concat(t, ":").concat(s)
      } else {
        let t = "".concat(e.seconds()).padStart(2, "0");
        h = "".concat(e.minutes(), ":").concat(t)
      }
    } else h = n ? c.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : c.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
    let g = (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: h
      }),
      x = (0, a.jsx)(u.default, {
        className: l(m.slowModeIcon, {
          [m.leadingIcon]: r
        })
      });
    return (0, a.jsx)(o.Tooltip, {
      text: f,
      children: e => (0, a.jsx)("div", {
        className: m.cooldownWrapper,
        ...e,
        children: r ? (0, a.jsxs)(a.Fragment, {
          children: [x, g]
        }) : (0, a.jsxs)(a.Fragment, {
          children: [g, x]
        })
      })
    })
  }