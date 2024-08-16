n.d(s, {
    l: function () {
        return d;
    },
    v: function () {
        return u;
    }
});
var t = n(735250);
n(470079);
var l = n(481060),
    i = n(144114),
    a = n(489813),
    r = n(815660),
    o = n(689938);
function d() {
    return (0, t.jsx)(t.Fragment, {
        children: (0, t.jsx)(a.PU, {
            icon: l.MobilePhoneIcon,
            text: o.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
            footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
            meetsRequirement: !1,
            children: (0, t.jsx)(l.Tooltip, {
                text: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
                children: (e) =>
                    (0, t.jsx)(l.Button, {
                        ...e,
                        size: l.Button.Sizes.SMALL,
                        disabled: !0,
                        children: o.Z.Messages.VERIFY
                    })
            })
        })
    });
}
function u(e) {
    let { isUserVerified: s } = e,
        d = s ? o.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED : o.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;
    return (0, t.jsx)(t.Fragment, {
        children: (0, t.jsx)(a.PU, {
            icon: l.MobilePhoneIcon,
            text: d,
            footnote: o.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
            meetsRequirement: s,
            children: (0, t.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: () => {
                    (0, l.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('76540'), n.e('24558')]).then(n.bind(n, 607018));
                            return (s) =>
                                (0, t.jsx)(e, {
                                    reason: i.L.GUILD_PHONE_REQUIRED,
                                    ...s
                                });
                        },
                        { modalKey: r.M }
                    );
                },
                children: o.Z.Messages.VERIFY
            })
        })
    });
}
