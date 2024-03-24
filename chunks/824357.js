"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("151426"),
  r = s("77078"),
  o = s("685665"),
  d = s("10641"),
  u = s("103979"),
  c = s("845579"),
  S = s("42887"),
  E = s("56947"),
  T = s("386045"),
  f = s("18346"),
  _ = s("803725"),
  m = s("311207"),
  g = s("653485"),
  h = s("462491"),
  N = s("782340"),
  I = s("416255"),
  p = s("824905"),
  C = s("890957");

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
      AnalyticsLocationProvider: s
    } = (0, o.default)(),
    A = (0, E.useEnableClips)(),
    {
      viewerClipsEnabled: O
    } = (0, l.useStateFromStoresObject)([T.default], () => T.default.getSettings()),
    x = (0, f.default)(S.default);
  return n.useEffect(() => {
    (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG)
  }), (0, a.jsxs)(s, {
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
        onChange: e => _.updateAllowVoiceRecording({
          allowVoiceRecording: e
        }),
        children: N.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
      }), t && x && (0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: p.formItem,
        value: O,
        note: N.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
        onChange: e => _.updateViewerClipsEnabled({
          enabled: e,
          trackAnalytics: !0
        }),
        children: N.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
      })]
    })]
  })
}