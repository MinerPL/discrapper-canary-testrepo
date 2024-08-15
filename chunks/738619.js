n.d(t, {
	Z: function () {
		return W;
	}
}),
	n(653041),
	n(47120);
var i = n(735250),
	s = n(470079),
	o = n(120356),
	a = n.n(o),
	l = n(392711),
	r = n.n(l),
	c = n(913527),
	u = n.n(c),
	d = n(748780),
	h = n(866442),
	m = n(442837),
	p = n(692547),
	g = n(481060),
	f = n(980568),
	T = n(560768),
	_ = n(812206),
	v = n(243778),
	b = n(843693),
	E = n(246642),
	I = n(921227),
	x = n(314897),
	C = n(430824),
	S = n(496675),
	R = n(699516),
	N = n(885110),
	O = n(300429),
	Z = n(111583),
	j = n(594174),
	M = n(451478),
	A = n(626135),
	y = n(585483),
	P = n(70956),
	L = n(823379),
	w = n(5192),
	U = n(981631),
	k = n(689938),
	B = n(417499);
function D(e, t, n) {
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
let F = [];
class V extends s.PureComponent {
	componentDidMount() {
		this.timeout = setTimeout(() => {
			this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
		}, 100);
	}
	componentDidUpdate() {
		this.logShownEventIfNeeded();
	}
	logShownEventIfNeeded() {
		let e = this.props.activity.application_id;
		null != e &&
			-1 === F.indexOf(e) &&
			(A.default.track(U.rMx.SHOW_TUTORIAL, {
				tutorial: 'activity-invite-nux-inline',
				application_id: e
			}),
			F.push(e));
	}
	componentWillUnmount() {
		null !== this.timeout && clearTimeout(this.timeout);
	}
	render() {
		let { activity: e } = this.props;
		return (0, i.jsxs)('div', {
			className: a()(B.activityInviteEducation, { [B.activityInviteEducationFadeIn]: this.state.fadeIn }),
			children: [
				(0, i.jsx)('div', { className: B.activityInviteEducationArrow }),
				(0, i.jsx)('span', {
					children: k.Z.Messages.USER_ACTIVITY_CHAT_INVITE_EDUCATION.format({
						game: e.name,
						dismissOnClick: this.handleDismissInviteEducation
					})
				})
			]
		});
	}
	constructor(...e) {
		super(...e),
			D(this, 'state', { fadeIn: !1 }),
			D(this, 'timeout', null),
			D(this, 'handleDismissInviteEducation', () => {
				let { activity: e } = this.props;
				null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id);
			});
	}
}
function H(e) {
	let { channel: t, guild: n } = e;
	return (0, i.jsx)(v.ZP, {
		contentTypes: [],
		children: (e) => {
			let { visibleContent: t, markAsDismissed: n } = e;
			return null;
		}
	});
}
class G extends s.PureComponent {
	componentDidMount() {
		y.S.subscribe(U.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
	}
	componentWillUnmount() {
		y.S.unsubscribe(U.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, this.emphasizeSlowmodeCooldown);
	}
	getCooldownTextStyle() {
		let { color: e } = this.state,
			{ baseTextColor: t, activeTextColor: n } = this.props;
		return {
			color: e.interpolate({
				inputRange: [0, 1],
				outputRange: [t, (0, h.wK)(n, 0.9)]
			})
		};
	}
	render() {
		let e;
		let {
				guildId: t,
				activity: n,
				showInviteEducation: s,
				isFocused: o,
				typingUsers: l,
				className: c,
				slowmodeCooldownGuess: h,
				isBypassSlowmode: m,
				channel: p,
				isThreadCreation: f,
				renderDots: T,
				poggermodeEnabled: _,
				isComboing: v
			} = this.props,
			{ rateLimitPerUser: b } = p,
			I = j.default.getCurrentUser(),
			x = C.Z.getGuild(t),
			S = b > 0,
			N = f
				? []
				: r()(l)
						.keys()
						.filter((e) => e !== (null == I ? void 0 : I.id))
						.reject((e) => R.Z.isBlocked(e))
						.map((e) => j.default.getUser(e))
						.filter(L.lm)
						.map((e) => w.ZP.getName(t, this.props.channel.id, e))
						.value();
		if (0 === N.length && !S && !v)
			return s && null != n
				? (0, i.jsx)(V, {
						activity: n,
						isFocused: o
					})
				: (0, i.jsx)(H, {
						channel: p,
						guild: x
					});
		let O = '',
			Z = null,
			M = '';
		if (S) {
			if (
				((Z = (0, i.jsx)(g.TimerIcon, {
					size: 'xs',
					color: 'currentColor',
					className: B.slowModeIcon
				})),
				b >= P.Z.Seconds.HOUR)
			) {
				let e = Math.floor(b / P.Z.Seconds.HOUR),
					t = Math.floor((b - e * P.Z.Seconds.HOUR) / P.Z.Seconds.MINUTE),
					n = b - e * P.Z.Seconds.HOUR - t * P.Z.Seconds.MINUTE;
				M = k.Z.Messages.CHANNEL_SLOWMODE_DESC_HOURS.format({
					hours: e,
					minutes: t,
					seconds: n
				});
			} else if (b >= 60) {
				let e = Math.floor(b / 60);
				M = k.Z.Messages.CHANNEL_SLOWMODE_DESC_MINUTES.format({
					minutes: e,
					seconds: b - 60 * e
				});
			} else M = k.Z.Messages.CHANNEL_SLOWMODE_DESC.format({ seconds: b });
			if (!m && h > 0) {
				let e = u().duration(h);
				if (h > P.Z.Millis.HOUR) {
					let t = ''.concat(e.minutes()).padStart(2, '0'),
						n = ''.concat(e.seconds()).padStart(2, '0');
					O = ''.concat(e.hours(), ':').concat(t, ':').concat(n);
				} else {
					let t = ''.concat(e.seconds()).padStart(2, '0');
					O = ''.concat(e.minutes(), ':').concat(t);
				}
			} else
				0 === N.length &&
					(O = m ? k.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : k.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT);
		}
		let [A, y, U] = N;
		return (
			(e =
				0 === N.length
					? ''
					: 1 === N.length
						? k.Z.Messages.ONE_USER_TYPING.format({ a: A })
						: 2 === N.length
							? k.Z.Messages.TWO_USERS_TYPING.format({
									a: A,
									b: y
								})
							: 3 === N.length
								? k.Z.Messages.THREE_USERS_TYPING.format({
										a: A,
										b: y,
										c: U
									})
								: k.Z.Messages.SEVERAL_USERS_TYPING),
			(0, i.jsxs)('div', {
				className: a()(
					B.typing,
					{
						'stop-animation': !o,
						[B.isComboing]: _ && v
					},
					c
				),
				children: [
					(0, i.jsxs)('div', {
						className: B.typingDots,
						children: [
							N.length > 0 &&
								!1 !== T &&
								(0, i.jsx)(g.Dots, {
									className: B.ellipsis,
									dotRadius: 3.5,
									themed: !0
								}),
							(0, i.jsx)('span', {
								className: B.text,
								'aria-live': 'polite',
								'aria-atomic': !0,
								children: e
							})
						]
					}),
					S &&
						(0, i.jsx)(g.Tooltip, {
							text: M,
							children: (e) =>
								(0, i.jsxs)(d.Z.div, {
									style: this.getCooldownTextStyle(),
									className: B.cooldownWrapper,
									...e,
									children: [O, Z]
								})
						}),
					_ && v && (0, i.jsx)(E.Z, { channelId: p.id })
				]
			})
		);
	}
	constructor(...e) {
		super(...e),
			D(this, 'state', { color: new d.Z.Value(0) }),
			D(this, 'emphasizeSlowmodeCooldown', () => {
				let { color: e } = this.state;
				d.Z.sequence([
					d.Z.timing(e, {
						toValue: 1,
						duration: 100,
						easing: d.Z.Easing.quad
					}),
					d.Z.timing(e, {
						delay: 250,
						toValue: 0,
						duration: 100,
						easing: d.Z.Easing.quad
					})
				]).start();
			});
	}
}
function W(e) {
	let { channel: t, isThreadCreation: n = !1, ...s } = e,
		o = (0, m.e7)([N.Z], () => N.Z.findActivity((e) => null != e.application_id)),
		a = (0, m.e7)([b.ZP, x.default], () => b.ZP.getUserCombo(x.default.getId(), t.id)),
		l = (0, m.e7)([I.Z, _.Z], () => (0, T.Z)(t, o, I.Z, _.Z)),
		r = (0, m.e7)([O.Z], () => O.Z.getSlowmodeCooldownGuess(t.id, n ? O.S.CreateThread : O.S.SendMessage)),
		c = (0, m.e7)([S.Z], () =>
			n ? S.Z.can(U.Plq.MANAGE_THREADS, t) : S.Z.can(U.Plq.MANAGE_CHANNELS, t) || S.Z.can(U.Plq.MANAGE_MESSAGES, t)
		),
		u = {
			...s,
			baseTextColor: (0, g.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
			activeTextColor: (0, g.useToken)(p.Z.colors.INTERACTIVE_NORMAL).hex(),
			showInviteEducation: l,
			activity: o,
			typingUsers: (0, m.e7)([Z.Z], () => Z.Z.getTypingUsers(t.id)),
			isFocused: (0, m.e7)([M.Z], () => M.Z.isFocused()),
			guildId: t.guild_id,
			slowmodeCooldownGuess: r,
			isComboing: null != a,
			isBypassSlowmode: c,
			channel: t,
			isThreadCreation: n
		};
	return (0, i.jsx)(G, { ...u });
}
