"use strict";
a.r(s), a("653041");
var n = a("735250");
a("470079");
var t = a("481060"),
  r = a("239091"),
  u = a("108843"),
  l = a("100527"),
  i = a("299206"),
  o = a("87620"),
  c = a("981631"),
  d = a("689938");
s.default = (0, u.default)(function(e) {
  let {
    user: s,
    relationshipType: a,
    onRemoveFriend: u,
    onBlock: l,
    onReport: p,
    onMessage: f,
    onCopyId: E,
    onSelect: M
  } = e, b = s.isNonUserBot(), I = [], _ = (0, o.useIsIarUserReportingEnabled)("User Profile Actions Menu");
  if (!b) switch (a) {
    case c.RelationshipTypes.BLOCKED:
      I.push((0, n.jsx)(t.MenuItem, {
        id: "user-unblock",
        label: d.default.Messages.UNBLOCK,
        action: u
      }));
      break;
    case c.RelationshipTypes.FRIEND:
      I.push((0, n.jsx)(t.MenuItem, {
        id: "user-remove",
        label: d.default.Messages.REMOVE_FRIEND,
        action: u,
        color: "danger"
      })), I.push((0, n.jsx)(t.MenuItem, {
        id: "user-block",
        label: d.default.Messages.BLOCK,
        action: l,
        color: "danger"
      })), _ && I.push((0, n.jsx)(t.MenuItem, {
        id: "user-report",
        label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
        action: p,
        color: "danger"
      }));
      break;
    case c.RelationshipTypes.NONE:
    case c.RelationshipTypes.PENDING_INCOMING:
    default:
      I.push((0, n.jsx)(t.MenuItem, {
        id: "user-block",
        label: d.default.Messages.BLOCK,
        action: l,
        color: "danger"
      })), _ && I.push((0, n.jsx)(t.MenuItem, {
        id: "user-report",
        label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
        action: p,
        color: "danger"
      }))
  }!b && a !== c.RelationshipTypes.BLOCKED && I.push((0, n.jsx)(t.MenuItem, {
    id: "user-message",
    label: d.default.Messages.USER_POPOUT_MESSAGE,
    action: f
  }));
  let R = (0, i.default)({
    id: s.id,
    label: d.default.Messages.COPY_ID_USER,
    onSuccess: () => {
      E(), (0, r.closeContextMenu)()
    }
  });
  return (0, n.jsxs)(t.Menu, {
    navId: "user-profile-actions",
    "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
    onClose: r.closeContextMenu,
    onSelect: M,
    children: [(0, n.jsx)(t.MenuGroup, {
      children: I
    }), null != R ? (0, n.jsx)(t.MenuGroup, {
      children: R
    }) : null]
  })
}, [l.default.CONTEXT_MENU, l.default.USER_PROFILE_ACTIONS_MENU])