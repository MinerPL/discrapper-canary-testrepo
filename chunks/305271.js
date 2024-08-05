n.d(t, {
  X: function() {
return o;
  }
});
var s = n(470079),
  r = n(626135),
  a = n(981631);
let o = (e, t) => {
  let n = s.useCallback((n, s) => r.default.track(a.rMx.SLIDE_CAROUSEL_ITEM_VIEWED, {
carousel_id: e,
slide_id: null != s ? s : n.toString(),
slide_index: n,
location_stack: t
  }), [
e,
t
  ]);
  return {
trackSlideView: n,
trackPagination: s.useCallback((n, s, o, i) => r.default.track(a.rMx.SLIDE_CAROUSEL_PAGINATION_CLICKED, {
  carousel_id: e,
  current_slide_index: s,
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