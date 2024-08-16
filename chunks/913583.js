n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(735250);
n(470079);
var r = n(990547),
    i = n(481060),
    a = n(213609),
    l = n(388905),
    o = n(760213),
    c = n(689938),
    u = n(539951);
function d(e) {
    let { onDismiss: t } = e;
    return (
        (0, a.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }),
        (0, s.jsxs)(l.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
                (0, s.jsx)(l.Dx, { children: c.Z.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT }),
                (0, s.jsx)(i.Text, {
                    className: u.chooseAccountHelpText,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: c.Z.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER
                }),
                (0, s.jsx)(o.Z, {
                    actionText: c.Z.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                    onAction: (e) => {
                        e === o.W.LOGIN_REQUIRED && t();
                    }
                }),
                (0, s.jsx)('div', {
                    className: u.actions,
                    children: (0, s.jsx)(i.Button, {
                        className: u.__invalid_chooseAccountButton,
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.PRIMARY,
                        onClick: t,
                        size: i.Button.Sizes.MEDIUM,
                        children: (0, s.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            children: c.Z.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                        })
                    })
                })
            ]
        })
    );
}
