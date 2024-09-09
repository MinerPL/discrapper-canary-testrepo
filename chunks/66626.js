s.d(t, {
    Z: function () {
        return u;
    }
}),
    s(47120);
var a = s(735250),
    n = s(470079),
    l = s(481060),
    o = s(479531),
    i = s(600164),
    r = s(486527),
    c = s(689938),
    d = s(816497);
function u(e) {
    let { directoryChannelId: t, description: s, onDescriptionChange: u, categoryId: m, onCategoryIdChange: C, onSubmit: _, onClose: x, onBack: E } = e,
        [I, L] = n.useState(!1),
        [f, T] = n.useState(null),
        h = async () => {
            L(!0);
            try {
                await _();
            } catch (e) {
                T(new o.Z(e));
            }
            L(!1);
        };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                direction: i.Z.Direction.VERTICAL,
                className: d.header,
                separator: !1,
                children: [
                    (0, a.jsx)(l.Heading, {
                        className: d.title,
                        variant: 'heading-xl/semibold',
                        children: c.Z.Messages.HUB_CUSTOMIZE_GUILD_TITLE
                    }),
                    (0, a.jsx)(l.Text, {
                        className: d.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: c.Z.Messages.HUB_CUSTOMIZE_GUILD_SUBTITLE
                    }),
                    null != x &&
                        (0, a.jsx)(l.ModalCloseButton, {
                            className: d.closeButton,
                            onClick: x
                        })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: d.createGuild,
                paddingFix: !1,
                children: [
                    (0, a.jsx)(l.FormItem, {
                        title: c.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_TITLE,
                        children: (0, a.jsx)(l.TextArea, {
                            value: s,
                            maxLength: 200,
                            placeholder: c.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_PLACEHOLDER,
                            onChange: u,
                            error: null == f ? void 0 : f.getAnyErrorMessage()
                        })
                    }),
                    (0, a.jsx)(l.FormItem, {
                        className: d.formItemSpaced,
                        title: c.Z.Messages.HUB_ADD_GUILD_CATEGORY_TITLE,
                        children: (0, a.jsx)(l.SingleSelect, {
                            placeholder: c.Z.Messages.SELECT,
                            options: (0, r.b7)(t),
                            clearable: !1,
                            value: m,
                            onChange: C,
                            maxVisibleItems: 4
                        })
                    })
                ]
            }),
            (0, a.jsxs)(l.ModalFooter, {
                justify: i.Z.Justify.BETWEEN,
                children: [
                    (0, a.jsx)(l.Button, {
                        color: l.Button.Colors.BRAND,
                        onClick: h,
                        submitting: I,
                        disabled: '' === s || m === r.AR.UNCATEGORIZED,
                        children: c.Z.Messages.HUB_ADD_SERVER_CTA
                    }),
                    (0, a.jsx)(l.Button, {
                        className: d.backButton,
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.MIN,
                        onClick: E,
                        children: c.Z.Messages.BACK
                    })
                ]
            })
        ]
    });
}
