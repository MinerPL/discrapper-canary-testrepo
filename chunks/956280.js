"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("476400"),
  i = r.n(o),
  l = r("844303"),
  u = r("329022"),
  s = r("707850"),
  f = r("13942"),
  c = r("464854"),
  d = r("315876"),
  p = r("49764"),
  h = function(e) {
    var t = e.onChange,
      r = e.onSwatchHover,
      n = e.colors,
      o = e.hex,
      i = e.rgb,
      h = e.styles,
      b = void 0 === h ? {} : h,
      v = e.className,
      g = (0, l.default)((0, s.default)({
        default: {
          Compact: {
            background: "#f6f6f6",
            radius: "4px"
          },
          compact: {
            paddingTop: "5px",
            paddingLeft: "5px",
            boxSizing: "initial",
            width: "240px"
          },
          clear: {
            clear: "both"
          }
        }
      }, b)),
      x = function(e, r) {
        e.hex ? f.isValidHex(e.hex) && t({
          hex: e.hex,
          source: "hex"
        }, r) : t(e, r)
      };
    return a().createElement(c.Raised, {
      style: g.Compact,
      styles: b
    }, a().createElement("div", {
      style: g.compact,
      className: "compact-picker " + (void 0 === v ? "" : v)
    }, a().createElement("div", null, (0, u.default)(n, function(e) {
      return a().createElement(d.default, {
        key: e,
        color: e,
        active: e.toLowerCase() === o,
        onClick: x,
        onSwatchHover: r
      })
    }), a().createElement("div", {
      style: g.clear
    })), a().createElement(p.default, {
      hex: o,
      rgb: i,
      onChange: x
    })))
  };
h.propTypes = {
  colors: i().arrayOf(i().string),
  styles: i().object
}, h.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
}, (0, c.ColorWrap)(h)