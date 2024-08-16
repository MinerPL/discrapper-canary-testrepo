var e = o(680500),
    n = o(24033),
    c = o(340618);
r.exports =
    Object.setPrototypeOf ||
    ('__proto__' in {}
        ? (function () {
              var r,
                  t = !1,
                  o = {};
              try {
                  (r = e(Object.prototype, '__proto__', 'set'))(o, []), (t = o instanceof Array);
              } catch (r) {}
              return function (o, e) {
                  return n(o), c(e), t ? r(o, e) : (o.__proto__ = e), o;
              };
          })()
        : void 0);
