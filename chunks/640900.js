n.d(t, {
	E: function () {
		return c;
	},
	h: function () {
		return _;
	}
});
var r = n(470079),
	i = n(182823),
	a = n(882932),
	s = n(251433),
	o = n(706682),
	l = n(705782),
	u = n(201284);
function c(e, t) {
	let {
			inputElementType: n = 'input',
			isDisabled: c = !1,
			isRequired: d = !1,
			isReadOnly: _ = !1,
			type: E = 'text',
			validationBehavior: f = 'aria'
		} = e,
		[h, p] = (0, a.zk)(e.value, e.defaultValue || '', e.onChange),
		{ focusableProps: I } = (0, o.kc)(e, t),
		m = (0, u.Q3)({
			...e,
			value: h
		}),
		{ isInvalid: T, validationErrors: g, validationDetails: S } = m.displayValidation,
		{
			labelProps: A,
			fieldProps: N,
			descriptionProps: v,
			errorMessageProps: O
		} = (0, s.U)({
			...e,
			isInvalid: T,
			errorMessage: e.errorMessage || g
		}),
		R = (0, i.zL)(e, { labelable: !0 }),
		C = {
			type: E,
			pattern: e.pattern
		};
	return (
		(0, i.y$)(t, h, p),
		(0, l.Q)(e, m, t),
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
			labelProps: A,
			inputProps: (0, i.dG)(R, 'input' === n && C, {
				disabled: c,
				readOnly: _,
				required: d && 'native' === f,
				'aria-required': (d && 'aria' === f) || void 0,
				'aria-invalid': T || void 0,
				'aria-errormessage': e['aria-errormessage'],
				'aria-activedescendant': e['aria-activedescendant'],
				'aria-autocomplete': e['aria-autocomplete'],
				'aria-haspopup': e['aria-haspopup'],
				value: h,
				onChange: (e) => p(e.target.value),
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
				...I,
				...N
			}),
			descriptionProps: v,
			errorMessageProps: O,
			isInvalid: T,
			validationErrors: g,
			validationDetails: S
		}
	);
}
function d() {
	return 'undefined' != typeof window && window.InputEvent && 'function' == typeof InputEvent.prototype.getTargetRanges;
}
function _(e, t, n) {
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
				r =
					i.selectionEnd === i.selectionStart
						? i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd + 1)
						: i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
				break;
			case 'deleteContentBackward':
				r =
					i.selectionEnd === i.selectionStart
						? i.value.slice(0, i.selectionStart - 1) + i.value.slice(i.selectionStart)
						: i.value.slice(0, i.selectionStart) + i.value.slice(i.selectionEnd);
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
					let n =
						e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
					!t.validate(n) && e.preventDefault();
				},
		{ labelProps: o, inputProps: l, descriptionProps: u, errorMessageProps: _, ...E } = c(e, n),
		f = (0, r.useRef)(null);
	return {
		inputProps: (0, i.dG)(l, {
			onBeforeInput: s,
			onCompositionStart() {
				let { value: e, selectionStart: t, selectionEnd: r } = n.current;
				f.current = {
					value: e,
					selectionStart: t,
					selectionEnd: r
				};
			},
			onCompositionEnd() {
				if (!t.validate(n.current.value)) {
					let { value: e, selectionStart: r, selectionEnd: i } = f.current;
					(n.current.value = e), n.current.setSelectionRange(r, i), t.setInputValue(e);
				}
			}
		}),
		labelProps: o,
		descriptionProps: u,
		errorMessageProps: _,
		...E
	};
}
