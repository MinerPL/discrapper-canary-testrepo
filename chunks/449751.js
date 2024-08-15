t.d(n, {
	Z: function () {
		return d;
	}
});
var i = t(735250);
t(470079);
var s = t(852229),
	l = t(481060),
	a = t(626135),
	r = t(572004),
	o = t(981631),
	u = t(689938);
function d(e, n) {
	return r.wS && e.type !== o.uaV.GUILD_INVITE_REMINDER
		? (0, i.jsx)(l.MenuItem, {
				id: 'copy-link',
				label: u.Z.Messages.COPY_MESSAGE_LINK,
				icon: l.LinkIcon,
				action: () => {
					(0, s.J)(
						''
							.concat(location.protocol, '//')
							.concat(location.host)
							.concat(o.Z5c.CHANNEL(n.guild_id, n.id, e.id))
					),
						a.default.track(o.rMx.MESSAGE_LINK_COPIED, {
							message_id: e.id,
							channel: e.channel_id
						});
				}
			})
		: null;
}
