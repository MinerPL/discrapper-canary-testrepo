let r;
n.d(t, {
	l: function () {
		return f;
	}
});
var i,
	a = n(735250),
	s = n(470079),
	o = n(120356),
	l = n.n(o),
	u = n(58654),
	c = n(84735),
	d = n(594402);
function _(e, t, n) {
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
let E = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-transform', 'width', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
class f extends (i = s.PureComponent) {
	componentDidMount() {
		var e, t;
		null === (e = (t = this.props).onResize) || void 0 === e || e.call(t, void 0), Promise.resolve().then(() => this.calculateSize());
	}
	componentDidUpdate(e, t) {
		if (this.state.height !== t.height) {
			let { onResize: e } = this.props;
			null == e || e(this.state.height);
		}
		e.value !== this.props.value && Promise.resolve().then(() => this.calculateSize());
	}
	calculateSize() {
		var e;
		let t = this._textArea;
		if (null == t) return;
		let { fontWidthEstimate: n, rows: i } = this.props,
			a = null !== (e = this.props.value) && void 0 !== e ? e : t.value;
		if (null != n && -1 === a.indexOf('\n') && a.length * n < 0.8 * t.offsetWidth) {
			this.setState({ height: void 0 });
			return;
		}
		null == r && null != document.body && ((r = document.createElement('textarea')), document.body.appendChild(r));
		let { paddingSize: s, borderSize: o, boxSizing: l, sizingStyle: u } = this.calculateNodeStyling(t);
		r.setAttribute('style', u + ';\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n'), (r.value = a), null != i ? r.setAttribute('rows', ''.concat(i)) : r.removeAttribute('rows');
		let c = r.scrollHeight;
		'border-box' === l ? (c += o) : 'content-box' === l && (c -= s), this.setState({ height: c });
	}
	calculateNodeStyling(e) {
		let t = window.getComputedStyle(e),
			n = (0, u.L)(t.getPropertyValue('box-sizing'), t.getPropertyValue('-moz-box-sizing'), t.getPropertyValue('-webkit-box-sizing')),
			r = parseFloat(t.getPropertyValue('padding-bottom')) + parseFloat(t.getPropertyValue('padding-top')),
			i = parseFloat(t.getPropertyValue('border-bottom-width')) + parseFloat(t.getPropertyValue('border-top-width'));
		return {
			sizingStyle: E.map((e) => ''.concat(e, ':').concat(t.getPropertyValue(e))).join(';'),
			paddingSize: r,
			borderSize: i,
			boxSizing: n
		};
	}
	clear() {
		null != this._textArea && (this._textArea.value = ''), this.calculateSize();
	}
	blur() {
		let { _textArea: e } = this;
		null != e && e.blur();
	}
	focus() {
		let { _textArea: e } = this;
		null != e && e.focus();
	}
	setSelection(e, t) {
		null != this._textArea && ((this._textArea.selectionStart = e), (this._textArea.selectionEnd = t));
	}
	get selectionStart() {
		var e, t;
		return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.selectionStart) && void 0 !== t ? t : 0;
	}
	get selectionEnd() {
		var e, t;
		return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.selectionEnd) && void 0 !== t ? t : 0;
	}
	get value() {
		var e, t;
		return null !== (t = null === (e = this._textArea) || void 0 === e ? void 0 : e.value) && void 0 !== t ? t : '';
	}
	render() {
		let { style: e, className: t, ...n } = this.props;
		delete n.fontWidthEstimate, delete n.onResize;
		let r = {
			...this.state,
			...e
		};
		return (0, a.jsx)(c.t, {
			children: (0, a.jsx)('textarea', {
				...n,
				className: l()(t, d.scrollbarGhostHairline),
				ref: this.handleSetRef,
				style: r,
				onChange: this.handleChange
			})
		});
	}
	constructor(e) {
		super(e),
			_(this, '_textArea', void 0),
			_(this, 'handleSetRef', (e) => {
				this._textArea = e;
			}),
			_(this, 'handleChange', (e) => {
				let { onChange: t } = this.props;
				null == t || t(e), this.calculateSize();
			}),
			(this.state = { height: void 0 });
	}
}
_(f, 'defaultProps', {
	autoFocus: !1,
	disabled: !1,
	autoCorrect: 'off'
});
