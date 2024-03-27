"use strict";
a.r(t), a.d(t, {
  FilterLoadingIndicator: function() {
    return M
  },
  default: function() {
    return m
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  o = a.n(l),
  c = a("446674"),
  i = a("862337"),
  r = a("77078"),
  d = a("629109"),
  u = a("845579"),
  O = a("154867"),
  E = a("211208"),
  _ = a("42887"),
  g = a("599110"),
  A = a("49111"),
  p = a("782340"),
  f = a("248502");

function M() {
  let [e, t] = n.useState(!1), a = (0, c.useStateFromStores)([_.default], () => _.default.isMediaFilterSettingLoading());
  return (n.useEffect(() => {
    let e = new i.Timeout;
    return a ? e.start(150, () => {
      t(!0)
    }) : (e.stop(), t(!1)), () => e.stop()
  }, [a]), e) ? (0, s.jsx)("div", {
    className: f.filterLoadingIndicator,
    children: (0, s.jsx)(r.Spinner, {})
  }) : null
}

function m(e) {
  let {
    hideDeviceSelector: t = !1,
    hideDeviceHeader: a = !1,
    onLearnMore: l,
    selectedBackgroundOption: i,
    onSelectBackgroundOption: M,
    renderCamera: m,
    hidePreviewToggle: I = !1,
    showSmallBackgroundOptions: v = !1
  } = e, h = (0, c.useStateFromStores)([_.default], () => _.default.getVideoDeviceId()), x = (0, c.useStateFromStoresArray)([_.default], () => Object.values(_.default.getVideoDevices())), C = u.AlwaysPreviewVideo.useSetting(), N = x.map(e => {
    let {
      id: t,
      name: a
    } = e;
    return {
      value: t,
      label: a
    }
  });
  return n.useEffect(() => {
    (0, O.fetchVideoFilterAssets)()
  }, []), (0, s.jsxs)(s.Fragment, {
    children: [m(h), _.default.isEnabled() ? null : (0, s.jsx)(r.Text, {
      className: f.permissionWarning,
      color: "interactive-normal",
      variant: "text-sm/normal",
      children: p.default.Messages.FORM_WARNING_VIDEO_PREVIEW.format({
        onEnableClick: d.default.enable
      })
    }), I ? null : (0, s.jsx)(r.FormSwitch, {
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
    }), t ? null : (0, s.jsxs)(s.Fragment, {
      children: [a ? null : (0, s.jsx)(r.Heading, {
        className: f.spacingTop24,
        variant: "eyebrow",
        color: "header-secondary",
        children: p.default.Messages.CAMERA_PREVIEW_CAMERA
      }), (0, s.jsx)(r.SingleSelect, {
        placeholder: p.default.Messages.CHANGE_CAMERA,
        className: o(f.selector, {
          [f.selectorNoHeader]: a
        }),
        options: N,
        value: h,
        onChange: e => d.default.setVideoDevice(e)
      })]
    }), (0, s.jsx)(E.default, {
      onLearnMore: l,
      selectedBackgroundOption: i,
      onSelectBackgroundOption: M,
      currentDeviceId: h,
      smallerBackgroundOptions: v
    })]
  })
}