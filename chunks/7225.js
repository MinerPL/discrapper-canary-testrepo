"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var i, l, r = n("735250"),
  a = n("470079"),
  s = n("442837"),
  o = n("481060"),
  u = n("241159"),
  d = n("496929"),
  c = n("558381"),
  f = n("728345"),
  p = n("812206"),
  m = n("886176"),
  g = n("238"),
  v = n("507608"),
  h = n("689938"),
  S = n("135143");

function C(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: l,
    subscriptionGroupListing: C
  } = e, x = (0, s.useStateFromStores)([p.default], () => p.default.getApplication(i), [i]), [T, L] = a.useState(() => p.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  }), R = a.useRef(null), [j, _] = a.useState(!0), b = () => {
    var e;
    (null === (e = R.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? _(!1) : _(!0)
  };
  a.useEffect(() => {
    0 === T.status && (L({
      status: 1
    }), f.default.fetchApplication(i).then(() => {
      L({
        status: 2
      })
    }).catch(e => {
      L({
        status: 3,
        error: e.message
      })
    }))
  }, [i, T.status]);
  let I = (0, s.useStateFromStores)([g.default], () => g.default.getStoreLayout(i), [i]);
  if (a.useEffect(() => {
      (0, u.fetchStoreDirectoryLayout)(i), (0, c.fetchAllStoreListingsForApplication)(i)
    }, [i]), a.useEffect(() => {
      (0, d.fetchUserEntitlementsForApplication)(i, !1)
    }, [i]), null == x) return null;
  let y = h.default.Messages.STOREFRONT_TITLE.format({
    appName: x.name
  });
  return (0, r.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": y,
    size: o.ModalSize.DYNAMIC,
    className: S.modal,
    children: [(0, r.jsxs)(o.ModalHeader, {
      className: S.modalHeader,
      children: [(0, r.jsxs)("div", {
        className: S.modalTitle,
        children: [(0, r.jsx)(m.default, {}), (0, r.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: y
        })]
      }), (0, r.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: S.modalCloseBtn
      })]
    }), (0, r.jsx)(o.ModalContent, {
      scrollerRef: e => {
        null != e && (R.current = e, b())
      },
      onScroll: b,
      children: (0, r.jsx)(v.default, {
        app: x,
        subscriptionGroupListing: C,
        guildId: l,
        storeLayout: I
      })
    }), (0, r.jsx)("div", {
      className: S.containerScrollGradient,
      "data-shown": j
    })]
  })
}(l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR"