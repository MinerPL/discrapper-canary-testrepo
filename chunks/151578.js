"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("852229"),
  c = n("481060"),
  s = n("239091"),
  i = n("198620"),
  u = n("689938");

function o(e) {
  let {
    attachmentUrl: t,
    attachmentName: n,
    onSelect: o
  } = e;
  return (0, a.jsx)(c.Menu, {
    navId: "attachment-link-context",
    onClose: s.closeContextMenu,
    onSelect: o,
    "aria-label": u.default.Messages.LINK_OPTIONS,
    children: (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "attachment-link-copy-link",
        label: u.default.Messages.COPY_LINK,
        action: async () => {
          let e = await (0, i.maybeRefreshAttachmentUrl)(t);
          (0, l.copy)(null != e ? e : "")
        }
      }), (0, a.jsx)(c.MenuItem, {
        id: "attachment-link-copy-name",
        label: u.default.Messages.COPY_TEXT,
        action: () => {
          (0, l.copy)(null != n ? n : "")
        }
      })]
    }, "attachment-link-actions")
  })
}