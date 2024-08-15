t(47120), t(757143);
var n = t(735250),
	a = t(470079),
	i = t(481060),
	r = t(218872);
function o(e, s, t) {
	return (
		s in e
			? Object.defineProperty(e, s, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[s] = t),
		e
	);
}
let l = /[^0-9]/g;
class c extends a.PureComponent {
	componentDidUpdate(e) {
		let s = this._inputRef;
		e.value !== this.props.value && null != s && s.setSelectionRange(this.selectionStart, this.selectionStart);
	}
	render() {
		return (0, n.jsx)(i.TextInput, {
			...this.props,
			inputMode: 'numeric',
			onChange: this.handleChange,
			inputRef: this.setRef
		});
	}
	constructor(...e) {
		super(...e),
			o(this, '_inputRef', void 0),
			o(this, 'selectionStart', 0),
			o(this, 'setRef', (e) => {
				let { inputRef: s } = this.props;
				(this._inputRef = e), null != s && s(e);
			}),
			o(this, 'handleChange', (e, s) => {
				let { value: t, onChange: n } = this.props,
					a = this._inputRef;
				if (e === t || null == a || null == t) return;
				let i = (0, r.M)(e),
					o = a.selectionStart;
				i === t && i.length <= 3 && t.includes('/') && !e.includes('/') ? (i = i.replace(l, '')) : i === t && e.includes('/') && !t.includes('/') && (i += '/'), i.length > e.length && (o += i.length - e.length), (this.selectionStart = o), null != n && n(i, s);
			});
	}
}
s.Z = c;
