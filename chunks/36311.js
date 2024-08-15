n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(481060),
	c = n(749210),
	u = n(986035),
	d = n(594174),
	h = n(63063),
	m = n(981631),
	p = n(689938),
	_ = n(358267);
function f(e, t, n) {
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
class E extends a.PureComponent {
	componentDidMount() {
		let { current: e } = this.scroller;
		null == e || e.scrollToBottom();
	}
	render() {
		let { nsfwDisallowed: e } = this.props,
			t = p.Z.Messages.NSFW_DESCRIPTION;
		t = e ? p.Z.Messages.AGE_GATE_NSFW_UNDERAGE_BODY.format({ helpURL: h.Z.getArticleURL(m.BhN.NSFW_AGE_GATING) }) : p.Z.Messages.AGE_GATE_NSFW_DESCRIPTION;
		let n = e
			? (0, i.jsx)(u.Z, {
					onAgree: this.handleAgree,
					onDisagree: this.handleDisagree,
					title: p.Z.Messages.AGE_GATE_NSFW_UNDERAGE_HEADER,
					description: t,
					agreement: null,
					disagreement: p.Z.Messages.BACK,
					imageClassName: _.ageGatedImage
				})
			: (0, i.jsx)(u.Z, {
					onAgree: this.handleAgree,
					onDisagree: this.handleDisagree,
					title: p.Z.Messages.NSFW_TITLE,
					description: t,
					agreement: p.Z.Messages.NSFW_ACCEPT,
					disagreement: p.Z.Messages.NSFW_DECLINE
				});
		return (0, i.jsx)(o.AdvancedScroller, {
			ref: this.scroller,
			className: _.scroller,
			children: (0, i.jsx)('div', {
				className: l()(this.props.className, _.wrapper),
				children: n
			})
		});
	}
	constructor(...e) {
		super(...e),
			f(this, 'scroller', a.createRef()),
			f(this, 'handleDisagree', () => {
				let { guild: e } = this.props;
				null != e && c.Z.nsfwReturnToSafety(e.id);
			}),
			f(this, 'handleAgree', () => {
				let { guild: e } = this.props;
				null != e && c.Z.nsfwAgree(e.id);
			});
	}
}
t.Z = r.ZP.connectStores([d.default], () => {
	var e;
	return { nsfwDisallowed: (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1 };
})(E);
