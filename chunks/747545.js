"use strict";
t.r(a), t.d(a, {
  FilterLoadingIndicator: function() {
    return M
  },
  default: function() {
    return m
  }
}), t("47120");
var s = t("735250"),
  n = t("470079"),
  l = t("803997"),
  o = t.n(l),
  c = t("442837"),
  i = t("846519"),
  r = t("481060"),
  d = t("846027"),
  u = t("695346"),
  _ = t("716161"),
  O = t("938117"),
  E = t("131951"),
  g = t("626135"),
  A = t("981631"),
  p = t("689938"),
  f = t("408844");

function M() {
  let [e, a] = n.useState(!1), t = (0, c.useStateFromStores)([E.default], () => E.default.isMediaFilterSettingLoading());
  return (n.useEffect(() => {
    let e = new i.Timeout;
    return t ? e.start(150, () => {
      a(!0)
    }) : (e.stop(), a(!1)), () => e.stop()
  }, [t]), e) ? (0, s.jsx)("div", {
    className: f.filterLoadingIndicator,
    children: (0, s.jsx)(r.Spinner, {})
  }) : null
}

function m(e) {
  let {
    hideDeviceSelector: a = !1,
    hideDeviceHeader: t = !1,
    onLearnMore: l,
    selectedBackgroundOption: i,
    onSelectBackgroundOption: M,
    renderCamera: m,
    hidePreviewToggle: v = !1,
    showSmallBackgroundOptions: I = !1
  } = e, h = (0, c.useStateFromStores)([E.default], () => E.default.getVideoDeviceId()), x = (0, c.useStateFromStoresArray)([E.default], () => Object.values(E.default.getVideoDevices())), C = u.AlwaysPreviewVideo.useSetting(), N = x.map(e => {
    let {
      id: a,
      name: t
    } = e;
    return {
      value: a,
      label: t
    }
  });
  return n.useEffect(() => {
    (0, _.fetchVideoFilterAssets)()
  }, []), (0, s.jsxs)(s.Fragment, {
    children: [m(h), E.default.isEnabled() ? null : (0, s.jsx)(r.Text, {
      className: f.permissionWarning,
      color: "interactive-normal",
      variant: "text-sm/normal",
      children: p.default.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
        onEnableClick: d.default.enable
      })
    }), v ? null : (0, s.jsx)(r.FormSwitch, {
      className: f.previewToggle,
      note: p.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
      onChange: e => {
        u.AlwaysPreviewVideo.updateSetting(e), g.default.track(A.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      },
      value: C,
      hideBorder: !0,
      children: (0, s.jsx)("div", {
        className: f.cameraPreviewTitle,
        children: p.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
      })
    }), a ? null : (0, s.jsxs)(s.Fragment, {
      children: [t ? null : (0, s.jsx)(r.Heading, {
        className: f.spacingTop24,
        variant: "eyebrow",
        color: "header-secondary",
        children: p.default.Messages.CAMERA_PREVIEW_CAMERA
      }), (0, s.jsx)(r.SingleSelect, {
        placeholder: p.default.Messages.CHANGE_CAMERA,
        className: o()(f.selector, {
          [f.selectorNoHeader]: t
        }),
        options: N,
        value: h,
        onChange: e => d.default.setVideoDevice(e)
      })]
    }), (0, s.jsx)(O.default, {
      onLearnMore: l,
      selectedBackgroundOption: i,
      onSelectBackgroundOption: M,
      currentDeviceId: h,
      smallerBackgroundOptions: I
    })]
  })
}