var i = n(735250);
n(470079);
var s = n(120356),
	o = n.n(s),
	a = n(481060),
	l = n(942951),
	r = n(456269),
	c = n(689938),
	u = n(540220);
t.Z = (e) => {
	var t, n;
	let { message: s, channel: d, renderColon: h, hasUnreads: m } = e,
		{ user: p, author: g } = (0, r.AJ)(d),
		f =
			null !== (n = null !== (t = null == g ? void 0 : g.nick) && void 0 !== t ? t : null == p ? void 0 : p.username) &&
			void 0 !== n
				? n
				: '',
		T = (0, l.l)({
			user: null == s ? void 0 : s.author,
			channelId: d.id,
			guildId: d.guild_id,
			messageId: null == s ? void 0 : s.id,
			stopPropagation: !0,
			ariaLabel: c.Z.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({ name: f })
		})(null != g ? g : void 0)((0, i.jsx)(i.Fragment, { children: f }), d.id);
	return (0, i.jsxs)(a.Text, {
		tag: 'span',
		className: o()(u.author, { [u.hasUnreads]: m }),
		variant: 'text-sm/semibold',
		children: [T, !0 === h ? ': ' : null]
	});
};
