"use strict";
n.r(t);
var r = n("424706"),
  i = n("14160"),
  a = n("247123"),
  s = n("207662");
t.default = {
  id: "button-name",
  selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
  tags: ["wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
  metadata: {
    description: "Ensures buttons have discernible text",
    help: ""
  },
  check: function(e) {
    return "" !== (0, r.computeAccessibleName)(e) || (0, s.isARIAHidden)(e) || !(0, i.isVisible)(e) ? a.Pass : "button's accessible name is empty."
  }
}