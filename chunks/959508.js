n.d(t, {
    Z: function () {
        return p;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(442837), o = n(481060), c = n(603211), d = n(710344), u = n(637853), _ = n(107862), E = n(259580), I = n(823379), T = n(889369), m = n(570961), N = n(208665), S = n(976983), h = n(290511), g = n(689938), C = n(519871);
let x = { optionErrors: [] };
function p(e) {
    var t;
    let {
            guild: n,
            prompt: i,
            disableAutofocus: d,
            promptIndex: S,
            dragIndex: p,
            includeCount: L,
            singleColumn: O,
            onPromptDragComplete: A,
            onPromptDragStart: M,
            onPromptDragReset: v
        } = e, {dropdownsAllowed: D} = (0, _.Ug)(n.id), j = (0, l.e7)([T.Z], () => T.Z.editedDefaultChannelIds), Z = D ? h.qm : h.M$, {
            drag: b,
            dragSourcePosition: U,
            drop: G,
            setIsDraggable: P
        } = (0, c.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: p,
            optionId: i.id,
            onDragStart: M,
            onDragComplete: A,
            onDragReset: v
        }), B = (0, l.cj)([N.Z], () => {
            var e;
            return null !== (e = N.Z.errors[S]) && void 0 !== e ? e : x;
        }), [y, F] = a.useState(!1), [k, w] = a.useState(!1), H = null !== (t = B.options) && void 0 !== t ? t : B.optionErrors.filter(I.lm)[0], V = B.config, Y = D && i.options.length >= h.fY, W = (0, u.kl)(n.id, Array.from(j), [i]).length - j.size, z = a.useRef(null);
    return (a.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === S && !d) {
                var e;
                null === (e = z.current) || void 0 === e || e.focus();
            }
        }, 0);
    }, [d]), y) ? (0, s.jsx)(o.FocusRing, {
        children: (0, s.jsxs)('div', {
            tabIndex: 0,
            onFocus: () => w(!0),
            onBlur: () => w(!1),
            onMouseLeave: () => w(!1),
            className: r()(C.container, {
                [C.dropIndicatorBefore]: null != U && S < U,
                [C.dropIndicatorAfter]: null != U && S > U,
                [C.containerFocused]: k
            }),
            ref: e => b(G(e)),
            children: [
                (0, s.jsx)('div', {
                    className: C.dragContainer,
                    onMouseEnter: () => P(!0),
                    onMouseLeave: () => P(!1),
                    children: (0, s.jsx)(o.DragIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: C.dragIcon
                    })
                }),
                (0, s.jsx)(o.Text, {
                    className: C.questionNumber,
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    children: g.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({ index: S + 1 })
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-lg/semibold',
                    color: 'text-normal',
                    children: i.title
                }),
                (0, s.jsx)(o.Clickable, {
                    className: C.collapseButton,
                    onClick: () => F(!1),
                    children: (0, s.jsx)(E.Z, {
                        direction: E.Z.Directions.DOWN,
                        height: 16,
                        width: 16
                    })
                }),
                (0, s.jsx)(o.TooltipContainer, {
                    text: g.Z.Messages.ONBOARDING_PROMPT_DELETE,
                    className: C.removeButton,
                    children: (0, s.jsx)(o.Clickable, {
                        className: C.closeIcon,
                        onClick: () => (0, m.fi)(n, i.id),
                        children: (0, s.jsx)(o.TrashIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                })
            ]
        })
    }) : (0, s.jsx)(o.FocusRing, {
        children: (0, s.jsxs)('div', {
            tabIndex: 0,
            onFocus: () => w(!0),
            onBlur: () => w(!1),
            className: r()(C.container, {
                [C.dropIndicatorBefore]: null != U && S < U,
                [C.dropIndicatorAfter]: null != U && S > U,
                [C.containerFocused]: k
            }),
            ref: e => b(G(e)),
            children: [
                (0, s.jsx)('div', {
                    className: C.dragContainer,
                    onMouseEnter: () => P(!0),
                    onMouseLeave: () => P(!1),
                    children: (0, s.jsx)(o.DragIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: C.dragIcon
                    })
                }),
                (0, s.jsx)(o.Text, {
                    className: C.questionNumber,
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    children: g.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({ index: S + 1 })
                }),
                (0, s.jsx)(o.TextInput, {
                    className: C.title,
                    inputClassName: C.titleInput,
                    inputRef: z,
                    value: i.title,
                    onChange: e => (0, m.Kk)(n, i.id, { title: e }),
                    placeholder: g.Z.Messages.ONBOARDING_PROMPT_TITLE_PLACEHOLDER,
                    maxLength: h.iU,
                    error: B.title
                }),
                (0, s.jsx)(R, {
                    prompt: i,
                    guild: n
                }),
                (0, s.jsx)(o.Text, {
                    className: C.optionsHeader,
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    children: Y ? g.Z.Messages.ONBOARDING_PROMPT_DROPDOWN_OPTIONS_HEADER.format({
                        count: i.options.length,
                        total: Z
                    }) : g.Z.Messages.ONBOARDING_PROMPT_OPTIONS_HEADER.format({
                        count: i.options.length,
                        total: Z
                    })
                }),
                (0, s.jsx)(f, {
                    guild: n,
                    prompt: i,
                    promptIndex: S,
                    errors: B,
                    singleColumn: O
                }),
                null != H ? (0, s.jsx)(o.InputError, { error: H }) : null,
                (0, s.jsxs)('div', {
                    className: C.buttons,
                    children: [
                        (0, s.jsxs)('div', {
                            className: C.checkboxes,
                            children: [
                                (0, s.jsx)(o.Checkbox, {
                                    size: 20,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: !i.singleSelect,
                                    onChange: (e, t) => (0, m.Kk)(n, i.id, { singleSelect: !t }),
                                    children: (0, s.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'interactive-normal',
                                        children: g.Z.Messages.ONBOARDING_PROMPT_ALLOW_MULTIPLE_LABEL
                                    })
                                }),
                                i.inOnboarding ? (0, s.jsx)(o.Checkbox, {
                                    size: 20,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: i.inOnboarding && i.required,
                                    onChange: (e, t) => (0, m.Kk)(n, i.id, { required: t }),
                                    disabled: !i.inOnboarding,
                                    children: (0, s.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'interactive-normal',
                                        children: L ? g.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL_WITH_COUNT.format({ count: W }) : g.Z.Messages.ONBOARDING_PROMPT_REQUIRED_LABEL
                                    })
                                }) : null
                            ]
                        }),
                        (0, s.jsx)(o.Clickable, {
                            className: C.collapseButton,
                            onClick: () => F(!0),
                            children: (0, s.jsx)(E.Z, {
                                direction: E.Z.Directions.UP,
                                height: 16,
                                width: 16
                            })
                        }),
                        (0, s.jsx)(o.TooltipContainer, {
                            text: g.Z.Messages.ONBOARDING_PROMPT_DELETE,
                            className: C.removeButton,
                            children: (0, s.jsx)(o.Clickable, {
                                className: C.closeIcon,
                                onClick: () => (0, m.fi)(n, i.id),
                                children: (0, s.jsx)(o.TrashIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        })
                    ]
                }),
                null != V ? (0, s.jsx)(o.InputError, { error: V }) : null
            ]
        })
    });
}
function R(e) {
    let {
            prompt: t,
            guild: n
        } = e, [i, r] = a.useState(!1);
    if (a.useEffect(() => {
            !i && t.title.length > 0 && r(!0);
        }, [
            i,
            t
        ]), i)
        return null;
    function l(e) {
        return (0, s.jsx)(o.Clickable, {
            className: C.example,
            onClick: () => (0, m.Kk)(n, t.id, { title: e }),
            children: (0, s.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: e
            })
        });
    }
    return (0, s.jsxs)('div', {
        className: C.examplesSection,
        children: [
            (0, s.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_HEADER
            }),
            (0, s.jsxs)('div', {
                className: C.examples,
                children: [
                    l(g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_1),
                    l(g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_2),
                    l(g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_3),
                    l(g.Z.Messages.ONBOARDING_PROMPT_EXAMPLES_4)
                ]
            })
        ]
    });
}
function f(e) {
    let {
            guild: t,
            prompt: n,
            promptIndex: a,
            singleColumn: i,
            errors: r
        } = e, {dropdownsAllowed: l} = (0, _.Ug)(t.id), o = l ? h.qm : h.M$, {
            handleDragStart: c,
            handleDragReset: u,
            handleDragComplete: E
        } = (0, d.Z)(n.options, e => (0, m.Kk)(t, n.id, { options: e }));
    return (0, s.jsxs)('div', {
        className: C.options,
        children: [
            n.options.map((e, l) => (0, s.jsx)(S.Z, {
                guild: t,
                prompt: n,
                promptIndex: a,
                singleColumn: i,
                option: e,
                onDragStart: c,
                onDragComplete: E,
                onDragReset: u,
                hasError: null != r.optionErrors[l]
            }, e.id)),
            n.options.length < o ? (0, s.jsx)(S.B, {
                guild: t,
                prompt: n,
                promptIndex: a,
                singleColumn: i
            }) : null
        ]
    });
}
