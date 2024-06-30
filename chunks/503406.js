a(47120);
var n = a(735250), t = a(470079), l = a(120356), i = a.n(l), r = a(392711), o = a.n(r), c = a(481060), d = a(231239), N = a(881052), u = a(703656), _ = a(153124), m = a(981631), E = a(689938), I = a(192690);
let x = (0, _.hQ)();
s.Z = e => {
    let {
            email: s,
            guildId: a,
            onClose: l
        } = e, [r, _] = t.useState(''), [h, C] = t.useState(null), T = t.useCallback(async () => {
            if (null != a)
                try {
                    let e = await d.Z.verifyCode(r, a, s);
                    e.guild && (null == l || l(), (0, u.uL)(m.Z5c.CHANNEL(e.guild.id)));
                } catch (e) {
                    C(new N.Hx(e));
                }
        }, [
            r,
            s,
            a,
            l
        ]), g = o().throttle(() => {
            d.Z.sendVerificationEmail(s, !0, a);
        }, 1000), O = async e => {
            null != r && '' !== r && e.charCode === m.yXg.ENTER && await T();
        };
    return (0, n.jsxs)('div', {
        className: I.container,
        children: [
            (0, n.jsx)('div', { className: I.topImage }),
            (0, n.jsx)(c.Heading, {
                className: i()(I.centerText, I.header),
                variant: 'heading-xl/semibold',
                children: E.Z.Messages.HUB_VERIFY_EMAIL_ADDRESS
            }),
            (0, n.jsx)('div', {
                className: I.descriptionWidth,
                children: (0, n.jsx)(c.Text, {
                    className: I.centerText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: E.Z.Messages.HUB_PIN_DESCRIPTION.format({
                        email: s,
                        onClick: g
                    })
                })
            }),
            (0, n.jsxs)(c.FormItem, {
                className: I.formItem,
                children: [
                    (0, n.jsx)(c.FormTitle, {
                        id: x,
                        children: E.Z.Messages.HUB_ENTER_PIN
                    }),
                    (0, n.jsx)(c.TextInput, {
                        onKeyPress: O,
                        onChange: e => {
                            null != e && '' !== e && _(e);
                        },
                        error: null == h ? void 0 : h.getAnyErrorMessage(),
                        'aria-labelledby': x
                    })
                ]
            }),
            (0, n.jsx)(c.Button, {
                fullWidth: !0,
                onClick: T,
                size: c.Button.Sizes.LARGE,
                color: c.Button.Colors.BRAND,
                children: (0, n.jsx)(c.Text, {
                    className: I.submitText,
                    variant: 'text-sm/normal',
                    children: E.Z.Messages.SUBMIT
                })
            })
        ]
    });
};
