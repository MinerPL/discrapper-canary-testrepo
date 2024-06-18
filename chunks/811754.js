"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(329022),
  u = n(829307),
  c = n(705513),
  l = n(464854),
  d = n(544753),
  f = function(e) {
    var t = e.width,
      n = e.onChange,
      i = e.onSwatchHover,
      a = e.colors,
      c = e.hex,
      l = e.circleSize,
      f = e.styles,
      p = e.circleSpacing,
      h = e.className,
      m = (0, o.default)((0, u.Z)({
        default: {
          card: {
            width: t,
            display: "flex",
            flexWrap: "wrap",
            marginRight: -p,
            marginBottom: -p
          }
        }
      }, void 0 === f ? {} : f)),
      g = function(e, t) {
        return n({
          hex: e,
          source: "hex"
        }, t)
      };
    return r.createElement("div", {
      style: m.card,
      className: "circle-picker " + (void 0 === h ? "" : h)
    }, (0, s.Z)(a, function(e) {
      return r.createElement(d.Z, {
        key: e,
        color: e,
        onClick: g,
        onSwatchHover: i,
        active: c === e.toLowerCase(),
        circleSize: l,
        circleSpacing: p
      })
    }))
  };
f.propTypes = {
  width: a().oneOfType([a().string, a().number]),
  circleSize: a().number,
  circleSpacing: a().number,
  styles: a().object
}, f.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [c.Q6["500"], c.iQ["500"], c.jk["500"], c.vq["500"], c.QN["500"], c.iN["500"], c.f7["500"], c.sl["500"], c.$C["500"], c.ek["500"], c.ZE["500"], c.LR["500"], c.er["500"], c.Dz["500"], c.$y["500"], c.bK["500"], c.P_["500"], c.BU["500"]],
  styles: {}
}, (0, l.t1)(f)