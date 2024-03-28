"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("658722"),
  i = l.n(s),
  o = l("392711"),
  r = l.n(o),
  d = l("990547"),
  c = l("442837"),
  u = l("952265"),
  p = l("481060"),
  f = l("100527"),
  m = l("906732"),
  v = l("213609"),
  h = l("709054"),
  C = l("435064"),
  g = l("39604"),
  x = l("680056"),
  L = l("10217"),
  E = l("410426"),
  S = l("207346"),
  N = l("356659"),
  I = l("812007");

function _(e) {
  let {
    channelId: t,
    onClose: s,
    transitionState: o
  } = e, [_, j] = n.useState(""), [T, M] = n.useState("descending"), [y, A] = n.useState(!0), [P, R] = n.useState(null), b = n.useDeferredValue(_), D = (0, c.useStateFromStores)([C.default], () => C.default.getClips()), k = (0, c.useStateFromStores)([C.default], () => C.default.getPendingClips()), H = (0, c.useStateFromStores)([C.default], () => C.default.getSettings().storageLocation), w = (0, c.useStateFromStoresArray)([C.default], () => C.default.getNewClipIds()), {
    analyticsLocations: B
  } = (0, m.default)(f.default.CLIPS_GALLERY), V = n.useMemo(() => [...k, ...D], [D, k]);
  (0, v.default)({
    type: d.ImpressionTypes.MODAL,
    name: d.ImpressionNames.CLIP_GALLERY_VIEWED,
    properties: {
      number_of_clips_loaded: V.length
    }
  }, {
    disableTrack: y
  }, [V.length, y]), n.useEffect(() => ((0, g.clearClipsSession)(), () => {
    (0, g.clearClipsSession)(), (0, g.clearNewClipIds)()
  }), []);
  let O = n.useMemo(() => r()(V).filter(e => {
    if ("" === b.trim()) return !0;
    let t = b.toLowerCase();
    return null != e.name && "" !== e.name && i()(t, e.name.toLowerCase()) || i()(t, e.applicationName.toLowerCase())
  }).sort((e, t) => "ascending" === T ? h.default.compare(e.id, t.id) : "descending" === T ? h.default.compare(t.id, e.id) : 0).chunk(3).value(), [V, b, T]);
  n.useEffect(() => {
    (async function e() {
      A(!0);
      try {
        await g.loadClipsDirectory(H)
      } finally {
        A(!1)
      }
    })()
  }, [H]);
  let F = n.useCallback(e => {
      (0, p.openModalLazy)(async () => {
        let {
          default: n
        } = await Promise.all([l.e("99387"), l.e("98920")]).then(l.bind(l, "22989"));
        return l => (0, a.jsx)(n, {
          ...l,
          channelId: t,
          clip: e
        })
      }, {
        modalKey: N.CLIPS_EDIT_MODAL_KEY
      })
    }, [t]),
    {
      onShareClick: z
    } = (0, x.default)({
      channelId: t,
      setExporting: R
    }),
    G = n.useCallback((e, t) => {
      (0, p.openModalLazy)(async () => {
        let {
          default: n
        } = await Promise.all([l.e("99387"), l.e("15915")]).then(l.bind(l, "799677"));
        return l => (0, a.jsx)(n, {
          clip: e,
          ...l,
          onBeforeDelete: t,
          onAfterDelete: () => l.onClose()
        })
      })
    }, []),
    Y = n.useCallback(e => {
      let {
        row: t
      } = e, l = O[t];
      return (0, a.jsx)("div", {
        className: I.clipsRow,
        children: l.map(e => {
          let t = 0 === e.length;
          return (0, a.jsx)(L.default, {
            actionsDisabled: null != P || t,
            exporting: P === e.id,
            isNew: w.includes(e.id),
            onDelete: G,
            onEdit: F,
            onShare: e => z({
              clip: e,
              onShareComplete: () => u.closeModal(N.CLIPS_GALLERY_MODAL_KEY)
            }),
            clip: e
          }, e.id)
        })
      }, "clips-gallery-".concat(t))
    }, [O, w, P, z, G, F]),
    U = y || 0 !== O.length ? y ? (0, a.jsx)("div", {
      className: I.spinnerContainer,
      children: (0, a.jsx)(p.Spinner, {})
    }) : (0, a.jsx)(p.List, {
      className: I.clipGrid,
      sections: [O.length],
      sectionHeight: 0,
      rowHeight: 328.25,
      renderRow: Y
    }) : (0, a.jsx)(E.default, {
      isEmptyBecauseQuery: V.length > 0,
      closePopout: s
    });
  return (0, a.jsx)(p.ModalRoot, {
    size: p.ModalSize.DYNAMIC,
    transitionState: o,
    className: I.root,
    children: (0, a.jsxs)(m.AnalyticsLocationProvider, {
      value: B,
      children: [(0, a.jsx)(S.default, {
        onClose: s,
        filterQuery: _,
        setFilterQuery: j,
        sortOrder: T,
        setSortOrder: M
      }), U]
    })
  })
}