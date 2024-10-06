t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(481060),
    r = t(846027),
    o = t(131951),
    l = t(358085),
    c = t(689938),
    d = t(113207);
function _() {
    let {
            videoHook: e,
            experimentalSoundshare: s,
            useSystemScreensharePicker: t,
            supportsVideoHook: _,
            supportsExperimentalSoundshare: u,
            supportsSystemScreensharePicker: E
        } = (0, a.cj)([o.Z], () => ({
            videoHook: o.Z.getVideoHook(),
            experimentalSoundshare: o.Z.getExperimentalSoundshare(),
            useSystemScreensharePicker: o.Z.getUseSystemScreensharePicker(),
            supportsVideoHook: o.Z.supportsVideoHook(),
            supportsExperimentalSoundshare: o.Z.supportsExperimentalSoundshare(),
            supportsSystemScreensharePicker: o.Z.supportsSystemScreensharePicker()
        })),
        T = E && (0, l.isMac)();
    return _ || u || T
        ? (0, n.jsxs)(i.FormSection, {
              className: d.marginBottom20,
              title: c.Z.Messages.FORM_LABEL_SCREENSHARE,
              children: [
                  _ &&
                      (0, n.jsx)(i.FormSwitch, {
                          value: e,
                          onChange: (e) => r.Z.setVideoHook(e),
                          note: c.Z.Messages.FORM_HELP_VIDEO_HOOK,
                          children: c.Z.Messages.USER_SETTINGS_VOICE_VIDEO_HOOK_LABEL
                      }),
                  u &&
                      (0, n.jsx)(i.FormSwitch, {
                          value: s,
                          onChange: (e) => r.Z.setExperimentalSoundshare(e),
                          children: c.Z.Messages.USER_SETTINGS_VOICE_EXPERIMENTAL_SOUNDSHARE_LABEL
                      }),
                  T &&
                      (0, n.jsx)(i.FormSwitch, {
                          value: t,
                          onChange: (e) => r.Z.setUseSystemScreensharePicker(e),
                          children: c.Z.Messages.USER_SETTINGS_VOICE_SYSTEM_PICKER_LABEL
                      })
              ]
          })
        : null;
}
