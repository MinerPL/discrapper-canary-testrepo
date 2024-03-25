"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  i = l("448105"),
  s = l.n(i),
  r = l("917351"),
  o = l.n(r),
  u = l("759843"),
  d = l("446674"),
  c = l("551042"),
  f = l("77078"),
  p = l("812204"),
  m = l("685665"),
  h = l("428958"),
  E = l("299039"),
  v = l("386045"),
  C = l("803725"),
  _ = l("142485"),
  g = l("552022"),
  L = l("548405"),
  x = l("411445"),
  T = l("80028"),
  I = l("578675");

function S(e) {
  let {
    channelId: t,
    onClose: i,
    transitionState: r
  } = e, [S, A] = n.useState(""), [N, M] = n.useState("descending"), [R, P] = n.useState(!0), [y, j] = n.useState(null), D = n.useDeferredValue(S), O = (0, d.useStateFromStores)([v.default], () => v.default.getClips()), H = (0, d.useStateFromStores)([v.default], () => v.default.getPendingClips()), b = (0, d.useStateFromStores)([v.default], () => v.default.getSettings().storageLocation), w = (0, d.useStateFromStoresArray)([v.default], () => v.default.getNewClipIds()), {
    analyticsLocations: k
  } = (0, m.default)(p.default.CLIPS_GALLERY), U = n.useMemo(() => [...H, ...O], [O, H]);
  (0, h.default)({
    type: u.ImpressionTypes.MODAL,
    name: u.ImpressionNames.CLIP_GALLERY_VIEWED,
    properties: {
      number_of_clips_loaded: U.length
    }
  }, {
    disableTrack: R
  }, [U.length, R]), n.useEffect(() => ((0, C.clearClipsSession)(), () => {
    (0, C.clearClipsSession)(), (0, C.clearNewClipIds)()
  }), []);
  let B = n.useMemo(() => o(U).filter(e => {
    if ("" === D.trim()) return !0;
    let t = D.toLowerCase();
    return null != e.name && "" !== e.name && s(t, e.name.toLowerCase()) || s(t, e.applicationName.toLowerCase())
  }).sort((e, t) => "ascending" === N ? E.default.compare(e.id, t.id) : "descending" === N ? E.default.compare(t.id, e.id) : 0).chunk(3).value(), [U, D, N]);
  n.useEffect(() => {
    (async function e() {
      P(!0);
      try {
        await C.loadClipsDirectory(b)
      } finally {
        P(!1)
      }
    })()
  }, [b]);
  let V = n.useCallback(e => {
      (0, f.openModalLazy)(async () => {
        let {
          default: n
        } = await l.el("473070").then(l.bind(l, "473070"));
        return l => (0, a.jsx)(n, {
          ...l,
          channelId: t,
          clip: e
        })
      }, {
        modalKey: T.CLIPS_EDIT_MODAL_KEY
      })
    }, [t]),
    {
      onShareClick: z
    } = (0, _.default)({
      channelId: t,
      setExporting: j
    }),
    F = n.useCallback((e, t) => {
      (0, f.openModalLazy)(async () => {
        let {
          default: n
        } = await l.el("386092").then(l.bind(l, "386092"));
        return l => (0, a.jsx)(n, {
          clip: e,
          ...l,
          onBeforeDelete: t,
          onAfterDelete: () => l.onClose()
        })
      })
    }, []),
    G = n.useCallback(e => {
      let {
        row: t
      } = e, l = B[t];
      return (0, a.jsx)("div", {
        className: I.clipsRow,
        children: l.map(e => {
          let t = 0 === e.length;
          return (0, a.jsx)(g.default, {
            actionsDisabled: null != y || t,
            exporting: y === e.id,
            isNew: w.includes(e.id),
            onDelete: F,
            onEdit: V,
            onShare: e => z({
              clip: e,
              onShareComplete: () => c.closeModal(T.CLIPS_GALLERY_MODAL_KEY)
            }),
            clip: e
          }, e.id)
        })
      }, "clips-gallery-".concat(t))
    }, [B, w, y, z, F, V]),
    Y = R || 0 !== B.length ? R ? (0, a.jsx)("div", {
      className: I.spinnerContainer,
      children: (0, a.jsx)(f.Spinner, {})
    }) : (0, a.jsx)(f.List, {
      className: I.clipGrid,
      sections: [B.length],
      sectionHeight: 0,
      rowHeight: 328.25,
      renderRow: G
    }) : (0, a.jsx)(L.default, {
      isEmptyBecauseQuery: U.length > 0,
      closePopout: i
    });
  return (0, a.jsx)(f.ModalRoot, {
    size: f.ModalSize.DYNAMIC,
    transitionState: r,
    className: I.root,
    children: (0, a.jsxs)(m.AnalyticsLocationProvider, {
      value: k,
      children: [(0, a.jsx)(x.default, {
        onClose: i,
        filterQuery: S,
        setFilterQuery: A,
        sortOrder: N,
        setSortOrder: M
      }), Y]
    })
  })
}