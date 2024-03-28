"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("411104");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("873199"),
  c = l("442837"),
  o = l("857192"),
  d = l("674588"),
  u = l("368862"),
  p = l("927356"),
  _ = l("125909"),
  m = l("185156"),
  f = l("87528"),
  h = l("57348"),
  C = l("438463");

function g() {
  let e = (0, c.useStateFromStores)([o.default], () => o.default.appDirectoryIncludesInactiveCollections),
    t = (0, c.useStateFromStores)([u.default], () => u.default.getFetchState({
      includesInactive: e
    })),
    l = (0, c.useStateFromStores)([u.default], () => u.default.getCollections({
      includesInactive: e
    }));
  return (a.useEffect(() => {
    d.getCollections({
      includesInactive: e
    })
  }, [e]), t === u.FetchState.ERROR) ? (0, i.jsx)(p.default, {}) : (0, i.jsx)(_.default, {
    loading: t === u.FetchState.FETCHING,
    children: null == l ? void 0 : l.map((e, t) => {
      let a;
      let n = t > 0 && l[t - 1].type !== r.ApplicationDirectoryCollectionType.GALLERY;
      switch (e.type) {
        case r.ApplicationDirectoryCollectionType.LIST:
          a = (0, i.jsx)(f.default, {
            collection: e
          });
          break;
        case r.ApplicationDirectoryCollectionType.LIST_WITH_IMAGE:
          a = (0, i.jsx)(h.default, {
            collection: e
          });
          break;
        case r.ApplicationDirectoryCollectionType.GALLERY:
          a = (0, i.jsx)(m.default, {
            collection: e
          });
          break;
        default:
          return null
      }
      return (0, i.jsx)("div", {
        className: s()({
          [C.topMargin]: n
        }),
        children: a
      }, e.id)
    })
  })
}