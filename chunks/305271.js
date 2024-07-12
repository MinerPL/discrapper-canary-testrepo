n.d(t, {
  X: function() {
return o;
  }
});
var r = n(470079),
  s = n(626135),
  a = n(981631);
let o = (e, t) => {
  let n = r.useCallback((n, r) => s.default.track(a.rMx.SLIDE_CAROUSEL_ITEM_VIEWED, {
carousel_id: e,
slide_id: null != r ? r : n.toString(),
slide_index: n,
location_stack: t
  }), [
e,
t
  ]);
  return {
trackSlideView: n,
trackPagination: r.useCallback((n, r, o, i) => s.default.track(a.rMx.SLIDE_CAROUSEL_PAGINATION_CLICKED, {
  carousel_id: e,
  current_slide_index: r,
  next_slide_index: n,
  current_slide_id: i,
  next_slide_id: o,
  location_stack: t
}), [
  e,
  t
])
  };
};