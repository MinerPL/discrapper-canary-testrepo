n.r(t), n.d(t, {
    default: function () {
        return g;
    }
}), n(47120);
var s = n(735250), i = n(470079), a = n(442837), o = n(481060), r = n(660216), d = n(825209), l = n(714338), c = n(556296), u = n(474333), h = n(13140), _ = n(710111), p = n(981631), E = n(689938), D = n(60341);
function g(e) {
    var t;
    let {
            transitionState: n,
            onClose: g
        } = e, R = (0, a.e7)([c.Z], () => c.Z.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD)), [m, b] = i.useState(null !== (t = null == R ? void 0 : R.shortcut) && void 0 !== t ? t : []);
    return i.useEffect(() => (l.Z.disable(), () => {
        l.Z.enable();
    }), []), (0, s.jsxs)(o.ModalRoot, {
        transitionState: n,
        children: [
            (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                children: [
                    (0, s.jsx)(o.Heading, {
                        className: D.header,
                        variant: 'heading-xl/semibold',
                        children: E.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                    }),
                    (0, s.jsx)(o.ModalCloseButton, {
                        className: D.closeButton,
                        onClick: g
                    })
                ]
            }),
            (0, s.jsxs)(o.ModalContent, {
                className: D.content,
                children: [
                    (0, s.jsx)(u.Z, {
                        className: D.warning,
                        messageType: u.Q.WARNING,
                        children: E.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                    }),
                    (0, s.jsx)(o.Heading, {
                        className: D.formHeader,
                        variant: 'eyebrow',
                        color: 'header-secondary',
                        children: E.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION
                    }),
                    (0, s.jsx)(o.Text, {
                        className: D.action,
                        variant: 'text-md/normal',
                        children: E.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
                    }),
                    (0, s.jsx)(o.Text, {
                        className: D.actionDescription,
                        variant: 'text-sm/normal',
                        children: E.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                    }),
                    (0, s.jsx)(o.Heading, {
                        className: D.formHeader,
                        variant: 'eyebrow',
                        color: 'header-secondary',
                        children: E.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                    }),
                    (0, s.jsx)(d.Z, {
                        defaultValue: m,
                        onChange: b
                    }),
                    (0, s.jsx)(o.Anchor, {
                        className: D.resetButton,
                        onClick: () => b((0, h.Kd)(_.D_)),
                        children: E.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                    })
                ]
            }),
            (0, s.jsxs)(o.ModalFooter, {
                children: [
                    (0, s.jsx)(o.Button, {
                        onClick: function () {
                            if (0 === m.length)
                                return null != R && r.Z.deleteKeybind(R.id), g();
                            null == R ? r.Z.addKeybind({
                                action: p.kg4.SOUNDBOARD_HOLD,
                                shortcut: m,
                                enabled: !0,
                                params: {}
                            }) : r.Z.setKeybind({
                                ...R,
                                shortcut: m
                            });
                            g();
                        },
                        children: E.Z.Messages.SAVE
                    }),
                    (0, s.jsx)(o.Button, {
                        onClick: g,
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        children: E.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
