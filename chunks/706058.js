t.d(e, {
    Dk: function () {
        return a;
    },
    Ix: function () {
        return r;
    },
    me: function () {
        return s;
    }
});
var i = t(544891), l = t(981631);
async function s(n, e, t, s, a) {
    return (await i.tn.post({
        url: l.ANM.STAGE_INSTANCES,
        body: {
            channel_id: n,
            topic: e,
            privacy_level: t,
            guild_scheduled_event_id: a,
            send_start_notification: s
        }
    })).body;
}
async function a(n, e, t) {
    return (await i.tn.patch({
        url: l.ANM.STAGE_INSTANCE(n),
        body: {
            topic: e,
            privacy_level: t
        }
    })).body;
}
function r(n) {
    return i.tn.del(l.ANM.STAGE_INSTANCE(n));
}
