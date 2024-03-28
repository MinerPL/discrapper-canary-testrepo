"use strict";
l.r(t);
var n = l("735250");
l("470079");
var u = l("593473"),
  a = l("613828"),
  i = l("442837"),
  r = l("287734"),
  o = l("703656"),
  d = l("592125"),
  s = l("896797"),
  c = l("998502"),
  f = l("981631");
i.default.initialize();
t.default = e => {
  var t;
  let {
    location: l
  } = e;
  return (0, n.jsx)(a.Redirect, {
    to: null !== (t = function e(t) {
      let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = d.default.getChannel(t);
      if (null != n) {
        c.default.focus();
        let e = n.guild_id,
          t = n.id;
        return n.type === f.ChannelTypes.GUILD_VOICE && (null != n.getGuildId() && r.default.selectVoiceChannel(n.id), t = e), null != t && null != e ? f.Routes.CHANNEL(e, t) : null
      }
      if (l) {
        let l = () => {
          d.default.removeChangeListener(l);
          let n = e(t, !1);
          null != n && (0, o.transitionTo)(n)
        };
        d.default.addChangeListener(l)
      }
      return null
    }((0, u.parse)(l.search).channelId)) && void 0 !== t ? t : s.default.fallbackRoute
  })
}