n.d(t, {
    J: function () {
        return N;
    }
});
var i = n(470079),
    a = n(399606),
    s = n(430198),
    r = n(754688),
    l = n(314897),
    o = n(592125),
    c = n(271383),
    u = n(430824),
    d = n(914010),
    _ = n(594174),
    E = n(158222),
    I = n(312146),
    m = n(487554),
    T = n(874748),
    h = n(981631);
function N(e, t) {
    let n = (0, I.p$)(),
        N = (0, T.LR)(e),
        f = (0, a.e7)(
            [c.ZP, l.default],
            () => {
                let e = l.default.getId();
                return c.ZP.isMember(null == N ? void 0 : N.guildId, e);
            },
            [N]
        ),
        C = (0, a.e7)([s.Z], () => null != N && (null == N ? void 0 : N.channelId) != null && s.Z.isChannelGated(N.guildId, N.channelId), [N]),
        p = t.hasFlag(h.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: g,
            guild: S,
            parentChannel: A,
            user: R,
            selectedGuildId: x,
            canAccess: O
        } = (0, a.cj)(
            [m.Z, u.Z, o.Z, _.default, d.Z],
            () => {
                var e;
                let t = null === (e = m.Z.getMediaPostEmbed(null == N ? void 0 : N.threadId)) || void 0 === e ? void 0 : e.media,
                    n = u.Z.getGuild(null == N ? void 0 : N.guildId),
                    i = o.Z.getChannel(null == N ? void 0 : N.channelId),
                    a = _.default.getUser(null == t ? void 0 : t.author_id),
                    s = d.Z.getGuildId(),
                    l = null != i && (0, r.YO)(i);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: i,
                    user: a,
                    selectedGuildId: s,
                    canAccess: l
                };
            },
            [N]
        ),
        M = i.useMemo(() => {
            let e = (0, T.ku)({
                mediaPostEmbedData: g,
                guild: S,
                parentChannel: A,
                user: R,
                selectedGuildId: x,
                canAccess: O
            });
            return null == e
                ? null
                : {
                      ...e,
                      user: R
                  };
        }, [g, S, A, R, x, O]);
    return (
        i.useEffect(() => {
            if ((null == N ? void 0 : N.threadId) != null) {
                let e = m.Z.getEmbedFetchState(N.threadId);
                !0 === n && e === m.M.NOT_FETCHED && (!f || !1 !== C) && (f || !p) && (0, E.xP)(null == N ? void 0 : N.threadId);
            }
        }, [N, n, f, C, p]),
        M
    );
}
