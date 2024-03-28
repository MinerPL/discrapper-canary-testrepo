"use strict";
n.r(t), n.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return l
  },
  default: function() {
    return i
  }
});
var s = n("726542"),
  a = n("973616");
let l = "xbox:";
class i extends a.default {
  getIconURL() {
    return s.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(l).concat(e.name), this.name = e.name
  }
}