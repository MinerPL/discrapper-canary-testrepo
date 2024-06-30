let i;
var s = n(570140), a = n(519938), r = n(317770), l = n(317381), o = n(928518), c = n(199902), d = n(592125), u = n(819640), _ = n(131951), E = n(366050), h = n(19780), I = n(944486), m = n(914010), p = n(979651), g = n(981631), T = n(65154);
function S() {
    var e;
    let t = i;
    if (null == t || !E.Z.isOpen(t))
        return !1;
    s.Z.wait(() => a.xv(t)), null === (e = h.Z.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), i = null;
}
function C() {
    let e = h.Z.getChannelId(), t = i === e;
    return function () {
        let e = h.Z.getChannelId(), t = I.Z.getChannelId();
        if (!_.Z.supports(T.AN.VIDEO) || o.Z.getWindowOpen(g.KJ3.CHANNEL_CALL_POPOUT))
            return !0;
        let n = c.Z.getAllActiveStreams().length > 0, i = null != e && Object.values(p.Z.getVideoVoiceStatesForChannel(e)).some(e => {
                let {userId: t} = e;
                return !_.Z.isLocalVideoDisabled(t);
            });
        if (!(i || n))
            return !0;
        let s = u.Z.hasLayers();
        return !(s && u.Z.getLayers().includes(g.S9g.RTC_DEBUG)) && (!!s || e === t || !1);
    }() ? S() : (!t && S(), null != e && function (e) {
        var t;
        let n = d.Z.getChannel(e);
        if (null == n || E.Z.isOpen(e))
            return !1;
        s.Z.wait(() => a.bA(n.id, g.NYg.VIDEO, { channel: n })), null === (t = h.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), i = e;
    }(e));
}
class N extends r.Z {
    _initialize() {
        I.Z.addChangeListener(C), m.Z.addChangeListener(C), h.Z.addChangeListener(C), p.Z.addChangeListener(C), u.Z.addChangeListener(C), c.Z.addChangeListener(C), o.Z.addChangeListener(C), _.Z.addChangeListener(C), l.ZP.addChangeListener(C);
    }
    _terminate() {
        I.Z.removeChangeListener(C), m.Z.removeChangeListener(C), h.Z.removeChangeListener(C), p.Z.removeChangeListener(C), u.Z.removeChangeListener(C), c.Z.removeChangeListener(C), o.Z.removeChangeListener(C), _.Z.removeChangeListener(C), l.ZP.removeChangeListener(C);
    }
}
t.Z = new N();
