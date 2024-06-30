t.d(n, {
    h: function () {
        return l;
    },
    m: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var r = t(481060), o = t(17894), a = t(689938), s = t(484595);
let l = e => {
    let {
        onConfirm: n,
        onCancel: t,
        title: l,
        subtitle: c,
        confirmCta: d,
        showOpenDiscord: u = !0
    } = e;
    return (0, i.jsxs)('div', {
        className: s.confirmationContainer,
        children: [
            (0, i.jsx)(r.Heading, {
                className: s.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: l
            }),
            null != c ? (0, i.jsx)(r.Text, {
                className: s.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: c
            }) : null,
            (0, i.jsxs)('div', {
                className: s.buttonContainer,
                children: [
                    u && (0, i.jsx)(r.Button, {
                        fullWidth: !0,
                        onClick: () => (0, o.Z)('application_sub_mweb_success_modal'),
                        children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                    }),
                    (0, i.jsx)(r.Button, {
                        fullWidth: !0,
                        color: r.Button.Colors.PRIMARY,
                        onClick: n,
                        children: d
                    }),
                    null != t && (0, i.jsx)(r.Button, {
                        fullWidth: !0,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        onClick: t,
                        children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
                    })
                ]
            })
        ]
    });
};
function c(e) {
    let {
        onConfirm: n,
        tierName: t,
        subscription: l
    } = e;
    return (0, i.jsxs)('div', {
        className: s.confirmationContainer,
        children: [
            (0, i.jsx)(r.Heading, {
                className: s.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({ tier: t })
            }),
            (0, i.jsx)(r.Text, {
                className: s.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({ timestamp: null == l ? void 0 : l.currentPeriodEnd })
            }),
            (0, i.jsxs)('div', {
                className: s.buttonContainer,
                children: [
                    (0, i.jsx)(r.Button, {
                        className: s.__invalid_openDiscordButton,
                        onClick: () => (0, o.Z)('application_sub_mweb_success_modal'),
                        children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                    }),
                    (0, i.jsx)(r.Button, {
                        className: s.__invalid_doneButton,
                        look: r.Button.Looks.BLANK,
                        onClick: n,
                        children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                    })
                ]
            })
        ]
    });
}
