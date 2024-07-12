n.d(t, {
  BU: function() {
return o;
  },
  IC: function() {
return s;
  },
  XD: function() {
return i;
  }
});
var r = n(689938);
let i = 1024,
  a = {
useKibibytes: !1,
showDecimalForGB: !0,
useSpace: !0
  };

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
n = t.useKibibytes ? 1024 : 1000,
i = t.useKibibytes ? 1024 : 1000,
o = Math.ceil(e / n);
  if (o < i)
return t.useSpace ? r.Z.Messages.FILE_SIZE_MB.format({
  size: o
}) : r.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({
  size: o
});
  let s = o / i;
  return s = t.showDecimalForGB ? Math.round(10 * s) / 10 : Math.round(s), t.useSpace ? r.Z.Messages.FILE_SIZE_GB.format({
size: s
  }) : r.Z.Messages.FILE_SIZE_GB_NO_SPACE.format({
size: s
  });
}

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
n = t.useKibibytes ? i : 1000,
s = t.useKibibytes ? 1024 : 1000,
l = e / n;
  return l / s >= 1 ? o(l, t) : t.useSpace ? r.Z.Messages.FILE_SIZE_KB.format({
size: Math.ceil(l)
  }) : r.Z.Messages.FILE_SIZE_KB_NO_SPACE.format({
size: Math.ceil(l)
  });
}