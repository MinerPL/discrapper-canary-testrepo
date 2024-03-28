"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  i = a("481060"),
  n = a("846027"),
  o = a("410575"),
  r = a("2052"),
  c = a("100527"),
  d = a("906732"),
  u = a("695346"),
  h = a("932724"),
  f = a("716161"),
  v = a("672339"),
  E = a("898531"),
  A = a("131951"),
  C = a("594174"),
  g = a("285952"),
  p = a("153124"),
  x = a("626135"),
  M = a("747545"),
  R = a("981631"),
  w = a("689938"),
  _ = a("768454");
let m = {
  width: 368,
  height: 207
};

function I(e) {
  let {
    transitionState: t,
    videoEnabled: a,
    onEnable: m,
    onClose: I
  } = e, j = A.default.getCameraComponent(), V = (0, p.useUID)(), L = (0, E.default)(), N = u.AlwaysPreviewVideo.useSetting(), [y, O] = l.useState((0, h.getLastUsedVideoBackgroundOption)(C.default.getCurrentUser())), P = (0, r.useAnalyticsContext)(), {
    analyticsLocations: D
  } = (0, d.default)(c.default.CAMERA_PREVIEW), B = l.useRef(null);
  l.useEffect(() => {
    x.default.track(R.AnalyticEvents.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), l.useEffect(() => {
    var e;
    null === (e = B.current) || void 0 === e || e.scrollToTop()
  }, []);
  let k = async () => {
    await H(), n.default.setVideoEnabled(!0), null == m || m()
  }, H = async () => {
    try {
      await (0, v.applyBackgroundOptionLive)(y, {
        location: {
          page: R.AnalyticsPages.PREVIEW_CAMERA_MODAL,
          ...P.location
        }
      })
    } catch (e) {}
    await I(), (0, f.saveLastUsedBackgroundOption)(y)
  };
  return (0, s.jsx)(d.AnalyticsLocationProvider, {
    value: D,
    children: (0, s.jsx)(o.default, {
      page: R.AnalyticsPages.PREVIEW_CAMERA_MODAL,
      children: (0, s.jsxs)(i.ModalRoot, {
        className: _.modalRoot,
        size: i.ModalSize.DYNAMIC,
        "aria-labelledby": V,
        transitionState: t,
        children: [(0, s.jsxs)(i.ModalContent, {
          className: L ? _.contentWithVideoBackgrounds : _.content,
          scrollerRef: B,
          children: [(0, s.jsx)(i.Heading, {
            id: V,
            className: _.header,
            variant: "heading-xl/semibold",
            children: a ? w.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : w.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }), (0, s.jsx)(M.default, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: y,
            onSelectBackgroundOption: O,
            hideDeviceSelector: a,
            renderCamera: e => (0, s.jsxs)("div", {
              className: _.cameraPreview,
              children: [(0, s.jsx)("div", {
                className: _.camera,
                children: (0, s.jsx)(j, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, s.jsx)(M.FilterLoadingIndicator, {})]
            }),
            onLearnMore: I
          })]
        }), (0, s.jsxs)(i.ModalFooter, {
          justify: g.default.Justify.BETWEEN,
          children: [(() => {
            let e = a ? w.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : w.default.Messages.CAMERA_ON;
            return (0, s.jsx)(i.Button, {
              onClick: a ? H : k,
              size: i.Button.Sizes.SMALL,
              autoFocus: !a,
              children: e
            })
          })(), (0, s.jsx)(i.Checkbox, {
            size: 18,
            type: i.Checkbox.Types.INVERTED,
            value: N,
            onChange: () => {
              u.AlwaysPreviewVideo.updateSetting(!N), x.default.track(R.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !N
              })
            },
            children: (0, s.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: w.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, s.jsx)(i.ModalCloseButton, {
          onClick: I,
          className: _.modalClose
        })]
      })
    })
  })
}