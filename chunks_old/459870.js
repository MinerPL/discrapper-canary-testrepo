"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
});
var a = l("37983");
l("884691");
var n = l("446674"),
  u = l("77078"),
  i = l("851387"),
  d = l("987317"),
  s = l("679653"),
  r = l("271938"),
  o = l("42203"),
  c = l("923959"),
  f = l("26989"),
  E = l("305961"),
  M = l("957255"),
  S = l("27618"),
  m = l("697218"),
  I = l("800762"),
  g = l("404008"),
  _ = l("991170"),
  h = l("49111"),
  A = l("782340");

function C(e, t) {
  let l = (0, n.useStateFromStores)([c.default], () => c.default.getChannels(t)[c.GUILD_VOCAL_CHANNELS_KEY], [t]),
    C = (0, n.useStateFromStores)([I.default, o.default], () => {
      let l = I.default.getUserVoiceChannelId(t, e.id);
      return o.default.getChannel(l)
    }, [t, e.id]),
    p = (0, n.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, e.id), [t, e.id]);
  if (p || null == C) return null;
  let N = e.id === r.default.getId();
  if (!N && !M.default.can(h.Permissions.MOVE_MEMBERS, C)) return null;
  let T = l.filter(t => {
    let {
      channel: l
    } = t;
    return l.id !== C.id && (N ? M.default.can(h.Permissions.CONNECT, l) && !(0, g.isChannelFull)(l, I.default, E.default) : M.default.can(h.Permissions.MOVE_MEMBERS, l) && (M.default.can(h.Permissions.CONNECT, l) || _.can({
      permission: h.Permissions.CONNECT,
      user: e,
      context: l
    })) && !(0, g.isChannelFull)(l, I.default, E.default))
  });
  return 0 === T.length ? null : (0, a.jsx)(u.MenuItem, {
    id: "voice-move",
    label: A.default.Messages.MOVE_TO,
    children: T.map(l => {
      let {
        channel: n
      } = l;
      return (0, a.jsx)(u.MenuItem, {
        id: n.id,
        action: () => {
          var l;
          return l = n, void(e.id === r.default.getId() ? d.default.selectVoiceChannel(l.id) : i.default.setChannel(t, e.id, l.id))
        },
        label: (0, s.computeChannelName)(n, m.default, S.default)
      }, n.id)
    })
  })
}