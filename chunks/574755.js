"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("524437"),
  r = s("481060"),
  o = s("906732"),
  d = s("605236"),
  u = s("441167"),
  c = s("695346"),
  S = s("131951"),
  E = s("924557"),
  T = s("435064"),
  _ = s("779618"),
  f = s("39604"),
  m = s("703288"),
  g = s("491758"),
  h = s("183632"),
  N = s("689938"),
  I = s("415996"),
  p = s("893427"),
  C = s("794711");

function A() {
  let e = c.ClipsAllowVoiceRecording.useSetting(),
    {
      enableViewerClipping: t
    } = u.default.useExperiment({
      location: "Clips Settings"
    }, {
      autoTrackExposure: !1
    }),
    {
      analyticsLocations: s
    } = (0, o.default)(),
    A = (0, E.useEnableClips)(),
    {
      viewerClipsEnabled: O
    } = (0, l.useStateFromStoresObject)([T.default], () => T.default.getSettings()),
    x = (0, _.default)(S.default);
  return n.useEffect(() => {
    (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG)
  }), (0, a.jsxs)(o.AnalyticsLocationProvider, {
    value: s,
    children: [(0, a.jsx)(r.FormSection, {
      tag: r.FormTitleTags.H1,
      title: (0, a.jsxs)("div", {
        className: I.headerContainer,
        children: [N.default.Messages.CLIPS, (0, a.jsx)(m.default, {})]
      }),
      children: A && (0, a.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(h.default, {})]
      })
    }), A && (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)(r.FormSection, {
      className: C.marginTop20,
      children: [(0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: p.formItem,
        value: e,
        note: N.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
        onChange: e => f.updateAllowVoiceRecording({
          allowVoiceRecording: e
        }),
        children: N.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
      }), t && x && (0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: p.formItem,
        value: O,
        note: N.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
        onChange: e => f.updateViewerClipsEnabled({
          enabled: e,
          trackAnalytics: !0
        }),
        children: N.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
      })]
    })]
  })
}