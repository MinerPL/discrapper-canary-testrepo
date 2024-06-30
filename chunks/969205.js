n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var s = n(481060), a = n(300284), r = n(785717), l = n(993409), o = n(689938);
function c(e) {
    let {onClose: t} = e, {trackUserProfileAction: n} = (0, r.KZ)(), c = (0, a.Z)();
    return (0, i.jsx)(l.Z, {
        variant: 'banner',
        icon: s.PencilIcon,
        text: o.Z.Messages.EDIT_PROFILE,
        onClick: () => {
            n({ action: 'EDIT_PROFILE' }), null == t || t(), c();
        }
    });
}
