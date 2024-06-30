s.d(t, {
    Z: function () {
        return o;
    }
});
var n = s(735250);
s(470079);
var a = s(481060), i = s(695346), r = s(689938);
function o(e) {
    let t = i.R_.useSetting();
    return (0, n.jsx)(a.FormSwitch, {
        hideBorder: !0,
        value: !t,
        onChange: () => i.R_.updateSetting(!t),
        note: t ? null : r.Z.Messages.UNIQUE_USERNAME_TOGGLE_SUBTITLE.format({ username: e.legacyUsername }),
        children: r.Z.Messages.UNIQUE_USERNAME_TOGGLE_TITLE
    });
}
