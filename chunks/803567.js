s.d(t, {
  Z: function() {
return L;
  }
}), s(653041);
var n, a, i = s(735250);
s(470079);
var r = s(120356),
  o = s.n(r),
  l = s(442837),
  c = s(780384),
  d = s(481060),
  _ = s(846027),
  E = s(111672),
  u = s(921801),
  T = s(463395),
  I = s(131951),
  S = s(285952),
  N = s(153124),
  C = s(626135),
  m = s(63063),
  A = s(210887),
  g = s(726985),
  h = s(981631),
  O = s(689938),
  p = s(549856);
let R = s(775322),
  x = s(853453),
  M = (0, N.hQ)();
(a = n || (n = {}))[a.NONE = 0] = 'NONE', a[a.STANDARD = 1] = 'STANDARD', a[a.KRISP = 2] = 'KRISP';
let f = {
  page: h.ZY5.USER_SETTINGS,
  section: h.jXE.SETTINGS_VOICE_AND_VIDEO
};

function D(e) {
  let t = e.currentTarget;
  C.default.track(h.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
text: t.text,
href: t.href,
location: {
  page: h.ZY5.USER_SETTINGS,
  section: h.jXE.SETTINGS_VOICE_AND_VIDEO
}
  });
}

function P() {
  let e = (0, l.e7)([A.Z], () => A.Z.theme),
{
  noiseCancellation: t,
  noiseSuppression: s,
  noiseSuppressionSupported: n,
  noiseCancellationSupported: a
} = (0, l.cj)([I.Z], () => ({
  noiseCancellation: I.Z.getNoiseCancellation(),
  noiseSuppression: I.Z.getNoiseSuppression(),
  noiseSuppressionSupported: I.Z.isNoiseSuppressionSupported(),
  noiseCancellationSupported: I.Z.isNoiseCancellationSupported()
}));
  if (!n && !a)
return null;
  let r = [];
  return a && r.push({
name: O.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
value: 2
  }), n && r.push({
name: O.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
value: 1
  }), r.push({
name: O.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
value: 0
  }), (0, i.jsxs)(d.FormSection, {
className: p.marginBottom20,
children: [
  (0, i.jsx)(d.FormTitle, {
    id: M,
    tag: d.FormTitleTags.H3,
    className: p.marginBottom8,
    children: O.Z.Messages.NOISE_SUPPRESSION
  }),
  (0, i.jsx)(d.FormText, {
    type: d.FormText.Types.DESCRIPTION,
    className: p.marginBottom8,
    children: O.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
  }),
  (0, i.jsx)(d.RadioGroup, {
    options: r,
    onChange: e => {
      _.Z.setNoiseCancellation(2 === e.value, f), _.Z.setNoiseSuppression(1 === e.value, f);
    },
    value: t ? 2 : s ? 1 : 0
  }),
  a && (0, i.jsx)(d.FormNotice, {
    className: p.marginBottom8,
    type: d.FormNoticeTypes.PRIMARY,
    imageData: {
      src: (0, c.ap)(e) ? R : x,
      width: 70,
      height: 40
    },
    align: S.Z.Align.CENTER,
    body: (0, i.jsx)(d.Anchor, {
      href: m.Z.getArticleURL(h.BhN.NOISE_SUPPRESSION),
      onClick: D,
      children: O.Z.Messages.LEARN_MORE
    })
  }),
  (0, i.jsx)(d.FormDivider, {})
]
  });
}

function L() {
  let {
inputMode: e,
inputDeviceId: t,
echoCancellation: s,
automaticGainControl: n,
vadAutoThreshold: a,
vadUseKrisp: r,
sidechainCompression: c
  } = (0, l.cj)([I.Z], () => ({
inputMode: I.Z.getMode(),
inputDeviceId: I.Z.getInputDeviceId(),
echoCancellation: I.Z.getEchoCancellation(),
automaticGainControl: I.Z.getAutomaticGainControl(),
vadAutoThreshold: I.Z.getModeOptions().autoThreshold,
vadUseKrisp: I.Z.getModeOptions().vadUseKrisp,
sidechainCompression: I.Z.getSidechainCompression()
  })), {
hasEchoCancellation: S,
hasNoiseSuppression: N,
hasAutomaticGainControl: C
  } = (0, l.cj)([T.Z], () => ({
hasEchoCancellation: T.Z.hasEchoCancellation(t),
hasNoiseSuppression: T.Z.hasNoiseSuppression(t),
hasAutomaticGainControl: T.Z.hasAutomaticGainControl(t)
  }), [t]), m = S || N || C, A = e === h.pM4.VOICE_ACTIVITY && a, {
enableSidechainCompression: R
  } = E.Z.getCurrentConfig({
location: 'UserSettingsVoiceProcessing'
  });
  return (0, i.jsxs)(d.FormSection, {
className: p.marginBottom20,
title: O.Z.Messages.FORM_LABEL_VOICE_PROCESSING,
children: [
  m && (0, i.jsx)(d.FormText, {
    className: p.marginBottom20,
    type: d.FormText.Types.DESCRIPTION,
    children: O.Z.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
  }),
  (0, i.jsx)(u.F, {
    setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
    children: (0, i.jsx)(d.FormSwitch, {
      className: o()(p.marginTop8, p.marginBottom20),
      value: s,
      onChange: e => _.Z.setEchoCancellation(e, {
        page: h.ZY5.USER_SETTINGS,
        section: h.jXE.SETTINGS_VOICE_AND_VIDEO
      }),
      disabled: S,
      children: O.Z.Messages.ECHO_CANCELLATION
    })
  }),
  R && (0, i.jsx)(u.F, {
    setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
    children: (0, i.jsx)(d.FormSwitch, {
      className: o()(p.marginTop8, p.marginBottom20),
      value: c,
      onChange: e => _.Z.setSidechainCompression(e),
      note: O.Z.Messages.USER_SETTINGS_SIDECHAIN_COMPRESSION,
      children: O.Z.Messages.SIDECHAIN_COMPRESSION
    })
  }),
  (0, i.jsx)(u.F, {
    setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
    children: (0, i.jsx)(P, {})
  }),
  (0, i.jsx)(u.F, {
    setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
    children: (0, i.jsx)(d.FormSwitch, {
      value: r,
      onChange: t => _.Z.setMode(e, {
        vadUseKrisp: t
      }),
      note: O.Z.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
      disabled: !A,
      children: O.Z.Messages.ADVANCED_VOICE_ACTIVITY
    })
  }),
  (0, i.jsx)(u.F, {
    setting: g.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
    children: (0, i.jsx)(d.FormSwitch, {
      className: '',
      value: n,
      onChange: e => _.Z.setAutomaticGainControl(e, {
        page: h.ZY5.USER_SETTINGS,
        section: h.jXE.SETTINGS_VOICE_AND_VIDEO
      }),
      note: O.Z.Messages.USER_SETTINGS_AUTOMATIC_GAIN_CONTROL,
      disabled: C,
      children: O.Z.Messages.AUTOMATIC_GAIN_CONTROL
    })
  })
]
  });
}