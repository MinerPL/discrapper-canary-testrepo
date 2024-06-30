n.d(t, {
    V6: function () {
        return c;
    },
    fn: function () {
        return r;
    },
    xP: function () {
        return o;
    }
});
var i = n(544891), a = n(570140), s = n(881052), l = n(981631);
function r(e) {
    a.Z.dispatch({
        type: 'DISMISS_MEDIA_POST_SHARE_PROMPT',
        threadId: e
    });
}
async function o(e) {
    a.Z.dispatch({
        type: 'MEDIA_POST_EMBED_FETCH',
        threadId: e
    });
    try {
        let t = (await i.tn.get({ url: l.ANM.MEDIA_POST_RESHARE_GET_PREVIEW(e) })).body;
        a.Z.dispatch({
            type: 'MEDIA_POST_EMBED_FETCH_SUCCESS',
            threadId: e,
            mediaPostEmbed: t
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'MEDIA_POST_EMBED_FETCH_FAILURE',
            threadId: e
        });
    }
}
async function c(e) {
    try {
        return (await i.tn.post({
            url: l.ANM.UNFURL_EMBED_URLS,
            body: { urls: e }
        })).body;
    } catch (e) {
        throw new s.Hx(e);
    }
}
