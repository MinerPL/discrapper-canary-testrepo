var e = r(354848),
    o = r(174124),
    i = o.all;
t.exports = o.IS_HTMLDDA
    ? function (t) {
          return 'object' == typeof t ? null !== t : e(t) || t === i;
      }
    : function (t) {
          return 'object' == typeof t ? null !== t : e(t);
      };
