s.d(t, {
    Z: function () {
        return N;
    }
}), s(47120);
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(772848), l = s(866442), c = s(692547), d = s(481060), _ = s(699682), E = s(44315), u = s(654904), T = s(981631), I = s(689938), S = s(395690);
function N(e) {
    let {
            onChange: t,
            onClose: s,
            color: i,
            suggestedColors: N,
            disabled: C,
            label: m,
            colorPickerMiddle: A,
            colorPickerFooter: h,
            showEyeDropper: g
        } = e, O = a.useRef(null), p = (0, d.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(), R = c.Z.colors.BACKGROUND_ACCENT.css, x = (0, u.DP)(i), M = (0, l.Rf)(i), D = M === p ? R : M, f = (0, E.Lq)(x ? T.Ilk.WHITE_500 : T.Ilk.PRIMARY_530), P = (0, _.Z)(A), L = (0, _.Z)(h), [Z, b] = a.useState((0, o.Z)());
    return a.useEffect(() => {
        (P !== A || L !== h) && b((0, o.Z)());
    }, [
        h,
        A,
        L,
        P
    ]), (0, n.jsx)(d.Popout, {
        positionKey: Z,
        renderPopout: e => (0, n.jsx)(d.CustomColorPicker, {
            ...e,
            value: i,
            onChange: t,
            suggestedColors: N,
            middle: A,
            footer: h,
            showEyeDropper: g
        }),
        onRequestClose: s,
        children: e => {
            let {
                onClick: t,
                ...s
            } = e;
            return (0, n.jsxs)('div', {
                ref: O,
                className: r()(S.colorSwatch, { [S.disabled]: C }),
                children: [
                    (0, n.jsx)(d.Clickable, {
                        ...s,
                        tabIndex: C ? -1 : 0,
                        onClick: C ? T.dG4 : t,
                        style: {
                            backgroundColor: M,
                            borderColor: D
                        },
                        className: S.swatch,
                        'aria-label': I.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                        focusProps: { ringTarget: O },
                        children: (0, n.jsx)(d.PencilIcon, {
                            size: 'custom',
                            className: S.editPencilIcon,
                            width: 14,
                            height: 14,
                            color: f
                        })
                    }),
                    m
                ]
            });
        }
    });
}
