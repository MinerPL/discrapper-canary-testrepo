"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("239091"),
  r = n("299206"),
  o = n("726521"),
  u = n("795295"),
  d = n("99325"),
  c = n("683818"),
  f = n("689938");

function h(e) {
  let {
    entry: t,
    onSelect: h,
    closePopout: m,
    forceLightTheme: p,
    hideEditButton: E = !1
  } = e, {
    isEntryAdmin: C,
    canEdit: g,
    canRemove: S
  } = (0, c.default)(t), _ = (0, r.default)({
    id: t.guildId,
    label: f.default.Messages.COPY_ID_GUILD,
    onSuccess: m
  });
  l.useEffect(() => {
    !g && !S && null == _ && (0, i.closeContextMenu)()
  });
  let T = () => {
    d.removeDirectoryGuildEntry(t.channelId, t.guildId)
  };

  function I() {
    (0, i.closeContextMenu)(), null == m || m()
  }
  return (0, a.jsxs)(s.Menu, {
    className: p ? "theme-light" : null,
    navId: "guild-entry-context",
    onClose: I,
    "aria-label": f.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: h,
    children: [(0, a.jsxs)(s.MenuGroup, {
      children: [g && !E ? (0, a.jsx)(s.MenuItem, {
        id: "update-entry",
        label: f.default.Messages.HUB_ENTRY_UPDATE,
        action: function() {
          (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("34191")]).then(n.bind(n, "303647"));
            return n => (0, a.jsx)(e, {
              ...n,
              entry: t
            })
          }), I()
        }
      }) : null, S ? (0, a.jsx)(s.MenuItem, {
        id: "remove-from-hub",
        label: f.default.Messages.HUB_ENTRY_REMOVE,
        action: function() {
          (0, s.openModal)(e => (0, a.jsx)(s.ConfirmModal, {
            header: f.default.Messages.HUB_ENTRY_REMOVE,
            confirmText: f.default.Messages.REMOVE,
            cancelText: f.default.Messages.CANCEL,
            onConfirm: T,
            ...e,
            children: (0, a.jsx)(s.Text, {
              variant: "text-md/normal",
              children: f.default.Messages.HUB_ENTRY_REMOVE_BODY.format({
                guildName: t.name
              })
            })
          })), I()
        },
        color: "danger"
      }) : null, C ? null : (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(s.MenuItem, {
          id: "report-server-listing",
          label: f.default.Messages.REPORT_SERVER_NO_NAME,
          action: function() {
            null != t && ((0, o.showReportModalForGuildDirectoryEntry)(t), I())
          },
          icon: u.default,
          color: "danger"
        })
      })]
    }), (0, a.jsx)(s.MenuGroup, {
      children: _
    })]
  })
}