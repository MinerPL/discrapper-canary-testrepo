n.d(t, {
    Z: function () {
        return u;
    }
});
var s = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    l = n(565138),
    a = n(430824),
    r = n(388032),
    d = n(583117),
    c = n(767688);
function u(e) {
    let { guildId: t, title: n, transitionState: u, children: x, buttons: m, onClose: h } = e,
        g = (0, o.e7)([a.Z], () => a.Z.getGuild(t));
    if (null == g) return null;
    let j = (0, s.jsx)(i.Button, {
        onClick: h,
        children: r.intl.string(r.t.i4jeWV)
    });
    return (0, s.jsxs)(i.ModalRoot, {
        transitionState: u,
        size: i.ModalSize.SMALL,
        className: d.container,
        children: [
            (0, s.jsxs)(i.ModalHeader, {
                separator: !1,
                className: d.modalHeader,
                children: [
                    (0, s.jsx)('div', { className: d.gradientSplash }),
                    (0, s.jsx)('img', {
                        alt: '',
                        src: c,
                        className: d.heroImage
                    }),
                    (0, s.jsx)(i.Spacer, { size: 16 }),
                    (0, s.jsx)(i.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        className: d.title,
                        children: n
                    }),
                    (0, s.jsx)(i.Spacer, { size: 4 }),
                    (0, s.jsxs)('div', {
                        className: d.guildContainer,
                        children: [
                            (0, s.jsx)(l.Z, {
                                size: l.Z.Sizes.SMOL,
                                guild: g,
                                className: d.guildIcon
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: 'text-md/semibold',
                                color: 'text-secondary',
                                children: g.name
                            })
                        ]
                    }),
                    (0, s.jsx)(i.ModalCloseButton, {
                        onClick: h,
                        innerClassName: d.closeButton,
                        className: d.close
                    })
                ]
            }),
            x,
            (0, s.jsx)(i.ModalFooter, {
                className: d.footer,
                children: (0, s.jsx)('div', {
                    className: d.footerButtons,
                    children: null != m ? m : j
                })
            })
        ]
    });
}
