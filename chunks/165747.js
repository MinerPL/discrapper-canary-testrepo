n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(735250);
n(470079);
var s = n(993409), i = n(901952), l = n(689938), o = n(472375);
function a(e) {
    let {
        user: t,
        hideMessageInput: n,
        hideExampleButton: a
    } = e;
    return n ? (0, r.jsx)('footer', {
        className: o.footer,
        children: !a && (0, r.jsx)(s.Z, {
            variant: 'text',
            text: l.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
            fullWidth: !0
        })
    }) : (0, r.jsx)('footer', {
        inert: '',
        className: o.footer,
        children: (0, r.jsx)(i.Z, { user: t })
    });
}
