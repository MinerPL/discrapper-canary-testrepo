"use strict";
n.r(t), n.d(t, {
  UserLinkPendingRequestRow: function() {
    return m
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("65597"),
  o = n("77078"),
  u = n("697218"),
  d = n("36694"),
  c = n("945330"),
  f = n("775032"),
  E = n("25132"),
  h = n("768815"),
  _ = n("176661"),
  C = n("922832"),
  S = n("782340"),
  I = n("840408");

function m(e) {
  let {
    user: t
  } = e, l = (0, f.default)(), m = (0, E.useHasMaxConnections)(), p = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), T = s.useCallback(() => {
    i(void 0 !== p, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("134855").then(n.bind(n, "134855"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]), g = s.useCallback(() => {
    i(void 0 !== p, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("217014").then(n.bind(n, "217014"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]), A = s.useCallback(() => {
    i(void 0 !== p, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("809175").then(n.bind(n, "809175"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]);
  return (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsx)("div", {
      className: I.details,
      children: (0, a.jsx)(_.default, {
        otherUser: t,
        status: C.UserLinkStatus.PENDING
      })
    }), (0, a.jsx)("div", {
      className: I.actions,
      children: l ? (0, a.jsx)(h.default, {
        icon: c.default,
        className: I.actionDeny,
        tooltip: S.default.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: A
      }) : (0, a.jsxs)(a.Fragment, {
        children: [m ? null : (0, a.jsx)(h.default, {
          icon: d.default,
          className: I.actionAccept,
          tooltip: S.default.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: T
        }), (0, a.jsx)(h.default, {
          icon: c.default,
          className: I.actionDeny,
          tooltip: S.default.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: g
        })]
      })
    })]
  })
}