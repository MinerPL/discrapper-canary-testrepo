n(47120);
var i = n(735250),
    a = n(481060),
    s = n(570140),
    r = n(317770),
    l = n(19780),
    o = n(594174),
    c = n(979651),
    d = n(960048),
    u = n(699910),
    _ = n(981631);
function E(e, t, n) {
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
let h = 'CollectiblesExpiryModal';
class m extends r.Z {
    _initialize() {
        s.Z.subscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), s.Z.subscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal);
    }
    _terminate() {
        s.Z.unsubscribe('POST_CONNECTION_OPEN', this.handleMaybeOpenModal), s.Z.unsubscribe('CURRENT_USER_UPDATE', this.handleMaybeOpenModal), null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null));
    }
    constructor(...e) {
        super(...e),
            E(this, 'timeout', null),
            E(this, 'handleMaybeOpenModal', () => {
                var e, t;
                let n = o.default.getCurrentUser(),
                    i = null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    a = null == n ? void 0 : null === (t = n.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                if ((('1251324401459265537' === i || '1252353273256480818' === i) && (a = 1726106879), null != a && !!(0, u.v)('CollectiblesExpiryManager'))) !this.maybeOpenModal() && (null != this.timeout && clearTimeout(this.timeout), (this.timeout = setTimeout(this.maybeOpenModal, 1000 * a - Date.now() + 1000)));
            }),
            E(this, 'maybeOpenModal', () => {
                var e, t, s, r, u;
                let E = o.default.getCurrentUser(),
                    m = l.Z.getState(),
                    I = null == E ? void 0 : null === (e = E.avatarDecoration) || void 0 === e ? void 0 : e.skuId,
                    p = null == E ? void 0 : null === (t = E.avatarDecoration) || void 0 === t ? void 0 : t.expiresAt;
                if ((('1251324401459265537' === I || '1252353273256480818' === I) && (p = 1726106879), null == E)) return !1;
                let g = c.Z.getVoiceStateForUser(E.id);
                return null != p && 1000 * p < Date.now() && m !== _.hes.RTC_CONNECTED
                    ? ((0, a.closeModal)(h),
                      (0, a.openModalLazy)(
                          async () => {
                              let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      skuId: I
                                  });
                          },
                          { modalKey: h }
                      ),
                      d.Z.captureMessage('Collectible expiry modal shown'),
                      !0)
                    : (('1251324401459265537' === I || '1252353273256480818' === I) &&
                          d.Z.captureMessage('Collectible expiry modal not shown', {
                              tags: {
                                  isExpired: (null != p && 1000 * p < Date.now()).toString(),
                                  rtcConnected: (m === _.hes.RTC_CONNECTED).toString(),
                                  decoExpiresAt: null !== (r = null == p ? void 0 : p.toString()) && void 0 !== r ? r : 'N/A',
                                  voiceStateAvailable: (null != g).toString(),
                                  selfStream: null !== (u = null == g ? void 0 : null === (s = g.selfStream) || void 0 === s ? void 0 : s.toString()) && void 0 !== u ? u : 'N/A'
                              }
                          }),
                      !1);
            });
    }
}
t.Z = new m();
