var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(703558);
let c = {},
    d = {};
class _ extends (s = o.ZP.Store) {
    getStickerPreview(e, t) {
        return (t === u.d.FirstThreadMessage ? d : c)[e];
    }
}
(a = 'StickerMessagePreviewStore'),
    (i = 'displayName') in (r = _)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a);
let E = new _(l.Z, {
    ADD_STICKER_PREVIEW: function (e) {
        let { channelId: t, sticker: n, draftType: r } = e;
        (r === u.d.FirstThreadMessage ? d : c)[t] = [n];
    },
    CLEAR_STICKER_PREVIEW: function (e) {
        let { channelId: t, draftType: n } = e,
            r = n === u.d.FirstThreadMessage ? d : c;
        null != r[t] && delete r[t];
    },
    LOGOUT: function () {
        (c = {}), (d = {});
    }
});
t.Z = E;
