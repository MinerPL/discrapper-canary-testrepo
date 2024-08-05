n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(512722),
  s = n.n(r),
  u = n(392711),
  d = n.n(u),
  c = n(941797),
  m = n(546432),
  p = n(217702),
  h = n(4925);
let _ = Math.round((p.mT - 8) / 3),
  E = Math.round((p.mT - 4) / 2),
  I = Math.round((p.Jj - 4) / 2),
  x = Math.round(2 * (p.mT - 4) / 3),
  g = x / 2;

function C(e) {
  let {
visualMediaItems: t,
footer: n
  } = e;
  null != n && s()(1 === t.length, 'footer only gets applied to single items');
  let o = t.length;
  if (1 === o)
return (0, i.jsx)(M, {
  itemsForLayout: t,
  isSingleImage: !0,
  footer: n
});
  if (2 === o)
return (0, i.jsx)(f, {
  itemsForLayout: t
});
  if (3 === o)
return (0, i.jsx)(N, {
  itemsForLayout: t
});
  if (4 === o)
return (0, i.jsx)(T, {
  itemsForLayout: t
});
  let a = o % 3;
  return (0, i.jsxs)(i.Fragment, {
children: [
  1 === a && (0, i.jsx)(M, {
    itemsForLayout: t.slice(0, a)
  }),
  2 === a && (0, i.jsx)(f, {
    itemsForLayout: t.slice(0, a)
  }),
  0 === a ? (0, i.jsx)(O, {
    itemsForLayout: t
  }) : (0, i.jsx)(O, {
    itemsForLayout: t.slice(a)
  })
]
  });
}

function M(e) {
  let {
itemsForLayout: t,
isSingleImage: n,
footer: o
  } = e, a = t[0];
  return (0, i.jsx)('div', {
className: l()(h.oneByOneGrid, {
  [h.oneByOneGridSingle]: n,
  [h.oneByOneGridMosaic]: !n,
  [h.hasFooter]: null != o
}),
children: (0, i.jsx)(y, {
  props: a,
  useFullWidth: !n,
  isSingleItem: !0,
  footer: o
})
  });
}

function f(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: h.oneByTwoGrid,
children: t.map(e => (0, i.jsx)('div', {
  className: h.oneByTwoGridItem,
  children: (0, i.jsx)(y, {
    props: e,
    maxWidth: E,
    maxHeight: E
  })
}, e.item.uniqueId))
  });
}

function N(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsxs)('div', {
className: l()(h.oneByTwoGrid, h.oneByTwoLayoutThreeGrid),
children: [
  (0, i.jsx)('div', {
    className: h.oneByTwoSoloItem,
    children: (0, i.jsx)(y, {
      props: t[0],
      maxWidth: x
    })
  }),
  (0, i.jsx)('div', {
    className: h.oneByTwoDuoItem,
    children: (0, i.jsx)('div', {
      className: h.twoByOneGrid,
      children: t.splice(1).map(e => (0, i.jsx)('div', {
        className: h.twoByOneGridItem,
        children: (0, i.jsx)(y, {
          props: e,
          maxWidth: g,
          maxHeight: I
        })
      }, e.item.uniqueId))
    })
  })
]
  });
}

function T(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: h.twoByTwoGrid,
children: t.map(e => (0, i.jsx)(y, {
  props: e,
  maxWidth: E,
  maxHeight: I
}, e.item.uniqueId))
  });
}

function O(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: h.threeByThreeGrid,
children: t.map(e => (0, i.jsx)(y, {
  props: e,
  maxWidth: _,
  maxHeight: _
}, e.item.uniqueId))
  });
}
let A = e => ({
className: l()(e, h.itemContentContainer),
imgContainerClassName: h.lazyImgContainer,
imgClassName: h.lazyImg
  }),
  v = e => ({
className: l()(e, h.lazyImg)
  });

function y(e) {
  let {
props: t,
maxWidth: n = p.mT,
maxHeight: o = p.Jj,
useFullWidth: a = !0,
isSingleItem: l = !1,
footer: r
  } = e, s = t.item.type, u = {
...t,
...'IMAGE' === s && A(t.className),
...'VIDEO' === s && v(t.className),
mediaLayoutType: p.hV.MOSAIC,
maxWidth: n,
maxHeight: o,
useFullWidth: a,
isSingleMosaicItem: l
  };
  return (0, i.jsx)(c.h.Provider, {
value: t.gifFavoriteButton,
children: (0, i.jsx)(m.ZP, {
  ...u,
  footer: r
})
  });
}
t.Z = function(e) {
  let {
items: t,
inlineForwardButton: n
  } = e, {
groupableVisualMediaItems: a,
nonGroupableVisualMediaItems: l,
nonVisualMediaItems: r
  } = function(e) {
return o.useMemo(() => {
  let [t, n] = d().partition(e, e => (0, m.R_)(e.item.type)), [i, o] = d().partition(t, e => (0, m.Ld)(e.item.type));
  return {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: o,
    nonVisualMediaItems: n
  };
}, [e]);
  }(t);
  return (0, i.jsxs)(i.Fragment, {
children: [
  a.length > 0 && (null != n ? (0, i.jsxs)('div', {
    className: h.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: h.visualMediaItemContainer,
        children: (0, i.jsx)(C, {
          visualMediaItems: a
        })
      }),
      n
    ]
  }) : (0, i.jsx)('div', {
    className: h.visualMediaItemContainer,
    children: (0, i.jsx)(C, {
      visualMediaItems: a
    })
  })),
  l.length > 0 && l.map(e => {
    let t = e.renderMosaicItemFooter({
      item: e.item,
      message: e.message
    });
    return (0, i.jsx)('div', {
      className: h.visualMediaItemContainer,
      children: (0, i.jsx)(C, {
        visualMediaItems: [e],
        footer: t
      })
    }, e.item.uniqueId);
  }),
  r.length > 0 && (0, i.jsx)('div', {
    className: h.nonVisualMediaItemContainer,
    children: r.map(e => (0, i.jsx)('div', {
      className: h.nonVisualMediaItem,
      children: (0, i.jsx)(y, {
        props: e
      })
    }, e.item.uniqueId))
  })
]
  });
};