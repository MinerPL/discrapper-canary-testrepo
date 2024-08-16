t.d(n, {
    S: function () {
        return r;
    },
    Y: function () {
        return m;
    }
}),
    t(411104);
var r,
    i,
    l = t(512722),
    a = t.n(l),
    s = t(493683),
    o = t(904245),
    c = t(957730),
    u = t(592125),
    d = t(669079);
((i = r || (r = {})).ACTION = 'action'), (i.LOOP = 'loop'), (i.IDLE = 'idle');
let m = async (e, n) => {
    if (null == n) throw Error('giftCode must be defined');
    if (null == e) throw Error('Recipient must be defined');
    let t = await s.Z.openPrivateChannel(e.id).then((e) => {
            let n = u.Z.getChannel(e);
            if ((a()(null != n, 'PrivateChannel is null'), null == n)) throw Error('Channel must be defined');
            return n;
        }),
        r = (0, d.Nz)(n);
    return o.Z.sendMessage(t.id, c.ZP.parse(t, r), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
};
