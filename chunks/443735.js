var n = r(475227),
    a = r(389109),
    o = Object.prototype,
    i = o.hasOwnProperty,
    _ = o.propertyIsEnumerable,
    E = n(
        (function () {
            return arguments;
        })()
    )
        ? n
        : function (e) {
              return a(e) && i.call(e, 'callee') && !_.call(e, 'callee');
          };
e.exports = E;
