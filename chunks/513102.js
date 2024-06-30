t.d(n, {
    Z: function () {
        return r;
    }
});
var a = t(735250);
t(470079);
var l = t(481060), i = t(132871), s = t(147890), o = t(689938);
function r(e) {
    return (0, a.jsx)(l.MenuItem, {
        id: 'application-directory',
        label: (0, a.jsx)(a.Fragment, { children: o.Z.Messages.APP_DIRECTORY }),
        icon: l.RobotIcon,
        action: () => {
            (0, s.goToAppDirectory)({
                guildId: e.id,
                entrypoint: { name: i.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT }
            });
        }
    });
}
