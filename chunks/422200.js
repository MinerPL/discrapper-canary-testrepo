i.r(e);
var t = i(735250);
i(470079);
var r = i(481060),
	a = i(239091),
	l = i(108843),
	u = i(100527),
	s = i(299206),
	d = i(895563),
	o = i(32750),
	c = i(109764),
	Z = i(323597),
	h = i(461535),
	M = i(438536),
	f = i(251746),
	_ = i(193987),
	p = i(933793),
	E = i(13736),
	A = i(732393),
	I = i(214906),
	x = i(612856),
	C = i(137591),
	G = i(689938);
e.default = (0, l.Z)(
	function (n) {
		let { channel: e, onSelect: i } = n,
			l = (0, c.Z)(e),
			u = (0, h.Z)(e),
			j = (0, I.Z)(e),
			m = (0, o.Z)(e),
			g = (0, _.Z)(e),
			v = (0, Z.Z)(e),
			O = (0, s.Z)({
				id: e.id,
				label: G.Z.Messages.COPY_ID_THREAD
			}),
			T = (0, M.Z)(e, 'Context Menu'),
			R = (0, p.Z)(e),
			U = (0, x.Z)(e),
			D = (0, E.Z)(e),
			N = (0, A.Z)(e.id),
			P = (0, f.Z)(e),
			b = (0, C.Z)(e),
			L = (0, d.l)(e),
			F = (0, d.P)(e);
		return (0, t.jsxs)(r.Menu, {
			navId: 'thread-context',
			onClose: a.Zy,
			'aria-label': G.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
			onSelect: i,
			children: [
				(0, t.jsxs)(
					r.MenuGroup,
					{
						children: [u, L]
					},
					'mark-as-read-or-favorite'
				),
				(0, t.jsxs)(
					r.MenuGroup,
					{
						children: [T, P, m, g, D, N, l]
					},
					'thread-actions'
				),
				(0, t.jsxs)(
					r.MenuGroup,
					{
						children: [j, U]
					},
					'notifications'
				),
				(0, t.jsx)(r.MenuGroup, { children: F }),
				(0, t.jsxs)(
					r.MenuGroup,
					{
						children: [b, R, v]
					},
					'admin-actions'
				),
				(0, t.jsx)(r.MenuGroup, { children: O }, 'developer-actions')
			]
		});
	},
	[u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_THREAD_MENU]
);
