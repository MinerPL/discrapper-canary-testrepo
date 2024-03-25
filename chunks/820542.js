"use strict";
n.r(t), n.d(t, {
  categoryCollapse: function() {
    return i
  },
  categoryExpand: function() {
    return l
  },
  categoryCollapseAll: function() {
    return u
  },
  categoryExpandAll: function() {
    return s
  }
});
var a = n("913144");

function i(e) {
  a.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function l(e) {
  a.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function u(e) {
  a.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function s(e) {
  a.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}