t.d(s, {
	Z: function () {
		return P;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(481060),
	o = t(287734),
	l = t(232567),
	c = t(700582),
	d = t(718629),
	_ = t(615830),
	E = t(630759),
	u = t(931500),
	I = t(921157),
	T = t(171368),
	S = t(314897),
	N = t(592125),
	C = t(594174),
	m = t(979651),
	A = t(51144),
	O = t(981631),
	g = t(760373),
	h = t(689938),
	p = t(288338),
	R = t(224499);
function x(e) {
	let { userId: s, count: t } = e,
		o = (0, i.e7)([C.default], () => C.default.getUser(s)),
		d = A.ZP.getFormattedName(o),
		_ = a.useCallback(() => {
			(0, E.Zn)(s);
		}, [s]),
		u = a.useCallback(() => (0, T.openUserProfileModal)({ userId: s }), [s]);
	return (
		a.useEffect(() => {
			(0, l.PR)(s);
		}, [s]),
		(0, n.jsxs)('div', {
			className: p.section,
			children: [
				null != o &&
					(0, n.jsx)(c.Z, {
						className: p.avatar,
						user: o,
						size: r.AvatarSizes.SIZE_40
					}),
				(0, n.jsxs)('div', {
					className: p.text,
					children: [
						(0, n.jsx)(r.Clickable, {
							className: p.username,
							onClick: u,
							children: (0, n.jsx)(r.Text, {
								variant: 'text-md/semibold',
								color: 'interactive-active',
								children: d
							})
						}),
						(0, n.jsx)(r.Text, {
							variant: 'text-md/medium',
							color: 'header-secondary',
							children: h.Z.Messages.E2EE_DEVICES_COUNT.format({ count: t })
						})
					]
				}),
				(0, n.jsx)(r.Clickable, {
					onClick: _,
					className: p.sectionIconContainer,
					children: (0, n.jsx)(r.TrashIcon, { size: 'xs' })
				})
			]
		})
	);
}
function M(e) {
	let { className: s, userId: t, verification: i, index: o } = e,
		l = (0, E.bo)(i.timestamp),
		c = a.useCallback(() => {
			(0, E.ZU)(t, i.verifiedKey);
		}, [i.verifiedKey, t]);
	return (0, n.jsxs)('div', {
		className: s,
		children: [
			(0, n.jsxs)('div', {
				className: p.text,
				children: [
					(0, n.jsx)(r.Text, {
						variant: 'text-sm/semibold',
						color: 'interactive-active',
						children: h.Z.Messages.E2EE_ANONYMOUS_DEVICE_TAG.format({ index: o })
					}),
					(0, n.jsx)(r.Text, {
						variant: 'text-sm/medium',
						color: 'header-secondary',
						children: l
					})
				]
			}),
			(0, n.jsx)(r.Clickable, {
				className: p.icon,
				onClick: c,
				children: (0, n.jsx)(r.XSmallIcon, {
					size: 'md',
					color: r.tokens.colors.INTERACTIVE_NORMAL
				})
			})
		]
	});
}
function f(e) {
	let { userId: s } = e,
		t = (0, u._)(s);
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsx)(x, {
				userId: s,
				count: t.length
			}),
			t.map((e, i) =>
				(0, n.jsxs)(
					a.Fragment,
					{
						children: [
							(0, n.jsx)(M, {
								className: p.row,
								userId: s,
								index: i,
								verification: e
							}),
							i !== t.length - 1 && (0, n.jsx)('div', { className: p.divider })
						]
					},
					''.concat(i, '-').concat(e.timestamp)
				)
			)
		]
	});
}
function D(e) {
	let { userIds: s } = e;
	return 0 === s.length
		? null
		: (0, n.jsxs)(n.Fragment, {
				children: [
					(0, n.jsxs)(r.FormItem, {
						className: R.marginBottom20,
						children: [
							(0, n.jsx)(r.FormTitle, {
								tag: r.FormTitleTags.H5,
								className: R.marginBottom8,
								children: h.Z.Messages.E2EE_VERIFIED_DEVICES
							}),
							(0, n.jsx)(r.FormText, {
								type: r.FormTextTypes.DESCRIPTION,
								children: h.Z.Messages.E2EE_VERIFIED_DEVICES_DESCRIPTION.format({ helpArticle: g.s9 })
							})
						]
					}),
					s.map((e) =>
						(0, n.jsx)(
							'div',
							{
								className: p.item,
								children: (0, n.jsx)(f, { userId: e })
							},
							e
						)
					)
				]
			});
}
function P() {
	let e = (0, i.e7)([_.Z], () => _.Z.getPersistentCodesEnabled()),
		s = a.useCallback((e) => {
			d.Z.updatePersistentCodesEnabled(e);
		}, []),
		l = a.useCallback(async (e, s) => {
			o.default.disconnect(), await d.Z.updatePersistentCodesEnabled(s), o.default.selectVoiceChannel(e);
		}, []),
		c = a.useCallback(
			(e) => {
				let a = m.Z.getVoiceStateForUser(S.default.getId()),
					i = N.Z.getChannel(null == a ? void 0 : a.channelId);
				S.default.getSessionId() === (null == a ? void 0 : a.sessionId) && null != i && i.type !== O.d4z.GUILD_STAGE_VOICE
					? (0, r.openModalLazy)(async () => {
							let { default: s } = await t.e('34999').then(t.bind(t, 396473));
							return (t) =>
								(0, n.jsx)(s, {
									title: e ? h.Z.Messages.E2EE_ENABLE_PERSISTENT_KEY_CONFIRM_TITLE : h.Z.Messages.E2EE_DISABLE_PERSISTENT_KEY_CONFIRM_TITLE,
									subtitle: e ? h.Z.Messages.E2EE_ENABLE_PERSISTENT_KEY_CONFIRM_SUBTITLE : h.Z.Messages.E2EE_DISABLE_PERSISTENT_KEY_CONFIRM_SUBTITLE,
									onConfirm: () => {
										l(i.id, e);
									},
									...t
								});
						})
					: s(e);
			},
			[s, l]
		),
		E = (0, I.s)();
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsxs)(r.FormSection, {
				tag: r.FormTitleTags.H1,
				title: h.Z.Messages.E2EE_END_TO_END_ENCRYPTION,
				children: [
					(0, n.jsx)(r.FormText, {
						type: r.FormTextTypes.DESCRIPTION,
						className: R.marginBottom20,
						children: h.Z.Messages.E2EE_SETTINGS_SUBTITLE.format({ helpArticle: g.l4 })
					}),
					(0, n.jsxs)(r.FormItem, {
						children: [
							(0, n.jsx)(r.FormTitle, {
								tag: r.FormTitleTags.H5,
								className: R.marginBottom8,
								children: h.Z.Messages.E2EE_VERIFICATION_CODES
							}),
							(0, n.jsx)(r.FormSwitch, {
								hideBorder: 0 === E.length,
								value: e,
								note: h.Z.Messages.E2EE_PERSISTENT_CODES_DESCRIPTION.format({ helpArticle: g.$J }),
								onChange: c,
								children: h.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES
							})
						]
					})
				]
			}),
			(0, n.jsx)(D, { userIds: E })
		]
	});
}
