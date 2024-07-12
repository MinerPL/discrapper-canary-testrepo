s.d(t, {
  Z: function() {
return d;
  }
});
var n = s(735250);
s(470079);
var a = s(442837),
  i = s(481060),
  r = s(846027),
  o = s(131951),
  l = s(689938),
  c = s(549856);

function d() {
  let {
videoHook: e,
experimentalSoundshare: t,
supportsVideoHook: s,
supportsExperimentalSoundshare: d
  } = (0, a.cj)([o.Z], () => ({
videoHook: o.Z.getVideoHook(),
experimentalSoundshare: o.Z.getExperimentalSoundshare(),
supportsVideoHook: o.Z.supportsVideoHook(),
supportsExperimentalSoundshare: o.Z.supportsExperimentalSoundshare()
  }));
  return s || d ? (0, n.jsxs)(i.FormSection, {
className: c.marginBottom20,
title: l.Z.Messages.FORM_LABEL_SCREENSHARE,
children: [
  s && (0, n.jsx)(i.FormSwitch, {
    value: e,
    onChange: e => r.Z.setVideoHook(e),
    note: l.Z.Messages.FORM_HELP_VIDEO_HOOK,
    children: l.Z.Messages.USER_SETTINGS_VOICE_VIDEO_HOOK_LABEL
  }),
  d && (0, n.jsx)(i.FormSwitch, {
    value: t,
    onChange: e => r.Z.setExperimentalSoundshare(e),
    children: l.Z.Messages.USER_SETTINGS_VOICE_EXPERIMENTAL_SOUNDSHARE_LABEL
  })
]
  }) : null;
}