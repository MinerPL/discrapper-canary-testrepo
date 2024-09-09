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
var r = t(692547),
    i = t(481060),
    a = t(346485);
function s(e) {
    let { title: n, children: t } = e;
    return (0, o.jsxs)('div', {
        className: a.questionContainer,
        children: [
            (0, o.jsx)(i.Text, {
                className: a.questionTitle,
                variant: 'text-md/semibold',
                color: 'header-primary',
                children: n
            }),
            t
        ]
    });
}
function l(e) {
    let { icon: n, text: t, meetsRequirement: s } = e;
    return (0, o.jsxs)('div', {
        className: a.requirementContainer,
        children: [
            (0, o.jsx)(n, {
                className: a.requirementIcon,
                height: 20,
                width: 20,
                size: 'custom',
                color: 'currentColor'
            }),
            (0, o.jsx)(i.Text, {
                className: a.requirementText,
                variant: 'text-md/normal',
                children: t
            }),
            s
                ? (0, o.jsx)(i.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: a.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
                : (0, o.jsx)(i.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: a.requirementFailure,
                      secondaryColor: r.Z.colors.WHITE.css
                  })
        ]
    });
}
function c(e) {
    let { icon: n, text: t, footnote: s, meetsRequirement: l, children: c } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)('div', {
                className: a.requirementContainer,
                children: [
                    (0, o.jsx)(n, {
                        className: a.requirementIcon,
                        height: 20,
                        width: 20,
                        size: 'custom',
                        color: 'currentColor'
                    }),
                    (0, o.jsx)(i.Text, {
                        className: a.requirementText,
                        variant: 'text-md/normal',
                        children: t
                    }),
                    l
                        ? (0, o.jsx)(i.CircleCheckIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: a.requirementSuccess,
                              secondaryColor: r.Z.colors.WHITE.css
                          })
                        : c
                ]
            }),
            null != s &&
                (0, o.jsx)(i.Text, {
                    color: 'header-secondary',
                    className: a.footnote,
                    variant: 'text-xs/normal',
                    children: s
                })
        ]
    });
}
