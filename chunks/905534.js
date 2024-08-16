n(177593);
var i = n(626135),
    a = n(189800),
    s = n(996106),
    r = n(34954),
    l = n(986768),
    o = n(981631);
t.Z = {
    [o.Etm.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: c, args: d } = e,
                u = t.events[c];
            if (null == u) throw new s.Z({ errorCode: o.lTL.INVALID_EVENT }, 'Invalid event: '.concat(c));
            if (!(0, r.Z)(n.authorization.scopes, u.scope)) throw new s.Z({ errorCode: o.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            if (
                (a.N.getCurrentConfig({ location: 'RPCServer' }).enabled &&
                    i.default.track(o.rMx.RPC_SUBSCRIPTION_REQUESTED, {
                        event: c,
                        scope: 'object' == typeof u.scope ? JSON.stringify(u.scope) : u.scope,
                        application_id: n.application.id,
                        socket_scope: n.authorization.scopes.toString()
                    }),
                null != u.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(d, u.validation(e), { convert: !1 }).error) throw new s.Z({ errorCode: o.lTL.INVALID_PAYLOAD }, 'Invalid subscription parameters provided');
            }
            let _ = u.handler({
                    args: d,
                    socket: n
                }),
                E = await (0, l.V)(n, c, d);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, c, d, _), null != E && t.dispatchToSubscriptions(c, (e) => e.socket.id === n.id, E);
                }),
                    e({ evt: c });
            });
        }
    },
    [o.Etm.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: a } = e;
            if (null == t.events[i]) throw new s.Z({ errorCode: o.lTL.INVALID_EVENT }, 'Invalid event: '.concat(i));
            return t.removeSubscription(n, i, a), { evt: i };
        }
    }
};
