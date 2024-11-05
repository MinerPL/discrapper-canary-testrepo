n.d(t, {
    FO: function () {
        return E;
    },
    YC: function () {
        return v;
    },
    rv: function () {
        return g;
    }
}),
    n(47120);
var r = n(726542),
    i = n(394821),
    a = n(834353),
    s = n(802856),
    o = n(835473),
    l = n(210753),
    u = n(81063),
    c = n(162461),
    d = n(26033),
    f = n(561308),
    _ = n(981631),
    h = n(701488),
    p = n(388032);
function m(e) {
    let t = null == e ? void 0 : e.getIconURL(h.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? p.intl.string(p.t['2B/phI']) : p.intl.formatToPlainString(p.t.tiKyYm, { applicationName: n })
        };
}
function g(e) {
    var t, n;
    let { entry: r, showCoverImage: i = !0 } = e,
        a = (0, c.wh)('useImageForContentEntry'),
        { activity: s, activityApplication: o, fallbackApplication: _ } = (0, f.qy)(r),
        { largeImage: p, smallImage: m } = v(s, o),
        { largeImage: g } = E(s, null != _ ? _ : o),
        { coverImageUrl: I } = (0, l.$)(null === (t = null != _ ? _ : o) || void 0 === t ? void 0 : t.id);
    let S =
        ((n = r),
        (0, d.dU)(n) && n.extra.entries.length > 0
            ? { src: n.extra.entries[0].media.image_url }
            : (0, d.y0)(n)
              ? {
                    src: (0, u.getAssetImage)(n.extra.application_id, n.extra.media_assets_large_image, h.Si.LARGE),
                    alt: n.extra.media_title
                }
              : (0, d.KF)(n)
                ? { src: n.extra.media.image_url }
                : void 0);
    return null != p && a
        ? {
              largeImage: p,
              smallImage: m
          }
        : null != S
          ? {
                largeImage: S,
                smallImage: void 0
            }
          : null != I && i
            ? {
                  largeImage: { src: I },
                  smallImage: void 0
              }
            : {
                  largeImage: g,
                  smallImage: void 0
              };
}
function E(e, t) {
    let { largeImage: n, smallImage: i } = v(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: i
        };
    if (null == n && (0, s.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(_.ABu.XBOX).icon.customPNG,
                alt: p.intl.string(p.t['Nfvo7+'])
            },
            smallImage: void 0
        };
    if (null == n && null == i && (0, a.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(_.ABu.PLAYSTATION).icon.lightPNG,
                alt: p.intl.string(p.t.fFl4jo)
            },
            smallImage: void 0
        };
    let o = m(t);
    return null != o
        ? {
              largeImage: o,
              smallImage: i
          }
        : {
              largeImage: i,
              smallImage: void 0
          };
}
function v(e, t) {
    var n, r, a, s, l, c;
    let d = (0, o.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let f = null == e ? void 0 : null === (n = e.assets) || void 0 === n ? void 0 : n.large_image,
        _ =
            null != f
                ? {
                      src: (0, u.getAssetImage)(e.application_id, f, [h.Si.LARGE, h.Si.LARGE]),
                      text: null === (a = e.assets) || void 0 === a ? void 0 : null === (r = a.large_text) || void 0 === r ? void 0 : r.trim()
                  }
                : void 0,
        p = (0, i.Z)(e) ? void 0 : null == e ? void 0 : null === (s = e.assets) || void 0 === s ? void 0 : s.small_image,
        g =
            null != p
                ? {
                      src: (0, u.getAssetImage)(e.application_id, p, [h.Si.LARGE, h.Si.LARGE]),
                      text: null === (c = e.assets) || void 0 === c ? void 0 : null === (l = c.small_text) || void 0 === l ? void 0 : l.trim()
                  }
                : void 0;
    return {
        largeImage: null != _ ? _ : m(null != t ? t : d),
        smallImage: g
    };
}
