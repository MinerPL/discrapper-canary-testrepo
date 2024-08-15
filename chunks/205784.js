t.r(l),
	t.d(l, {
		default: function () {
			return _;
		}
	});
var n = t(735250);
t(470079);
var d = t(442837),
	i = t(481060),
	u = t(239091),
	a = t(749210),
	s = t(664915),
	r = t(771845),
	o = t(181945),
	c = t(945983),
	f = t(981631),
	E = t(689938);
function _(e) {
	var l;
	let { folderId: _, folderName: m, folderColor: M, unread: p, onSelect: b } = e,
		Z = (0, d.e7)([r.ZP], () => r.ZP.getGuildFolderById(_), [_]),
		g = (0, c.Z)(null !== (l = null == Z ? void 0 : Z.guildIds) && void 0 !== l ? l : []),
		L = (0, d.e7)([s.Z], () => s.Z.getExpandedFolders().size > 0);
	return (0, n.jsxs)(i.Menu, {
		navId: 'guild-context',
		'aria-label': E.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
		onClose: u.Zy,
		onSelect: b,
		children: [
			(0, n.jsx)(i.MenuGroup, {
				children: (0, n.jsx)(i.MenuItem, {
					id: 'mark-folder-read',
					label: E.Z.Messages.SERVER_FOLDER_MARK_AS_READ,
					action: function () {
						if (null == Z) return;
						let { guildIds: e } = Z;
						(0, o.Z)(e, f.jXE.GUILD_LIST);
					},
					disabled: !p
				})
			}),
			null != g ? (0, n.jsx)(i.MenuGroup, { children: g }) : null,
			(0, n.jsxs)(i.MenuGroup, {
				children: [
					(0, n.jsx)(i.MenuItem, {
						id: 'folder-settings',
						label: E.Z.Messages.SERVER_FOLDER_SETTINGS,
						action: () =>
							(0, i.openModalLazy)(async () => {
								let { default: e } = await t.e('66915').then(t.bind(t, 662708));
								return (l) =>
									(0, n.jsx)(e, {
										...l,
										folderId: _,
										folderName: m,
										folderColor: M
									});
							})
					}),
					L &&
						(0, n.jsx)(i.MenuItem, {
							id: 'folder-collapse',
							label: E.Z.Messages.SERVER_FOLDER_COLLAPSE_ALL,
							action: () => a.Z.collapseAllFolders()
						})
				]
			})
		]
	});
}
