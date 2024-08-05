t.d(n, {
  Z: function() {
return I;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(442837),
  o = t(218061),
  r = t(481060),
  s = t(361213),
  c = t(778569),
  u = t(213459),
  d = t(835473),
  m = t(541099),
  p = t(827498),
  _ = t(783097),
  C = t(753972),
  f = t(387658),
  h = t(536650),
  A = t(675993),
  E = t(689079),
  N = t(689938),
  v = t(132439),
  x = t(413097);

function I(e) {
  var n;
  let {
channel: t,
application: s,
sectionName: c,
installOnDemand: I
  } = e, P = (0, l.e7)([m.Z], () => m.Z.entrypoint()), S = null !== (n = (0, d.q)(s.id === E.bi.BUILT_IN ? null : s.id)) && void 0 !== n ? n : s, L = (0, _.ye)({
application: S
  }) ? g : A.Z, R = a.useRef(null), {
iconURL: T,
name: b
  } = a.useMemo(() => (0, _.sl)(S, {
fakeAppIconURL: x,
size: 84
  }), [S]);
  return a.useEffect(() => {
I ? u.ZP.queryInstallOnDemandApp(S.id, t.id) : u.ZP.maybeQueryForInstallLessApps(S.id, t.id);
  }, [
S.id,
t.id,
I
  ]), (0, i.jsxs)(r.ScrollerNone, {
className: v.container,
fade: !0,
ref: R,
role: 'region',
'aria-label': N.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_DETAILS_ARIA_LABEL.format({
  applicationName: b
}),
children: [
  (0, i.jsx)(h.Z, {
    name: b,
    iconURL: T,
    scrollerRef: R
  }),
  null != T && (0, i.jsx)(C.Z, {
    src: T,
    className: v.appIcon
  }),
  (0, i.jsx)(o.Z, {
    size: 54
  }),
  (0, i.jsx)(L, {
    channel: t,
    application: S,
    sectionName: c
  }),
  P === p._b.TEXT ? (0, i.jsx)(f.Z, {
    channel: t,
    application: S,
    sectionName: c,
    installOnDemand: I
  }) : null
]
  });
}

function g(e) {
  let {
channel: n,
application: t,
sectionName: a
  } = e, l = (0, c.Z)({
applicationId: t.id,
size: 2048,
names: ['embedded_cover']
  }), o = (0, _.yJ)(t), r = null != o && null != o.activity_preview_video_asset_id ? (0, s.Z)(t.id, o.activity_preview_video_asset_id) : null;
  return (0, i.jsx)(A.Z, {
channel: n,
application: t,
imageCoverUrl: l.url,
videoUrl: r,
sectionName: a
  });
}