n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  l = n(479313),
  r = n(765104),
  o = n(626135),
  c = n(665149),
  u = n(981631),
  d = n(814249),
  h = n(689938);

function m(e) {
  let {
channel: t
  } = e, n = (0, a.e7)([r.Z], () => r.Z.shouldShowTopicsBar());
  return (0, i.jsx)(c.ZP.Icon, {
icon: s.TopicsIcon,
onClick: () => {
  o.default.track(u.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
    summaries_sidebar_open: !n,
    source: d.Dc.TOOLBAR_BUTTON,
    guild_id: t.guild_id,
    channel_id: t.id,
    channel_type: t.type
  }), (0, l.e7)();
},
tooltip: n ? h.Z.Messages.SUMMARIES_SHOWN : h.Z.Messages.SUMMARIES_HIDDEN,
selected: n,
'aria-expanded': n
  });
}