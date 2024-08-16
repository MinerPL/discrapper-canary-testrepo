n.r(t),
    n.d(t, {
        default: function () {
            return D;
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
    c = n(777036),
    u = n(556296),
    h = n(13140),
    _ = n(710111),
    p = n(981631),
    b = n(689938),
    E = n(77733);
function D(e) {
    var t;
    let { transitionState: n, onClose: D } = e,
        g = (0, a.e7)([u.Z], () => u.Z.getKeybindForAction(p.kg4.SOUNDBOARD_HOLD)),
        [R, m] = i.useState(null !== (t = null == g ? void 0 : g.shortcut) && void 0 !== t ? t : []);
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
                            className: E.header,
                            variant: 'heading-xl/semibold',
                            children: b.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }),
                        (0, s.jsx)(o.ModalCloseButton, {
                            className: E.closeButton,
                            onClick: D
                        })
                    ]
                }),
                (0, s.jsxs)(o.ModalContent, {
                    className: E.content,
                    children: [
                        (0, s.jsx)(c.Z, {
                            className: E.warning,
                            messageType: c.Q.WARNING,
                            children: b.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }),
                        (0, s.jsx)(o.Heading, {
                            className: E.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }),
                        (0, s.jsx)(o.Text, {
                            className: E.action,
                            variant: 'text-md/normal',
                            children: b.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }),
                        (0, s.jsx)(o.Text, {
                            className: E.actionDescription,
                            variant: 'text-sm/normal',
                            children: b.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }),
                        (0, s.jsx)(o.Heading, {
                            className: E.formHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }),
                        (0, s.jsx)(l.Z, {
                            defaultValue: R,
                            onChange: m
                        }),
                        (0, s.jsx)(o.Anchor, {
                            className: E.resetButton,
                            onClick: () => m((0, h.Kd)(_.D_)),
                            children: b.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })
                    ]
                }),
                (0, s.jsxs)(o.ModalFooter, {
                    children: [
                        (0, s.jsx)(o.Button, {
                            onClick: function () {
                                if (0 === R.length) return null != g && r.Z.deleteKeybind(g.id), D();
                                null == g
                                    ? r.Z.addKeybind({
                                          action: p.kg4.SOUNDBOARD_HOLD,
                                          shortcut: R,
                                          enabled: !0,
                                          params: {}
                                      })
                                    : r.Z.setKeybind({
                                          ...g,
                                          shortcut: R
                                      });
                                D();
                            },
                            children: b.Z.Messages.SAVE
                        }),
                        (0, s.jsx)(o.Button, {
                            onClick: D,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: b.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    );
}
