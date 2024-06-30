n.r(t), n.d(t, {
    default: function () {
        return M;
    }
}), n(47120);
var s = n(735250), u = n(470079), c = n(374470), a = n(481060), l = n(239091), i = n(886036), r = n(877794), o = n(358085), d = n(998502), E = n(689938);
function M(e) {
    let {
            text: t,
            target: n,
            onHeightUpdate: M,
            onSelect: f,
            isChannelTextArea: p = !1
        } = e, C = u.useCallback(() => {
            (0, l.Zy)(), (0, c.k)(n, HTMLElement) && (n.focus(), setTimeout(() => n.focus(), 0));
        }, [n]), [T, Z] = (0, r.Z)({
            text: t,
            target: n,
            onHeightUpdate: M
        }), h = (0, i.Z)();
    if (!o.isPlatformEmbedded || !((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement)))
        return null;
    let m = '' !== t ? [
        (0, s.jsx)(a.MenuItem, {
            id: 'copy',
            label: E.Z.Messages.COPY,
            hint: (0, o.isMac)() ? '\u2318C' : 'Ctrl+C',
            action: () => d.ZP.copy(t)
        }, 'copy'),
        (0, s.jsx)(a.MenuItem, {
            id: 'cut',
            label: E.Z.Messages.CUT,
            hint: (0, o.isMac)() ? '\u2318X' : 'Ctrl+X',
            action: () => setTimeout(() => d.ZP.cut(), 0)
        }, 'cut')
    ] : null;
    return (0, s.jsxs)(a.Menu, {
        navId: 'textarea-context',
        onClose: C,
        'aria-label': E.Z.Messages.TEXTAREA_ACTIONS_MENU_LABEL,
        onSelect: f,
        children: [
            p && (0, s.jsx)(a.MenuGroup, { children: h }),
            (0, s.jsx)(a.MenuGroup, { children: T }),
            (0, s.jsx)(a.MenuGroup, { children: Z }),
            (0, s.jsxs)(a.MenuGroup, {
                children: [
                    m,
                    (0, s.jsx)(a.MenuItem, {
                        id: 'paste',
                        label: E.Z.Messages.PASTE,
                        hint: (0, o.isMac)() ? '\u2318V' : 'Ctrl+V',
                        action: () => setTimeout(() => d.ZP.paste(), 0)
                    })
                ]
            })
        ]
    });
}
