a(47120);
var t = a(735250),
    n = a(470079),
    l = a(120356),
    i = a.n(l),
    r = a(392711),
    o = a.n(r),
    c = a(481060),
    d = a(231239),
    N = a(881052),
    u = a(313201),
    _ = a(703656),
    m = a(981631),
    E = a(689938),
    I = a(461274);
let x = (0, u.hQ)();
s.Z = (e) => {
    let { email: s, guildId: a, onClose: l } = e,
        [r, u] = n.useState(''),
        [h, C] = n.useState(null),
        T = n.useCallback(async () => {
            if (null != a)
                try {
                    let e = await d.Z.verifyCode(r, a, s);
                    e.guild && (null == l || l(), (0, _.uL)(m.Z5c.CHANNEL(e.guild.id)));
                } catch (e) {
                    C(new N.Hx(e));
                }
        }, [r, s, a, l]),
        g = o().throttle(() => {
            d.Z.sendVerificationEmail(s, !0, a);
        }, 1000),
        O = async (e) => {
            null != r && '' !== r && e.charCode === m.yXg.ENTER && (await T());
        };
    return (0, t.jsxs)('div', {
        className: I.container,
        children: [
            (0, t.jsx)('div', { className: I.topImage }),
            (0, t.jsx)(c.Heading, {
                className: i()(I.centerText, I.header),
                variant: 'heading-xl/semibold',
                children: E.Z.Messages.HUB_VERIFY_EMAIL_ADDRESS
            }),
            (0, t.jsx)('div', {
                className: I.descriptionWidth,
                children: (0, t.jsx)(c.Text, {
                    className: I.centerText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: E.Z.Messages.HUB_PIN_DESCRIPTION.format({
                        email: s,
                        onClick: g
                    })
                })
            }),
            (0, t.jsxs)(c.FormItem, {
                className: I.formItem,
                children: [
                    (0, t.jsx)(c.FormTitle, {
                        id: x,
                        children: E.Z.Messages.HUB_ENTER_PIN
                    }),
                    (0, t.jsx)(c.TextInput, {
                        onKeyPress: O,
                        onChange: (e) => {
                            null != e && '' !== e && u(e);
                        },
                        error: null == h ? void 0 : h.getAnyErrorMessage(),
                        'aria-labelledby': x
                    })
                ]
            }),
            (0, t.jsx)(c.Button, {
                fullWidth: !0,
                onClick: T,
                size: c.Button.Sizes.LARGE,
                color: c.Button.Colors.BRAND,
                children: (0, t.jsx)(c.Text, {
                    className: I.submitText,
                    variant: 'text-sm/normal',
                    children: E.Z.Messages.SUBMIT
                })
            })
        ]
    });
};
