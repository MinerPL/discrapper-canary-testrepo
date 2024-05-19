"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("461745"),
  i = s("128277"),
  r = s("689938");

function o() {
  let e = (0, i.useSettingSearchQuery)(),
    t = n.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), (0, i.setIsSettingSearchActive)(e)
    }, []),
    s = n.useCallback(() => {
      (0, i.setIsSettingSearchActive)(!1), (0, i.setSettingSearchQuery)("")
    }, []);
  return (0, a.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, a.jsx)(l.default, {
      size: l.default.Sizes.MEDIUM,
      query: e,
      onClear: s,
      onQueryChange: i.setSettingSearchQuery,
      placeholder: r.default.Messages.SEARCH,
      inputProps: {
        "aria-label": r.default.Messages.USER_SETTINGS_SEARCH_BAR,
        "aria-expanded": !0,
        onFocus: e => t(!0, e),
        onBlur: e => t(!1, e)
      }
    })
  })
}