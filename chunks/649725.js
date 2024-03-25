"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983");
n("884691");
var s = n("316887"),
  l = n("627490"),
  i = n("447853"),
  r = n("517425"),
  o = n("709071"),
  u = n("228427"),
  d = n("855670"),
  c = n("11056"),
  f = n("449008"),
  E = n("447621"),
  h = n("791666");
let _ = e => {
    switch (e) {
      case E.CategoryIcons.Activity:
        return (0, a.jsx)(s.default, {});
      case E.CategoryIcons.Discover:
        return (0, a.jsx)(l.default, {});
      case E.CategoryIcons.Education:
        return (0, a.jsx)(i.default, {});
      case E.CategoryIcons.Music:
        return (0, a.jsx)(r.default, {});
      case E.CategoryIcons.Science:
        return (0, a.jsx)(o.default, {});
      case E.CategoryIcons.Stage:
        return (0, a.jsx)(u.default, {
          height: 22,
          width: 22
        });
      case E.CategoryIcons.Television:
        return (0, a.jsx)(d.default, {});
      default:
        (0, f.assertNever)(e)
    }
  },
  C = e => {
    let {
      categories: t,
      currentCategoryId: n,
      handleCategorySelect: s,
      shouldDisplaySelectedCategory: l = !0
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(c.default, {
        avatar: _(e.icon),
        name: e.name,
        focusProps: {
          offset: {
            right: 4,
            top: 1,
            bottom: 1
          }
        },
        onClick: () => s(e.categoryId),
        wrapContent: !0,
        selected: l && e.categoryId === n,
        className: h.categoryItem,
        selectedClassName: h.selectedCategoryItem,
        innerClassName: h.itemInner
      }, e.categoryId))
    })
  };
C.Icons = E.CategoryIcons;
var S = C