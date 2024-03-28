"use strict";
r.r(t), r.d(t, {
  StickerPackViewAllModalFooter: function() {
    return K
  },
  default: function() {
    return w
  }
}), r("653041"), r("47120");
var s = r("735250"),
  l = r("470079"),
  n = r("803997"),
  a = r.n(n),
  i = r("954955"),
  c = r.n(i),
  o = r("442837"),
  u = r("477690"),
  d = r("481060"),
  S = r("691251"),
  m = r("598"),
  p = r("409813"),
  E = r("857185"),
  N = r("911200"),
  f = r("185139"),
  C = r("976644"),
  _ = r("466111"),
  h = r("624138"),
  I = r("790954"),
  P = r("453070"),
  A = r("926491"),
  T = r("378233"),
  k = r("515005"),
  x = r("282896"),
  R = r("929204"),
  b = r("981631"),
  j = r("689938"),
  g = r("239656");
let M = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
  v = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
  D = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
  O = M + 2 * v,
  L = c()(I.resetInspectedStickerPosition, 250),
  B = () => {
    L.cancel()
  },
  y = e => {
    let {
      visibleRowIndex: t,
      columnIndex: r
    } = e;
    L.cancel(), (0, I.setInspectedStickerPosition)(r, t, S.InspectedExpressionChangeSource.MOUSE_EVENT)
  },
  W = e => {
    let {
      stickerPack: t,
      width: r,
      hasHeaderImage: n,
      isScrolling: i,
      onInspect: c
    } = e, o = l.useMemo(() => [(0, T.createStickerPackCategory)(t)], [t]), u = (0, I.useStickerViewAllStore)(e => e.inspectedStickerPosition), {
      rowCountBySection: d,
      stickersGrid: S,
      gutterWidth: m
    } = (0, P.useStickersGrid)({
      stickersCategories: o,
      stickerNodeMargin: D,
      stickerNodeWidth: O,
      listWidth: r
    });
    return (0, s.jsxs)("div", {
      className: a()(g.container, {
        [g.containerWithHeader]: n
      }),
      children: [(0, s.jsx)(x.default, {
        className: g.header,
        stickerPack: t,
        withDescription: !0
      }, t.id), (0, s.jsx)("div", {
        onFocus: B,
        onBlur: L,
        onMouseOver: B,
        onMouseOut: L,
        children: (() => {
          if (0 === d.length) return null;
          let e = [];
          for (let t = 0; t < d[0]; t++) e.push((0, s.jsx)(k.default, {
            enlargeOnInteraction: !0,
            preferAnimation: !0,
            gutterWidth: m,
            inspectedStickerPosition: u,
            isScrolling: i,
            onInspect: c,
            rowIndex: t,
            stickerDescriptors: S[t],
            stickerPadding: v,
            stickerSize: M,
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
    (0, P.useFetchStickerPacks)(), (0, E.useMaybeFetchPremiumLikelihood)(N.default);
    let l = (0, o.useStateFromStores)([A.default], () => A.default.isPremiumPack(r.id));
    return (0, s.jsxs)(d.ModalFooter, {
      className: g.footer,
      children: [(0, s.jsx)(d.Anchor, {
        onClick: t,
        className: g.skuPreviewFooterCloseButton,
        children: j.default.Messages.CLOSE
      }), l && (0, s.jsxs)(C.default, {
        color: d.Button.Colors.GREEN,
        type: "submit",
        innerClassName: g.premiumButtonInner,
        onClick: () => {
          t(), (0, R.default)({
            section: b.AnalyticsSections.STICKER_PACK_VIEW_ALL
          })
        },
        children: [(0, s.jsx)(_.default, {
          className: g.premiumButtonNitroWheel
        }), j.default.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
      })]
    })
  },
  U = e => {
    let {
      stickerPack: t,
      onClose: r
    } = e, l = (0, T.getStickerPackBannerAssetUrl)(t, 1024);
    return null == l ? null : (0, s.jsxs)(d.ModalHeader, {
      className: g.headerWithImage,
      children: [(0, s.jsx)("div", {
        role: "image",
        style: {
          backgroundImage: "url(".concat(l, ")")
        },
        className: g.backgroundImage
      }), (0, s.jsx)(d.ModalCloseButton, {
        className: g.closeButton,
        onClick: r
      })]
    })
  };

function w(e) {
  let {
    onClose: t,
    stickerPack: r,
    ...n
  } = e, [a, i] = l.useState(null), c = l.useCallback(e => {
    null !== e && i(e.offsetWidth)
  }, []);
  return l.useLayoutEffect(() => {
    (0, I.resetInspectedStickerPosition)()
  }, []), (0, s.jsx)(m.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, s.jsx)(d.ModalRoot, {
      ...n,
      "aria-labelledby": "sticker-pack-sku-preview-modal",
      children: (0, s.jsx)(f.default, {
        hideBreadcrumbs: !0,
        body: (0, s.jsx)("div", {
          ref: c,
          children: null != a && (0, s.jsx)(W, {
            stickerPack: r,
            hasHeaderImage: !0,
            onInspect: y,
            width: a
          })
        }),
        footer: (0, s.jsx)(K, {
          onClose: t,
          stickerPack: r
        }),
        header: (0, s.jsx)(U, {
          onClose: t,
          stickerPack: r
        }),
        onScroll: L,
        steps: [p.Step.SKU_PREVIEW],
        currentStep: p.Step.SKU_PREVIEW
      })
    })
  })
}