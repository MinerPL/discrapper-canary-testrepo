n(47120), n(757143);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(239091),
	u = n(555573),
	c = n(998698),
	d = n(459273),
	_ = n(358085),
	E = n(62883),
	f = n(752305),
	h = n(981631);
function p(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let m = /(\t|\s)/;
class I extends i.PureComponent {
	componentDidMount() {
		!this.props.disableAutoFocus &&
			(Promise.resolve().then(() => {
				var e;
				let { value: t } = this.props;
				null === (e = this._ref) || void 0 === e || e.setSelection(t.length, t.length);
			}),
			this.focus()),
			null != c.Z.getActiveCommand(this.props.channel.id) &&
				u.Po({
					channelId: this.props.channel.id,
					command: null,
					section: null
				});
	}
	componentDidUpdate(e, t) {
		this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
	}
	getCurrentWord() {
		let e = this._ref;
		if (null == e)
			return {
				word: null,
				isAtStart: !1
			};
		let { value: t } = this.props;
		if (0 === t.trim().length)
			return {
				word: null,
				isAtStart: !1
			};
		let n = e.selectionStart,
			r = e.selectionEnd;
		for (; n > 0 && !m.test(t[n - 1]); ) {
			n--;
		}
		return {
			word: t.slice(n, r),
			isAtStart: 0 === n
		};
	}
	blur() {
		let { _ref: e } = this;
		null != e && e.blur();
	}
	submit(e) {
		return e.preventDefault(), this.props.onSubmit(this.props.value);
	}
	insertAutocomplete(e, t) {
		let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
			{ word: r } = this.getCurrentWord();
		if (null == r) this.insertText(e, t, n);
		else {
			let t = this._ref;
			if (null == t) return;
			let i = t.value.slice(0, t.selectionStart - r.length),
				a = t.value.slice(t.selectionEnd);
			this._insertText(e, i, a, n);
		}
	}
	insertText(e, t) {
		let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
			r = this._ref;
		if (null == r) return;
		let i = r.value.slice(0, r.selectionStart),
			a = r.value.slice(r.selectionEnd);
		this._insertText(e, i, a, n);
	}
	_insertText(e, t, n, r) {
		if (null == this._ref) return;
		r && (e += ' ');
		let i = t + e + n,
			{ onChange: a } = this.props;
		null == a || a(null, i, (0, f.JM)(i));
		let s = t.length + e.length;
		this.setState({ nextSelection: s }, () => {
			this.props.maybeShowAutocomplete();
		});
	}
	hasOpenCodeBlock() {
		let e = this._ref;
		if (null == e) return !1;
		let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
		return null != t && t.length > 0 && t.length % 2 != 0;
	}
	render() {
		let { value: e, disabled: t, placeholder: n, required: i, onResize: a, className: l, id: u, submitting: c, textAreaPaddingClassName: _, spellcheckEnabled: E, 'aria-controls': f, 'aria-expanded': p, 'aria-activedescendant': m } = this.props;
		return (0, r.jsxs)(r.Fragment, {
			children: [
				(0, r.jsx)(d.d9, {
					event: h.CkL.GLOBAL_CLIPBOARD_PASTE,
					handler: this.handleGlobalPaste
				}),
				(0, r.jsx)(o.TextAreaAutosize, {
					ref: this.handleSetRef,
					className: s()(l, _),
					id: u,
					rows: 1,
					fontWidthEstimate: 6,
					placeholder: n,
					disabled: t || c,
					required: i,
					onChange: this.handleOnChange,
					onResize: a,
					onKeyPress: this.handleKeyPress,
					onKeyDown: this.handleKeyDown,
					onKeyUp: this.handleKeyUp,
					onFocus: this.props.onFocus,
					onBlur: this.props.onBlur,
					onPaste: this.handlePaste,
					onClick: this.handleClick,
					onContextMenu: this.handleContextMenu,
					value: t ? '' : e,
					tabIndex: 0,
					spellCheck: E,
					'aria-controls': f,
					'aria-expanded': p,
					'aria-activedescendant': m,
					'aria-haspopup': 'listbox',
					'aria-autocomplete': 'list',
					'aria-multiline': !0
				})
			]
		});
	}
	handleTabOrEnterDown(e) {
		e.which === h.yXg.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === h.yXg.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === h.yXg.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === h.yXg.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText('\t', void 0, !1));
	}
	insertEmoji(e, t) {
		this.insertText(''.concat(':').concat(e.name).concat(':'), void 0, t);
	}
	getFirstText() {
		return this.props.value;
	}
	constructor(...e) {
		super(...e),
			p(this, '_ref', void 0),
			p(this, 'state', { nextSelection: -1 }),
			p(this, 'focus', () => {
				let { _ref: e } = this;
				null != e && e.focus();
			}),
			p(this, 'handleSetRef', (e) => {
				this._ref = e;
			}),
			p(this, 'handleKeyPress', (e) => {
				if (e.which === h.yXg.ENTER) {
					if (!e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value);
				}
			}),
			p(this, 'handleKeyDown', (e) => {
				switch (e.which) {
					case h.yXg.ARROW_DOWN:
						this.props.moveSelection(1) && e.preventDefault();
						break;
					case h.yXg.N:
						e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
						break;
					case h.yXg.ARROW_UP:
						this.props.moveSelection(-1) && e.preventDefault();
						break;
					case h.yXg.P:
						e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
						break;
					case h.yXg.TAB:
					case h.yXg.ENTER:
						this.handleTabOrEnterDown(e);
				}
				let { onKeyDown: t } = this.props;
				null == t || t(e);
			}),
			p(this, 'handleKeyUp', (e) => {
				switch (e.which) {
					case h.yXg.ARROW_RIGHT:
					case h.yXg.ARROW_LEFT:
					case h.yXg.HOME:
					case h.yXg.END:
						this.props.maybeShowAutocomplete();
				}
				let { onKeyUp: t } = this.props;
				null == t || t(e);
			}),
			p(this, 'handleGlobalPaste', (e) => {
				let { event: t } = e;
				!this.handlePaste(t) && this.focus();
			}),
			p(this, 'handlePaste', (e) => {
				let t = this.props.onPaste(e);
				return t && e.preventDefault(), t;
			}),
			p(this, 'handleClick', () => {
				this.props.maybeShowAutocomplete();
			}),
			p(this, 'handleContextMenu', (e) => {
				_.isPlatformEmbedded &&
					(0, l.jW)(
						e,
						async () => {
							let { default: e } = await n.e('99989').then(n.bind(n, 889662));
							return (t) =>
								(0, r.jsx)(e, {
									...t,
									isChannelTextArea: !0,
									text: (0, E.getSelectionText)()
								});
						},
						{
							align: 'bottom',
							enableSpellCheck: !0
						}
					);
			}),
			p(this, 'handleOnChange', (e) => {
				let { onChange: t, allowNewLines: n } = this.props,
					r = e.currentTarget.value,
					i = n ? r : r.replace('\n', '');
				null == t || t(e, i, (0, f.JM)(i));
			});
	}
}
t.Z = I;
