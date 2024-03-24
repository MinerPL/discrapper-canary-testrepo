"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var s = n("37983");
n("884691");
var l = n("77078"),
  r = n("272030"),
  u = n("158534"),
  a = n("812204"),
  i = n("861370"),
  o = n("366416"),
  c = n("49111"),
  d = n("782340"),
  f = (0, u.default)(function(e) {
    let {
      user: t,
      relationshipType: n,
      onRemoveFriend: u,
      onBlock: a,
      onReport: f,
      onMessage: p,
      onCopyId: h,
      onSelect: M
    } = e, E = t.isNonUserBot(), C = [], I = (0, o.useIsIarUserReportingEnabled)("User Profile Actions Menu");
    if (!E) switch (n) {
      case c.RelationshipTypes.BLOCKED:
        C.push((0, s.jsx)(l.MenuItem, {
          id: "user-unblock",
          label: d.default.Messages.UNBLOCK,
          action: u
        }));
        break;
      case c.RelationshipTypes.FRIEND:
        C.push((0, s.jsx)(l.MenuItem, {
          id: "user-remove",
          label: d.default.Messages.REMOVE_FRIEND,
          action: u,
          color: "danger"
        })), C.push((0, s.jsx)(l.MenuItem, {
          id: "user-block",
          label: d.default.Messages.BLOCK,
          action: a,
          color: "danger"
        })), I && C.push((0, s.jsx)(l.MenuItem, {
          id: "user-report",
          label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
          action: f,
          color: "danger"
        }));
        break;
      case c.RelationshipTypes.NONE:
      case c.RelationshipTypes.PENDING_INCOMING:
      default:
        C.push((0, s.jsx)(l.MenuItem, {
          id: "user-block",
          label: d.default.Messages.BLOCK,
          action: a,
          color: "danger"
        })), I && C.push((0, s.jsx)(l.MenuItem, {
          id: "user-report",
          label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
          action: f,
          color: "danger"
        }))
    }!E && n !== c.RelationshipTypes.BLOCKED && C.push((0, s.jsx)(l.MenuItem, {
      id: "user-message",
      label: d.default.Messages.USER_POPOUT_MESSAGE,
      action: p
    }));
    let R = (0, i.default)({
      id: t.id,
      label: d.default.Messages.COPY_ID_USER,
      onSuccess: () => {
        h(), (0, r.closeContextMenu)()
      }
    });
    return (0, s.jsxs)(l.Menu, {
      navId: "user-profile-actions",
      "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
      onClose: r.closeContextMenu,
      onSelect: M,
      children: [(0, s.jsx)(l.MenuGroup, {
        children: C
      }), null != R ? (0, s.jsx)(l.MenuGroup, {
        children: R
      }) : null]
    })
  }, [a.default.CONTEXT_MENU, a.default.USER_PROFILE_ACTIONS_MENU])