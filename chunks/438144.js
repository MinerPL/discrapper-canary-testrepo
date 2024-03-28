"use strict";
n.r(t), n.d(t, {
  voiceCategoryCollapse: function() {
    return s
  },
  voiceCategoryExpand: function() {
    return a
  }
});
var l = n("570140");

function a(e) {
  l.default.dispatch({
    type: "VOICE_CATEGORY_EXPAND",
    guildId: e,
    expand: !0
  })
}

function s(e) {
  l.default.dispatch({
    type: "VOICE_CATEGORY_COLLAPSE",
    guildId: e,
    expand: !1
  })
}