n(177593);
var i = n(626135),
    a = n(996106),
    s = n(34954),
    r = n(986768),
    l = n(981631);
t.Z = {
    [l.Etm.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: o, args: c } = e,
                d = t.events[o];
            if (null == d) throw new a.Z({ errorCode: l.lTL.INVALID_EVENT }, 'Invalid event: '.concat(o));
            if (!(0, s.Z)(n.authorization.scopes, d.scope)) throw new a.Z({ errorCode: l.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            if (
                (i.default.track(l.rMx.RPC_SUBSCRIPTION_REQUESTED, {
                    event: o,
                    scope: 'object' == typeof d.scope ? JSON.stringify(d.scope) : d.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString()
                }),
                null != d.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(c, d.validation(e), { convert: !1 }).error) throw new a.Z({ errorCode: l.lTL.INVALID_PAYLOAD }, 'Invalid subscription parameters provided');
            }
            let u = d.handler({
                    args: c,
                    socket: n
                }),
                _ = await (0, r.V)(n, o, c);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, o, c, u), null != _ && t.dispatchToSubscriptions(o, (e) => e.socket.id === n.id, _);
                }),
                    e({ evt: o });
            });
        }
    },
    [l.Etm.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: s } = e;
            if (null == t.events[i]) throw new a.Z({ errorCode: l.lTL.INVALID_EVENT }, 'Invalid event: '.concat(i));
            return t.removeSubscription(n, i, s), { evt: i };
        }
    }
};
