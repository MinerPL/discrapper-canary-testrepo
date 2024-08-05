n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var a = n(913527),
  s = n.n(a),
  l = n(442837),
  r = n(481060),
  o = n(92114),
  c = n(776568),
  u = n(777861),
  d = n(9156),
  h = n(621600),
  p = n(689938);

function m(e, t) {
  let n = null == e ? void 0 : e.id,
{
  muted: a,
  muteConfig: m
} = (0, l.cj)([d.ZP], () => ({
  muted: null != n ? d.ZP.isMuted(n) : void 0,
  muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
}), [n]),
_ = (0, u.U)(m);
  return null == n ? null : a ? (0, i.jsx)(r.MenuItem, {
id: 'unmute-guild',
label: p.Z.Messages.UNMUTE_SERVER,
subtext: _,
action: () => o.Z.updateGuildNotificationSettings(n, {
  muted: !1
}, h.ZB.Unmuted)
  }) : (0, i.jsx)(r.MenuItem, {
id: 'mute-guild',
label: p.Z.Messages.MUTE_SERVER,
action: () => o.Z.updateGuildNotificationSettings(n, {
  muted: !0
}, h.ZB.Muted),
children: (0, c.k)().map(e => {
  let {
    value: a,
    label: l
  } = e;
  return (0, i.jsx)(r.MenuItem, {
    id: ''.concat(a),
    label: l,
    action: () => function(e) {
      if (null == n)
        return;
      let i = e > 0 ? s()().add(e, 'second').toISOString() : null;
      o.Z.updateGuildNotificationSettings(n, {
        muted: !0,
        mute_config: {
          selected_time_window: e,
          end_time: i
        }
      }, h.ZB.Muted, t);
    }(a)
  }, a);
})
  });
}