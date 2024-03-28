"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("735250");
l("470079");
var n = l("442837"),
  u = l("481060"),
  d = l("239091"),
  i = l("749210"),
  s = l("664915"),
  o = l("771845"),
  r = l("181945"),
  c = l("945983"),
  f = l("981631"),
  m = l("689938");

function E(e) {
  var t;
  let {
    folderId: E,
    folderName: _,
    folderColor: M,
    unread: b,
    onSelect: p
  } = e, S = (0, n.useStateFromStores)([o.default], () => o.default.getGuildFolderById(E), [E]), L = (0, c.default)(null !== (t = null == S ? void 0 : S.guildIds) && void 0 !== t ? t : []), g = (0, n.useStateFromStores)([s.default], () => s.default.getExpandedFolders().size > 0);
  return (0, a.jsxs)(u.Menu, {
    navId: "guild-context",
    "aria-label": m.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onClose: d.closeContextMenu,
    onSelect: p,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: (0, a.jsx)(u.MenuItem, {
        id: "mark-folder-read",
        label: m.default.Messages.SERVER_FOLDER_MARK_AS_READ,
        action: function() {
          if (null == S) return;
          let {
            guildIds: e
          } = S;
          (0, r.default)(e, f.AnalyticsSections.GUILD_LIST)
        },
        disabled: !b
      })
    }), null != L ? (0, a.jsx)(u.MenuGroup, {
      children: L
    }) : null, (0, a.jsxs)(u.MenuGroup, {
      children: [(0, a.jsx)(u.MenuItem, {
        id: "folder-settings",
        label: m.default.Messages.SERVER_FOLDER_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([l.e("99387"), l.e("66915")]).then(l.bind(l, "662708"));
          return t => (0, a.jsx)(e, {
            ...t,
            folderId: E,
            folderName: _,
            folderColor: M
          })
        })
      }), g && (0, a.jsx)(u.MenuItem, {
        id: "folder-collapse",
        label: m.default.Messages.SERVER_FOLDER_COLLAPSE_ALL,
        action: () => i.default.collapseAllFolders()
      })]
    })]
  })
}