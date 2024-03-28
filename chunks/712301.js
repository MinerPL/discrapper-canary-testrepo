"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
});
var a = l("735250");
l("470079");
var n = l("442837"),
  u = l("481060"),
  d = l("749210"),
  s = l("287734"),
  r = l("933557"),
  i = l("314897"),
  o = l("592125"),
  f = l("984933"),
  c = l("271383"),
  m = l("430824"),
  M = l("496675"),
  E = l("699516"),
  S = l("594174"),
  _ = l("979651"),
  g = l("934415"),
  I = l("700785"),
  C = l("981631"),
  R = l("689938");

function N(e, t) {
  let l = (0, n.useStateFromStores)([f.default], () => f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY], [t]),
    N = (0, n.useStateFromStores)([_.default, o.default], () => {
      let l = _.default.getUserVoiceChannelId(t, e.id);
      return o.default.getChannel(l)
    }, [t, e.id]);
  if ((0, n.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, e.id), [t, e.id]) || null == N) return null;
  let A = e.id === i.default.getId();
  if (!A && !M.default.can(C.Permissions.MOVE_MEMBERS, N)) return null;
  let T = l.filter(t => {
    let {
      channel: l
    } = t;
    return l.id !== N.id && (A ? M.default.can(C.Permissions.CONNECT, l) && !(0, g.isChannelFull)(l, _.default, m.default) : M.default.can(C.Permissions.MOVE_MEMBERS, l) && (M.default.can(C.Permissions.CONNECT, l) || I.can({
      permission: C.Permissions.CONNECT,
      user: e,
      context: l
    })) && !(0, g.isChannelFull)(l, _.default, m.default))
  });
  return 0 === T.length ? null : (0, a.jsx)(u.MenuItem, {
    id: "voice-move",
    label: R.default.Messages.MOVE_TO,
    children: T.map(l => {
      let {
        channel: n
      } = l;
      return (0, a.jsx)(u.MenuItem, {
        id: n.id,
        action: () => {
          var l;
          return l = n, void(e.id === i.default.getId() ? s.default.selectVoiceChannel(l.id) : d.default.setChannel(t, e.id, l.id))
        },
        label: (0, r.computeChannelName)(n, S.default, E.default)
      }, n.id)
    })
  })
}