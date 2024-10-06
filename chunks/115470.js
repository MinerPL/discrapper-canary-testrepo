var r,
    i = n(442837),
    a = n(570140),
    s = n(178635);
function o(e, t, n) {
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
let l = {};
class u extends (r = i.ZP.Store) {
    initialize() {}
    getFeedbackConfig(e) {
        return l[e];
    }
}
o(u, 'displayName', 'FeedbackOverrideStore'),
    o(u, 'persistKey', 'feedbackOverrides'),
    (t.Z = new u(a.Z, {
        FEEDBACK_OVERRIDE_SET: function (e) {
            let { feedbackType: t, cooldown: n, chance: r } = e;
            l[t] = {
                ...s.R[t],
                cooldown: n,
                chance: r
            };
        },
        FEEDBACK_OVERRIDE_CLEAR: function (e) {
            let { feedbackType: t } = e;
            delete l[t];
        }
    }));
