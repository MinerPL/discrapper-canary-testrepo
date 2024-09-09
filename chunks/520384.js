t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(977059),
    r = t(921801),
    o = t(695346),
    l = t(726985),
    c = t(689938),
    d = t(224499);
function _() {
    let { enabled: e } = (0, i.S)({ location: 'UserSettingsStreamPreviews' }),
        s = o.I0.useSetting();
    return e
        ? (0, n.jsx)(r.F, {
              setting: l.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
              children: (0, n.jsx)(a.FormSection, {
                  className: d.marginBottom20,
                  title: c.Z.Messages.USER_SETTINGS_STREAM_PREVIEWS,
                  children: (0, n.jsx)(a.FormSwitch, {
                      value: s,
                      onChange: o.I0.updateSetting,
                      note: c.Z.Messages.USER_SETTINGS_DISABLE_STREAM_PREVIEWS_DESC,
                      children: c.Z.Messages.USER_SETTINGS_DISABLE_STREAM_PREVIEWS
                  })
              })
          })
        : null;
}
