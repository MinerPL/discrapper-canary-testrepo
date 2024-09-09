t.d(s, {
    Z: function () {
        return c;
    }
});
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(921801),
    r = t(726985),
    o = t(689938),
    l = t(105756);
function c(e) {
    let { className: s, currentUser: t, handleDisableAccount: c, handleDeleteAccount: d } = e,
        _ = t.isClaimed();
    return (0, n.jsx)(i.F, {
        setting: r.s6.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, n.jsxs)(a.FormSection, {
            className: s,
            title: o.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
            children: [
                (0, n.jsx)(a.FormText, {
                    className: l.description,
                    type: a.FormText.Types.DESCRIPTION,
                    children: _ ? o.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_DESCRIPTION : o.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_DESCRIPTION_UNCLAIMED
                }),
                (0, n.jsxs)('div', {
                    className: l.buttonContainer,
                    children: [
                        _
                            ? (0, n.jsx)(a.Button, {
                                  className: l.disableButton,
                                  look: a.ButtonLooks.FILLED,
                                  color: a.ButtonColors.RED,
                                  size: a.ButtonSizes.SMALL,
                                  onClick: c,
                                  children: o.Z.Messages.DISABLE_ACCOUNT
                              })
                            : null,
                        (0, n.jsx)(i.F, {
                            setting: r.s6.ACCOUNT_DELETE_ACCOUNT,
                            children: (0, n.jsx)(a.Button, {
                                look: a.ButtonLooks.OUTLINED,
                                color: a.ButtonColors.RED,
                                size: a.ButtonSizes.SMALL,
                                onClick: d,
                                children: o.Z.Messages.DELETE_ACCOUNT
                            })
                        })
                    ]
                })
            ]
        })
    });
}
