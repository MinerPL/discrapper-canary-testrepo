t.d(e, {
  C: function() {
return function n(e) {
  return null == e ? e : Object.keys(e).reduce((t, E) => {
    let r = (0, _.camelCase)(E);
    return 'object' != typeof e[E] || Array.isArray(e[E]) ? t[r] = e[E] : t[r] = n(e[E]), t;
  }, {});
};
  },
  X: function() {
return function n(e) {
  return null == e ? e : Object.keys(e).reduce((t, E) => {
    let r = (0, _.snakeCase)(E);
    return 'object' != typeof e[E] || Array.isArray(e[E]) ? t[r] = e[E] : t[r] = n(e[E]), t[r] = e[E], t;
  }, {});
};
  }
}), t(724458);
var _ = t(392711);