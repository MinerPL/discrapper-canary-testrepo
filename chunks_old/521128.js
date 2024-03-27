"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("446674"),
  s = n("913144");
let l = {},
  i = null;

function r() {
  l = {}, i = null
}
class o extends a.default.Store {
  getEmailSettings() {
    return {
      categories: l,
      initialized: i
    }
  }
}
o.displayName = "EmailSettingsStore";
var u = new o(s.default, {
  CONNECTION_OPEN: r,
  LOGOUT: r,
  EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    l = t.categories, i = t.initialized
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    l = t.categories
  },
  EMAIL_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    l = {
      ...l,
      ...t
    }
  }
})