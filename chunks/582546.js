n.d(t, {
  ZP: function() {
return E;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(503438),
  o = n(26033),
  l = n(740605),
  u = n(952164),
  c = n(594174),
  d = n(616922),
  _ = n(689938);

function E(e) {
  let {
activity: t,
entry: n,
user: E
  } = e, f = (0, i.e7)([c.default], () => c.default.getCurrentUser()), h = E.id === (null == f ? void 0 : f.id), p = function(e) {
let {
  activity: t,
  entry: n
} = e;
if (null != n)
  return function(e) {
    if (!(0, o.kx)(e) || null == e.extra.entries[0])
      return null;
    let t = e.extra.entries[0].media;
    return () => (0, l.o)(d.Hw.TRACK, t.external_id);
  }(n);
if (null != t) {
  var r;
  return r = t, (0, s.Z)(r) ? () => (0, u.aG)(r) : null;
}
return null;
  }({
entry: n,
activity: t
  });
  return h || null == p ? null : (0, r.jsx)(a.MenuItem, {
id: 'play-on-spotify',
label: _.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
action: p
  });
}