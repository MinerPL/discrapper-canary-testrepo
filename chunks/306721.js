"use strict";
n.r(t);
var a = n("401430"),
  s = n("283595"),
  l = n("695103");
t.default = {
  init() {
    s.default.whenInitialized(() => {
      null != l.default.testModeApplicationId && (0, a.authorizeAndSetTestModeApplication)(l.default.testModeApplicationId, l.default.testModeOriginURL)
    })
  }
}