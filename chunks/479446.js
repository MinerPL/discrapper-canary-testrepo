t.d(n, {
    Ou: function () {
        return _;
    },
    SR: function () {
        return o;
    },
    YD: function () {
        return p;
    }
}),
    t(411104);
var o,
    r,
    a = t(512722),
    i = t.n(a),
    c = t(493683),
    l = t(904245),
    s = t(957730),
    u = t(592125),
    d = t(669079);
((r = o || (o = {})).ACTION = 'action'), (r.LOOP = 'loop'), (r.IDLE = 'idle');
let p = async (e, n) => {
        if (null == n) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let t = await c.Z.openPrivateChannel(e.id).then((e) => {
                let n = u.Z.getChannel(e);
                if ((i()(null != n, 'PrivateChannel is null'), null == n)) throw Error('Channel must be defined');
                return n;
            }),
            o = (0, d.Nz)(n);
        return l.Z.sendMessage(t.id, s.ZP.parse(t, o), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    _ = (e) => {};
