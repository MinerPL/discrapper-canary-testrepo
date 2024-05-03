"use strict";
i.r(t), i("47120");
var n = i("735250"),
  s = i("470079"),
  l = i("120356"),
  a = i.n(l),
  o = i("512722"),
  r = i.n(o),
  u = i("392711"),
  d = i.n(u),
  c = i("941797"),
  m = i("69750"),
  I = i("768760"),
  h = i("207057");
let M = Math.round((I.MEDIA_MOSAIC_MAX_WIDTH - 8) / 3),
  f = Math.round((I.MEDIA_MOSAIC_MAX_WIDTH - 4) / 2),
  p = Math.round((I.MEDIA_MOSAIC_MAX_HEIGHT - 4) / 2),
  x = Math.round(2 * (I.MEDIA_MOSAIC_MAX_WIDTH - 4) / 3),
  T = x / 2;

function g(e) {
  let {
    visualMediaItems: t,
    footer: i
  } = e;
  null != i && r()(1 === t.length, "footer only gets applied to single items");
  let s = t.length;
  if (1 === s) return (0, n.jsx)(C, {
    itemsForLayout: t,
    isSingleImage: !0,
    footer: i
  });
  if (2 === s) return (0, n.jsx)(y, {
    itemsForLayout: t
  });
  if (3 === s) return (0, n.jsx)(A, {
    itemsForLayout: t
  });
  if (4 === s) return (0, n.jsx)(E, {
    itemsForLayout: t
  });
  let l = s % 3;
  return (0, n.jsxs)(n.Fragment, {
    children: [1 === l && (0, n.jsx)(C, {
      itemsForLayout: t.slice(0, l)
    }), 2 === l && (0, n.jsx)(y, {
      itemsForLayout: t.slice(0, l)
    }), 0 === l ? (0, n.jsx)(O, {
      itemsForLayout: t
    }) : (0, n.jsx)(O, {
      itemsForLayout: t.slice(l)
    })]
  })
}

function C(e) {
  let {
    itemsForLayout: t,
    isSingleImage: i,
    footer: s
  } = e, l = t[0];
  return (0, n.jsx)("div", {
    className: a()(h.oneByOneGrid, {
      [h.oneByOneGridSingle]: i,
      [h.oneByOneGridMosaic]: !i,
      [h.hasFooter]: null != s
    }),
    children: (0, n.jsx)(N, {
      props: l,
      useFullWidth: !i,
      isSingleItem: !0,
      footer: s
    })
  })
}

function y(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, n.jsx)("div", {
    className: h.oneByTwoGrid,
    children: t.map(e => (0, n.jsx)("div", {
      className: h.oneByTwoGridItem,
      children: (0, n.jsx)(N, {
        props: e,
        maxWidth: f,
        maxHeight: f
      })
    }, e.item.uniqueId))
  })
}

function A(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(h.oneByTwoGrid, h.oneByTwoLayoutThreeGrid),
    children: [(0, n.jsx)("div", {
      className: h.oneByTwoSoloItem,
      children: (0, n.jsx)(N, {
        props: t[0],
        maxWidth: x
      })
    }), (0, n.jsx)("div", {
      className: h.oneByTwoDuoItem,
      children: (0, n.jsx)("div", {
        className: h.twoByOneGrid,
        children: t.splice(1).map(e => (0, n.jsx)("div", {
          className: h.twoByOneGridItem,
          children: (0, n.jsx)(N, {
            props: e,
            maxWidth: T,
            maxHeight: p
          })
        }, e.item.uniqueId))
      })
    })]
  })
}

function E(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, n.jsx)("div", {
    className: h.twoByTwoGrid,
    children: t.map(e => (0, n.jsx)(N, {
      props: e,
      maxWidth: f,
      maxHeight: p
    }, e.item.uniqueId))
  })
}

function O(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, n.jsx)("div", {
    className: h.threeByThreeGrid,
    children: t.map(e => (0, n.jsx)(N, {
      props: e,
      maxWidth: M,
      maxHeight: M
    }, e.item.uniqueId))
  })
}
let _ = e => ({
    className: a()(e, h.itemContentContainer),
    imgContainerClassName: h.lazyImgContainer,
    imgClassName: h.lazyImg
  }),
  v = e => ({
    className: a()(e, h.lazyImg)
  });

function N(e) {
  let {
    props: t,
    maxWidth: i = I.MEDIA_MOSAIC_MAX_WIDTH,
    maxHeight: s = I.MEDIA_MOSAIC_MAX_HEIGHT,
    useFullWidth: l = !0,
    isSingleItem: a = !1,
    footer: o
  } = e, r = t.item.type, u = {
    ...t,
    ..."IMAGE" === r && _(t.className),
    ..."VIDEO" === r && v(t.className),
    mediaLayoutType: I.MediaLayoutType.MOSAIC,
    maxWidth: i,
    maxHeight: s,
    useFullWidth: l,
    isSingleMosaicItem: a
  };
  return (0, n.jsx)(c.GIFAccessoryContext.Provider, {
    value: t.gifFavoriteButton,
    children: (0, n.jsx)(m.default, {
      ...u,
      footer: o
    })
  })
}
t.default = function(e) {
  let {
    items: t
  } = e, {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: l,
    nonVisualMediaItems: a
  } = function(e) {
    return s.useMemo(() => {
      let [t, i] = d().partition(e, e => (0, m.isVisualMedia)(e.item.type)), [n, s] = d().partition(t, e => (0, m.isGroupableMedia)(e.item.type));
      return {
        groupableVisualMediaItems: n,
        nonGroupableVisualMediaItems: s,
        nonVisualMediaItems: i
      }
    }, [e])
  }(t);
  return (0, n.jsxs)(n.Fragment, {
    children: [i.length > 0 && (0, n.jsx)("div", {
      className: h.visualMediaItemContainer,
      children: (0, n.jsx)(g, {
        visualMediaItems: i
      })
    }), l.length > 0 && l.map(e => {
      let t = e.renderMosaicItemFooter({
        item: e.item,
        message: e.message
      });
      return (0, n.jsx)("div", {
        className: h.visualMediaItemContainer,
        children: (0, n.jsx)(g, {
          visualMediaItems: [e],
          footer: t
        })
      }, e.item.uniqueId)
    }), a.length > 0 && (0, n.jsx)("div", {
      className: h.nonVisualMediaItemContainer,
      children: a.map(e => (0, n.jsx)("div", {
        className: h.nonVisualMediaItem,
        children: (0, n.jsx)(N, {
          props: e
        })
      }, e.item.uniqueId))
    })]
  })
}