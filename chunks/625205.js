"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var a = s("735250");
s("470079");
var n = s("392711"),
  l = s.n(n),
  i = s("442837"),
  r = s("780384"),
  o = s("481060"),
  d = s("846027"),
  u = s("463395"),
  c = s("131951"),
  S = s("285952"),
  E = s("210887"),
  T = s("962100"),
  _ = s("65154"),
  f = s("689938"),
  m = s("564129"),
  g = s("794711");

function h() {
  let e, t;
  let n = (0, i.useStateFromStores)([E.default], () => E.default.theme),
    {
      canSetInputDevice: h,
      canSetOutputDevice: N,
      inputDeviceId: I,
      outputDeviceId: p
    } = (0, i.useStateFromStoresObject)([c.default], () => ({
      canSetInputDevice: c.default.supports(_.Features.AUDIO_INPUT_DEVICE),
      canSetOutputDevice: c.default.supports(_.Features.AUDIO_OUTPUT_DEVICE),
      inputDeviceId: c.default.getInputDeviceId(),
      outputDeviceId: c.default.getOutputDeviceId()
    })),
    C = (0, i.useStateFromStores)([c.default], () => c.default.getInputDevices()),
    A = (0, i.useStateFromStores)([c.default], () => c.default.getOutputDevices());
  !h && (e = (0, a.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: g.marginTop8,
    children: f.default.Messages.BROWSER_INPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, T.openDownloadAppsModal)("Help Text Input Devices")
    })
  })), !N && (t = (0, a.jsx)(o.FormText, {
    type: o.FormText.Types.DESCRIPTION,
    className: g.marginTop8,
    children: f.default.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({
      onDownloadClick: () => (0, T.openDownloadAppsModal)("Help Text Output Devices")
    })
  }));
  let O = l()(C).values().first(),
    x = null != O ? O.disabled : null != e,
    R = l()(A).values().first(),
    M = null != R ? R.disabled : null != t;

  function v(e) {
    let t, {
      label: l,
      value: i
    } = e;
    if (u.default.isCertified(i)) {
      let e = (0, r.isThemeLight)(n) ? s("561259") : s("887695");
      t = (0, a.jsx)("img", {
        src: e,
        alt: "Certified",
        className: m.deviceOptionCertified
      })
    }
    return (0, a.jsxs)("span", {
      className: m.deviceOption,
      children: [(0, a.jsx)("span", {
        className: m.deviceOptionLabel,
        children: u.default.getCertifiedDeviceName(i, l)
      }), t]
    }, i)
  }

  function D(e) {
    return v(e[0])
  }
  return (0, a.jsxs)(S.default, {
    className: g.marginBottom20,
    children: [(0, a.jsxs)(S.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: g.marginBottom8,
        children: f.default.Messages.FORM_LABEL_INPUT_DEVICE
      }), (0, a.jsx)(o.SingleSelect, {
        value: I,
        onChange: e => d.default.setInputDevice(e, "Settings"),
        options: l().map(C, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: x,
        renderOptionValue: D,
        renderOptionLabel: v
      }), e]
    }), (0, a.jsxs)(S.default.Child, {
      basis: "50%",
      children: [(0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: g.marginBottom8,
        children: f.default.Messages.FORM_LABEL_OUTPUT_DEVICE
      }), (0, a.jsx)(o.SingleSelect, {
        value: p,
        onChange: e => d.default.setOutputDevice(e, "Settings"),
        options: l().map(A, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          }
        }),
        isDisabled: M,
        renderOptionValue: D,
        renderOptionLabel: v
      }), t]
    })]
  })
}