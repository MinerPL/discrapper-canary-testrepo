n(47120);
var i,
	l = n(735250),
	r = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(748780),
	c = n(846519),
	u = n(481060),
	d = n(585483),
	h = n(981631),
	p = n(689938),
	_ = n(905674);
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
let g = {
	friction: 15,
	tension: 100
};
class m extends (i = r.PureComponent) {
	componentDidMount() {
		this.setState({ shown: !0 }), d.S.subscribe(h.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
	}
	componentWillUnmount() {
		this.focusTimeout.stop(), d.S.unsubscribe(h.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
	}
	componentDidUpdate() {
		let { hasQuery: e } = this.props;
		!e && this.springTo(0);
	}
	springTo(e) {
		let { reducedMotion: t } = this.context;
		!0 !== t.enabled &&
			o.Z.spring(this.state.translateY, {
				toValue: Math.min(e, 250),
				...g
			}).start();
	}
	renderArrowGroup(e) {
		return (0, l.jsxs)('div', {
			className: s()(_.arrowGroup, e),
			children: [
				(0, l.jsx)(o.Z.div, {
					className: s()(_.arrowContainer, _.horizontal),
					style: this.getStyle(),
					children: (0, l.jsx)('img', {
						alt: '',
						src: n(403756),
						className: _.arrowIcon
					})
				}),
				(0, l.jsx)('div', {
					className: s()(_.arrowContainer, _.diag1),
					children: (0, l.jsx)('img', {
						alt: '',
						src: n(536404),
						className: _.arrowIcon
					})
				}),
				(0, l.jsx)('div', {
					className: s()(_.arrowContainer, _.diag2),
					children: (0, l.jsx)('img', {
						alt: '',
						src: n(569347),
						className: _.arrowIcon
					})
				})
			]
		});
	}
	renderContent() {
		return (0, l.jsxs)('div', {
			className: _.tutorialMessages,
			children: [
				(0, l.jsx)('div', {
					className: _.searchMessage,
					children: p.Z.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH
				}),
				(0, l.jsx)('div', {
					className: _.selectMessage,
					children: p.Z.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SELECT
				})
			]
		});
	}
	render() {
		let { hasQuery: e } = this.props,
			{ shown: t } = this.state;
		return (0, l.jsxs)('div', {
			ref: this.rootRef,
			className: s()(_.tutorial, {
				[_.shown]: t,
				[_.hasQuery]: e
			}),
			children: [this.renderContent(), this.renderArrowGroup(_.__invalid_left), this.renderArrowGroup(_.right)]
		});
	}
	getStyle() {
		let { reducedMotion: e } = this.context;
		return !0 === e.enabled
			? {}
			: {
					opacity: 1,
					transform: [
						{
							translateY: this.state.translateY.interpolate({
								inputRange: [0, 250],
								outputRange: ['0px', ''.concat(250, 'px')]
							})
						},
						{ translateZ: 0 }
					]
				};
	}
	constructor(...e) {
		super(...e),
			f(this, 'state', {
				shown: !1,
				translateY: new o.Z.Value(0)
			}),
			f(this, 'rootRef', r.createRef()),
			f(this, 'focusTimeout', new c.V7()),
			f(this, 'handleResultFocus', (e) => {
				let { node: t } = e;
				this.focusTimeout.start(1, () => {
					if (this.props.hasQuery && null != t && null != this.rootRef.current) {
						let { top: e } = this.rootRef.current.getBoundingClientRect(),
							{ top: n } = t.getBoundingClientRect(),
							i = Math.abs(e - n);
						this.springTo(i - 118 + 9);
					} else this.springTo(0);
				});
			});
	}
}
f(m, 'contextType', u.AccessibilityPreferencesContext), (t.Z = m);
