t.d(n, {
    Ih: function () {
        return l;
    },
    PU: function () {
        return c;
    },
    hK: function () {
        return s;
    }
});
var o = t(735250);
t(470079);
var r = t(692547), a = t(481060), i = t(851639);
function s(e) {
    let {
        title: n,
        children: t
    } = e;
    return (0, o.jsxs)('div', {
        className: i.questionContainer,
        children: [
            (0, o.jsx)(a.Text, {
                className: i.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function l(e) {
    let {
        icon: n,
        text: t,
        meetsRequirement: s
    } = e;
    return (0, o.jsxs)('div', {
        className: i.requirementContainer,
        children: [
            (0, o.jsx)(n, {
                className: i.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, o.jsx)(a.Text, {
                className: i.requirementText,
                variant: 'text-md/normal',
                children: t
            }),
            s ? (0, o.jsx)(a.CircleCheckIcon, {
                size: 'md',
                color: 'currentColor',
                className: i.requirementSuccess,
                secondaryColor: r.Z.colors.WHITE.css
            }) : (0, o.jsx)(a.CircleXIcon, {
                size: 'md',
                color: 'currentColor',
                className: i.requirementFailure,
                secondaryColor: r.Z.colors.WHITE.css
            })
        ]
    });
}
function c(e) {
    let {
        icon: n,
        text: t,
        footnote: s,
        meetsRequirement: l,
        children: c
    } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)('div', {
                className: i.requirementContainer,
                children: [
                    (0, o.jsx)(n, {
                        className: i.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, o.jsx)(a.Text, {
                        className: i.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    l ? (0, o.jsx)(a.CircleCheckIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: i.requirementSuccess,
                        secondaryColor: r.Z.colors.WHITE.css
                    }) : c
                ]
            }),
            null != s && (0, o.jsx)(a.Text, {
                color: 'header-secondary',
                className: i.footnote,
                variant: 'text-xs/normal',
                children: s
            })
        ]
    });
}
