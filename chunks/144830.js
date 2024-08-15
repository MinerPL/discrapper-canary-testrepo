n.d(t, {
	CI: function () {
		return S;
	},
	J6: function () {
		return i;
	},
	ZP: function () {
		return A;
	}
}),
	n(411104),
	n(852437),
	n(47120);
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(735250),
	c = n(470079),
	d = n(392711),
	_ = n.n(d),
	E = n(846519),
	f = n(689938);
function h(e, t, n) {
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
((s = r || (r = {})).ACTIVITY_FEED = 'ACTIVITY_FEED'), (s.ACTIVITY_FEED_NEW = 'ACTIVITY_FEED_NEW'), (s.USER_ACTIVITY = 'USER_ACTIVITY'), (s.GAME_LIBRARY_TIME_PLAYED = 'GAME_LIBRARY_TIME_PLAYED'), (s.GAME_LIBRARY_LAST_PLAYED = 'GAME_LIBRARY_LAST_PLAYED'), ((o = i || (i = {})).NONE = 'NONE'), (o.SECONDS = 'SECONDS'), (o.MINUTES = 'MINUTES'), (o.HOURS = 'HOURS'), (o.DAYS = 'DAYS'), (o.WEEKS = 'WEEKS'), (o.MONTHS = 'MONTHS'), (o.YEARS = 'YEARS'), ((l = a || (a = {})).START = 'START'), (l.END = 'END'), (l.TIME = 'TIME');
let p = {
		NONE: (e) => 0,
		SECONDS: (e) => 60 * e,
		MINUTES: (e) => e,
		HOURS: (e) => e / 60,
		DAYS: (e) => e / 60 / 24,
		WEEKS: (e) => e / 60 / 24 / 7,
		MONTHS: (e) => e / 60 / 24 / 31,
		YEARS: (e) => e / 60 / 24 / 365
	},
	m = [
		{
			unit: 'NONE',
			max: 0
		},
		{
			unit: 'SECONDS',
			max: 1
		},
		{
			unit: 'MINUTES',
			max: 60
		},
		{
			unit: 'HOURS',
			max: 1440
		},
		{
			unit: 'DAYS',
			max: 44640
		},
		{
			unit: 'WEEKS',
			max: 40320
		},
		{
			unit: 'MONTHS',
			max: 525600
		},
		{
			unit: 'YEARS',
			max: 1 / 0
		}
	],
	I = (e) => (t, n) =>
		null == n
			? ''
			: e().format({
					time: t,
					...n
				}),
	T = {
		ACTIVITY_FEED: {
			START: {
				SECONDS: () => f.Z.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
				MINUTES: (e) => f.Z.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({ time: e }),
				HOURS: (e) => f.Z.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({ time: e }),
				DAYS: (e) => f.Z.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({ time: e })
			},
			END: {
				SECONDS: () => f.Z.Messages.GAME_FEED_USER_PLAYING_JUST_ENDED,
				MINUTES: (e) => f.Z.Messages.GAME_FEED_USER_PLAYED_MINUTES_AGO.format({ time: e }),
				HOURS: (e) => f.Z.Messages.GAME_FEED_USER_PLAYED_HOURS_AGO.format({ time: e }),
				DAYS: (e) => f.Z.Messages.GAME_FEED_USER_PLAYED_DAYS_AGO.format({ time: e }),
				WEEKS: (e) => f.Z.Messages.GAME_FEED_USER_PLAYED_WEEKS_AGO.format({ time: e }),
				MONTHS: (e) => f.Z.Messages.GAME_FEED_USER_PLAYED_MONTHS_AGO.format({ time: e }),
				YEARS: (e) => f.Z.Messages.GAME_FEED_USER_PLAYED_YEARS_AGO.format({ time: e })
			}
		},
		ACTIVITY_FEED_NEW: {
			START: {
				SECONDS: I(() => f.Z.Messages.ACTIVITY_FEED_USER_PLAYING_JUST_STARTED),
				MINUTES: I(() => f.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_MINUTES),
				HOURS: I(() => f.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_HOURS),
				DAYS: I(() => f.Z.Messages.ACTIVITY_FEED_USER_PLAYING_FOR_DAYS)
			},
			END: {
				SECONDS: (e) => f.Z.Messages.DURATION_SECONDS_AGO.format({ seconds: e }),
				MINUTES: (e) => f.Z.Messages.DURATION_MINUTES_AGO.format({ minutes: e }),
				HOURS: (e) => f.Z.Messages.DURATION_HOURS_AGO.format({ hours: e }),
				DAYS: (e) => f.Z.Messages.DURATION_DAYS_AGO.format({ days: e })
			}
		},
		USER_ACTIVITY: {
			START: {
				SECONDS: () => f.Z.Messages.GAME_FEED_USER_PLAYING_JUST_STARTED,
				MINUTES: function (e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return n ? f.Z.Messages.GAME_FEED_USER_PLAYING_FOR_MINUTES.format({ time: e }) : f.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_MINUTES.format({ time: e });
				},
				HOURS: function (e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return n ? f.Z.Messages.GAME_FEED_USER_PLAYING_FOR_HOURS.format({ time: e }) : f.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_HOURS.format({ time: e });
				},
				DAYS: function (e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return n ? f.Z.Messages.GAME_FEED_USER_PLAYING_FOR_DAYS.format({ time: e }) : f.Z.Messages.USER_ACTIVITY_USER_PLAYING_FOR_DAYS.format({ time: e });
				}
			}
		},
		GAME_LIBRARY_TIME_PLAYED: {
			TIME: {
				NONE: () => f.Z.Messages.GAME_LIBRARY_TIME_PLAYED_NONE,
				SECONDS: (e) => f.Z.Messages.GAME_LIBRARY_TIME_PLAYED_SECONDS.format({ time: e }),
				MINUTES: (e) => f.Z.Messages.GAME_LIBRARY_TIME_PLAYED_MINUTES.format({ time: e }),
				HOURS: (e) => f.Z.Messages.GAME_LIBRARY_TIME_PLAYED_HOURS.format({ time: e })
			}
		},
		GAME_LIBRARY_LAST_PLAYED: {
			END: {
				NONE: () => f.Z.Messages.GAME_LIBRARY_LAST_PLAYED_NONE,
				SECONDS: () => f.Z.Messages.GAME_LIBRARY_LAST_PLAYED_JUST_NOW,
				MINUTES: (e) => f.Z.Messages.GAME_LIBRARY_LAST_PLAYED_MINUTES.format({ time: e }),
				HOURS: (e) => f.Z.Messages.GAME_LIBRARY_LAST_PLAYED_HOURS.format({ time: e }),
				DAYS: (e) => f.Z.Messages.GAME_LIBRARY_LAST_PLAYED_DAYS.format({ time: e }),
				WEEKS: (e) => f.Z.Messages.GAME_LIBRARY_LAST_PLAYED_WEEKS.format({ time: e }),
				MONTHS: (e) => f.Z.Messages.GAME_LIBRARY_LAST_PLAYED_MONTHS.format({ time: e }),
				YEARS: (e) => f.Z.Messages.GAME_LIBRARY_LAST_PLAYED_YEARS.format({ time: e })
			}
		}
	};
function g(e, t) {
	let n = m.findIndex((t) => {
			let { max: n, unit: r } = t;
			return ('NONE' === r && e === n) || e < n;
		}),
		r = _().findLast(
			m,
			(e) => {
				let { unit: n } = e;
				return t(n);
			},
			n
		);
	if (null != r) return r.unit;
	let i = m.find((e) => {
		let { unit: n } = e;
		return t(n);
	});
	return null != i ? i.unit : null;
}
function S(e, t) {
	let n = null != e ? g(e, (e) => t.includes(e)) : 'NONE',
		r = null != n ? p[n] : null;
	return {
		unit: n,
		time: null != e && null != r ? Math.floor(r(e)) : null
	};
}
function A(e) {
	var t, n;
	return (
		(n = class extends (t = c.PureComponent) {
			componentDidMount() {
				this.timer.start(10000, this.update);
			}
			componentDidUpdate(e) {
				let { start: t, end: n, time: r } = this.props;
				(e.start !== t || e.end !== n || e.time !== r) && this.update();
			}
			componentWillUnmount() {
				this.timer.stop();
			}
			getDiff() {
				let { start: e, end: t, time: n } = this.props;
				if (null != n) return n / 1000 / 60;
				let r = Date.now(),
					i = 0;
				return null != e ? (i = r - e) : null != t && (i = r - t), Math.abs(i) / 1000 / 60;
			}
			getTimeUnit(e, t, n) {
				let r = g(e, (e) =>
					(function (e, t, n) {
						let r = T[n];
						if (null != r) {
							let n = r[t];
							if (null != n) return null != n[e];
						}
						return !1;
					})(e, n, t)
				);
				if (null == r) throw Error('Could not get the time unit in PlayTime with time: '.concat(e, ' for type: ').concat(n, ' in location: ').concat(t));
				return r;
			}
			getType() {
				let { start: e, end: t, time: n } = this.props;
				if (null != e) return 'START';
				if (null != t) return 'END';
				if (null != n) return 'TIME';
				return null;
			}
			transformTime(e, t) {
				return p[e](t);
			}
			render() {
				let { location: t, messageProps: n, isApplicationStreaming: r, ...i } = this.props,
					{ time: a } = this.state,
					s = this.getType();
				if (null == s) return null;
				let o = this.getTimeUnit(a, t, s),
					l = T[t][s];
				if (null == l) return null;
				let c = l[o],
					d = Math.floor(this.transformTime(o, a));
				return (0, u.jsx)(e, {
					...i,
					children: null == c ? void 0 : c(d, n, r)
				});
			}
			constructor(...e) {
				super(...e),
					h(this, 'timer', new E.Xp()),
					h(this, 'state', { time: this.getDiff() }),
					h(this, 'update', () => {
						this.setState({ time: this.getDiff() });
					});
			}
		}),
		h(n, 'Locations', r),
		h(n, 'Types', a),
		n
	);
}
