"use strict";
n.r(t), n.d(t, {
  UserLinkPendingRequestRow: function() {
    return I
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("512722"),
  i = n.n(l),
  r = n("399606"),
  o = n("481060"),
  u = n("594174"),
  d = n("263704"),
  c = n("465670"),
  f = n("880257"),
  E = n("631885"),
  h = n("933970"),
  _ = n("340453"),
  C = n("292352"),
  m = n("689938"),
  S = n("970962");

function I(e) {
  let {
    user: t
  } = e, l = (0, f.default)(), I = (0, E.useHasMaxConnections)(), p = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), T = s.useCallback(() => {
    i()(void 0 !== p, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("59716")]).then(n.bind(n, "275370"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]), g = s.useCallback(() => {
    i()(void 0 !== p, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("958")]).then(n.bind(n, "4526"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]), A = s.useCallback(() => {
    i()(void 0 !== p, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("69015")]).then(n.bind(n, "247265"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]);
  return (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsx)("div", {
      className: S.details,
      children: (0, a.jsx)(_.default, {
        otherUser: t,
        status: C.UserLinkStatus.PENDING
      })
    }), (0, a.jsx)("div", {
      className: S.actions,
      children: l ? (0, a.jsx)(h.default, {
        icon: c.default,
        className: S.__invalid_actionDeny,
        tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: A
      }) : (0, a.jsxs)(a.Fragment, {
        children: [I ? null : (0, a.jsx)(h.default, {
          icon: d.default,
          className: S.__invalid_actionAccept,
          tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: T
        }), (0, a.jsx)(h.default, {
          icon: c.default,
          className: S.__invalid_actionDeny,
          tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: g
        })]
      })
    })]
  })
}