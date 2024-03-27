"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var a = n("446674"),
  l = n("77078"),
  i = n("255397"),
  r = n("987317"),
  o = n("679653"),
  u = n("393414"),
  d = n("233069"),
  c = n("42203"),
  E = n("305961"),
  f = n("27618"),
  _ = n("697218"),
  T = n("666897"),
  I = n("404008"),
  m = n("794818"),
  N = n("49111");

function p(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: p,
    className: S,
    openChatWithoutConnecting: C
  } = e, A = (0, a.useStateFromStores)([_.default, f.default], () => null == t ? "" : (0, o.computeChannelName)(t, _.default, f.default), [t]);
  return (0, s.jsx)(l.Tooltip, {
    text: A,
    position: "top",
    children: e => {
      let {
        onMouseEnter: a,
        onMouseLeave: o
      } = e;
      return (0, s.jsx)(T.default, {
        role: "link",
        className: S,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != p && p(), (0, l.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let s = E.default.getGuild(e);
            if ((null == s ? void 0 : s.joinedAt) == null) {
              m.startLurking(e, {}, {
                channelId: t
              });
              return
            }
            let a = c.default.getChannel(t);
            if (null != a && (0, d.isGuildVocalChannelType)(a.type)) {
              if (n) {
                i.default.updateChatOpen(a.id, !0), (0, u.transitionTo)(N.Routes.CHANNEL(e, t));
                return
              }
              r.default.selectVoiceChannel(a.id);
              return
            }(0, u.transitionTo)(N.Routes.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, C))
        },
        onMouseEnter: a,
        onMouseLeave: o,
        iconType: (0, I.getMentionIconType)(t),
        children: A
      })
    }
  })
}