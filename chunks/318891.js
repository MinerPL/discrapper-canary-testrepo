let r;
n.d(t, {
    RI: function () {
        return v;
    },
    jy: function () {
        return I;
    }
});
var i = n(570140),
    a = n(519938),
    s = n(317770),
    o = n(928518),
    l = n(592125),
    u = n(819640),
    c = n(366050),
    d = n(19780),
    f = n(944486),
    _ = n(914010),
    h = n(979651),
    p = n(317381),
    m = n(719296),
    g = n(958185),
    E = n(981631);
function v(e) {
    let t = null != e ? e : r;
    null != t && c.Z.isOpen(t) && i.Z.wait(() => a.Cp(t));
}
function I(e) {
    let t = null != e ? e : r;
    null != t && c.Z.isOpen(t) && i.Z.wait(() => a.$Z(t));
}
function S() {
    let e = p.ZP.getConnectedActivityChannelId(),
        t = p.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : E.lds),
        n = l.Z.getChannel(e);
    return null == e || null == n || null == t
        ? (function () {
              let e = r;
              null != e && c.Z.isOpen(e) && (i.Z.wait(() => a.xv(e)), (r = null));
          })()
        : (function (e, t) {
              if (c.Z.isOpen(t)) return !1;
              if (null != r) {
                  let e = r;
                  i.Z.wait(() => a.xv(e));
              }
              i.Z.wait(() => a.bA(t, E.NYg.EMBED_IFRAME, { channel: e })), (r = t);
          })(n, (0, m.Z)(e, t.applicationId));
}
function T() {
    return (0, g.Z)({
        LayerStore: u.Z,
        PopoutWindowStore: o.Z
    })
        ? v()
        : I();
}
class b extends s.Z {
    _initialize() {
        f.Z.addChangeListener(S), _.Z.addChangeListener(S), d.Z.addChangeListener(S), h.Z.addChangeListener(S), o.Z.addChangeListener(S), p.ZP.addChangeListener(S), u.Z.addChangeListener(T);
    }
    _terminate() {
        f.Z.removeChangeListener(S), _.Z.removeChangeListener(S), d.Z.removeChangeListener(S), h.Z.removeChangeListener(S), o.Z.removeChangeListener(S), p.ZP.removeChangeListener(S), u.Z.removeChangeListener(T);
    }
}
t.ZP = new b();
