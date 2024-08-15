t.d(l, {
  Z: function() {
return M;
  }
});
var n = t(735250),
  d = t(470079),
  i = t(913527),
  u = t.n(i),
  a = t(442837),
  s = t(481060),
  r = t(92114),
  o = t(776568),
  c = t(818083),
  f = t(9156),
  E = t(621600),
  _ = t(689938);
let m = (0, c.B)({
  kind: 'user',
  id: '2022-02_guild_folder_mute',
  label: 'Guild Folder Mute',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Enabled',
config: {
  enabled: !0
}
  }]
});

function M(e, l) {
  let {
enabled: t
  } = m.useExperiment({
location: '74d87e_1'
  }, {
autoTrackExposure: !1
  }), i = (0, a.cj)([f.ZP], () => Object.fromEntries(e.map(e => [
e,
f.ZP.isMuted(e)
  ])), [e]), c = d.useCallback(t => {
let n = Object.fromEntries(e.filter(e => !i[e]).map(e => [
  e,
  {
    muted: !0,
    mute_config: null != t ? {
      selected_time_window: t,
      end_time: t > 0 ? u()().add(t, 'second').toISOString() : null
    } : void 0
  }
]));
r.Z.updateGuildNotificationSettingsBulk(n, E.ZB.Muted, l);
  }, [
e,
l,
i
  ]), M = d.useCallback(() => {
r.Z.updateGuildNotificationSettingsBulk(Object.fromEntries(e.filter(e => i[e]).map(e => [
  e,
  {
    muted: !1
  }
])), E.ZB.Unmuted, l);
  }, [
e,
l,
i
  ]);
  return t ? (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(s.MenuItem, {
    id: 'mute-folder',
    label: _.Z.Messages.SERVER_FOLDER_MUTE_ALL,
    action: () => c(),
    children: (0, o.k)().map(e => {
      let {
        value: l,
        label: t
      } = e;
      return (0, n.jsx)(s.MenuItem, {
        id: ''.concat(l),
        label: t,
        action: () => c(l)
      }, l);
    })
  }),
  (0, n.jsx)(s.MenuItem, {
    id: 'unmute-folder',
    label: _.Z.Messages.SERVER_FOLDER_UNMUTE_ALL,
    action: M
  })
]
  }) : null;
}