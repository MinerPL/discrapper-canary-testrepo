n.d(t, {
	D5: function () {
		return T;
	},
	Gm: function () {
		return S;
	},
	T4: function () {
		return h;
	},
	r1: function () {
		return d;
	},
	wA: function () {
		return E;
	},
	yC: function () {
		return m;
	}
}),
	n(47120),
	n(411104),
	n(518263),
	n(970173),
	n(520712),
	n(268111),
	n(941497),
	n(32026),
	n(480839),
	n(744285),
	n(492257),
	n(873817);
var r = n(36056),
	i = n(230367),
	a = n(320215),
	s = n(240773),
	o = n(495852);
class l extends o.C {
	internalJsonWrite(e, t) {
		return this.refJsonWriter.scalar(2, e.value, 'value', !1, !0);
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), n;
	}
	create(e) {
		let t = { value: 0 };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.double();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		0 !== e.value && t.tag(1, i.TD.Bit64).double(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.DoubleValue', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 1
			}
		]);
	}
}
new l();
class u extends o.C {
	internalJsonWrite(e, t) {
		return this.refJsonWriter.scalar(1, e.value, 'value', !1, !0);
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), n;
	}
	create(e) {
		let t = { value: 0 };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.float();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		0 !== e.value && t.tag(1, i.TD.Bit32).float(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.FloatValue', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 2
			}
		]);
	}
}
new u();
class c extends o.C {
	internalJsonWrite(e, t) {
		return this.refJsonWriter.scalar(r.wx.INT64, e.value, 'value', !1, !0);
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, r.wx.INT64, r.pz.STRING, 'value')), n;
	}
	create(e) {
		let t = { value: '0' };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.int64().toString();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		'0' !== e.value && t.tag(1, i.TD.Varint).int64(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.Int64Value', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 3
			}
		]);
	}
}
let d = new c();
class _ extends o.C {
	internalJsonWrite(e, t) {
		return this.refJsonWriter.scalar(r.wx.UINT64, e.value, 'value', !1, !0);
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, r.wx.UINT64, r.pz.STRING, 'value')), n;
	}
	create(e) {
		let t = { value: '0' };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.uint64().toString();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		'0' !== e.value && t.tag(1, i.TD.Varint).uint64(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.UInt64Value', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 4
			}
		]);
	}
}
let E = new _();
class f extends o.C {
	internalJsonWrite(e, t) {
		return this.refJsonWriter.scalar(5, e.value, 'value', !1, !0);
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 5, void 0, 'value')), n;
	}
	create(e) {
		let t = { value: 0 };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.int32();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		0 !== e.value && t.tag(1, i.TD.Varint).int32(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.Int32Value', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 5
			}
		]);
	}
}
let h = new f();
class p extends o.C {
	internalJsonWrite(e, t) {
		return this.refJsonWriter.scalar(13, e.value, 'value', !1, !0);
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 13, void 0, 'value')), n;
	}
	create(e) {
		let t = { value: 0 };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.uint32();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		0 !== e.value && t.tag(1, i.TD.Varint).uint32(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.UInt32Value', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 13
			}
		]);
	}
}
let m = new p();
class I extends o.C {
	internalJsonWrite(e, t) {
		return e.value;
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 8, void 0, 'value')), n;
	}
	create(e) {
		let t = { value: !1 };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.bool();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		!1 !== e.value && t.tag(1, i.TD.Varint).bool(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.BoolValue', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 8
			}
		]);
	}
}
let T = new I();
class g extends o.C {
	internalJsonWrite(e, t) {
		return e.value;
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 9, void 0, 'value')), n;
	}
	create(e) {
		let t = { value: '' };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.string();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		'' !== e.value && t.tag(1, i.TD.LengthDelimited).string(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.StringValue', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 9
			}
		]);
	}
}
let S = new g();
class A extends o.C {
	internalJsonWrite(e, t) {
		return this.refJsonWriter.scalar(12, e.value, 'value', !1, !0);
	}
	internalJsonRead(e, t, n) {
		return !n && (n = this.create()), (n.value = this.refJsonReader.scalar(e, 12, void 0, 'value')), n;
	}
	create(e) {
		let t = { value: new Uint8Array(0) };
		return (
			globalThis.Object.defineProperty(t, s.C, {
				enumerable: !1,
				value: this
			}),
			void 0 !== e && (0, a.l)(this, t, e),
			t
		);
	}
	internalBinaryRead(e, t, n, r) {
		let a = null != r ? r : this.create(),
			s = e.pos + t;
		for (; e.pos < s; ) {
			let [t, r] = e.tag();
			if (1 === t) a.value = e.bytes();
			else {
				let s = n.readUnknownField;
				if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
				let o = e.skip(r);
				!1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
			}
		}
		return a;
	}
	internalBinaryWrite(e, t, n) {
		e.value.length && t.tag(1, i.TD.LengthDelimited).bytes(e.value);
		let r = n.writeUnknownFields;
		return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
	}
	constructor() {
		super('google.protobuf.BytesValue', [
			{
				no: 1,
				name: 'value',
				kind: 'scalar',
				T: 12
			}
		]);
	}
}
new A();
