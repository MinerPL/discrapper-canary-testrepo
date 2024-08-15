n.d(t, {
	Z: function () {
		return N;
	}
});
var s = n(735250);
n(470079);
var a = n(120356),
	i = n.n(a),
	r = n(442837),
	l = n(481060),
	o = n(471445),
	c = n(977258),
	d = n(637853),
	u = n(816436),
	_ = n(259580),
	I = n(889369),
	E = n(838324),
	T = n(689938),
	m = n(243786);
function N(e) {
	let { guild: t, scrollToQuestions: n } = e,
		a = (0, r.e7)([I.Z], () => I.Z.editedDefaultChannelIds),
		i = (0, u.b)(t.id, a).filter((e) => e.isCategory() || (0, c.s)(e.guild_id, e.id));
	return (0, s.jsxs)('div', {
		className: m.container,
		children: [
			(0, s.jsx)('div', {
				className: m.header,
				children: (0, s.jsx)(E.Z, {
					guildId: t.id,
					scrollToQuestions: n
				})
			}),
			(0, s.jsxs)('div', {
				className: m.channelList,
				children: [(0, s.jsx)(g, {}), 0 === i.length && (0, s.jsx)(S, {}), (0, s.jsx)(h, { channels: i })]
			})
		]
	});
}
function S() {
	return (0, s.jsxs)('div', {
		className: m.emptyState,
		children: [
			(0, s.jsx)('div', {
				className: m.emptyStateIcon,
				children: (0, s.jsx)(l.TextIcon, {
					size: 'md',
					color: 'currentColor'
				})
			}),
			(0, s.jsx)(l.Text, {
				className: m.channelName,
				variant: 'text-md/normal',
				color: 'text-muted',
				children: T.Z.Messages.DEFAULT_CHANNELS_PREVIEW_EMPTY_STATE
			})
		]
	});
}
function h(e) {
	let { channels: t } = e;
	return (0, s.jsx)(s.Fragment, { children: t.map((e) => (e.isCategory() ? (0, s.jsx)(C, { label: e.name }, e.id) : (0, s.jsx)(x, { channel: e }, e.id))) });
}
function g() {
	return (0, s.jsx)('div', { className: m.divider });
}
function C(e) {
	let { label: t } = e;
	return (0, s.jsxs)('div', {
		className: m.category,
		children: [
			(0, s.jsx)(_.Z, {
				className: m.caret,
				width: 12,
				height: 12,
				direction: _.Z.Directions.DOWN
			}),
			(0, s.jsx)(l.Text, {
				variant: 'text-xs/semibold',
				color: 'text-muted',
				lineClamp: 1,
				children: t
			})
		]
	});
}
function x(e) {
	var t;
	let { channel: n } = e,
		a = (0, d.iF)(n),
		r = null !== (t = (0, o.KS)(n)) && void 0 !== t ? t : l.TextIcon;
	return (0, s.jsxs)('div', {
		className: m.channel,
		children: [
			(0, s.jsx)(r, {
				className: m.channelIcon,
				size: 'xs',
				color: 'currentColor'
			}),
			(0, s.jsx)(l.Text, {
				className: m.channelName,
				variant: 'text-md/normal',
				color: 'text-muted',
				lineClamp: 1,
				children: n.name
			}),
			(0, s.jsx)('div', { className: i()({ [m.chattableIndicator]: a }) })
		]
	});
}
