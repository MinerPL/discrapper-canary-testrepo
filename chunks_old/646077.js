"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("222007");
var n = a("37983"),
  o = a("884691"),
  l = a("414456"),
  s = a.n(l),
  i = a("77078"),
  c = a("812204"),
  r = a("685665"),
  u = a("873622"),
  d = a("476765"),
  f = a("599110"),
  p = a("652914"),
  h = a("254398"),
  A = a("49111"),
  y = a("782340"),
  _ = a("699111");

function g(e) {
  let {
    transitionState: t,
    onClose: l,
    onComplete: g,
    uploadType: m,
    showUpsellHeader: E,
    analyticsPage: w
  } = e, [R, v] = o.useState(!1), x = (0, i.useModalContext)(), L = (0, d.useUID)(), {
    analyticsLocations: I
  } = (0, r.default)(c.default.GIF_PICKER);
  async function N(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || R) return;
    v(!0);
    let o = (0, h.makeTenorProxyURL)(t),
      s = await fetch(o),
      c = await s.blob();
    l(), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("57015").then(a.bind(a, "57015"));
      return t => (0, n.jsx)(e, {
        imgURI: o,
        file: new File([c], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: g,
        uploadType: m,
        showUpsellHeader: E,
        ...t
      })
    }, {
      contextKey: x
    })
  }
  return o.useEffect(() => {
    f.default.track(A.AnalyticEvents.OPEN_MODAL, {
      type: A.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location: {
        page: w
      }
    })
  }, [w]), (0, n.jsx)(r.AnalyticsLocationProvider, {
    value: I,
    children: (0, n.jsxs)(i.ModalRoot, {
      className: _.gifPickerCroppingModal,
      "aria-labelledby": L,
      transitionState: t,
      size: i.ModalSize.SMALL,
      children: [E ? (0, n.jsx)(p.default, {
        type: m,
        analyticsPage: w,
        analyticsSection: A.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: !0
      }) : null, (0, n.jsxs)(i.ModalHeader, {
        className: _.modalHeader,
        separator: !1,
        children: [(0, n.jsx)(i.FormTitle, {
          className: _.titleCase,
          tag: i.FormTitleTags.H1,
          children: y.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
        }), (0, n.jsx)(i.ModalCloseButton, {
          onClick: l,
          className: _.modalCloseButton
        })]
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(u.default, {
          className: s(_.gifPicker, {
            [_.loadingOverlay]: R
          }),
          onSelectGIF: N,
          hideFavorites: !0
        }), R && (0, n.jsx)(i.Spinner, {
          className: _.spinner
        })]
      })]
    })
  })
}