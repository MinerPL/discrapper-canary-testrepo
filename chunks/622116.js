"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("475179"),
  r = n("287734"),
  o = n("933557"),
  u = n("703656"),
  d = n("131704"),
  c = n("592125"),
  f = n("430824"),
  E = n("699516"),
  _ = n("594174"),
  T = n("797053"),
  m = n("934415"),
  I = n("900849"),
  p = n("981631");

function h(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: h,
    className: N,
    openChatWithoutConnecting: S
  } = e, C = (0, a.useStateFromStores)([_.default, E.default], () => null == t ? "" : (0, o.computeChannelName)(t, _.default, E.default), [t]);
  return (0, s.jsx)(l.Tooltip, {
    text: C,
    position: "top",
    children: e => {
      let {
        onMouseEnter: a,
        onMouseLeave: o
      } = e;
      return (0, s.jsx)(T.default, {
        role: "link",
        className: N,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != h && h(), (0, l.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let s = f.default.getGuild(e);
            if ((null == s ? void 0 : s.joinedAt) == null) {
              I.startLurking(e, {}, {
                channelId: t
              });
              return
            }
            let a = c.default.getChannel(t);
            if (null != a && (0, d.isGuildVocalChannelType)(a.type)) {
              if (n) {
                i.default.updateChatOpen(a.id, !0), (0, u.transitionTo)(p.Routes.CHANNEL(e, t));
                return
              }
              r.default.selectVoiceChannel(a.id);
              return
            }(0, u.transitionTo)(p.Routes.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, S))
        },
        onMouseEnter: a,
        onMouseLeave: o,
        iconType: (0, m.getMentionIconType)(t),
        children: C
      })
    }
  })
}