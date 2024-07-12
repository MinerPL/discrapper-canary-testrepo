n.d(t, {
  e: function() {
return C;
  }
});
var a = n(735250);
n(470079);
var l = n(481060),
  i = n(592125),
  s = n(703558),
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
editMetadata: v,
analyticsLocations: g
  } = t, h = i.Z.getChannel(C);
  if (null != h)
try {
  var x;
  let t = await (0, u.rO)(e, v),
    n = null !== (x = e.name) && void 0 !== x ? x : (0, m.yl)(r.default.extractTimestamp(e.id)),
    a = (0, d.Z)(n);
  (0, c.d)([new File([t], ''.concat('' !== a ? a : 'clip', '.mp4'), {
    type: 'video/mp4'
  })], h, s.d.ChannelMessage, {
    filesMetadata: [{
      clip: e
    }]
  }), o.default.track(p.rMx.CLIP_SHARED, {
    location_stack: g,
    guild_id: h.guild_id,
    channel_id: h.id,
    channel_type: h.type,
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
    editMetadata: v
  });
});
}