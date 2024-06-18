"use strict";
n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var i = n(512722),
  r = n.n(i),
  s = n(129508),
  o = n(921608),
  a = n(693824);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends s.Z {
  getCanvasForExport() {
    return this.canvas
  }
  setContextProperties() {
    null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = "".concat(this.font.style, " ").concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family.join(", ")))
  }
  setSize(e, t) {
    let {
      w: n,
      h: i
    } = e;
    null != this.context && null != t ? (this.canvas.width = n * t, this.canvas.height = i * t, this.context.scale(t, t)) : (this.canvas.width = n, this.canvas.height = i)
  }
  clearRect(e) {
    if (null == this.context) return;
    let {
      x: t,
      y: n,
      w: i,
      h: r
    } = e;
    this.context.clearRect(t, n, i, r)
  }
  restoreContext() {
    null != this.context && this.context.restore()
  }
  drawRect(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == this.context) return;
    let {
      x: i,
      y: r,
      w: s,
      h: o
    } = e;
    n && this.setContextProperties(), t ? this.context.fillRect(i, r, s, o) : this.context.strokeRect(i, r, s, o)
  }
  drawRoundedRect(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (null == this.context) return;
    let {
      x: r,
      y: s,
      w: o,
      h: a
    } = e;
    i && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(r, s, o, a, t), n ? this.context.fill() : this.context.stroke()
  }
  drawText(e, t, n) {
    var i, s;
    if (null == this.context) return;
    this.setContextProperties();
    let l = null !== (i = t.w) && void 0 !== i ? i : this.canvas.width - t.x,
      u = this.context.measureText(e),
      _ = !1,
      d = this.font.size,
      c = (e, t) => {
        null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y))
      },
      E = e => {
        if (null == this.context || u.width <= o.F) return "";
        let t = "".concat(e);
        for (; u.width + o.F > l;) t = t.slice(0, -4), u = this.context.measureText(t), _ = !0;
        return _ && (t += "..."), t
      };
    if (this.font.truncate === a.GX.None && c(e, t), this.font.truncate === a.GX.Truncate && c(e = E(e), t), this.font.truncate === a.GX.Wrap) {
      let n = e.split(" "),
        i = 1 / 0,
        o = "",
        a = 0;
      for (null != t.h && (i = t.h / d, r()(i > 0, "DiscordCavas: boundingBox.h of ".concat(t.h, " results in 0 visible lines with font size of ").concat(d))); n.length > 0;)
        if ((u = this.context.measureText(o + " " + n[0])).width > l) {
          let e = !1;
          if (a + 1 >= i && n.length > 0 && (e = !0), "" !== o ? (c(e ? E(o + "...") : o, {
              x: t.x,
              y: t.y + d * a
            }), o = "") : c(E(null !== (s = n.shift()) && void 0 !== s ? s : ""), {
              x: t.x,
              y: t.y + d * a
            }), e) break;
          a += 1
        } else o += " ".concat(n.shift()), 0 === n.length && c(o, {
          x: t.x,
          y: t.y + d * a
        })
    }
    return {
      x: t.x,
      y: t.y,
      w: u.width,
      h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent
    }
  }
  drawFormattedMessage(e, t, n) {
    this.font.truncate === a.GX.Wrap && console.warn("DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.");
    let i = this.font.weight,
      r = (e, t, n) => {
        let r;
        if ("strong" === e.type) this.setFont({
          weight: 700
        });
        return Array.isArray(e.content) ? r = s(e.content, t, n) : r = this.drawText(e.content, t, n), this.setFont({
          weight: i
        }), r
      },
      s = (e, t, n) => {
        let i = 0;
        return e.forEach(e => {
          let {
            x: s,
            y: o,
            w: a,
            h: l
          } = t, u = null != a ? a - i : void 0, _ = r(e, {
            x: s + i,
            y: o,
            w: u,
            h: l
          }, n);
          null != _ && (i += _.w)
        }), {
          x: t.x + i,
          y: t.y,
          w: i,
          h: this.font.size
        }
      };
    Array.isArray(e) ? s(e, t, n) : r(e, t, n)
  }
  drawImage(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
      fillMode: a.JU.Stretch
    };
    r()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
    let {
      fillMode: s
    } = i;
    if (null == this.context) return a.vP.Failure;
    let o = this.assetMap.get(e);
    if (null == o) return a.vP.ImageNotLoaded;
    if (null != n) {
      if (s === a.JU.Contain) {
        let i;
        let r = {
            w: o.width,
            h: o.height
          },
          s = +(r.w / r.h).toFixed(1);
        if (+(n.w / n.h).toFixed(1) > s) {
          let e = n.h * s;
          i = {
            x: t.x + (n.w - e) / 2,
            y: t.y,
            w: e,
            h: n.h
          }
        } else {
          let e = n.w / s;
          i = {
            x: t.x,
            y: t.y + (n.h - e) / 2,
            w: n.w,
            h: e
          }
        }
        return this.drawCroppedImage(e, {
          x: 0,
          y: 0,
          w: r.w,
          h: r.h
        }, {
          x: i.x,
          y: i.y,
          w: i.w,
          h: i.h
        }), a.vP.Success
      }
      if (s === a.JU.Cover) {
        var l, u, _, d;
        let r;
        let s = {
            w: o.width,
            h: o.height
          },
          c = +(s.w / s.h).toFixed(1),
          E = +(n.w / n.h).toFixed(1);
        if (E > c) {
          let e = s.w / E;
          r = {
            x: 0,
            y: (s.h - e) * (null !== (u = null == i ? void 0 : null === (l = i.focus) || void 0 === l ? void 0 : l.y) && void 0 !== u ? u : .5),
            w: o.width,
            h: e
          }
        } else {
          let e = s.h * E;
          r = {
            x: (o.width - e) * (null !== (d = null == i ? void 0 : null === (_ = i.focus) || void 0 === _ ? void 0 : _.x) && void 0 !== d ? d : .5),
            y: 0,
            w: e,
            h: o.height
          }
        }
        return this.drawCroppedImage(e, r, {
          x: t.x,
          y: t.y,
          w: n.w,
          h: n.h
        }), a.vP.Success
      }
      this.context.drawImage(o, t.x, t.y, n.w, n.h)
    } else this.context.drawImage(o, t.x, t.y);
    return a.vP.Success
  }
  drawRoundedImage(e, t, n, i, r) {
    if (null == this.context) return a.vP.Failure;
    let {
      x: s,
      y: o
    } = t, {
      w: l,
      h: u
    } = n;
    this.context.save();
    let _ = new Path2D;
    _.roundRect(s, o, l, u, i), this.context.clip(_);
    let d = this.drawImage(e, t, n, r);
    return this.restoreContext(), d
  }
  drawCroppedImage(e, t, n) {
    var i;
    if (null == this.context) return a.vP.Failure;
    let r = null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(e);
    if (null == r) return a.vP.ImageNotLoaded;
    let {
      x: s,
      y: o,
      w: l,
      h: u
    } = t, {
      x: _,
      y: d,
      w: c,
      h: E
    } = n;
    return this.context.drawImage(r, s, o, l, u, _, d, c, E), a.vP.Success
  }
  drawPath(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    if (null == this.context) return a.vP.Failure;
    this.setContextProperties(), this.context.save();
    let r = new Path2D(e);
    return this.context.translate(t.x, t.y), this.context.scale(i, i), n ? this.context.fill(r, "evenodd") : this.context.stroke(r), this.restoreContext(), a.vP.Success
  }
  setGradientFillStyle(e, t, n) {
    if (null == this.context) return;
    let i = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
    for (let {
        color: t,
        stop: n
      }
      of e) i.addColorStop(n, t);
    this.context.fillStyle = i
  }
  drawGradientRect(e, t, n, i) {
    return null == this.context ? a.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRect(i, !0, !1), a.vP.Success)
  }
  drawRoundedGradientRect(e, t, n, i, r) {
    return null == this.context ? a.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(i, r, !0, !1), a.vP.Success)
  }
  clip(e, t) {
    if (null == this.context) return;
    this.context.save();
    let {
      x: n,
      y: i
    } = e, r = new Path2D(t);
    this.context.translate(n, i), this.context.clip(r)
  }
  clipRect(e, t) {
    if (null == this.context) return;
    this.context.save();
    let {
      x: n,
      y: i,
      w: r,
      h: s
    } = e;
    if (t) {
      let e = new Path2D;
      e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.rect(n, i, r, s), this.context.clip(e, "evenodd")
    } else {
      let e = new Path2D;
      e.rect(n, i, r, s), this.context.clip(e)
    }
  }
  clipRoundedRect(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null == this.context) return;
    this.context.save();
    let {
      x: i,
      y: r,
      w: s,
      h: o
    } = e;
    if (n) {
      let e = new Path2D;
      e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.roundRect(i, r, s, o, t), this.context.clip(e, "evenodd")
    } else {
      let e = new Path2D;
      e.roundRect(i, r, s, o, t), this.context.clip(e)
    }
  }
  constructor(e, t) {
    super(e, t), l(this, "canvas", void 0), l(this, "context", void 0), this.canvas = e, this.context = this.canvas.getContext("2d"), null != this.context && (this.context.imageSmoothingQuality = "high")
  }
}