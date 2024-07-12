s.d(t, {
  Z: function() {
return p;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(704215),
  o = s(481060),
  l = s(906732),
  c = s(605236),
  d = s(441167),
  _ = s(695346),
  E = s(131951),
  u = s(924557),
  T = s(435064),
  I = s(779618),
  S = s(39604),
  N = s(703288),
  C = s(491758),
  m = s(183632),
  A = s(689938),
  h = s(6679),
  g = s(885582),
  O = s(549856);

function p(e) {
  let {
className: t,
showHeader: s = !0
  } = e, p = _.tU.useSetting(), {
enableViewerClipping: R
  } = d.Z.useExperiment({
location: 'Clips Settings'
  }, {
autoTrackExposure: !1
  }), {
analyticsLocations: x
  } = (0, l.ZP)(), M = (0, u.Go)(), {
viewerClipsEnabled: D
  } = (0, i.cj)([T.Z], () => T.Z.getSettings()), f = (0, I.Z)(E.Z);
  return a.useEffect(() => {
(0, c.EW)(r.z.CLIPS_SETTINGS_BETA_TAG);
  }), (0, n.jsxs)(l.Gt, {
value: x,
children: [
  (M || s) && (0, n.jsx)(o.FormSection, {
    className: t,
    tag: o.FormTitleTags.H1,
    title: s ? (0, n.jsxs)('div', {
      className: h.headerContainer,
      children: [
        A.Z.Messages.CLIPS,
        (0, n.jsx)(N.Z, {})
      ]
    }) : null,
    children: M && (0, n.jsxs)('form', {
      onSubmit: e => e.preventDefault(),
      children: [
        (0, n.jsx)(C.Z, {}),
        (0, n.jsx)(m.Z, {})
      ]
    })
  }),
  M && (0, n.jsx)(o.FormDivider, {}),
  (0, n.jsxs)(o.FormSection, {
    className: s || M ? O.marginTop20 : t,
    children: [
      (0, n.jsx)(o.FormSwitch, {
        hideBorder: !0,
        className: g.formItem,
        value: p,
        note: A.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
        onChange: e => S.yg({
          allowVoiceRecording: e
        }),
        children: A.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
      }),
      R && f && (0, n.jsx)(o.FormSwitch, {
        hideBorder: !0,
        className: g.formItem,
        value: D,
        note: A.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
        onChange: e => S.yl({
          enabled: e,
          trackAnalytics: !0
        }),
        children: A.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
      })
    ]
  })
]
  });
}