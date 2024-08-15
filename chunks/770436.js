n.d(t, {
	Z: function () {
		return u;
	}
});
var s = n(735250);
n(470079);
var a = n(239091),
	i = n(592125),
	r = n(430824),
	l = n(594174),
	o = n(909410),
	c = n(981631),
	d = n(689938);
function u(e) {
	let { guildId: t, log: u, onHeaderClick: _, className: I, expanded: E, onContentClick: T } = e;
	return null == t
		? null
		: (0, s.jsx)(o.Z, {
				guildId: t,
				log: u,
				className: I,
				expanded: E,
				onContentClick: T,
				onHeaderClick: () => {
					null == _ || _(u);
				},
				onUserContextMenu: (e) => {
					let { user: i } = u;
					null != i &&
						null != t &&
						(0, a.jW)(e, async () => {
							let { default: e } = await n.e('50929').then(n.bind(n, 595011));
							return (n) =>
								(0, s.jsx)(e, {
									...n,
									guildId: t,
									user: i
								});
						});
				},
				onChannelContextMenu: (e) => {
					let i = r.Z.getGuild(t);
					null != u.options.channel &&
						'string' != typeof u.options.channel &&
						null != i &&
						(0, a.jW)(e, async () => {
							let { default: e } = await n.e('51529').then(n.bind(n, 228620));
							return (t) =>
								(0, s.jsx)(e, {
									...t,
									channel: u.options.channel
								});
						});
				},
				onTargetContextMenu: (e) => {
					switch (u.targetType) {
						case c.KFR.CHANNEL:
						case c.KFR.CHANNEL_OVERWRITE:
							let o = i.Z.getChannel(u.targetId),
								_ = r.Z.getGuild(t);
							if (null != o && null != _)
								return (0, a.jW)(e, async () => {
									let { default: e } = await n.e('51529').then(n.bind(n, 228620));
									return (t) =>
										(0, s.jsx)(e, {
											...t,
											channel: o
										});
								});
							return (0, a.jW)(e, async () => {
								let { default: e } = await n.e('5396').then(n.bind(n, 731646));
								return (t) =>
									(0, s.jsx)(e, {
										...t,
										id: u.targetId,
										label: d.Z.Messages.COPY_ID_UNKNOWN
									});
							});
						case c.KFR.USER:
							let I = l.default.getUser(u.targetId);
							if (null != I && null != t)
								return (0, a.jW)(e, async () => {
									let { default: e } = await n.e('50929').then(n.bind(n, 595011));
									return (n) =>
										(0, s.jsx)(e, {
											...n,
											guildId: t,
											user: I
										});
								});
					}
					return null;
				}
			});
}
