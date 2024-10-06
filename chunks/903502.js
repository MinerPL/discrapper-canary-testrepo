n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(442837),
    i = n(481060),
    o = n(570140),
    s = n(178635),
    c = n(115470),
    d = n(511010),
    u = n(246992),
    h = n(501775);
let m = 60000,
    x = 3600000,
    f = 86400000,
    p = [
        {
            label: 'second(s)',
            value: 1000
        },
        {
            label: 'minute(s)',
            value: 60000
        },
        {
            label: 'hour(s)',
            value: 3600000
        },
        {
            label: 'day(s)',
            value: 86400000
        }
    ];
function g() {
    let [e, t] = a.useState(null),
        [n, g] = a.useState(0),
        [b, v] = a.useState(1000),
        [_, j] = a.useState(0),
        C = (0, l.e7)([c.Z], () => {
            var t;
            return null === e ? null : null !== (t = c.Z.getFeedbackConfig(e)) && void 0 !== t ? t : s.R[e];
        }),
        T = Object.keys(s.R).map((e) => ({
            label: e,
            value: e
        })),
        S = a.useMemo(() => null != e && _ >= 0 && _ <= 100 && n >= 0, [e, _, n]);
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)(i.FormSection, {
                title: 'Feedback Survey',
                className: h.formElement,
                tag: i.FormTitleTags.H3,
                children: (0, r.jsx)(i.SingleSelect, {
                    options: T,
                    value: e,
                    onChange: (e) => {
                        t(e);
                    },
                    popoutLayerContext: u.O$,
                    placeholder: 'Select Feedback Survey'
                })
            }),
            (0, r.jsxs)(i.FormSection, {
                title: 'Override Survey Cooldown',
                className: h.formElement,
                tag: i.FormTitleTags.H3,
                children: [
                    null != C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: h.formDividerTitle,
                                    children: (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current cooldown'
                                    })
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(C.cooldown / 1000, ' second(s) or')
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(C.cooldown / m, ' minute(s) or')
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(C.cooldown / x, ' hour(s) or')
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(C.cooldown / f, ' day(s)')
                                })
                            ]
                        }),
                    (0, r.jsx)(d.Z, {
                        className: h.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override cooldown'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: h.formRow,
                        children: [
                            (0, r.jsx)(i.TextInput, {
                                min: 0,
                                value: n.toString(),
                                type: 'number',
                                placeholder: 'Duration length',
                                onChange: (e) => g(parseFloat(e))
                            }),
                            (0, r.jsx)(i.SingleSelect, {
                                options: p,
                                value: b,
                                onChange: (e) => {
                                    v(e);
                                },
                                popoutLayerContext: u.O$
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(i.FormSection, {
                title: 'Override Survey Chance',
                className: h.formElement,
                tag: i.FormTitleTags.H3,
                children: [
                    null != C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.Z, {
                                    className: h.formDividerTitle,
                                    children: (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        children: 'Current chance'
                                    })
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/normal',
                                    children: ''.concat(100 * C.chance, '%')
                                })
                            ]
                        }),
                    (0, r.jsx)(d.Z, {
                        className: h.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: 'Override chance'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: h.formRow,
                        children: [
                            (0, r.jsx)(i.TextInput, {
                                min: 0,
                                max: 100,
                                value: _.toString(),
                                type: 'number',
                                onChange: (e) => j(parseFloat(e))
                            }),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: '%'
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: h.formRow,
                children: [
                    (0, r.jsx)(i.Button, {
                        onClick: () =>
                            void o.Z.dispatch({
                                type: 'FEEDBACK_OVERRIDE_SET',
                                feedbackType: e,
                                cooldown: n * b,
                                chance: _ / 100
                            }),
                        disabled: !S,
                        children: 'Update'
                    }),
                    (0, r.jsx)(i.Button, {
                        onClick: () =>
                            void o.Z.dispatch({
                                type: 'FEEDBACK_OVERRIDE_CLEAR',
                                feedbackType: e
                            }),
                        disabled: !S,
                        children: 'Clear Override'
                    })
                ]
            }),
            null == e &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: need to select a survey'
                }),
            !(n >= 0) &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: cooldown needs to be a number greater than 0'
                }),
            !(_ >= 0 && _ <= 100) &&
                (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: 'Error: chance needs to be a number between 0 and 100'
                }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: 'Clear override resets a feedback survey to its default values'
            })
        ]
    });
}
