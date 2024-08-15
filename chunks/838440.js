n.d(t, {
	v: function () {
		return h;
	}
}),
	n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(570140),
	s = n(468026),
	o = n(673750),
	l = n(300429),
	u = n(594174),
	c = n(626135),
	d = n(760729),
	_ = n(74538),
	E = n(981631),
	f = n(689938);
function h(e) {
	let {
			openWarningPopout: t,
			type: n,
			content: h,
			stickers: p,
			uploads: I,
			channel: m,
			restrictMentions: T = !0,
			respectCooldown: g = !0
		} = e,
		S = _.ZP.canUseIncreasedMessageLength(u.default.getCurrentUser());
	return new Promise((e) =>
		(function (e) {
			var t, n, u;
			let {
				openWarningPopout: _,
				type: h,
				content: p,
				stickers: I,
				uploads: m,
				channel: T,
				restrictMentions: g,
				respectCooldown: S,
				userCanUsePremiumMessageLength: A,
				resolve: N
			} = e;
			if (
				0 === p.length &&
				!(null === (t = h.submit) || void 0 === t ? void 0 : t.allowEmptyMessage) &&
				(null == I || 0 === I.length) &&
				(null == m || 0 === m.length)
			) {
				N({
					valid: !1,
					failureReason: E.zYc.EMPTY_MESSAGE
				});
				return;
			}
			let v = A ? E.en1 : E.J6R;
			if (p.length > v) {
				if (A || null == T) {
					(n = p.length),
						(u = v),
						(0, i.openModal)((e) =>
							(0, r.jsx)(s.default, {
								title: f.Z.Messages.MESSAGE_TOO_LONG_HEADER,
								body: f.Z.Messages.MESSAGE_TOO_LONG_BODY_TEXT.format({
									currentLength: n,
									maxLength: u
								}),
								confirmText: f.Z.Messages.OKAY,
								...e
							})
						),
						c.default.track(E.rMx.OPEN_MODAL, {
							type: 'Message Too Long Alert',
							message_content_length: n
						});
				} else
					a.Z.dispatch({
						type: 'MESSAGE_LENGTH_UPSELL',
						channel: T,
						content: p
					});
				N({
					valid: !1,
					failureReason: E.zYc.MESSAGE_TOO_LONG
				});
				return;
			}
			if (null != T) {
				if (null != T.getGuildId() && S && l.Z.getSlowmodeCooldownGuess(T.id) > 0) {
					N({
						valid: !1,
						failureReason: E.zYc.SLOWMODE_COOLDOWN
					});
					return;
				}
				if (null != _)
					for (let { check: e, analyticsType: t, animation: n } of d.$) {
						let r = e(p, T, g);
						if (!1 !== r) {
							_({
								analyticsType: t,
								channel: T,
								onCancel: () =>
									N({
										valid: !1,
										failureReason: E.zYc.SHOUTING_CANCELLED
									}),
								onConfirm: () => N({ valid: !0 }),
								popoutText: r,
								animation: n
							});
							return;
						}
					}
			}
			if (o.ZP.isFull()) {
				(0, i.openModal)(
					(e) =>
						(0, r.jsx)(s.default, {
							title: f.Z.Messages.MESSAGE_RATE_LIMITED_HEADER,
							body: f.Z.Messages.MESSAGE_RATE_LIMITED_BODY,
							confirmText: f.Z.Messages.MESSAGE_RATE_LIMITED_BUTTON,
							...e
						}),
					{ onCloseRequest: E.dG4 }
				),
					N({
						valid: !1,
						failureReason: E.zYc.RATE_LIMITED
					});
				return;
			}
			N({ valid: !0 });
		})({
			openWarningPopout: t,
			type: n,
			content: h,
			stickers: p,
			uploads: I,
			channel: m,
			restrictMentions: T,
			respectCooldown: g,
			userCanUsePremiumMessageLength: S,
			resolve: e
		})
	);
}
