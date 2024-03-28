"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("476400"),
  i = r.n(o),
  l = r("844303"),
  u = r("329022"),
  s = r("707850"),
  f = r("705513"),
  c = r("464854"),
  d = r("544753"),
  p = function(e) {
    var t = e.width,
      r = e.onChange,
      n = e.onSwatchHover,
      o = e.colors,
      i = e.hex,
      f = e.circleSize,
      c = e.styles,
      p = e.circleSpacing,
      h = e.className,
      b = (0, l.default)((0, s.default)({
        default: {
          card: {
            width: t,
            display: "flex",
            flexWrap: "wrap",
            marginRight: -p,
            marginBottom: -p
          }
        }
      }, void 0 === c ? {} : c)),
      v = function(e, t) {
        return r({
          hex: e,
          source: "hex"
        }, t)
      };
    return a().createElement("div", {
      style: b.card,
      className: "circle-picker " + (void 0 === h ? "" : h)
    }, (0, u.default)(o, function(e) {
      return a().createElement(d.default, {
        key: e,
        color: e,
        onClick: v,
        onSwatchHover: n,
        active: i === e.toLowerCase(),
        circleSize: f,
        circleSpacing: p
      })
    }))
  };
p.propTypes = {
  width: i().oneOfType([i().string, i().number]),
  circleSize: i().number,
  circleSpacing: i().number,
  styles: i().object
}, p.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [f.red["500"], f.pink["500"], f.purple["500"], f.deepPurple["500"], f.indigo["500"], f.blue["500"], f.lightBlue["500"], f.cyan["500"], f.teal["500"], f.green["500"], f.lightGreen["500"], f.lime["500"], f.yellow["500"], f.amber["500"], f.orange["500"], f.deepOrange["500"], f.brown["500"], f.blueGrey["500"]],
  styles: {}
}, (0, c.ColorWrap)(p)