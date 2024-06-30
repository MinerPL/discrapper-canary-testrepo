n.r(t), n.d(t, {
    default: function () {
        return f;
    }
});
var c = n(735250), l = n(470079), i = n(481060), a = n(561716), o = n(721383), r = n(153124), s = n(63063), u = n(857595), _ = n(981631), d = n(689938), h = n(84050);
function f(e) {
    let {
            transitionState: t,
            onClose: n
        } = e, f = (0, r.Dt)();
    return l.useEffect(() => {
        u.r_();
    }, []), (0, c.jsxs)(i.ModalRoot, {
        transitionState: t,
        role: 'alertdialog',
        'aria-labelledby': f,
        children: [
            (0, c.jsxs)(i.ModalContent, {
                className: h.content,
                children: [
                    (0, c.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        id: f,
                        className: h.header,
                        children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format({
                            tab: (e, t) => (0, c.jsx)(i.KeyCombo, {
                                shortcut: 'tab',
                                className: h.headerShortcut
                            }, t)
                        })
                    }),
                    (0, c.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY
                    }),
                    (0, c.jsxs)('ul', {
                        className: h.tips,
                        children: [
                            (0, c.jsxs)('li', {
                                children: [
                                    (0, c.jsx)(i.KeyCombo, { shortcut: o._.binds['0'] }),
                                    (0, c.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT
                                    })
                                ]
                            }),
                            (0, c.jsxs)('li', {
                                children: [
                                    (0, c.jsx)(i.KeyCombo, { shortcut: a.$.binds['0'] }),
                                    (0, c.jsx)(i.Text, {
                                        variant: 'text-md/normal',
                                        children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, c.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format({ link: s.Z.getArticleURL(_.BhN.KEYBOARD_NAVIGATION) })
                    })
                ]
            }),
            (0, c.jsx)(i.ModalFooter, {
                children: (0, c.jsx)(i.Button, {
                    onClick: n,
                    color: i.Button.Colors.BRAND,
                    size: i.Button.Sizes.SMALL,
                    autoFocus: !0,
                    children: d.Z.Messages.OKAY
                })
            })
        ]
    });
}
