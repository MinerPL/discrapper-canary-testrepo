n(47120);
var i = n(735250);
n(470079);
var a = n(544891),
    s = n(846519),
    r = n(481060),
    l = n(496929),
    o = n(115130),
    c = n(812206),
    d = n(594174),
    u = n(580130),
    _ = n(695103),
    E = n(70956),
    h = n(998502),
    m = n(996106),
    I = n(186901),
    g = n(981631);
let p = 10 * E.Z.Millis.SECOND;
t.Z = {
    [g.Etm.VALIDATE_APPLICATION]: {
        scope: I.lH,
        handler(e) {
            let { socket: t } = e,
                a = t.application.id;
            try {
                if (null == a) throw new m.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'No application.');
                let e = c.Z.getApplication(a);
                if (null == e) throw new m.Z({ errorCode: g.lTL.INVALID_ENTITLEMENT }, 'SKU does not exist.');
                let t = e.primarySkuId;
                if (null == t) throw new m.Z({ errorCode: g.lTL.INVALID_ENTITLEMENT }, 'SKU does not exist.');
                return Promise.race([
                    (function (e, t) {
                        let n = u.Z.isEntitledToSku(d.default.getCurrentUser(), e, t);
                        return null != n ? Promise.resolve(n) : (0, l.yD)(t).then(() => !0 === u.Z.isEntitledToSku(d.default.getCurrentUser(), e, t));
                    })(t, e.id).then((e) => {
                        if (!e) throw new m.Z({ errorCode: g.lTL.INVALID_ENTITLEMENT }, 'User does not have entitlement.');
                    }),
                    (0, s.GR)(p).then(() => {
                        throw new m.Z({ errorCode: g.lTL.INVALID_ENTITLEMENT }, 'Timed out fetching entitlement.');
                    })
                ]);
            } catch (e) {
                throw (
                    (e.code === g.lTL.INVALID_ENTITLEMENT &&
                        (h.ZP.focus(null, !0),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await n.e('48748').then(n.bind(n, 52004));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    applicationId: a
                                });
                        })),
                    e)
                );
            }
        }
    },
    [g.Etm.GET_ENTITLEMENT_TICKET]: {
        scope: I.lH,
        handler(e) {
            let { socket: t } = e,
                s = t.application.id;
            if (null == s) throw new m.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'No application.');
            return a.tn
                .post({
                    url: g.ANM.ENTITLEMENT_TICKET(s),
                    body: { test_mode: _.Z.inTestModeForApplication(s) || o.Z.inDevModeForApplication(s) },
                    retries: 3,
                    oldFormErrors: !0
                })
                .then((e) => {
                    let { body: t } = e;
                    return t;
                })
                .catch((e) => {
                    throw (
                        (h.ZP.focus(null, !0),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await n.e('48748').then(n.bind(n, 52004));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    applicationId: s
                                });
                        }),
                        e)
                    );
                });
        }
    }
};
