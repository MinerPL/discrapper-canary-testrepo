n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(780384),
    r = n(481060),
    o = n(332148),
    c = n(796798),
    u = n(198620),
    d = n(624453),
    h = n(306680),
    m = n(494404),
    p = n(257559),
    _ = n(689938);
let f = [];
function E(e) {
    let { channel: t, onJump: E } = e,
        { messages: g, loading: C } = (0, s.cj)([d.Z], () => {
            let e = d.Z.getPinnedMessages(t.id),
                n = null != e ? e.messages : f;
            return {
                messages: n,
                loading: null == n || (null != e && e.loading)
            };
        }),
        I = (0, s.e7)([h.ZP], () => h.ZP.hasUnreadPins(t.id));
    return (
        a.useEffect(() => {
            c.l.getCurrentConfig({ location: 'pins' }).enabled && g.some(u.k5) && o.Z.fetchPins(t.id, !0);
        }, []),
        a.useEffect(() => {
            I && o.Z.ackPins(t.id);
        }, [I, t.id]),
        (0, i.jsx)(r.Dialog, {
            'aria-label': _.Z.Messages.PINNED_MESSAGES,
            children: (0, i.jsx)(m.ZP, {
                onFetch: function () {
                    o.Z.ackPins(t.id), o.Z.fetchPins(t.id);
                },
                channel: t,
                messages: g,
                loading: C,
                analyticsName: 'Channel Pins',
                onCloseMessage: function (e, n) {
                    null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : p.Z.confirmUnpin(t, e));
                },
                onJump: E,
                getProTip: function () {
                    return t.isPrivate() ? _.Z.Messages.PINNED_MESSAGES_PRO_TIP_BODY_DMS : _.Z.Messages.PINNED_MESSAGES_PRO_TIP_BODY_CHANNEL;
                },
                renderHeader: () => (0, i.jsx)(m.h4, { title: _.Z.Messages.PINNED_MESSAGES }),
                renderEmptyState: function (e) {
                    let a = _.Z.Messages.NO_PINS_IN_CHANNEL;
                    t.isPrivate() && (a = _.Z.Messages.NO_PINS_IN_DM);
                    let s = (0, l.ap)(e) ? n(306059) : n(281485);
                    return (0, i.jsx)(
                        m.nH,
                        {
                            msg: a,
                            image: s
                        },
                        'emptystate'
                    );
                },
                listName: 'pins'
            })
        })
    );
}
