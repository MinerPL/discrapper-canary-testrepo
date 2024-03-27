"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("424973");
var a, n, l = s("37983");
s("884691");
var i = s("414456"),
  r = s.n(i),
  o = s("446674"),
  d = s("819855"),
  u = s("77078"),
  c = s("629109"),
  S = s("533222"),
  E = s("42887"),
  T = s("145131"),
  f = s("476765"),
  _ = s("599110"),
  m = s("701909"),
  g = s("161778"),
  h = s("49111"),
  N = s("782340"),
  I = s("890957");
let p = s("247431"),
  C = s("529115"),
  A = (0, f.uid)();
(n = a || (a = {}))[n.NONE = 0] = "NONE", n[n.STANDARD = 1] = "STANDARD", n[n.KRISP = 2] = "KRISP";
let O = {
  page: h.AnalyticsPages.USER_SETTINGS,
  section: h.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
};

function x(e) {
  let t = e.currentTarget;
  _.default.track(h.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: h.AnalyticsPages.USER_SETTINGS,
      section: h.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function R() {
  let e = (0, o.useStateFromStores)([g.default], () => g.default.theme),
    {
      noiseCancellation: t,
      noiseSuppression: s,
      noiseSuppressionSupported: a,
      noiseCancellationSupported: n
    } = (0, o.useStateFromStoresObject)([E.default], () => ({
      noiseCancellation: E.default.getNoiseCancellation(),
      noiseSuppression: E.default.getNoiseSuppression(),
      noiseSuppressionSupported: E.default.isNoiseSuppressionSupported(),
      noiseCancellationSupported: E.default.isNoiseCancellationSupported()
    }));
  if (!a && !n) return null;
  let i = [];
  return n && i.push({
    name: N.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
    value: 2
  }), a && i.push({
    name: N.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
    value: 1
  }), i.push({
    name: N.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
    value: 0
  }), (0, l.jsxs)(u.FormSection, {
    className: I.marginBottom20,
    children: [(0, l.jsx)(u.FormTitle, {
      id: A,
      tag: u.FormTitleTags.H3,
      className: I.marginBottom8,
      children: N.default.Messages.NOISE_SUPPRESSION
    }), (0, l.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: I.marginBottom8,
      children: N.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
    }), (0, l.jsx)(u.RadioGroup, {
      options: i,
      onChange: e => {
        c.default.setNoiseCancellation(2 === e.value, O), c.default.setNoiseSuppression(1 === e.value, O)
      },
      value: t ? 2 : s ? 1 : 0
    }), n && (0, l.jsx)(u.FormNotice, {
      className: I.marginBottom8,
      type: u.FormNoticeTypes.PRIMARY,
      imageData: {
        src: (0, d.isThemeLight)(e) ? p : C,
        width: 70,
        height: 40
      },
      align: T.default.Align.CENTER,
      body: (0, l.jsx)(u.Anchor, {
        href: m.default.getArticleURL(h.HelpdeskArticles.NOISE_SUPPRESSION),
        onClick: x,
        children: N.default.Messages.LEARN_MORE
      })
    }), (0, l.jsx)(u.FormDivider, {})]
  })
}

function M() {
  let {
    inputMode: e,
    inputDeviceId: t,
    echoCancellation: s,
    automaticGainControl: a,
    vadAutoThreshold: n,
    vadUseKrisp: i,
    advancedVoiceActivitySupported: d,
    automaticGainControlSupported: T
  } = (0, o.useStateFromStoresObject)([E.default], () => ({
    inputMode: E.default.getMode(),
    inputDeviceId: E.default.getInputDeviceId(),
    echoCancellation: E.default.getEchoCancellation(),
    automaticGainControl: E.default.getAutomaticGainControl(),
    vadAutoThreshold: E.default.getModeOptions().autoThreshold,
    vadUseKrisp: E.default.getModeOptions().vadUseKrisp,
    advancedVoiceActivitySupported: E.default.isAdvancedVoiceActivitySupported(),
    automaticGainControlSupported: E.default.isAutomaticGainControlSupported()
  })), {
    hasEchoCancellation: f,
    hasNoiseSuppression: _,
    hasAutomaticGainControl: m
  } = (0, o.useStateFromStoresObject)([S.default], () => ({
    hasEchoCancellation: S.default.hasEchoCancellation(t),
    hasNoiseSuppression: S.default.hasNoiseSuppression(t),
    hasAutomaticGainControl: S.default.hasAutomaticGainControl(t)
  }), [t]), g = f || _ || m, p = e === h.InputModes.VOICE_ACTIVITY && n;
  return (0, l.jsxs)(u.FormSection, {
    className: I.marginBottom20,
    title: N.default.Messages.FORM_LABEL_VOICE_PROCESSING,
    children: [g && (0, l.jsx)(u.FormText, {
      className: I.marginBottom20,
      type: u.FormText.Types.DESCRIPTION,
      children: N.default.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
    }), (0, l.jsx)(u.FormSwitch, {
      className: r(I.marginTop8, I.marginBottom20),
      value: s,
      onChange: e => c.default.setEchoCancellation(e, {
        page: h.AnalyticsPages.USER_SETTINGS,
        section: h.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
      }),
      disabled: f,
      children: N.default.Messages.ECHO_CANCELLATION
    }), (0, l.jsx)(R, {}), d && (0, l.jsx)(u.FormSwitch, {
      value: i,
      onChange: t => c.default.setMode(e, {
        vadUseKrisp: t
      }),
      note: N.default.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
      disabled: !p,
      children: N.default.Messages.ADVANCED_VOICE_ACTIVITY
    }), T && (0, l.jsx)(u.FormSwitch, {
      className: "",
      value: a,
      onChange: e => c.default.setAutomaticGainControl(e, {
        page: h.AnalyticsPages.USER_SETTINGS,
        section: h.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
      }),
      disabled: m,
      children: N.default.Messages.AUTOMATIC_GAIN_CONTROL
    })]
  })
}