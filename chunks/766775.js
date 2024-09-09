t.r(n),
    t.d(n, {
        default: function () {
            return m;
        }
    });
var a = t(735250);
t(470079);
var i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(388905),
    s = t(313201),
    c = t(659900),
    d = t(473855),
    u = t(689938),
    p = t(864462);
function m(e) {
    let { transitionState: n, onClose: t, guildTemplate: i } = e,
        { form: m, preview: x, handleSubmit: f } = (0, c.Z)(i, !1),
        b = (0, s.Dt)();
    return (0, a.jsx)('div', {
        children: (0, a.jsxs)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            transitionState: n,
            className: r()(p.modalRoot),
            'aria-labelledby': b,
            children: [
                (0, a.jsxs)('div', {
                    className: p.modalContainer,
                    children: [
                        (0, a.jsx)('div', {
                            className: r()(p.modalSection, p.ctaSection),
                            children: (0, a.jsx)('div', {
                                className: p.ctaContainer,
                                children: (0, a.jsx)(d.Z, {
                                    guildTemplate: i,
                                    headerId: b
                                })
                            })
                        }),
                        (0, a.jsx)('div', {
                            className: r()(p.modalSection, p.formSection),
                            children: (0, a.jsxs)(o.Scroller, {
                                className: p.formContainer,
                                children: [
                                    (0, a.jsx)(l.Dx, {
                                        className: p.header,
                                        children: u.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
                                    }),
                                    m,
                                    x
                                ]
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(o.ModalFooter, {
                    className: p.modalFooter,
                    children: [
                        (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            onClick: t,
                            children: u.Z.Messages.CLOSE
                        }),
                        (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.GREEN,
                            onClick: async () => {
                                null != (await f()) && t();
                            },
                            children: u.Z.Messages.CREATE
                        })
                    ]
                })
            ]
        })
    });
}
