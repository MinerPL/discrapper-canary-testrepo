var s,
    r,
    i,
    a,
    l = n(442837),
    o = n(570140);
let c = !1,
    u = null,
    d = null;
class _ extends (a = l.ZP.Store) {
    getState() {
        return {
            verifySuccess: c,
            verifyErrors: u,
            redirectGuildId: d
        };
    }
}
(i = 'HubEmailVerificationStore'),
    (r = 'displayName') in (s = _)
        ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = i),
    (t.Z = new _(o.Z, {
        HUB_VERIFY_EMAIL_SUCCESS: function (e) {
            let { guildId: t } = e;
            (c = !0), (u = null), (d = t);
        },
        HUB_VERIFY_EMAIL_FAILURE: function (e) {
            let { errors: t } = e;
            (c = !1), (u = t);
        }
    }));
