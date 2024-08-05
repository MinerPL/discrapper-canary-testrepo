n.r(r), n.d(r, {
  StickerPackViewAllModalFooter: function() {
return W;
  },
  default: function() {
return O;
  }
}), n(653041), n(47120);
var t = n(735250),
  l = n(470079),
  o = n(120356),
  s = n.n(o),
  i = n(954955),
  a = n.n(i),
  c = n(442837),
  d = n(477690),
  u = n(481060),
  m = n(691251),
  _ = n(598),
  p = n(409813),
  h = n(185139),
  E = n(624138),
  N = n(790954),
  S = n(453070),
  f = n(926491),
  C = n(378233),
  I = n(515005),
  P = n(282896),
  x = n(929204),
  g = n(981631),
  A = n(689938),
  T = n(257436);
let k = (0, E.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
  v = (0, E.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
  j = (0, E.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
  R = k + 2 * v,
  M = a()(N.pF, 250),
  b = () => {
M.cancel();
  },
  y = e => {
let {
  visibleRowIndex: r,
  columnIndex: n
} = e;
M.cancel(), (0, N.Mf)(n, r, m.u.MOUSE_EVENT);
  },
  B = e => {
let {
  stickerPack: r,
  width: n,
  hasHeaderImage: o,
  isScrolling: i,
  onInspect: a
} = e, c = l.useMemo(() => [(0, C.z)(r)], [r]), d = (0, N.Y6)(e => e.inspectedStickerPosition), {
  rowCountBySection: u,
  stickersGrid: m,
  gutterWidth: _
} = (0, S.el)({
  stickersCategories: c,
  stickerNodeMargin: j,
  stickerNodeWidth: R,
  listWidth: n
});
return (0, t.jsxs)('div', {
  className: s()(T.container, {
    [T.containerWithHeader]: o
  }),
  children: [
    (0, t.jsx)(P.Z, {
      className: T.header,
      stickerPack: r,
      withDescription: !0
    }, r.id),
    (0, t.jsx)('div', {
      onFocus: b,
      onBlur: M,
      onMouseOver: b,
      onMouseOut: M,
      children: (() => {
        if (0 === u.length)
          return null;
        let e = [];
        for (let r = 0; r < u[0]; r++)
          e.push((0, t.jsx)(I.Z, {
            enlargeOnInteraction: !0,
            preferAnimation: !0,
            gutterWidth: _,
            inspectedStickerPosition: d,
            isScrolling: i,
            onInspect: a,
            rowIndex: r,
            stickerDescriptors: m[r],
            stickerPadding: v,
            stickerSize: k,
            isDisplayingIndividualStickers: !0,
            checkSendability: !1
          }, r));
        return e;
      })()
    })
  ]
});
  },
  W = e => {
let {
  onClose: r,
  stickerPack: n
} = e;
(0, S.fP)();
let l = (0, c.e7)([f.Z], () => f.Z.isPremiumPack(n.id));
return (0, t.jsxs)(u.ModalFooter, {
  className: T.footer,
  children: [
    (0, t.jsx)(u.Anchor, {
      onClick: r,
      className: T.skuPreviewFooterCloseButton,
      children: A.Z.Messages.CLOSE
    }),
    l && (0, t.jsxs)(u.ShinyButton, {
      color: u.Button.Colors.GREEN,
      type: 'submit',
      innerClassName: T.premiumButtonInner,
      onClick: () => {
        r(), (0, x.Z)({
          section: g.jXE.STICKER_PACK_VIEW_ALL
        });
      },
      children: [
        (0, t.jsx)(u.NitroWheelIcon, {
          size: 'md',
          color: 'currentColor',
          className: T.premiumButtonNitroWheel
        }),
        A.Z.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM
      ]
    })
  ]
});
  },
  D = e => {
let {
  stickerPack: r,
  onClose: n
} = e, l = (0, C.sM)(r, 1024);
return null == l ? null : (0, t.jsxs)(u.ModalHeader, {
  className: T.headerWithImage,
  children: [
    (0, t.jsx)('div', {
      role: 'image',
      style: {
        backgroundImage: 'url('.concat(l, ')')
      },
      className: T.backgroundImage
    }),
    (0, t.jsx)(u.ModalCloseButton, {
      className: T.closeButton,
      onClick: n
    })
  ]
});
  };

function O(e) {
  let {
onClose: r,
stickerPack: n,
...o
  } = e, [s, i] = l.useState(null), a = l.useCallback(e => {
null !== e && i(e.offsetWidth);
  }, []);
  return l.useLayoutEffect(() => {
(0, N.pF)();
  }, []), (0, t.jsx)(_.PaymentContextProvider, {
activeSubscription: null,
stepConfigs: [],
skuIDs: [],
children: (0, t.jsx)(u.ModalRoot, {
  ...o,
  'aria-labelledby': 'sticker-pack-sku-preview-modal',
  children: (0, t.jsx)(h.Z, {
    hideBreadcrumbs: !0,
    body: (0, t.jsx)('div', {
      ref: a,
      children: null != s && (0, t.jsx)(B, {
        stickerPack: n,
        hasHeaderImage: !0,
        onInspect: y,
        width: s
      })
    }),
    footer: (0, t.jsx)(W, {
      onClose: r,
      stickerPack: n
    }),
    header: (0, t.jsx)(D, {
      onClose: r,
      stickerPack: n
    }),
    onScroll: M,
    steps: [p.h8.SKU_PREVIEW],
    currentStep: p.h8.SKU_PREVIEW
  })
})
  });
}