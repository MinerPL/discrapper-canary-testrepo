"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
});
var s = l("37983");
l("884691");
var a = l("446674"),
  n = l("77078"),
  i = l("272030"),
  r = l("817963"),
  c = l("305961"),
  o = l("957255"),
  u = l("677099"),
  d = l("697218"),
  f = l("195812"),
  h = l("754576"),
  v = l("228220"),
  p = l("782340");

function x(e) {
  let {
    onExportToFile: t,
    onExportToSoundboard: l,
    onDelete: x
  } = e, g = (0, a.useStateFromStores)([u.default, o.default, d.default, c.default], () => u.default.getFlattenedGuildIds().some(e => {
    let t = c.default.getGuild(e);
    if (null == t) return !1;
    let l = (0, r.getManageResourcePermissions)(t, o.default, d.default);
    return l.canCreateExpressions
  }));
  return (0, s.jsxs)(n.Menu, {
    navId: "clips-more-options",
    "aria-label": p.default.Messages.MORE_OPTIONS,
    onClose: i.closeContextMenu,
    onSelect: i.closeContextMenu,
    children: [g ? (0, s.jsx)(n.MenuItem, {
      icon: h.default,
      id: "clips-export-soundboard",
      label: p.default.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
      action: l
    }) : null, (0, s.jsx)(n.MenuItem, {
      icon: f.default,
      id: "clips-export-file",
      label: p.default.Messages.CLIPS_EXPORT_TO_FILE,
      action: t
    }), (0, s.jsx)(n.MenuItem, {
      icon: v.default,
      id: "clips-delete",
      label: p.default.Messages.DELETE,
      color: "danger",
      action: x
    })]
  })
}