n(47120), n(177593);
var i = n(735250),
	s = n(470079),
	a = n(120356),
	o = n.n(a),
	r = n(392711),
	l = n.n(r),
	c = n(818405),
	d = n(587158),
	u = n(286379),
	h = n(481060),
	p = n(13245),
	f = n(490029),
	_ = n(797614),
	g = n(593481),
	m = n(703656),
	E = n(254761),
	Z = n(70956),
	I = n(960048),
	S = n(792125),
	C = n(145597),
	v = n(692546),
	x = n(518084),
	T = n(987650),
	N = n(981631),
	O = n(689938),
	A = n(22301);
function y(e, t, n) {
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
let R = 10 * Z.Z.Millis.SECOND;
function M() {
	let e = (0, C.QF)(),
		t = (0, C.Ht)();
	(0, f.lW)({
		type: N.BmY.DISPATCH,
		pid: e,
		token: t,
		payloads: [
			{
				type: 'OVERLAY_SET_INPUT_LOCKED',
				locked: !0,
				pid: e
			}
		]
	});
}
class b extends s.PureComponent {
	componentDidMount() {
		(this.notificationTimer = setTimeout(this.hideNotification, R)),
			p.Z.track(N.rMx.NOTIFICATION_VIEWED, { notif_type: T.n0.OverlayCrashed });
	}
	componentWillUnmount() {
		let { notificationTimer: e } = this;
		null != e && clearTimeout(e);
	}
	render() {
		let { info: e, error: t } = this.props,
			{ showTrace: n } = this.state,
			{ notificationTimer: s } = this;
		return null == s
			? null
			: (0, i.jsx)(v.Z, {
					observe: !1,
					children: (0, i.jsxs)(h.Clickable, {
						className: o()((0, S.Q)(N.BRd.DARK), A.container),
						onClick: (e) => e.stopPropagation(),
						children: [
							(0, i.jsx)(g.ZP, {
								expand: !0,
								colorScheme: g.IC.DANGER,
								icon: (0, i.jsx)(E.Z, {
									width: 40,
									height: 40,
									className: A.notificationIcon
								}),
								title: O.Z.Messages.OVERLAY_CRASHED_TITLE,
								confirmText: O.Z.Messages.OVERLAY_RELOAD,
								onNotificationClick: this.handleNotificationClick,
								onConfirmClick: this.handleReload,
								onDismissClick: this.hideNotification
							}),
							n && null != e
								? (0, i.jsxs)(x.ZP, {
										className: A.stackTrace,
										children: [
											(0, i.jsx)(x.ZP.Bar, { children: 'Error Details' }),
											(0, i.jsx)(x.ZP.Content, {
												className: A.stackTraceCode,
												children: (0, i.jsx)('code', {
													className: A.code,
													children: (0, i.jsx)('pre', { children: t.stack })
												})
											})
										]
									})
								: null
						]
					})
				});
	}
	constructor(...e) {
		super(...e),
			y(this, 'state', {
				showTrace: !1,
				busy: !1
			}),
			y(this, 'notificationTimer', void 0),
			y(this, 'hideNotification', () => {
				M();
				let { notificationTimer: e } = this;
				null != e && clearTimeout(e), (this.notificationTimer = null);
			}),
			y(this, 'handleReload', (e) => {
				this.setState({ busy: !0 }),
					M(),
					p.Z.track(
						N.rMx.NOTIFICATION_CLICKED,
						{
							notif_type: T.n0.OverlayCrashed,
							action_type: 'reload'
						},
						!0
					),
					e.stopPropagation(),
					setTimeout(() => location.reload(!0), 200);
			}),
			y(this, 'handleNotificationClick', (e) => {
				e.stopPropagation();
				let { notificationTimer: t } = this;
				null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
			});
	}
}
let L = l().throttle(
	() => {
		_.Z.increment(
			{
				name: u.V.APP_CRASHED,
				tags: ['reason:'.concat(c.v.UNHANDLED_JS_ERROR), 'level:'.concat(d.c.FATAL)]
			},
			!0
		);
	},
	100,
	{ trailing: !1 }
);
class P extends s.PureComponent {
	componentDidCatch(e, t) {
		let n = (0, m.s1)().location;
		this.setState({
			error: e,
			info: t
		});
		let i = (0, C.QF)(),
			s = (0, C.Ht)();
		(0, f.lW)({
			type: N.BmY.DISPATCH,
			pid: (0, C.QF)(),
			token: s,
			payloads: [
				{
					type: 'OVERLAY_CRASHED',
					pid: i
				},
				{
					type: 'OVERLAY_SET_INPUT_LOCKED',
					locked: !0,
					pid: i
				}
			]
		}),
			setImmediate(() => window.addEventListener('click', M));
		let a = I.Z.captureCrash(e, { extra: t });
		p.Z.track(N.rMx.APP_CRASHED, {
			path: n.pathname,
			extra: t,
			error_message: e.message,
			error_stack: e.stack,
			sentry_issue_id: a
		}),
			L();
	}
	render() {
		let { children: e, className: t } = this.props,
			{ error: n, info: s } = this.state;
		return null != n
			? (0, i.jsx)(b, {
					error: n,
					info: s
				})
			: (0, i.jsx)('div', {
					className: t,
					children: e
				});
	}
	constructor(...e) {
		super(...e),
			y(this, 'state', {
				error: null,
				info: null
			});
	}
}
t.Z = P;
