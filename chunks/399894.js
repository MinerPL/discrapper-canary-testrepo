var a = n(735250);
n(470079);
var s = n(120356),
  r = n.n(s),
  l = n(913527),
  i = n.n(l),
  o = n(481060),
  c = n(70956),
  d = n(689938),
  u = n(589351);
t.Z = e => {
  let {
rateLimitPerUser: t,
slowmodeCooldownGuess: n,
isBypassSlowmode: s,
leadingIcon: l = !1
  } = e, m = '', h = '';
  if (t >= c.Z.Seconds.HOUR) {
let e = Math.floor(t / c.Z.Seconds.HOUR),
  n = Math.floor((t - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
  a = t - e * c.Z.Seconds.HOUR - n * c.Z.Seconds.MINUTE;
h = d.Z.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
  hours: e,
  minutes: n,
  seconds: a
});
  } else if (t >= 60) {
let e = Math.floor(t / 60);
h = d.Z.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
  minutes: e,
  seconds: t - 60 * e
});
  } else
h = d.Z.Messages.FORUM_SLOWMODE_DESC.format({
  seconds: t
});
  if (!s && n > 0) {
let e = i().duration(n);
if (n > c.Z.Millis.HOUR) {
  let t = ''.concat(e.minutes()).padStart(2, '0'),
    n = ''.concat(e.seconds()).padStart(2, '0');
  m = ''.concat(e.hours(), ':').concat(t, ':').concat(n);
} else {
  let t = ''.concat(e.seconds()).padStart(2, '0');
  m = ''.concat(e.minutes(), ':').concat(t);
}
  } else
m = s ? d.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : d.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
  let _ = (0, a.jsx)(o.Text, {
  variant: 'text-sm/normal',
  color: 'text-muted',
  children: m
}),
g = (0, a.jsx)(o.TimerIcon, {
  size: 'xs',
  color: 'currentColor',
  className: r()(u.slowModeIcon, {
    [u.leadingIcon]: l
  })
});
  return (0, a.jsx)(o.Tooltip, {
text: h,
children: e => (0, a.jsx)('div', {
  className: u.cooldownWrapper,
  ...e,
  children: l ? (0, a.jsxs)(a.Fragment, {
    children: [
      g,
      _
    ]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [
      _,
      g
    ]
  })
})
  });
};