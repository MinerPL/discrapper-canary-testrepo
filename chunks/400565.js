n.d(t, {
  U: function() {
return u;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(598077),
  r = n(806519),
  l = n(865112),
  o = n(934914);
let c = e => {
let {
  mask: t
} = e;
return null == t ? null : (0, i.jsx)('div', {
  className: o.maskBackground,
  style: {
    backgroundColor: t.color.css
  },
  children: (0, i.jsx)('img', {
    className: o.maskIcon,
    alt: '',
    src: t.icon
  })
});
  },
  u = s.memo(function(e) {
let {
  item: t
} = e, n = null, s = !1;
if (null != t.icon_name)
  n = (0, i.jsx)('img', {
    alt: '',
    src: l.VH[(0, l.RB)(t.icon_name)]
  });
else if (null != t.other_user) {
  let e = t.other_user instanceof a.Z ? t.other_user : new a.Z(t.other_user);
  n = (0, i.jsx)('img', {
    alt: '',
    className: o.image,
    src: e.getAvatarURL(void 0, 40)
  }), s = !0;
} else
  n = null != t.icon_url ? (0, i.jsx)('img', {
    alt: '',
    className: o.image,
    src: t.icon_url
  }) : (0, i.jsx)('img', {
    alt: '',
    src: l.VH[(0, l.q7)(t)]
  });
let u = (0, l.Vi)(t.type);
return (0, i.jsxs)('div', {
  className: o.container,
  children: [
    (0, i.jsx)(r.ZP, {
      mask: null == u ? r.QS.AVATAR_DEFAULT : r.QS.AVATAR_STATUS_ROUND_16,
      width: 40,
      height: 40,
      rightOverhang: 3,
      bottomOverhang: 3,
      className: o.mask,
      children: (0, i.jsx)('div', {
        className: o.imageContainer,
        style: s ? void 0 : {
          backgroundColor: (0, l.Vu)(t)
        },
        children: n
      })
    }),
    (0, i.jsx)(c, {
      mask: u
    })
  ]
});
  });