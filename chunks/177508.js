s.d(t, {
    Z: function () {
        return E;
    }
}), s(390547), s(47120);
var n = s(735250), a = s(470079), i = s(120356), r = s.n(i), o = s(971809), l = s(481060), c = s(500278);
let d = Object.keys(l.Button.Colors).filter(e => 'CUSTOM' !== e), _ = Object.keys(l.Button.Looks).filter(e => 'BLANK' !== e);
function E() {
    let e = d.flatMap(e => [
        ..._.map(t => (0, n.jsxs)(l.Button, {
            color: l.Button.Colors[e],
            look: l.Button.Looks[t],
            children: [
                e,
                ' - ',
                t
            ]
        }, e + t)),
        (0, n.jsx)('hr', { className: c.sectionDivider }, e + 'divider')
    ]);
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
                        className: r()('theme-dark', c.section),
                        children: e
                    }),
                    (0, n.jsx)('div', {
                        className: r()('theme-light', c.section),
                        children: e
                    })
                ]
            }),
            (0, n.jsx)(u, {}),
            (0, n.jsx)(T, {})
        ]
    });
}
function u() {
    return (0, n.jsxs)('div', {
        className: c.shinyButtonExamples,
        children: [
            (0, n.jsx)(l.ShinyButton, {
                size: l.Button.Sizes.MEDIUM,
                shineSize: l.ShinyButton.ShineSizes.SMALL,
                onClick: () => {
                },
                children: 'Shiny Button'
            }),
            (0, n.jsx)(l.ShinyButton, {
                size: l.Button.Sizes.MEDIUM,
                shineSize: l.ShinyButton.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {
                },
                children: 'Shine on Hover'
            })
        ]
    });
}
function T() {
    let [e, t] = a.useState(null), [s, i] = a.useState(null), [r, d] = a.useState([]), [_, E] = a.useState([]), [u, T] = a.useState([]);
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
                onChange: e => t(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: s,
                onChange: e => i(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select',
                multi: !0,
                value: r,
                onChange: e => d(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: e => T(e),
                options: o.G
            }),
            (0, n.jsx)(l.SearchableSelect, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: _,
                onChange: e => E(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: c.customPillContainer,
                renderCustomPill: e => (0, n.jsx)('div', {
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
