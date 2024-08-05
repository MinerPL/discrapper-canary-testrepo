n.d(t, {
  R: function() {
return o;
  }
});
var r = n(230367),
  i = n(36056),
  a = n(17146),
  s = n(69122);
class o {
  constructor(e) {
this.info = e;
  }
  prepare() {
if (!this.fields) {
  let e = this.info.fields ? this.info.fields.concat() : [];
  this.fields = e.sort((e, t) => e.no - t.no);
}
  }
  write(e, t, n) {
for (let r of (this.prepare(), this.fields)) {
  let s, o, l = r.repeat,
    u = r.localName;
  if (r.oneof) {
    let t = e[r.oneof];
    if (t.oneofKind !== u)
      continue;
    s = t[u], o = !0;
  } else
    s = e[u], o = !1;
  switch (r.kind) {
    case 'scalar':
    case 'enum':
      let c = 'enum' == r.kind ? i.wx.INT32 : r.T;
      if (l) {
        if ((0, a.hu)(Array.isArray(s)), l == i.P0.PACKED)
          this.packed(t, c, r.no, s);
        else
          for (let e of s)
            this.scalar(t, c, r.no, e, !0);
      } else
        void 0 === s ? (0, a.hu)(r.opt) : this.scalar(t, c, r.no, s, o || r.opt);
      break;
    case 'message':
      if (l)
        for (let e of ((0, a.hu)(Array.isArray(s)), s))
          this.message(t, n, r.T(), r.no, e);
      else
        this.message(t, n, r.T(), r.no, s);
      break;
    case 'map':
      for (let [e, i] of((0, a.hu)('object' == typeof s && null !== s), Object.entries(s)))
        this.mapEntry(t, n, r, e, i);
  }
}
let s = n.writeUnknownFields;
!1 !== s && (!0 === s ? r.z.onWrite : s)(this.info.typeName, e, t);
  }
  mapEntry(e, t, n, s, o) {
e.tag(n.no, r.TD.LengthDelimited), e.fork();
let l = s;
switch (n.K) {
  case i.wx.INT32:
  case i.wx.FIXED32:
  case i.wx.UINT32:
  case i.wx.SFIXED32:
  case i.wx.SINT32:
    l = Number.parseInt(s);
    break;
  case i.wx.BOOL:
    (0, a.hu)('true' == s || 'false' == s), l = 'true' == s;
}
switch (this.scalar(e, n.K, 1, l, !0), n.V.kind) {
  case 'scalar':
    this.scalar(e, n.V.T, 2, o, !0);
    break;
  case 'enum':
    this.scalar(e, i.wx.INT32, 2, o, !0);
    break;
  case 'message':
    this.message(e, t, n.V.T(), 2, o);
}
e.join();
  }
  message(e, t, n, i, a) {
void 0 !== a && (n.internalBinaryWrite(a, e.tag(i, r.TD.LengthDelimited).fork(), t), e.join());
  }
  scalar(e, t, n, r, i) {
let [a, s, o] = this.scalarInfo(t, r);
(!o || i) && (e.tag(n, a), e[s](r));
  }
  packed(e, t, n, s) {
if (!s.length)
  return;
(0, a.hu)(t !== i.wx.BYTES && t !== i.wx.STRING), e.tag(n, r.TD.LengthDelimited), e.fork();
let [, o] = this.scalarInfo(t);
for (let t = 0; t < s.length; t++)
  e[o](s[t]);
e.join();
  }
  scalarInfo(e, t) {
let n, a = r.TD.Varint,
  o = void 0 === t,
  l = 0 === t;
switch (e) {
  case i.wx.INT32:
    n = 'int32';
    break;
  case i.wx.STRING:
    l = o || !t.length, a = r.TD.LengthDelimited, n = 'string';
    break;
  case i.wx.BOOL:
    l = !1 === t, n = 'bool';
    break;
  case i.wx.UINT32:
    n = 'uint32';
    break;
  case i.wx.DOUBLE:
    a = r.TD.Bit64, n = 'double';
    break;
  case i.wx.FLOAT:
    a = r.TD.Bit32, n = 'float';
    break;
  case i.wx.INT64:
    l = o || s.M.from(t).isZero(), n = 'int64';
    break;
  case i.wx.UINT64:
    l = o || s.p.from(t).isZero(), n = 'uint64';
    break;
  case i.wx.FIXED64:
    l = o || s.p.from(t).isZero(), a = r.TD.Bit64, n = 'fixed64';
    break;
  case i.wx.BYTES:
    l = o || !t.byteLength, a = r.TD.LengthDelimited, n = 'bytes';
    break;
  case i.wx.FIXED32:
    a = r.TD.Bit32, n = 'fixed32';
    break;
  case i.wx.SFIXED32:
    a = r.TD.Bit32, n = 'sfixed32';
    break;
  case i.wx.SFIXED64:
    l = o || s.M.from(t).isZero(), a = r.TD.Bit64, n = 'sfixed64';
    break;
  case i.wx.SINT32:
    n = 'sint32';
    break;
  case i.wx.SINT64:
    l = o || s.M.from(t).isZero(), n = 'sint64';
}
return [
  a,
  n,
  o || l
];
  }
}