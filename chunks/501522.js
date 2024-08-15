a(47120);
var n = a(735250),
	i = a(470079),
	r = a(333032);
function l(e, t, a) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = a),
		e
	);
}
class o extends i.Component {
	componentDidUpdate(e) {
		let {
			props: { location: t, shouldScrollToTop: a },
			scrollRef: { current: n }
		} = this;
		if (null != n) t !== e.location && (null != a ? a(this.props) && (n.scrollTop = 0) : (n.scrollTop = 0));
	}
	render() {
		let { className: e, render: t } = this.props;
		return (0, n.jsx)('div', {
			ref: this.scrollRef,
			className: e,
			children: t(this.scrollTo, this.getScrollTop)
		});
	}
	constructor(...e) {
		super(...e),
			l(this, 'scrollRef', i.createRef()),
			l(this, 'scrollTo', (e) => {
				null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
			}),
			l(this, 'getScrollTop', () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop));
	}
}
t.Z = (0, r.EN)(o);
