"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
});
var a = l("735250");
l("470079");
var s = l("442837"),
  n = l("481060"),
  u = l("239091"),
  d = l("889161"),
  o = l("430824"),
  i = l("496675"),
  r = l("771845"),
  c = l("594174"),
  f = l("943461"),
  p = l("503705"),
  M = l("740727"),
  g = l("689938");

function x(e) {
  let {
    onExportToFile: t,
    onExportToSoundboard: l,
    onDelete: x
  } = e, I = (0, s.useStateFromStores)([r.default, i.default, c.default, o.default], () => r.default.getFlattenedGuildIds().some(e => {
    let t = o.default.getGuild(e);
    return null != t && (0, d.getManageResourcePermissions)(t, i.default, c.default).canCreateExpressions
  }));
  return (0, a.jsxs)(n.Menu, {
    navId: "clips-more-options",
    "aria-label": g.default.Messages.MORE_OPTIONS,
    onClose: u.closeContextMenu,
    onSelect: u.closeContextMenu,
    children: [I ? (0, a.jsx)(n.MenuItem, {
      icon: p.default,
      id: "clips-export-soundboard",
      label: g.default.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
      action: l
    }) : null, (0, a.jsx)(n.MenuItem, {
      icon: f.default,
      id: "clips-export-file",
      label: g.default.Messages.CLIPS_EXPORT_TO_FILE,
      action: t
    }), (0, a.jsx)(n.MenuItem, {
      icon: M.default,
      id: "clips-delete",
      label: g.default.Messages.DELETE,
      color: "danger",
      action: x
    })]
  })
}