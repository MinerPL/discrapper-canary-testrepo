var r = n(735250);
n(470079);
var i = n(392711),
  a = n(481060),
  s = n(570140),
  o = n(846027),
  l = n(872810),
  u = n(695346),
  c = n(199902),
  d = n(314897),
  _ = n(650774),
  E = n(19780),
  f = n(594174),
  h = n(449753),
  p = n(569545),
  m = n(803647),
  I = n(70722),
  T = n(981631);
let g = (0, i.debounce)(l.xc, 1000);
t.Z = {
  init() {
h.Z.init(), s.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', e => {
  let {
    videoState: t
  } = e, n = c.Z.getCurrentUserActiveStream();
  if (null != n) {
    let e = t === T.FQ1.PAUSED;
    (0, l.tK)(n, e);
  }
}), s.Z.subscribe('STREAM_DELETE', e => {
  e.reason === T.si2.STREAM_FULL && ((0, l.aP)(e.streamKey, !1), (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('63757').then(n.bind(n, 309690));
    return t => (0, r.jsx)(e, {
      ...t
    });
  }));
}), s.Z.subscribe('STREAM_WATCH', e => {
  let {
    streamKey: t,
    allowMultiple: n
  } = e;
  if (n)
    return;
  let r = (0, p.my)(t);
  c.Z.getAllActiveStreams().forEach(e => {
    if (e.ownerId !== r.ownerId && e.ownerId !== d.default.getId())
      e.ownerId === d.default.getId() && o.Z.setGoLiveSource(null), (0, l.aP)((0, p.V9)(e), !1);
  });
}), s.Z.subscribe('VOICE_STATE_UPDATES', e => {
  let {
    voiceStates: t
  } = e;
  t.forEach(e => {
    let {
      userId: t
    } = e;
    if (t !== d.default.getId())
      return;
    let n = c.Z.getAllActiveStreams(),
      r = E.Z.getChannelId();
    n.forEach(e => {
      e.channelId !== r && (0, m.Z)(e, !1);
    });
  });
}), s.Z.subscribe('STREAM_CREATE', e => {
  var t;
  let {
    streamKey: n
  } = e, {
    ownerId: r,
    guildId: i
  } = (0, p.my)(n);
  if (null == i || null == r || r !== (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id))
    return;
  let a = _.Z.getMemberCount(i);
  if (null != a && !(a < 2) && !(a > I.tB))
    u.eo.getSetting() && g(n);
});
  }
};