n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120),
    n(390547);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(971809),
    o = n(481060),
    c = n(303431);
let d = Object.keys(o.Button.Colors).filter((e) => 'CUSTOM' !== e),
    u = Object.keys(o.Button.Looks).filter((e) => 'BLANK' !== e),
    m = Object.keys(o.Button.Sizes).filter((e) => 'NONE' !== e);
function h() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)(g, {}), (0, i.jsx)(_, {}), (0, i.jsx)(E, {}), (0, i.jsx)(T, {}), (0, i.jsx)(S, {}), (0, i.jsx)(x, {}), (0, i.jsx)(p, {})]
    });
}
function g() {
    let [e, t] = s.useState(!1),
        n = d.flatMap((e) => [
            ...u.map((t) =>
                (0, i.jsxs)(
                    o.Button,
                    {
                        color: o.Button.Colors[e],
                        look: o.Button.Looks[t],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', t.toLowerCase()]
                    },
                    e + t
                )
            ),
            (0, i.jsx)('hr', { className: c.sectionDivider }, e + 'divider')
        ]),
        r = m.flatMap((e) =>
            (0, i.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                look: o.Button.Looks.FILLED,
                size: o.Button.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, i.jsxs)('div', {
        className: c.section,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsx)(o.Checkbox, {
                value: e,
                onChange: (e, n) => t(n),
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, i.jsxs)('div', {
                      className: c.buttons,
                      children: [
                          (0, i.jsx)('div', {
                              className: l()('theme-darker', c.section),
                              children: n
                          }),
                          (0, i.jsx)('div', {
                              className: l()('theme-light', c.section),
                              children: n
                          }),
                          (0, i.jsxs)('div', {
                              className: l()('theme-darker', c.section),
                              children: [
                                  (0, i.jsx)(o.Button, {
                                      color: o.Button.Colors.BRAND,
                                      look: o.Button.Looks.FILLED,
                                      disabled: !0,
                                      children: 'Disabled'
                                  }),
                                  r
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: l()('theme-light', c.section),
                              children: [
                                  (0, i.jsx)(o.Button, {
                                      color: o.Button.Colors.BRAND,
                                      look: o.Button.Looks.FILLED,
                                      disabled: !0,
                                      children: 'Disabled'
                                  }),
                                  r
                              ]
                          })
                      ]
                  })
                : null,
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
                    size: o.Button.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
                    size: o.Button.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
                    size: o.Button.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    look: o.Button.Looks.FILLED,
                    size: o.Button.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, i.jsx)(C, {})
        ]
    });
}
function p() {
    let [e, t] = s.useState('1');
    return (0, i.jsxs)('div', {
        className: c.section,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(o.TabBar, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: c.tabBar,
                children: [
                    (0, i.jsx)(o.TabBar.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(o.TabBar.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(o.TabBar.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function x() {
    let [e, t] = s.useState(1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState(5),
        [d, u] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: c.section,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(o.Popout, {
                    shouldShow: d,
                    renderPopout: () =>
                        (0, i.jsxs)(o.Menu, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(o.MenuGroup, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(o.MenuItem, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(o.MenuItem, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: o.ChatIcon
                                        }),
                                        (0, i.jsxs)(o.MenuItem, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(o.MenuItem, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(o.MenuItem, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(o.MenuItem, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(o.MenuGroup, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(o.MenuCheckboxItem, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => r(!n)
                                        }),
                                        (0, i.jsx)(o.MenuRadioItem, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(o.MenuRadioItem, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(o.MenuRadioItem, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(o.MenuControlItem, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(o.MenuSliderControl, {
                                                    ref: t,
                                                    value: l,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    onChange: (e) => a(e),
                                                    'aria-label': 'Slider'
                                                })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.MenuSeparator, {}),
                                (0, i.jsx)(o.MenuItem, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: o.TrashIcon
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(o.Button, {
                            onClick: () => u(!d),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function S() {
    return (0, i.jsxs)('div', {
        className: c.section,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Tooltips'
            }),
            (0, i.jsxs)('div', {
                style: {
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    (0, i.jsx)(o.Tooltip, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) =>
                            (0, i.jsx)(o.Button, {
                                ...e,
                                children: 'Tooltip on the top'
                            })
                    }),
                    (0, i.jsx)(o.Tooltip, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) =>
                            (0, i.jsx)(o.Button, {
                                ...e,
                                children: 'Tooltip on the left'
                            })
                    }),
                    (0, i.jsx)(o.Tooltip, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) =>
                            (0, i.jsx)(o.Button, {
                                ...e,
                                children: 'Tooltip on the bottom'
                            })
                    }),
                    (0, i.jsx)(o.Tooltip, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) =>
                            (0, i.jsx)(o.Button, {
                                ...e,
                                children: 'Tooltip on the right'
                            })
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function T() {
    let [e, t] = s.useState(!1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: c.section,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(o.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(o.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(o.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(o.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: o.Checkbox.Types.ROW,
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: c.section,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(o.FormSwitch, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => r(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: c.section,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(o.FormItem, {
                        children: (0, i.jsx)(o.RadioGroup, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return a(t);
                            },
                            options: [
                                {
                                    value: 'auto',
                                    name: 'Auto'
                                },
                                {
                                    value: '720p',
                                    name: '720p'
                                },
                                {
                                    value: '1080p',
                                    name: '1080p'
                                }
                            ],
                            value: l
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: c.section,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(o.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(o.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(o.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(o.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(o.Slider, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: c.slider,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(o.Slider, {
                                mini: !0,
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function C() {
    return (0, i.jsxs)('div', {
        className: c.shinyButtonExamples,
        children: [
            (0, i.jsx)(o.ShinyButton, {
                size: o.Button.Sizes.MEDIUM,
                shineSize: o.ShinyButton.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, i.jsx)(o.ShinyButton, {
                size: o.Button.Sizes.MEDIUM,
                shineSize: o.ShinyButton.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function _() {
    let [e, t] = s.useState(null),
        [n, r] = s.useState(null),
        [l, d] = s.useState([]),
        [u, m] = s.useState([]),
        [h, g] = s.useState([]);
    return (0, i.jsxs)('div', {
        className: c.searchableSelectExamples,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(o.SearchableSelect, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: a.G
            }),
            (0, i.jsx)(o.SearchableSelect, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => r(e),
                options: a.G
            }),
            (0, i.jsx)(o.SearchableSelect, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => d(e),
                options: a.G
            }),
            (0, i.jsx)(o.SearchableSelect, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: h,
                onChange: (e) => g(e),
                options: a.G
            }),
            (0, i.jsx)(o.SearchableSelect, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: u,
                onChange: (e) => m(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: c.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function E() {
    let [e, t] = s.useState(''),
        [n, r] = s.useState(''),
        [l, a] = s.useState('');
    return (0, i.jsxs)('div', {
        className: c.section,
        children: [
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(o.FormItem, {
                children: (0, i.jsx)(o.SearchBar, {
                    size: o.SearchBar.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(o.FormItem, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(o.TextInput, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(o.FormItem, {
                title: 'Error',
                children: (0, i.jsx)(o.TextInput, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(o.FormItem, {
                title: 'Error',
                children: (0, i.jsx)(o.TextInput, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(o.FormItem, {
                title: 'Read only',
                children: (0, i.jsx)(o.TextInput, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(o.FormItem, {
                title: 'Input with a label',
                children: (0, i.jsx)(o.TextInput, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(o.FormItem, {
                title: 'Text area',
                children: (0, i.jsx)(o.TextArea, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: r
                })
            })
        ]
    });
}
