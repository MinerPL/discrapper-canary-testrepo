n.d(t, {
    $j: function () {
        return u;
    },
    Ty: function () {
        return d;
    },
    lW: function () {
        return E;
    },
    sr: function () {
        return _;
    },
    zP: function () {
        return c;
    }
});
var r = n(536285), i = n(996106), a = n(812967), o = n(511405), s = n(981631), l = n(186901);
function u() {
    r.default.connect();
}
function c() {
    r.default.disconnect();
}
function d(e, t) {
    if (!__OVERLAY__)
        throw new i.Z({ errorCode: s.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    r.default.subscribe(s.zMe.OVERLAY, { token: t }, t => e((0, o.H)(t)));
}
function _(e, t) {
    if (__OVERLAY__)
        throw new i.Z({ errorCode: s.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    a.Z.setCommandHandler(s.Etm.OVERLAY, {
        scope: l.cE,
        handler(n) {
            let {args: r} = n;
            if (!t(r.token))
                throw new i.Z({ errorCode: s.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            e((0, o.H)(r));
        }
    }), a.Z.setEventHandler(s.zMe.OVERLAY, {
        scope: l.cE,
        handler(e) {
            let {args: n} = e;
            if (!t(n.token))
                throw new i.Z({ errorCode: s.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
        }
    });
}
function E(e) {
    __OVERLAY__ ? r.default.request(s.Etm.OVERLAY, (0, o.G)(e)) : a.Z.dispatchToSubscriptions(s.zMe.OVERLAY, {}, (0, o.G)(e));
}
