"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("774078"),
  i = s("55935"),
  r = s("689938");
t.default = function(e) {
  let {
    className: t,
    cooldown: s
  } = e, o = (0, l.default)(s);
  return (0, a.jsx)(n.Text, {
    className: t,
    variant: "text-sm/medium",
    color: "text-muted",
    children: (0, i.unitsAsStrings)(o, {
      days: r.default.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_DAYS,
      hours: r.default.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_HOURS,
      minutes: r.default.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN_MINUTES
    })
  })
}