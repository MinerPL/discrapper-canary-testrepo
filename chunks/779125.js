n.d(t, {
  Z: function() {
return C;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(475179),
  l = n(287734),
  o = n(933557),
  c = n(124072),
  u = n(703656),
  d = n(131704),
  _ = n(592125),
  E = n(430824),
  I = n(699516),
  m = n(594174),
  T = n(934415),
  h = n(900849),
  N = n(981631);

function C(e) {
  let {
channel: t,
onClick: n,
beforeTransition: C,
className: f,
openChatWithoutConnecting: p
  } = e, g = (0, s.e7)([
m.default,
I.Z
  ], () => null == t ? '' : (0, o.F6)(t, m.default, I.Z), [t]);
  return (0, i.jsx)(a.Tooltip, {
text: g,
position: 'top',
children: e => {
  let {
    onMouseEnter: s,
    onMouseLeave: o
  } = e;
  return (0, i.jsx)(c.Z, {
    role: 'link',
    className: f,
    onClick: e => {
      e.stopPropagation(), null != n ? n() : (null != C && C(), (0, a.closeAllModals)(), ! function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e || null == t)
          return;
        let i = E.Z.getGuild(e);
        if ((null == i ? void 0 : i.joinedAt) == null) {
          h.Ub(e, {}, {
            channelId: t
          });
          return;
        }
        let s = _.Z.getChannel(t);
        if (null != s && (0, d.bw)(s.type)) {
          if (n) {
            r.Z.updateChatOpen(s.id, !0), (0, u.uL)(N.Z5c.CHANNEL(e, t));
            return;
          }
          l.default.selectVoiceChannel(s.id);
          return;
        }
        (0, u.uL)(N.Z5c.CHANNEL(e, t));
      }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, p));
    },
    onMouseEnter: s,
    onMouseLeave: o,
    iconType: (0, T.wl)(t),
    children: g
  });
}
  });
}