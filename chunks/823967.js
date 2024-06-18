"use strict";
var i = n(570140);
t.Z = class e {
  static setPermission(e, t) {
    i.Z.dispatch({
      type: "SET_NATIVE_PERMISSION",
      permissionType: e,
      state: t
    })
  }
}