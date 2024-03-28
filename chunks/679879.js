"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var l = a("481060"),
  i = a("58642"),
  u = a("626135"),
  r = a("630388"),
  d = a("981631"),
  s = a("689938");

function o(e) {
  return null == e ? null : (0, n.jsx)(l.MenuCheckboxItem, {
    id: "private",
    label: s.default.Messages.APPLICATION_CONTEXT_MENU_PRIVATE_STATUS,
    action: function() {
      if (null == e) return;
      let t = (0, r.toggleFlag)(e.getFlags(), d.LibraryApplicationFlags.PRIVATE);
      i.updateFlags(e.id, e.branchId, t), u.default.track(d.AnalyticEvents.APPLICATION_SETTINGS_UPDATED, {
        private_enabled: (0, r.hasFlag)(t, d.LibraryApplicationFlags.PRIVATE),
        ...e.getAnalyticsData()
      })
    },
    checked: e.hasFlag(d.LibraryApplicationFlags.PRIVATE)
  })
}