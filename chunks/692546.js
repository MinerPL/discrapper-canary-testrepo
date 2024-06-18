"use strict";
n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var i, s = n(470079),
  l = n(392711),
  a = n.n(l),
  o = n(699581),
  r = n(374470),
  d = n(902704),
  c = n(846519),
  u = n(13245),
  h = n(671999),
  p = n(358085),
  f = n(998502),
  E = n(145597);

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = {
    x: 0,
    y: 0
  },
  m = !1;

function _(e) {
  let {
    clientX: t,
    clientY: n
  } = e;
  m = !0, g.x = t, g.y = n
}
let I = new Map;

function S(e, t) {
  if (null == t) I.delete(e), 0 === I.size && (window.removeEventListener("mousemove", _), m = !1);
  else {
    let n = I.get(e);
    if (null != n && (0, d.Z)(n.zone, t.zone)) return;
    0 === I.size && window.addEventListener("mousemove", _), I.set(e, t)
  }
  p.isPlatformEmbedded && ((0, E.W2)() ? u.Z.setClickZones(Array.from(I.values()).map(e => {
    let {
      zone: t
    } = e;
    return {
      name: t.name,
      left: t.left / window.innerWidth,
      top: t.top / window.innerHeight,
      right: t.right / window.innerWidth,
      bottom: t.bottom / window.innerHeight
    }
  })) : (f.ZP.requireModule("discord_overlay2").broadcastCommand({
    message: "set_click_zones",
    zones: Array.from(I.values()).map(e => {
      let {
        zone: t
      } = e;
      return t
    })
  }), function() {
    if (!v) f.ZP.requireModule("discord_overlay2").setClickZoneCallback((e, t, n) => {
      let i = I.get(e);
      null != i && (!m && (g.x = t, g.y = n), i.instance.click())
    }), v = !0
  }()))
}
let v = !1;
class C extends(i = s.PureComponent) {
  componentDidMount() {
    this.props.observe ? this.observeZone() : this.updateZone()
  }
  componentWillUnmount() {
    this.interval.stop(), S(this.zone, null)
  }
  componentDidUpdate(e) {
    let {
      observe: t
    } = this.props;
    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
  }
  render() {
    return s.Children.only(this.props.children)
  }
  observeZone() {
    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
  }
  click() {
    let e = (0, h.B)("click", g.x, g.y);
    (0, h.J)(e, g.x, g.y)
  }
  constructor(...e) {
    super(...e), Z(this, "zone", a().uniqueId("ClickArea")), Z(this, "interval", new c.Xp), Z(this, "updateZone", () => {
      let e = (0, o.findDOMNode)(this);
      if ((0, r.k)(e)) {
        let {
          left: t,
          top: n,
          right: i,
          bottom: s
        } = e.getBoundingClientRect();
        S(this.zone, {
          instance: this,
          zone: {
            name: this.zone,
            left: Math.ceil(t),
            top: Math.ceil(n),
            right: Math.ceil(i),
            bottom: Math.ceil(s)
          }
        })
      }
    })
  }
}
Z(C, "defaultProps", {
  observe: !0,
  observeInterval: 1e3
})