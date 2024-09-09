t.d(n, {
    Z: function () {
        return d;
    }
}),
    t(653041);
var o = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    i = t(179658),
    c = t(482215),
    l = t(906467),
    u = t(857192),
    s = t(594174);
function d() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: n,
            isDeveloper: t
        } = (0, r.cj)([u.default, s.default, l.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: u.default.layoutDebuggingEnabled,
                isStaff: (null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) === !0,
                isDeveloper: l.Z.isDeveloper
            };
        }),
        { horizontalSpacing: d, verticalSpacing: _, maxHorizontalSpacing: S, maxVerticalSpacing: g } = (0, c.i)(),
        { setHorizontalSpacing: E, setVerticalSpacing: m } = c.i.getState(),
        I = [];
    return (
        n &&
            t &&
            (I.push(
                (0, o.jsx)(
                    a.MenuCheckboxItem,
                    {
                        id: 'layout-debugging',
                        label: 'Enable Layout Debugging',
                        checked: e,
                        action: () => {
                            (0, i.y)({ layoutDebuggingEnabled: !e });
                        }
                    },
                    'layout-debugging'
                )
            ),
            e &&
                (I.push(
                    (0, o.jsx)(
                        a.MenuControlItem,
                        {
                            id: 'horizontal-spacing',
                            label: 'Horizontal Spacing',
                            control: (e, n) =>
                                (0, o.jsx)(a.MenuSliderControl, {
                                    ...e,
                                    ref: n,
                                    value: d,
                                    minValue: 0,
                                    maxValue: S,
                                    onChange: (e) => E(e),
                                    renderValue: (e) => ''.concat(Math.round(e), 'px'),
                                    'aria-label': 'Horizontal Spacing'
                                })
                        },
                        'horizontal-spacing'
                    )
                ),
                I.push(
                    (0, o.jsx)(
                        a.MenuControlItem,
                        {
                            id: 'vertical-spacing',
                            label: 'Vertical Spacing',
                            control: (e, n) =>
                                (0, o.jsx)(a.MenuSliderControl, {
                                    ...e,
                                    ref: n,
                                    value: _,
                                    minValue: 0,
                                    maxValue: g,
                                    onChange: (e) => m(e),
                                    'aria-label': 'Horizontal Spacing',
                                    renderValue: (e) => ''.concat(Math.round(e), 'px')
                                })
                        },
                        'vertical-spacing'
                    )
                ))),
        0 === I.length ? null : (0, o.jsx)(o.Fragment, { children: I })
    );
}
