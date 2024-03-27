"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("416037"),
  i = r.n(o),
  u = r("849122"),
  l = r("882982"),
  s = function(e) {
    var t = e.zDepth,
      r = e.radius,
      n = e.background,
      o = e.children,
      i = e.styles,
      s = (0, u.default)((0, l.default)({
        default: {
          wrap: {
            position: "relative",
            display: "inline-block"
          },
          content: {
            position: "relative"
          },
          bg: {
            absolute: "0px 0px 0px 0px",
            boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
            borderRadius: r,
            background: n
          }
        },
        "zDepth-0": {
          bg: {
            boxShadow: "none"
          }
        },
        "zDepth-1": {
          bg: {
            boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
          }
        },
        "zDepth-2": {
          bg: {
            boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
          }
        },
        "zDepth-3": {
          bg: {
            boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
          }
        },
        "zDepth-4": {
          bg: {
            boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
          }
        },
        "zDepth-5": {
          bg: {
            boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
          }
        },
        square: {
          bg: {
            borderRadius: "0"
          }
        },
        circle: {
          bg: {
            borderRadius: "50%"
          }
        }
      }, void 0 === i ? {} : i), {
        "zDepth-1": 1 === t
      });
    return a.createElement("div", {
      style: s.wrap
    }, a.createElement("div", {
      style: s.bg
    }), a.createElement("div", {
      style: s.content
    }, o))
  };
s.propTypes = {
  background: i.string,
  zDepth: i.oneOf([0, 1, 2, 3, 4, 5]),
  radius: i.number,
  styles: i.object
}, s.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
};
var f = s