"use strict";
n.r(t);
var r = n("424706"),
  i = n("14160"),
  a = n("247123"),
  s = n("207662");
t.default = {
  id: "input-label",
  selector: 'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
  tags: ["wcag2a", "wcag131", "wcag412", "section508", "section508.22.a", "ACT"],
  metadata: {
    description: "Form inputs require a label",
    help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby."
  },
  check: function(e) {
    if ("" === (0, r.computeAccessibleName)(e)) return (0, s.isARIAHidden)(e) || !(0, i.isVisible)(e) ? a.Pass : "Form input has no label";
    return a.Pass
  }
}