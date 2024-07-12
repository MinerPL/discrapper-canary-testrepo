n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(557711),
  a = n(620662),
  o = n(503438),
  s = n(981631),
  l = n(569542);

function u(e) {
  let {
activity: t,
user: n,
guildId: u,
channelId: c,
source: d,
look: _,
color: E,
onAction: f
  } = e;
  return null != t && (0, a.Z)(t, s.xjy.SYNC) && (0, o.Z)(t) ? (0, r.jsx)(i.Z, {
className: l.button,
size: l.buttonSize,
look: _,
color: E,
user: n,
activity: t,
guildId: null != u ? u : void 0,
channelId: c,
source: d,
onAction: f
  }, 'sync') : null;
}