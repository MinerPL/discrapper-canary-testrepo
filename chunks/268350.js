n.d(t, {
    $p: function () {
        return g;
    },
    FQ: function () {
        return T;
    },
    Il: function () {
        return S;
    },
    Jf: function () {
        return O;
    },
    SA: function () {
        return D;
    },
    Um: function () {
        return N;
    },
    eu: function () {
        return R;
    },
    hW: function () {
        return L;
    },
    lY: function () {
        return v;
    },
    pk: function () {
        return A;
    },
    qB: function () {
        return C;
    }
}),
    n(653041);
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    s = n(570140),
    o = n(668781),
    l = n(38618),
    u = n(706454),
    c = n(675478),
    d = n(598077),
    _ = n(486472),
    E = n(594174),
    f = n(73346),
    h = n(926491),
    p = n(981631),
    m = n(526761),
    I = n(689938);
let T = async (e, t) => {
        let { body: n } = await (0, f.Kb)(p.ANM.STICKER_PACK(e));
        return (
            s.Z.dispatch({
                type: 'STICKER_PACK_FETCH_SUCCESS',
                packId: e,
                pack: n,
                ingestStickers: t
            }),
            n
        );
    },
    g = async function () {
        let { locale: e = u.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (h.Z.isFetchingStickerPacks || h.Z.hasLoadedStickerPacks) return;
        s.Z.wait(() => {
            s.Z.dispatch({ type: 'STICKER_PACKS_FETCH_START' });
        });
        let {
            body: { sticker_packs: t }
        } = await a.tn.get({
            url: p.ANM.STICKER_PACKS,
            query: { locale: e }
        });
        s.Z.dispatch({
            type: 'STICKER_PACKS_FETCH_SUCCESS',
            packs: t
        });
    },
    S = async (e) => {
        let { body: t } = await a.tn.get({ url: p.ANM.STICKER(e) });
        s.Z.dispatch({
            type: 'STICKER_FETCH_SUCCESS',
            sticker: t
        });
    },
    A = async (e) => {
        let { body: t } = await a.tn.get({ url: p.ANM.GUILD_STICKER_PACKS(e) });
        s.Z.dispatch({
            type: 'GUILD_STICKERS_FETCH_SUCCESS',
            guildId: e,
            stickers: t.map((e) =>
                null != e.user
                    ? {
                          ...e,
                          user: new d.Z(e.user)
                      }
                    : e
            )
        });
    },
    N = async (e) => {
        await a.tn.del({ url: p.ANM.GUILD_STICKER(e.guild_id, e.id) });
    },
    v = async (e, t) => {
        let n = await a.tn.post({
            url: p.ANM.GUILD_STICKER_PACKS(e),
            body: t
        });
        return (
            s.Z.dispatch({
                type: 'GUILD_STICKERS_CREATE_SUCCESS',
                guildId: e,
                sticker: {
                    ...n.body,
                    user: E.default.getCurrentUser()
                }
            }),
            n.body
        );
    },
    O = async (e, t, n) =>
        (
            await a.tn.patch({
                url: p.ANM.GUILD_STICKER(e, t),
                body: n
            })
        ).body;
function R(e, t, n) {
    s.Z.dispatch({
        type: 'ADD_STICKER_PREVIEW',
        channelId: e,
        sticker: t,
        draftType: n
    });
}
function C(e, t) {
    s.Z.dispatch({
        type: 'CLEAR_STICKER_PREVIEW',
        channelId: e,
        draftType: t
    });
}
function y(e) {
    return _.Z.totalUnavailableGuilds > 0 || !l.Z.isConnected() ? e : e.filter((e) => null != h.Z.getStickerById(e));
}
function D(e) {
    c.DZ.updateAsync(
        'favoriteStickers',
        (t) =>
            ((t.stickerIds = y(t.stickerIds)), i().size(t.stickerIds) >= m.oX)
                ? (o.Z.show({
                      title: I.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                      body: I.Z.Messages.FAVORITES_LIMIT_REACHED_BODY.format({ count: m.oX })
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        m.fy.INFREQUENT_USER_ACTION
    );
}
function L(e) {
    c.DZ.updateAsync(
        'favoriteStickers',
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = y(t.stickerIds));
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
