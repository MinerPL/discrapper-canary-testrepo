"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250");
n("470079");
var u = n("481060"),
  a = n("239091"),
  i = n("637853"),
  r = n("434404"),
  s = n("837949"),
  d = n("981631"),
  o = n("689938");

function f(e) {
  let {
    guild: t,
    onSelect: n
  } = e, f = (0, s.default)(t.id), c = (0, i.isGuildOnboardingSettingsAvailable)(t.id);
  return (0, l.jsx)(u.Menu, {
    onSelect: n,
    navId: "guild-browse-channels-context-menu",
    "aria-label": o.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: a.closeContextMenu,
    children: (0, l.jsxs)(u.MenuGroup, {
      children: [c && (0, l.jsx)(u.MenuItem, {
        id: "go-to-settings",
        label: o.default.Messages.EDIT_ONBOARDING,
        action: () => {
          r.default.open(t.id, d.GuildSettingsSections.ONBOARDING)
        }
      }), f]
    })
  })
}