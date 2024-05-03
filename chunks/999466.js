"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  i = n("481060"),
  r = n("239091"),
  u = n("547972"),
  l = n("435064"),
  o = n("621781"),
  S = n("39604"),
  c = n("332325"),
  g = n("689938");

function d(e) {
  let {
    onSelect: t
  } = e, {
    clipsLength: n
  } = (0, a.useStateFromStoresObject)([l.default], () => l.default.getSettings()), d = (0, o.default)();
  return (0, s.jsxs)(i.Menu, {
    navId: "clips-context",
    "aria-label": g.default.Messages.CLIPS_SETTINGS,
    onClose: r.closeContextMenu,
    onSelect: t,
    children: [(0, s.jsx)(i.MenuGroup, {
      children: (0, s.jsx)(i.MenuItem, {
        id: "clips-duration",
        label: g.default.Messages.CLIPS_SETTINGS_LENGTH,
        children: d.map(e => {
          let {
            value: t,
            label: a
          } = e;
          return (0, s.jsx)(i.MenuRadioItem, {
            id: "clips-duration-".concat(t),
            group: "clips-duration",
            label: a,
            action: () => (0, S.updateClipsLength)(t),
            checked: t === n
          }, t)
        })
      })
    }), (0, s.jsx)(i.MenuGroup, {
      children: (0, s.jsx)(i.MenuItem, {
        id: "clips-settings",
        label: g.default.Messages.CLIPS_SETTINGS,
        action: () => (0, u.default)(c.GameSettingsTab.CLIPS)
      })
    })]
  })
}