n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    }),
    n(47120);
var s = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    r = n(660216),
    l = n(825209),
    d = n(714338),
    c = n(556296),
    u = n(13140),
    h = n(710111),
    p = n(981631),
    _ = n(689938),
    b = n(77733);
function E(e) {
    var t;
    let { transitionState: n, onClose: E } = e,
        D = (0, a.e7)([c.Z], () => c.Z.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD)),
        [g, R] = i.useState(null !== (t = null == D ? void 0 : D.shortcut) && void 0 !== t ? t : []);
    return (
        i.useEffect(
            () => (
                d.Z.disable(),
                () => {
                    d.Z.enable();
                }
            ),
            []
        ),
        (0, s.jsxs)(o.ModalRoot, {
            transitionState: n,
            children: [
                (0, s.jsxs)(o.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            className: b.header,
                            variant: 'heading-xl/semibold',
                            children: _.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }),
                        (0, s.jsx)(o.ModalCloseButton, {
                            className: b.closeButton,
                            onClick: E
                        })
                    ]
                }),
                (0, s.jsxs)(o.ModalContent, {
                    className: b.content,
                    children: [
                        (0, s.jsx)(o.HelpMessage, {
                            className: b.warning,
                            messageType: o.HelpMessageTypes.WARNING,
                            children: _.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }),
                        (0, s.jsx)(o.Heading, {
                            className: b.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: _.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }),
                        (0, s.jsx)(o.Text, {
                            className: b.action,
                            variant: 'text-md/normal',
                            children: _.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }),
                        (0, s.jsx)(o.Text, {
                            className: b.actionDescription,
                            variant: 'text-sm/normal',
                            children: _.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }),
                        (0, s.jsx)(o.Heading, {
                            className: b.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: _.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }),
                        (0, s.jsx)(l.Z, {
                            defaultValue: g,
                            onChange: R
                        }),
                        (0, s.jsx)(o.Anchor, {
                            className: b.resetButton,
                            onClick: () => R((0, u.Kd)(h.D_)),
                            children: _.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })
                    ]
                }),
                (0, s.jsxs)(o.ModalFooter, {
                    children: [
                        (0, s.jsx)(o.Button, {
                            onClick: function () {
                                if (0 === g.length) return null != D && r.Z.deleteKeybind(D.id), E();
                                null == D
                                    ? r.Z.addKeybind({
                                          action: p.kg4.SOUNDBOARD_HOLD,
                                          shortcut: g,
                                          enabled: !0,
                                          params: {}
                                      })
                                    : r.Z.setKeybind({
                                          ...D,
                                          shortcut: g
                                      });
                                E();
                            },
                            children: _.Z.Messages.SAVE
                        }),
                        (0, s.jsx)(o.Button, {
                            onClick: E,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: _.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    );
}
