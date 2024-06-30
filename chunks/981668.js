n(47120);
var r = n(147913), i = n(367907), a = n(728345), o = n(812206), s = n(574176), l = n(314897), u = n(592125), c = n(944486), d = n(885110), _ = n(649739), E = n(981631);
async function f(e) {
    await a.Z.fetchApplications(e, !1);
}
async function h(e) {
    if (null == e)
        return;
    let t = u.Z.getChannel(e), {enableHangStatus: n} = s.n.getCurrentConfig({ location: 'GameActivityManager' }, { autoTrackExposure: !1 });
    if (null == t || !((0, _.Ku)('running_games_change', !1) || n))
        return;
    let r = d.Z.getActivities();
    if (0 === r.length)
        return;
    let a = [...r].filter(e => e.type === E.IIU.PLAYING && e.application_id).map(e => e.application_id);
    await f([...a]);
    let c = o.Z.getApplication(a[0]);
    null != c && i.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
        channel_id: e,
        guild_id: t.guild_id,
        game_name: c.name,
        user_id: l.default.getId()
    });
}
class p extends r.Z {
    handleRunningGamesChange() {
        h(c.Z.getVoiceChannelId());
    }
    handleVoiceChannelSelect(e) {
        let {channelId: t} = e;
        h(t);
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
            VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new p();
