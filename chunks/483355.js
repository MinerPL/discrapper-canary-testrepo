"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var i, a, l = n("884691"),
  s = n("917351"),
  o = n.n(s),
  r = n("817736"),
  d = n("118810"),
  u = n("233736"),
  c = n("862337"),
  f = n("539405"),
  h = n("658530"),
  p = n("773336"),
  g = n("50885"),
  m = n("819068");
let E = {
    x: 0,
    y: 0
  },
  S = !1;

function v(e) {
  let {
    clientX: t,
    clientY: n
  } = e;
  S = !0, E.x = t, E.y = n
}
let y = new Map;

function O(e, t) {
  if (null == t) y.delete(e), 0 === y.size && (window.removeEventListener("mousemove", v), S = !1);
  else {
    let n = y.get(e);
    if (null != n && (0, u.default)(n.zone, t.zone)) return;
    0 === y.size && window.addEventListener("mousemove", v), y.set(e, t)
  }
  if (p.isPlatformEmbedded) {
    if ((0, m.isOutOfProcess)()) f.default.setClickZones(Array.from(y.values()).map(e => {
      let {
        zone: t
      } = e, n = {
        name: t.name,
        left: t.left / window.innerWidth,
        top: t.top / window.innerHeight,
        right: t.right / window.innerWidth,
        bottom: t.bottom / window.innerHeight
      };
      return n
    }));
    else {
      let e = g.default.requireModule("discord_overlay2");
      e.broadcastCommand({
          message: "set_click_zones",
          zones: Array.from(y.values()).map(e => {
            let {
              zone: t
            } = e;
            return t
          })
        }),
        function() {
          if (C) return;
          let e = g.default.requireModule("discord_overlay2");
          e.setClickZoneCallback((e, t, n) => {
            let i = y.get(e);
            null != i && (!S && (E.x = t, E.y = n), i.instance.click())
          }), C = !0
        }()
    }
  }
}
let C = !1;
(i = class extends l.PureComponent {
  componentDidMount() {
    this.props.observe ? this.observeZone() : this.updateZone()
  }
  componentWillUnmount() {
    this.interval.stop(), O(this.zone, null)
  }
  componentDidUpdate(e) {
    let {
      observe: t
    } = this.props;
    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
  }
  render() {
    return l.Children.only(this.props.children)
  }
  observeZone() {
    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
  }
  click() {
    let e = (0, h.createMouseEvent)("click", E.x, E.y);
    (0, h.dispatchEventToPoint)(e, E.x, E.y)
  }
  constructor(...e) {
    super(...e), this.zone = o.uniqueId("ClickArea"), this.interval = new c.Interval, this.updateZone = () => {
      let e = (0, r.findDOMNode)(this);
      if ((0, d.isElement)(e)) {
        let {
          left: t,
          top: n,
          right: i,
          bottom: a
        } = e.getBoundingClientRect();
        O(this.zone, {
          instance: this,
          zone: {
            name: this.zone,
            left: Math.ceil(t),
            top: Math.ceil(n),
            right: Math.ceil(i),
            bottom: Math.ceil(a)
          }
        })
      }
    }
  }
}).defaultProps = {
  observe: !0,
  observeInterval: 1e3
}, a = i