a(47120);
var t = a(735250),
	n = a(470079),
	i = a(120356),
	l = a.n(i),
	r = a(699581),
	c = a(481060),
	d = a(689938),
	o = a(358465),
	_ = a(175851);
function I(e) {
	let { text: s, className: a, hidden: n } = e;
	return (0, t.jsxs)('div', {
		className: l()(a, o.tip, { [o.hidden]: n }),
		children: [
			(0, t.jsx)(c.Text, {
				className: o.__invalid_tipText,
				variant: 'text-sm/normal',
				color: 'text-secondary',
				children: s
			}),
			(0, t.jsx)('div', { className: o.tipLine })
		]
	});
}
function N(e) {
	let { grey: s, mention: a, name: n } = e;
	return (0, t.jsxs)('div', {
		className: l()(o.channel, {
			[o.grey]: s,
			[o.mention]: a
		}),
		children: [
			(0, t.jsx)(c.TextIcon, {
				size: 'xs',
				color: 'currentColor',
				className: o.channelIcon
			}),
			(0, t.jsx)(c.Text, {
				variant: 'text-md/medium',
				className: o.channelName,
				children: n
			})
		]
	});
}
s.Z = n.forwardRef(function (e, s) {
	let {} = e,
		[i, l] = n.useState('before'),
		[x, m] = n.useState(!1),
		[T, h] = n.useState(!1);
	n.useImperativeHandle(s, () => ({ maybeChangeToAfterTab: () => (!T && u('after'), T) }));
	let u = n.useCallback((e) => {
		m(!0),
			setTimeout(() => {
				r.unstable_batchedUpdates(() => {
					'after' === e && h(!0), m(!1), l(e);
				});
			}, 400);
	}, []);
	return (0, t.jsxs)(c.Scroller, {
		className: _.content,
		children: [
			(0, t.jsxs)('div', {
				className: _.header,
				children: [
					(0, t.jsx)(c.BellIcon, {
						size: 'custom',
						color: 'currentColor',
						width: 40,
						height: 40
					}),
					(0, t.jsx)(c.Heading, {
						variant: 'heading-xl/semibold',
						color: 'header-primary',
						children: d.Z.Messages.NOTIF_MIGRATION_INTRO_TITLE
					}),
					(0, t.jsx)(c.Text, {
						className: _.__invalid_subtitle,
						variant: 'text-md/normal',
						color: 'header-secondary',
						children: d.Z.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE
					})
				]
			}),
			(0, t.jsxs)('div', {
				className: o.container,
				children: [
					(0, t.jsxs)('div', {
						className: o.tabs,
						children: [
							(0, t.jsx)('div', {
								className: o.tabBackground,
								style: { left: 'before' === i ? 0 : '50%' }
							}),
							(0, t.jsx)(c.Clickable, {
								className: o.tab,
								onClick: () => u('before'),
								children: (0, t.jsx)(c.Text, {
									variant: 'text-sm/medium',
									color: 'before' === i ? 'header-primary' : 'text-muted',
									children: d.Z.Messages.NOTIF_MIGRATION_INTRO_BEFORE
								})
							}),
							(0, t.jsx)(c.Clickable, {
								className: o.tab,
								onClick: () => u('after'),
								children: (0, t.jsx)(c.Text, {
									variant: 'text-sm/medium',
									color: 'after' === i ? 'header-primary' : 'text-muted',
									children: d.Z.Messages.NOTIF_MIGRATION_INTRO_AFTER
								})
							})
						]
					}),
					(0, t.jsxs)('div', {
						className: o.previewContainer,
						children: [
							(0, t.jsxs)('div', {
								className: o.guilds,
								children: [
									(0, t.jsx)('div', {
										className: o.unreadGuild,
										children: (0, t.jsx)('img', {
											src: a(180681),
											width: 36,
											height: 36,
											alt: 'Example Guild Icon'
										})
									}),
									(0, t.jsx)('div', {
										className: 'after' === i ? o.guild : o.unreadGuild,
										children: (0, t.jsx)('img', {
											src: a(390115),
											width: 36,
											height: 36,
											alt: 'Example Guild Icon'
										})
									}),
									(0, t.jsx)('div', {
										className: 'after' === i ? o.guild : o.unreadGuild,
										children: (0, t.jsx)('img', {
											src: a(17840),
											width: 36,
											height: 36,
											alt: 'Example Guild Icon'
										})
									})
								]
							}),
							(0, t.jsxs)('div', {
								className: o.channels,
								children: [
									(0, t.jsx)(N, {
										mention: !0,
										name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1
									}),
									(0, t.jsx)(N, { name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2 }),
									(0, t.jsx)(N, {
										grey: 'after' === i,
										name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3
									}),
									(0, t.jsx)(N, {
										grey: 'after' === i,
										name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4
									}),
									(0, t.jsx)(N, { name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5 }),
									(0, t.jsx)(N, {
										grey: 'after' === i,
										name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6
									}),
									(0, t.jsx)(N, {
										grey: 'after' === i,
										name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7
									})
								]
							})
						]
					}),
					(0, t.jsx)(I, {
						hidden: x || 'after' === i,
						className: o.tipBefore1,
						text: d.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE1
					}),
					(0, t.jsx)(I, {
						hidden: x || 'after' === i,
						className: o.tipBefore2,
						text: d.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE2
					}),
					(0, t.jsx)(I, {
						hidden: x || 'before' === i,
						className: o.tipAfter1,
						text: d.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER1
					}),
					(0, t.jsx)(I, {
						hidden: x || 'before' === i,
						className: o.tipAfter2,
						text: d.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER2
					})
				]
			})
		]
	});
});
