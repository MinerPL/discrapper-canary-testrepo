var r = n(735250);
n(470079);
var i = n(704215),
	a = n(952265),
	s = n(468026),
	o = n(231757),
	l = n(605236),
	u = n(131951),
	c = n(626135),
	d = n(542238),
	_ = n(927923),
	E = n(981631),
	f = n(689938),
	h = n(623475);
let p = 'game_console_alert_modal',
	m = 'game_console_ptt_alert_modal';
t.Z = {
	maybeShowPTTAlert(e) {
		if (u.Z.getMode() !== E.pM4.PUSH_TO_TALK || (0, l.un)(i.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
		let t = {
			[E.ABu.XBOX]: f.Z.Messages.PTT_NOT_SUPPORTED_XBOX,
			[E.ABu.PLAYSTATION]: f.Z.Messages.PTT_NOT_SUPPORTED_PLAYSTATION,
			[E.ABu.PLAYSTATION_STAGING]: f.Z.Messages.PTT_NOT_SUPPORTED_PLAYSTATION
		}[e];
		return null == t
			? Promise.resolve()
			: new Promise((e) => {
					let n = () => {
							(0, l.EW)(i.z.CONSOLE_PTT_DISABLE_ALERT), e();
						},
						o = (e) =>
							(0, r.jsx)(s.default, {
								...e,
								title: t,
								body: f.Z.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
								onConfirm: n,
								titleClassName: h.title
							});
					(0, a.nf)(m) ? (0, a.o)(m, o) : (0, a.h7)(o, { modalKey: m });
				});
	},
	showSelfDismissableAlert(e) {
		let { title: t, body: n, errorCodeMessage: i, reconnectPlatformType: l } = e,
			u = (0, r.jsx)(d.t, {
				body: n,
				errorCodeMessage: i,
				dismissCallback: () => (0, a.Mr)(p)
			});
		function f() {
			null != l &&
				((0, o.Z)({ platformType: l }),
				c.default.track(E.rMx.ACCOUNT_LINK_STEP, {
					previous_step: _.Lw,
					current_step: 'desktop oauth',
					platform_type: l
				}));
		}
		let h = (e) =>
			(0, r.jsx)(s.default, {
				...e,
				title: t,
				body: u,
				onConfirm: f
			});
		(0, a.nf)(p) ? (0, a.o)(p, h) : (0, a.h7)(h, { modalKey: p });
	}
};
