t(47120);
var a = t(735250);
t(470079);
var r = t(120356),
    i = t.n(r),
    s = t(692547),
    o = t(481060),
    l = t(259580),
    c = t(196345),
    d = t(137158),
    u = t(689938),
    m = t(944309);
n.Z = function (e) {
    let { channelId: n, formField: t, index: r, isDragEnabled: _, isDropHovered: f, onDrop: C, onEdit: h, onRemove: x, canRemove: p, title: g, actionsLocation: T } = e,
        E = t.values,
        I = E.slice(0, 1),
        b = E.length - I.length;
    return (0, a.jsxs)(d.Z, {
        field: t,
        index: r,
        isDragEnabled: _,
        isDropHovered: f,
        onDrop: C,
        onEdit: h,
        onRemove: x,
        title: g,
        canRemove: p,
        actionsLocation: T,
        children: [
            (0, a.jsx)(c.EK, {
                className: i()(m.fieldBackground, { [m.withFooter]: 0 !== b }),
                terms: I,
                channelId: n
            }),
            0 !== b &&
                (0, a.jsxs)(o.Clickable, {
                    className: i()(m.fieldFooterContainer, m.clickable),
                    onClick: h,
                    children: [
                        (0, a.jsx)(o.FormText, {
                            className: m.clickable,
                            children: u.Z.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({ count: b })
                        }),
                        (0, a.jsx)(l.Z, {
                            className: m.termsFieldCaretIcon,
                            height: 14,
                            width: 14,
                            color: s.Z.unsafe_rawColors.WHITE_500.css
                        })
                    ]
                }),
            (0, a.jsx)(c.G0, {
                disabled: !0,
                checked: !1
            })
        ]
    });
};
