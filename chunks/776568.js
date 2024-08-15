_.d(E, {
  ZP: function() {
return G;
  },
  k: function() {
return T;
  }
}), _(47120);
var s = _(735250);
_(470079);
var t = _(913527),
  n = _.n(t),
  a = _(442837),
  M = _(481060),
  S = _(211739),
  r = _(92114),
  N = _(777861),
  u = _(9156),
  A = _(621600),
  O = _(933557),
  i = _(981631),
  l = _(969943),
  I = _(689938);
let T = () => [{
  value: l.Oe.MINUTES_15,
  label: I.Z.Messages.MUTE_DURATION_15_MINUTES
},
{
  value: l.Oe.HOURS_1,
  label: I.Z.Messages.MUTE_DURATION_1_HOUR
},
{
  value: l.Oe.HOURS_3,
  label: I.Z.Messages.MUTE_DURATION_3_HOURS
},
{
  value: l.Oe.HOURS_8,
  label: I.Z.Messages.MUTE_DURATION_8_HOURS
},
{
  value: l.Oe.HOURS_24,
  label: I.Z.Messages.MUTE_DURATION_24_HOURS
},
{
  value: l.Oe.ALWAYS,
  label: I.Z.Messages.MUTE_DURATION_ALWAYS
}
  ],
  L = e => {
let E = e > 0 ? n()().add(e, 'second').toISOString() : null;
return {
  muted: !0,
  mute_config: {
    selected_time_window: e,
    end_time: E
  }
};
  };

function G(e, E) {
  let [_, t] = (0, a.Wu)([u.ZP], () => [
u.ZP.isChannelMuted(e.guild_id, e.id),
u.ZP.getChannelMuteConfig(e.guild_id, e.id)
  ]), n = (0, N.U)(t), l = (0, O.ZP)(e, !0);

  function G(E) {
E && e.type === i.d4z.GUILD_CATEGORY && (0, S.c4)(e.id), r.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
  muted: E
}, A.UE.muted(E));
  }
  let R = I.Z.Messages.MUTE_CHANNEL_GENERIC,
C = I.Z.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
case i.d4z.GUILD_CATEGORY:
  R = I.Z.Messages.MUTE_CATEGORY, C = I.Z.Messages.UNMUTE_CATEGORY;
  break;
case i.d4z.GROUP_DM:
  R = I.Z.Messages.MUTE_CONVERSATION, C = I.Z.Messages.UNMUTE_CONVERSATION;
  break;
case i.d4z.DM:
  R = I.Z.Messages.MUTE_CHANNEL.format({
    name: l
  }), C = I.Z.Messages.UNMUTE_CHANNEL.format({
    name: l
  });
  break;
default:
  R = I.Z.Messages.MUTE_CHANNEL_GENERIC, C = I.Z.Messages.UNMUTE_CHANNEL_GENERIC;
  }
  return _ ? (0, s.jsx)(M.MenuItem, {
id: 'unmute-channel',
label: C,
subtext: n,
action: () => G(!1)
  }) : (0, s.jsx)(M.MenuItem, {
id: 'mute-channel',
label: R,
action: () => G(!0),
children: T().map(_ => {
  let {
    value: t,
    label: n
  } = _;
  return (0, s.jsx)(M.MenuItem, {
    id: ''.concat(t),
    label: n,
    action: () => function(_) {
      e.type === i.d4z.GUILD_CATEGORY && (0, S.c4)(e.id);
      let s = L(_);
      r.Z.updateChannelOverrideSettings(e.guild_id, e.id, s, A.ZB.Muted, E);
    }(t)
  }, t);
})
  });
}