"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var i, r, l = n("735250"),
  s = n("470079"),
  a = n("442837"),
  o = n("481060"),
  d = n("241159"),
  c = n("496929"),
  u = n("558381"),
  f = n("728345"),
  m = n("812206"),
  p = n("886176"),
  h = n("238"),
  S = n("507608"),
  v = n("689938"),
  g = n("503744");

function x(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: r,
    subscriptionGroupListing: x
  } = e, T = (0, a.useStateFromStores)([m.default], () => m.default.getApplication(i)), [C, E] = s.useState(() => m.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  }), j = s.useRef(null), [N, _] = s.useState(!0), I = () => {
    var e;
    (null === (e = j.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? _(!1) : _(!0)
  };
  s.useEffect(() => {
    0 === C.status && (E({
      status: 1
    }), f.default.fetchApplication(i).then(() => {
      E({
        status: 2
      })
    }).catch(e => {
      E({
        status: 3,
        error: e.message
      })
    }))
  }, [i, C.status]);
  let L = (0, a.useStateFromStores)([h.default], () => h.default.getStoreLayout(i), [i]);
  if (s.useEffect(() => {
      (0, d.fetchStoreDirectoryLayout)(i), (0, u.fetchAllStoreListingsForApplication)(i)
    }, [i]), s.useEffect(() => {
      (0, c.fetchUserEntitlementsForApplication)(i, !1)
    }, [i]), null == T) return null;
  let R = v.default.Messages.STOREFRONT_TITLE.format({
    appName: T.name
  });
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": R,
    size: o.ModalSize.DYNAMIC,
    className: g.modal,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: g.modalHeader,
      children: [(0, l.jsxs)("div", {
        className: g.modalTitle,
        children: [(0, l.jsx)(p.default, {}), (0, l.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: R
        })]
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: g.modalCloseBtn
      })]
    }), (0, l.jsx)(o.ModalContent, {
      scrollerRef: e => {
        null != e && (j.current = e, I())
      },
      onScroll: I,
      children: (0, l.jsx)(S.default, {
        app: T,
        subscriptionGroupListing: x,
        guildId: r,
        storeLayout: L
      })
    }), (0, l.jsx)("div", {
      className: g.containerScrollGradient,
      "data-shown": N
    })]
  })
}(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR"