n(47120);
var l,
    u,
    i,
    r,
    a = n(442837),
    o = n(570140),
    d = n(69004);
let s = new d.Z(196606),
    c = 0,
    E = new d.Z(196606),
    T = new d.Z(196606);
function _(e, t, n) {
    var l;
    let u = null !== (l = s.get(e)) && void 0 !== l ? l : new Map();
    u.set(t, n), s.set(e, u), c++;
}
function I(e) {
    let t = E.get(e);
    null != t && T.delete(t), E.delete(e), s.delete(e), c++;
}
class S extends (l = a.ZP.Store) {
    getInteractionComponentStates() {
        return s;
    }
    getInteractionComponentStateVersion() {
        return c;
    }
    getInteractionComponentState(e, t) {
        var n;
        let l = s.get(e);
        return null == l ? null : null !== (n = l.get(t)) && void 0 !== n ? n : null;
    }
}
(r = 'LocalInteractionComponentStateStore'),
    (i = 'displayName') in (u = S)
        ? Object.defineProperty(u, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = r),
    (t.Z = new S(o.Z, {
        LOGOUT: function () {
            s.clear(), E.clear(), T.clear(), c++;
        },
        QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
            let { messageId: t, nonce: n, componentId: l, state: u } = e;
            E.set(t, n),
                T.set(n, {
                    messageId: t,
                    componentId: l
                }),
                _(t, l, u);
        },
        SET_INTERACTION_COMPONENT_STATE: function (e) {
            let { rootContainerId: t, componentId: n, state: l } = e;
            _(t, n, l);
        },
        MESSAGE_DELETE: function (e) {
            let { id: t } = e;
            if (!s.has(t)) return !1;
            I(t);
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            if (null == t.id || !s.has(t.id)) return !1;
            I(t.id);
        },
        INTERACTION_SUCCESS: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = T.get(t);
            if (null == n) return !1;
            E.delete(n.messageId), T.delete(t), c++;
        },
        INTERACTION_FAILURE: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = T.get(t);
            if (null == n) return !1;
            !(function (e) {
                let { componentId: t, messageId: n } = e,
                    l = s.get(n);
                if (null == l || !l.has(t)) return;
                l.delete(t), 0 === l.size && s.delete(n), c++;
            })(n);
        },
        CLEAR_INTERACTION_MODAL_STATE: function (e) {
            let { customId: t } = e;
            s.delete(t), c++;
        }
    }));
