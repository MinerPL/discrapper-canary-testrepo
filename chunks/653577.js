"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("362721"),
  d = n("12498"),
  c = n("454585"),
  f = n("514342"),
  h = n("586791"),
  m = n("626135"),
  C = n("981631"),
  p = n("689938"),
  g = n("965752"),
  E = n("946278");

function _(e) {
  let {
    channel: t,
    connected: n,
    hovered: s,
    subtitle: _,
    onClick: S,
    enableHangStatus: I,
    allowChannelTopic: N
  } = e, T = (0, r.useStateFromStores)([d.default], () => d.default.getChannelStatus(t)), A = null != T && T.length > 0, L = (0, u.default)(t, !0), v = (!I || !!N) && L, x = null != _ && _.length > 0;
  a.useEffect(() => {
    A && m.default.track(C.AnalyticEvents.VOICE_CHANNEL_TOPIC_VIEWED, {
      guild_id: t.guild_id,
      channel_id: t.id
    })
  }, [t.id, A, t.guild_id]);
  let R = (0, o.useRedesignIconContext)().enabled ? 12 : 14;
  if (null == t.guild_id) return null;
  let M = i()(g.statusDiv, n && v ? g.hoverable : null);
  if (A) return (0, l.jsx)(o.Clickable, {
    className: M,
    onClick: v ? S : void 0,
    children: (0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: i()(g.statusText, E.markup),
      children: (0, l.jsx)(f.default, {
        children: c.default.parseVoiceChannelStatus(T, !0, {
          channelId: t.id
        })
      })
    })
  });
  if (n && v && (!x || s)) return (0, l.jsxs)(o.Clickable, {
    className: M,
    onClick: S,
    children: [(0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: g.statusText,
      children: p.default.Messages.VOICE_CHANNEL_SET_STATUS
    }), (0, l.jsx)(h.default, {
      className: g.pencilIcon,
      width: R,
      height: R
    })]
  });
  if (x) return (0, l.jsx)(f.default, {
    children: _
  });
  return null
}