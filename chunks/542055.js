n.r(t), n.d(t, {
  default: function() {
return _;
  }
}), n(47120);
var a = n(735250),
  l = n(470079),
  i = n(658722),
  s = n.n(i),
  o = n(392711),
  r = n.n(o),
  c = n(990547),
  d = n(442837),
  u = n(952265),
  m = n(481060),
  p = n(100527),
  C = n(906732),
  v = n(213609),
  g = n(709054),
  h = n(435064),
  x = n(39604),
  E = n(680056),
  f = n(10217),
  L = n(410426),
  I = n(207346),
  S = n(356659),
  M = n(847024);

function _(e) {
  let {
channelId: t,
onClose: i,
transitionState: o
  } = e, [_, N] = l.useState(''), [Z, T] = l.useState('descending'), [j, A] = l.useState(!0), [b, P] = l.useState(null), R = l.useDeferredValue(_), k = (0, d.e7)([h.Z], () => h.Z.getClips()), y = (0, d.e7)([h.Z], () => h.Z.getPendingClips()), B = (0, d.e7)([h.Z], () => h.Z.getSettings().storageLocation), D = (0, d.Wu)([h.Z], () => h.Z.getNewClipIds()), {
analyticsLocations: H
  } = (0, C.ZP)(p.Z.CLIPS_GALLERY), V = l.useMemo(() => [
...y,
...k
  ], [
k,
y
  ]);
  (0, v.Z)({
type: c.ImpressionTypes.MODAL,
name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
properties: {
  number_of_clips_loaded: V.length
}
  }, {
disableTrack: j
  }, [
V.length,
j
  ]), l.useEffect(() => ((0, x.eL)(), () => {
(0, x.eL)(), (0, x.zq)();
  }), []);
  let w = l.useMemo(() => r()(V).filter(e => {
if ('' === R.trim())
  return !0;
let t = R.toLowerCase();
return null != e.name && '' !== e.name && s()(t, e.name.toLowerCase()) || s()(t, e.applicationName.toLowerCase());
  }).sort((e, t) => 'ascending' === Z ? g.default.compare(e.id, t.id) : 'descending' === Z ? g.default.compare(t.id, e.id) : 0).chunk(3).value(), [
V,
R,
Z
  ]);
  l.useEffect(() => {
(async function e() {
  A(!0);
  try {
    await x.jv(B);
  } finally {
    A(!1);
  }
}());
  }, [B]);
  let Y = l.useCallback(e => {
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
    modalKey: S.Ut
  });
}, [t]),
{
  onShareClick: G
} = (0, E.Z)({
  channelId: t,
  setExporting: P
}),
O = l.useCallback((e, t) => {
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
z = l.useCallback(e => {
  let {
    row: t
  } = e, n = w[t];
  return (0, a.jsx)('div', {
    className: M.clipsRow,
    children: n.map(e => {
      let t = 0 === e.length;
      return (0, a.jsx)(f.Z, {
        actionsDisabled: null != b || t,
        exporting: b === e.id,
        isNew: D.includes(e.id),
        onDelete: O,
        onEdit: Y,
        onShare: e => G({
          clip: e,
          onShareComplete: () => u.Mr(S.Qr)
        }),
        clip: e
      }, e.id);
    })
  }, 'clips-gallery-'.concat(t));
}, [
  w,
  D,
  b,
  G,
  O,
  Y
]),
F = j || 0 !== w.length ? j ? (0, a.jsx)('div', {
  className: M.spinnerContainer,
  children: (0, a.jsx)(m.Spinner, {})
}) : (0, a.jsx)(m.List, {
  className: M.clipGrid,
  sections: [w.length],
  sectionHeight: 0,
  rowHeight: 328.25,
  renderRow: z
}) : (0, a.jsx)(L.Z, {
  isEmptyBecauseQuery: V.length > 0,
  closePopout: i
});
  return (0, a.jsx)(m.ModalRoot, {
size: m.ModalSize.DYNAMIC,
transitionState: o,
className: M.root,
children: (0, a.jsxs)(C.Gt, {
  value: H,
  children: [
    (0, a.jsx)(I.Z, {
      onClose: i,
      filterQuery: _,
      setFilterQuery: N,
      sortOrder: Z,
      setSortOrder: T
    }),
    F
  ]
})
  });
}