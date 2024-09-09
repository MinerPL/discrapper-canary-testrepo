var r = n(690244),
    i = r('%Object.preventExtensions%', !0),
    a = r('%Object.isExtensible%', !0),
    s = n(814277);
e.exports = i
    ? function (e) {
          return !s(e) && a(e);
      }
    : function (e) {
          return !s(e);
      };
