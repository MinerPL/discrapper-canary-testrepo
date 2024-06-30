a.r(t);
var s = a(735250);
a(470079);
var n = a(481060), o = a(430824), l = a(153124), d = a(614812), c = a(689938), r = a(768506);
t.default = e => {
    let {
            onClose: t,
            guildId: a
        } = e, i = (0, l.Dt)(), u = c.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({ helpdeskArticle: d.z }), _ = o.Z.getGuild(a);
    return null != _ && (u = c.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
        guildName: _.name,
        helpdeskArticle: d.z
    })), (0, s.jsxs)(n.ModalRoot, {
        ...e,
        'aria-labelledby': i,
        children: [
            (0, s.jsxs)(n.ModalHeader, {
                separator: !1,
                className: r.modalHeader,
                children: [
                    (0, s.jsx)(n.Heading, {
                        id: i,
                        variant: 'heading-xl/extrabold',
                        children: c.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
                    }),
                    (0, s.jsx)(n.ModalCloseButton, {
                        className: r.closeButton,
                        onClick: t
                    })
                ]
            }),
            (0, s.jsx)(n.ModalContent, {
                className: r.modalContent,
                children: (0, s.jsx)(n.Text, {
                    variant: 'text-md/normal',
                    className: r.contentText,
                    children: u
                })
            }),
            (0, s.jsx)(n.ModalFooter, {
                children: (0, s.jsx)(n.Button, {
                    className: r.button,
                    size: n.Button.Sizes.MIN,
                    onClick: t,
                    children: c.Z.Messages.OKAY
                })
            })
        ]
    });
};
