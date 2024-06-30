var s = n(442837), a = n(570140);
let i = {};
class r extends s.ZP.Store {
    hasFetched(e) {
        return null != i[e];
    }
    getTopChannelIds(e) {
        return '874345844743213126' === e ? [
            '1041887225819955252',
            '985996080107892776',
            '1035280727610241166'
        ] : i[e];
    }
}
t.Z = new r(a.Z, {
    GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function (e) {
        let {
            guildId: t,
            topChannelIds: n
        } = e;
        i[t] = n;
    }
});
