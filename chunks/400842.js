t.d(i, {
    d: function () {
        return d;
    }
});
var n = t(735250);
t(470079);
var o = t(120356), a = t.n(o), l = t(692547), r = t(481060);
t(651711);
var s = t(551556);
t(689938);
var c = t(442243);
t(347157), t(177266);
let d = e => {
    let {
            name: i,
            description: t,
            checked: o,
            actionLabel: d,
            actionHandler: u
        } = e, _ = null;
    return _ = o ? (0, n.jsx)(s.Z, {
        width: 20,
        height: 20
    }) : (0, n.jsx)(r.CircleXIcon, {
        size: 'custom',
        color: l.Z.unsafe_rawColors.RED_400.css,
        width: 20,
        height: 20
    }), (0, n.jsxs)('div', {
        className: c.checklistItem,
        children: [
            (0, n.jsx)('div', {
                className: c.checklistIcon,
                children: _
            }),
            (0, n.jsxs)('div', {
                className: a()(c.__invalid_checklistText, o && c.ineligibleRow),
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        className: c.checklistItemName,
                        children: i
                    }),
                    (0, n.jsx)(r.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t
                    })
                ]
            }),
            null != d && (0, n.jsx)('div', {
                className: c.eligibilityActionContainer,
                children: (0, n.jsx)(r.Button, {
                    className: c.eligibilityActionButton,
                    look: r.ButtonLooks.OUTLINED,
                    color: r.ButtonColors.PRIMARY,
                    onClick: u,
                    grow: !0,
                    children: d
                })
            })
        ]
    });
};
