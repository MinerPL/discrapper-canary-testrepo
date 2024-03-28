"use strict";
n.r(t), n("47120"), n("724458"), n("653041");
var r = n("485589"),
  i = n("424706"),
  a = n("14160"),
  s = n("247123");
let l = "button, a, ".concat(Array.from(r.roles.entries()).reduce((e, t) => {
  let [n, r] = t;
  return !0 === r.childrenPresentational && e.push('[role="'.concat(n, '"]')), e
}, []).join(", "));
t.default = {
  id: "nested-interactive",
  selector: l,
  tags: [],
  metadata: {
    description: "Interactive controls must not be nested",
    help: "Nested focusable elements are inaccessible to screen readers"
  },
  check: function(e) {
    return ! function(e) {
      let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT),
        n = t.nextNode();
      for (; null !== n;) {
        if (n !== e && function(e) {
            switch (e.nodeName) {
              case "IFRAME":
              case "EMBED":
              case "DETAILS":
              case "LABEL":
                return !0;
              case "INPUT":
                return "hidden" !== e.getAttribute("type")
            }
            return function(e) {
              switch ((0, i.getRole)(e)) {
                case "link":
                  return e.hasAttribute("href");
                case "audio":
                  return e.hasAttribute("controls");
                case "img":
                  return e.hasAttribute("usemap");
                case "button":
                  return !0;
                default:
                  return !1
              }
            }(e)
          }(n)) return !1;
        n = t.nextNode()
      }
      return !0
    }(e) && (0, a.isVisible)(e) ? "Nested interactive element" : s.Pass
  }
}