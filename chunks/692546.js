n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i,
    s = n(470079),
    a = n(392711),
    o = n.n(a),
    r = n(699581),
    l = n(374470),
    c = n(902704),
    d = n(846519),
    u = n(13245),
    h = n(671999),
    p = n(358085),
    f = n(998502),
    _ = n(145597);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = {
        x: 0,
        y: 0
    },
    E = !1;
function Z(e) {
    let { clientX: t, clientY: n } = e;
    (E = !0), (m.x = t), (m.y = n);
}
let I = new Map();
function S(e, t) {
    if (null == t) I.delete(e), 0 === I.size && (window.removeEventListener('mousemove', Z), (E = !1));
    else {
        let n = I.get(e);
        if (null != n && (0, c.Z)(n.zone, t.zone)) return;
        0 === I.size && window.addEventListener('mousemove', Z), I.set(e, t);
    }
    p.isPlatformEmbedded &&
        ((0, _.W2)()
            ? u.Z.setClickZones(
                  Array.from(I.values()).map((e) => {
                      let { zone: t } = e;
                      return {
                          name: t.name,
                          left: t.left / window.innerWidth,
                          top: t.top / window.innerHeight,
                          right: t.right / window.innerWidth,
                          bottom: t.bottom / window.innerHeight
                      };
                  })
              )
            : (f.ZP.requireModule('discord_overlay2').broadcastCommand({
                  message: 'set_click_zones',
                  zones: Array.from(I.values()).map((e) => {
                      let { zone: t } = e;
                      return t;
                  })
              }),
              (function () {
                  if (!C)
                      f.ZP.requireModule('discord_overlay2').setClickZoneCallback((e, t, n) => {
                          let i = I.get(e);
                          null != i && (!E && ((m.x = t), (m.y = n)), i.instance.click());
                      }),
                          (C = !0);
              })()));
}
let C = !1;
class v extends (i = s.PureComponent) {
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), S(this.zone, null);
    }
    componentDidUpdate(e) {
        let { observe: t } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop());
    }
    render() {
        return s.Children.only(this.props.children);
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone);
    }
    click() {
        let e = (0, h.B)('click', m.x, m.y);
        (0, h.J)(e, m.x, m.y);
    }
    constructor(...e) {
        super(...e),
            g(this, 'zone', o().uniqueId('ClickArea')),
            g(this, 'interval', new d.Xp()),
            g(this, 'updateZone', () => {
                let e = (0, r.findDOMNode)(this);
                if ((0, l.k)(e)) {
                    let { left: t, top: n, right: i, bottom: s } = e.getBoundingClientRect();
                    S(this.zone, {
                        instance: this,
                        zone: {
                            name: this.zone,
                            left: Math.ceil(t),
                            top: Math.ceil(n),
                            right: Math.ceil(i),
                            bottom: Math.ceil(s)
                        }
                    });
                }
            });
    }
}
g(v, 'defaultProps', {
    observe: !0,
    observeInterval: 1000
});
