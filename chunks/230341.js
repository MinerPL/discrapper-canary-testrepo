t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250),
    a = t(442837),
    i = t(718629),
    r = t(615830),
    o = t(838436),
    l = t(51331),
    c = t(726985),
    d = t(760373),
    _ = t(689938);
function u() {
    let e = (0, a.e7)([r.Z], () => r.Z.getPersistentCodesEnabled());
    return (0, n.jsx)(o.U, {
        setting: c.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
        children: (0, n.jsx)(l.Z, {
            value: e,
            onChange: i.Z.updatePersistentCodesEnabled,
            title: _.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES,
            note: _.Z.Messages.E2EE_PERSISTENT_CODES_DESCRIPTION.format({ helpArticle: d.$J })
        })
    });
}
