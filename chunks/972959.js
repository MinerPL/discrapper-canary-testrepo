"use strict";
n.r(t), n("47120");
var r = n("485589"),
  i = n("424706"),
  a = n("14160"),
  s = n("247123"),
  l = n("207662");
let u = {
  id: "aria-allowed-attributes",
  selector: l.ARIA_ATTRIBUTE_SELECTOR,
  tags: ["wcag2a", "wcag412"],
  metadata: {
    description: "Only use supported ARIA attributes",
    help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page."
  },
  check: function(e) {
    let t = (0, i.getRole)(e),
      n = r.roles.get(t);
    if (null == n) return s.Pass;
    for (let r of l.ARIA_ATTRIBUTE_NAMES)
      if (e.hasAttribute(r) && !n.props.hasOwnProperty(r)) {
        if ("aria-expanded" === r && e.hasAttribute("aria-controls")) continue;
        if (!(0, a.isVisible)(e)) return s.Pass;
        return "'".concat(t, "' does not support the ").concat(r, " attribute")
      } return s.Pass
  }
};
t.default = u