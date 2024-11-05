n.d(t, {
    E: function () {
        return c;
    },
    h: function () {
        return f;
    }
});
var r = n(192379),
    i = n(661763),
    a = n(239700),
    s = n(523603),
    o = n(662845),
    l = n(464170),
    u = n(969129);
function c(e, t) {
    let { inputElementType: n = 'input', isDisabled: c = !1, isRequired: d = !1, isReadOnly: f = !1, type: _ = 'text', validationBehavior: h = 'aria' } = e,
        [p, m] = (0, a.zk)(e.value, e.defaultValue || '', e.onChange),
        { focusableProps: g } = (0, o.kc)(e, t),
        E = (0, u.Q3)({
            ...e,
            value: p
        }),
        { isInvalid: v, validationErrors: I, validationDetails: S } = E.displayValidation,
        {
            labelProps: T,
            fieldProps: b,
            descriptionProps: y,
            errorMessageProps: A
        } = (0, s.U)({
            ...e,
            isInvalid: v,
            errorMessage: e.errorMessage || I
        }),
        N = (0, i.zL)(e, { labelable: !0 }),
        C = {
            type: _,
            pattern: e.pattern
        };
    return (
        (0, i.y$)(t, p, m),
        (0, l.Q)(e, E, t),
        (0, r.useEffect)(() => {
            if (t.current instanceof (0, i.kR)(t.current).HTMLTextAreaElement) {
                let e = t.current;
                Object.defineProperty(e, 'defaultValue', {
                    get: () => e.value,
                    set: () => {},
                    configurable: !0
                });
            }
        }, [t]),
        {
            labelProps: T,
            inputProps: (0, i.dG)(N, 'input' === n && C, {
                disabled: c,
                readOnly: f,
                required: d && 'native' === h,
                'aria-required': (d && 'aria' === h) || void 0,
                'aria-invalid': v || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-activedescendant': e['aria-activedescendant'],
                'aria-autocomplete': e['aria-autocomplete'],
                'aria-haspopup': e['aria-haspopup'],
                value: p,
                onChange: (e) => m(e.target.value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...g,
                ...b
            }),
            descriptionProps: y,
            errorMessageProps: A,
            isInvalid: v,
            validationErrors: I,
            validationDetails: S
        }
    );
}
function d() {
    return 'undefined' != typeof window && window.InputEvent && 'function' == typeof InputEvent.prototype.getTargetRanges;
}
function f(e, t, n) {
    let a = (0, i.iW)((e) => {
        let r,
            i = n.current;
        switch (e.inputType) {
            case 'historyUndo':
            case 'historyRedo':
                return;
            case 'deleteContent':
            case 'deleteByCut':
            case 'deleteByDrag':
                r = i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
                break;
            case 'deleteContentForward':
                r = i.selectionEnd === i.selectionStart ? i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd + 1) : i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
                break;
            case 'deleteContentBackward':
                r = i.selectionEnd === i.selectionStart ? i.value.slice(0, i.selectionStart - 1) + i.value.slice(i.selectionStart) : i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
                break;
            case 'deleteSoftLineBackward':
            case 'deleteHardLineBackward':
                r = i.value.slice(i.selectionStart);
                break;
            default:
                null != e.data && (r = i.value.slice(0, i.selectionStart) + e.data + i.value.slice(i.selectionEnd));
        }
        (null == r || !t.validate(r)) && e.preventDefault();
    });
    (0, r.useEffect)(() => {
        if (!d()) return;
        let e = n.current;
        return (
            e.addEventListener('beforeinput', a, !1),
            () => {
                e.removeEventListener('beforeinput', a, !1);
            }
        );
    }, [n, a]);
    let s = d()
            ? null
            : (e) => {
                  let n = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
                  !t.validate(n) && e.preventDefault();
              },
        { labelProps: o, inputProps: l, descriptionProps: u, errorMessageProps: f, ..._ } = c(e, n),
        h = (0, r.useRef)(null);
    return {
        inputProps: (0, i.dG)(l, {
            onBeforeInput: s,
            onCompositionStart() {
                let { value: e, selectionStart: t, selectionEnd: r } = n.current;
                h.current = {
                    value: e,
                    selectionStart: t,
                    selectionEnd: r
                };
            },
            onCompositionEnd() {
                if (!t.validate(n.current.value)) {
                    let { value: e, selectionStart: r, selectionEnd: i } = h.current;
                    (n.current.value = e), n.current.setSelectionRange(r, i), t.setInputValue(e);
                }
            }
        }),
        labelProps: o,
        descriptionProps: u,
        errorMessageProps: f,
        ..._
    };
}
