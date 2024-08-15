n(47120), n(653041);
var i,
	l = n(735250),
	r = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(954955),
	c = n.n(o),
	u = n(748780),
	d = n(902704),
	h = n(481060),
	p = n(891774);
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
let f = {
	friction: 10,
	tension: 300
};
class g extends r.Component {
	shouldComponentUpdate(e, t) {
		return !(0, d.Z)(this.props, e, ['animate']) || !(0, d.Z)(this.state, t);
	}
	componentDidMount() {
		let { hide: e } = this.props;
		e ? this.state.translateY.setValue(1) : this.state.translateY.setValue(0);
	}
	componentDidUpdate(e) {
		let { hide: t } = e,
			{ hide: n } = this.props;
		n && !t ? this.animateOut() : !n && t && this.animateIn();
	}
	componentWillUnmount() {
		null != this._timeout && clearTimeout(this._timeout);
	}
	animateIn() {
		let { translateY: e } = this.state;
		if ((null != this._timeout && clearTimeout(this._timeout), !this.props.animate)) {
			e.setValue(0);
			return;
		}
		this._timeout = setTimeout(() => {
			u.Z.spring(e, {
				toValue: 0,
				...f
			}).start();
		}, 100);
	}
	animateOut() {
		let { translateY: e } = this.state;
		if ((null != this._timeout && clearTimeout(this._timeout), !this.props.animate)) {
			e.setValue(1);
			return;
		}
		u.Z.spring(e, {
			toValue: 1,
			...f
		}).start();
	}
	render() {
		let { className: e, text: t, hide: n, onClick: i } = this.props;
		return (0, l.jsx)(u.Z.div, {
			className: s()(p.bar, e),
			onClick: i,
			style: this.getAnimatedStyle(),
			'aria-hidden': n,
			children: (0, l.jsx)('span', {
				className: p.text,
				children: t
			})
		});
	}
	getAnimatedStyle() {
		let { translateY: e } = this.state,
			{ reverse: t } = this.props;
		return {
			transform: [
				{
					translateY: e.interpolate({
						inputRange: [0, 1],
						outputRange: ['0%', t ? '180%' : '-180%']
					})
				}
			]
		};
	}
	constructor(e) {
		super(e),
			_(this, '_timeout', void 0),
			(this.state = {
				translateY: new u.Z.Value(),
				reduceMotion: !1
			});
	}
}
class m extends (i = r.PureComponent) {
	componentDidMount() {
		this.calculateState();
	}
	componentDidUpdate() {
		this.calculateState();
	}
	componentWillUnmount() {
		this.calculateState.cancel();
	}
	render() {
		let { unread: e, mention: t } = this.state,
			{ textMention: n, textUnread: i, reverse: r, className: a, barClassName: o, hide: c, animate: u } = this.props,
			{ reducedMotion: d } = this.context;
		return (0, l.jsx)('div', {
			className: null != a ? a : void 0,
			children: (0, l.jsx)(g, {
				hide: !0 === c || (null == e && null == t),
				className: s()(o, null != t ? p.mention : p.unread),
				text: null != t ? n : i,
				reverse: r,
				animate: u && !d.enabled,
				onClick: this.handleClick
			})
		});
	}
	constructor(...e) {
		super(...e),
			_(this, 'state', {
				unread: null,
				mention: null
			}),
			_(
				this,
				'calculateState',
				c()(() => {
					let {
							items: e,
							expandedFolders: t,
							isVisible: n,
							isUnread: i,
							isMentioned: l,
							reverse: r,
							onCalculate: a
						} = this.props,
						s = null,
						o = null,
						c = [];
					e.forEach((e) => {
						'string' == typeof e
							? c.push(e)
							: 'object' == typeof e && null != e.folderId
								? null != t && t.has(e.folderId)
									? (c.push('folder:'.concat(e.folderId)), e.guildIds.forEach((e) => c.push(e)))
									: c.push(e.guildIds)
								: c.push(e.guildIds[0]);
					});
					let u = (e) => {
							null == s && l(e, r, c) && (s = e), null == o && i(e, r, c) && (o = e);
						},
						d = r ? c.length - 1 : 0,
						h = c[d];
					for (; null != h; ) {
						if ('string' == typeof h) {
							if (n(h, r, c)) break;
							u(h);
						} else {
							let e = !1;
							for (let t of h) {
								if (n(t, r, c)) {
									e = !0;
									break;
								}
								u(t);
							}
							if (e) break;
						}
						(d += r ? -1 : 1), (h = c[d]);
					}
					null != a && a(s, o, r),
						this.setState({
							mention: s,
							unread: o
						});
				}, 200)
			),
			_(this, 'handleClick', (e) => {
				e.preventDefault(), e.stopPropagation();
				let { unread: t, mention: n } = this.state,
					{ onJumpTo: i } = this.props,
					l = null != n ? n : t;
				null != l && i(l, [n, t]);
			});
	}
}
_(m, 'contextType', h.AccessibilityPreferencesContext),
	_(m, 'defaultProps', {
		className: p.container,
		reverse: !1,
		hide: !1,
		animate: !0
	}),
	(t.Z = m);
