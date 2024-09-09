n.d(t, {
    V: function () {
        return g;
    },
    e: function () {
        return I;
    }
}),
    n(47120);
var r,
    i = n(735250);
n(470079);
var a = n(442837),
    s = n(570140),
    o = n(962293),
    l = n(592125),
    u = n(271383),
    c = n(944486),
    d = n(594174),
    _ = n(689938),
    E = n(836860);
function f(e, t, n) {
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
let h = new Set();
class p extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = new Set(e));
    }
    hasId(e) {
        return h.has(e);
    }
    getState() {
        return [...h];
    }
}
f(p, 'displayName', 'PTOStore'), f(p, 'persistKey', 'PTOStore');
let m = new p(s.Z, {}),
    I = (e) =>
        (0, a.e7)([u.ZP, d.default, m], () => {
            let t = d.default.getCurrentUser();
            if (null == t || !t.isStaff() || !e.isDM()) return !1;
            let n = d.default.getUser(e.getRecipientId());
            if (!(null == n ? void 0 : n.isStaff())) return !1;
            let r = u.ZP.getNicknames(n.id).some((e) => e.endsWith('[PTO]') || e.endsWith('[OOO]'));
            return r ? !m.hasId(n.id) && r : (h.delete(n.id) && m.emitChange(), !1);
        }),
    T = () => {
        let e = c.Z.getChannelId();
        if (null == e) return;
        let t = l.Z.getChannel(e);
        null != t && t.isPrivate() && !h.has(t.getRecipientId()) && (h.add(t.getRecipientId()), m.emitChange());
    },
    g = () =>
        (0, i.jsxs)('div', {
            className: E.bar,
            children: [_.Z.Messages.STAFF_PTO_NOTICE, (0, i.jsx)(o.B, { onClick: T })]
        });
