"use strict";
n.r(t), n.d(t, {
  useTextField: function() {
    return a
  },
  useFormattedTextField: function() {
    return u
  }
});
var r = n("290895"),
  i = n("825167"),
  o = n("780095"),
  s = n("884691");

function a(e, t) {
  var n;
  let {
    inputElementType: s = "input",
    isDisabled: a = !1,
    isRequired: c = !1,
    isReadOnly: u = !1,
    validationState: d,
    isInvalid: l = !1,
    type: f = "text",
    value: p,
    defaultValue: h,
    onChange: g = () => {}
  } = e, {
    focusableProps: b
  } = (0, o.useFocusable)(e, t), {
    labelProps: v,
    fieldProps: m,
    descriptionProps: y,
    errorMessageProps: x
  } = (0, i.useField)(e), w = (0, r.filterDOMProps)(e, {
    labelable: !0
  }), S = {
    type: f,
    pattern: e.pattern
  };
  return (0, r.useFormReset)(t, null !== (n = null != p ? p : h) && void 0 !== n ? n : "", g), {
    labelProps: v,
    inputProps: (0, r.mergeProps)(w, "input" === s && S, {
      disabled: a,
      readOnly: u,
      "aria-required": c || void 0,
      "aria-invalid": l || "invalid" === d || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-activedescendant": e["aria-activedescendant"],
      "aria-autocomplete": e["aria-autocomplete"],
      "aria-haspopup": e["aria-haspopup"],
      value: e.value,
      defaultValue: e.value ? void 0 : e.defaultValue,
      onChange: e => g(e.target.value),
      autoComplete: e.autoComplete,
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
      ...b,
      ...m
    }),
    descriptionProps: y,
    errorMessageProps: x
  }
}

function c() {
  return "undefined" != typeof window && window.InputEvent && "function" == typeof InputEvent.prototype.getTargetRanges
}

function u(e, t, n) {
  let i = (0, r.useEffectEvent)(e => {
    let r, i = n.current;
    switch (e.inputType) {
      case "historyUndo":
      case "historyRedo":
        return;
      case "deleteContent":
      case "deleteByCut":
      case "deleteByDrag":
        r = i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
        break;
      case "deleteContentForward":
        r = i.selectionEnd === i.selectionStart ? i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd + 1) : i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
        break;
      case "deleteContentBackward":
        r = i.selectionEnd === i.selectionStart ? i.value.slice(0, i.selectionStart - 1) + i.value.slice(i.selectionStart) : i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
        break;
      case "deleteSoftLineBackward":
      case "deleteHardLineBackward":
        r = i.value.slice(i.selectionStart);
        break;
      default:
        null != e.data && (r = i.value.slice(0, i.selectionStart) + e.data + i.value.slice(i.selectionEnd))
    }(null == r || !t.validate(r)) && e.preventDefault()
  });
  (0, s.useEffect)(() => {
    if (!c()) return;
    let e = n.current;
    return e.addEventListener("beforeinput", i, !1), () => {
      e.removeEventListener("beforeinput", i, !1)
    }
  }, [n, i]);
  let o = c() ? null : e => {
      let n = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
      !t.validate(n) && e.preventDefault()
    },
    {
      labelProps: u,
      inputProps: d,
      descriptionProps: l,
      errorMessageProps: f
    } = a(e, n),
    p = (0, s.useRef)(null);
  return {
    inputProps: (0, r.mergeProps)(d, {
      onBeforeInput: o,
      onCompositionStart() {
        let {
          value: e,
          selectionStart: t,
          selectionEnd: r
        } = n.current;
        p.current = {
          value: e,
          selectionStart: t,
          selectionEnd: r
        }
      },
      onCompositionEnd() {
        if (!t.validate(n.current.value)) {
          let {
            value: e,
            selectionStart: r,
            selectionEnd: i
          } = p.current;
          n.current.value = e, n.current.setSelectionRange(r, i), t.setInputValue(e)
        }
      }
    }),
    labelProps: u,
    descriptionProps: l,
    errorMessageProps: f
  }
}