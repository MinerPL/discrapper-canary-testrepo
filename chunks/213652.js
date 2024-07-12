n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(481060),
  r = n(435064),
  o = n(39604),
  c = n(441167),
  d = n(871499),
  u = n(199902),
  h = n(314897),
  p = n(358221),
  m = n(354459),
  _ = n(689938),
  f = n(906570);

function E(e) {
  let {
channel: t
  } = e, n = (0, l.e7)([p.Z], () => p.Z.getSelectedParticipant(t.id)), E = (null == n ? void 0 : n.type) === m.fO.STREAM, C = (0, l.e7)([u.Z], () => E ? u.Z.getActiveStreamForStreamKey(n.id) : null), {
ignoreSenderPreference: g
  } = c.Z.useExperiment({
location: 'ActionBarClipsButton'
  }, {
autoTrackExposure: !1
  }), {
viewerClippingAllowed: I,
isAtMaxSavingClipOperations: x
  } = (0, l.cj)([r.Z], () => ({
viewerClippingAllowed: null != C && (r.Z.isViewerClippingAllowedForUser(C.ownerId) || g),
isAtMaxSavingClipOperations: r.Z.getIsAtMaxSaveClipOperations()
  })), T = r.Z.getSettings().clipsEnabled, v = (null == C ? void 0 : C.ownerId) === h.default.getId(), N = !T || !(v || I) || x || null == n, S = a.useCallback(e => (0, i.jsx)(s.CameraIcon, {
...e,
color: 'currentColor'
  }), []);
  return (0, i.jsx)(d.Z, {
className: f.actionBarButton,
onClick: () => {
  !N && (v ? (0, o.C1)() : (0, o.C1)(n.id));
},
disabled: N,
iconComponent: S,
label: null == C ? _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_FOCUS_TOOLTIP : v || I ? T ? x ? void 0 : _.Z.Messages.CLIPS_SAVE : _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_ENABLE_CLIPS_TOOLTIP : _.Z.Messages.CLIPS_VIEWERSIDE_BUTTON_DISABLED_TOOLTIP,
grow: !1
  });
}