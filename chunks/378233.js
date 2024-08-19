n.d(t, {
    B0: function () {
        return D;
    },
    Hc: function () {
        return P;
    },
    J8: function () {
        return U;
    },
    Q6: function () {
        return C;
    },
    V9: function () {
        return G;
    },
    WD: function () {
        return M;
    },
    X_: function () {
        return L;
    },
    Zt: function () {
        return N;
    },
    Zv: function () {
        return O;
    },
    _V: function () {
        return R;
    },
    cv: function () {
        return x;
    },
    gM: function () {
        return B;
    },
    jl: function () {
        return w;
    },
    sM: function () {
        return y;
    },
    z: function () {
        return b;
    }
}),
    n(411104);
var r = n(606301),
    i = n(134432),
    a = n(581883),
    s = n(430824),
    o = n(117530),
    l = n(768581),
    u = n(358085),
    c = n(913663),
    d = n(373228),
    _ = n(611480),
    E = n(981631);
let { API_ENDPOINT: f, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: p, ASSET_ENDPOINT: m, CDN_HOST: I } = window.GLOBAL_ENV,
    T = Object.values(d.og),
    g = decodeURIComponent(E.ANM.STICKER_ASSET('[\\d]+', '('.concat(T.join('|'), ')'))),
    S = RegExp('('.concat(location.protocol).concat(m, '|').concat(location.protocol).concat(h, ')(').concat(g, ')'), 'ig'),
    A = RegExp(''.concat(location.protocol).concat(f, '(').concat(g, ')'), 'ig'),
    N = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    v = (e) => {
        switch (e) {
            case d.u3.PNG:
                return l.$k ? d.og.WEBP : d.og.PNG;
            case d.u3.APNG:
                return d.og.APNG;
            case d.u3.LOTTIE:
                return d.og.LOTTIE;
            case d.u3.GIF:
                return d.og.GIF;
            default:
                throw Error('Unexpected format type: '.concat(e));
        }
    },
    O = (e) => {
        switch (e) {
            case 'application/json':
                return d.u3.LOTTIE;
            case 'image/apng':
                return d.u3.APNG;
            case 'image/png':
            case 'image/webp':
                return d.u3.PNG;
            case 'image/gif':
                return d.u3.GIF;
            default:
                throw Error('Unexpected file type: '.concat(e));
        }
    },
    R = (e) => (null == e ? null : ''.concat(e.name, '.').concat(v(e.format_type))),
    C = function (e) {
        let { isPreview: t = !1, size: n = _.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let r = e.format_type;
        e.format_type === d.u3.GIF && t && (r = d.u3.PNG);
        let a = v(r),
            s = E.ANM.STICKER_ASSET(e.id, a),
            o = a === d.og.WEBP ? '&quality=lossless' : '';
        if ('development' !== p) {
            if (e.format_type === d.u3.LOTTIE) return ''.concat(location.protocol).concat(m).concat(s);
            let r = e.format_type === d.u3.APNG && t && !(0, u.isAndroid)() ? '&passthrough=false' : '',
                a = Math.min(2, (0, i.x_)());
            return ''
                .concat(location.protocol)
                .concat(h)
                .concat(s, '?size=')
                .concat((0, i.oO)(n * a))
                .concat(r)
                .concat(o);
        }
        return ''.concat(location.protocol).concat(f).concat(s);
    },
    y = (e, t) => {
        let n;
        let r = e.banner_asset_id;
        if (null == r) return null;
        let a = l.$k ? 'webp' : 'png';
        return (
            (n =
                null != I
                    ? ''.concat(location.protocol, '//').concat(I, '/app-assets/').concat(_.Ks, '/store/').concat(r, '.').concat(a)
                    : ''
                          .concat(location.protocol)
                          .concat(f)
                          .concat(E.ANM.STORE_ASSET(_.Ks, r, a))),
            null != t && (n += '?size='.concat((0, i.oO)(t))),
            n
        );
    },
    D = (e) => e.match('development' !== p ? S : A),
    L = (e) =>
        e.stickers.some((e) => {
            let { format_type: t } = e;
            return t === d.u3.APNG || t === d.u3.LOTTIE || t === d.u3.GIF;
        }),
    b = (e) => ({
        type: d.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: N(e)
    }),
    M = (e, t) => (e === _.yr.ANIMATE_ON_INTERACTION ? t : e !== _.yr.NEVER_ANIMATE),
    P = (e, t, n, i) => {
        if (o.Z.getUploadCount(n, i) > 0) return !0;
        let a = c.Z.getStickerPreview(n, i);
        if (null != a && a.length > 0) return !0;
        switch (e) {
            case d.V0.STICKER_PICKER:
                return '' !== t.trim();
            case d.V0.AUTOCOMPLETE:
            case d.V0.EXPRESSION_SUGGESTIONS:
                return (0, r.wN)(t).length > 1;
            case d.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    U = (e) => e.type === d.n0.GUILD,
    w = (e) => e.type === d.n0.STANDARD,
    x = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    G = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== s.Z.getGuild(t);
    },
    k = [];
function B(e) {
    var t, n;
    return (null !== (n = null === (t = a.Z.frecencyWithoutFetchingLatest.favoriteStickers) || void 0 === t ? void 0 : t.stickerIds) && void 0 !== n ? n : k).includes(e);
}
