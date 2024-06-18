"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(329022),
  u = n(829307),
  c = n(13942),
  l = n(464854),
  d = n(315876),
  f = n(49764),
  p = function(e) {
    var t = e.onChange,
      n = e.onSwatchHover,
      i = e.colors,
      a = e.hex,
      p = e.rgb,
      h = e.styles,
      m = void 0 === h ? {} : h,
      g = e.className,
      _ = (0, o.default)((0, u.Z)({
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
      }, m)),
      b = function(e, n) {
        e.hex ? c.FX(e.hex) && t({
          hex: e.hex,
          source: "hex"
        }, n) : t(e, n)
      };
    return r.createElement(l.xZ, {
      style: _.Compact,
      styles: m
    }, r.createElement("div", {
      style: _.compact,
      className: "compact-picker " + (void 0 === g ? "" : g)
    }, r.createElement("div", null, (0, s.Z)(i, function(e) {
      return r.createElement(d.Z, {
        key: e,
        color: e,
        active: e.toLowerCase() === a,
        onClick: b,
        onSwatchHover: n
      })
    }), r.createElement("div", {
      style: _.clear
    })), r.createElement(f.Z, {
      hex: a,
      rgb: p,
      onChange: b
    })))
  };
p.propTypes = {
  colors: a().arrayOf(a().string),
  styles: a().object
}, p.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
}, (0, l.t1)(p)