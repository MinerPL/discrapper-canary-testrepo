n.d(t, {
    U: function () {
        return u;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(686546),
    r = n(598077),
    l = n(865112),
    o = n(31308);
let c = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
                  className: o.maskBackground,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)('img', {
                      className: o.maskIcon,
                      alt: '',
                      src: t.icon
                  })
              });
    },
    u = a.memo(function (e) {
        let { item: t } = e,
            n = null,
            a = !1;
        if (null != t.icon_name)
            n = (0, i.jsx)('img', {
                alt: '',
                src: l.VH[(0, l.RB)(t.icon_name)]
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof r.Z ? t.other_user : new r.Z(t.other_user);
            (n = (0, i.jsx)('img', {
                alt: '',
                className: o.image,
                src: e.getAvatarURL(void 0, 40)
            })),
                (a = !0);
        } else
            n =
                null != t.icon_url
                    ? (0, i.jsx)('img', {
                          alt: '',
                          className: o.image,
                          src: t.icon_url
                      })
                    : (0, i.jsx)('img', {
                          alt: '',
                          src: l.VH[(0, l.q7)(t)]
                      });
        let u = (0, l.Vi)(t.type);
        return (0, i.jsxs)('div', {
            className: o.container,
            children: [
                (0, i.jsx)(s.ZP, {
                    mask: null == u ? s.QS.AVATAR_DEFAULT : s.QS.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: o.mask,
                    children: (0, i.jsx)('div', {
                        className: o.imageContainer,
                        style: a ? void 0 : { backgroundColor: (0, l.Vu)(t) },
                        children: n
                    })
                }),
                (0, i.jsx)(c, { mask: u })
            ]
        });
    });
