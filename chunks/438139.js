n.d(t, {
	Z: function () {
		return l;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(846519),
	s = n(689938);
function o(e) {
	return ''.concat(e).length < 13 ? 1000 * e : e;
}
function l(e) {
	return class extends i.PureComponent {
		componentDidMount() {
			this._interval.start(1000, () => this.setState(this.getUpdatedTime()));
		}
		componentWillUnmount() {
			this._interval.stop();
		}
		componentDidUpdate(e) {
			(e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime());
		}
		getUpdatedTime() {
			let { timestamps: e } = this.props,
				t = Date.now() / 1000;
			return null != e.end
				? this.getDiff(t, o(e.end) / 1000)
				: null != e.start
					? this.getDiff(o(e.start) / 1000, t)
					: {
							hours: 0,
							minutes: 0,
							seconds: 0
						};
		}
		renderTime(e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			return t && e <= 0 ? -1 : e < 10 ? '0'.concat(e) : e;
		}
		getDiff(e, t) {
			let n = Math.max(t - e, 0),
				r = Math.floor(n) % 60,
				i = Math.floor(n / 60) % 60;
			return {
				hours: Math.floor(n / 3600) % 24,
				minutes: i,
				seconds: r
			};
		}
		render() {
			let { timestamps: t, ...n } = this.props,
				{ hours: i, minutes: a, seconds: o } = this.state,
				l = {
					hours: this.renderTime(i, !0),
					minutes: this.renderTime(a),
					seconds: this.renderTime(o)
				};
			return null != t.end
				? (0, r.jsx)(e, {
						...n,
						message: s.Z.Messages.USER_ACTIVITY_TIMESTAMP_END.format(l)
					})
				: null != t.start
					? (0, r.jsx)(e, {
							...n,
							message: s.Z.Messages.USER_ACTIVITY_TIMESTAMP_START.format(l)
						})
					: null;
		}
		constructor(e) {
			var t, n, r;
			super(e),
				(t = this),
				(r = void 0),
				(n = '_interval') in t
					? Object.defineProperty(t, n, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						})
					: (t[n] = r),
				(this._interval = new a.Xp()),
				(this.state = { ...this.getUpdatedTime() });
		}
	};
}
