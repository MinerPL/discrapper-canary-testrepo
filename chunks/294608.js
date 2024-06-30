n.d(t, {
    $B: function () {
        return o;
    },
    GF: function () {
        return l;
    },
    XL: function () {
        return r;
    },
    pE: function () {
        return c;
    }
}), n(411104);
var i = n(735250), a = n(470079);
let s = a.createContext(void 0);
function l() {
    let e = a.useContext(s);
    if (null == e)
        throw Error('No PollContextProvider found');
    return e;
}
function r(e) {
    let {
            children: t,
            message: n,
            poll: l
        } = e, r = a.useMemo(() => ({
            message: n,
            poll: l
        }), [
            n,
            l
        ]);
    return (0, i.jsx)(s.Provider, {
        value: r,
        children: t
    });
}
function o(e) {
    return function () {
        let {poll: e} = l();
        return e.resources;
    }().styles[e];
}
function c() {
    let {message: e} = l(), t = e.getChannelId();
    return a.useMemo(() => ({
        channelId: t,
        messageId: e.id
    }), [
        e.id,
        t
    ]);
}
