a.r(o), a.d(o, {
    default: function () {
        return h;
    }
});
var n = a(735250);
a(470079);
var i = a(120356), r = a.n(i), t = a(481060), l = a(388905), c = a(153124), d = a(659900), s = a(473855), _ = a(689938), f = a(439603);
function h(e) {
    let {
            transitionState: o,
            onClose: a,
            guildTemplate: i
        } = e, {
            form: h,
            preview: m,
            handleSubmit: p
        } = (0, d.Z)(i, !1), u = (0, c.Dt)();
    return (0, n.jsx)('div', {
        children: (0, n.jsxs)(t.ModalRoot, {
            size: t.ModalSize.DYNAMIC,
            transitionState: o,
            className: r()(f.modalRoot),
            'aria-labelledby': u,
            children: [
                (0, n.jsxs)('div', {
                    className: f.modalContainer,
                    children: [
                        (0, n.jsx)('div', {
                            className: r()(f.modalSection, f.ctaSection),
                            children: (0, n.jsx)('div', {
                                className: f.ctaContainer,
                                children: (0, n.jsx)(s.Z, {
                                    guildTemplate: i,
                                    headerId: u
                                })
                            })
                        }),
                        (0, n.jsx)('div', {
                            className: r()(f.modalSection, f.formSection),
                            children: (0, n.jsxs)(t.Scroller, {
                                className: f.formContainer,
                                children: [
                                    (0, n.jsx)(l.Dx, {
                                        className: f.header,
                                        children: _.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
                                    }),
                                    h,
                                    m
                                ]
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(t.ModalFooter, {
                    className: f.modalFooter,
                    children: [
                        (0, n.jsx)(t.Button, {
                            color: t.Button.Colors.PRIMARY,
                            onClick: a,
                            children: _.Z.Messages.CLOSE
                        }),
                        (0, n.jsx)(t.Button, {
                            color: t.Button.Colors.GREEN,
                            onClick: async () => {
                                null != await p() && a();
                            },
                            children: _.Z.Messages.CREATE
                        })
                    ]
                })
            ]
        })
    });
}
