n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(544891),
    a = n(710845),
    s = n(569471),
    l = n(346479),
    r = n(592125),
    o = n(375954),
    c = n(306680),
    d = n(594174),
    u = n(709054),
    _ = n(981631);
let E = new a.Z('markUnread');
async function I(e, t) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let a = o.Z.getMessages(e),
        I = a
            .toArray()
            .filter((e) => 0 > u.default.compare(e.id, t))
            .sort((e, t) => u.default.compare(e.id, t.id))
            .reverse()[0],
        m = null == I ? u.default.atPreviousMillisecond(t) : I.id,
        T = 0;
    a.forAll((e) => {
        u.default.compare(e.id, m) > 0 && (0, c.Ex)(e, n) && T++;
    });
    let N = r.Z.getChannel(e);
    null != N && N.isThread() && (N.isArchivedThread() && (await l.Z.unarchiveThread(N, !1)), !s.Z.hasJoined(e) && (await l.Z.joinThread(N, 'Mark Unread'))),
        E.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        i.tn.post({
            url: _.ANM.MESSAGE_ACK(e, m),
            body: {
                manual: !0,
                mention_count: T
            },
            oldFormErrors: !0
        });
}
