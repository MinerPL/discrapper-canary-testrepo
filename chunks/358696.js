n.d(t, {
    E: function () {
        return m;
    },
    J: function () {
        return i;
    }
});
var r,
    i,
    a = n(200651);
n(192379);
var s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(686546),
    c = n(442550),
    d = n(388032),
    f = n(262967);
let _ = {
    default: void 0,
    crunchyroll: f.aspectRatioCrunchyroll
};
((r = i || (i = {})).SIZE_60 = 'size-60'), (r.SIZE_72 = 'size-72');
let h = {
    'size-60': {
        imageSize: 60,
        smallImageSize: 24,
        mask: u.QS.CONTENT_IMAGE_60
    },
    'size-72': {
        imageSize: 72,
        smallImageSize: 32,
        mask: u.QS.CONTENT_IMAGE_72
    }
};
function p(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? (0, a.jsx)(a.Fragment, { children: t })
        : (0, a.jsx)(l.Clickable, {
              onClick: n,
              className: f.clickable,
              children: t
          });
}
function m(e) {
    var t, n;
    let { image: r, smallImage: i, aspectRatio: s, onClick: m, size: g } = e,
        { imageSize: E, smallImageSize: v, mask: I } = h[g],
        S = (0, a.jsx)(c.f, {
            src: null == r ? void 0 : r.src,
            alt: null !== (n = null !== (t = null == r ? void 0 : r.alt) && void 0 !== t ? t : null == r ? void 0 : r.text) && void 0 !== n ? n : d.intl.string(d.t['2B/phI']),
            size: E,
            className: f.contentImage,
            constrain: 'width'
        });
    return null == r
        ? S
        : (0, a.jsxs)('div', {
              className: o()(f.imagePosition, _[null != s ? s : 'default']),
              children: [
                  (0, a.jsx)(l.Tooltip, {
                      text: r.text,
                      children: (e) =>
                          (0, a.jsx)(p, {
                              onClick: m,
                              children:
                                  null != i
                                      ? (0, a.jsx)(u.ZP, {
                                            ...e,
                                            className: f.imageContainer,
                                            mask: I,
                                            width: E,
                                            height: E,
                                            children: S
                                        })
                                      : (0, a.jsx)('div', {
                                            ...e,
                                            className: f.imageContainer,
                                            children: S
                                        })
                          })
                  }),
                  null != i &&
                      (0, a.jsx)(l.Tooltip, {
                          text: i.text,
                          children: (e) => {
                              var t;
                              return (0, a.jsx)('div', {
                                  ...e,
                                  className: f.smallImageContainer,
                                  children: (0, a.jsx)(c.f, {
                                      src: i.src,
                                      alt: null !== (t = i.alt) && void 0 !== t ? t : i.text,
                                      size: v,
                                      className: f.contentImage,
                                      constrain: 'width'
                                  })
                              });
                          }
                      })
              ]
          });
}
