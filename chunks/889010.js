"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("619271"),
  l = n("104259"),
  i = n("541561"),
  r = n("520030"),
  o = n("600394"),
  u = n("170039"),
  d = n("199202"),
  c = n("360048"),
  f = n("823379"),
  E = n("731455"),
  h = n("228726");
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
C.Icons = E.CategoryIcons, t.default = C