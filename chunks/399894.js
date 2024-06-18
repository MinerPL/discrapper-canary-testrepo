"use strict";
var s = n(735250);
n(470079);
var l = n(120356),
  a = n.n(l),
  i = n(913527),
  r = n.n(i),
  o = n(481060),
  c = n(199882),
  d = n(70956),
  u = n(689938),
  h = n(978017);
t.Z = e => {
  let {
    rateLimitPerUser: t,
    slowmodeCooldownGuess: n,
    isBypassSlowmode: l,
    leadingIcon: i = !1
  } = e, m = "", g = "";
  if (t >= d.Z.Seconds.HOUR) {
    let e = Math.floor(t / d.Z.Seconds.HOUR),
      n = Math.floor((t - e * d.Z.Seconds.HOUR) / d.Z.Seconds.MINUTE),
      s = t - e * d.Z.Seconds.HOUR - n * d.Z.Seconds.MINUTE;
    g = u.Z.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
      hours: e,
      minutes: n,
      seconds: s
    })
  } else if (t >= 60) {
    let e = Math.floor(t / 60);
    g = u.Z.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
      minutes: e,
      seconds: t - 60 * e
    })
  } else g = u.Z.Messages.FORUM_SLOWMODE_DESC.format({
    seconds: t
  });
  if (!l && n > 0) {
    let e = r().duration(n);
    if (n > d.Z.Millis.HOUR) {
      let t = "".concat(e.minutes()).padStart(2, "0"),
        n = "".concat(e.seconds()).padStart(2, "0");
      m = "".concat(e.hours(), ":").concat(t, ":").concat(n)
    } else {
      let t = "".concat(e.seconds()).padStart(2, "0");
      m = "".concat(e.minutes(), ":").concat(t)
    }
  } else m = l ? u.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : u.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
  let x = (0, s.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: m
    }),
    _ = (0, s.jsx)(c.Z, {
      className: a()(h.slowModeIcon, {
        [h.leadingIcon]: i
      })
    });
  return (0, s.jsx)(o.Tooltip, {
    text: g,
    children: e => (0, s.jsx)("div", {
      className: h.cooldownWrapper,
      ...e,
      children: i ? (0, s.jsxs)(s.Fragment, {
        children: [_, x]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [x, _]
      })
    })
  })
}