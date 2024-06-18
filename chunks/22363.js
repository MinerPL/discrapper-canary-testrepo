"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(646574),
  a = n(543241),
  l = n(747613),
  u = n(533432),
  _ = n(149203),
  d = n(185923),
  c = n(773390);
t.Z = e => {
  let {
    accessory: t,
    pickerIntention: n,
    headerClassName: r,
    emojiListRef: E,
    onKeyDown: I,
    onFocus: T,
    autoFocus: h,
    searchBarRef: S,
    hasTabWrapper: f,
    diversitySurrogate: N,
    isBurstReaction: A,
    onBurstReactionToggle: m,
    renderHeader: O
  } = e, R = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.Z, {
      emojiListRef: E,
      gridNavigatorId: _.Vr,
      onKeyDown: I,
      className: c.searchBar,
      ref: S,
      isFullRow: !1,
      onFocus: T,
      autoFocus: h,
      defaultSearchPlaceholder: (0, a.nV)(n, A)
    }), n === d.Hz.REACTION ? (0, i.jsx)("div", {
      className: c.burstToggle,
      children: (0, i.jsx)(o.Z, {
        checked: A,
        onClick: m
      })
    }) : null, null != t ? t : (0, i.jsx)(l.Z, {
      searchBarRef: S,
      className: c.diversitySelector,
      hasTabWrapper: f,
      selectedSurrogate: N
    })]
  });
  return (0, i.jsx)("div", {
    className: s()(c.header, r),
    children: null != O ? O(R) : R
  })
}