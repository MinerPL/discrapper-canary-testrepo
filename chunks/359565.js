n.d(t, {
	q: function () {
		return f;
	},
	s: function () {
		return _;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(481060),
	o = n(367907),
	c = n(626135),
	u = n(346479),
	d = n(665906),
	h = n(981631),
	m = n(689938),
	p = n(107002);
function _(e) {
	let { channel: t, narrow: n } = e,
		s = (0, d.tc)(t);
	return (
		a.useEffect(() => {
			c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
				...(0, o.hH)(t.getGuildId()),
				...(0, o.v_)(t),
				banner_type: 'thread'
			});
		}, [t]),
		(0, i.jsxs)('div', {
			className: l()(p.chatHeaderBar, { [p.narrow]: n }),
			children: [
				(0, i.jsx)(r.Text, {
					className: p.chatHeaderBarText,
					variant: 'text-sm/normal',
					color: 'header-secondary',
					children: t.isForumPost()
						? m.Z.Messages.FORUM_POST_HEADER_NOTICE_LOCKED
						: m.Z.Messages.THREAD_HEADER_NOTICE_LOCKED
				}),
				s
					? (0, i.jsx)(r.Button, {
							size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
							className: p.chatHeaderBarButton,
							color: r.Button.Colors.PRIMARY,
							onClick: () => {
								c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
									...(0, o.hH)(t.getGuildId()),
									...(0, o.v_)(t),
									banner_type: 'thread',
									cta_type: 'unarchive'
								}),
									u.Z.unarchiveThread(t, !1);
							},
							children: m.Z.Messages.UNARCHIVE
						})
					: null
			]
		})
	);
}
function f(e) {
	let { channel: t, narrow: n } = e,
		s = (0, d.Xb)(t);
	return (
		a.useEffect(() => {
			c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
				...(0, o.hH)(t.getGuildId()),
				...(0, o.v_)(t),
				banner_type: 'thread'
			});
		}, [t]),
		(0, i.jsxs)('div', {
			className: l()(p.chatHeaderBar, { [p.narrow]: n }),
			children: [
				(0, i.jsx)(r.Text, {
					className: p.chatHeaderBarText,
					variant: 'text-sm/normal',
					color: 'header-secondary',
					children: t.isForumPost()
						? m.Z.Messages.FORUM_POST_HEADER_NOTICE_ACTIVE_LOCKED
						: m.Z.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
				}),
				s
					? (0, i.jsx)(r.Button, {
							size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
							className: p.chatHeaderBarButton,
							color: r.Button.Colors.PRIMARY,
							onClick: () => {
								c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
									...(0, o.hH)(t.getGuildId()),
									...(0, o.v_)(t),
									banner_type: 'thread',
									cta_type: 'unlock'
								}),
									u.Z.unlockThread(t);
							},
							children: m.Z.Messages.UNLOCK
						})
					: null
			]
		})
	);
}
