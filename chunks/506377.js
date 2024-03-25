"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("70614"),
  s = n("686470"),
  l = n("167726"),
  i = {
    init() {
      s.default.whenInitialized(() => {
        null != l.default.testModeApplicationId && (0, a.authorizeAndSetTestModeApplication)(l.default.testModeApplicationId, l.default.testModeOriginURL)
      })
    }
  }