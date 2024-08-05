n.d(t, {
  $G: function() {
return c;
  },
  OR: function() {
return u;
  },
  aL: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(345898),
  l = n(322356);
let o = 660,
  c = e => (0, i.jsx)(r.Z, {
...e,
className: a()(e.className, {
  [l.embedVertical]: !e.isHorizontal,
  [l.embedHorizontal]: e.isHorizontal
})
  }),
  u = e => {
let {
  isHorizontal: t
} = e;
return (0, i.jsx)(c, {
  ...e,
  media: () => (0, i.jsx)('div', {
    className: a()(l.loadingDescription),
    children: (0, i.jsx)('div', {
      className: a()(l.loadingBackgroundWrapper, {
        [l.loadingBackgroundWrapperHorizontal]: t
      }),
      children: (0, i.jsx)('div', {
        className: l.loadingBackground
      })
    })
  }),
  title: () => (0, i.jsx)('div', {
    className: a()(l.loadingImage, {
      [l.loadingImageHorizontal]: t
    })
  })
});
  };