o.r(t), o(47120);
var n = o(735250);
o(470079);
var r = o(435935), i = o(481060), s = o(259756), a = o(785681), c = o(880257), l = o(863552), d = o(292352), h = o(689938), C = o(578546), _ = o(128216);
let x = {
        [d.MY.USER_INTERACTION]: (0, n.jsx)(l.Z, {
            width: 18,
            height: 18
        }),
        [d.MY.USER_CALLED]: (0, n.jsx)(i.PhoneCallIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [d.MY.USER_ADD]: (0, n.jsx)(i.FriendsIcon, {
            size: 'custom',
            color: 'currentColor',
            className: C.personWavingIcon,
            width: 22,
            height: 22
        }),
        [d.MY.GUILD_ADD]: (0, n.jsx)(i.ServerGridIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 22,
            height: 22
        }),
        [d.MY.GUILD_INTERACTION]: (0, n.jsx)(i.TextIcon, {
            size: 'custom',
            color: 'currentColor',
            className: C.threadIcon,
            width: 22,
            height: 22
        })
    }, u = e => {
        let {
            header: t,
            description: o,
            icon: s
        } = e;
        return (0, n.jsxs)(r.k, {
            className: C.row,
            grow: 0,
            children: [
                (0, n.jsx)('div', {
                    className: C.iconContainer,
                    children: s
                }),
                (0, n.jsxs)('div', {
                    className: C.rowContent,
                    children: [
                        (0, n.jsx)(i.Text, {
                            className: C.__invalid_rowHeader,
                            variant: 'text-sm/bold',
                            children: t
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-xs/medium',
                            children: o
                        })
                    ]
                })
            ]
        });
    };
t.default = e => {
    let {
            transitionState: t,
            onClose: o
        } = e, l = (0, a.o)(h.Z.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN, h.Z.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT), I = (0, c.Z)(), m = Array.from(d.tx.entries()), E = (0, s.Xi)({ location: 'family_center_tooltip_modal_web' });
    return (0, n.jsxs)(i.ModalRoot, {
        transitionState: t,
        children: [
            (0, n.jsx)('img', {
                className: C.art,
                src: _,
                alt: h.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
            }),
            (0, n.jsx)(i.ModalContent, {
                className: C.content,
                children: (0, n.jsxs)(r.k, {
                    direction: r.k.Direction.VERTICAL,
                    align: r.k.Align.CENTER,
                    children: [
                        (0, n.jsx)(i.Heading, {
                            className: C.header,
                            color: 'header-primary',
                            variant: 'heading-lg/semibold',
                            children: (0, n.jsx)(i.HeadingLevel, { children: l })
                        }),
                        m.map(e => {
                            let [t, o] = e;
                            return (0, n.jsx)(u, {
                                icon: x[t],
                                header: o.tooltipHeader(),
                                description: o.tooltipDescription(null != I ? I : void 0, E)
                            }, t);
                        })
                    ]
                })
            }),
            (0, n.jsx)(i.ModalFooter, {
                children: (0, n.jsx)(i.Button, {
                    className: C.__invalid_button,
                    type: 'button',
                    color: i.Button.Colors.BRAND,
                    onClick: o,
                    children: h.Z.Messages.GOT_IT
                })
            })
        ]
    });
};
