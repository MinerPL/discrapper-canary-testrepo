"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
}), i("47120");
var l = i("735250"),
  a = i("470079"),
  s = i("803997"),
  n = i.n(s),
  o = i("481060"),
  r = i("100527"),
  u = i("906732"),
  d = i("455708"),
  c = i("153124"),
  f = i("626135"),
  E = i("488499"),
  _ = i("58384"),
  T = i("981631"),
  N = i("689938"),
  m = i("498793");

function p(e) {
  let {
    transitionState: t,
    onClose: s,
    onComplete: p,
    uploadType: I,
    showUpsellHeader: g,
    analyticsPage: R
  } = e, [A, h] = a.useState(!1), B = (0, o.useModalContext)(), x = (0, c.useUID)(), {
    analyticsLocations: M
  } = (0, u.default)(r.default.GIF_PICKER);
  async function L(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || A) return;
    h(!0);
    let a = (0, _.makeTenorProxyURL)(t),
      n = await fetch(a),
      r = await n.blob();
    s(), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([i.e("99387"), i.e("75409")]).then(i.bind(i, "850085"));
      return t => (0, l.jsx)(e, {
        imgURI: a,
        file: new File([r], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: p,
        uploadType: I,
        showUpsellHeader: g,
        ...t
      })
    }, {
      contextKey: B
    })
  }
  return a.useEffect(() => {
    f.default.track(T.AnalyticEvents.OPEN_MODAL, {
      type: T.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location: {
        page: R
      }
    })
  }, [R]), (0, l.jsx)(u.AnalyticsLocationProvider, {
    value: M,
    children: (0, l.jsxs)(o.ModalRoot, {
      className: m.__invalid_gifPickerCroppingModal,
      "aria-labelledby": x,
      transitionState: t,
      size: o.ModalSize.SMALL,
      children: [g ? (0, l.jsx)(E.default, {
        type: I,
        analyticsPage: R,
        analyticsSection: T.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: !0
      }) : null, (0, l.jsxs)(o.ModalHeader, {
        className: m.modalHeader,
        separator: !1,
        children: [(0, l.jsx)(o.FormTitle, {
          className: m.titleCase,
          tag: o.FormTitleTags.H1,
          children: N.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
        }), (0, l.jsx)(o.ModalCloseButton, {
          onClick: s,
          className: m.modalCloseButton
        })]
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(d.default, {
          className: n()(m.gifPicker, {
            [m.loadingOverlay]: A
          }),
          onSelectGIF: L,
          hideFavorites: !0
        }), A && (0, l.jsx)(o.Spinner, {
          className: m.spinner
        })]
      })]
    })
  })
}