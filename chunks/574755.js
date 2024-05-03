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
  f = s("779618"),
  m = s("39604"),
  _ = s("703288"),
  g = s("491758"),
  h = s("183632"),
  I = s("689938"),
  N = s("972266"),
  p = s("894881"),
  C = s("949086");

function A(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, A = c.ClipsAllowVoiceRecording.useSetting(), {
    enableViewerClipping: O
  } = u.default.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: !1
  }), {
    analyticsLocations: x
  } = (0, o.default)(), R = (0, E.useEnableClips)(), {
    viewerClipsEnabled: M
  } = (0, l.useStateFromStoresObject)([T.default], () => T.default.getSettings()), v = (0, f.default)(S.default);
  return n.useEffect(() => {
    (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG)
  }), (0, a.jsxs)(o.AnalyticsLocationProvider, {
    value: x,
    children: [(R || s) && (0, a.jsx)(r.FormSection, {
      className: t,
      tag: r.FormTitleTags.H1,
      title: s ? (0, a.jsxs)("div", {
        className: N.headerContainer,
        children: [I.default.Messages.CLIPS, (0, a.jsx)(_.default, {})]
      }) : null,
      children: R && (0, a.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(h.default, {})]
      })
    }), R && (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)(r.FormSection, {
      className: s || R ? C.marginTop20 : t,
      children: [(0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: p.formItem,
        value: A,
        note: I.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
        onChange: e => m.updateAllowVoiceRecording({
          allowVoiceRecording: e
        }),
        children: I.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
      }), O && v && (0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: p.formItem,
        value: M,
        note: I.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
        onChange: e => m.updateViewerClipsEnabled({
          enabled: e,
          trackAnalytics: !0
        }),
        children: I.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
      })]
    })]
  })
}