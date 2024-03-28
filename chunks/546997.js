"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("846027"),
  r = s("131951"),
  o = s("689938"),
  d = s("794711");

function u() {
  let {
    videoHook: e,
    experimentalSoundshare: t,
    supportsVideoHook: s,
    supportsExperimentalSoundshare: u
  } = (0, n.useStateFromStoresObject)([r.default], () => ({
    videoHook: r.default.getVideoHook(),
    experimentalSoundshare: r.default.getExperimentalSoundshare(),
    supportsVideoHook: r.default.supportsVideoHook(),
    supportsExperimentalSoundshare: r.default.supportsExperimentalSoundshare()
  }));
  return s || u ? (0, a.jsxs)(l.FormSection, {
    className: d.marginBottom20,
    title: o.default.Messages.FORM_LABEL_SCREENSHARE,
    children: [s && (0, a.jsx)(l.FormSwitch, {
      value: e,
      onChange: e => i.default.setVideoHook(e),
      note: o.default.Messages.FORM_HELP_VIDEO_HOOK,
      children: o.default.Messages.USER_SETTINGS_VOICE_VIDEO_HOOK_LABEL
    }), u && (0, a.jsx)(l.FormSwitch, {
      value: t,
      onChange: e => i.default.setExperimentalSoundshare(e),
      children: o.default.Messages.USER_SETTINGS_VOICE_EXPERIMENTAL_SOUNDSHARE_LABEL
    })]
  }) : null
}