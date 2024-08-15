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
  u = n(139665);
let c = {
default: void 0,
crunchyroll: u.aspectRatioCrunchyroll
  },
  d = 60,
  _ = 24;

function E(e) {
  let {
image: t,
richImage: n,
aspectRatio: i,
onClick: E
  } = e;
  return (0, r.jsxs)('div', {
className: a()(u.imagePosition, c[null != i ? i : 'default']),
children: [
  (0, r.jsx)(s.Tooltip, {
    text: t.text,
    children: e => {
      var n, i;
      return (0, r.jsx)(s.Clickable, {
        ...e,
        className: a()(u.imageContainer, {
          [u.clickable]: null != E
        }),
        onClick: E,
        children: (0, r.jsx)(o.f, {
          src: t.src,
          alt: null !== (i = null !== (n = t.alt) && void 0 !== n ? n : t.text) && void 0 !== i ? i : l.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
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