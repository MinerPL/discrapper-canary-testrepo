"use strict";
n.r(t), n.d(t, {
  UserLinkAcceptedRequestRow: function() {
    return C
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("512722"),
  i = n.n(l),
  r = n("399606"),
  o = n("481060"),
  u = n("594174"),
  d = n("465670"),
  c = n("933970"),
  f = n("340453"),
  E = n("292352"),
  h = n("689938"),
  _ = n("970962");

function C(e) {
  let {
    user: t
  } = e, l = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = s.useCallback(() => {
    i()(void 0 !== l, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("50872")]).then(n.bind(n, "442673"));
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
        className: _.__invalid_actionDeny,
        tooltip: h.default.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: C
      })
    })]
  })
}