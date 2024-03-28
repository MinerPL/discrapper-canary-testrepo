"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("780384"),
  d = s("481060"),
  u = s("846027"),
  c = s("131951"),
  S = s("285952"),
  E = s("626135"),
  T = s("358085"),
  _ = s("998502"),
  f = s("210887"),
  m = s("996073"),
  g = s("526761"),
  h = s("981631"),
  N = s("65154"),
  I = s("689938"),
  p = s("794711");
let C = s("651714"),
  A = s("297166");

function O(e) {
  u.default.setAV1Enabled(e), E.default.track(h.AnalyticEvents.VOICE_SETTINGS_CHANGED, {
    av1_disabled: !e,
    av1_enabled: e
  })
}

function x() {
  let {
    experimentalEncoders: e
  } = (0, r.useStateFromStoresObject)([c.default], () => ({
    experimentalEncoders: c.default.getExperimentalEncoders()
  }));
  return "stable" !== _.default.releaseChannel && c.default.isExperimentalEncodersSupported() ? (0, a.jsx)(d.FormSwitch, {
    className: i()(p.marginTop8, p.marginBottom20),
    value: e,
    onChange: e => u.default.setExperimentalEncoders(e),
    disabled: !1,
    children: I.default.Messages.EXPERIMENTAL_ENCODERS
  }) : null
}

function R() {
  let e = (0, r.useStateFromStores)([f.default], () => f.default.theme),
    {
      openH264: t,
      hardwareH264: s,
      supportsOpenH264: l,
      av1Enabled: E
    } = (0, r.useStateFromStoresObject)([c.default], () => ({
      openH264: c.default.getOpenH264(),
      hardwareH264: c.default.getHardwareH264(),
      supportsOpenH264: c.default.supports(N.Features.OPEN_H264),
      av1Enabled: c.default.getAv1Enabled()
    })),
    _ = n.useRef(null);
  return (0, m.default)(_, g.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.FormSection, {
      className: p.marginBottom20,
      title: I.default.Messages.USER_SETTINGS_VOICE_CODEC_TITLE,
      children: (0, a.jsx)(d.FormNotice, {
        className: p.marginBottom20,
        type: d.FormNoticeTypes.PRIMARY,
        imageData: {
          src: (0, o.isThemeLight)(e) ? C : A,
          width: 70,
          height: 40
        },
        align: S.default.Align.CENTER,
        body: I.default.Messages.USER_SETTINGS_VOICE_CODEC_DESCRIPTION
      })
    }), l && (0, a.jsxs)(d.FormSection, {
      className: p.marginBottom20,
      title: I.default.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
      children: [(0, a.jsx)(d.FormSwitch, {
        className: i()(p.marginTop8, p.marginBottom20),
        value: t,
        onChange: e => {
          u.default.setOpenH264(e), u.default.setHardwareH264(e)
        },
        disabled: !1,
        note: I.default.Messages.FORM_HELP_OPEN_H264,
        children: I.default.Messages.USER_SETTINGS_VOICE_OPEN_H264
      }), (0, a.jsx)("div", {
        style: {
          scrollMarginTop: "48px"
        },
        ref: _
      }), (0, a.jsx)(d.FormSwitch, {
        className: i()(p.marginTop8, p.marginBottom20),
        value: s,
        onChange: e => {
          (0, T.isWindows)() && u.default.setAV1Enabled(e && E), u.default.setHardwareH264(e)
        },
        disabled: !t,
        note: I.default.Messages.FORM_HELP_HARDWARE_H264,
        children: I.default.Messages.USER_SETTINGS_VOICE_HARDWARE_H264
      }), (0, T.isWindows)() && (0, a.jsx)(d.FormSwitch, {
        className: i()(p.marginTop8, p.marginBottom20),
        value: (0, T.isWindows)() ? E && s : E,
        onChange: e => {
          (0, T.isWindows)() ? O(e && s): O(e)
        },
        note: (0, T.isWindows)() && I.default.Messages.FORM_HELP_HARDWARE_AV1,
        disabled: (0, T.isWindows)() && !s,
        children: I.default.Messages.USER_SETTINGS_VOICE_AV1
      }), (0, a.jsx)(x, {})]
    })]
  })
}