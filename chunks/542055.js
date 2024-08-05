n.r(t), n.d(t, {
  default: function() {
return Z;
  }
}), n(47120);
var a = n(735250),
  l = n(470079),
  s = n(658722),
  i = n.n(s),
  o = n(392711),
  r = n.n(o),
  c = n(990547),
  d = n(442837),
  u = n(952265),
  m = n(481060),
  p = n(100527),
  C = n(906732),
  g = n(213609),
  h = n(709054),
  v = n(435064),
  x = n(39604),
  f = n(680056),
  E = n(10217),
  L = n(410426),
  S = n(207346),
  I = n(356659),
  N = n(847024);

function Z(e) {
  let {
channelId: t,
onClose: s,
transitionState: o
  } = e, [Z, M] = l.useState(''), [_, T] = l.useState('descending'), [j, b] = l.useState(!0), [A, P] = l.useState(null), k = l.useDeferredValue(Z), R = (0, d.e7)([v.Z], () => v.Z.getClips()), y = (0, d.e7)([v.Z], () => v.Z.getPendingClips()), B = (0, d.e7)([v.Z], () => v.Z.getSettings().storageLocation), D = (0, d.Wu)([v.Z], () => v.Z.getNewClipIds()), {
analyticsLocations: H
  } = (0, C.ZP)(p.Z.CLIPS_GALLERY), w = l.useMemo(() => [
...y,
...R
  ], [
R,
y
  ]);
  (0, g.Z)({
type: c.ImpressionTypes.MODAL,
name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
properties: {
  number_of_clips_loaded: w.length
}
  }, {
disableTrack: j
  }, [
w.length,
j
  ]), l.useEffect(() => ((0, x.eL)(), () => {
(0, x.eL)(), (0, x.zq)();
  }), []);
  let V = l.useMemo(() => r()(w).filter(e => {
if ('' === k.trim())
  return !0;
let t = k.toLowerCase();
return null != e.name && '' !== e.name && i()(t, e.name.toLowerCase()) || i()(t, e.applicationName.toLowerCase());
  }).sort((e, t) => 'ascending' === _ ? h.default.compare(e.id, t.id) : 'descending' === _ ? h.default.compare(t.id, e.id) : 0).chunk(3).value(), [
w,
k,
_
  ]);
  l.useEffect(() => {
(async function e() {
  b(!0);
  try {
    await x.jv(B);
  } finally {
    b(!1);
  }
}());
  }, [B]);
  let G = l.useCallback(e => {
  (0, m.openModalLazy)(async () => {
    let {
      default: l
    } = await n.e('61526').then(n.bind(n, 22989));
    return n => (0, a.jsx)(l, {
      ...n,
      channelId: t,
      clip: e
    });
  }, {
    modalKey: I.Ut
  });
}, [t]),
{
  onShareClick: O
} = (0, f.Z)({
  channelId: t,
  setExporting: P
}),
z = l.useCallback((e, t) => {
  (0, m.openModalLazy)(async () => {
    let {
      default: l
    } = await n.e('15915').then(n.bind(n, 799677));
    return n => (0, a.jsx)(l, {
      clip: e,
      ...n,
      onBeforeDelete: t,
      onAfterDelete: () => n.onClose()
    });
  });
}, []),
Y = l.useCallback(e => {
  let {
    row: t
  } = e, n = V[t];
  return (0, a.jsx)('div', {
    className: N.clipsRow,
    children: n.map(e => {
      let t = 0 === e.length;
      return (0, a.jsx)(E.Z, {
        actionsDisabled: null != A || t,
        exporting: A === e.id,
        isNew: D.includes(e.id),
        onDelete: z,
        onEdit: G,
        onShare: e => O({
          clip: e,
          onShareComplete: () => u.Mr(I.Qr)
        }),
        clip: e
      }, e.id);
    })
  }, 'clips-gallery-'.concat(t));
}, [
  V,
  D,
  A,
  O,
  z,
  G
]),
F = j || 0 !== V.length ? j ? (0, a.jsx)('div', {
  className: N.spinnerContainer,
  children: (0, a.jsx)(m.Spinner, {})
}) : (0, a.jsx)(m.List, {
  className: N.clipGrid,
  sections: [V.length],
  sectionHeight: 0,
  rowHeight: 328.25,
  renderRow: Y
}) : (0, a.jsx)(L.Z, {
  isEmptyBecauseQuery: w.length > 0,
  closePopout: s
});
  return (0, a.jsx)(m.ModalRoot, {
size: m.ModalSize.DYNAMIC,
transitionState: o,
className: N.root,
children: (0, a.jsxs)(C.Gt, {
  value: H,
  children: [
    (0, a.jsx)(S.Z, {
      onClose: s,
      filterQuery: Z,
      setFilterQuery: M,
      sortOrder: _,
      setSortOrder: T
    }),
    F
  ]
})
  });
}