var r, i, a, o = n(445346), s = n(570140), l = n(703558);
let u = {}, c = {};
class d extends o.y {
    getStickerPreview(e, t) {
        return (t === l.d.FirstThreadMessage ? c : u)[e];
    }
}
a = 'StickerMessagePreviewStore', (i = 'displayName') in (r = d) ? Object.defineProperty(r, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = a;
let _ = new d(s.Z, {
    ADD_STICKER_PREVIEW: function (e) {
        let {
            channelId: t,
            sticker: n,
            draftType: r
        } = e;
        (r === l.d.FirstThreadMessage ? c : u)[t] = [n];
    },
    CLEAR_STICKER_PREVIEW: function (e) {
        let {
                channelId: t,
                draftType: n
            } = e, r = n === l.d.FirstThreadMessage ? c : u;
        null != r[t] && delete r[t];
    },
    LOGOUT: function () {
        u = {}, c = {};
    }
});
t.Z = _;
