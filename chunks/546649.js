t.r(e),
	t.d(e, {
		default: function () {
			return u;
		}
	});
var i = t(735250);
t(470079);
var a = t(481060),
	o = t(239091),
	s = t(299206),
	c = t(461757),
	r = t(689938);
function u(n) {
	let { channel: e, channelId: t, originalLink: u, messageId: l, onSelect: d } = n,
		p = (0, c.Z)(e, u, l),
		h = (0, s.Z)({
			id: t,
			label: r.Z.Messages.COPY_ID_CHANNEL
		});
	return (0, i.jsxs)(a.Menu, {
		navId: 'channel-mention-context',
		onClose: o.Zy,
		onSelect: d,
		'aria-label': r.Z.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
		children: [(0, i.jsx)(a.MenuGroup, { children: p }, 'channel-mention-actions'), (0, i.jsx)(a.MenuGroup, { children: h }, 'developer-actions')]
	});
}
