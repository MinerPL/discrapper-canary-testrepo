t.d(s, {
    Z: function () {
        return o;
    }
});
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(993413),
    r = t(689938);
function o(e) {
    let { sectionTitle: s, errors: t, onPronounsChange: o, pendingPronouns: l, placeholder: c, currentPronouns: d, disabled: _ = !1 } = e;
    return (0, n.jsx)(i.Z, {
        title: s,
        errors: t,
        disabled: _,
        children: (0, n.jsx)(a.TextInput, {
            placeholder: null != c ? c : r.Z.Messages.PROFILE_CUSTOMIZATION_PRONOUNS_PLACEHOLDER,
            maxLength: 40,
            value: null != l ? l : d,
            onChange: function (e) {
                o(e === d ? void 0 : e);
            },
            disabled: _
        })
    });
}
