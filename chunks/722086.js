"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = {};

function _() {
  u = {}
}
class d extends(o = a.ZP.Store) {
  getNote(e) {
    return u[e]
  }
}
s = "NoteStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  CONNECTION_OPEN: _,
  OVERLAY_INITIALIZE: _,
  USER_NOTE_UPDATE: function(e) {
    u[e.id] = {
      loading: !1,
      note: e.note
    }
  },
  USER_NOTE_LOAD_START: function(e) {
    let {
      userId: t
    } = e;
    u[t] = {
      loading: !0,
      note: null
    }
  },
  USER_NOTE_LOADED: function(e) {
    let {
      userId: t,
      note: n
    } = e;
    u[t] = {
      loading: !1,
      note: null == n ? void 0 : n.note
    }
  }
})