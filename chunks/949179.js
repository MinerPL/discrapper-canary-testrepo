"use strict";
r.r(t);
var a = r("194649"),
  n = r("470079"),
  s = r.n(n),
  o = r("639519"),
  i = r.n(o),
  u = function(e) {
    var t = e.styling,
      r = e.arrowStyle,
      n = e.expanded,
      o = e.nodeType,
      i = e.onClick;
    return s().createElement("div", (0, a.default)({}, t("arrowContainer", r), {
      onClick: i
    }), s().createElement("div", t(["arrow", "arrowSign"], o, n, r), "▶", "double" === r && s().createElement("div", t(["arrowSign", "arrowSignInner"]), "▶")))
  };
u.propTypes = {
  styling: i().func.isRequired,
  arrowStyle: i().oneOf(["single", "double"]),
  expanded: i().bool.isRequired,
  nodeType: i().string.isRequired,
  onClick: i().func.isRequired
}, u.defaultProps = {
  arrowStyle: "single"
}, t.default = u