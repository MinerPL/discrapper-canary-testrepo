n.d(t, {
  Bp: function() {
return _;
  },
  WQ: function() {
return d;
  },
  ZP: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(43205),
  l = n(689938),
  u = n(692184);
let c = {
default: u.imageAspectRatioDefault,
crunchyroll: u.imageAspectRatioCrunchyroll
  },
  d = 60,
  _ = 24;

function E(e) {
  let {
image: t,
richImage: n,
onClick: i,
aspectRatio: E = 'default'
  } = e, f = c[E];
  return (0, r.jsxs)('div', {
className: a()(u.imagePosition, f),
style: {
  aspectRatio: E
},
children: [
  (0, r.jsx)(s.Tooltip, {
    text: t.text,
    children: e => {
      var n, c;
      return (0, r.jsx)(s.Clickable, {
        ...e,
        className: a()(u.imageContainer, {
          [u.clickable]: null != i
        }),
        onClick: i,
        children: (0, r.jsx)(o.f, {
          src: t.src,
          alt: null !== (c = null !== (n = t.alt) && void 0 !== n ? n : t.text) && void 0 !== c ? c : l.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
          size: d,
          className: u.contentImage,
          constrain: 'width'
        })
      });
    }
  }),
  null != n && (0, r.jsx)(s.Tooltip, {
    text: n.text,
    children: e => {
      var t;
      return (0, r.jsx)('div', {
        ...e,
        className: u.richImageContainer,
        children: (0, r.jsx)(o.f, {
          src: n.src,
          alt: null !== (t = n.alt) && void 0 !== t ? t : n.text,
          size: _,
          className: u.contentImage,
          constrain: 'width'
        })
      });
    }
  })
]
  });
}