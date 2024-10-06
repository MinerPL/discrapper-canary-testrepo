t.d(s, {
    Z: function () {
        return E;
    }
}),
    t(390547),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(971809),
    l = t(481060),
    c = t(303431);
let d = Object.keys(l.Button.Colors).filter((e) => 'CUSTOM' !== e),
    _ = Object.keys(l.Button.Looks).filter((e) => 'BLANK' !== e),
    u = Object.keys(l.Button.Sizes).filter((e) => 'NONE' !== e);
function E() {
    let e = d.flatMap((e) => [
            ..._.map((s) =>
                (0, n.jsxs)(
                    l.Button,
                    {
                        color: l.Button.Colors[e],
                        look: l.Button.Looks[s],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', s.toLowerCase()]
                    },
                    e + s
                )
            ),
            (0, n.jsx)('hr', { className: c.sectionDivider }, e + 'divider')
        ]),
        s = u.flatMap((e) =>
            (0, n.jsx)(l.Button, {
                color: l.Button.Colors.BRAND,
                look: l.Button.Looks.FILLED,
                size: l.Button.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, n.jsxs)('div', {
                className: c.buttons,
                children: [
                    (0, n.jsx)('div', {
                        className: r()('theme-darker', c.section),
                        children: e
                    }),
                    (0, n.jsx)('div', {
                        className: r()('theme-light', c.section),
                        children: e
                    }),
                    (0, n.jsxs)('div', {
                        className: r()('theme-darker', c.section),
                        children: [
                            (0, n.jsx)(l.Button, {
                                color: l.Button.Colors.BRAND,
                                look: l.Button.Looks.FILLED,
                                disabled: !0,
                                children: 'Disabled'
                            }),
                            s
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: r()('theme-light', c.section),
                        children: [
                            (0, n.jsx)(l.Button, {
                                color: l.Button.Colors.BRAND,
                                look: l.Button.Looks.FILLED,
                                disabled: !0,
                                children: 'Disabled'
                            }),
                            s
                        ]
                    })
                ]
            }),
            (0, n.jsx)(T, {}),
            (0, n.jsx)(S, {}),
            (0, n.jsx)(I, {}),
            (0, n.jsx)(N, {})
        ]
    });
}
function T() {
    return (0, n.jsxs)('div', {
        className: c.shinyButtonExamples,
        children: [
            (0, n.jsx)(l.ShinyButton, {
                size: l.Button.Sizes.MEDIUM,
                shineSize: l.ShinyButton.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, n.jsx)(l.ShinyButton, {
                size: l.Button.Sizes.MEDIUM,
                shineSize: l.ShinyButton.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function S() {
    let [e, s] = a.useState(null),
        [t, i] = a.useState(null),
        [r, d] = a.useState([]),
        [_, u] = a.useState([]),
        [E, T] = a.useState([]);
    return (0, n.jsxs)('div', {
        className: c.searchableSelectExamples,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => s(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: t,
                onChange: (e) => i(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select',
                multi: !0,
                value: r,
                onChange: (e) => d(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: E,
                onChange: (e) => T(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: _,
                onChange: (e) => u(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: c.customPillContainer,
                renderCustomPill: (e) =>
                    (0, n.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, n.jsx)(l.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function I() {
    let e = Object.keys(l.FormTitleTags);
    return (0, n.jsxs)('div', {
        className: c.section,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Form Labels'
            }),
            e.flatMap((e) =>
                (0, n.jsxs)(l.FormTitle, {
                    tag: l.FormTitleTags[e],
                    children: ['Form title - ', e]
                })
            ),
            (0, n.jsx)(l.FormTitle, {
                faded: !0,
                children: 'Form title - faded'
            }),
            (0, n.jsx)(l.FormTitle, {
                disabled: !0,
                children: 'Form title - disabled'
            }),
            (0, n.jsx)(l.FormTitle, {
                required: !0,
                children: 'Form title - required'
            }),
            (0, n.jsx)(l.FormLabel, { children: 'Form title - required' })
        ]
    });
}
function N() {
    let [e, s] = a.useState('');
    return (0, n.jsxs)('div', {
        className: c.section,
        children: [
            (0, n.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, n.jsx)(l.FormItem, { children: (0, n.jsx)(l.TextInput, { placeholder: 'Search - placeholder only' }) }),
            (0, n.jsx)(l.FormItem, {
                title: 'Disabled',
                disabled: !0,
                children: (0, n.jsx)(l.TextInput, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Error',
                children: (0, n.jsx)(l.TextInput, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Error',
                children: (0, n.jsx)(l.TextInput, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Read only',
                children: (0, n.jsx)(l.TextInput, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, n.jsx)(l.FormItem, {
                title: 'Input with a label',
                children: (0, n.jsx)(l.TextInput, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: s
                })
            })
        ]
    });
}
