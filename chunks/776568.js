t.d(n, {
  ZP: function() {
return N;
  },
  k: function() {
return O;
  }
}), t(47120);
var i = t(735250);
t(470079);
var a = t(913527),
  u = t.n(a),
  r = t(442837),
  l = t(481060),
  d = t(211739),
  s = t(92114),
  o = t(777861),
  _ = t(9156),
  c = t(621600),
  E = t(933557),
  f = t(981631),
  T = t(969943),
  A = t(689938);
let O = () => [{
  value: T.Oe.MINUTES_15,
  label: A.Z.Messages.MUTE_DURATION_15_MINUTES
},
{
  value: T.Oe.HOURS_1,
  label: A.Z.Messages.MUTE_DURATION_1_HOUR
},
{
  value: T.Oe.HOURS_3,
  label: A.Z.Messages.MUTE_DURATION_3_HOURS
},
{
  value: T.Oe.HOURS_8,
  label: A.Z.Messages.MUTE_DURATION_8_HOURS
},
{
  value: T.Oe.HOURS_24,
  label: A.Z.Messages.MUTE_DURATION_24_HOURS
},
{
  value: T.Oe.ALWAYS,
  label: A.Z.Messages.MUTE_DURATION_ALWAYS
}
  ],
  M = e => {
let n = e > 0 ? u()().add(e, 'second').toISOString() : null;
return {
  muted: !0,
  mute_config: {
    selected_time_window: e,
    end_time: n
  }
};
  };

function N(e, n) {
  let [t, a] = (0, r.Wu)([_.ZP], () => [
_.ZP.isChannelMuted(e.guild_id, e.id),
_.ZP.getChannelMuteConfig(e.guild_id, e.id)
  ]), u = (0, o.U)(a), T = (0, E.ZP)(e, !0);

  function N(n) {
n && e.type === f.d4z.GUILD_CATEGORY && (0, d.c4)(e.id), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
  muted: n
}, c.UE.muted(n));
  }
  let I = A.Z.Messages.MUTE_CHANNEL_GENERIC,
S = A.Z.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
case f.d4z.GUILD_CATEGORY:
  I = A.Z.Messages.MUTE_CATEGORY, S = A.Z.Messages.UNMUTE_CATEGORY;
  break;
case f.d4z.GROUP_DM:
  I = A.Z.Messages.MUTE_CONVERSATION, S = A.Z.Messages.UNMUTE_CONVERSATION;
  break;
case f.d4z.DM:
  I = A.Z.Messages.MUTE_CHANNEL.format({
    name: T
  }), S = A.Z.Messages.UNMUTE_CHANNEL.format({
    name: T
  });
  break;
default:
  I = A.Z.Messages.MUTE_CHANNEL_GENERIC, S = A.Z.Messages.UNMUTE_CHANNEL_GENERIC;
  }
  return t ? (0, i.jsx)(l.MenuItem, {
id: 'unmute-channel',
label: S,
subtext: u,
action: () => N(!1)
  }) : (0, i.jsx)(l.MenuItem, {
id: 'mute-channel',
label: I,
action: () => N(!0),
children: O().map(t => {
  let {
    value: a,
    label: u
  } = t;
  return (0, i.jsx)(l.MenuItem, {
    id: ''.concat(a),
    label: u,
    action: () => function(t) {
      e.type === f.d4z.GUILD_CATEGORY && (0, d.c4)(e.id);
      let i = M(t);
      s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, c.ZB.Muted, n);
    }(a)
  }, a);
})
  });
}