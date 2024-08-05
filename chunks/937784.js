n.d(t, {
  e: function() {
return C;
  }
});
var a = n(735250);
n(470079);
var l = n(481060),
  s = n(592125),
  i = n(703558),
  o = n(626135),
  r = n(709054),
  c = n(127654),
  d = n(61994),
  u = n(39604),
  m = n(356659),
  p = n(981631);
async function C(e, t) {
  let {
channelId: C,
editMetadata: g,
analyticsLocations: h
  } = t, v = s.Z.getChannel(C);
  if (null != v)
try {
  var x;
  let t = await (0, u.rO)(e, g),
    n = null !== (x = e.name) && void 0 !== x ? x : (0, m.yl)(r.default.extractTimestamp(e.id)),
    a = (0, d.Z)(n);
  (0, c.d)([new File([t], ''.concat('' !== a ? a : 'clip', '.mp4'), {
    type: 'video/mp4'
  })], v, i.d.ChannelMessage, {
    filesMetadata: [{
      clip: e
    }]
  }), o.default.track(p.rMx.CLIP_SHARED, {
    location_stack: h,
    guild_id: v.guild_id,
    channel_id: v.id,
    channel_type: v.type,
    application_id: e.applicationId,
    clip_id: e.id
  });
} catch (e) {
  throw m.jF.error(e), e;
}
  else
(0, l.openModalLazy)(async () => {
  let {
    default: t
  } = await n.e('99617').then(n.bind(n, 502801));
  return n => (0, a.jsx)(t, {
    ...n,
    clip: e,
    editMetadata: g
  });
});
}