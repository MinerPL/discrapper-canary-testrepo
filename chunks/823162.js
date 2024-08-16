n.d(t, {
    Xy: function () {
        return u;
    },
    e4: function () {
        return o;
    },
    gN: function () {
        return d;
    },
    hi: function () {
        return E;
    },
    qR: function () {
        return c;
    },
    r_: function () {
        return _;
    }
});
var i = n(544891),
    a = n(570140),
    s = n(893776),
    r = n(290323),
    l = n(981631);
async function o(e) {
    await i.tn.put({
        url: l.ANM.CHANNEL_RECIPIENT_CONSENT(e),
        body: { consent_status: r.h.ACCEPTED }
    }),
        a.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: e
        });
}
function c(e) {
    return i.tn.put({
        url: l.ANM.CHANNEL_RECIPIENT_CONSENT(e),
        body: { consent_status: r.h.UNSPECIFIED }
    });
}
function u(e) {
    return i.tn.put({
        url: l.ANM.CHANNEL_RECIPIENT_CONSENT(e),
        body: { consent_status: r.h.PENDING }
    });
}
function d(e) {
    return i.tn.del({ url: l.ANM.CHANNEL_RECIPIENT_CONSENT(e) });
}
function _(e) {
    return i.tn.put({
        url: l.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e }
    });
}
function E() {
    s.Z.getLocationMetadata();
}
