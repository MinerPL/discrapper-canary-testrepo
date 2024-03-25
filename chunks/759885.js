"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("77078"),
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
    openChatWithoutConnecting: A
  } = e, C = (0, l.useStateFromStores)([_.default, f.default], () => null == t ? "" : (0, o.computeChannelName)(t, _.default, f.default), [t]);
  return (0, s.jsx)(a.Tooltip, {
    text: C,
    position: "top",
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: o
      } = e;
      return (0, s.jsx)(T.default, {
        role: "link",
        className: S,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != p && p(), (0, a.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let s = E.default.getGuild(e);
            if ((null == s ? void 0 : s.joinedAt) == null) {
              m.startLurking(e, {}, {
                channelId: t
              });
              return
            }
            let l = c.default.getChannel(t);
            if (null != l && (0, d.isGuildVocalChannelType)(l.type)) {
              if (n) {
                i.default.updateChatOpen(l.id, !0), (0, u.transitionTo)(N.Routes.CHANNEL(e, t));
                return
              }
              r.default.selectVoiceChannel(l.id);
              return
            }(0, u.transitionTo)(N.Routes.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, A))
        },
        onMouseEnter: l,
        onMouseLeave: o,
        iconType: (0, I.getMentionIconType)(t),
        children: C
      })
    }
  })
}