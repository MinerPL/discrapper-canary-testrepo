n.d(t, {
  I: function() {
return o;
  }
});
var r = n(230367),
  i = n(36056),
  a = n(929412),
  s = n(436759);
class o {
  constructor(e) {
this.info = e;
  }
  prepare() {
var e;
if (!this.fieldNoToField) {
  let t = null !== (e = this.info.fields) && void 0 !== e ? e : [];
  this.fieldNoToField = new Map(t.map(e => [
    e.no,
    e
  ]));
}
  }
  read(e, t, n, a) {
this.prepare();
let s = void 0 === a ? e.len : e.pos + a;
for (; e.pos < s;) {
  let [a, s] = e.tag(), o = this.fieldNoToField.get(a);
  if (!o) {
    let i = n.readUnknownField;
    if ('throw' == i)
      throw Error(`Unknown field ${ a } (wire type ${ s }) for ${ this.info.typeName }`);
    let o = e.skip(s);
    !1 !== i && (!0 === i ? r.z.onRead : i)(this.info.typeName, t, a, s, o);
    continue;
  }
  let l = t,
    u = o.repeat,
    c = o.localName;
  switch (o.oneof && (l = l[o.oneof]).oneofKind !== c && (l = t[o.oneof] = {
      oneofKind: c
    }), o.kind) {
    case 'scalar':
    case 'enum':
      let d = 'enum' == o.kind ? i.wx.INT32 : o.T,
        _ = 'scalar' == o.kind ? o.L : void 0;
      if (u) {
        let t = l[c];
        if (s == r.TD.LengthDelimited && d != i.wx.STRING && d != i.wx.BYTES) {
          let n = e.uint32() + e.pos;
          for (; e.pos < n;)
            t.push(this.scalar(e, d, _));
        } else
          t.push(this.scalar(e, d, _));
      } else
        l[c] = this.scalar(e, d, _);
      break;
    case 'message':
      if (u) {
        let t = l[c],
          r = o.T().internalBinaryRead(e, e.uint32(), n);
        t.push(r);
      } else
        l[c] = o.T().internalBinaryRead(e, e.uint32(), n, l[c]);
      break;
    case 'map':
      let [E, f] = this.mapEntry(o, e, n);
      l[c][E] = f;
  }
}
  }
  mapEntry(e, t, n) {
let r, a, o = t.uint32(),
  l = t.pos + o;
for (; t.pos < l;) {
  let [s, o] = t.tag();
  switch (s) {
    case 1:
      r = e.K == i.wx.BOOL ? t.bool().toString() : this.scalar(t, e.K, i.pz.STRING);
      break;
    case 2:
      switch (e.V.kind) {
        case 'scalar':
          a = this.scalar(t, e.V.T, e.V.L);
          break;
        case 'enum':
          a = t.int32();
          break;
        case 'message':
          a = e.V.T().internalBinaryRead(t, t.uint32(), n);
      }
      break;
    default:
      throw Error(`Unknown field ${ s } (wire type ${ o }) in map entry for ${ this.info.typeName }#${ e.name }`);
  }
}
if (void 0 === r) {
  let t = (0, s.N)(e.K);
  r = e.K == i.wx.BOOL ? t.toString() : t;
}
if (void 0 === a)
  switch (e.V.kind) {
    case 'scalar':
      a = (0, s.N)(e.V.T, e.V.L);
      break;
    case 'enum':
      a = 0;
      break;
    case 'message':
      a = e.V.T().create();
  }
return [
  r,
  a
];
  }
  scalar(e, t, n) {
switch (t) {
  case i.wx.INT32:
    return e.int32();
  case i.wx.STRING:
    return e.string();
  case i.wx.BOOL:
    return e.bool();
  case i.wx.DOUBLE:
    return e.double();
  case i.wx.FLOAT:
    return e.float();
  case i.wx.INT64:
    return (0, a._)(e.int64(), n);
  case i.wx.UINT64:
    return (0, a._)(e.uint64(), n);
  case i.wx.FIXED64:
    return (0, a._)(e.fixed64(), n);
  case i.wx.FIXED32:
    return e.fixed32();
  case i.wx.BYTES:
    return e.bytes();
  case i.wx.UINT32:
    return e.uint32();
  case i.wx.SFIXED32:
    return e.sfixed32();
  case i.wx.SFIXED64:
    return (0, a._)(e.sfixed64(), n);
  case i.wx.SINT32:
    return e.sint32();
  case i.wx.SINT64:
    return (0, a._)(e.sint64(), n);
}
  }
}