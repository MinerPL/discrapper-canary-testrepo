"use strict";
n.d(t, {
  BU: function() {
    return s
  },
  IC: function() {
    return o
  }
});
var i = n(689938);
let r = {
  useKibibytes: !1,
  showDecimalForGB: !0,
  useSpace: !0
};

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
    n = t.useKibibytes ? 1024 : 1e3,
    s = t.useKibibytes ? 1024 : 1e3,
    o = Math.ceil(e / n);
  if (o < s) return t.useSpace ? i.Z.Messages.FILE_SIZE_MB.format({
    size: o
  }) : i.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({
    size: o
  });
  let a = o / s;
  return a = t.showDecimalForGB ? Math.round(10 * a) / 10 : Math.round(a), t.useSpace ? i.Z.Messages.FILE_SIZE_GB.format({
    size: a
  }) : i.Z.Messages.FILE_SIZE_GB_NO_SPACE.format({
    size: a
  })
}

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
    n = t.useKibibytes ? 1024 : 1e3,
    o = t.useKibibytes ? 1024 : 1e3,
    a = e / n;
  return a / o >= 1 ? s(a, t) : t.useSpace ? i.Z.Messages.FILE_SIZE_KB.format({
    size: Math.ceil(a)
  }) : i.Z.Messages.FILE_SIZE_KB_NO_SPACE.format({
    size: Math.ceil(a)
  })
}