"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var s, i, l = n("37983"),
  r = n("884691"),
  a = n("446674"),
  o = n("77078"),
  c = n("55620"),
  d = n("651057"),
  u = n("299285"),
  f = n("907038"),
  h = n("552712"),
  m = n("131233"),
  x = n("49111"),
  v = n("782340"),
  p = n("454436");

function g(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: s,
    guildId: i,
    subscriptionGroupListing: g
  } = e, j = (0, a.useStateFromStores)([u.default], () => u.default.getApplication(s)), [C, S] = r.useState(() => {
    let e = u.default.isFetchingApplication(s);
    return e ? {
      status: 1
    } : {
      status: 0
    }
  });
  r.useEffect(() => {
    0 === C.status && (S({
      status: 1
    }), d.default.fetchApplication(s).then(() => {
      S({
        status: 2
      })
    }).catch(e => {
      S({
        status: 3,
        error: e.message
      })
    }))
  }, [s, C.status]);
  let T = (0, a.useStateFromStoresArray)([h.default], () => h.default.getForApplication(s).filter(e => {
    switch (e.type) {
      case x.SKUTypes.DURABLE:
      case x.SKUTypes.CONSUMABLE:
        return !0;
      default:
        return !1
    }
  }), [s]);
  if (r.useEffect(() => {
      (0, c.fetchAllStoreListingsForApplication)(s)
    }, [s]), null == j) return null;
  let N = v.default.Messages.STOREFRONT_TITLE.format({
    appName: j.name
  });
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": N,
    size: o.ModalSize.DYNAMIC,
    className: p.modal,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: p.modalHeader,
      children: [(0, l.jsxs)("div", {
        className: p.modalTitle,
        children: [(0, l.jsx)(f.default, {}), (0, l.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: N
        })]
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t
      })]
    }), (0, l.jsx)(o.ModalContent, {
      children: (0, l.jsx)(m.default, {
        app: j,
        subscriptionGroupListing: g,
        guildId: i,
        products: T
      })
    })]
  })
}(i = s || (s = {}))[i.NONE = 0] = "NONE", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR"