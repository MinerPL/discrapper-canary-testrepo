n(757143), n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(377108),
    u = n(552075),
    c = n(570140),
    d = n(981631),
    _ = n(689938);
let E = {
        MP4: 'mp4',
        TINYMP4: 'tinymp4',
        NANOMP4: 'nanomp4',
        WEBM: 'webm',
        TINYWEBM: 'tinywebm',
        NANOWEBM: 'nanowebm'
    },
    f = {
        FIXED_HEIGHT_MP4: 'fixed_height.mp4',
        FIXED_HEIGHT_SMALL_MP4: 'fixed_height_small.mp4',
        FIXED_WIDTH_MP4: 'fixed_width.mp4',
        FIXED_WIDTH_SMALL_MP4: 'fixed_width_small.mp4',
        DOWNSIZED_SMALL_MP4: 'downsized_small.mp4',
        ORIGINAL_MP4: 'original.mp4'
    },
    h = E.MP4,
    p = null,
    m = '',
    I = '',
    T = [],
    g = [],
    S = [],
    A = [];
function N(e) {
    return e.replace(/^https?:/, '');
}
class v extends (r = o.ZP.Store) {
    getAnalyticsID() {
        return p;
    }
    getQuery() {
        return m;
    }
    getResultQuery() {
        return I;
    }
    getResultItems() {
        return T;
    }
    getTrendingCategories() {
        return g;
    }
    getSelectedFormat() {
        return h;
    }
    getSuggestions() {
        return S;
    }
    getTrendingSearchTerms() {
        return A;
    }
}
(s = 'GIFPickerViewStore'),
    (a = 'displayName') in (i = v)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new v(c.Z, {
        GIF_PICKER_INITIALIZE: function (e) {
            p = e.analyticsID;
        },
        GIF_PICKER_QUERY: function (e) {
            '' === (m = e.query) && ((I = ''), (T = []), (S = []));
        },
        GIF_PICKER_QUERY_SUCCESS: function (e) {
            if (null != e.query && m === I) return !1;
            null != e.query && (I = e.query),
                (T = e.items.map((e) => {
                    let { width: t, height: n, src: r, gif_src: i, url: a, id: s } = e;
                    return {
                        width: t,
                        height: n,
                        src: N(r),
                        gifSrc: N(i),
                        url: a,
                        id: s,
                        format: !(function (e) {
                            switch (e) {
                                case f.FIXED_HEIGHT_MP4:
                                case f.FIXED_HEIGHT_SMALL_MP4:
                                case f.FIXED_WIDTH_MP4:
                                case f.FIXED_WIDTH_SMALL_MP4:
                                case f.DOWNSIZED_SMALL_MP4:
                                case f.ORIGINAL_MP4:
                                case E.MP4:
                                case E.TINYMP4:
                                case E.NANOMP4:
                                case E.WEBM:
                                case E.TINYWEBM:
                                case E.NANOWEBM:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })(h)
                            ? l.EO.IMAGE
                            : l.EO.VIDEO
                    };
                }));
        },
        GIF_PICKER_QUERY_FAILURE: function (e) {
            let { query: t } = e;
            if (null == t) return !1;
            (I = t), (T = []);
        },
        GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
            let t = e.trendingCategories;
            g = [
                ...(null != e.trendingGIFPreview
                    ? [
                          {
                              type: d.wI2.TRENDING_GIFS,
                              icon: u.I,
                              name: _.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                              src: N(e.trendingGIFPreview.src),
                              format: l.EO.IMAGE
                          }
                      ]
                    : []),
                ...t.map((e) => ({
                    ...e,
                    src: N(e.src),
                    type: d.wI2.TRENDING_CATEGORY,
                    format: l.EO.VIDEO
                }))
            ];
        },
        GIF_PICKER_SUGGESTIONS_SUCCESS: function (e) {
            let { items: t } = e;
            S = t;
        },
        GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
            let { items: t } = e;
            A = t;
        }
    }));
