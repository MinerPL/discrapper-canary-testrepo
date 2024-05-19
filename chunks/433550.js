"use strict";
r.r(t), r.d(t, {
  StickerPackViewAllModalFooter: function() {
    return K
  },
  default: function() {
    return F
  }
}), r("653041"), r("47120");
var l = r("735250"),
  n = r("470079"),
  s = r("120356"),
  i = r.n(s),
  a = r("954955"),
  o = r.n(a),
  c = r("442837"),
  u = r("477690"),
  d = r("481060"),
  m = r("691251"),
  S = r("598"),
  p = r("409813"),
  f = r("857185"),
  E = r("911200"),
  N = r("185139"),
  C = r("976644"),
  P = r("466111"),
  h = r("624138"),
  _ = r("790954"),
  I = r("453070"),
  A = r("926491"),
  k = r("378233"),
  x = r("515005"),
  T = r("282896"),
  b = r("929204"),
  v = r("981631"),
  R = r("689938"),
  j = r("405810");
let g = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
  M = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
  y = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
  D = g + 2 * M,
  O = o()(_.resetInspectedStickerPosition, 250),
  B = () => {
    O.cancel()
  },
  L = e => {
    let {
      visibleRowIndex: t,
      columnIndex: r
    } = e;
    O.cancel(), (0, _.setInspectedStickerPosition)(r, t, m.InspectedExpressionChangeSource.MOUSE_EVENT)
  },
  W = e => {
    let {
      stickerPack: t,
      width: r,
      hasHeaderImage: s,
      isScrolling: a,
      onInspect: o
    } = e, c = n.useMemo(() => [(0, k.createStickerPackCategory)(t)], [t]), u = (0, _.useStickerViewAllStore)(e => e.inspectedStickerPosition), {
      rowCountBySection: d,
      stickersGrid: m,
      gutterWidth: S
    } = (0, I.useStickersGrid)({
      stickersCategories: c,
      stickerNodeMargin: y,
      stickerNodeWidth: D,
      listWidth: r
    });
    return (0, l.jsxs)("div", {
      className: i()(j.container, {
        [j.containerWithHeader]: s
      }),
      children: [(0, l.jsx)(T.default, {
        className: j.header,
        stickerPack: t,
        withDescription: !0
      }, t.id), (0, l.jsx)("div", {
        onFocus: B,
        onBlur: O,
        onMouseOver: B,
        onMouseOut: O,
        children: (() => {
          if (0 === d.length) return null;
          let e = [];
          for (let t = 0; t < d[0]; t++) e.push((0, l.jsx)(x.default, {
            enlargeOnInteraction: !0,
            preferAnimation: !0,
            gutterWidth: S,
            inspectedStickerPosition: u,
            isScrolling: a,
            onInspect: o,
            rowIndex: t,
            stickerDescriptors: m[t],
            stickerPadding: M,
            stickerSize: g,
            isDisplayingIndividualStickers: !0,
            checkSendability: !1
          }, t));
          return e
        })()
      })]
    })
  },
  K = e => {
    let {
      onClose: t,
      stickerPack: r
    } = e;
    (0, I.useFetchStickerPacks)(), (0, f.useMaybeFetchPremiumLikelihood)(E.default);
    let n = (0, c.useStateFromStores)([A.default], () => A.default.isPremiumPack(r.id));
    return (0, l.jsxs)(d.ModalFooter, {
      className: j.footer,
      children: [(0, l.jsx)(d.Anchor, {
        onClick: t,
        className: j.skuPreviewFooterCloseButton,
        children: R.default.Messages.CLOSE
      }), n && (0, l.jsxs)(C.default, {
        color: d.Button.Colors.GREEN,
        type: "submit",
        innerClassName: j.premiumButtonInner,
        onClick: () => {
          t(), (0, b.default)({
            section: v.AnalyticsSections.STICKER_PACK_VIEW_ALL
          })
        },
        children: [(0, l.jsx)(P.default, {
          className: j.premiumButtonNitroWheel
        }), R.default.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
      })]
    })
  },
  w = e => {
    let {
      stickerPack: t,
      onClose: r
    } = e, n = (0, k.getStickerPackBannerAssetUrl)(t, 1024);
    return null == n ? null : (0, l.jsxs)(d.ModalHeader, {
      className: j.headerWithImage,
      children: [(0, l.jsx)("div", {
        role: "image",
        style: {
          backgroundImage: "url(".concat(n, ")")
        },
        className: j.backgroundImage
      }), (0, l.jsx)(d.ModalCloseButton, {
        className: j.closeButton,
        onClick: r
      })]
    })
  };

function F(e) {
  let {
    onClose: t,
    stickerPack: r,
    ...s
  } = e, [i, a] = n.useState(null), o = n.useCallback(e => {
    null !== e && a(e.offsetWidth)
  }, []);
  return n.useLayoutEffect(() => {
    (0, _.resetInspectedStickerPosition)()
  }, []), (0, l.jsx)(S.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, l.jsx)(d.ModalRoot, {
      ...s,
      "aria-labelledby": "sticker-pack-sku-preview-modal",
      children: (0, l.jsx)(N.default, {
        hideBreadcrumbs: !0,
        body: (0, l.jsx)("div", {
          ref: o,
          children: null != i && (0, l.jsx)(W, {
            stickerPack: r,
            hasHeaderImage: !0,
            onInspect: L,
            width: i
          })
        }),
        footer: (0, l.jsx)(K, {
          onClose: t,
          stickerPack: r
        }),
        header: (0, l.jsx)(w, {
          onClose: t,
          stickerPack: r
        }),
        onScroll: O,
        steps: [p.Step.SKU_PREVIEW],
        currentStep: p.Step.SKU_PREVIEW
      })
    })
  })
}