n.d(t, {
    a: function () {
        return l;
    },
    j: function () {
        return u;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(626135),
    s = n(70956),
    o = n(981631);
async function l(e, t) {
    let n;
    let l = performance.now(),
        u = 0;
    switch (e.type) {
        case 'channel':
            n = o.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case 'guild':
            n = o.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case 'user':
            n = o.ANM.APPLICATION_COMMAND_INDEX_USER;
            break;
        case 'application':
            n = o.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    let c = async (t) =>
            u >= 3
                ? (_(!0),
                  i.Z.dispatch({
                      type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                      target: e
                  }))
                : (await new Promise((e) => setTimeout(e, t)), d()),
        d = () =>
            r.tn
                .get({
                    url: n,
                    retries: 3 - u - 1,
                    signal: t.signal,
                    onRequestCreated: () => u++
                })
                .then(
                    (t) =>
                        202 === t.status
                            ? c(5000)
                            : (_(!1),
                              i.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                                  target: e,
                                  index: t.body
                              })),
                    (n) => {
                        if (t.signal.aborted) {
                            _(!0);
                            return;
                        }
                        return 429 === n.status
                            ? c(n.body.retry_after * s.Z.Millis.SECOND)
                            : (_(!0),
                              i.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                                  target: e
                              }));
                    }
                ),
        _ = (e) => {
            let n = performance.now() - l;
            a.default.track(o.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: n,
                error: e,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(u - 1, 0),
                kind: null,
                command_type: null
            });
        };
    await d();
}
function u(e) {
    i.Z.dispatch({
        type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
        target: e
    });
}
