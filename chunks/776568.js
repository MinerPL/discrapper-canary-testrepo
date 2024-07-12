s.d(t, {
  ZP: function() {
return g;
  },
  k: function() {
return A;
  }
}), s(47120);
var n = s(735250);
s(470079);
var a = s(913527),
  i = s.n(a),
  _ = s(442837),
  l = s(481060),
  L = s(211739),
  u = s(92114),
  E = s(777861),
  r = s(9156),
  M = s(621600),
  d = s(933557),
  O = s(981631),
  N = s(969943),
  c = s(689938);
let A = () => [{
  value: N.Oe.MINUTES_15,
  label: c.Z.Messages.MUTE_DURATION_15_MINUTES
},
{
  value: N.Oe.HOURS_1,
  label: c.Z.Messages.MUTE_DURATION_1_HOUR
},
{
  value: N.Oe.HOURS_3,
  label: c.Z.Messages.MUTE_DURATION_3_HOURS
},
{
  value: N.Oe.HOURS_8,
  label: c.Z.Messages.MUTE_DURATION_8_HOURS
},
{
  value: N.Oe.HOURS_24,
  label: c.Z.Messages.MUTE_DURATION_24_HOURS
},
{
  value: N.Oe.ALWAYS,
  label: c.Z.Messages.MUTE_DURATION_ALWAYS
}
  ],
  o = e => {
let t = e > 0 ? i()().add(e, 'second').toISOString() : null;
return {
  muted: !0,
  mute_config: {
    selected_time_window: e,
    end_time: t
  }
};
  };

function g(e, t) {
  let [s, a] = (0, _.Wu)([r.ZP], () => [
r.ZP.isChannelMuted(e.guild_id, e.id),
r.ZP.getChannelMuteConfig(e.guild_id, e.id)
  ]), i = (0, E.U)(a), N = (0, d.ZP)(e, !0);

  function g(t) {
t && e.type === O.d4z.GUILD_CATEGORY && (0, L.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
  muted: t
}, M.UE.muted(t));
  }
  let T = c.Z.Messages.MUTE_CHANNEL_GENERIC,
Z = c.Z.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
case O.d4z.GUILD_CATEGORY:
  T = c.Z.Messages.MUTE_CATEGORY, Z = c.Z.Messages.UNMUTE_CATEGORY;
  break;
case O.d4z.GROUP_DM:
  T = c.Z.Messages.MUTE_CONVERSATION, Z = c.Z.Messages.UNMUTE_CONVERSATION;
  break;
case O.d4z.DM:
  T = c.Z.Messages.MUTE_CHANNEL.format({
    name: N
  }), Z = c.Z.Messages.UNMUTE_CHANNEL.format({
    name: N
  });
  break;
default:
  T = c.Z.Messages.MUTE_CHANNEL_GENERIC, Z = c.Z.Messages.UNMUTE_CHANNEL_GENERIC;
  }
  return s ? (0, n.jsx)(l.MenuItem, {
id: 'unmute-channel',
label: Z,
subtext: i,
action: () => g(!1)
  }) : (0, n.jsx)(l.MenuItem, {
id: 'mute-channel',
label: T,
action: () => g(!0),
children: A().map(s => {
  let {
    value: a,
    label: i
  } = s;
  return (0, n.jsx)(l.MenuItem, {
    id: ''.concat(a),
    label: i,
    action: () => function(s) {
      e.type === O.d4z.GUILD_CATEGORY && (0, L.c4)(e.id);
      let n = o(s);
      u.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, M.ZB.Muted, t);
    }(a)
  }, a);
})
  });
}