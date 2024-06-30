s(47120);
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(481060), l = s(981631), c = s(689938), d = s(452550), _ = s(331651);
let E = 0, u = () => 'notification-position-selector-'.concat(E++), T = e => {
        switch (e) {
        case l._vf.TOP_LEFT:
            return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
        case l._vf.TOP_RIGHT:
            return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
        case l._vf.BOTTOM_LEFT:
            return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
        case l._vf.BOTTOM_RIGHT:
            return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
        default:
            return c.Z.Messages.OVERLAY_NOTIFICATIONS_DISABLED;
        }
    }, I = [
        l._vf.DISABLED,
        l._vf.TOP_LEFT,
        l._vf.TOP_RIGHT,
        l._vf.BOTTOM_LEFT,
        l._vf.BOTTOM_RIGHT
    ];
function S(e) {
    let {
            position: t,
            onChange: s
        } = e, [i] = a.useState(() => u()), E = t === l._vf.DISABLED ? c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({ position: T(t) });
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(o.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, n.jsx)('div', {
                    className: r()(d.wrapper, { [d.disabledSelected]: t === l._vf.DISABLED }),
                    children: I.map(e => (0, n.jsxs)('label', {
                        className: r()({
                            [d.selected]: e === t,
                            [d.disabled]: e === l._vf.DISABLED,
                            [d.topRight]: e === l._vf.TOP_RIGHT,
                            [d.topLeft]: e === l._vf.TOP_LEFT,
                            [d.bottomRight]: e === l._vf.BOTTOM_RIGHT,
                            [d.bottomLeft]: e === l._vf.BOTTOM_LEFT
                        }),
                        children: [
                            T(e),
                            e === l._vf.DISABLED ? (0, n.jsx)(o.DenyIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: d.disabledIcon
                            }) : null,
                            (0, n.jsx)('input', {
                                type: 'radio',
                                name: i,
                                value: e,
                                onChange: t => s(t, e),
                                className: d.hiddenInput
                            })
                        ]
                    }, e))
                })
            }),
            (0, n.jsx)(o.FormText, {
                type: o.FormTextTypes.DESCRIPTION,
                className: _.marginTop8,
                children: E
            })
        ]
    });
}
S.Positions = l._vf, t.Z = S;
