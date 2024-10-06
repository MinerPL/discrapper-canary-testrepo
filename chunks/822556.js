n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(230711),
    l = n(906732),
    r = n(981631),
    o = n(689938);
function c() {
    let { analyticsLocations: e } = (0, l.ZP)();
    return (0, i.jsx)(s.MenuItem, {
        id: 'voice-settings',
        label: o.Z.Messages.VOICE_SETTINGS,
        action: () => a.Z.open(r.oAB.VOICE, null, { analyticsLocations: e }),
        icon: s.SettingsIcon
    });
}
