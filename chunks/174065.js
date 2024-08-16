n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(70956);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = { captionsById: new Map() },
    u = l,
    c = !1,
    d = null;
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        u = null != e ? { captionsById: new Map(e.captionsById) } : l;
    }
    getState() {
        return u;
    }
    getCaptionsForEmojiById(e) {
        var t;
        let { emojiId: n } = e;
        return null !== (t = u.captionsById.get(n)) && void 0 !== t ? t : [];
    }
    getIsFetching() {
        return c;
    }
    getEmojiCaptionsTTL() {
        return d;
    }
    hasPersistedState() {
        return u.captionsById.size > 0;
    }
    clear() {
        (u = l), (c = !1), (d = null);
    }
}
o(_, 'displayName', 'EmojiCaptionsStore'),
    o(_, 'persistKey', 'EmojiCaptionsStore'),
    (t.Z = new _(a.Z, {
        LOGOUT: function () {
            (u = l), (c = !1), (d = null);
        },
        EMOJI_CAPTIONS_FETCH: function (e) {
            let {} = e;
            !c && (c = !0);
        },
        EMOJI_CAPTIONS_FETCH_SUCCESS: function (e) {
            let { emojiCaptions: t } = e;
            (u.captionsById = new Map(Object.entries(t))), (c = !1), (d = Date.now() + 360 * s.Z.Millis.MINUTE);
        },
        EMOJI_CAPTIONS_FETCH_ERROR: function (e) {
            let { is4XXError: t } = e;
            c = !1;
            d = Date.now() + (t ? 10 : 1) * s.Z.Millis.MINUTE;
        },
        POST_CONNECTION_OPEN: function (e) {
            let {} = e;
            c = !1;
        }
    }));
