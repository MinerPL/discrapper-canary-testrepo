t.d(n, {
	Z: function () {
		return u;
	}
});
var a = t(735250);
t(470079);
var i = t(481060),
	l = t(132871),
	s = t(147890),
	o = t(689938);
function u(e) {
	return (0, a.jsx)(i.MenuItem, {
		id: 'application-directory',
		label: (0, a.jsx)(a.Fragment, { children: o.Z.Messages.APP_DIRECTORY }),
		icon: i.RobotIcon,
		action: () => {
			(0, s.goToAppDirectory)({
				guildId: e.id,
				entrypoint: { name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT }
			});
		}
	});
}
