"use strict";
s.r(t), s.d(t, {
  setIsSettingSearchActive: function() {
    return l
  },
  setSettingSearchQuery: function() {
    return n
  },
  useSettingSearchQuery: function() {
    return i
  }
});
let a = (0, s("652874").default)(() => ({
  query: "",
  isActive: !1,
  selected: null
}));

function n(e) {
  a.setState({
    query: e
  })
}

function l(e) {
  a.setState({
    isActive: e
  })
}

function i() {
  return a().query
}