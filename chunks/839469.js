"use strict";
s.r(t), s.d(t, {
  useSettingSearchResults: function() {
    return l
  }
}), s("47120");
var a = s("470079"),
  n = s("170401"),
  i = s("128277"),
  r = s("394644"),
  u = s("726985");

function l() {
  let e = (0, i.useSettingSearchQuery)(),
    t = (0, r.useGenerateUserSettingsSections)(),
    s = a.useRef(new n.default((0, r.getSearchableSettingTitles)(t))),
    [l, o] = a.useState(!1),
    [c, d] = a.useState(u.EMPTY_SETTINGS_LIST),
    f = a.useCallback(async e => {
      d(await s.current.search(e.trim())), o(!0)
    }, []);
  return a.useEffect(() => {
    "" === e ? (d(u.EMPTY_SETTINGS_LIST), o(!1)) : f(e)
  }, [e, f]), {
    hasSearchResults: l,
    searchResults: c
  }
}