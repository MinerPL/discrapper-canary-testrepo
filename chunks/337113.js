"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var s = a("37983");
a("884691");
var n = a("414456"),
  l = a.n(n),
  r = a("866227"),
  i = a.n(r),
  o = a("77078"),
  u = a("32238"),
  d = a("718517"),
  c = a("782340"),
  m = a("704194"),
  h = e => {
    let {
      rateLimitPerUser: t,
      slowmodeCooldownGuess: a,
      isBypassSlowmode: n,
      leadingIcon: r = !1
    } = e, h = "", f = "";
    if (t >= d.default.Seconds.HOUR) {
      let e = Math.floor(t / d.default.Seconds.HOUR),
        a = Math.floor((t - e * d.default.Seconds.HOUR) / d.default.Seconds.MINUTE),
        s = t - e * d.default.Seconds.HOUR - a * d.default.Seconds.MINUTE;
      f = c.default.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
        hours: e,
        minutes: a,
        seconds: s
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
    if (!n && a > 0) {
      let e = i.duration(a);
      if (a > d.default.Millis.HOUR) {
        let t = "".concat(e.minutes()).padStart(2, "0"),
          a = "".concat(e.seconds()).padStart(2, "0");
        h = "".concat(e.hours(), ":").concat(t, ":").concat(a)
      } else {
        let t = "".concat(e.seconds()).padStart(2, "0");
        h = "".concat(e.minutes(), ":").concat(t)
      }
    } else h = n ? c.default.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : c.default.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
    let g = (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: h
      }),
      x = (0, s.jsx)(u.default, {
        className: l(m.slowModeIcon, {
          [m.leadingIcon]: r
        })
      });
    return (0, s.jsx)(o.Tooltip, {
      text: f,
      children: e => (0, s.jsx)("div", {
        className: m.cooldownWrapper,
        ...e,
        children: r ? (0, s.jsxs)(s.Fragment, {
          children: [x, g]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [g, x]
        })
      })
    })
  }