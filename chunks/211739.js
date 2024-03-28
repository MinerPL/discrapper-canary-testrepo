"use strict";
n.r(t), n.d(t, {
  categoryCollapse: function() {
    return a
  },
  categoryCollapseAll: function() {
    return l
  },
  categoryExpand: function() {
    return s
  },
  categoryExpandAll: function() {
    return u
  }
});
var i = n("570140");

function a(e) {
  i.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function s(e) {
  i.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function l(e) {
  i.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function u(e) {
  i.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}