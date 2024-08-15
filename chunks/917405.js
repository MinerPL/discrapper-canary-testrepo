n(47120);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(481060),
	o = n(72416),
	c = n(476221),
	u = n(873596),
	d = n(423516),
	h = n(981631),
	p = n(898974);
let _ = {
		[h.IE4.UNKNOWN]: s.Tooltip.Colors.BLACK,
		[h.IE4.BAD]: s.Tooltip.Colors.RED,
		[h.IE4.AVERAGE]: s.Tooltip.Colors.YELLOW,
		[h.IE4.FINE]: s.Tooltip.Colors.GREEN
	},
	f = {
		[h.QKv.CONNECTED]: p.rtcConnectionStatusConnected,
		[h.QKv.CONNECTING]: p.rtcConnectionStatusConnecting,
		[h.QKv.ERROR]: p.rtcConnectionStatusError
	},
	g = {
		[h.IE4.FINE]: p.rtcConnectionQualityFine,
		[h.IE4.AVERAGE]: p.rtcConnectionQualityAverage,
		[h.IE4.BAD]: p.rtcConnectionQualityBad,
		[h.IE4.UNKNOWN]: null
	};
class m extends l.PureComponent {
	renderPopoutTarget(e) {
		return (0, i.jsx)(s.Popout, {
			renderPopout: this.renderPopout,
			position: 'top',
			children: e
		});
	}
	renderStatus() {
		let { hasVideo: e, state: t } = this.props,
			{ connectionStatus: n, connectionStatusText: l } = c.Z.getStatus(t, e);
		return this.renderPopoutTarget((e) => {
			let { onClick: t } = e;
			return (0, i.jsx)(s.Button, {
				look: s.Button.Looks.BLANK,
				size: s.Button.Sizes.NONE,
				onClick: t,
				children: (0, i.jsx)(d.Z, {
					text: l,
					hasVideo: this.props.hasVideo,
					className: f[n]
				})
			});
		});
	}
	render() {
		let e;
		let { quality: t, smallPing: n, lastPing: l, state: r, className: o, children: c } = this.props;
		return (
			r === h.hes.RTC_CONNECTED &&
				(e = (0, i.jsx)(s.Tooltip, {
					text: t !== h.IE4.UNKNOWN && null != l ? ''.concat(l.toFixed(0), ' ms') : null,
					color: _[t],
					children: (e) =>
						(0, i.jsx)(C, {
							quality: t,
							smallPing: n,
							...e
						})
				})),
			(0, i.jsxs)('div', {
				children: [
					(0, i.jsxs)('div', {
						className: a()(p.rtcConnectionStatus, g[t], o),
						children: [
							e,
							(0, i.jsx)('div', {
								className: p.labelWrapper,
								children: this.renderStatus()
							})
						]
					}),
					c
				]
			})
		);
	}
	constructor(...e) {
		var t, n, l;
		super(...e),
			(t = this),
			(n = 'renderPopout'),
			(l = (e) =>
				(0, i.jsx)(u.Z, {
					channelId: this.props.channelId,
					...e
				})),
			n in t
				? Object.defineProperty(t, n, {
						value: l,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = l);
	}
}
function C(e) {
	let { quality: t, smallPing: n, ...l } = e;
	if (!(0, s.useRedesignIconContext)().enabled)
		return (0, i.jsx)(o.Z, {
			className: a()(p.ping, { [p.smallPing]: n }),
			foreground: p.pingForeground
		});
	{
		let e = {
			[h.IE4.FINE]: s.ConnectionFineIcon,
			[h.IE4.AVERAGE]: s.ConnectionAverageIcon,
			[h.IE4.BAD]: s.ConnectionBadIcon,
			[h.IE4.UNKNOWN]: s.ConnectionUnknownIcon
		}[t];
		return (0, i.jsx)(e, {
			className: a()(p.ping, { [p.smallPing]: n }),
			...l
		});
	}
}
t.Z = m;
