n.d(t, {
    Xy: function () {
        return N;
    },
    e4: function () {
        return c;
    },
    gN: function () {
        return u;
    },
    hi: function () {
        return T;
    },
    qR: function () {
        return E;
    },
    r_: function () {
        return I;
    }
});
var s = n(544891), o = n(570140), r = n(893776), a = n(290323), i = n(981631);
async function c(e) {
    await s.tn.put({
        url: i.ANM.CHANNEL_RECIPIENT_CONSENT(e),
        body: { consent_status: a.h.ACCEPTED }
    }), o.Z.dispatch({
        type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
        channelId: e
    });
}
function E(e) {
    return s.tn.put({
        url: i.ANM.CHANNEL_RECIPIENT_CONSENT(e),
        body: { consent_status: a.h.UNSPECIFIED }
    });
}
function N(e) {
    return s.tn.put({
        url: i.ANM.CHANNEL_RECIPIENT_CONSENT(e),
        body: { consent_status: a.h.PENDING }
    });
}
function u(e) {
    return s.tn.del({ url: i.ANM.CHANNEL_RECIPIENT_CONSENT(e) });
}
function I(e) {
    return s.tn.put({
        url: i.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e }
    });
}
function T() {
    r.Z.getLocationMetadata();
}
