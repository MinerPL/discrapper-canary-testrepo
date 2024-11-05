n.d(t, {
    L7: function () {
        return _;
    },
    MG: function () {
        return h;
    }
});
var r = n(661763),
    i = n(192379),
    a = n(766203),
    s = n(921336),
    o = n(649859),
    l = n(523603),
    u = n(184495),
    c = n(464170),
    d = n(867824);
let f = new WeakMap();
function _(e, t, n) {
    let { keyboardDelegate: c, isDisabled: d, isRequired: _, name: h, validationBehavior: p = 'aria' } = e,
        m = (0, o.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }),
        g = (0, i.useMemo)(() => c || new a.dp(t.collection, t.disabledKeys, null, m), [c, t.collection, t.disabledKeys, m]),
        { menuTriggerProps: E, menuProps: v } = (0, u.u4)(
            {
                isDisabled: d,
                type: 'listbox'
            },
            t,
            n
        ),
        { typeSelectProps: I } = (0, a.ip)({
            keyboardDelegate: g,
            selectionManager: t.selectionManager,
            onTypeSelect(e) {
                t.setSelectedKey(e);
            }
        }),
        { isInvalid: S, validationErrors: T, validationDetails: b } = t.displayValidation,
        {
            labelProps: y,
            fieldProps: A,
            descriptionProps: N,
            errorMessageProps: C
        } = (0, l.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: S,
            errorMessage: e.errorMessage || T
        });
    (I.onKeyDown = I.onKeyDownCapture), delete I.onKeyDownCapture;
    let R = (0, r.zL)(e, { labelable: !0 }),
        O = (0, r.dG)(I, E, A),
        D = (0, r.Me)();
    return (
        f.set(t, {
            isDisabled: d,
            isRequired: _,
            name: h,
            validationBehavior: p
        }),
        {
            labelProps: {
                ...y,
                onClick: () => {
                    !e.isDisabled && (n.current.focus(), (0, s._w)('keyboard'));
                }
            },
            triggerProps: (0, r.dG)(R, {
                ...O,
                isDisabled: d,
                onKeyDown: (0, r.tS)(
                    O.onKeyDown,
                    (e) => {
                        switch (e.key) {
                            case 'ArrowLeft': {
                                e.preventDefault();
                                let n = null != t.selectedKey ? g.getKeyAbove(t.selectedKey) : g.getFirstKey();
                                n && t.setSelectedKey(n);
                                break;
                            }
                            case 'ArrowRight': {
                                e.preventDefault();
                                let n = null != t.selectedKey ? g.getKeyBelow(t.selectedKey) : g.getFirstKey();
                                n && t.setSelectedKey(n);
                            }
                        }
                    },
                    e.onKeyDown
                ),
                onKeyUp: e.onKeyUp,
                'aria-labelledby': [D, O['aria-labelledby'], O['aria-label'] && !O['aria-labelledby'] ? O.id : null].filter(Boolean).join(' '),
                onFocus(n) {
                    !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
                },
                onBlur(n) {
                    !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
                }
            }),
            valueProps: { id: D },
            menuProps: {
                ...v,
                autoFocus: t.focusStrategy || !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                disallowEmptySelection: !0,
                linkBehavior: 'selection',
                onBlur: (n) => {
                    !n.currentTarget.contains(n.relatedTarget) && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
                },
                'aria-labelledby': [A['aria-labelledby'], O['aria-label'] && !A['aria-labelledby'] ? O.id : null].filter(Boolean).join(' ')
            },
            descriptionProps: N,
            errorMessageProps: C,
            isInvalid: S,
            validationErrors: T,
            validationDetails: b
        }
    );
}
function h(e) {
    var t;
    let { state: n, triggerRef: a, label: o, name: l, isDisabled: u } = e,
        _ = (0, i.useRef)(null),
        {
            containerProps: h,
            inputProps: p,
            selectProps: m
        } = (function (e, t, n) {
            var i;
            let a = f.get(t) || {},
                { autoComplete: o, name: l = a.name, isDisabled: u = a.isDisabled } = e,
                { validationBehavior: _, isRequired: h } = a,
                p = (0, s.Kf)(),
                { visuallyHiddenProps: m } = (0, d.S)();
            return (
                (0, r.y$)(e.selectRef, t.selectedKey, t.setSelectedKey),
                (0, c.Q)(
                    {
                        validationBehavior: _,
                        focus: () => n.current.focus()
                    },
                    t,
                    e.selectRef
                ),
                {
                    containerProps: {
                        ...m,
                        'aria-hidden': !0,
                        'data-a11y-ignore': 'aria-hidden-focus'
                    },
                    inputProps: {
                        type: 'text',
                        tabIndex: null == p || t.isFocused || t.isOpen ? -1 : 0,
                        style: { fontSize: 16 },
                        onFocus: () => n.current.focus(),
                        disabled: u
                    },
                    selectProps: {
                        tabIndex: -1,
                        autoComplete: o,
                        disabled: u,
                        required: 'native' === _ && h,
                        name: l,
                        value: null !== (i = t.selectedKey) && void 0 !== i ? i : '',
                        onChange: (e) => t.setSelectedKey(e.target.value)
                    }
                }
            );
        })(
            {
                ...e,
                selectRef: _
            },
            n,
            a
        );
    return n.collection.size <= 300
        ? i.createElement(
              'div',
              {
                  ...h,
                  'data-testid': 'hidden-select-container'
              },
              i.createElement('input', p),
              i.createElement(
                  'label',
                  null,
                  o,
                  i.createElement(
                      'select',
                      {
                          ...m,
                          ref: _
                      },
                      i.createElement('option', null),
                      [...n.collection.getKeys()].map((e) => {
                          let t = n.collection.getItem(e);
                          if ('item' === t.type)
                              return i.createElement(
                                  'option',
                                  {
                                      key: t.key,
                                      value: t.key
                                  },
                                  t.textValue
                              );
                      })
                  )
              )
          )
        : l
          ? i.createElement('input', {
                type: 'hidden',
                autoComplete: m.autoComplete,
                name: l,
                disabled: u,
                value: null !== (t = n.selectedKey) && void 0 !== t ? t : ''
            })
          : null;
}
