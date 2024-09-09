_.d(E, {
    s: function () {
        return r;
    }
});
var n = _(704215),
    t = _(570140),
    s = _(605236),
    a = _(592125),
    M = _(305587);
function r(e) {
    let { channelId: E, location: _ } = e,
        r = a.Z.getChannel(E),
        S = (0, s.un)(n.z.USER_DM_MUTE_FEEDBACK);
    if (null != r && !!r.isDM() && !S)
        (0, M.Xs)(_) &&
            t.Z.dispatch({
                type: 'USER_DM_MUTE_SHOW_FEEDBACK',
                channel: r
            });
}
