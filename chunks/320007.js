n.d(t, {
  Z: function() {
return N;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(665149),
  o = n(618158),
  c = n(819640),
  d = n(131951),
  u = n(924557),
  _ = n(435064),
  E = n(779618),
  I = n(175470),
  m = n(203259),
  T = n(356659),
  h = n(689938);

function N(e) {
  let {
canShowReminder: t = !1,
className: N
  } = e, f = (0, E.Z)(d.Z), {
showClipsHeaderEntrypoint: p
  } = u.NV.useExperiment({
location: 'ClipsButton'
  }, {
autoTrackExposure: !1
  }), {
hasClips: C,
hasNewClips: g,
lastClipsSession: S,
remindersEnabled: A,
hasAnyClipAnimations: R
  } = (0, s.cj)([_.Z], () => ({
hasClips: _.Z.hasClips(),
hasNewClips: _.Z.getNewClipIds().length > 0,
lastClipsSession: _.Z.getLastClipsSession(),
remindersEnabled: _.Z.getSettings().remindersEnabled,
hasAnyClipAnimations: _.Z.hasAnyClipAnimations()
  })), x = null != S && S.newClipIds.length > 0, O = (0, I.n)(e => e.clipsButtonRef), M = (0, I.n)(e => e.setClipsButtonRef), v = (0, s.e7)([c.Z], () => c.Z.hasLayers()), {
preventIdle: L,
allowIdle: Z
  } = (0, o.Y)('animation');

  function P() {
(0, r.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('2668'),
    n.e('50779')
  ]).then(n.bind(n, 542055));
  return t => (0, i.jsx)(e, {
    ...t
  });
}, {
  modalKey: T.Qr
});
  }
  return (a.useEffect(() => (R ? L() : Z(), () => Z()), [
R,
L,
Z
  ]), p && f && C) ? (0, i.jsxs)(i.Fragment, {
children: [
  null != O && t && A && x && !(0, r.hasAnyModalOpen)() && !v && (0, i.jsx)(m.Z, {
    clipIconRef: O,
    lastClipsSession: S,
    onOpenClipsGallery: P
  }),
  (0, i.jsx)('div', {
    ref: M,
    children: (0, i.jsx)(l.JO, {
      className: N,
      icon: r.ClipsIcon,
      showBadge: g,
      tooltip: h.Z.Messages.CLIPS_GALLERY_TOOLTIP,
      onClick: P
    })
  })
]
  }) : null;
}