n(47120), n(653041);
var s = n(735250),
	i = n(470079),
	r = n(921738),
	o = n.n(r),
	l = n(213005),
	a = n(455279),
	d = n(358085),
	u = n(998502),
	c = n(981631);
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
let m = d.isPlatformEmbedded && null != u.ZP.getDiscordUtils().inputCaptureRegisterElement;
class p extends i.PureComponent {
	componentDidMount() {
		this._mounted = !0;
	}
	componentWillUnmount() {
		(this._mounted = !1), this.cleanUp();
	}
	componentDidUpdate(e) {
		this.props.defaultValue !== e.defaultValue && this.setState({ codes: this.props.defaultValue });
	}
	cleanUp() {
		d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
	}
	handleComboChange(e) {
		let { mode: t } = this.state,
			{ onChange: n } = this.props;
		t === a.c.RECORDING && (null != n && n(e), this.setState({ codes: e }));
	}
	render() {
		let e, t;
		let { codes: n, mode: i } = this.state,
			{ disabled: r } = this.props;
		return (
			m ? ((t = u.ZP.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange)) : !d.isPlatformEmbedded && (e = this.handleComboKeys),
			(0, s.jsx)(a.Z, {
				disabled: r,
				value: n,
				mode: i,
				onClick: this.toggleRecordMode,
				onChange: e,
				registerNativeRecorder: t,
				disableOnClickWhileRecording: m
			})
		);
	}
	constructor(e) {
		super(e),
			h(this, '_input', void 0),
			h(this, 'gs', void 0),
			h(this, '_mounted', !1),
			h(this, 'recordStart', () => {
				d.isPlatformEmbedded && !m && ((this.gs = new l.Z()), this.gs.on('change', this.handleGSChange)), this.setState({ mode: a.c.RECORDING });
			}),
			h(this, 'recordEnd', () => {
				this.cleanUp(), this.setState({ mode: a.c.DEFAULT });
			}),
			h(this, 'toggleRecordMode', () => {
				this.state.mode === a.c.DEFAULT ? this.recordStart() : this.recordEnd();
			}),
			h(this, 'handleComboKeys', (e, t, n) => {
				if ((n.preventDefault(), 'keydown' === n.type)) {
					let e = t.map((e) => [c.MoX.KEYBOARD_KEY, o()(e), c.CgE.BROWSER]),
						{ keyCode: s } = n;
					null ==
						e.find((e) => {
							let [, t] = e;
							return s === t;
						}) && e.push([c.MoX.KEYBOARD_KEY, s, c.CgE.BROWSER]),
						this.handleComboChange(e);
				}
			}),
			h(this, 'handleGSChange', (e) => {
				if (!1 === this._mounted) return;
				let t = [...e.combo];
				this.handleComboChange(t);
			}),
			h(this, 'handleNativeChange', (e) => {
				e.length > 0 && this.handleComboChange(e), this.recordEnd();
			});
		let { defaultValue: t } = e;
		this.state = {
			codes: t,
			mode: a.c.DEFAULT
		};
	}
}
t.Z = p;
