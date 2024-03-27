"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  i = n("77078"),
  u = n("629109"),
  s = n("901582"),
  l = n("997289"),
  o = n("812204"),
  E = n("685665"),
  c = n("845579"),
  A = n("659558"),
  d = n("154867"),
  _ = n("439141"),
  f = n("648911"),
  I = n("42887"),
  R = n("697218"),
  C = n("145131"),
  M = n("476765"),
  N = n("599110"),
  T = n("739477"),
  h = n("49111"),
  D = n("782340"),
  O = n("424382");
let v = {
  width: 368,
  height: 207
};

function H(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: v,
    onClose: H
  } = e, L = I.default.getCameraComponent(), g = (0, M.useUID)(), S = (0, f.default)(), V = c.AlwaysPreviewVideo.useSetting(), [p, G] = a.useState((0, A.getLastUsedVideoBackgroundOption)(R.default.getCurrentUser())), x = (0, l.useAnalyticsContext)(), {
    analyticsLocations: P
  } = (0, E.default)(o.default.CAMERA_PREVIEW), B = a.useRef(null);
  a.useEffect(() => {
    N.default.track(h.AnalyticEvents.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), a.useEffect(() => {
    var e;
    null === (e = B.current) || void 0 === e || e.scrollToTop()
  }, []);
  let w = async () => {
    await U(), u.default.setVideoEnabled(!0), null == v || v()
  }, U = async () => {
    try {
      await (0, _.applyBackgroundOptionLive)(p, {
        location: {
          page: h.AnalyticsPages.PREVIEW_CAMERA_MODAL,
          ...x.location
        }
      })
    } catch (e) {}
    await H(), (0, d.saveLastUsedBackgroundOption)(p)
  };
  return (0, r.jsx)(E.AnalyticsLocationProvider, {
    value: P,
    children: (0, r.jsx)(s.default, {
      page: h.AnalyticsPages.PREVIEW_CAMERA_MODAL,
      children: (0, r.jsxs)(i.ModalRoot, {
        className: O.modalRoot,
        size: i.ModalSize.DYNAMIC,
        "aria-labelledby": g,
        transitionState: t,
        children: [(0, r.jsxs)(i.ModalContent, {
          className: S ? O.contentWithVideoBackgrounds : O.content,
          scrollerRef: B,
          children: [(0, r.jsx)(i.Heading, {
            id: g,
            className: O.header,
            variant: "heading-xl/semibold",
            children: n ? D.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : D.default.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }), (0, r.jsx)(T.default, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: p,
            onSelectBackgroundOption: G,
            hideDeviceSelector: n,
            renderCamera: e => (0, r.jsxs)("div", {
              className: O.cameraPreview,
              children: [(0, r.jsx)("div", {
                className: O.camera,
                children: (0, r.jsx)(L, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, r.jsx)(T.FilterLoadingIndicator, {})]
            }),
            onLearnMore: H
          })]
        }), (0, r.jsxs)(i.ModalFooter, {
          justify: C.default.Justify.BETWEEN,
          children: [(() => {
            let e = n ? D.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : D.default.Messages.CAMERA_ON;
            return (0, r.jsx)(i.Button, {
              onClick: n ? U : w,
              size: i.Button.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, r.jsx)(i.Checkbox, {
            size: 18,
            type: i.Checkbox.Types.INVERTED,
            value: V,
            onChange: () => {
              c.AlwaysPreviewVideo.updateSetting(!V), N.default.track(h.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !V
              })
            },
            children: (0, r.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: D.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })]
        }), (0, r.jsx)(i.ModalCloseButton, {
          onClick: H,
          className: O.modalClose
        })]
      })
    })
  })
}