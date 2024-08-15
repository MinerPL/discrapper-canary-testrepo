a.r(s),
	a.d(s, {
		default: function () {
			return T;
		}
	}),
	a(47120);
var t = a(735250),
	n = a(470079),
	i = a(481060),
	l = a(626135),
	r = a(115345),
	c = a(57927),
	d = a(273236),
	o = a(931839),
	_ = a(905987),
	I = a(789662),
	N = a(981631),
	x = a(689938),
	m = a(175851);
function T(e) {
	let { onClose: s, transitionState: a, dismissable: c, guildPain: T, myUsage: u } = e,
		[O, g] = n.useState(o.O.Intro),
		{ submitted: j, submitting: b, saveSettings: M } = (0, r.vo)(s),
		{ guildPlans: v, overrideGuild: f, getDebug: C } = (0, r.F6)(T, u),
		A = n.useRef(null);
	return (
		n.useEffect(() => {
			l.default.track(N.rMx.OPEN_MODAL, { type: 'notification_migration_modal' });
		}, []),
		(0, t.jsxs)(i.ModalRoot, {
			className: m.__invalid_modal,
			transitionState: a,
			'aria-label': x.Z.Messages.NOTIFICATIONS,
			size: i.ModalSize.DYNAMIC,
			children: [
				(0, t.jsx)(o.Z, {
					selectedTab: O,
					onClick: g,
					submitted: j
				}),
				O === o.O.Intro
					? (0, t.jsx)(d.Z, { ref: A })
					: O === o.O.Customize
						? (0, t.jsx)(h, {
								guildPlans: v,
								overrideGuild: f,
								getDebug: C
							})
						: (0, t.jsx)(_.Z, {
								count: Object.values(v).filter((e) => {
									var s;
									return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === I.AR.UseGreyDot;
								}).length
							}),
				(0, t.jsxs)(i.ModalFooter, {
					className: m.buttons,
					children: [
						(0, t.jsxs)('div', {
							className: m.__invalid_left,
							children: [
								c || (O !== o.O.Tips && O !== o.O.Customize)
									? null
									: (0, t.jsx)(i.Anchor, {
											className: m.dismiss,
											href: 'https://dis.gd/better-muting',
											children: (0, t.jsx)(i.Text, {
												variant: 'text-sm/semibold',
												color: 'interactive-normal',
												children: x.Z.Messages.LEARN_MORE
											})
										}),
								c && O === o.O.Intro
									? (0, t.jsx)(i.Clickable, {
											className: m.dismiss,
											onClick: s,
											children: (0, t.jsx)(i.Text, {
												variant: 'text-sm/semibold',
												color: 'interactive-normal',
												children: x.Z.Messages.DISMISS
											})
										})
									: null,
								c && O === o.O.Customize
									? (0, t.jsx)(i.Clickable, {
											className: m.dismiss,
											onClick: s,
											children: (0, t.jsx)(i.Text, {
												variant: 'text-sm/semibold',
												color: 'interactive-normal',
												children: x.Z.Messages.CANCEL
											})
										})
									: null
							]
						}),
						(0, t.jsxs)('div', {
							className: m.right,
							children: [
								O === o.O.Customize
									? (0, t.jsx)(i.Text, {
											className: m.warning,
											variant: 'text-xs/medium',
											color: 'text-muted',
											children: x.Z.Messages.NOTIF_MIGRATION_BACKUP
										})
									: null,
								O !== o.O.Customize || j
									? null
									: (0, t.jsxs)(i.Button, {
											onClick: () => g(o.O.Intro),
											color: i.Button.Colors.TRANSPARENT,
											children: [
												(0, t.jsx)(i.ArrowSmallLeftIcon, {
													size: 'xs',
													color: 'currentColor'
												}),
												' ',
												x.Z.Messages.BACK
											]
										}),
								O === o.O.Intro
									? (0, t.jsxs)(i.Button, {
											onClick: () => {
												var e;
												(null === (e = A.current) || void 0 === e ? void 0 : e.maybeChangeToAfterTab()) &&
													g(o.O.Customize);
											},
											children: [
												x.Z.Messages.TRY_IT_OUT,
												' ',
												(0, t.jsx)(i.ArrowSmallRightIcon, {
													size: 'xs',
													color: 'currentColor'
												})
											]
										})
									: O === o.O.Customize
										? (0, t.jsxs)(i.Button, {
												onClick: () => {
													g(o.O.Tips), M(v);
												},
												children: [
													x.Z.Messages.APPLY,
													' ',
													(0, t.jsx)(i.CheckmarkLargeIcon, {
														size: 'xs',
														color: 'currentColor'
													})
												]
											})
										: (0, t.jsx)(i.Button, {
												submitting: b,
												onClick: s,
												children: x.Z.Messages.CLOSE
											})
							]
						})
					]
				})
			]
		})
	);
}
function h(e) {
	let { guildPlans: s, overrideGuild: a } = e;
	return (0, t.jsxs)(i.Scroller, {
		className: m.content,
		children: [
			(0, t.jsxs)('div', {
				className: m.header,
				children: [
					(0, t.jsx)(i.Heading, {
						variant: 'heading-xl/bold',
						color: 'header-primary',
						children: x.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
					}),
					(0, t.jsx)(i.Text, {
						className: m.__invalid_subtitle,
						variant: 'text-md/medium',
						color: 'header-secondary',
						children: x.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE
					})
				]
			}),
			(0, t.jsx)(c.Z, {
				guildPlans: s,
				overrideGuild: a
			})
		]
	});
}
