"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303");
t.default = function(e) {
  var t = e.onClick,
    r = e.label,
    n = e.children,
    i = e.active,
    l = (0, o.default)({
      default: {
        button: {
          backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
          border: "1px solid #878787",
          borderRadius: "2px",
          height: "20px",
          boxShadow: "0 1px 0 0 #EAEAEA",
          fontSize: "14px",
          color: "#000",
          lineHeight: "20px",
          textAlign: "center",
          marginBottom: "10px",
          cursor: "pointer"
        }
      },
      active: {
        button: {
          boxShadow: "0 0 0 1px #878787"
        }
      }
    }, {
      active: i
    });
  return a().createElement("div", {
    style: l.button,
    onClick: t
  }, r || n)
}