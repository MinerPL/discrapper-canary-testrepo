n.d(t, {
  Z: function() {
return b;
  }
});
var i = n(735250);
n(470079);
var o = n(913527),
  a = n.n(o),
  r = n(442837),
  c = n(481060),
  l = n(92114),
  s = n(776568),
  d = n(777861),
  u = n(9156),
  _ = n(621600),
  g = n(689938);

function b(e, t) {
  let n = null == e ? void 0 : e.id,
{
  muted: o,
  muteConfig: b
} = (0, r.cj)([u.ZP], () => ({
  muted: null != n ? u.ZP.isMuted(n) : void 0,
  muteConfig: null != n ? u.ZP.getMuteConfig(n) : void 0
}), [n]),
m = (0, d.U)(b);
  return null == n ? null : o ? (0, i.jsx)(c.MenuItem, {
id: 'unmute-guild',
label: g.Z.Messages.UNMUTE_SERVER,
subtext: m,
action: () => l.Z.updateGuildNotificationSettings(n, {
  muted: !1
}, _.ZB.Unmuted)
  }) : (0, i.jsx)(c.MenuItem, {
id: 'mute-guild',
label: g.Z.Messages.MUTE_SERVER,
action: () => l.Z.updateGuildNotificationSettings(n, {
  muted: !0
}, _.ZB.Muted),
children: (0, s.k)().map(e => {
  let {
    value: o,
    label: r
  } = e;
  return (0, i.jsx)(c.MenuItem, {
    id: ''.concat(o),
    label: r,
    action: () => function(e) {
      if (null == n)
        return;
      let i = e > 0 ? a()().add(e, 'second').toISOString() : null;
      l.Z.updateGuildNotificationSettings(n, {
        muted: !0,
        mute_config: {
          selected_time_window: e,
          end_time: i
        }
      }, _.ZB.Muted, t);
    }(o)
  }, o);
})
  });
}