n.d(t, {
    n: function () {
        return s;
    },
    x: function () {
        return o;
    }
}),
    n(47120);
var r = n(544891),
    i = n(570140),
    a = n(981631);
async function s() {
    i.Z.dispatch({ type: 'EMOJI_CAPTIONS_FETCH' });
    try {
        let { body: e } = await r.tn.get({ url: a.ANM.EMOJI_CAPTIONS_GET }),
            t = {};
        for (let n of e.items) t[n.emoji_id] = n.emoji_captions;
        i.Z.dispatch({
            type: 'EMOJI_CAPTIONS_FETCH_SUCCESS',
            emojiCaptions: t
        });
    } catch (t) {
        var e;
        i.Z.dispatch({
            type: 'EMOJI_CAPTIONS_FETCH_ERROR',
            is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
        });
    }
}
function o(e) {
    i.Z.dispatch({
        type: 'EMOJI_INTERACTION_INITIATED',
        interaction: e
    });
}
