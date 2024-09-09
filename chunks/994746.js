n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(627341);
var r = n(278074),
    i = n(90712),
    a = n(981631),
    s = n(689938);
function o(e) {
    let t = (0, i.Z)(e);
    return {
        text: (0, r.EQ)([e.type, null == t ? void 0 : t.type])
            .with([a.IIU.PLAYING, a.ABu.XBOX], () => s.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: s.Z.Messages.XBOX }))
            .with([a.IIU.PLAYING, a.ABu.PLAYSTATION], () => s.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: s.Z.Messages.PLAYSTATION }))
            .with([a.IIU.STREAMING, a.ABu.TWITCH], () => s.Z.Messages.UNFORMATTED_STREAMING.format({ name: s.Z.Messages.INTEGRATIONS_TWITCH }))
            .with([a.IIU.STREAMING, a.ABu.YOUTUBE], () => s.Z.Messages.UNFORMATTED_STREAMING.format({ name: s.Z.Messages.INTEGRATIONS_YOUTUBE }))
            .with([a.IIU.PLAYING, r.P.any], () => s.Z.Messages.USER_ACTIVITY_PLAYING)
            .with([a.IIU.STREAMING, r.P.any], () => s.Z.Messages.USER_ACTIVITY_STREAMING)
            .with([a.IIU.LISTENING, r.P.any], () => s.Z.Messages.UNFORMATTED_LISTENING_TO.format({ name: e.name }))
            .with([a.IIU.WATCHING, r.P.any], () => s.Z.Messages.UNFORMATTED_WATCHING.format({ name: e.name }))
            .with([a.IIU.COMPETING, r.P.any], () => s.Z.Messages.UNFORMATTED_COMPETING.format({ name: e.name }))
            .with([a.IIU.HANG_STATUS, r.P.any], () => s.Z.Messages.USER_ACTIVITY_CURRENTLY)
            .otherwise(() => null),
        icon: null == t ? void 0 : t.icon
    };
}
