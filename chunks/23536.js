n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(780384),
    r = n(481060),
    o = n(332148),
    c = n(198620),
    u = n(624453),
    d = n(306680),
    h = n(494404),
    p = n(257559),
    m = n(689938);
let _ = [];
function f(e) {
    let { channel: t, onJump: f } = e,
        { messages: E, loading: g } = (0, a.cj)([u.Z], () => {
            let e = u.Z.getPinnedMessages(t.id),
                n = null != e ? e.messages : _;
            return {
                messages: n,
                loading: null == n || (null != e && e.loading)
            };
        }),
        C = (0, a.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id));
    return (
        s.useEffect(() => {
            E.some(c.k5) && o.Z.fetchPins(t.id, !0);
        }, []),
        s.useEffect(() => {
            C && o.Z.ackPins(t.id);
        }, [C, t.id]),
        (0, i.jsx)(r.Dialog, {
            'aria-label': m.Z.Messages.PINNED_MESSAGES,
            children: (0, i.jsx)(h.ZP, {
                onFetch: function () {
                    o.Z.ackPins(t.id), o.Z.fetchPins(t.id);
                },
                channel: t,
                messages: E,
                loading: g,
                analyticsName: 'Channel Pins',
                onCloseMessage: function (e, n) {
                    null != e && (n.shiftKey ? o.Z.unpinMessage(t, e.id) : p.Z.confirmUnpin(t, e));
                },
                onJump: f,
                getProTip: function () {
                    return t.isPrivate() ? m.Z.Messages.PINNED_MESSAGES_PRO_TIP_BODY_DMS : m.Z.Messages.PINNED_MESSAGES_PRO_TIP_BODY_CHANNEL;
                },
                renderHeader: () =>
                    (0, i.jsx)(h.h4, {
                        icon: r.PinIcon,
                        title: m.Z.Messages.PINNED_MESSAGES
                    }),
                renderEmptyState: function (e) {
                    let s = m.Z.Messages.NO_PINS_IN_CHANNEL;
                    t.isPrivate() && (s = m.Z.Messages.NO_PINS_IN_DM);
                    let a = (0, l.ap)(e) ? n(306059) : n(281485);
                    return (0, i.jsx)(
                        h.nH,
                        {
                            msg: s,
                            image: a
                        },
                        'emptystate'
                    );
                },
                listName: 'pins'
            })
        })
    );
}
