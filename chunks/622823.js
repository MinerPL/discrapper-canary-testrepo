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
  d = r("350151"),
  p = function(e) {
    var t = e.width,
      r = e.height,
      n = e.onChange,
      o = e.onSwatchHover,
      i = e.colors,
      f = e.hex,
      p = e.styles,
      h = e.className,
      b = (0, l.default)((0, s.default)({
        default: {
          picker: {
            width: t,
            height: r
          },
          overflow: {
            height: r,
            overflowY: "scroll"
          },
          body: {
            padding: "16px 0 6px 16px"
          },
          clear: {
            clear: "both"
          }
        }
      }, void 0 === p ? {} : p)),
      v = function(e, t) {
        return n({
          hex: e,
          source: "hex"
        }, t)
      };
    return a().createElement("div", {
      style: b.picker,
      className: "swatches-picker " + (void 0 === h ? "" : h)
    }, a().createElement(c.Raised, null, a().createElement("div", {
      style: b.overflow
    }, a().createElement("div", {
      style: b.body
    }, (0, u.default)(i, function(e) {
      return a().createElement(d.default, {
        key: e.toString(),
        group: e,
        active: f,
        onClick: v,
        onSwatchHover: o
      })
    }), a().createElement("div", {
      style: b.clear
    })))))
  };
p.propTypes = {
  width: i().oneOfType([i().string, i().number]),
  height: i().oneOfType([i().string, i().number]),
  colors: i().arrayOf(i().arrayOf(i().string)),
  styles: i().object
}, p.defaultProps = {
  width: 320,
  height: 240,
  colors: [
    [f.red["900"], f.red["700"], f.red["500"], f.red["300"], f.red["100"]],
    [f.pink["900"], f.pink["700"], f.pink["500"], f.pink["300"], f.pink["100"]],
    [f.purple["900"], f.purple["700"], f.purple["500"], f.purple["300"], f.purple["100"]],
    [f.deepPurple["900"], f.deepPurple["700"], f.deepPurple["500"], f.deepPurple["300"], f.deepPurple["100"]],
    [f.indigo["900"], f.indigo["700"], f.indigo["500"], f.indigo["300"], f.indigo["100"]],
    [f.blue["900"], f.blue["700"], f.blue["500"], f.blue["300"], f.blue["100"]],
    [f.lightBlue["900"], f.lightBlue["700"], f.lightBlue["500"], f.lightBlue["300"], f.lightBlue["100"]],
    [f.cyan["900"], f.cyan["700"], f.cyan["500"], f.cyan["300"], f.cyan["100"]],
    [f.teal["900"], f.teal["700"], f.teal["500"], f.teal["300"], f.teal["100"]],
    ["#194D33", f.green["700"], f.green["500"], f.green["300"], f.green["100"]],
    [f.lightGreen["900"], f.lightGreen["700"], f.lightGreen["500"], f.lightGreen["300"], f.lightGreen["100"]],
    [f.lime["900"], f.lime["700"], f.lime["500"], f.lime["300"], f.lime["100"]],
    [f.yellow["900"], f.yellow["700"], f.yellow["500"], f.yellow["300"], f.yellow["100"]],
    [f.amber["900"], f.amber["700"], f.amber["500"], f.amber["300"], f.amber["100"]],
    [f.orange["900"], f.orange["700"], f.orange["500"], f.orange["300"], f.orange["100"]],
    [f.deepOrange["900"], f.deepOrange["700"], f.deepOrange["500"], f.deepOrange["300"], f.deepOrange["100"]],
    [f.brown["900"], f.brown["700"], f.brown["500"], f.brown["300"], f.brown["100"]],
    [f.blueGrey["900"], f.blueGrey["700"], f.blueGrey["500"], f.blueGrey["300"], f.blueGrey["100"]],
    ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]
  ],
  styles: {}
}, (0, c.ColorWrap)(p)