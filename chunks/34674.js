n.d(t, {
    $_: function () {
        return _;
    },
    KQ: function () {
        return m;
    },
    MU: function () {
        return h;
    },
    RF: function () {
        return Z;
    },
    m0: function () {
        return g;
    },
    rf: function () {
        return E;
    },
    tu: function () {
        return v;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(315314);
var i = n(860911),
    r = n(477690),
    s = n(481060),
    a = n(911969),
    l = n(134432),
    o = n(703656),
    c = n(768581),
    d = n(981631),
    u = n(388032);
let h = 0,
    { API_ENDPOINT: p, CDN_HOST: f } = window.GLOBAL_ENV;
function g(e) {
    return e.id === h;
}
function m() {
    return {
        id: h,
        name: u.intl.string(u.t.E407b2)
    };
}
function v(e) {
    switch (e.id) {
        case 0:
            return s.GlobeEarthIcon;
        case 4:
            return s.TvIcon;
        case 5:
            return s.AnalyticsIcon;
        case 6:
            return s.GameControllerIcon;
        case 8:
            break;
        case 9:
            return s.FriendsIcon;
        case 10:
            return s.WrenchIcon;
    }
    return s.AsteriskIcon;
}
function _(e) {
    let { itemId: t, hash: n } = e,
        i = new URLSearchParams({ size: (0, l.oO)(parseFloat(r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, l.x_)()).toString() }).toString(),
        s = c.$k ? 'webp' : 'png';
    return null != f
        ? ''.concat(location.protocol, '//').concat(f, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(s, '?').concat(i)
        : ''
              .concat(location.protocol)
              .concat(p)
              .concat(d.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, s), '?')
              .concat(i);
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let i = e[n];
        t.searchParams.set(n, i);
    }
    let n = t.pathname + t.search,
        r = (0, i.Ui)(n, !1);
    (0, o.uL)(r);
}
let x = (e) => {
    if (null == e) return null;
    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
    return null != t ? t[1] : null;
};
function Z(e) {
    switch (e.type) {
        case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return {
                type: d.s9s.IMG,
                width: 0,
                height: 0,
                src: n
            };
        case a.ee.YOUTUBE:
            let i = x(e.url);
            if (null != i)
                return {
                    type: d.s9s.YOUTUBE_VIDEO,
                    youtubeVideoId: i
                };
    }
    return console.warn('Unsupported carousel item', e), null;
}
