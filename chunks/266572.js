n(47120);
var i = n(735250);
n(470079);
var s = n(544891), a = n(846519), r = n(481060), l = n(496929), o = n(115130), c = n(812206), d = n(594174), u = n(580130), _ = n(695103), E = n(70956), h = n(998502), I = n(996106), m = n(186901), p = n(981631);
let g = 10 * E.Z.Millis.SECOND;
t.Z = {
    [p.Etm.VALIDATE_APPLICATION]: {
        scope: m.lH,
        handler(e) {
            let {socket: t} = e, s = t.application.id;
            try {
                if (null == s)
                    throw new I.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'No application.');
                let e = c.Z.getApplication(s);
                if (null == e)
                    throw new I.Z({ errorCode: p.lTL.INVALID_ENTITLEMENT }, 'SKU does not exist.');
                let t = e.primarySkuId;
                if (null == t)
                    throw new I.Z({ errorCode: p.lTL.INVALID_ENTITLEMENT }, 'SKU does not exist.');
                return Promise.race([
                    function (e, t) {
                        let n = u.Z.isEntitledToSku(d.default.getCurrentUser(), e, t);
                        return null != n ? Promise.resolve(n) : (0, l.yD)(t).then(() => !0 === u.Z.isEntitledToSku(d.default.getCurrentUser(), e, t));
                    }(t, e.id).then(e => {
                        if (!e)
                            throw new I.Z({ errorCode: p.lTL.INVALID_ENTITLEMENT }, 'User does not have entitlement.');
                    }),
                    (0, a.GR)(g).then(() => {
                        throw new I.Z({ errorCode: p.lTL.INVALID_ENTITLEMENT }, 'Timed out fetching entitlement.');
                    })
                ]);
            } catch (e) {
                throw e.code === p.lTL.INVALID_ENTITLEMENT && (h.ZP.focus(null, !0), (0, r.openModalLazy)(async () => {
                    let {default: e} = await n.e('48748').then(n.bind(n, 52004));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        applicationId: s
                    });
                })), e;
            }
        }
    },
    [p.Etm.GET_ENTITLEMENT_TICKET]: {
        scope: m.lH,
        handler(e) {
            let {socket: t} = e, a = t.application.id;
            if (null == a)
                throw new I.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'No application.');
            return s.tn.post({
                url: p.ANM.ENTITLEMENT_TICKET(a),
                body: { test_mode: _.Z.inTestModeForApplication(a) || o.Z.inDevModeForApplication(a) },
                retries: 3,
                oldFormErrors: !0
            }).then(e => {
                let {body: t} = e;
                return t;
            }).catch(e => {
                throw h.ZP.focus(null, !0), (0, r.openModalLazy)(async () => {
                    let {default: e} = await n.e('48748').then(n.bind(n, 52004));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        applicationId: a
                    });
                }), e;
            });
        }
    }
};
