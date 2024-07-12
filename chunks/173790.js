t.d(n, {
  Z: function() {
return C;
  }
});
var i = t(735250),
  l = t(470079),
  a = t(218061),
  r = t(481060),
  s = t(361213),
  o = t(778569),
  c = t(213459),
  u = t(835473),
  d = t(783097),
  m = t(753972),
  p = t(387658),
  _ = t(536650),
  E = t(675993),
  A = t(689079),
  h = t(689938),
  f = t(132439),
  N = t(413097);

function C(e) {
  var n;
  let {
channel: t,
application: s,
sectionName: o,
installOnDemand: C
  } = e, I = null !== (n = (0, u.q)(s.id === A.bi.BUILT_IN ? null : s.id)) && void 0 !== n ? n : s, P = (0, d.ye)({
application: I
  }), x = P ? v : E.Z, T = l.useRef(null), {
iconURL: g,
name: R
  } = l.useMemo(() => (0, d.sl)(I, {
botIconFirst: !P,
fakeAppIconURL: N,
size: 80
  }), [
I,
P
  ]);
  return l.useEffect(() => {
C ? c.ZP.queryInstallOnDemandApp(I.id, t.id) : c.ZP.maybeQueryForInstallLessApps(I.id, t.id);
  }, [
I.id,
t.id,
C
  ]), (0, i.jsxs)(r.ScrollerNone, {
className: f.container,
fade: !0,
ref: T,
role: 'region',
'aria-label': h.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_DETAILS_ARIA_LABEL.format({
  applicationName: R
}),
children: [
  (0, i.jsx)(_.Z, {
    name: R,
    iconURL: g,
    scrollerRef: T
  }),
  null != g && (0, i.jsx)(m.Z, {
    src: g,
    className: f.appIcon
  }),
  (0, i.jsx)(a.Z, {
    size: 54
  }),
  (0, i.jsx)(x, {
    channel: t,
    application: I,
    sectionName: o
  }),
  (0, i.jsx)(p.Z, {
    channel: t,
    application: I,
    sectionName: o,
    installOnDemand: C
  })
]
  });
}

function v(e) {
  let {
channel: n,
application: t,
sectionName: l
  } = e, a = (0, o.Z)({
applicationId: t.id,
size: 2048,
names: ['embedded_cover']
  }), r = (0, d.yJ)(t), c = null != r && null != r.activity_preview_video_asset_id ? (0, s.Z)(t.id, r.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(E.Z, {
channel: n,
application: t,
imageCoverUrl: a.url,
videoUrl: c,
sectionName: l
  });
}