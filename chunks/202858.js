s.d(t, {
    Yn: function () {
        return u;
    }
}), s(411104), s(47120);
var n = s(735250), a = s(470079), i = s(283693), r = s(481060), o = s(816814), l = s(200483), c = s(981631), d = s(689938);
function _(e) {
    let {
            onError: t,
            onSuccess: s,
            PasswordConfirm: r,
            ...l
        } = e, [_, E] = a.useState('');
    return (0, n.jsx)(r, {
        ...l,
        handleSubmit: e => o.Z.enableMFAStart(e),
        onError: e => {
            var n;
            if (('object' == typeof (n = e) && null != n && (0, i.nr)(n, 'code') && 'number' == typeof n.code ? n.code : 0) === c.evJ.MFA_INVALID_SECRET)
                s(_), l.onClose();
            else
                t(e);
        },
        onPasswordChange: E,
        title: d.Z.Messages.TWO_FA_ENABLE,
        actionText: d.Z.Messages.CONTINUE,
        skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
    });
}
function E(e, t) {
    return new Promise(a => {
        (0, r.openModalLazy)(async () => {
            let {default: i} = await Promise.all([
                s.e('49368'),
                s.e('23746')
            ]).then(s.bind(s, 837651));
            return s => (0, n.jsx)(i, {
                ...s,
                password: e,
                emailToken: t,
                handleEnableMFASuccess: a
            });
        });
    });
}
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise(t => {
        (0, r.openModalLazy)(async () => {
            let {default: t} = await Promise.all([
                s.e('76540'),
                s.e('22241')
            ]).then(s.bind(s, 628908));
            return s => (0, n.jsx)(t, {
                ...s,
                isTotp: e
            });
        }, {
            onCloseCallback: t,
            onCloseRequest: c.VqG
        });
    });
}
async function T() {
    let e = await new Promise((e, t) => {
        (0, r.openModalLazy)(async () => {
            let {default: a} = await s.e('24642').then(s.bind(s, 279837));
            return s => (0, n.jsx)(_, {
                ...s,
                onSuccess: e,
                onError: t,
                PasswordConfirm: a
            });
        });
    });
    if ((0, l.j)()) {
        var t;
        let a = await (t = e, new Promise(e => {
            (0, r.openModalLazy)(async () => {
                let {default: a} = await s.e('94566').then(s.bind(s, 965072));
                return s => (0, n.jsx)(a, {
                    ...s,
                    onFormSubmit: async e => await o.Z.verifyEmailCode(e),
                    onResend: async () => {
                        await o.Z.resendEmailCode(t);
                    },
                    onSuccess: e,
                    headerText: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
                    confirmButtonText: d.Z.Messages.NEXT
                });
            });
        }));
        await E(e, null == a ? void 0 : a.token);
    } else
        await E(e);
    await u();
}
t.ZP = { enableMFA: T };
