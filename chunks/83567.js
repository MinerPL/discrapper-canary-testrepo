n(47120);
var i = n(570140), s = n(457330), a = n(726542), r = n(231757), l = n(553795), o = n(585483), c = n(996106), d = n(914946), u = n(452426), _ = n(186901), E = n(981631), h = n(701488), I = n(231338);
let m = new Set([
    h.Fu,
    h.JT
]);
t.Z = {
    [I.Et.GET_PROVIDER_ACCESS_TOKEN]: {
        scope: { [_.Gp.ANY]: [_.wE] },
        validation: e => (0, u.Z)(e).required().keys({
            provider: e.string().required(),
            connection_redirect: e.string()
        }),
        handler: e => {
            let {
                socket: t,
                args: {
                    provider: n,
                    connection_redirect: u
                }
            } = e;
            (0, d.bu)(t.transport);
            let _ = (0, d._f)(t.application), h = a.Z.get(n);
            if (null == h)
                throw new c.Z({ errorCode: I.lT.INVALID_PROVIDER }, 'Platform not found for provider "'.concat(n, '"'));
            if (n === E.ABu.AMAZON_MUSIC) {
                if (!m.has(_))
                    throw new c.Z({ errorCode: I.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
            } else
                throw new c.Z({ errorCode: I.lT.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
            return new Promise(async (e, t) => {
                let a = l.Z.getAccount(null, n);
                if (null == a) {
                    function d(t) {
                        var n;
                        if (null == h)
                            return;
                        let i = (null !== (n = t.accounts) && void 0 !== n ? n : []).find(e => e.type === h.type);
                        null != i && (e({ access_token: i.access_token }), m());
                    }
                    function _() {
                        t(new c.Z({ errorCode: I.lT.OAUTH2_ERROR }, 'OAuth2 setup for "'.concat(n, '" failed'))), m();
                    }
                    function m() {
                        i.Z.unsubscribe('USER_CONNECTIONS_UPDATE', d), o.S.unsubscribe(E.CkL.CONNECTIONS_CALLBACK_ERROR, _);
                    }
                    i.Z.subscribe('USER_CONNECTIONS_UPDATE', d), o.S.subscribe(E.CkL.CONNECTIONS_CALLBACK_ERROR, _), (0, r.Z)({
                        platformType: h.type,
                        location: E.Sbl.ACTIVITY_RPC,
                        successRedirect: u
                    });
                } else
                    try {
                        let t = await s.Z.refreshAccessToken(h.type, a.id);
                        if (null == t)
                            throw new c.Z({ errorCode: I.lT.OAUTH2_ERROR }, 'Refreshing access token did not return a new access token');
                        e({ access_token: t });
                    } catch (e) {
                        t(e);
                    }
            });
        }
    }
};
