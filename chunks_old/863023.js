"use strict";
n.r(t), n.d(t, {
  UserLinkAcceptedRequestRow: function() {
    return C
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("65597"),
  o = n("77078"),
  u = n("697218"),
  d = n("945330"),
  c = n("768815"),
  f = n("176661"),
  E = n("922832"),
  h = n("782340"),
  _ = n("840408");

function C(e) {
  let {
    user: t
  } = e, l = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = s.useCallback(() => {
    i(void 0 !== l, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("127563").then(n.bind(n, "127563"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: l,
        otherUser: t
      })
    })
  }, [l, t]);
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsx)("div", {
      className: _.details,
      children: (0, a.jsx)(f.default, {
        otherUser: t,
        status: E.UserLinkStatus.ACTIVE
      })
    }), (0, a.jsx)("div", {
      className: _.actions,
      children: (0, a.jsx)(c.default, {
        icon: d.default,
        className: _.actionDeny,
        tooltip: h.default.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: C
      })
    })]
  })
}