"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("358085"),
  i = s("998502"),
  d = s("689938");

function r(e, t) {
  return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, a.jsx)(n.MenuItem, {
    id: "copy",
    label: d.default.Messages.COPY,
    hint: (0, l.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => {
      i.default.copy(e), null == t || t.focus()
    }
  }) : null
}