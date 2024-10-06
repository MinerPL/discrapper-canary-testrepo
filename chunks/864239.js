t.d(s, {
    Z: function () {
        return d;
    }
});
var n = t(735250);
t(470079);
var a = t(695346),
    i = t(682578),
    r = t(838436),
    o = t(51331),
    l = t(726985),
    c = t(689938);
function d() {
    var e;
    let s = null === (e = (0, i.J)()) || void 0 === e || e,
        t = a.DC.useSetting();
    return (0, n.jsx)(r.U, {
        setting: l.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, n.jsx)(o.Z, {
            title: c.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER,
            value: t,
            onChange: a.DC.updateSetting,
            disabled: !s,
            note: c.Z.Messages.NSFW_GUILDS_TOGGLE_CAPTION
        })
    });
}
