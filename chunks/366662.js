"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("629109"),
  r = s("42887"),
  o = s("782340"),
  d = s("890957");

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