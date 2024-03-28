"use strict";
n.r(t);
var r = n("424706"),
  i = n("14160"),
  a = n("247123"),
  s = n("207662");
t.default = {
  id: "alt-text",
  selector: 'img, [role="img"]',
  tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
  metadata: {
    description: "Images must have alternative text.",
    help: ""
  },
  check: function(e) {
    if ("" === (0, r.computeAccessibleName)(e)) return "IMG" === e.tagName && e.hasAttribute("alt") || (0, s.isARIAHidden)(e) || !(0, i.isVisible)(e) ? a.Pass : "Image has no alternative text";
    return a.Pass
  }
}