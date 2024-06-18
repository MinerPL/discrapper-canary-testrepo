"use strict";
n.d(t, {
  D5: function() {
    return N
  },
  Gm: function() {
    return m
  },
  T4: function() {
    return T
  },
  r1: function() {
    return d
  },
  wA: function() {
    return E
  },
  yC: function() {
    return S
  }
}), n(47120), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(36056),
  r = n(230367),
  s = n(320215),
  o = n(240773),
  a = n(495852);
class l extends a.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(2, e.value, "value", !1, !0)
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 1, void 0, "value"), n
  }
  create(e) {
    let t = {
      value: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.double();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, r.TD.Bit64).double(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.DoubleValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 1
    }])
  }
}
new l;
class u extends a.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(1, e.value, "value", !1, !0)
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 1, void 0, "value"), n
  }
  create(e) {
    let t = {
      value: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.float();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, r.TD.Bit32).float(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.FloatValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 2
    }])
  }
}
new u;
class _ extends a.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(i.wx.INT64, e.value, "value", !1, !0)
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, i.wx.INT64, i.pz.STRING, "value"), n
  }
  create(e) {
    let t = {
      value: "0"
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.int64().toString();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.value && t.tag(1, r.TD.Varint).int64(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.Int64Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 3
    }])
  }
}
let d = new _;
class c extends a.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(i.wx.UINT64, e.value, "value", !1, !0)
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, i.wx.UINT64, i.pz.STRING, "value"), n
  }
  create(e) {
    let t = {
      value: "0"
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.uint64().toString();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    "0" !== e.value && t.tag(1, r.TD.Varint).uint64(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.UInt64Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 4
    }])
  }
}
let E = new c;
class I extends a.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(5, e.value, "value", !1, !0)
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 5, void 0, "value"), n
  }
  create(e) {
    let t = {
      value: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.int32();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, r.TD.Varint).int32(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.Int32Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 5
    }])
  }
}
let T = new I;
class h extends a.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(13, e.value, "value", !1, !0)
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 13, void 0, "value"), n
  }
  create(e) {
    let t = {
      value: 0
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.uint32();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.value && t.tag(1, r.TD.Varint).uint32(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.UInt32Value", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 13
    }])
  }
}
let S = new h;
class f extends a.C {
  internalJsonWrite(e, t) {
    return e.value
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 8, void 0, "value"), n
  }
  create(e) {
    let t = {
      value: !1
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.bool();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    !1 !== e.value && t.tag(1, r.TD.Varint).bool(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.BoolValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 8
    }])
  }
}
let N = new f;
class A extends a.C {
  internalJsonWrite(e, t) {
    return e.value
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 9, void 0, "value"), n
  }
  create(e) {
    let t = {
      value: ""
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.string();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.value && t.tag(1, r.TD.LengthDelimited).string(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.StringValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 9
    }])
  }
}
let m = new A;
class O extends a.C {
  internalJsonWrite(e, t) {
    return this.refJsonWriter.scalar(12, e.value, "value", !1, !0)
  }
  internalJsonRead(e, t, n) {
    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 12, void 0, "value"), n
  }
  create(e) {
    let t = {
      value: new Uint8Array(0)
    };
    return globalThis.Object.defineProperty(t, o.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, s.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let s = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) s.value = e.bytes();
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, s, t, i, a)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, n) {
    e.value.length && t.tag(1, r.TD.LengthDelimited).bytes(e.value);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("google.protobuf.BytesValue", [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 12
    }])
  }
}
new O