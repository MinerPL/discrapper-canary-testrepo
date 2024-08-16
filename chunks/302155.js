let r, i;
n.d(t, {
    Z: function () {
        return f;
    }
});
var a = n(213919),
    s = n(570140),
    o = n(147913),
    l = n(594174),
    u = n(626135),
    c = n(726745),
    d = n(981631);
function _(e, t, n) {
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
let E = !1;
class f extends o.Z {
    _initialize() {
        s.Z.subscribe('CONNECTION_OPEN', () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTION_OPEN', () => this.handleConnectionOpen());
    }
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: s }) {
        super(),
            _(this, 'onSwitchStart', void 0),
            _(this, 'onSwitchSuccess', void 0),
            _(this, 'onSwitchError', void 0),
            _(this, 'onTokenSet', void 0),
            _(this, 'actions', { LOGOUT: (e) => this.handleLogout(e) }),
            _(this, 'handleConnectionOpen', () => {
                var e, t, n;
                let s = l.default.getCurrentUser();
                if (null == s) return;
                if (null != i) {
                    if (i !== r) {
                        let e = c.Z.getUsers().map((e) => {
                            let { id: t } = e;
                            return t;
                        });
                        u.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                            from_user_id: i,
                            linked_user_ids: e
                        }),
                            null === (t = this.onSwitchSuccess) || void 0 === t || t.call(this, s, E);
                    } else u.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null === (n = this.onSwitchError) || void 0 === n || n.call(this, s);
                    i = null;
                }
                r = s.id;
                let o = a.getToken();
                null != o && '' !== o && a.setToken(o, s.id), null === (e = this.onTokenSet) || void 0 === e || e.call(this, s);
            }),
            _(this, 'handleLogout', (e) => {
                if (e.isSwitchingAccount) {
                    var t;
                    (i = r), null === (t = this.onSwitchStart) || void 0 === t || t.call(this), (E = !!e.goHomeAfterSwitching);
                } else (E = !1), a.removeToken(r);
                r = null;
            }),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = t),
            (this.onSwitchError = n),
            (this.onTokenSet = s);
    }
}
