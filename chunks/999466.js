"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var n = s("735250");
s("470079");
var a = s("442837"),
  u = s("481060"),
  l = s("239091"),
  i = s("230711"),
  o = s("435064"),
  r = s("621781"),
  c = s("39604"),
  d = s("981631"),
  S = s("689938");

function f(e) {
  let {
    onSelect: t
  } = e, {
    clipsLength: s
  } = (0, a.useStateFromStoresObject)([o.default], () => o.default.getSettings()), f = (0, r.default)();
  return (0, n.jsxs)(u.Menu, {
    navId: "clips-context",
    "aria-label": S.default.Messages.CLIPS_SETTINGS,
    onClose: l.closeContextMenu,
    onSelect: t,
    children: [(0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "clips-duration",
        label: S.default.Messages.CLIPS_SETTINGS_LENGTH,
        children: f.map(e => {
          let {
            value: t,
            label: a
          } = e;
          return (0, n.jsx)(u.MenuRadioItem, {
            id: "clips-duration-".concat(t),
            group: "clips-duration",
            label: a,
            action: () => (0, c.updateClipsLength)(t),
            checked: t === s
          }, t)
        })
      })
    }), (0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "clips-settings",
        label: S.default.Messages.CLIPS_SETTINGS,
        action: () => i.default.open(d.UserSettingsSections.CLIPS)
      })
    })]
  })
}