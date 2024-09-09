n.d(t, {
    FO: function () {
        return T;
    },
    YC: function () {
        return S;
    },
    rv: function () {
        return m;
    }
}),
    n(47120);
var r = n(726542),
    i = n(394821),
    a = n(841784),
    s = n(834353),
    o = n(802856),
    l = n(835473),
    u = n(210753),
    c = n(81063),
    d = n(162461),
    _ = n(26033),
    E = n(561308),
    f = n(981631),
    h = n(701488),
    p = n(689938);
function I(e) {
    let t = null == e ? void 0 : e.getIconURL(h.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? p.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL : p.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: n })
        };
}
function m(e) {
    var t, n;
    let { entry: r, showCoverImage: i = !0 } = e,
        a = (0, d.wh)('useImageForContentEntry'),
        { activity: s, activityApplication: o, fallbackApplication: l } = (0, E.qy)(r),
        { largeImage: f, smallImage: p } = S(s, o),
        { largeImage: I } = T(s, null != l ? l : o),
        { coverImageUrl: m } = (0, u.$)(null === (t = null != l ? l : o) || void 0 === t ? void 0 : t.id);
    let g =
        ((n = r),
        (0, _.dU)(n)
            ? { src: n.extra.entries[0].media.image_url }
            : (0, _.y0)(n)
              ? {
                    src: (0, c.getAssetImage)(n.extra.application_id, n.extra.media_assets_large_image, h.Si.LARGE),
                    alt: n.extra.media_title
                }
              : (0, _.KF)(n)
                ? { src: n.extra.media.image_url }
                : void 0);
    return null != f && a
        ? {
              largeImage: f,
              smallImage: p
          }
        : null != g
          ? {
                largeImage: g,
                smallImage: void 0
            }
          : null != m && i
            ? {
                  largeImage: { src: m },
                  smallImage: void 0
              }
            : {
                  largeImage: I,
                  smallImage: void 0
              };
}
function T(e, t) {
    let { largeImage: n, smallImage: i } = S(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: i
        };
    if (null == n && (0, o.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(f.ABu.XBOX).icon.customPNG,
                alt: p.Z.Messages.XBOX
            },
            smallImage: void 0
        };
    if (null == n && null == i && (0, s.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(f.ABu.PLAYSTATION).icon.lightPNG,
                alt: p.Z.Messages.PLAYSTATION
            },
            smallImage: void 0
        };
    let a = I(t);
    return null != a
        ? {
              largeImage: a,
              smallImage: i
          }
        : {
              largeImage: i,
              smallImage: void 0
          };
}
function S(e, t) {
    var n, r, s, o, u, d;
    let _ = (0, l.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let E = I(null != t ? t : _);
    if ((0, a.Z)(e) && null != E)
        return {
            largeImage: E,
            smallImage: void 0
        };
    let f = null == e ? void 0 : null === (n = e.assets) || void 0 === n ? void 0 : n.large_image,
        p =
            null != f
                ? {
                      src: (0, c.getAssetImage)(e.application_id, f, [h.Si.LARGE, h.Si.LARGE]),
                      text: null === (s = e.assets) || void 0 === s ? void 0 : null === (r = s.large_text) || void 0 === r ? void 0 : r.trim()
                  }
                : void 0,
        m = (0, i.Z)(e) ? void 0 : null == e ? void 0 : null === (o = e.assets) || void 0 === o ? void 0 : o.small_image;
    return {
        largeImage: null != p ? p : E,
        smallImage:
            null != m
                ? {
                      src: (0, c.getAssetImage)(e.application_id, m, [h.Si.LARGE, h.Si.LARGE]),
                      text: null === (d = e.assets) || void 0 === d ? void 0 : null === (u = d.small_text) || void 0 === u ? void 0 : u.trim()
                  }
                : void 0
    };
}
