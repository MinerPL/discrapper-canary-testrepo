t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(735250),
    a = t(512722),
    i = t.n(a),
    r = t(442837),
    o = t(594174),
    l = t(695346),
    c = t(838436),
    d = t(51331),
    _ = t(726985),
    u = t(689938);
function E() {
    let e = l.xM.useSetting(),
        s = (0, r.e7)([o.default], () => {
            let e = o.default.getCurrentUser();
            return i()(null != e, 'ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined'), e.nsfwAllowed;
        });
    return (0, n.jsx)(c.U, {
        setting: _.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, n.jsx)(d.Z, {
            value: !!s && e,
            onChange: l.xM.updateSetting,
            title: u.Z.Messages.NSFW_DM_COMMANDS_HEADER,
            note: u.Z.Messages.NSFW_DM_COMMANDS_CAPTION,
            disabled: !s
        })
    });
}
