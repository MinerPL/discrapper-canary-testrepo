s.d(a, {
	Z: function () {
		return M;
	}
}),
	s(47120);
var t = s(735250),
	n = s(470079),
	r = s(481060),
	o = s(458044),
	_ = s(689938),
	i = s(347809);
function c(e) {
	let { user: a, tagId: s, title: n, messageCount: o, reactionCount: c, activeAgo: l, tags: d, attachment: M } = e,
		{ name: E, avatarSrc: m } = a;
	return (0, t.jsxs)('div', {
		className: i.post,
		children: [
			(0, t.jsxs)('div', {
				children: [
					(0, t.jsxs)('div', {
						className: i.inline,
						children: [
							(0, t.jsxs)(r.Text, {
								color: 'header-primary',
								variant: 'text-xs/medium',
								className: i.inline,
								children: [
									(0, t.jsx)('img', {
										src: m,
										alt: _.Z.Messages.USER_SETTINGS_AVATAR,
										width: 16,
										height: 16
									}),
									E
								]
							}),
							null != s &&
								(0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)('span', {
											className: i.bullet,
											children: '\u2022'
										}),
										(0, t.jsx)(r.Text, {
											color: 'header-primary',
											variant: 'text-xxs/medium',
											className: i.inlineTag,
											children: d[s]
										})
									]
								})
						]
					}),
					(0, t.jsx)(r.Heading, {
						color: 'header-primary',
						variant: 'heading-md/semibold',
						className: i.title,
						children: n
					}),
					(0, t.jsxs)('div', {
						className: i.inline,
						children: [
							(0, t.jsxs)(r.Text, {
								color: 'header-secondary',
								variant: 'text-xs/medium',
								className: i.alignCenter,
								children: [
									(0, t.jsx)(r.ChatIcon, {
										size: 'xs',
										color: 'currentColor',
										className: i.icon
									}),
									o
								]
							}),
							c > 0 &&
								(0, t.jsxs)(t.Fragment, {
									children: [
										(0, t.jsx)('span', {
											className: i.bullet,
											children: '\u2022'
										}),
										(0, t.jsxs)(r.Text, {
											color: 'header-secondary',
											variant: 'text-xs/medium',
											className: i.alignCenter,
											children: [
												(0, t.jsx)('span', {
													role: 'img',
													'aria-label': _.Z.Messages.REACTIONS,
													className: i.icon,
													children: '\u2764️'
												}),
												c
											]
										})
									]
								}),
							(0, t.jsx)('span', {
								className: i.bullet,
								children: '\u2022'
							}),
							(0, t.jsx)(r.Text, {
								color: 'header-secondary',
								variant: 'text-xs/medium',
								children: l
							})
						]
					})
				]
			}),
			null != M &&
				(0, t.jsx)('img', {
					src: M,
					alt: _.Z.Messages.MESSAGE_ATTACHMENT_A11Y_LABEL.format({ name: n }),
					className: i.attachment
				})
		]
	});
}
function l(e) {
	let { author: a, content: s } = e,
		{ name: n, isOP: o, avatarSrc: c } = a;
	return (0, t.jsxs)('div', {
		className: i.message,
		children: [
			(0, t.jsx)('img', {
				src: c,
				alt: _.Z.Messages.USER_SETTINGS_AVATAR,
				width: 40,
				height: 40
			}),
			(0, t.jsxs)('div', {
				children: [
					(0, t.jsxs)('div', {
						className: i.inline,
						children: [
							(0, t.jsx)(r.Text, {
								color: 'header-primary',
								variant: 'text-sm/semibold',
								children: n
							}),
							o &&
								(0, t.jsx)('span', {
									className: i.opTag,
									children: _.Z.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER
								})
						]
					}),
					(0, t.jsx)(r.Text, {
						color: 'text-normal',
						variant: 'text-sm/normal',
						children: s
					})
				]
			})
		]
	});
}
function d(e) {
	let { title: a, messages: s, maxHeight: n } = e;
	return (0, t.jsx)('div', {
		className: i.previewContainer,
		style: { maxHeight: n },
		'aria-hidden': !0,
		children: (0, t.jsxs)('div', {
			className: i.preview,
			children: [
				(0, t.jsx)(r.ChatIcon, {
					size: 'md',
					color: 'currentColor',
					className: i.forumPostIcon
				}),
				(0, t.jsx)(r.Heading, {
					color: 'header-primary',
					variant: 'heading-lg/semibold',
					className: i.header,
					children: a
				}),
				(0, t.jsx)('div', {
					className: i.messageContainer,
					children: s.map((e, a) =>
						(0, t.jsxs)(t.Fragment, {
							children: [
								(0, t.jsx)(l, { ...e }, a),
								0 === a &&
									(0, t.jsxs)('div', {
										children: [
											(0, t.jsx)('hr', { className: i.topSeparator }),
											(0, t.jsxs)('div', {
												className: i.actionBar,
												children: [
													(0, t.jsxs)(r.Text, {
														color: 'text-brand',
														variant: 'text-xs/medium',
														className: i.fakeReactions,
														children: [
															(0, t.jsx)('span', {
																role: 'img',
																'aria-label': _.Z.Messages.REACTIONS,
																className: i.icon,
																children: '\u2764️'
															}),
															'17'
														]
													}),
													(0, t.jsxs)(r.Text, {
														color: 'text-muted',
														variant: 'text-xs/medium',
														className: i.following,
														children: [
															(0, t.jsx)(r.BellIcon, {
																size: 'xs',
																color: 'currentColor'
															}),
															_.Z.Messages.FOLLOW
														]
													})
												]
											}),
											(0, t.jsx)('hr', { className: i.bottomSeparator })
										]
									})
							]
						})
					)
				}),
				(0, t.jsx)('div', {
					className: i.chatInput,
					children: (0, t.jsx)(r.Text, {
						color: 'text-muted',
						variant: 'text-sm/normal',
						children: _.Z.Messages.SEND_A_MESSAGE
					})
				})
			]
		})
	});
}
function M(e) {
	let { id: a } = e,
		[s, _] = n.useState(0),
		l = n.useRef(null),
		{ tags: M, posts: E, postPreview: m, ariaLabel: g } = (0, o.Z)(a);
	return (
		n.useEffect(() => {
			_(0);
		}, [a]),
		n.useEffect(() => {
			var e;
			0 === s && (null == l ? void 0 : null === (e = l.current) || void 0 === e ? void 0 : e.clientHeight) != null && _(l.current.clientHeight - 40);
		}, [s]),
		(0, t.jsxs)('div', {
			className: i.container,
			role: 'image',
			'aria-label': g,
			children: [
				(0, t.jsxs)('div', {
					ref: l,
					className: i.browser,
					'aria-hidden': !0,
					children: [
						(0, t.jsx)('div', {
							className: i.tags,
							children: M.map((e, a) =>
								(0, t.jsx)(
									r.Text,
									{
										color: 'header-primary',
										variant: 'text-xs/medium',
										className: i.tag,
										children: e
									},
									a
								)
							)
						}),
						(0, t.jsx)('div', {
							className: i.posts,
							children: E.map((e, a) =>
								(0, t.jsx)(
									c,
									{
										...e,
										tags: M
									},
									a
								)
							)
						})
					]
				}),
				(0, t.jsx)(d, {
					...m,
					maxHeight: s
				})
			]
		})
	);
}
