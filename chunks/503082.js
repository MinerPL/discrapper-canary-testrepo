n.d(t, {
    Z: function () {
        return u;
    }
}), n(47120);
var r = n(512722), i = n.n(r), a = n(129508), o = n(921608), s = n(693824);
function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class u extends a.Z {
    getCanvasForExport() {
        return this.canvas;
    }
    setContextProperties() {
        null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = ''.concat(this.font.style, ' ').concat(this.font.weight, ' ').concat(this.font.size, 'px ').concat(this.font.family.join(', ')));
    }
    setSize(e, t) {
        let {
            w: n,
            h: r
        } = e;
        null != this.context && null != t ? (this.canvas.width = n * t, this.canvas.height = r * t, this.context.scale(t, t)) : (this.canvas.width = n, this.canvas.height = r);
    }
    clearRect(e) {
        if (null == this.context)
            return;
        let {
            x: t,
            y: n,
            w: r,
            h: i
        } = e;
        this.context.clearRect(t, n, r, i);
    }
    restoreContext() {
        null != this.context && this.context.restore();
    }
    drawRect(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == this.context)
            return;
        let {
            x: r,
            y: i,
            w: a,
            h: o
        } = e;
        n && this.setContextProperties(), t ? this.context.fillRect(r, i, a, o) : this.context.strokeRect(r, i, a, o);
    }
    drawRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context)
            return;
        let {
            x: i,
            y: a,
            w: o,
            h: s
        } = e;
        r && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(i, a, o, s, t), n ? this.context.fill() : this.context.stroke();
    }
    drawText(e, t, n) {
        var r, a;
        if (null == this.context)
            return;
        this.setContextProperties();
        let l = null !== (r = t.w) && void 0 !== r ? r : this.canvas.width - t.x, u = this.context.measureText(e), c = !1, d = this.font.size, _ = (e, t) => {
                null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y));
            }, E = e => {
                if (null == this.context || u.width <= o.F)
                    return '';
                let t = ''.concat(e);
                for (; u.width + o.F > l;)
                    t = t.slice(0, -4), u = this.context.measureText(t), c = !0;
                return c && (t += '...'), t;
            };
        if (this.font.truncate === s.GX.None && _(e, t), this.font.truncate === s.GX.Truncate && _(e = E(e), t), this.font.truncate === s.GX.Wrap) {
            let n = e.split(' '), r = 1 / 0, o = '', s = 0;
            for (null != t.h && (r = t.h / d, i()(r > 0, 'DiscordCavas: boundingBox.h of '.concat(t.h, ' results in 0 visible lines with font size of ').concat(d))); n.length > 0;)
                if ((u = this.context.measureText(o + ' ' + n[0])).width > l) {
                    let e = !1;
                    if (s + 1 >= r && n.length > 0 && (e = !0), '' !== o ? (_(e ? E(o + '...') : o, {
                            x: t.x,
                            y: t.y + d * s
                        }), o = '') : _(E(null !== (a = n.shift()) && void 0 !== a ? a : ''), {
                            x: t.x,
                            y: t.y + d * s
                        }), e)
                        break;
                    s += 1;
                } else
                    o += ' '.concat(n.shift()), 0 === n.length && _(o, {
                        x: t.x,
                        y: t.y + d * s
                    });
        }
        return {
            x: t.x,
            y: t.y,
            w: u.width,
            h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent
        };
    }
    drawFormattedMessage(e, t, n) {
        this.font.truncate === s.GX.Wrap && console.warn('DiscordCavas: `drawFormattedMessage` doesn\'t currently support wrapping formatted text. The results of this draw likely won\'t match your expectations.');
        let r = this.font.weight, i = (e, t, n) => {
                let i;
                if ('strong' === e.type)
                    this.setFont({ weight: 700 });
                return Array.isArray(e.content) ? i = a(e.content, t, n) : i = this.drawText(e.content, t, n), this.setFont({ weight: r }), i;
            }, a = (e, t, n) => {
                let r = 0;
                return e.forEach(e => {
                    let {
                            x: a,
                            y: o,
                            w: s,
                            h: l
                        } = t, u = null != s ? s - r : void 0, c = i(e, {
                            x: a + r,
                            y: o,
                            w: u,
                            h: l
                        }, n);
                    null != c && (r += c.w);
                }), {
                    x: t.x + r,
                    y: t.y,
                    w: r,
                    h: this.font.size
                };
            };
        Array.isArray(e) ? a(e, t, n) : i(e, t, n);
    }
    drawImage(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: s.JU.Stretch };
        i()(null != this.assetMap, 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.');
        let {fillMode: a} = r;
        if (null == this.context)
            return s.vP.Failure;
        let o = this.assetMap.get(e);
        if (null == o)
            return s.vP.ImageNotLoaded;
        if (null != n) {
            if (a === s.JU.Contain) {
                let r;
                let i = {
                        w: o.width,
                        h: o.height
                    }, a = +(i.w / i.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > a) {
                    let e = n.h * a;
                    r = {
                        x: t.x + (n.w - e) / 2,
                        y: t.y,
                        w: e,
                        h: n.h
                    };
                } else {
                    let e = n.w / a;
                    r = {
                        x: t.x,
                        y: t.y + (n.h - e) / 2,
                        w: n.w,
                        h: e
                    };
                }
                return this.drawCroppedImage(e, {
                    x: 0,
                    y: 0,
                    w: i.w,
                    h: i.h
                }, {
                    x: r.x,
                    y: r.y,
                    w: r.w,
                    h: r.h
                }), s.vP.Success;
            }
            if (a === s.JU.Cover) {
                var l, u, c, d;
                let i;
                let a = {
                        w: o.width,
                        h: o.height
                    }, _ = +(a.w / a.h).toFixed(1), E = +(n.w / n.h).toFixed(1);
                if (E > _) {
                    let e = a.w / E;
                    i = {
                        x: 0,
                        y: (a.h - e) * (null !== (u = null == r ? void 0 : null === (l = r.focus) || void 0 === l ? void 0 : l.y) && void 0 !== u ? u : 0.5),
                        w: o.width,
                        h: e
                    };
                } else {
                    let e = a.h * E;
                    i = {
                        x: (o.width - e) * (null !== (d = null == r ? void 0 : null === (c = r.focus) || void 0 === c ? void 0 : c.x) && void 0 !== d ? d : 0.5),
                        y: 0,
                        w: e,
                        h: o.height
                    };
                }
                return this.drawCroppedImage(e, i, {
                    x: t.x,
                    y: t.y,
                    w: n.w,
                    h: n.h
                }), s.vP.Success;
            }
            this.context.drawImage(o, t.x, t.y, n.w, n.h);
        } else
            this.context.drawImage(o, t.x, t.y);
        return s.vP.Success;
    }
    drawRoundedImage(e, t, n, r, i) {
        if (null == this.context)
            return s.vP.Failure;
        let {
                x: a,
                y: o
            } = t, {
                w: l,
                h: u
            } = n;
        this.context.save();
        let c = new Path2D();
        c.roundRect(a, o, l, u, r), this.context.clip(c);
        let d = this.drawImage(e, t, n, i);
        return this.restoreContext(), d;
    }
    drawCroppedImage(e, t, n) {
        var r;
        if (null == this.context)
            return s.vP.Failure;
        let i = null === (r = this.assetMap) || void 0 === r ? void 0 : r.get(e);
        if (null == i)
            return s.vP.ImageNotLoaded;
        let {
                x: a,
                y: o,
                w: l,
                h: u
            } = t, {
                x: c,
                y: d,
                w: _,
                h: E
            } = n;
        return this.context.drawImage(i, a, o, l, u, c, d, _, E), s.vP.Success;
    }
    drawPath(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (null == this.context)
            return s.vP.Failure;
        this.setContextProperties(), this.context.save();
        let i = new Path2D(e);
        return this.context.translate(t.x, t.y), this.context.scale(r, r), n ? this.context.fill(i, 'evenodd') : this.context.stroke(i), this.restoreContext(), s.vP.Success;
    }
    setGradientFillStyle(e, t, n) {
        if (null == this.context)
            return;
        let r = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
        for (let {
                    color: t,
                    stop: n
                } of e)
            r.addColorStop(n, t);
        this.context.fillStyle = r;
    }
    drawGradientRect(e, t, n, r) {
        return null == this.context ? s.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRect(r, !0, !1), s.vP.Success);
    }
    drawRoundedGradientRect(e, t, n, r, i) {
        return null == this.context ? s.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(r, i, !0, !1), s.vP.Success);
    }
    clip(e, t) {
        if (null == this.context)
            return;
        this.context.save();
        let {
                x: n,
                y: r
            } = e, i = new Path2D(t);
        this.context.translate(n, r), this.context.clip(i);
    }
    clipRect(e, t) {
        if (null == this.context)
            return;
        this.context.save();
        let {
            x: n,
            y: r,
            w: i,
            h: a
        } = e;
        if (t) {
            let e = new Path2D();
            e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.rect(n, r, i, a), this.context.clip(e, 'evenodd');
        } else {
            let e = new Path2D();
            e.rect(n, r, i, a), this.context.clip(e);
        }
    }
    clipRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context)
            return;
        this.context.save();
        let {
            x: r,
            y: i,
            w: a,
            h: o
        } = e;
        if (n) {
            let e = new Path2D();
            e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.roundRect(r, i, a, o, t), this.context.clip(e, 'evenodd');
        } else {
            let e = new Path2D();
            e.roundRect(r, i, a, o, t), this.context.clip(e);
        }
    }
    constructor(e, t) {
        super(e, t), l(this, 'canvas', void 0), l(this, 'context', void 0), this.canvas = e, this.context = this.canvas.getContext('2d'), null != this.context && (this.context.imageSmoothingQuality = 'high');
    }
}
