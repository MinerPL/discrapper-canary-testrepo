var n, r, i = (n = new Date(), r = 4, {
        setLogLevel: function (e) {
            e == this.debug ? r = 1 : e == this.info ? r = 2 : e == this.warn ? r = 3 : (this.error, r = 4);
        },
        debug: function (e, t) {
            void 0 === console.debug && (console.debug = console.log), 1 >= r && console.debug('[' + i.getDurationString(new Date() - n, 1000) + ']', '[' + e + ']', t);
        },
        log: function (e, t) {
            this.debug(e.msg);
        },
        info: function (e, t) {
            2 >= r && console.info('[' + i.getDurationString(new Date() - n, 1000) + ']', '[' + e + ']', t);
        },
        warn: function (e, t) {
            3 >= r && console.warn('[' + i.getDurationString(new Date() - n, 1000) + ']', '[' + e + ']', t);
        },
        error: function (e, t) {
            4 >= r && console.error('[' + i.getDurationString(new Date() - n, 1000) + ']', '[' + e + ']', t);
        }
    });
i.getDurationString = function (e, t) {
    function n(e, t) {
        for (var n = ('' + e).split('.'); n[0].length < t;)
            n[0] = '0' + n[0];
        return n.join('.');
    }
    e < 0 ? (r = !0, e = -e) : r = !1;
    var r, i = e / (t || 1), a = Math.floor(i / 3600), o = Math.floor((i -= 3600 * a) / 60), s = 1000 * (i -= 60 * o);
    return s -= 1000 * (i = Math.floor(i)), s = Math.floor(s), (r ? '-' : '') + a + ':' + n(o, 2) + ':' + n(i, 2) + '.' + n(s, 3);
}, i.printRanges = function (e) {
    var t = e.length;
    if (!(t > 0))
        return '(empty)';
    for (var n = '', r = 0; r < t; r++)
        r > 0 && (n += ','), n += '[' + i.getDurationString(e.start(r)) + ',' + i.getDurationString(e.end(r)) + ']';
    return n;
};
t.Log = i;
var a = function (e) {
    if (e instanceof ArrayBuffer)
        this.buffer = e, this.dataview = new DataView(e);
    else
        throw 'Needs an array buffer';
    this.position = 0;
};
a.prototype.getPosition = function () {
    return this.position;
}, a.prototype.getEndPosition = function () {
    return this.buffer.byteLength;
}, a.prototype.getLength = function () {
    return this.buffer.byteLength;
}, a.prototype.seek = function (e) {
    var t = Math.max(0, Math.min(this.buffer.byteLength, e));
    return this.position = isNaN(t) || !isFinite(t) ? 0 : t, !0;
}, a.prototype.isEos = function () {
    return this.getPosition() >= this.getEndPosition();
}, a.prototype.readAnyInt = function (e, t) {
    var n = 0;
    if (this.position + e <= this.buffer.byteLength) {
        switch (e) {
        case 1:
            n = t ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
            break;
        case 2:
            n = t ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
            break;
        case 3:
            if (t)
                throw 'No method for reading signed 24 bits values';
            n = this.dataview.getUint8(this.position) << 16 | this.dataview.getUint8(this.position + 1) << 8 | this.dataview.getUint8(this.position + 2);
            break;
        case 4:
            n = t ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
            break;
        case 8:
            if (t)
                throw 'No method for reading signed 64 bits values';
            n = this.dataview.getUint32(this.position) << 32 | this.dataview.getUint32(this.position + 4);
            break;
        default:
            throw 'readInt method not implemented for size: ' + e;
        }
        return this.position += e, n;
    }
    throw 'Not enough bytes in buffer';
}, a.prototype.readUint8 = function () {
    return this.readAnyInt(1, !1);
}, a.prototype.readUint16 = function () {
    return this.readAnyInt(2, !1);
}, a.prototype.readUint24 = function () {
    return this.readAnyInt(3, !1);
}, a.prototype.readUint32 = function () {
    return this.readAnyInt(4, !1);
}, a.prototype.readUint64 = function () {
    return this.readAnyInt(8, !1);
}, a.prototype.readString = function (e) {
    if (this.position + e <= this.buffer.byteLength) {
        for (var t = '', n = 0; n < e; n++)
            t += String.fromCharCode(this.readUint8());
        return t;
    }
    throw 'Not enough bytes in buffer';
}, a.prototype.readCString = function () {
    for (var e = [];;) {
        var t = this.readUint8();
        if (0 !== t)
            e.push(t);
        else
            break;
    }
    return String.fromCharCode.apply(null, e);
}, a.prototype.readInt8 = function () {
    return this.readAnyInt(1, !0);
}, a.prototype.readInt16 = function () {
    return this.readAnyInt(2, !0);
}, a.prototype.readInt32 = function () {
    return this.readAnyInt(4, !0);
}, a.prototype.readInt64 = function () {
    return this.readAnyInt(8, !1);
}, a.prototype.readUint8Array = function (e) {
    for (var t = new Uint8Array(e), n = 0; n < e; n++)
        t[n] = this.readUint8();
    return t;
}, a.prototype.readInt16Array = function (e) {
    for (var t = new Int16Array(e), n = 0; n < e; n++)
        t[n] = this.readInt16();
    return t;
}, a.prototype.readUint16Array = function (e) {
    for (var t = new Int16Array(e), n = 0; n < e; n++)
        t[n] = this.readUint16();
    return t;
}, a.prototype.readUint32Array = function (e) {
    for (var t = new Uint32Array(e), n = 0; n < e; n++)
        t[n] = this.readUint32();
    return t;
}, a.prototype.readInt32Array = function (e) {
    for (var t = new Int32Array(e), n = 0; n < e; n++)
        t[n] = this.readInt32();
    return t;
};
t.MP4BoxStream = a;
var o = function (e, t, n) {
    this._byteOffset = t || 0, e instanceof ArrayBuffer ? this.buffer = e : 'object' == typeof e ? (this.dataView = e, t && (this._byteOffset += t)) : this.buffer = new ArrayBuffer(e || 0), this.position = 0, this.endianness = null == n ? o.LITTLE_ENDIAN : n;
};
o.prototype = {}, o.prototype.getPosition = function () {
    return this.position;
}, o.prototype._realloc = function (e) {
    if (!!this._dynamicSize) {
        var t = this._byteOffset + this.position + e, n = this._buffer.byteLength;
        if (t <= n) {
            t > this._byteLength && (this._byteLength = t);
            return;
        }
        for (n < 1 && (n = 1); t > n;)
            n *= 2;
        var r = new ArrayBuffer(n), i = new Uint8Array(this._buffer);
        new Uint8Array(r, 0, i.length).set(i), this.buffer = r, this._byteLength = t;
    }
}, o.prototype._trimAlloc = function () {
    if (this._byteLength != this._buffer.byteLength) {
        var e = new ArrayBuffer(this._byteLength), t = new Uint8Array(e), n = new Uint8Array(this._buffer, 0, t.length);
        t.set(n), this.buffer = e;
    }
}, o.BIG_ENDIAN = !1, o.LITTLE_ENDIAN = !0, o.prototype._byteLength = 0, Object.defineProperty(o.prototype, 'byteLength', {
    get: function () {
        return this._byteLength - this._byteOffset;
    }
}), Object.defineProperty(o.prototype, 'buffer', {
    get: function () {
        return this._trimAlloc(), this._buffer;
    },
    set: function (e) {
        this._buffer = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength;
    }
}), Object.defineProperty(o.prototype, 'byteOffset', {
    get: function () {
        return this._byteOffset;
    },
    set: function (e) {
        this._byteOffset = e, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength;
    }
}), Object.defineProperty(o.prototype, 'dataView', {
    get: function () {
        return this._dataView;
    },
    set: function (e) {
        this._byteOffset = e.byteOffset, this._buffer = e.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + e.byteLength;
    }
}), o.prototype.seek = function (e) {
    var t = Math.max(0, Math.min(this.byteLength, e));
    this.position = isNaN(t) || !isFinite(t) ? 0 : t;
}, o.prototype.isEof = function () {
    return this.position >= this._byteLength;
}, o.prototype.mapUint8Array = function (e) {
    this._realloc(1 * e);
    var t = new Uint8Array(this._buffer, this.byteOffset + this.position, e);
    return this.position += 1 * e, t;
}, o.prototype.readInt32Array = function (e, t) {
    var n = new Int32Array(e = null == e ? this.byteLength - this.position / 4 : e);
    return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n;
}, o.prototype.readInt16Array = function (e, t) {
    var n = new Int16Array(e = null == e ? this.byteLength - this.position / 2 : e);
    return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n;
}, o.prototype.readInt8Array = function (e) {
    var t = new Int8Array(e = null == e ? this.byteLength - this.position : e);
    return o.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t;
}, o.prototype.readUint32Array = function (e, t) {
    var n = new Uint32Array(e = null == e ? this.byteLength - this.position / 4 : e);
    return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n;
}, o.prototype.readUint16Array = function (e, t) {
    var n = new Uint16Array(e = null == e ? this.byteLength - this.position / 2 : e);
    return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n;
}, o.prototype.readUint8Array = function (e) {
    var t = new Uint8Array(e = null == e ? this.byteLength - this.position : e);
    return o.memcpy(t.buffer, 0, this.buffer, this.byteOffset + this.position, e * t.BYTES_PER_ELEMENT), this.position += t.byteLength, t;
}, o.prototype.readFloat64Array = function (e, t) {
    var n = new Float64Array(e = null == e ? this.byteLength - this.position / 8 : e);
    return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n;
}, o.prototype.readFloat32Array = function (e, t) {
    var n = new Float32Array(e = null == e ? this.byteLength - this.position / 4 : e);
    return o.memcpy(n.buffer, 0, this.buffer, this.byteOffset + this.position, e * n.BYTES_PER_ELEMENT), o.arrayToNative(n, null == t ? this.endianness : t), this.position += n.byteLength, n;
}, o.prototype.readInt32 = function (e) {
    var t = this._dataView.getInt32(this.position, null == e ? this.endianness : e);
    return this.position += 4, t;
}, o.prototype.readInt16 = function (e) {
    var t = this._dataView.getInt16(this.position, null == e ? this.endianness : e);
    return this.position += 2, t;
}, o.prototype.readInt8 = function () {
    var e = this._dataView.getInt8(this.position);
    return this.position += 1, e;
}, o.prototype.readUint32 = function (e) {
    var t = this._dataView.getUint32(this.position, null == e ? this.endianness : e);
    return this.position += 4, t;
}, o.prototype.readUint16 = function (e) {
    var t = this._dataView.getUint16(this.position, null == e ? this.endianness : e);
    return this.position += 2, t;
}, o.prototype.readUint8 = function () {
    var e = this._dataView.getUint8(this.position);
    return this.position += 1, e;
}, o.prototype.readFloat32 = function (e) {
    var t = this._dataView.getFloat32(this.position, null == e ? this.endianness : e);
    return this.position += 4, t;
}, o.prototype.readFloat64 = function (e) {
    var t = this._dataView.getFloat64(this.position, null == e ? this.endianness : e);
    return this.position += 8, t;
}, o.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, o.memcpy = function (e, t, n, r, i) {
    var a = new Uint8Array(e, t, i), o = new Uint8Array(n, r, i);
    a.set(o);
}, o.arrayToNative = function (e, t) {
    return t == this.endianness ? e : this.flipArrayEndianness(e);
}, o.nativeToEndian = function (e, t) {
    return this.endianness == t ? e : this.flipArrayEndianness(e);
}, o.flipArrayEndianness = function (e) {
    for (var t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), n = 0; n < e.byteLength; n += e.BYTES_PER_ELEMENT)
        for (var r = n + e.BYTES_PER_ELEMENT - 1, i = n; r > i; r--, i++) {
            var a = t[i];
            t[i] = t[r], t[r] = a;
        }
    return e;
}, o.prototype.failurePosition = 0, String.fromCharCodeUint8 = function (e) {
    for (var t = [], n = 0; n < e.length; n++)
        t[n] = e[n];
    return String.fromCharCode.apply(null, t);
}, o.prototype.readString = function (e, t) {
    return null == t || 'ASCII' == t ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == e ? this.byteLength - this.position : e)]) : new TextDecoder(t).decode(this.mapUint8Array(e));
}, o.prototype.readCString = function (e) {
    var t = this.byteLength - this.position, n = new Uint8Array(this._buffer, this._byteOffset + this.position), r = t;
    null != e && (r = Math.min(e, t));
    for (var i = 0; i < r && 0 !== n[i]; i++);
    var a = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(i)]);
    return null != e ? this.position += r - i : i != t && (this.position += 1), a;
};
o.prototype.readInt64 = function () {
    return 4294967296 * this.readInt32() + this.readUint32();
}, o.prototype.readUint64 = function () {
    return 4294967296 * this.readUint32() + this.readUint32();
}, o.prototype.readInt64 = function () {
    return 4294967296 * this.readUint32() + this.readUint32();
}, o.prototype.readUint24 = function () {
    return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
};
t.DataStream = o, o.prototype.save = function (e) {
    var t = new Blob([this.buffer]);
    if (window.URL && URL.createObjectURL) {
        var n = window.URL.createObjectURL(t), r = document.createElement('a');
        document.body.appendChild(r), r.setAttribute('href', n), r.setAttribute('download', e), r.setAttribute('target', '_self'), r.click(), window.URL.revokeObjectURL(n);
    } else
        throw 'DataStream.save: Can\'t create object URL.';
}, o.prototype._dynamicSize = !0, Object.defineProperty(o.prototype, 'dynamicSize', {
    get: function () {
        return this._dynamicSize;
    },
    set: function (e) {
        !e && this._trimAlloc(), this._dynamicSize = e;
    }
}), o.prototype.shift = function (e) {
    var t = new ArrayBuffer(this._byteLength - e), n = new Uint8Array(t), r = new Uint8Array(this._buffer, e, n.length);
    n.set(r), this.buffer = t, this.position -= e;
}, o.prototype.writeInt32Array = function (e, t) {
    if (this._realloc(4 * e.length), e instanceof Int32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0)
        o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt32Array(e.length, t);
    else
        for (var n = 0; n < e.length; n++)
            this.writeInt32(e[n], t);
}, o.prototype.writeInt16Array = function (e, t) {
    if (this._realloc(2 * e.length), e instanceof Int16Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0)
        o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt16Array(e.length, t);
    else
        for (var n = 0; n < e.length; n++)
            this.writeInt16(e[n], t);
}, o.prototype.writeInt8Array = function (e) {
    if (this._realloc(1 * e.length), e instanceof Int8Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0)
        o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapInt8Array(e.length);
    else
        for (var t = 0; t < e.length; t++)
            this.writeInt8(e[t]);
}, o.prototype.writeUint32Array = function (e, t) {
    if (this._realloc(4 * e.length), e instanceof Uint32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0)
        o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint32Array(e.length, t);
    else
        for (var n = 0; n < e.length; n++)
            this.writeUint32(e[n], t);
}, o.prototype.writeUint16Array = function (e, t) {
    if (this._realloc(2 * e.length), e instanceof Uint16Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0)
        o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint16Array(e.length, t);
    else
        for (var n = 0; n < e.length; n++)
            this.writeUint16(e[n], t);
}, o.prototype.writeUint8Array = function (e) {
    if (this._realloc(1 * e.length), e instanceof Uint8Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0)
        o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapUint8Array(e.length);
    else
        for (var t = 0; t < e.length; t++)
            this.writeUint8(e[t]);
}, o.prototype.writeFloat64Array = function (e, t) {
    if (this._realloc(8 * e.length), e instanceof Float64Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0)
        o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat64Array(e.length, t);
    else
        for (var n = 0; n < e.length; n++)
            this.writeFloat64(e[n], t);
}, o.prototype.writeFloat32Array = function (e, t) {
    if (this._realloc(4 * e.length), e instanceof Float32Array && this.byteOffset + this.position % e.BYTES_PER_ELEMENT === 0)
        o.memcpy(this._buffer, this.byteOffset + this.position, e.buffer, 0, e.byteLength), this.mapFloat32Array(e.length, t);
    else
        for (var n = 0; n < e.length; n++)
            this.writeFloat32(e[n], t);
}, o.prototype.writeInt32 = function (e, t) {
    this._realloc(4), this._dataView.setInt32(this.position, e, null == t ? this.endianness : t), this.position += 4;
}, o.prototype.writeInt16 = function (e, t) {
    this._realloc(2), this._dataView.setInt16(this.position, e, null == t ? this.endianness : t), this.position += 2;
}, o.prototype.writeInt8 = function (e) {
    this._realloc(1), this._dataView.setInt8(this.position, e), this.position += 1;
}, o.prototype.writeUint32 = function (e, t) {
    this._realloc(4), this._dataView.setUint32(this.position, e, null == t ? this.endianness : t), this.position += 4;
}, o.prototype.writeUint16 = function (e, t) {
    this._realloc(2), this._dataView.setUint16(this.position, e, null == t ? this.endianness : t), this.position += 2;
}, o.prototype.writeUint8 = function (e) {
    this._realloc(1), this._dataView.setUint8(this.position, e), this.position += 1;
}, o.prototype.writeFloat32 = function (e, t) {
    this._realloc(4), this._dataView.setFloat32(this.position, e, null == t ? this.endianness : t), this.position += 4;
}, o.prototype.writeFloat64 = function (e, t) {
    this._realloc(8), this._dataView.setFloat64(this.position, e, null == t ? this.endianness : t), this.position += 8;
}, o.prototype.writeUCS2String = function (e, t, n) {
    null == n && (n = e.length);
    for (var r = 0; r < e.length && r < n; r++)
        this.writeUint16(e.charCodeAt(r), t);
    for (; r < n; r++)
        this.writeUint16(0);
}, o.prototype.writeString = function (e, t, n) {
    var r = 0;
    if (null == t || 'ASCII' == t) {
        if (null != n) {
            var i = Math.min(e.length, n);
            for (r = 0; r < i; r++)
                this.writeUint8(e.charCodeAt(r));
            for (; r < n; r++)
                this.writeUint8(0);
        } else
            for (r = 0; r < e.length; r++)
                this.writeUint8(e.charCodeAt(r));
    } else
        this.writeUint8Array(new TextEncoder(t).encode(e.substring(0, n)));
}, o.prototype.writeCString = function (e, t) {
    var n = 0;
    if (null != t) {
        var r = Math.min(e.length, t);
        for (n = 0; n < r; n++)
            this.writeUint8(e.charCodeAt(n));
        for (; n < t; n++)
            this.writeUint8(0);
    } else {
        for (n = 0; n < e.length; n++)
            this.writeUint8(e.charCodeAt(n));
        this.writeUint8(0);
    }
}, o.prototype.writeStruct = function (e, t) {
    for (var n = 0; n < e.length; n += 2) {
        var r = e[n + 1];
        this.writeType(r, t[e[n]], t);
    }
}, o.prototype.writeType = function (e, t, n) {
    if ('function' == typeof e)
        return e(this, t);
    if ('object' == typeof e && !(e instanceof Array))
        return e.set(this, t, n);
    var r, i = null, a = 'ASCII', s = this.position;
    switch ('string' == typeof e && /:/.test(e) && (e = (r = e.split(':'))[0], i = parseInt(r[1])), 'string' == typeof e && /,/.test(e) && (e = (r = e.split(','))[0], a = parseInt(r[1])), e) {
    case 'uint8':
        this.writeUint8(t);
        break;
    case 'int8':
        this.writeInt8(t);
        break;
    case 'uint16':
        this.writeUint16(t, this.endianness);
        break;
    case 'int16':
        this.writeInt16(t, this.endianness);
        break;
    case 'uint32':
        this.writeUint32(t, this.endianness);
        break;
    case 'int32':
        this.writeInt32(t, this.endianness);
        break;
    case 'float32':
        this.writeFloat32(t, this.endianness);
        break;
    case 'float64':
        this.writeFloat64(t, this.endianness);
        break;
    case 'uint16be':
        this.writeUint16(t, o.BIG_ENDIAN);
        break;
    case 'int16be':
        this.writeInt16(t, o.BIG_ENDIAN);
        break;
    case 'uint32be':
        this.writeUint32(t, o.BIG_ENDIAN);
        break;
    case 'int32be':
        this.writeInt32(t, o.BIG_ENDIAN);
        break;
    case 'float32be':
        this.writeFloat32(t, o.BIG_ENDIAN);
        break;
    case 'float64be':
        this.writeFloat64(t, o.BIG_ENDIAN);
        break;
    case 'uint16le':
        this.writeUint16(t, o.LITTLE_ENDIAN);
        break;
    case 'int16le':
        this.writeInt16(t, o.LITTLE_ENDIAN);
        break;
    case 'uint32le':
        this.writeUint32(t, o.LITTLE_ENDIAN);
        break;
    case 'int32le':
        this.writeInt32(t, o.LITTLE_ENDIAN);
        break;
    case 'float32le':
        this.writeFloat32(t, o.LITTLE_ENDIAN);
        break;
    case 'float64le':
        this.writeFloat64(t, o.LITTLE_ENDIAN);
        break;
    case 'cstring':
        this.writeCString(t, i);
        break;
    case 'string':
        this.writeString(t, a, i);
        break;
    case 'u16string':
        this.writeUCS2String(t, this.endianness, i);
        break;
    case 'u16stringle':
        this.writeUCS2String(t, o.LITTLE_ENDIAN, i);
        break;
    case 'u16stringbe':
        this.writeUCS2String(t, o.BIG_ENDIAN, i);
        break;
    default:
        if (3 == e.length) {
            for (var l = e[1], u = 0; u < t.length; u++)
                this.writeType(l, t[u]);
            break;
        }
        this.writeStruct(e, t);
    }
    null != i && (this.position = s, this._realloc(i), this.position = s + i);
}, o.prototype.writeUint64 = function (e) {
    var t = Math.floor(e / 4294967296);
    this.writeUint32(t), this.writeUint32(4294967295 & e);
}, o.prototype.writeUint24 = function (e) {
    this.writeUint8((16711680 & e) >> 16), this.writeUint8((65280 & e) >> 8), this.writeUint8(255 & e);
}, o.prototype.adjustUint32 = function (e, t) {
    var n = this.position;
    this.seek(e), this.writeUint32(t), this.seek(n);
}, o.prototype.mapInt32Array = function (e, t) {
    this._realloc(4 * e);
    var n = new Int32Array(this._buffer, this.byteOffset + this.position, e);
    return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n;
}, o.prototype.mapInt16Array = function (e, t) {
    this._realloc(2 * e);
    var n = new Int16Array(this._buffer, this.byteOffset + this.position, e);
    return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 2 * e, n;
}, o.prototype.mapInt8Array = function (e) {
    this._realloc(1 * e);
    var t = new Int8Array(this._buffer, this.byteOffset + this.position, e);
    return this.position += 1 * e, t;
}, o.prototype.mapUint32Array = function (e, t) {
    this._realloc(4 * e);
    var n = new Uint32Array(this._buffer, this.byteOffset + this.position, e);
    return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n;
}, o.prototype.mapUint16Array = function (e, t) {
    this._realloc(2 * e);
    var n = new Uint16Array(this._buffer, this.byteOffset + this.position, e);
    return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 2 * e, n;
}, o.prototype.mapFloat64Array = function (e, t) {
    this._realloc(8 * e);
    var n = new Float64Array(this._buffer, this.byteOffset + this.position, e);
    return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 8 * e, n;
}, o.prototype.mapFloat32Array = function (e, t) {
    this._realloc(4 * e);
    var n = new Float32Array(this._buffer, this.byteOffset + this.position, e);
    return o.arrayToNative(n, null == t ? this.endianness : t), this.position += 4 * e, n;
};
var s = function (e) {
    this.buffers = [], this.bufferIndex = -1, e && (this.insertBuffer(e), this.bufferIndex = 0);
};
s.prototype = new o(new ArrayBuffer(), 0, o.BIG_ENDIAN), s.prototype.initialized = function () {
    var e;
    if (this.bufferIndex > -1)
        return !0;
    if (!(this.buffers.length > 0))
        return i.warn('MultiBufferStream', 'No buffer to start parsing from'), this.logBufferLevel(), !1;
    return 0 === (e = this.buffers[0]).fileStart ? (this.buffer = e, this.bufferIndex = 0, i.debug('MultiBufferStream', 'Stream ready for parsing'), !0) : (i.warn('MultiBufferStream', 'The first buffer should have a fileStart of 0'), this.logBufferLevel(), !1);
}, ArrayBuffer.concat = function (e, t) {
    i.debug('ArrayBuffer', 'Trying to create a new buffer of size: ' + (e.byteLength + t.byteLength));
    var n = new Uint8Array(e.byteLength + t.byteLength);
    return n.set(new Uint8Array(e), 0), n.set(new Uint8Array(t), e.byteLength), n.buffer;
}, s.prototype.reduceBuffer = function (e, t, n) {
    var r;
    return (r = new Uint8Array(n)).set(new Uint8Array(e, t, n)), r.buffer.fileStart = e.fileStart + t, r.buffer.usedBytes = 0, r.buffer;
}, s.prototype.insertBuffer = function (e) {
    for (var t = !0, n = 0; n < this.buffers.length; n++) {
        var r = this.buffers[n];
        if (e.fileStart <= r.fileStart) {
            if (e.fileStart === r.fileStart) {
                if (e.byteLength > r.byteLength) {
                    this.buffers.splice(n, 1), n--;
                    continue;
                }
                i.warn('MultiBufferStream', 'Buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ') already appended, ignoring');
            } else
                e.fileStart + e.byteLength <= r.fileStart || (e = this.reduceBuffer(e, 0, r.fileStart - e.fileStart)), i.debug('MultiBufferStream', 'Appending new buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ')'), this.buffers.splice(n, 0, e), 0 === n && (this.buffer = e);
            t = !1;
            break;
        }
        if (e.fileStart < r.fileStart + r.byteLength) {
            var a = r.fileStart + r.byteLength - e.fileStart, o = e.byteLength - a;
            if (o > 0)
                e = this.reduceBuffer(e, a, o);
            else {
                t = !1;
                break;
            }
        }
    }
    t && (i.debug('MultiBufferStream', 'Appending new buffer (fileStart: ' + e.fileStart + ' - Length: ' + e.byteLength + ')'), this.buffers.push(e), 0 === n && (this.buffer = e));
}, s.prototype.logBufferLevel = function (e) {
    var t, n, r, a, o, s = [], l = '';
    for (t = 0, r = 0, a = 0; t < this.buffers.length; t++)
        n = this.buffers[t], 0 === t ? (o = {}, s.push(o), o.start = n.fileStart, o.end = n.fileStart + n.byteLength, l += '[' + o.start + '-') : o.end === n.fileStart ? o.end = n.fileStart + n.byteLength : ((o = {}).start = n.fileStart, l += s[s.length - 1].end - 1 + '], [' + o.start + '-', o.end = n.fileStart + n.byteLength, s.push(o)), r += n.usedBytes, a += n.byteLength;
    s.length > 0 && (l += o.end - 1 + ']');
    var u = e ? i.info : i.debug;
    u('MultiBufferStream', 0 === this.buffers.length ? 'No more buffer in memory' : '' + this.buffers.length + ' stored buffer(s) (' + r + '/' + a + ' bytes), continuous ranges: ' + l);
}, s.prototype.cleanBuffers = function () {
    var e, t;
    for (e = 0; e < this.buffers.length; e++)
        (t = this.buffers[e]).usedBytes === t.byteLength && (i.debug('MultiBufferStream', 'Removing buffer #' + e), this.buffers.splice(e, 1), e--);
}, s.prototype.mergeNextBuffer = function () {
    if (!(this.bufferIndex + 1 < this.buffers.length))
        return !1;
    if ((e = this.buffers[this.bufferIndex + 1]).fileStart !== this.buffer.fileStart + this.buffer.byteLength)
        return !1;
    var e, t = this.buffer.byteLength, n = this.buffer.usedBytes, r = this.buffer.fileStart;
    return this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, e), this.buffer = this.buffers[this.bufferIndex], this.buffers.splice(this.bufferIndex + 1, 1), this.buffer.usedBytes = n, this.buffer.fileStart = r, i.debug('ISOFile', 'Concatenating buffer for box parsing (length: ' + t + '->' + this.buffer.byteLength + ')'), !0;
}, s.prototype.findPosition = function (e, t, n) {
    var r, a = null, o = -1;
    for (r = !0 === e ? 0 : this.bufferIndex; r < this.buffers.length && (a = this.buffers[r]).fileStart <= t;) {
        o = r, n && (a.fileStart + a.byteLength <= t ? a.usedBytes = a.byteLength : a.usedBytes = t - a.fileStart, this.logBufferLevel());
        r++;
    }
    return -1 === o ? -1 : (a = this.buffers[o]).fileStart + a.byteLength >= t ? (i.debug('MultiBufferStream', 'Found position in existing buffer #' + o), o) : -1;
}, s.prototype.findEndContiguousBuf = function (e) {
    var t, n, r, i = void 0 !== e ? e : this.bufferIndex;
    if (n = this.buffers[i], this.buffers.length > i + 1)
        for (t = i + 1; t < this.buffers.length; t++)
            if ((r = this.buffers[t]).fileStart === n.fileStart + n.byteLength)
                n = r;
            else
                break;
    return n.fileStart + n.byteLength;
}, s.prototype.getEndFilePositionAfter = function (e) {
    var t = this.findPosition(!0, e, !1);
    return -1 !== t ? this.findEndContiguousBuf(t) : e;
}, s.prototype.addUsedBytes = function (e) {
    this.buffer.usedBytes += e, this.logBufferLevel();
}, s.prototype.setAllUsedBytes = function () {
    this.buffer.usedBytes = this.buffer.byteLength, this.logBufferLevel();
}, s.prototype.seek = function (e, t, n) {
    var r;
    return -1 !== (r = this.findPosition(t, e, n)) ? (this.buffer = this.buffers[r], this.bufferIndex = r, this.position = e - this.buffer.fileStart, i.debug('MultiBufferStream', 'Repositioning parser at buffer position: ' + this.position), !0) : (i.debug('MultiBufferStream', 'Position ' + e + ' not found in buffered data'), !1);
}, s.prototype.getPosition = function () {
    if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex])
        throw 'Error accessing position in the MultiBufferStream';
    return this.buffers[this.bufferIndex].fileStart + this.position;
}, s.prototype.getLength = function () {
    return this.byteLength;
}, s.prototype.getEndPosition = function () {
    if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex])
        throw 'Error accessing position in the MultiBufferStream';
    return this.buffers[this.bufferIndex].fileStart + this.byteLength;
};
t.MultiBufferStream = s;
var l = function () {
    var e = [];
    e[3] = 'ES_Descriptor', e[4] = 'DecoderConfigDescriptor', e[5] = 'DecoderSpecificInfo', e[6] = 'SLConfigDescriptor', this.getDescriptorName = function (t) {
        return e[t];
    };
    var t = this, n = {};
    return this.parseOneDescriptor = function (t) {
        var r, a, o, s = 0, l = 0;
        for (r = t.readUint8(), s++, o = t.readUint8(), s++; 128 & o;)
            l = (127 & o) << 7, o = t.readUint8(), s++;
        return l += 127 & o, i.debug('MPEG4DescriptorParser', 'Found ' + (e[r] || 'Descriptor ' + r) + ', size ' + l + ' at position ' + t.getPosition()), (a = e[r] ? new n[e[r]](l) : new n.Descriptor(l)).parse(t), a;
    }, n.Descriptor = function (e, t) {
        this.tag = e, this.size = t, this.descs = [];
    }, n.Descriptor.prototype.parse = function (e) {
        this.data = e.readUint8Array(this.size);
    }, n.Descriptor.prototype.findDescriptor = function (e) {
        for (var t = 0; t < this.descs.length; t++)
            if (this.descs[t].tag == e)
                return this.descs[t];
        return null;
    }, n.Descriptor.prototype.parseRemainingDescriptors = function (e) {
        for (var n = e.position; e.position < n + this.size;) {
            var r = t.parseOneDescriptor(e);
            this.descs.push(r);
        }
    }, n.ES_Descriptor = function (e) {
        n.Descriptor.call(this, 3, e);
    }, n.ES_Descriptor.prototype = new n.Descriptor(), n.ES_Descriptor.prototype.parse = function (e) {
        if (this.ES_ID = e.readUint16(), this.flags = e.readUint8(), this.size -= 3, 128 & this.flags ? (this.dependsOn_ES_ID = e.readUint16(), this.size -= 2) : this.dependsOn_ES_ID = 0, 64 & this.flags) {
            var t = e.readUint8();
            this.URL = e.readString(t), this.size -= t + 1;
        } else
            this.URL = '';
        32 & this.flags ? (this.OCR_ES_ID = e.readUint16(), this.size -= 2) : this.OCR_ES_ID = 0, this.parseRemainingDescriptors(e);
    }, n.ES_Descriptor.prototype.getOTI = function (e) {
        var t = this.findDescriptor(4);
        return t ? t.oti : 0;
    }, n.ES_Descriptor.prototype.getAudioConfig = function (e) {
        var t = this.findDescriptor(4);
        if (!t)
            return null;
        var n = t.findDescriptor(5);
        if (!n || !n.data)
            return null;
        var r = (248 & n.data[0]) >> 3;
        return 31 === r && n.data.length >= 2 && (r = 32 + ((7 & n.data[0]) << 3) + ((224 & n.data[1]) >> 5)), r;
    }, n.DecoderConfigDescriptor = function (e) {
        n.Descriptor.call(this, 4, e);
    }, n.DecoderConfigDescriptor.prototype = new n.Descriptor(), n.DecoderConfigDescriptor.prototype.parse = function (e) {
        this.oti = e.readUint8(), this.streamType = e.readUint8(), this.bufferSize = e.readUint24(), this.maxBitrate = e.readUint32(), this.avgBitrate = e.readUint32(), this.size -= 13, this.parseRemainingDescriptors(e);
    }, n.DecoderSpecificInfo = function (e) {
        n.Descriptor.call(this, 5, e);
    }, n.DecoderSpecificInfo.prototype = new n.Descriptor(), n.SLConfigDescriptor = function (e) {
        n.Descriptor.call(this, 6, e);
    }, n.SLConfigDescriptor.prototype = new n.Descriptor(), this;
};
t.MPEG4DescriptorParser = l;
var u = {
    ERR_INVALID_DATA: -1,
    ERR_NOT_ENOUGH_DATA: 0,
    OK: 1,
    BASIC_BOXES: [
        'mdat',
        'idat',
        'free',
        'skip',
        'meco',
        'strk'
    ],
    FULL_BOXES: [
        'hmhd',
        'nmhd',
        'iods',
        'xml ',
        'bxml',
        'ipro',
        'mere'
    ],
    CONTAINER_BOXES: [
        [
            'moov',
            [
                'trak',
                'pssh'
            ]
        ],
        ['trak'],
        ['edts'],
        ['mdia'],
        ['minf'],
        ['dinf'],
        [
            'stbl',
            [
                'sgpd',
                'sbgp'
            ]
        ],
        [
            'mvex',
            ['trex']
        ],
        [
            'moof',
            ['traf']
        ],
        [
            'traf',
            [
                'trun',
                'sgpd',
                'sbgp'
            ]
        ],
        ['vttc'],
        ['tref'],
        ['iref'],
        [
            'mfra',
            ['tfra']
        ],
        ['meco'],
        ['hnti'],
        ['hinf'],
        ['strk'],
        ['strd'],
        ['sinf'],
        ['rinf'],
        ['schi'],
        ['trgr'],
        [
            'udta',
            ['kind']
        ],
        [
            'iprp',
            ['ipma']
        ],
        ['ipco']
    ],
    boxCodes: [],
    fullBoxCodes: [],
    containerBoxCodes: [],
    sampleEntryCodes: {},
    sampleGroupEntryCodes: [],
    trackGroupTypes: [],
    UUIDBoxes: {},
    UUIDs: [],
    initialize: function () {
        u.FullBox.prototype = new u.Box(), u.ContainerBox.prototype = new u.Box(), u.SampleEntry.prototype = new u.Box(), u.TrackGroupTypeBox.prototype = new u.FullBox(), u.BASIC_BOXES.forEach(function (e) {
            u.createBoxCtor(e);
        }), u.FULL_BOXES.forEach(function (e) {
            u.createFullBoxCtor(e);
        }), u.CONTAINER_BOXES.forEach(function (e) {
            u.createContainerBoxCtor(e[0], null, e[1]);
        });
    },
    Box: function (e, t, n) {
        this.type = e, this.size = t, this.uuid = n;
    },
    FullBox: function (e, t, n) {
        u.Box.call(this, e, t, n), this.flags = 0, this.version = 0;
    },
    ContainerBox: function (e, t, n) {
        u.Box.call(this, e, t, n), this.boxes = [];
    },
    SampleEntry: function (e, t, n, r) {
        u.ContainerBox.call(this, e, t), this.hdr_size = n, this.start = r;
    },
    SampleGroupEntry: function (e) {
        this.grouping_type = e;
    },
    TrackGroupTypeBox: function (e, t) {
        u.FullBox.call(this, e, t);
    },
    createBoxCtor: function (e, t) {
        u.boxCodes.push(e), u[e + 'Box'] = function (t) {
            u.Box.call(this, e, t);
        }, u[e + 'Box'].prototype = new u.Box(), t && (u[e + 'Box'].prototype.parse = t);
    },
    createFullBoxCtor: function (e, t) {
        u[e + 'Box'] = function (t) {
            u.FullBox.call(this, e, t);
        }, u[e + 'Box'].prototype = new u.FullBox(), u[e + 'Box'].prototype.parse = function (e) {
            this.parseFullHeader(e), t && t.call(this, e);
        };
    },
    addSubBoxArrays: function (e) {
        if (e) {
            this.subBoxNames = e;
            for (var t = e.length, n = 0; n < t; n++)
                this[e[n] + 's'] = [];
        }
    },
    createContainerBoxCtor: function (e, t, n) {
        u[e + 'Box'] = function (t) {
            u.ContainerBox.call(this, e, t), u.addSubBoxArrays.call(this, n);
        }, u[e + 'Box'].prototype = new u.ContainerBox(), t && (u[e + 'Box'].prototype.parse = t);
    },
    createMediaSampleEntryCtor: function (e, t, n) {
        u.sampleEntryCodes[e] = [], u[e + 'SampleEntry'] = function (e, t) {
            u.SampleEntry.call(this, e, t), u.addSubBoxArrays.call(this, n);
        }, u[e + 'SampleEntry'].prototype = new u.SampleEntry(), t && (u[e + 'SampleEntry'].prototype.parse = t);
    },
    createSampleEntryCtor: function (e, t, n, r) {
        u.sampleEntryCodes[e].push(t), u[t + 'SampleEntry'] = function (n) {
            u[e + 'SampleEntry'].call(this, t, n), u.addSubBoxArrays.call(this, r);
        }, u[t + 'SampleEntry'].prototype = new u[e + 'SampleEntry'](), n && (u[t + 'SampleEntry'].prototype.parse = n);
    },
    createEncryptedSampleEntryCtor: function (e, t, n) {
        u.createSampleEntryCtor.call(this, e, t, n, ['sinf']);
    },
    createSampleGroupCtor: function (e, t) {
        u[e + 'SampleGroupEntry'] = function (t) {
            u.SampleGroupEntry.call(this, e, t);
        }, u[e + 'SampleGroupEntry'].prototype = new u.SampleGroupEntry(), t && (u[e + 'SampleGroupEntry'].prototype.parse = t);
    },
    createTrackGroupCtor: function (e, t) {
        u[e + 'TrackGroupTypeBox'] = function (t) {
            u.TrackGroupTypeBox.call(this, e, t);
        }, u[e + 'TrackGroupTypeBox'].prototype = new u.TrackGroupTypeBox(), t && (u[e + 'TrackGroupTypeBox'].prototype.parse = t);
    },
    createUUIDBox: function (e, t, n, r) {
        u.UUIDs.push(e), u.UUIDBoxes[e] = function (r) {
            t ? u.FullBox.call(this, 'uuid', r, e) : n ? u.ContainerBox.call(this, 'uuid', r, e) : u.Box.call(this, 'uuid', r, e);
        }, u.UUIDBoxes[e].prototype = t ? new u.FullBox() : n ? new u.ContainerBox() : new u.Box(), r && (t ? u.UUIDBoxes[e].prototype.parse = function (e) {
            this.parseFullHeader(e), r && r.call(this, e);
        } : u.UUIDBoxes[e].prototype.parse = r);
    }
};
u.initialize(), u.TKHD_FLAG_ENABLED = 1, u.TKHD_FLAG_IN_MOVIE = 2, u.TKHD_FLAG_IN_PREVIEW = 4, u.TFHD_FLAG_BASE_DATA_OFFSET = 1, u.TFHD_FLAG_SAMPLE_DESC = 2, u.TFHD_FLAG_SAMPLE_DUR = 8, u.TFHD_FLAG_SAMPLE_SIZE = 16, u.TFHD_FLAG_SAMPLE_FLAGS = 32, u.TFHD_FLAG_DUR_EMPTY = 65536, u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072, u.TRUN_FLAGS_DATA_OFFSET = 1, u.TRUN_FLAGS_FIRST_FLAG = 4, u.TRUN_FLAGS_DURATION = 256, u.TRUN_FLAGS_SIZE = 512, u.TRUN_FLAGS_FLAGS = 1024, u.TRUN_FLAGS_CTS_OFFSET = 2048, u.Box.prototype.add = function (e) {
    return this.addBox(new u[e + 'Box']());
}, u.Box.prototype.addBox = function (e) {
    return this.boxes.push(e), this[e.type + 's'] ? this[e.type + 's'].push(e) : this[e.type] = e, e;
}, u.Box.prototype.set = function (e, t) {
    return this[e] = t, this;
}, u.Box.prototype.addEntry = function (e, t) {
    var n = t || 'entries';
    return !this[n] && (this[n] = []), this[n].push(e), this;
};
t.BoxParser = u, u.parseUUID = function (e) {
    return u.parseHex16(e);
}, u.parseHex16 = function (e) {
    for (var t = '', n = 0; n < 16; n++) {
        var r = e.readUint8().toString(16);
        t += 1 === r.length ? '0' + r : r;
    }
    return t;
}, u.parseOneBox = function (e, t, n) {
    var r, a, o, s = e.getPosition(), l = 0;
    if (e.getEndPosition() - s < 8)
        return i.debug('BoxParser', 'Not enough data in stream to parse the type and size of the box'), { code: u.ERR_NOT_ENOUGH_DATA };
    if (n && n < 8)
        return i.debug('BoxParser', 'Not enough bytes left in the parent box to parse a new box'), { code: u.ERR_NOT_ENOUGH_DATA };
    var c = e.readUint32(), d = e.readString(4), _ = d;
    if (i.debug('BoxParser', 'Found box of type \'' + d + '\' and size ' + c + ' at position ' + s), l = 8, 'uuid' == d) {
        if (e.getEndPosition() - e.getPosition() < 16 || n - l < 16)
            return e.seek(s), i.debug('BoxParser', 'Not enough bytes left in the parent box to parse a UUID box'), { code: u.ERR_NOT_ENOUGH_DATA };
        o = u.parseUUID(e), l += 16, _ = o;
    }
    if (1 == c) {
        if (e.getEndPosition() - e.getPosition() < 8 || n && n - l < 8)
            return e.seek(s), i.warn('BoxParser', 'Not enough data in stream to parse the extended size of the "' + d + '" box'), { code: u.ERR_NOT_ENOUGH_DATA };
        c = e.readUint64(), l += 8;
    } else if (0 === c) {
        if (n)
            c = n;
        else if ('mdat' !== d)
            return i.error('BoxParser', 'Unlimited box size not supported for type: \'' + d + '\''), r = new u.Box(d, c), {
                code: u.OK,
                box: r,
                size: r.size
            };
    }
    return 0 !== c && c < l ? (i.error('BoxParser', 'Box of type ' + d + ' has an invalid size ' + c + ' (too small to be a box)'), {
        code: u.ERR_NOT_ENOUGH_DATA,
        type: d,
        size: c,
        hdr_size: l,
        start: s
    }) : 0 !== c && n && c > n ? (i.error('BoxParser', 'Box of type \'' + d + '\' has a size ' + c + ' greater than its container size ' + n), {
        code: u.ERR_NOT_ENOUGH_DATA,
        type: d,
        size: c,
        hdr_size: l,
        start: s
    }) : 0 !== c && s + c > e.getEndPosition() ? (e.seek(s), i.info('BoxParser', 'Not enough data in stream to parse the entire \'' + d + '\' box'), {
        code: u.ERR_NOT_ENOUGH_DATA,
        type: d,
        size: c,
        hdr_size: l,
        start: s
    }) : t ? {
        code: u.OK,
        type: d,
        size: c,
        hdr_size: l,
        start: s
    } : (u[d + 'Box'] ? r = new u[d + 'Box'](c) : 'uuid' !== d ? (i.warn('BoxParser', 'Unknown box type: \'' + d + '\''), (r = new u.Box(d, c)).has_unparsed_data = !0) : u.UUIDBoxes[o] ? r = new u.UUIDBoxes[o](c) : (i.warn('BoxParser', 'Unknown uuid type: \'' + o + '\''), (r = new u.Box(d, c)).uuid = o, r.has_unparsed_data = !0), r.hdr_size = l, r.start = s, r.write === u.Box.prototype.write && 'mdat' !== r.type && (i.info('BoxParser', '\'' + _ + '\' box writing not yet implemented, keeping unparsed data in memory for later write'), r.parseDataAndRewind(e)), r.parse(e), (a = e.getPosition() - (r.start + r.size)) < 0 ? (i.warn('BoxParser', 'Parsing of box \'' + _ + '\' did not read the entire indicated box data size (missing ' + -a + ' bytes), seeking forward'), e.seek(r.start + r.size)) : a > 0 && (i.error('BoxParser', 'Parsing of box \'' + _ + '\' read ' + a + ' more bytes than the indicated box data size, seeking backwards'), 0 !== r.size && e.seek(r.start + r.size)), {
        code: u.OK,
        box: r,
        size: r.size
    });
}, u.Box.prototype.parse = function (e) {
    'mdat' != this.type ? this.data = e.readUint8Array(this.size - this.hdr_size) : 0 === this.size ? e.seek(e.getEndPosition()) : e.seek(this.start + this.size);
}, u.Box.prototype.parseDataAndRewind = function (e) {
    this.data = e.readUint8Array(this.size - this.hdr_size), e.position -= this.size - this.hdr_size;
}, u.FullBox.prototype.parseDataAndRewind = function (e) {
    this.parseFullHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 4, e.position -= this.size - this.hdr_size;
}, u.FullBox.prototype.parseFullHeader = function (e) {
    this.version = e.readUint8(), this.flags = e.readUint24(), this.hdr_size += 4;
}, u.FullBox.prototype.parse = function (e) {
    this.parseFullHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size);
}, u.ContainerBox.prototype.parse = function (e) {
    for (; e.getPosition() < this.start + this.size;) {
        if ((t = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK)
            return;
        if (n = t.box, this.boxes.push(n), this.subBoxNames && -1 != this.subBoxNames.indexOf(n.type))
            this[this.subBoxNames[this.subBoxNames.indexOf(n.type)] + 's'].push(n);
        else {
            var t, n, r = 'uuid' !== n.type ? n.type : n.uuid;
            this[r] ? i.warn('Box of type ' + r + ' already stored in field of this type') : this[r] = n;
        }
    }
}, u.Box.prototype.parseLanguage = function (e) {
    this.language = e.readUint16();
    var t = [];
    t[0] = this.language >> 10 & 31, t[1] = this.language >> 5 & 31, t[2] = 31 & this.language, this.languageString = String.fromCharCode(t[0] + 96, t[1] + 96, t[2] + 96);
}, u.SAMPLE_ENTRY_TYPE_VISUAL = 'Visual', u.SAMPLE_ENTRY_TYPE_AUDIO = 'Audio', u.SAMPLE_ENTRY_TYPE_HINT = 'Hint', u.SAMPLE_ENTRY_TYPE_METADATA = 'Metadata', u.SAMPLE_ENTRY_TYPE_SUBTITLE = 'Subtitle', u.SAMPLE_ENTRY_TYPE_SYSTEM = 'System', u.SAMPLE_ENTRY_TYPE_TEXT = 'Text', u.SampleEntry.prototype.parseHeader = function (e) {
    e.readUint8Array(6), this.data_reference_index = e.readUint16(), this.hdr_size += 8;
}, u.SampleEntry.prototype.parse = function (e) {
    this.parseHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size);
}, u.SampleEntry.prototype.parseDataAndRewind = function (e) {
    this.parseHeader(e), this.data = e.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 8, e.position -= this.size - this.hdr_size;
}, u.SampleEntry.prototype.parseFooter = function (e) {
    u.ContainerBox.prototype.parse.call(this, e);
}, u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_HINT), u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA), u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE), u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SYSTEM), u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_TEXT), u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, function (e) {
    var t;
    this.parseHeader(e), e.readUint16(), e.readUint16(), e.readUint32Array(3), this.width = e.readUint16(), this.height = e.readUint16(), this.horizresolution = e.readUint32(), this.vertresolution = e.readUint32(), e.readUint32(), this.frame_count = e.readUint16(), t = Math.min(31, e.readUint8()), this.compressorname = e.readString(t), t < 31 && e.readString(31 - t), this.depth = e.readUint16(), e.readUint16(), this.parseFooter(e);
}), u.createMediaSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, function (e) {
    this.parseHeader(e), e.readUint32Array(2), this.channel_count = e.readUint16(), this.samplesize = e.readUint16(), e.readUint16(), e.readUint16(), this.samplerate = e.readUint32() / 65536, this.parseFooter(e);
}), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'avc1'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'avc2'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'avc3'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'avc4'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'av01'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'hvc1'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'hev1'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vvc1'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vvi1'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vvs1'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vvcN'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vp08'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'vp09'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'mp4a'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'ac-3'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'ec-3'), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'Opus'), u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_VISUAL, 'encv'), u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_AUDIO, 'enca'), u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'encu'), u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SYSTEM, 'encs'), u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_TEXT, 'enct'), u.createEncryptedSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, 'encm'), u.createBoxCtor('a1lx', function (e) {
    var t = ((1 & (1 & e.readUint8())) + 1) * 16;
    this.layer_size = [];
    for (var n = 0; n < 3; n++)
        16 == t ? this.layer_size[n] = e.readUint16() : this.layer_size[n] = e.readUint32();
}), u.createBoxCtor('a1op', function (e) {
    this.op_index = e.readUint8();
}), u.createFullBoxCtor('auxC', function (e) {
    this.aux_type = e.readCString();
    var t = this.size - this.hdr_size - (this.aux_type.length + 1);
    this.aux_subtype = e.readUint8Array(t);
}), u.createBoxCtor('av1C', function (e) {
    var t = e.readUint8();
    if (t >> 7 & !1) {
        i.error('av1C marker problem');
        return;
    }
    if (this.version = 127 & t, 1 !== this.version) {
        i.error('av1C version ' + this.version + ' not supported');
        return;
    }
    if (t = e.readUint8(), this.seq_profile = t >> 5 & 7, this.seq_level_idx_0 = 31 & t, t = e.readUint8(), this.seq_tier_0 = t >> 7 & 1, this.high_bitdepth = t >> 6 & 1, this.twelve_bit = t >> 5 & 1, this.monochrome = t >> 4 & 1, this.chroma_subsampling_x = t >> 3 & 1, this.chroma_subsampling_y = t >> 2 & 1, this.chroma_sample_position = 3 & t, t = e.readUint8(), this.reserved_1 = t >> 5 & 7, 0 !== this.reserved_1) {
        i.error('av1C reserved_1 parsing problem');
        return;
    }
    if (this.initial_presentation_delay_present = t >> 4 & 1, 1 === this.initial_presentation_delay_present)
        this.initial_presentation_delay_minus_one = 15 & t;
    else if (this.reserved_2 = 15 & t, 0 !== this.reserved_2) {
        i.error('av1C reserved_2 parsing problem');
        return;
    }
    var n = this.size - this.hdr_size - 4;
    this.configOBUs = e.readUint8Array(n);
}), u.createBoxCtor('avcC', function (e) {
    var t, n;
    for (t = 0, this.configurationVersion = e.readUint8(), this.AVCProfileIndication = e.readUint8(), this.profile_compatibility = e.readUint8(), this.AVCLevelIndication = e.readUint8(), this.lengthSizeMinusOne = 3 & e.readUint8(), this.nb_SPS_nalus = 31 & e.readUint8(), n = this.size - this.hdr_size - 6, this.SPS = []; t < this.nb_SPS_nalus; t++)
        this.SPS[t] = {}, this.SPS[t].length = e.readUint16(), this.SPS[t].nalu = e.readUint8Array(this.SPS[t].length), n -= 2 + this.SPS[t].length;
    for (this.nb_PPS_nalus = e.readUint8(), n--, this.PPS = [], t = 0; t < this.nb_PPS_nalus; t++)
        this.PPS[t] = {}, this.PPS[t].length = e.readUint16(), this.PPS[t].nalu = e.readUint8Array(this.PPS[t].length), n -= 2 + this.PPS[t].length;
    n > 0 && (this.ext = e.readUint8Array(n));
}), u.createBoxCtor('btrt', function (e) {
    this.bufferSizeDB = e.readUint32(), this.maxBitrate = e.readUint32(), this.avgBitrate = e.readUint32();
}), u.createBoxCtor('clap', function (e) {
    this.cleanApertureWidthN = e.readUint32(), this.cleanApertureWidthD = e.readUint32(), this.cleanApertureHeightN = e.readUint32(), this.cleanApertureHeightD = e.readUint32(), this.horizOffN = e.readUint32(), this.horizOffD = e.readUint32(), this.vertOffN = e.readUint32(), this.vertOffD = e.readUint32();
}), u.createBoxCtor('clli', function (e) {
    this.max_content_light_level = e.readUint16(), this.max_pic_average_light_level = e.readUint16();
}), u.createFullBoxCtor('co64', function (e) {
    var t, n;
    if (t = e.readUint32(), this.chunk_offsets = [], 0 === this.version)
        for (n = 0; n < t; n++)
            this.chunk_offsets.push(e.readUint64());
}), u.createFullBoxCtor('CoLL', function (e) {
    this.maxCLL = e.readUint16(), this.maxFALL = e.readUint16();
}), u.createBoxCtor('colr', function (e) {
    if (this.colour_type = e.readString(4), 'nclx' === this.colour_type) {
        this.colour_primaries = e.readUint16(), this.transfer_characteristics = e.readUint16(), this.matrix_coefficients = e.readUint16();
        var t = e.readUint8();
        this.full_range_flag = t >> 7;
    } else
        'rICC' === this.colour_type ? this.ICC_profile = e.readUint8Array(this.size - 4) : 'prof' === this.colour_type && (this.ICC_profile = e.readUint8Array(this.size - 4));
}), u.createFullBoxCtor('cprt', function (e) {
    this.parseLanguage(e), this.notice = e.readCString();
}), u.createFullBoxCtor('cslg', function (e) {
    0 === this.version && (this.compositionToDTSShift = e.readInt32(), this.leastDecodeToDisplayDelta = e.readInt32(), this.greatestDecodeToDisplayDelta = e.readInt32(), this.compositionStartTime = e.readInt32(), this.compositionEndTime = e.readInt32());
}), u.createFullBoxCtor('ctts', function (e) {
    if (t = e.readUint32(), this.sample_counts = [], this.sample_offsets = [], 0 === this.version)
        for (n = 0; n < t; n++) {
            this.sample_counts.push(e.readUint32());
            var t, n, r = e.readInt32();
            r < 0 && i.warn('BoxParser', 'ctts box uses negative values without using version 1'), this.sample_offsets.push(r);
        }
    else if (1 == this.version)
        for (n = 0; n < t; n++)
            this.sample_counts.push(e.readUint32()), this.sample_offsets.push(e.readInt32());
}), u.createBoxCtor('dac3', function (e) {
    var t = e.readUint8(), n = e.readUint8(), r = e.readUint8();
    this.fscod = t >> 6, this.bsid = t >> 1 & 31, this.bsmod = (1 & t) << 2 | n >> 6 & 3, this.acmod = n >> 3 & 7, this.lfeon = n >> 2 & 1, this.bit_rate_code = 3 & n | r >> 5 & 7;
}), u.createBoxCtor('dec3', function (e) {
    var t = e.readUint16();
    this.data_rate = t >> 3, this.num_ind_sub = 7 & t, this.ind_subs = [];
    for (var n = 0; n < this.num_ind_sub + 1; n++) {
        var r = {};
        this.ind_subs.push(r);
        var i = e.readUint8(), a = e.readUint8(), o = e.readUint8();
        r.fscod = i >> 6, r.bsid = i >> 1 & 31, r.bsmod = (1 & i) << 4 | a >> 4 & 15, r.acmod = a >> 1 & 7, r.lfeon = 1 & a, r.num_dep_sub = o >> 1 & 15, r.num_dep_sub > 0 && (r.chan_loc = (1 & o) << 8 | e.readUint8());
    }
}), u.createFullBoxCtor('dfLa', function (e) {
    var t = [], n = [
            'STREAMINFO',
            'PADDING',
            'APPLICATION',
            'SEEKTABLE',
            'VORBIS_COMMENT',
            'CUESHEET',
            'PICTURE',
            'RESERVED'
        ];
    for (this.parseFullHeader(e);;) {
        var r = e.readUint8(), i = Math.min(127 & r, n.length - 1);
        if (i ? e.readUint8Array(e.readUint24()) : (e.readUint8Array(13), this.samplerate = e.readUint32() >> 12, e.readUint8Array(20)), t.push(n[i]), 128 & r)
            break;
    }
    this.numMetadataBlocks = t.length + ' (' + t.join(', ') + ')';
}), u.createBoxCtor('dimm', function (e) {
    this.bytessent = e.readUint64();
}), u.createBoxCtor('dmax', function (e) {
    this.time = e.readUint32();
}), u.createBoxCtor('dmed', function (e) {
    this.bytessent = e.readUint64();
}), u.createBoxCtor('dOps', function (e) {
    if (this.Version = e.readUint8(), this.OutputChannelCount = e.readUint8(), this.PreSkip = e.readUint16(), this.InputSampleRate = e.readUint32(), this.OutputGain = e.readInt16(), this.ChannelMappingFamily = e.readUint8(), 0 !== this.ChannelMappingFamily) {
        this.StreamCount = e.readUint8(), this.CoupledCount = e.readUint8(), this.ChannelMapping = [];
        for (var t = 0; t < this.OutputChannelCount; t++)
            this.ChannelMapping[t] = e.readUint8();
    }
}), u.createFullBoxCtor('dref', function (e) {
    this.entries = [];
    for (var t, n, r = e.readUint32(), i = 0; i < r; i++) {
        if ((t = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK)
            return;
        n = t.box, this.entries.push(n);
    }
}), u.createBoxCtor('drep', function (e) {
    this.bytessent = e.readUint64();
}), u.createFullBoxCtor('elng', function (e) {
    this.extended_language = e.readString(this.size - this.hdr_size);
}), u.createFullBoxCtor('elst', function (e) {
    this.entries = [];
    for (var t = e.readUint32(), n = 0; n < t; n++) {
        var r = {};
        this.entries.push(r), 1 === this.version ? (r.segment_duration = e.readUint64(), r.media_time = e.readInt64()) : (r.segment_duration = e.readUint32(), r.media_time = e.readInt32()), r.media_rate_integer = e.readInt16(), r.media_rate_fraction = e.readInt16();
    }
}), u.createFullBoxCtor('emsg', function (e) {
    1 == this.version ? (this.timescale = e.readUint32(), this.presentation_time = e.readUint64(), this.event_duration = e.readUint32(), this.id = e.readUint32(), this.scheme_id_uri = e.readCString(), this.value = e.readCString()) : (this.scheme_id_uri = e.readCString(), this.value = e.readCString(), this.timescale = e.readUint32(), this.presentation_time_delta = e.readUint32(), this.event_duration = e.readUint32(), this.id = e.readUint32());
    var t = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
    1 == this.version && (t -= 4), this.message_data = e.readUint8Array(t);
}), u.createFullBoxCtor('esds', function (e) {
    var t = e.readUint8Array(this.size - this.hdr_size);
    if (void 0 !== l) {
        var n = new l();
        this.esd = n.parseOneDescriptor(new o(t.buffer, 0, o.BIG_ENDIAN));
    }
}), u.createBoxCtor('fiel', function (e) {
    this.fieldCount = e.readUint8(), this.fieldOrdering = e.readUint8();
}), u.createBoxCtor('frma', function (e) {
    this.data_format = e.readString(4);
}), u.createBoxCtor('ftyp', function (e) {
    var t = this.size - this.hdr_size;
    this.major_brand = e.readString(4), this.minor_version = e.readUint32(), t -= 8, this.compatible_brands = [];
    for (var n = 0; t >= 4;)
        this.compatible_brands[n] = e.readString(4), t -= 4, n++;
}), u.createFullBoxCtor('hdlr', function (e) {
    0 === this.version && (e.readUint32(), this.handler = e.readString(4), e.readUint32Array(3), this.name = e.readString(this.size - this.hdr_size - 20), '\0' === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)));
}), u.createBoxCtor('hvcC', function (e) {
    this.configurationVersion = e.readUint8(), i = e.readUint8(), this.general_profile_space = i >> 6, this.general_tier_flag = (32 & i) >> 5, this.general_profile_idc = 31 & i, this.general_profile_compatibility = e.readUint32(), this.general_constraint_indicator = e.readUint8Array(6), this.general_level_idc = e.readUint8(), this.min_spatial_segmentation_idc = 4095 & e.readUint16(), this.parallelismType = 3 & e.readUint8(), this.chroma_format_idc = 3 & e.readUint8(), this.bit_depth_luma_minus8 = 7 & e.readUint8(), this.bit_depth_chroma_minus8 = 7 & e.readUint8(), this.avgFrameRate = e.readUint16(), i = e.readUint8(), this.constantFrameRate = i >> 6, this.numTemporalLayers = (13 & i) >> 3, this.temporalIdNested = (4 & i) >> 2, this.lengthSizeMinusOne = 3 & i, this.nalu_arrays = [];
    var t, n, r, i, a = e.readUint8();
    for (t = 0; t < a; t++) {
        var o = [];
        this.nalu_arrays.push(o), i = e.readUint8(), o.completeness = (128 & i) >> 7, o.nalu_type = 63 & i;
        var s = e.readUint16();
        for (n = 0; n < s; n++) {
            var l = {};
            o.push(l), r = e.readUint16(), l.data = e.readUint8Array(r);
        }
    }
}), u.createFullBoxCtor('iinf', function (e) {
    var t;
    0 === this.version ? this.entry_count = e.readUint16() : this.entry_count = e.readUint32(), this.item_infos = [];
    for (var n = 0; n < this.entry_count; n++) {
        if ((t = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK)
            return;
        'infe' !== t.box.type && i.error('BoxParser', 'Expected \'infe\' box, got ' + t.box.type), this.item_infos[n] = t.box;
    }
}), u.createFullBoxCtor('iloc', function (e) {
    t = e.readUint8(), this.offset_size = t >> 4 & 15, this.length_size = 15 & t, t = e.readUint8(), this.base_offset_size = t >> 4 & 15, 1 === this.version || 2 === this.version ? this.index_size = 15 & t : this.index_size = 0, this.items = [];
    var t, n = 0;
    if (this.version < 2)
        n = e.readUint16();
    else if (2 === this.version)
        n = e.readUint32();
    else
        throw 'version of iloc box not supported';
    for (var r = 0; r < n; r++) {
        var i = {};
        if (this.items.push(i), this.version < 2)
            i.item_ID = e.readUint16();
        else if (2 === this.version)
            i.item_ID = e.readUint16();
        else
            throw 'version of iloc box not supported';
        switch (1 === this.version || 2 === this.version ? i.construction_method = 15 & e.readUint16() : i.construction_method = 0, i.data_reference_index = e.readUint16(), this.base_offset_size) {
        case 0:
            i.base_offset = 0;
            break;
        case 4:
            i.base_offset = e.readUint32();
            break;
        case 8:
            i.base_offset = e.readUint64();
            break;
        default:
            throw 'Error reading base offset size';
        }
        var a = e.readUint16();
        i.extents = [];
        for (var o = 0; o < a; o++) {
            var s = {};
            if (i.extents.push(s), 1 === this.version || 2 === this.version)
                switch (this.index_size) {
                case 0:
                    s.extent_index = 0;
                    break;
                case 4:
                    s.extent_index = e.readUint32();
                    break;
                case 8:
                    s.extent_index = e.readUint64();
                    break;
                default:
                    throw 'Error reading extent index';
                }
            switch (this.offset_size) {
            case 0:
                s.extent_offset = 0;
                break;
            case 4:
                s.extent_offset = e.readUint32();
                break;
            case 8:
                s.extent_offset = e.readUint64();
                break;
            default:
                throw 'Error reading extent index';
            }
            switch (this.length_size) {
            case 0:
                s.extent_length = 0;
                break;
            case 4:
                s.extent_length = e.readUint32();
                break;
            case 8:
                s.extent_length = e.readUint64();
                break;
            default:
                throw 'Error reading extent index';
            }
        }
    }
}), u.createBoxCtor('imir', function (e) {
    var t = e.readUint8();
    this.reserved = t >> 7, this.axis = 1 & t;
}), u.createFullBoxCtor('infe', function (e) {
    if ((0 === this.version || 1 === this.version) && (this.item_ID = e.readUint16(), this.item_protection_index = e.readUint16(), this.item_name = e.readCString(), this.content_type = e.readCString(), this.content_encoding = e.readCString()), 1 === this.version) {
        this.extension_type = e.readString(4), i.warn('BoxParser', 'Cannot parse extension type'), e.seek(this.start + this.size);
        return;
    }
    this.version >= 2 && (2 === this.version ? this.item_ID = e.readUint16() : 3 === this.version && (this.item_ID = e.readUint32()), this.item_protection_index = e.readUint16(), this.item_type = e.readString(4), this.item_name = e.readCString(), 'mime' === this.item_type ? (this.content_type = e.readCString(), this.content_encoding = e.readCString()) : 'uri ' === this.item_type && (this.item_uri_type = e.readCString()));
}), u.createFullBoxCtor('ipma', function (e) {
    var t, n;
    for (t = 0, entry_count = e.readUint32(), this.associations = []; t < entry_count; t++) {
        var r = {};
        this.associations.push(r), this.version < 1 ? r.id = e.readUint16() : r.id = e.readUint32();
        var i = e.readUint8();
        for (n = 0, r.props = []; n < i; n++) {
            var a = e.readUint8(), o = {};
            r.props.push(o), o.essential = (128 & a) >> 7 == 1, 1 & this.flags ? o.property_index = (127 & a) << 8 | e.readUint8() : o.property_index = 127 & a;
        }
    }
}), u.createFullBoxCtor('iref', function (e) {
    var t, n;
    for (this.references = []; e.getPosition() < this.start + this.size;) {
        if ((t = u.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== u.OK)
            return;
        (n = 0 === this.version ? new u.SingleItemTypeReferenceBox(t.type, t.size, t.hdr_size, t.start) : new u.SingleItemTypeReferenceBoxLarge(t.type, t.size, t.hdr_size, t.start)).write === u.Box.prototype.write && 'mdat' !== n.type && (i.warn('BoxParser', n.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), n.parseDataAndRewind(e)), n.parse(e), this.references.push(n);
    }
}), u.createBoxCtor('irot', function (e) {
    this.angle = 3 & e.readUint8();
}), u.createFullBoxCtor('ispe', function (e) {
    this.image_width = e.readUint32(), this.image_height = e.readUint32();
}), u.createFullBoxCtor('kind', function (e) {
    this.schemeURI = e.readCString(), this.value = e.readCString();
}), u.createFullBoxCtor('leva', function (e) {
    var t = e.readUint8();
    this.levels = [];
    for (var n = 0; n < t; n++) {
        var r = {};
        this.levels[n] = r, r.track_ID = e.readUint32();
        var a = e.readUint8();
        switch (r.padding_flag = a >> 7, r.assignment_type = 127 & a, r.assignment_type) {
        case 0:
            r.grouping_type = e.readString(4);
            break;
        case 1:
            r.grouping_type = e.readString(4), r.grouping_type_parameter = e.readUint32();
            break;
        case 2:
        case 3:
            break;
        case 4:
            r.sub_track_id = e.readUint32();
            break;
        default:
            i.warn('BoxParser', 'Unknown leva assignement type');
        }
    }
}), u.createBoxCtor('lsel', function (e) {
    this.layer_id = e.readUint16();
}), u.createBoxCtor('maxr', function (e) {
    this.period = e.readUint32(), this.bytes = e.readUint32();
}), u.createBoxCtor('mdcv', function (e) {
    this.display_primaries = [], this.display_primaries[0] = {}, this.display_primaries[0].x = e.readUint16(), this.display_primaries[0].y = e.readUint16(), this.display_primaries[1] = {}, this.display_primaries[1].x = e.readUint16(), this.display_primaries[1].y = e.readUint16(), this.display_primaries[2] = {}, this.display_primaries[2].x = e.readUint16(), this.display_primaries[2].y = e.readUint16(), this.white_point = {}, this.white_point.x = e.readUint16(), this.white_point.y = e.readUint16(), this.max_display_mastering_luminance = e.readUint32(), this.min_display_mastering_luminance = e.readUint32();
}), u.createFullBoxCtor('mdhd', function (e) {
    1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.timescale = e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.timescale = e.readUint32(), this.duration = e.readUint32()), this.parseLanguage(e), e.readUint16();
}), u.createFullBoxCtor('mehd', function (e) {
    1 & this.flags && (i.warn('BoxParser', 'mehd box incorrectly uses flags set to 1, converting version to 1'), this.version = 1), 1 == this.version ? this.fragment_duration = e.readUint64() : this.fragment_duration = e.readUint32();
}), u.createFullBoxCtor('meta', function (e) {
    this.boxes = [], u.ContainerBox.prototype.parse.call(this, e);
}), u.createFullBoxCtor('mfhd', function (e) {
    this.sequence_number = e.readUint32();
}), u.createFullBoxCtor('mfro', function (e) {
    this._size = e.readUint32();
}), u.createFullBoxCtor('mvhd', function (e) {
    1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.timescale = e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.timescale = e.readUint32(), this.duration = e.readUint32()), this.rate = e.readUint32(), this.volume = e.readUint16() >> 8, e.readUint16(), e.readUint32Array(2), this.matrix = e.readUint32Array(9), e.readUint32Array(6), this.next_track_id = e.readUint32();
}), u.createBoxCtor('npck', function (e) {
    this.packetssent = e.readUint32();
}), u.createBoxCtor('nump', function (e) {
    this.packetssent = e.readUint64();
}), u.createFullBoxCtor('padb', function (e) {
    var t = e.readUint32();
    this.padbits = [];
    for (var n = 0; n < Math.floor((t + 1) / 2); n++)
        this.padbits = e.readUint8();
}), u.createBoxCtor('pasp', function (e) {
    this.hSpacing = e.readUint32(), this.vSpacing = e.readUint32();
}), u.createBoxCtor('payl', function (e) {
    this.text = e.readString(this.size - this.hdr_size);
}), u.createBoxCtor('payt', function (e) {
    this.payloadID = e.readUint32();
    var t = e.readUint8();
    this.rtpmap_string = e.readString(t);
}), u.createFullBoxCtor('pdin', function (e) {
    var t = (this.size - this.hdr_size) / 8;
    this.rate = [], this.initial_delay = [];
    for (var n = 0; n < t; n++)
        this.rate[n] = e.readUint32(), this.initial_delay[n] = e.readUint32();
}), u.createFullBoxCtor('pitm', function (e) {
    0 === this.version ? this.item_id = e.readUint16() : this.item_id = e.readUint32();
}), u.createFullBoxCtor('pixi', function (e) {
    var t;
    for (t = 0, this.num_channels = e.readUint8(), this.bits_per_channels = []; t < this.num_channels; t++)
        this.bits_per_channels[t] = e.readUint8();
}), u.createBoxCtor('pmax', function (e) {
    this.bytes = e.readUint32();
}), u.createFullBoxCtor('prft', function (e) {
    this.ref_track_id = e.readUint32(), this.ntp_timestamp = e.readUint64(), 0 === this.version ? this.media_time = e.readUint32() : this.media_time = e.readUint64();
}), u.createFullBoxCtor('pssh', function (e) {
    if (this.system_id = u.parseHex16(e), this.version > 0) {
        var t = e.readUint32();
        this.kid = [];
        for (var n = 0; n < t; n++)
            this.kid[n] = u.parseHex16(e);
    }
    var r = e.readUint32();
    r > 0 && (this.data = e.readUint8Array(r));
}), u.createFullBoxCtor('clef', function (e) {
    this.width = e.readUint32(), this.height = e.readUint32();
}), u.createFullBoxCtor('enof', function (e) {
    this.width = e.readUint32(), this.height = e.readUint32();
}), u.createFullBoxCtor('prof', function (e) {
    this.width = e.readUint32(), this.height = e.readUint32();
}), u.createContainerBoxCtor('tapt', null, [
    'clef',
    'prof',
    'enof'
]), u.createBoxCtor('rtp ', function (e) {
    this.descriptionformat = e.readString(4), this.sdptext = e.readString(this.size - this.hdr_size - 4);
}), u.createFullBoxCtor('saio', function (e) {
    1 & this.flags && (this.aux_info_type = e.readUint32(), this.aux_info_type_parameter = e.readUint32());
    var t = e.readUint32();
    this.offset = [];
    for (var n = 0; n < t; n++)
        0 === this.version ? this.offset[n] = e.readUint32() : this.offset[n] = e.readUint64();
}), u.createFullBoxCtor('saiz', function (e) {
    1 & this.flags && (this.aux_info_type = e.readUint32(), this.aux_info_type_parameter = e.readUint32()), this.default_sample_info_size = e.readUint8();
    var t = e.readUint32();
    if (this.sample_info_size = [], 0 === this.default_sample_info_size)
        for (var n = 0; n < t; n++)
            this.sample_info_size[n] = e.readUint8();
}), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, 'mett', function (e) {
    this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e);
}), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, 'metx', function (e) {
    this.parseHeader(e), this.content_encoding = e.readCString(), this.namespace = e.readCString(), this.schema_location = e.readCString(), this.parseFooter(e);
}), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'sbtt', function (e) {
    this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e);
}), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'stpp', function (e) {
    this.parseHeader(e), this.namespace = e.readCString(), this.schema_location = e.readCString(), this.auxiliary_mime_types = e.readCString(), this.parseFooter(e);
}), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'stxt', function (e) {
    this.parseHeader(e), this.content_encoding = e.readCString(), this.mime_format = e.readCString(), this.parseFooter(e);
}), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_SUBTITLE, 'tx3g', function (e) {
    this.parseHeader(e), this.displayFlags = e.readUint32(), this.horizontal_justification = e.readInt8(), this.vertical_justification = e.readInt8(), this.bg_color_rgba = e.readUint8Array(4), this.box_record = e.readInt16Array(4), this.style_record = e.readUint8Array(12), this.parseFooter(e);
}), u.createSampleEntryCtor(u.SAMPLE_ENTRY_TYPE_METADATA, 'wvtt', function (e) {
    this.parseHeader(e), this.parseFooter(e);
}), u.createSampleGroupCtor('alst', function (e) {
    var t, n = e.readUint16();
    for (t = 0, this.first_output_sample = e.readUint16(), this.sample_offset = []; t < n; t++)
        this.sample_offset[t] = e.readUint32();
    var r = this.description_length - 4 - 4 * n;
    for (t = 0, this.num_output_samples = [], this.num_total_samples = []; t < r / 4; t++)
        this.num_output_samples[t] = e.readUint16(), this.num_total_samples[t] = e.readUint16();
}), u.createSampleGroupCtor('avll', function (e) {
    this.layerNumber = e.readUint8(), this.accurateStatisticsFlag = e.readUint8(), this.avgBitRate = e.readUint16(), this.avgFrameRate = e.readUint16();
}), u.createSampleGroupCtor('avss', function (e) {
    this.subSequenceIdentifier = e.readUint16(), this.layerNumber = e.readUint8();
    var t = e.readUint8();
    this.durationFlag = t >> 7, this.avgRateFlag = t >> 6 & 1, this.durationFlag && (this.duration = e.readUint32()), this.avgRateFlag && (this.accurateStatisticsFlag = e.readUint8(), this.avgBitRate = e.readUint16(), this.avgFrameRate = e.readUint16()), this.dependency = [];
    for (var n = e.readUint8(), r = 0; r < n; r++) {
        var i = {};
        this.dependency.push(i), i.subSeqDirectionFlag = e.readUint8(), i.layerNumber = e.readUint8(), i.subSequenceIdentifier = e.readUint16();
    }
}), u.createSampleGroupCtor('dtrt', function (e) {
    i.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
}), u.createSampleGroupCtor('mvif', function (e) {
    i.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
}), u.createSampleGroupCtor('prol', function (e) {
    this.roll_distance = e.readInt16();
}), u.createSampleGroupCtor('rap ', function (e) {
    var t = e.readUint8();
    this.num_leading_samples_known = t >> 7, this.num_leading_samples = 127 & t;
}), u.createSampleGroupCtor('rash', function (e) {
    if (this.operation_point_count = e.readUint16(), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9)
        i.warn('BoxParser', 'Mismatch in ' + this.grouping_type + ' sample group length'), this.data = e.readUint8Array(this.description_length - 2);
    else {
        if (1 === this.operation_point_count)
            this.target_rate_share = e.readUint16();
        else {
            this.target_rate_share = [], this.available_bitrate = [];
            for (var t = 0; t < this.operation_point_count; t++)
                this.available_bitrate[t] = e.readUint32(), this.target_rate_share[t] = e.readUint16();
        }
        this.maximum_bitrate = e.readUint32(), this.minimum_bitrate = e.readUint32(), this.discard_priority = e.readUint8();
    }
}), u.createSampleGroupCtor('roll', function (e) {
    this.roll_distance = e.readInt16();
}), u.SampleGroupEntry.prototype.parse = function (e) {
    i.warn('BoxParser', 'Unknown Sample Group type: ' + this.grouping_type), this.data = e.readUint8Array(this.description_length);
}, u.createSampleGroupCtor('scif', function (e) {
    i.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
}), u.createSampleGroupCtor('scnm', function (e) {
    i.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
}), u.createSampleGroupCtor('seig', function (e) {
    this.reserved = e.readUint8();
    var t = e.readUint8();
    this.crypt_byte_block = t >> 4, this.skip_byte_block = 15 & t, this.isProtected = e.readUint8(), this.Per_Sample_IV_Size = e.readUint8(), this.KID = u.parseHex16(e), this.constant_IV_size = 0, this.constant_IV = 0, 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && (this.constant_IV_size = e.readUint8(), this.constant_IV = e.readUint8Array(this.constant_IV_size));
}), u.createSampleGroupCtor('stsa', function (e) {
    i.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
}), u.createSampleGroupCtor('sync', function (e) {
    var t = e.readUint8();
    this.NAL_unit_type = 63 & t;
}), u.createSampleGroupCtor('tele', function (e) {
    var t = e.readUint8();
    this.level_independently_decodable = t >> 7;
}), u.createSampleGroupCtor('tsas', function (e) {
    i.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
}), u.createSampleGroupCtor('tscl', function (e) {
    i.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
}), u.createSampleGroupCtor('vipr', function (e) {
    i.warn('BoxParser', 'Sample Group type: ' + this.grouping_type + ' not fully parsed');
}), u.createFullBoxCtor('sbgp', function (e) {
    this.grouping_type = e.readString(4), 1 === this.version ? this.grouping_type_parameter = e.readUint32() : this.grouping_type_parameter = 0, this.entries = [];
    for (var t = e.readUint32(), n = 0; n < t; n++) {
        var r = {};
        this.entries.push(r), r.sample_count = e.readInt32(), r.group_description_index = e.readInt32();
    }
}), u.createFullBoxCtor('schm', function (e) {
    this.scheme_type = e.readString(4), this.scheme_version = e.readUint32(), 1 & this.flags && (this.scheme_uri = e.readString(this.size - this.hdr_size - 8));
}), u.createBoxCtor('sdp ', function (e) {
    this.sdptext = e.readString(this.size - this.hdr_size);
}), u.createFullBoxCtor('sdtp', function (e) {
    var t, n = this.size - this.hdr_size;
    this.is_leading = [], this.sample_depends_on = [], this.sample_is_depended_on = [], this.sample_has_redundancy = [];
    for (var r = 0; r < n; r++)
        t = e.readUint8(), this.is_leading[r] = t >> 6, this.sample_depends_on[r] = t >> 4 & 3, this.sample_is_depended_on[r] = t >> 2 & 3, this.sample_has_redundancy[r] = 3 & t;
}), u.createFullBoxCtor('senc'), u.createFullBoxCtor('sgpd', function (e) {
    this.grouping_type = e.readString(4), i.debug('BoxParser', 'Found Sample Groups of type ' + this.grouping_type), 1 === this.version ? this.default_length = e.readUint32() : this.default_length = 0, this.version >= 2 && (this.default_group_description_index = e.readUint32()), this.entries = [];
    for (var t, n = e.readUint32(), r = 0; r < n; r++)
        t = u[this.grouping_type + 'SampleGroupEntry'] ? new u[this.grouping_type + 'SampleGroupEntry'](this.grouping_type) : new u.SampleGroupEntry(this.grouping_type), this.entries.push(t), 1 === this.version && 0 === this.default_length ? t.description_length = e.readUint32() : t.description_length = this.default_length, t.write === u.SampleGroupEntry.prototype.write && (i.info('BoxParser', 'SampleGroup for type ' + this.grouping_type + ' writing not yet implemented, keeping unparsed data in memory for later write'), t.data = e.readUint8Array(t.description_length), e.position -= t.description_length), t.parse(e);
}), u.createFullBoxCtor('sidx', function (e) {
    this.reference_ID = e.readUint32(), this.timescale = e.readUint32(), 0 === this.version ? (this.earliest_presentation_time = e.readUint32(), this.first_offset = e.readUint32()) : (this.earliest_presentation_time = e.readUint64(), this.first_offset = e.readUint64()), e.readUint16(), this.references = [];
    for (var t = e.readUint16(), n = 0; n < t; n++) {
        var r = {};
        this.references.push(r);
        var i = e.readUint32();
        r.reference_type = i >> 31 & 1, r.referenced_size = 2147483647 & i, r.subsegment_duration = e.readUint32(), i = e.readUint32(), r.starts_with_SAP = i >> 31 & 1, r.SAP_type = i >> 28 & 7, r.SAP_delta_time = 268435455 & i;
    }
}), u.SingleItemTypeReferenceBox = function (e, t, n, r) {
    u.Box.call(this, e, t), this.hdr_size = n, this.start = r;
}, u.SingleItemTypeReferenceBox.prototype = new u.Box(), u.SingleItemTypeReferenceBox.prototype.parse = function (e) {
    this.from_item_ID = e.readUint16();
    var t = e.readUint16();
    this.references = [];
    for (var n = 0; n < t; n++)
        this.references[n] = e.readUint16();
}, u.SingleItemTypeReferenceBoxLarge = function (e, t, n, r) {
    u.Box.call(this, e, t), this.hdr_size = n, this.start = r;
}, u.SingleItemTypeReferenceBoxLarge.prototype = new u.Box(), u.SingleItemTypeReferenceBoxLarge.prototype.parse = function (e) {
    this.from_item_ID = e.readUint32();
    var t = e.readUint16();
    this.references = [];
    for (var n = 0; n < t; n++)
        this.references[n] = e.readUint32();
}, u.createFullBoxCtor('SmDm', function (e) {
    this.primaryRChromaticity_x = e.readUint16(), this.primaryRChromaticity_y = e.readUint16(), this.primaryGChromaticity_x = e.readUint16(), this.primaryGChromaticity_y = e.readUint16(), this.primaryBChromaticity_x = e.readUint16(), this.primaryBChromaticity_y = e.readUint16(), this.whitePointChromaticity_x = e.readUint16(), this.whitePointChromaticity_y = e.readUint16(), this.luminanceMax = e.readUint32(), this.luminanceMin = e.readUint32();
}), u.createFullBoxCtor('smhd', function (e) {
    this.balance = e.readUint16(), e.readUint16();
}), u.createFullBoxCtor('ssix', function (e) {
    this.subsegments = [];
    for (var t = e.readUint32(), n = 0; n < t; n++) {
        var r = {};
        this.subsegments.push(r), r.ranges = [];
        for (var i = e.readUint32(), a = 0; a < i; a++) {
            var o = {};
            r.ranges.push(o), o.level = e.readUint8(), o.range_size = e.readUint24();
        }
    }
}), u.createFullBoxCtor('stco', function (e) {
    var t;
    if (t = e.readUint32(), this.chunk_offsets = [], 0 === this.version)
        for (var n = 0; n < t; n++)
            this.chunk_offsets.push(e.readUint32());
}), u.createFullBoxCtor('stdp', function (e) {
    var t = (this.size - this.hdr_size) / 2;
    this.priority = [];
    for (var n = 0; n < t; n++)
        this.priority[n] = e.readUint16();
}), u.createFullBoxCtor('sthd'), u.createFullBoxCtor('stri', function (e) {
    this.switch_group = e.readUint16(), this.alternate_group = e.readUint16(), this.sub_track_id = e.readUint32();
    var t = (this.size - this.hdr_size - 8) / 4;
    this.attribute_list = [];
    for (var n = 0; n < t; n++)
        this.attribute_list[n] = e.readUint32();
}), u.createFullBoxCtor('stsc', function (e) {
    var t, n;
    if (t = e.readUint32(), this.first_chunk = [], this.samples_per_chunk = [], this.sample_description_index = [], 0 === this.version)
        for (n = 0; n < t; n++)
            this.first_chunk.push(e.readUint32()), this.samples_per_chunk.push(e.readUint32()), this.sample_description_index.push(e.readUint32());
}), u.createFullBoxCtor('stsd', function (e) {
    var t, n, r, a;
    for (t = 1, this.entries = [], r = e.readUint32(); t <= r; t++) {
        if ((n = u.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== u.OK)
            return;
        u[n.type + 'SampleEntry'] ? ((a = new u[n.type + 'SampleEntry'](n.size)).hdr_size = n.hdr_size, a.start = n.start) : (i.warn('BoxParser', 'Unknown sample entry type: ' + n.type), a = new u.SampleEntry(n.type, n.size, n.hdr_size, n.start)), a.write === u.SampleEntry.prototype.write && (i.info('BoxParser', 'SampleEntry ' + a.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), a.parseDataAndRewind(e)), a.parse(e), this.entries.push(a);
    }
}), u.createFullBoxCtor('stsg', function (e) {
    this.grouping_type = e.readUint32();
    var t = e.readUint16();
    this.group_description_index = [];
    for (var n = 0; n < t; n++)
        this.group_description_index[n] = e.readUint32();
}), u.createFullBoxCtor('stsh', function (e) {
    var t, n;
    if (t = e.readUint32(), this.shadowed_sample_numbers = [], this.sync_sample_numbers = [], 0 === this.version)
        for (n = 0; n < t; n++)
            this.shadowed_sample_numbers.push(e.readUint32()), this.sync_sample_numbers.push(e.readUint32());
}), u.createFullBoxCtor('stss', function (e) {
    var t, n;
    if (n = e.readUint32(), 0 === this.version)
        for (t = 0, this.sample_numbers = []; t < n; t++)
            this.sample_numbers.push(e.readUint32());
}), u.createFullBoxCtor('stsz', function (e) {
    var t;
    if (this.sample_sizes = [], 0 === this.version)
        for (t = 0, this.sample_size = e.readUint32(), this.sample_count = e.readUint32(); t < this.sample_count; t++)
            0 === this.sample_size ? this.sample_sizes.push(e.readUint32()) : this.sample_sizes[t] = this.sample_size;
}), u.createFullBoxCtor('stts', function (e) {
    var t, n, r;
    if (t = e.readUint32(), this.sample_counts = [], this.sample_deltas = [], 0 === this.version)
        for (n = 0; n < t; n++)
            this.sample_counts.push(e.readUint32()), (r = e.readInt32()) < 0 && (i.warn('BoxParser', 'File uses negative stts sample delta, using value 1 instead, sync may be lost!'), r = 1), this.sample_deltas.push(r);
}), u.createFullBoxCtor('stvi', function (e) {
    var t, n, r = e.readUint32();
    this.single_view_allowed = 3 & r, this.stereo_scheme = e.readUint32();
    var i = e.readUint32();
    for (this.stereo_indication_type = e.readString(i), this.boxes = []; e.getPosition() < this.start + this.size;) {
        if ((t = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK)
            return;
        n = t.box, this.boxes.push(n), this[n.type] = n;
    }
}), u.createBoxCtor('styp', function (e) {
    u.ftypBox.prototype.parse.call(this, e);
}), u.createFullBoxCtor('stz2', function (e) {
    if (this.sample_sizes = [], 0 === this.version) {
        if (this.reserved = e.readUint24(), this.field_size = e.readUint8(), n = e.readUint32(), 4 === this.field_size)
            for (t = 0; t < n; t += 2) {
                var t, n, r = e.readUint8();
                this.sample_sizes[t] = r >> 4 & 15, this.sample_sizes[t + 1] = 15 & r;
            }
        else if (8 === this.field_size)
            for (t = 0; t < n; t++)
                this.sample_sizes[t] = e.readUint8();
        else if (16 === this.field_size)
            for (t = 0; t < n; t++)
                this.sample_sizes[t] = e.readUint16();
        else
            i.error('BoxParser', 'Error in length field in stz2 box');
    }
}), u.createFullBoxCtor('subs', function (e) {
    for (t = 0, r = e.readUint32(), this.entries = []; t < r; t++) {
        var t, n, r, i, a = {};
        if (this.entries[t] = a, a.sample_delta = e.readUint32(), a.subsamples = [], (i = e.readUint16()) > 0)
            for (n = 0; n < i; n++) {
                var o = {};
                a.subsamples.push(o), 1 == this.version ? o.size = e.readUint32() : o.size = e.readUint16(), o.priority = e.readUint8(), o.discardable = e.readUint8(), o.codec_specific_parameters = e.readUint32();
            }
    }
}), u.createFullBoxCtor('tenc', function (e) {
    if (e.readUint8(), 0 === this.version)
        e.readUint8();
    else {
        var t = e.readUint8();
        this.default_crypt_byte_block = t >> 4 & 15, this.default_skip_byte_block = 15 & t;
    }
    this.default_isProtected = e.readUint8(), this.default_Per_Sample_IV_Size = e.readUint8(), this.default_KID = u.parseHex16(e), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && (this.default_constant_IV_size = e.readUint8(), this.default_constant_IV = e.readUint8Array(this.default_constant_IV_size));
}), u.createFullBoxCtor('tfdt', function (e) {
    1 == this.version ? this.baseMediaDecodeTime = e.readUint64() : this.baseMediaDecodeTime = e.readUint32();
}), u.createFullBoxCtor('tfhd', function (e) {
    var t = 0;
    this.track_id = e.readUint32(), this.size - this.hdr_size > t && this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET ? (this.base_data_offset = e.readUint64(), t += 8) : this.base_data_offset = 0, this.size - this.hdr_size > t && this.flags & u.TFHD_FLAG_SAMPLE_DESC ? (this.default_sample_description_index = e.readUint32(), t += 4) : this.default_sample_description_index = 0, this.size - this.hdr_size > t && this.flags & u.TFHD_FLAG_SAMPLE_DUR ? (this.default_sample_duration = e.readUint32(), t += 4) : this.default_sample_duration = 0, this.size - this.hdr_size > t && this.flags & u.TFHD_FLAG_SAMPLE_SIZE ? (this.default_sample_size = e.readUint32(), t += 4) : this.default_sample_size = 0, this.size - this.hdr_size > t && this.flags & u.TFHD_FLAG_SAMPLE_FLAGS ? (this.default_sample_flags = e.readUint32(), t += 4) : this.default_sample_flags = 0;
}), u.createFullBoxCtor('tfra', function (e) {
    this.track_ID = e.readUint32(), e.readUint24();
    var t = e.readUint8();
    this.length_size_of_traf_num = t >> 4 & 3, this.length_size_of_trun_num = t >> 2 & 3, this.length_size_of_sample_num = 3 & t, this.entries = [];
    for (var n = e.readUint32(), r = 0; r < n; r++)
        1 === this.version ? (this.time = e.readUint64(), this.moof_offset = e.readUint64()) : (this.time = e.readUint32(), this.moof_offset = e.readUint32()), this.traf_number = e['readUint' + 8 * (this.length_size_of_traf_num + 1)](), this.trun_number = e['readUint' + 8 * (this.length_size_of_trun_num + 1)](), this.sample_number = e['readUint' + 8 * (this.length_size_of_sample_num + 1)]();
}), u.createFullBoxCtor('tkhd', function (e) {
    1 == this.version ? (this.creation_time = e.readUint64(), this.modification_time = e.readUint64(), this.track_id = e.readUint32(), e.readUint32(), this.duration = e.readUint64()) : (this.creation_time = e.readUint32(), this.modification_time = e.readUint32(), this.track_id = e.readUint32(), e.readUint32(), this.duration = e.readUint32()), e.readUint32Array(2), this.layer = e.readInt16(), this.alternate_group = e.readInt16(), this.volume = e.readInt16() >> 8, e.readUint16(), this.matrix = e.readInt32Array(9), this.width = e.readUint32(), this.height = e.readUint32();
}), u.createBoxCtor('tmax', function (e) {
    this.time = e.readUint32();
}), u.createBoxCtor('tmin', function (e) {
    this.time = e.readUint32();
}), u.createBoxCtor('totl', function (e) {
    this.bytessent = e.readUint32();
}), u.createBoxCtor('tpay', function (e) {
    this.bytessent = e.readUint32();
}), u.createBoxCtor('tpyl', function (e) {
    this.bytessent = e.readUint64();
}), u.TrackGroupTypeBox.prototype.parse = function (e) {
    this.parseFullHeader(e), this.track_group_id = e.readUint32();
}, u.createTrackGroupCtor('msrc'), u.TrackReferenceTypeBox = function (e, t, n, r) {
    u.Box.call(this, e, t), this.hdr_size = n, this.start = r;
}, u.TrackReferenceTypeBox.prototype = new u.Box(), u.TrackReferenceTypeBox.prototype.parse = function (e) {
    this.track_ids = e.readUint32Array((this.size - this.hdr_size) / 4);
}, u.trefBox.prototype.parse = function (e) {
    for (var t, n; e.getPosition() < this.start + this.size;) {
        if ((t = u.parseOneBox(e, !0, this.size - (e.getPosition() - this.start))).code !== u.OK)
            return;
        (n = new u.TrackReferenceTypeBox(t.type, t.size, t.hdr_size, t.start)).write === u.Box.prototype.write && 'mdat' !== n.type && (i.info('BoxParser', 'TrackReference ' + n.type + ' box writing not yet implemented, keeping unparsed data in memory for later write'), n.parseDataAndRewind(e)), n.parse(e), this.boxes.push(n);
    }
}, u.createFullBoxCtor('trep', function (e) {
    for (this.track_ID = e.readUint32(), this.boxes = []; e.getPosition() < this.start + this.size;) {
        if ((ret = u.parseOneBox(e, !1, this.size - (e.getPosition() - this.start))).code !== u.OK)
            return;
        box = ret.box, this.boxes.push(box);
    }
}), u.createFullBoxCtor('trex', function (e) {
    this.track_id = e.readUint32(), this.default_sample_description_index = e.readUint32(), this.default_sample_duration = e.readUint32(), this.default_sample_size = e.readUint32(), this.default_sample_flags = e.readUint32();
}), u.createBoxCtor('trpy', function (e) {
    this.bytessent = e.readUint64();
}), u.createFullBoxCtor('trun', function (e) {
    var t = 0;
    if (this.sample_count = e.readUint32(), t += 4, this.size - this.hdr_size > t && this.flags & u.TRUN_FLAGS_DATA_OFFSET ? (this.data_offset = e.readInt32(), t += 4) : this.data_offset = 0, this.size - this.hdr_size > t && this.flags & u.TRUN_FLAGS_FIRST_FLAG ? (this.first_sample_flags = e.readUint32(), t += 4) : this.first_sample_flags = 0, this.sample_duration = [], this.sample_size = [], this.sample_flags = [], this.sample_composition_time_offset = [], this.size - this.hdr_size > t)
        for (var n = 0; n < this.sample_count; n++)
            this.flags & u.TRUN_FLAGS_DURATION && (this.sample_duration[n] = e.readUint32()), this.flags & u.TRUN_FLAGS_SIZE && (this.sample_size[n] = e.readUint32()), this.flags & u.TRUN_FLAGS_FLAGS && (this.sample_flags[n] = e.readUint32()), this.flags & u.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? this.sample_composition_time_offset[n] = e.readUint32() : this.sample_composition_time_offset[n] = e.readInt32());
}), u.createFullBoxCtor('tsel', function (e) {
    this.switch_group = e.readUint32();
    var t = (this.size - this.hdr_size - 4) / 4;
    this.attribute_list = [];
    for (var n = 0; n < t; n++)
        this.attribute_list[n] = e.readUint32();
}), u.createFullBoxCtor('txtC', function (e) {
    this.config = e.readCString();
}), u.createFullBoxCtor('url ', function (e) {
    1 !== this.flags && (this.location = e.readCString());
}), u.createFullBoxCtor('urn ', function (e) {
    this.name = e.readCString(), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = e.readCString());
}), u.createUUIDBox('a5d40b30e81411ddba2f0800200c9a66', !0, !1, function (e) {
    this.LiveServerManifest = e.readString(this.size - this.hdr_size).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}), u.createUUIDBox('d08a4f1810f34a82b6c832d8aba183d3', !0, !1, function (e) {
    this.system_id = u.parseHex16(e);
    var t = e.readUint32();
    t > 0 && (this.data = e.readUint8Array(t));
}), u.createUUIDBox('a2394f525a9b4f14a2446c427c648df4', !0, !1), u.createUUIDBox('8974dbce7be74c5184f97148f9882554', !0, !1, function (e) {
    this.default_AlgorithmID = e.readUint24(), this.default_IV_size = e.readUint8(), this.default_KID = u.parseHex16(e);
}), u.createUUIDBox('d4807ef2ca3946958e5426cb9e46a79f', !0, !1, function (e) {
    this.fragment_count = e.readUint8(), this.entries = [];
    for (var t = 0; t < this.fragment_count; t++) {
        var n = {}, r = 0, i = 0;
        1 === this.version ? (r = e.readUint64(), i = e.readUint64()) : (r = e.readUint32(), i = e.readUint32()), n.absolute_time = r, n.absolute_duration = i, this.entries.push(n);
    }
}), u.createUUIDBox('6d1d9b0542d544e680e2141daff757b2', !0, !1, function (e) {
    1 === this.version ? (this.absolute_time = e.readUint64(), this.duration = e.readUint64()) : (this.absolute_time = e.readUint32(), this.duration = e.readUint32());
}), u.createFullBoxCtor('vmhd', function (e) {
    this.graphicsmode = e.readUint16(), this.opcolor = e.readUint16Array(3);
}), u.createFullBoxCtor('vpcC', function (e) {
    var t;
    1 === this.version ? (this.profile = e.readUint8(), this.level = e.readUint8(), t = e.readUint8(), this.bitDepth = t >> 4, this.chromaSubsampling = t >> 1 & 7, this.videoFullRangeFlag = 1 & t, this.colourPrimaries = e.readUint8(), this.transferCharacteristics = e.readUint8(), this.matrixCoefficients = e.readUint8()) : (this.profile = e.readUint8(), this.level = e.readUint8(), t = e.readUint8(), this.bitDepth = t >> 4 & 15, this.colorSpace = 15 & t, t = e.readUint8(), this.chromaSubsampling = t >> 4 & 15, this.transferFunction = t >> 1 & 7, this.videoFullRangeFlag = 1 & t), this.codecIntializationDataSize = e.readUint16(), this.codecIntializationData = e.readUint8Array(this.codecIntializationDataSize);
}), u.createBoxCtor('vttC', function (e) {
    this.text = e.readString(this.size - this.hdr_size);
}), u.createFullBoxCtor('vvcC', function (e) {
    var t, n, r = {
            held_bits: void 0,
            num_held_bits: 0,
            stream_read_1_bytes: function (e) {
                this.held_bits = e.readUint8(), this.num_held_bits = 8;
            },
            stream_read_2_bytes: function (e) {
                this.held_bits = e.readUint16(), this.num_held_bits = 16;
            },
            extract_bits: function (e) {
                var t = this.held_bits >> this.num_held_bits - e & (1 << e) - 1;
                return this.num_held_bits -= e, t;
            }
        };
    if (r.stream_read_1_bytes(e), r.extract_bits(5), this.lengthSizeMinusOne = r.extract_bits(2), this.ptl_present_flag = r.extract_bits(1), this.ptl_present_flag) {
        if (r.stream_read_2_bytes(e), this.ols_idx = r.extract_bits(9), this.num_sublayers = r.extract_bits(3), this.constant_frame_rate = r.extract_bits(2), this.chroma_format_idc = r.extract_bits(2), r.stream_read_1_bytes(e), this.bit_depth_minus8 = r.extract_bits(3), r.extract_bits(5), r.stream_read_2_bytes(e), r.extract_bits(2), this.num_bytes_constraint_info = r.extract_bits(6), this.general_profile_idc = r.extract_bits(7), this.general_tier_flag = r.extract_bits(1), this.general_level_idc = e.readUint8(), r.stream_read_1_bytes(e), this.ptl_frame_only_constraint_flag = r.extract_bits(1), this.ptl_multilayer_enabled_flag = r.extract_bits(1), this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info), this.num_bytes_constraint_info) {
            for (t = 0; t < this.num_bytes_constraint_info - 1; t++) {
                var i = r.extract_bits(6);
                r.stream_read_1_bytes(e);
                var a = r.extract_bits(2);
                this.general_constraint_info[t] = i << 2 | a;
            }
            this.general_constraint_info[this.num_bytes_constraint_info - 1] = r.extract_bits(6);
        } else
            r.extract_bits(6);
        for (r.stream_read_1_bytes(e), this.ptl_sublayer_present_mask = 0, n = this.num_sublayers - 2; n >= 0; --n) {
            var o = r.extract_bits(1);
            this.ptl_sublayer_present_mask |= o << n;
        }
        for (n = this.num_sublayers; n <= 8 && this.num_sublayers > 1; ++n)
            r.extract_bits(1);
        for (n = this.num_sublayers - 2; n >= 0; --n)
            this.ptl_sublayer_present_mask & 1 << n && (this.sublayer_level_idc[n] = e.readUint8());
        if (this.ptl_num_sub_profiles = e.readUint8(), this.general_sub_profile_idc = [], this.ptl_num_sub_profiles)
            for (t = 0; t < this.ptl_num_sub_profiles; t++)
                this.general_sub_profile_idc.push(e.readUint32());
        this.max_picture_width = e.readUint16(), this.max_picture_height = e.readUint16(), this.avg_frame_rate = e.readUint16();
    }
    this.nalu_arrays = [];
    var s = e.readUint8();
    for (t = 0; t < s; t++) {
        var l = [];
        this.nalu_arrays.push(l), r.stream_read_1_bytes(e), l.completeness = r.extract_bits(1), r.extract_bits(2), l.nalu_type = r.extract_bits(5);
        var u = 1;
        for (13 != l.nalu_type && 12 != l.nalu_type && (u = e.readUint16()), n = 0; n < u; n++) {
            var c = e.readUint16();
            l.push({
                data: e.readUint8Array(c),
                length: c
            });
        }
    }
}), u.createFullBoxCtor('vvnC', function (e) {
    var t = strm.readUint8();
    this.lengthSizeMinusOne = 3 & t;
}), u.SampleEntry.prototype.isVideo = function () {
    return !1;
}, u.SampleEntry.prototype.isAudio = function () {
    return !1;
}, u.SampleEntry.prototype.isSubtitle = function () {
    return !1;
}, u.SampleEntry.prototype.isMetadata = function () {
    return !1;
}, u.SampleEntry.prototype.isHint = function () {
    return !1;
}, u.SampleEntry.prototype.getCodec = function () {
    return this.type.replace('.', '');
}, u.SampleEntry.prototype.getWidth = function () {
    return '';
}, u.SampleEntry.prototype.getHeight = function () {
    return '';
}, u.SampleEntry.prototype.getChannelCount = function () {
    return '';
}, u.SampleEntry.prototype.getSampleRate = function () {
    return '';
}, u.SampleEntry.prototype.getSampleSize = function () {
    return '';
}, u.VisualSampleEntry.prototype.isVideo = function () {
    return !0;
}, u.VisualSampleEntry.prototype.getWidth = function () {
    return this.width;
}, u.VisualSampleEntry.prototype.getHeight = function () {
    return this.height;
}, u.AudioSampleEntry.prototype.isAudio = function () {
    return !0;
}, u.AudioSampleEntry.prototype.getChannelCount = function () {
    return this.channel_count;
}, u.AudioSampleEntry.prototype.getSampleRate = function () {
    return this.samplerate;
}, u.AudioSampleEntry.prototype.getSampleSize = function () {
    return this.samplesize;
}, u.SubtitleSampleEntry.prototype.isSubtitle = function () {
    return !0;
}, u.MetadataSampleEntry.prototype.isMetadata = function () {
    return !0;
}, u.decimalToHex = function (e, t) {
    var n = Number(e).toString(16);
    for (t = null == t ? t = 2 : t; n.length < t;)
        n = '0' + n;
    return n;
}, u.avc1SampleEntry.prototype.getCodec = u.avc2SampleEntry.prototype.getCodec = u.avc3SampleEntry.prototype.getCodec = u.avc4SampleEntry.prototype.getCodec = function () {
    var e = u.SampleEntry.prototype.getCodec.call(this);
    return this.avcC ? e + '.' + u.decimalToHex(this.avcC.AVCProfileIndication) + u.decimalToHex(this.avcC.profile_compatibility) + u.decimalToHex(this.avcC.AVCLevelIndication) : e;
}, u.hev1SampleEntry.prototype.getCodec = u.hvc1SampleEntry.prototype.getCodec = function () {
    var e, t = u.SampleEntry.prototype.getCodec.call(this);
    if (this.hvcC) {
        switch (t += '.', this.hvcC.general_profile_space) {
        case 0:
            t += '';
            break;
        case 1:
            t += 'A';
            break;
        case 2:
            t += 'B';
            break;
        case 3:
            t += 'C';
        }
        t += this.hvcC.general_profile_idc + '.';
        var n = this.hvcC.general_profile_compatibility, r = 0;
        for (e = 0; e < 32 && (r |= 1 & n, 31 != e); e++) {
            ;
            r <<= 1, n >>= 1;
        }
        t += u.decimalToHex(r, 0) + '.', 0 === this.hvcC.general_tier_flag ? t += 'L' : t += 'H', t += this.hvcC.general_level_idc;
        var i = !1, a = '';
        for (e = 5; e >= 0; e--)
            (this.hvcC.general_constraint_indicator[e] || i) && (a = '.' + u.decimalToHex(this.hvcC.general_constraint_indicator[e], 0) + a, i = !0);
        t += a;
    }
    return t;
}, u.vvc1SampleEntry.prototype.getCodec = u.vvi1SampleEntry.prototype.getCodec = function () {
    var e = u.SampleEntry.prototype.getCodec.call(this);
    if (this.vvcC) {
        e += '.' + this.vvcC.general_profile_idc, this.vvcC.general_tier_flag ? e += '.H' : e += '.L', e += this.vvcC.general_level_idc;
        var t = '';
        if (this.vvcC.general_constraint_info) {
            var n, r, i, a = [];
            for (r = 0, n = 0 | this.vvcC.ptl_frame_only_constraint << 7 | this.vvcC.ptl_multilayer_enabled << 6; r < this.vvcC.general_constraint_info.length; ++r)
                n |= this.vvcC.general_constraint_info[r] >> 2 & 63, a.push(n), n && (i = r), n = this.vvcC.general_constraint_info[r] >> 2 & 3;
            if (void 0 === i)
                t = '.CA';
            else {
                t = '.C';
                var o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', s = 0, l = 0;
                for (r = 0; r <= i; ++r)
                    for (s = s << 8 | a[r], l += 8; l >= 5;)
                        t += o[s >> l - 5 & 31], l -= 5, s &= (1 << l) - 1;
                l && (s <<= 5 - l, t += o[31 & s]);
            }
        }
        e += t;
    }
    return e;
}, u.mp4aSampleEntry.prototype.getCodec = function () {
    var e = u.SampleEntry.prototype.getCodec.call(this);
    if (!this.esds || !this.esds.esd)
        return e;
    var t = this.esds.esd.getOTI(), n = this.esds.esd.getAudioConfig();
    return e + '.' + u.decimalToHex(t) + (n ? '.' + n : '');
}, u.stxtSampleEntry.prototype.getCodec = function () {
    var e = u.SampleEntry.prototype.getCodec.call(this);
    return this.mime_format ? e + '.' + this.mime_format : e;
}, u.vp08SampleEntry.prototype.getCodec = u.vp09SampleEntry.prototype.getCodec = function () {
    var e = u.SampleEntry.prototype.getCodec.call(this), t = this.vpcC.level;
    0 == t && (t = '00');
    var n = this.vpcC.bitDepth;
    return 8 == n && (n = '08'), e + '.0' + this.vpcC.profile + '.' + t + '.' + n;
}, u.av01SampleEntry.prototype.getCodec = function () {
    var e, t = u.SampleEntry.prototype.getCodec.call(this), n = this.av1C.seq_level_idx_0;
    return n < 10 && (n = '0' + n), 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? e = 1 === this.av1C.twelve_bit ? '12' : '10' : this.av1C.seq_profile <= 2 && (e = 1 === this.av1C.high_bitdepth ? '10' : '08'), t + '.' + this.av1C.seq_profile + '.' + n + (this.av1C.seq_tier_0 ? 'H' : 'M') + '.' + e;
}, u.Box.prototype.writeHeader = function (e, t) {
    this.size += 8, this.size > 4294967296 && (this.size += 8), 'uuid' === this.type && (this.size += 16), i.debug('BoxWriter', 'Writing box ' + this.type + ' of size: ' + this.size + ' at position ' + e.getPosition() + (t || '')), this.size > 4294967296 ? e.writeUint32(1) : (this.sizePosition = e.getPosition(), e.writeUint32(this.size)), e.writeString(this.type, null, 4), 'uuid' === this.type && e.writeUint8Array(this.uuid), this.size > 4294967296 && e.writeUint64(this.size);
}, u.FullBox.prototype.writeHeader = function (e) {
    this.size += 4, u.Box.prototype.writeHeader.call(this, e, ' v=' + this.version + ' f=' + this.flags), e.writeUint8(this.version), e.writeUint24(this.flags);
}, u.Box.prototype.write = function (e) {
    'mdat' === this.type ? this.data && (this.size = this.data.length, this.writeHeader(e), e.writeUint8Array(this.data)) : (this.size = this.data ? this.data.length : 0, this.writeHeader(e), this.data && e.writeUint8Array(this.data));
}, u.ContainerBox.prototype.write = function (e) {
    this.size = 0, this.writeHeader(e);
    for (var t = 0; t < this.boxes.length; t++)
        this.boxes[t] && (this.boxes[t].write(e), this.size += this.boxes[t].size);
    i.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
}, u.TrackReferenceTypeBox.prototype.write = function (e) {
    this.size = 4 * this.track_ids.length, this.writeHeader(e), e.writeUint32Array(this.track_ids);
}, u.avcCBox.prototype.write = function (e) {
    var t;
    for (t = 0, this.size = 7; t < this.SPS.length; t++)
        this.size += 2 + this.SPS[t].length;
    for (t = 0; t < this.PPS.length; t++)
        this.size += 2 + this.PPS[t].length;
    for (this.ext && (this.size += this.ext.length), this.writeHeader(e), e.writeUint8(this.configurationVersion), e.writeUint8(this.AVCProfileIndication), e.writeUint8(this.profile_compatibility), e.writeUint8(this.AVCLevelIndication), e.writeUint8(this.lengthSizeMinusOne + 252), e.writeUint8(this.SPS.length + 224), t = 0; t < this.SPS.length; t++)
        e.writeUint16(this.SPS[t].length), e.writeUint8Array(this.SPS[t].nalu);
    for (e.writeUint8(this.PPS.length), t = 0; t < this.PPS.length; t++)
        e.writeUint16(this.PPS[t].length), e.writeUint8Array(this.PPS[t].nalu);
    this.ext && e.writeUint8Array(this.ext);
}, u.co64Box.prototype.write = function (e) {
    var t;
    for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), t = 0; t < this.chunk_offsets.length; t++)
        e.writeUint64(this.chunk_offsets[t]);
}, u.cslgBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(e), e.writeInt32(this.compositionToDTSShift), e.writeInt32(this.leastDecodeToDisplayDelta), e.writeInt32(this.greatestDecodeToDisplayDelta), e.writeInt32(this.compositionStartTime), e.writeInt32(this.compositionEndTime);
}, u.cttsBox.prototype.write = function (e) {
    var t;
    for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++)
        e.writeUint32(this.sample_counts[t]), 1 === this.version ? e.writeInt32(this.sample_offsets[t]) : e.writeUint32(this.sample_offsets[t]);
}, u.drefBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.entries.length);
    for (var t = 0; t < this.entries.length; t++)
        this.entries[t].write(e), this.size += this.entries[t].size;
    i.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
}, u.elngBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = this.extended_language.length, this.writeHeader(e), e.writeString(this.extended_language);
}, u.elstBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 4 + 12 * this.entries.length, this.writeHeader(e), e.writeUint32(this.entries.length);
    for (var t = 0; t < this.entries.length; t++) {
        var n = this.entries[t];
        e.writeUint32(n.segment_duration), e.writeInt32(n.media_time), e.writeInt16(n.media_rate_integer), e.writeInt16(n.media_rate_fraction);
    }
}, u.emsgBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1), this.writeHeader(e), e.writeCString(this.scheme_id_uri), e.writeCString(this.value), e.writeUint32(this.timescale), e.writeUint32(this.presentation_time_delta), e.writeUint32(this.event_duration), e.writeUint32(this.id), e.writeUint8Array(this.message_data);
}, u.ftypBox.prototype.write = function (e) {
    this.size = 8 + 4 * this.compatible_brands.length, this.writeHeader(e), e.writeString(this.major_brand, null, 4), e.writeUint32(this.minor_version);
    for (var t = 0; t < this.compatible_brands.length; t++)
        e.writeString(this.compatible_brands[t], null, 4);
}, u.hdlrBox.prototype.write = function (e) {
    this.size = 20 + this.name.length + 1, this.version = 0, this.flags = 0, this.writeHeader(e), e.writeUint32(0), e.writeString(this.handler, null, 4), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeCString(this.name);
}, u.kindBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = this.schemeURI.length + 1 + (this.value.length + 1), this.writeHeader(e), e.writeCString(this.schemeURI), e.writeCString(this.value);
}, u.mdhdBox.prototype.write = function (e) {
    this.size = 20, this.flags = 0, this.version = 0, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint16(this.language), e.writeUint16(0);
}, u.mehdBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.fragment_duration);
}, u.mfhdBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(e), e.writeUint32(this.sequence_number);
}, u.mvhdBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 96, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.timescale), e.writeUint32(this.duration), e.writeUint32(this.rate), e.writeUint16(this.volume << 8), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32Array(this.matrix), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(this.next_track_id);
}, u.SampleEntry.prototype.writeHeader = function (e) {
    this.size = 8, u.Box.prototype.writeHeader.call(this, e), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint8(0), e.writeUint16(this.data_reference_index);
}, u.SampleEntry.prototype.writeFooter = function (e) {
    for (var t = 0; t < this.boxes.length; t++)
        this.boxes[t].write(e), this.size += this.boxes[t].size;
    i.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
}, u.SampleEntry.prototype.write = function (e) {
    this.writeHeader(e), e.writeUint8Array(this.data), this.size += this.data.length, i.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
}, u.VisualSampleEntry.prototype.write = function (e) {
    this.writeHeader(e), this.size += 70, e.writeUint16(0), e.writeUint16(0), e.writeUint32(0), e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.width), e.writeUint16(this.height), e.writeUint32(this.horizresolution), e.writeUint32(this.vertresolution), e.writeUint32(0), e.writeUint16(this.frame_count), e.writeUint8(Math.min(31, this.compressorname.length)), e.writeString(this.compressorname, null, 31), e.writeUint16(this.depth), e.writeInt16(-1), this.writeFooter(e);
}, u.AudioSampleEntry.prototype.write = function (e) {
    this.writeHeader(e), this.size += 20, e.writeUint32(0), e.writeUint32(0), e.writeUint16(this.channel_count), e.writeUint16(this.samplesize), e.writeUint16(0), e.writeUint16(0), e.writeUint32(this.samplerate << 16), this.writeFooter(e);
}, u.stppSampleEntry.prototype.write = function (e) {
    this.writeHeader(e), this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1, e.writeCString(this.namespace), e.writeCString(this.schema_location), e.writeCString(this.auxiliary_mime_types), this.writeFooter(e);
}, u.SampleGroupEntry.prototype.write = function (e) {
    e.writeUint8Array(this.data);
}, u.sbgpBox.prototype.write = function (e) {
    this.version = 1, this.flags = 0, this.size = 12 + 8 * this.entries.length, this.writeHeader(e), e.writeString(this.grouping_type, null, 4), e.writeUint32(this.grouping_type_parameter), e.writeUint32(this.entries.length);
    for (var t = 0; t < this.entries.length; t++) {
        var n = this.entries[t];
        e.writeInt32(n.sample_count), e.writeInt32(n.group_description_index);
    }
}, u.sgpdBox.prototype.write = function (e) {
    var t, n;
    for (t = 0, this.flags = 0, this.size = 12; t < this.entries.length; t++)
        n = this.entries[t], 1 === this.version && (0 === this.default_length && (this.size += 4), this.size += n.data.length);
    for (this.writeHeader(e), e.writeString(this.grouping_type, null, 4), 1 === this.version && e.writeUint32(this.default_length), this.version >= 2 && e.writeUint32(this.default_sample_description_index), e.writeUint32(this.entries.length), t = 0; t < this.entries.length; t++)
        n = this.entries[t], 1 === this.version && 0 === this.default_length && e.writeUint32(n.description_length), n.write(e);
}, u.sidxBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 20 + 12 * this.references.length, this.writeHeader(e), e.writeUint32(this.reference_ID), e.writeUint32(this.timescale), e.writeUint32(this.earliest_presentation_time), e.writeUint32(this.first_offset), e.writeUint16(0), e.writeUint16(this.references.length);
    for (var t = 0; t < this.references.length; t++) {
        var n = this.references[t];
        e.writeUint32(n.reference_type << 31 | n.referenced_size), e.writeUint32(n.subsegment_duration), e.writeUint32(n.starts_with_SAP << 31 | n.SAP_type << 28 | n.SAP_delta_time);
    }
}, u.smhdBox.prototype.write = function (e) {
    this.version = 0, this.flags = 1, this.size = 4, this.writeHeader(e), e.writeUint16(this.balance), e.writeUint16(0);
}, u.stcoBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 4 + 4 * this.chunk_offsets.length, this.writeHeader(e), e.writeUint32(this.chunk_offsets.length), e.writeUint32Array(this.chunk_offsets);
}, u.stscBox.prototype.write = function (e) {
    var t;
    for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(e), e.writeUint32(this.first_chunk.length), t = 0; t < this.first_chunk.length; t++)
        e.writeUint32(this.first_chunk[t]), e.writeUint32(this.samples_per_chunk[t]), e.writeUint32(this.sample_description_index[t]);
}, u.stsdBox.prototype.write = function (e) {
    var t;
    for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(e), e.writeUint32(this.entries.length), this.size += 4, t = 0; t < this.entries.length; t++)
        this.entries[t].write(e), this.size += this.entries[t].size;
    i.debug('BoxWriter', 'Adjusting box ' + this.type + ' with new size ' + this.size), e.adjustUint32(this.sizePosition, this.size);
}, u.stshBox.prototype.write = function (e) {
    var t;
    for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(e), e.writeUint32(this.shadowed_sample_numbers.length), t = 0; t < this.shadowed_sample_numbers.length; t++)
        e.writeUint32(this.shadowed_sample_numbers[t]), e.writeUint32(this.sync_sample_numbers[t]);
}, u.stssBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 4 + 4 * this.sample_numbers.length, this.writeHeader(e), e.writeUint32(this.sample_numbers.length), e.writeUint32Array(this.sample_numbers);
}, u.stszBox.prototype.write = function (e) {
    var t, n = !0;
    if (this.version = 0, this.flags = 0, this.sample_sizes.length > 0)
        for (t = 0; t + 1 < this.sample_sizes.length;) {
            if (this.sample_sizes[t + 1] !== this.sample_sizes[0]) {
                n = !1;
                break;
            }
            t++;
        }
    else
        n = !1;
    this.size = 8, !n && (this.size += 4 * this.sample_sizes.length), this.writeHeader(e), n ? e.writeUint32(this.sample_sizes[0]) : e.writeUint32(0), e.writeUint32(this.sample_sizes.length), !n && e.writeUint32Array(this.sample_sizes);
}, u.sttsBox.prototype.write = function (e) {
    var t;
    for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(e), e.writeUint32(this.sample_counts.length), t = 0; t < this.sample_counts.length; t++)
        e.writeUint32(this.sample_counts[t]), e.writeUint32(this.sample_deltas[t]);
}, u.tfdtBox.prototype.write = function (e) {
    this.version = this.baseMediaDecodeTime > 4294967295 ? 1 : 0, this.flags = 0, this.size = 4, 1 === this.version && (this.size += 4), this.writeHeader(e), 1 === this.version ? e.writeUint64(this.baseMediaDecodeTime) : e.writeUint32(this.baseMediaDecodeTime);
}, u.tfhdBox.prototype.write = function (e) {
    this.version = 0, this.size = 4, this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & u.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & u.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & u.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & u.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(e), e.writeUint32(this.track_id), this.flags & u.TFHD_FLAG_BASE_DATA_OFFSET && e.writeUint64(this.base_data_offset), this.flags & u.TFHD_FLAG_SAMPLE_DESC && e.writeUint32(this.default_sample_description_index), this.flags & u.TFHD_FLAG_SAMPLE_DUR && e.writeUint32(this.default_sample_duration), this.flags & u.TFHD_FLAG_SAMPLE_SIZE && e.writeUint32(this.default_sample_size), this.flags & u.TFHD_FLAG_SAMPLE_FLAGS && e.writeUint32(this.default_sample_flags);
}, u.tkhdBox.prototype.write = function (e) {
    this.version = 0, this.size = 80, this.writeHeader(e), e.writeUint32(this.creation_time), e.writeUint32(this.modification_time), e.writeUint32(this.track_id), e.writeUint32(0), e.writeUint32(this.duration), e.writeUint32(0), e.writeUint32(0), e.writeInt16(this.layer), e.writeInt16(this.alternate_group), e.writeInt16(this.volume << 8), e.writeUint16(0), e.writeInt32Array(this.matrix), e.writeUint32(this.width), e.writeUint32(this.height);
}, u.trexBox.prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(e), e.writeUint32(this.track_id), e.writeUint32(this.default_sample_description_index), e.writeUint32(this.default_sample_duration), e.writeUint32(this.default_sample_size), e.writeUint32(this.default_sample_flags);
}, u.trunBox.prototype.write = function (e) {
    this.version = 0, this.size = 4, this.flags & u.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & u.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & u.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & u.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & u.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & u.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(e), e.writeUint32(this.sample_count), this.flags & u.TRUN_FLAGS_DATA_OFFSET && (this.data_offset_position = e.getPosition(), e.writeInt32(this.data_offset)), this.flags & u.TRUN_FLAGS_FIRST_FLAG && e.writeUint32(this.first_sample_flags);
    for (var t = 0; t < this.sample_count; t++)
        this.flags & u.TRUN_FLAGS_DURATION && e.writeUint32(this.sample_duration[t]), this.flags & u.TRUN_FLAGS_SIZE && e.writeUint32(this.sample_size[t]), this.flags & u.TRUN_FLAGS_FLAGS && e.writeUint32(this.sample_flags[t]), this.flags & u.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? e.writeUint32(this.sample_composition_time_offset[t]) : e.writeInt32(this.sample_composition_time_offset[t]));
}, u['url Box'].prototype.write = function (e) {
    this.version = 0, this.location ? (this.flags = 0, this.size = this.location.length + 1) : (this.flags = 1, this.size = 0), this.writeHeader(e), this.location && e.writeCString(this.location);
}, u['urn Box'].prototype.write = function (e) {
    this.version = 0, this.flags = 0, this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0), this.writeHeader(e), e.writeCString(this.name), this.location && e.writeCString(this.location);
}, u.vmhdBox.prototype.write = function (e) {
    this.version = 0, this.flags = 1, this.size = 8, this.writeHeader(e), e.writeUint16(this.graphicsmode), e.writeUint16Array(this.opcolor);
}, u.cttsBox.prototype.unpack = function (e) {
    var t, n, r;
    for (t = 0, r = 0; t < this.sample_counts.length; t++)
        for (n = 0; n < this.sample_counts[t]; n++)
            e[r].pts = e[r].dts + this.sample_offsets[t], r++;
}, u.sttsBox.prototype.unpack = function (e) {
    var t, n, r;
    for (t = 0, r = 0; t < this.sample_counts.length; t++)
        for (n = 0; n < this.sample_counts[t]; n++)
            0 === r ? e[r].dts = 0 : e[r].dts = e[r - 1].dts + this.sample_deltas[t], r++;
}, u.stcoBox.prototype.unpack = function (e) {
    var t;
    for (t = 0; t < this.chunk_offsets.length; t++)
        e[t].offset = this.chunk_offsets[t];
}, u.stscBox.prototype.unpack = function (e) {
    var t, n, r, i, a;
    for (t = 0, i = 0, a = 0; t < this.first_chunk.length; t++)
        for (n = 0; n < (t + 1 < this.first_chunk.length ? this.first_chunk[t + 1] : 1 / 0); n++)
            for (a++, r = 0; r < this.samples_per_chunk[t]; r++) {
                if (!e[i])
                    return;
                e[i].description_index = this.sample_description_index[t], e[i].chunk_index = a;
                i++;
            }
}, u.stszBox.prototype.unpack = function (e) {
    var t;
    for (t = 0; t < this.sample_sizes.length; t++)
        e[t].size = this.sample_sizes[t];
}, u.DIFF_BOXES_PROP_NAMES = [
    'boxes',
    'entries',
    'references',
    'subsamples',
    'items',
    'item_infos',
    'extents',
    'associations',
    'subsegments',
    'ranges',
    'seekLists',
    'seekPoints',
    'esd',
    'levels'
], u.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = [
    'compatible_brands',
    'matrix',
    'opcolor',
    'sample_counts',
    'sample_counts',
    'sample_deltas',
    'first_chunk',
    'samples_per_chunk',
    'sample_sizes',
    'chunk_offsets',
    'sample_offsets',
    'sample_description_index',
    'sample_duration'
], u.boxEqualFields = function (e, t) {
    var n;
    if (e && !t)
        return !1;
    for (n in e) {
        if (!(u.DIFF_BOXES_PROP_NAMES.indexOf(n) > -1))
            if (e[n] instanceof u.Box || t[n] instanceof u.Box)
                continue;
            else {
                if (void 0 === e[n] || void 0 === t[n])
                    continue;
                if ('function' == typeof e[n] || 'function' == typeof t[n])
                    continue;
                if (e.subBoxNames && e.subBoxNames.indexOf(n.slice(0, 4)) > -1 || t.subBoxNames && t.subBoxNames.indexOf(n.slice(0, 4)) > -1)
                    continue;
                if ('data' === n || 'start' === n || 'size' === n || 'creation_time' === n || 'modification_time' === n)
                    continue;
                if (u.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(n) > -1)
                    continue;
                else if (e[n] !== t[n])
                    return !1;
            }
    }
    return !0;
}, u.boxEqual = function (e, t) {
    if (!u.boxEqualFields(e, t))
        return !1;
    for (var n = 0; n < u.DIFF_BOXES_PROP_NAMES.length; n++) {
        var r = u.DIFF_BOXES_PROP_NAMES[n];
        if (e[r] && t[r] && !u.boxEqual(e[r], t[r]))
            return !1;
    }
    return !0;
};
var c = function () {
};
c.prototype.parseSample = function (e) {
    var t, n, r = new a(e.buffer);
    for (t = []; !r.isEos();)
        (n = u.parseOneBox(r, !1)).code === u.OK && 'vttc' === n.box.type && t.push(n.box);
    return t;
}, c.prototype.getText = function (e, t, n) {
    function r(e, t, n) {
        return n = n || '0', (e += '').length >= t ? e : Array(t - e.length + 1).join(n) + e;
    }
    function i(e) {
        var t = Math.floor(e / 3600), n = Math.floor((e - 3600 * t) / 60), i = Math.floor(e - 3600 * t - 60 * n), a = Math.floor((e - 3600 * t - 60 * n - i) * 1000);
        return '' + r(t, 2) + ':' + r(n, 2) + ':' + r(i, 2) + '.' + r(a, 3);
    }
    for (var a = this.parseSample(n), o = '', s = 0; s < a.length; s++) {
        var l = a[s];
        o += i(e) + ' --> ' + i(t) + '\r\n' + l.payl.text;
    }
    return o;
};
var d = function () {
};
d.prototype.parseSample = function (e) {
    var t, n = {};
    n.resources = [];
    var r = new a(e.data.buffer);
    if (e.subsamples && 0 !== e.subsamples.length) {
        if (n.documentString = r.readString(e.subsamples[0].size), e.subsamples.length > 1)
            for (t = 1; t < e.subsamples.length; t++)
                n.resources[t] = r.readUint8Array(e.subsamples[t].size);
    } else
        n.documentString = r.readString(e.data.length);
    return 'undefined' != typeof DOMParser && (n.document = new DOMParser().parseFromString(n.documentString, 'application/xml')), n;
};
var _ = function () {
};
_.prototype.parseSample = function (e) {
    return new a(e.data.buffer).readString(e.data.length);
}, _.prototype.parseConfig = function (e) {
    var t = new a(e.buffer);
    return t.readUint32(), t.readCString();
};
t.XMLSubtitlein4Parser = d, t.Textin4Parser = _;
var E = function (e) {
    this.stream = e || new s(), this.boxes = [], this.mdats = [], this.moofs = [], this.isProgressive = !1, this.moovStartFound = !1, this.onMoovStart = null, this.moovStartSent = !1, this.onReady = null, this.readySent = !1, this.onSegment = null, this.onSamples = null, this.onError = null, this.sampleListBuilt = !1, this.fragmentedTracks = [], this.extractedTracks = [], this.isFragmentationInitialized = !1, this.sampleProcessingStarted = !1, this.nextMoofNumber = 0, this.itemListBuilt = !1, this.onSidx = null, this.sidxSent = !1;
};
E.prototype.setSegmentOptions = function (e, t, n) {
    var r = this.getTrackById(e);
    if (r) {
        var i = {};
        this.fragmentedTracks.push(i), i.id = e, i.user = t, i.trak = r, r.nextSample = 0, i.segmentStream = null, i.nb_samples = 1000, i.rapAlignement = !0, n && (n.nbSamples && (i.nb_samples = n.nbSamples), n.rapAlignement && (i.rapAlignement = n.rapAlignement));
    }
}, E.prototype.unsetSegmentOptions = function (e) {
    for (var t = -1, n = 0; n < this.fragmentedTracks.length; n++)
        this.fragmentedTracks[n].id == e && (t = n);
    t > -1 && this.fragmentedTracks.splice(t, 1);
}, E.prototype.setExtractionOptions = function (e, t, n) {
    var r = this.getTrackById(e);
    if (r) {
        var i = {};
        this.extractedTracks.push(i), i.id = e, i.user = t, i.trak = r, r.nextSample = 0, i.nb_samples = 1000, i.samples = [], n && n.nbSamples && (i.nb_samples = n.nbSamples);
    }
}, E.prototype.unsetExtractionOptions = function (e) {
    for (var t = -1, n = 0; n < this.extractedTracks.length; n++)
        this.extractedTracks[n].id == e && (t = n);
    t > -1 && this.extractedTracks.splice(t, 1);
}, E.prototype.parse = function () {
    var e, t, n;
    if (!this.restoreParsePosition || !!this.restoreParsePosition())
        for (;;) {
            if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                if (this.processIncompleteMdat())
                    continue;
                return;
            }
            if (this.saveParsePosition && this.saveParsePosition(), (e = u.parseOneBox(this.stream, !1)).code === u.ERR_NOT_ENOUGH_DATA) {
                if (!this.processIncompleteBox)
                    return;
                if (this.processIncompleteBox(e))
                    continue;
                return;
            }
            switch (n = 'uuid' !== (t = e.box).type ? t.type : t.uuid, this.boxes.push(t), n) {
            case 'mdat':
                this.mdats.push(t);
                break;
            case 'moof':
                this.moofs.push(t);
                break;
            case 'moov':
                this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0);
            default:
                void 0 !== this[n] && i.warn('ISOFile', 'Duplicate Box of type: ' + n + ', overriding previous occurrence'), this[n] = t;
            }
            this.updateUsedBytes && this.updateUsedBytes(t, e);
        }
}, E.prototype.checkBuffer = function (e) {
    if (null == e)
        throw 'Buffer must be defined and non empty';
    if (void 0 === e.fileStart)
        throw 'Buffer must have a fileStart property';
    return 0 === e.byteLength ? (i.warn('ISOFile', 'Ignoring empty buffer (fileStart: ' + e.fileStart + ')'), this.stream.logBufferLevel(), !1) : (i.info('ISOFile', 'Processing buffer (fileStart: ' + e.fileStart + ')'), e.usedBytes = 0, this.stream.insertBuffer(e), this.stream.logBufferLevel(), !!this.stream.initialized() || (i.warn('ISOFile', 'Not ready to start parsing'), !1));
}, E.prototype.appendBuffer = function (e, t) {
    var n;
    if (!!this.checkBuffer(e))
        return this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (!this.sampleListBuilt && (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(t), this.nextSeekPosition ? (n = this.nextSeekPosition, this.nextSeekPosition = void 0) : n = this.nextParsePosition, this.stream.getEndFilePositionAfter && (n = this.stream.getEndFilePositionAfter(n))) : n = this.nextParsePosition ? this.nextParsePosition : 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (i.info('ISOFile', 'Done processing buffer (fileStart: ' + e.fileStart + ') - next buffer to fetch should have a fileStart position of ' + n), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), i.info('ISOFile', 'Sample data size in memory: ' + this.getAllocatedSampleDataSize())), n;
}, E.prototype.getInfo = function () {
    var e, t, n, r, i, a, o = {}, s = new Date('1904-01-01T00:00:00Z').getTime();
    if (this.moov)
        for (o.hasMoov = !0, o.duration = this.moov.mvhd.duration, o.timescale = this.moov.mvhd.timescale, o.isFragmented = null != this.moov.mvex, o.isFragmented && this.moov.mvex.mehd && (o.fragment_duration = this.moov.mvex.mehd.fragment_duration), o.isProgressive = this.isProgressive, o.hasIOD = null != this.moov.iods, o.brands = [], o.brands.push(this.ftyp.major_brand), o.brands = o.brands.concat(this.ftyp.compatible_brands), o.created = new Date(s + 1000 * this.moov.mvhd.creation_time), o.modified = new Date(s + 1000 * this.moov.mvhd.modification_time), o.tracks = [], o.audioTracks = [], o.videoTracks = [], o.subtitleTracks = [], o.metadataTracks = [], o.hintTracks = [], o.otherTracks = [], e = 0; e < this.moov.traks.length; e++) {
            if (a = (n = this.moov.traks[e]).mdia.minf.stbl.stsd.entries[0], r = {}, o.tracks.push(r), r.id = n.tkhd.track_id, r.name = n.mdia.hdlr.name, r.references = [], n.tref)
                for (t = 0; t < n.tref.boxes.length; t++)
                    i = {}, r.references.push(i), i.type = n.tref.boxes[t].type, i.track_ids = n.tref.boxes[t].track_ids;
            n.edts && (r.edits = n.edts.elst.entries), r.created = new Date(s + 1000 * n.tkhd.creation_time), r.modified = new Date(s + 1000 * n.tkhd.modification_time), r.movie_duration = n.tkhd.duration, r.movie_timescale = o.timescale, r.layer = n.tkhd.layer, r.alternate_group = n.tkhd.alternate_group, r.volume = n.tkhd.volume, r.matrix = n.tkhd.matrix, r.track_width = n.tkhd.width / 65536, r.track_height = n.tkhd.height / 65536, r.timescale = n.mdia.mdhd.timescale, r.cts_shift = n.mdia.minf.stbl.cslg, r.duration = n.mdia.mdhd.duration, r.samples_duration = n.samples_duration, r.codec = a.getCodec(), r.kind = n.udta && n.udta.kinds.length ? n.udta.kinds[0] : {
                schemeURI: '',
                value: ''
            }, r.language = n.mdia.elng ? n.mdia.elng.extended_language : n.mdia.mdhd.languageString, r.nb_samples = n.samples.length, r.size = n.samples_size, r.bitrate = 8 * r.size * r.timescale / r.samples_duration, a.isAudio() ? (r.type = 'audio', o.audioTracks.push(r), r.audio = {}, r.audio.sample_rate = a.getSampleRate(), r.audio.channel_count = a.getChannelCount(), r.audio.sample_size = a.getSampleSize()) : a.isVideo() ? (r.type = 'video', o.videoTracks.push(r), r.video = {}, r.video.width = a.getWidth(), r.video.height = a.getHeight()) : a.isSubtitle() ? (r.type = 'subtitles', o.subtitleTracks.push(r)) : a.isHint() ? (r.type = 'metadata', o.hintTracks.push(r)) : a.isMetadata() ? (r.type = 'metadata', o.metadataTracks.push(r)) : (r.type = 'metadata', o.otherTracks.push(r));
        }
    else
        o.hasMoov = !1;
    if (o.mime = '', o.hasMoov && o.tracks) {
        for (o.videoTracks && o.videoTracks.length > 0 ? o.mime += 'video/mp4; codecs="' : o.audioTracks && o.audioTracks.length > 0 ? o.mime += 'audio/mp4; codecs="' : o.mime += 'application/mp4; codecs="', e = 0; e < o.tracks.length; e++)
            0 !== e && (o.mime += ','), o.mime += o.tracks[e].codec;
        o.mime += '"; profiles="', o.mime += this.ftyp.compatible_brands.join(), o.mime += '"';
    }
    return o;
}, E.prototype.processSamples = function (e) {
    if (this.sampleProcessingStarted) {
        if (this.isFragmentationInitialized && null !== this.onSegment)
            for (t = 0; t < this.fragmentedTracks.length; t++) {
                var t, n, r = this.fragmentedTracks[t];
                for (n = r.trak; n.nextSample < n.samples.length && this.sampleProcessingStarted;) {
                    i.debug('ISOFile', 'Creating media fragment on track #' + r.id + ' for sample ' + n.nextSample);
                    var a = this.createFragment(r.id, n.nextSample, r.segmentStream);
                    if (a)
                        r.segmentStream = a, n.nextSample++;
                    else
                        break;
                    if ((n.nextSample % r.nb_samples == 0 || e || n.nextSample >= n.samples.length) && (i.info('ISOFile', 'Sending fragmented data on track #' + r.id + ' for samples [' + Math.max(0, n.nextSample - r.nb_samples) + ',' + (n.nextSample - 1) + ']'), i.info('ISOFile', 'Sample data size in memory: ' + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(r.id, r.user, r.segmentStream.buffer, n.nextSample, e || n.nextSample >= n.samples.length), r.segmentStream = null, r !== this.fragmentedTracks[t]))
                        break;
                }
            }
        if (null !== this.onSamples)
            for (t = 0; t < this.extractedTracks.length; t++) {
                var o = this.extractedTracks[t];
                for (n = o.trak; n.nextSample < n.samples.length && this.sampleProcessingStarted;) {
                    i.debug('ISOFile', 'Exporting on track #' + o.id + ' sample #' + n.nextSample);
                    var s = this.getSample(n, n.nextSample);
                    if (s)
                        n.nextSample++, o.samples.push(s);
                    else
                        break;
                    if ((n.nextSample % o.nb_samples == 0 || n.nextSample >= n.samples.length) && (i.debug('ISOFile', 'Sending samples on track #' + o.id + ' for sample ' + n.nextSample), this.onSamples && this.onSamples(o.id, o.user, o.samples), o.samples = [], o !== this.extractedTracks[t]))
                        break;
                }
            }
    }
}, E.prototype.getBox = function (e) {
    var t = this.getBoxes(e, !0);
    return t.length ? t[0] : null;
}, E.prototype.getBoxes = function (e, t) {
    var n = [];
    return E._sweep.call(this, e, n, t), n;
}, E._sweep = function (e, t, n) {
    for (var r in (this.type && this.type == e && t.push(this), this.boxes)) {
        if (t.length && n)
            return;
        E._sweep.call(this.boxes[r], e, t, n);
    }
}, E.prototype.getTrackSamplesInfo = function (e) {
    var t = this.getTrackById(e);
    return t ? t.samples : void 0;
}, E.prototype.getTrackSample = function (e, t) {
    var n = this.getTrackById(e);
    return this.getSample(n, t);
}, E.prototype.releaseUsedSamples = function (e, t) {
    var n = 0, r = this.getTrackById(e);
    !r.lastValidSample && (r.lastValidSample = 0);
    for (var a = r.lastValidSample; a < t; a++)
        n += this.releaseSample(r, a);
    i.info('ISOFile', 'Track #' + e + ' released samples up to ' + t + ' (released size: ' + n + ', remaining: ' + this.samplesDataSize + ')'), r.lastValidSample = t;
}, E.prototype.start = function () {
    this.sampleProcessingStarted = !0, this.processSamples(!1);
}, E.prototype.stop = function () {
    this.sampleProcessingStarted = !1;
}, E.prototype.flush = function () {
    i.info('ISOFile', 'Flushing remaining samples'), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0);
}, E.prototype.seekTrack = function (e, t, n) {
    var r, a, o, s = 1 / 0, l = 0, u = 0;
    if (0 === n.samples.length)
        return i.info('ISOFile', 'No sample in track, cannot seek! Using time ' + i.getDurationString(0, 1) + ' and offset: 0'), {
            offset: 0,
            time: 0
        };
    for (r = 0; r < n.samples.length; r++) {
        if (a = n.samples[r], 0 === r)
            u = 0, o = a.timescale;
        else if (a.cts > e * a.timescale) {
            u = r - 1;
            break;
        }
        t && a.is_sync && (l = r);
    }
    for (t && (u = l), e = n.samples[u].cts, n.nextSample = u; n.samples[u].alreadyRead === n.samples[u].size && n.samples[u + 1];) {
        ;
        u++;
    }
    return s = n.samples[u].offset + n.samples[u].alreadyRead, i.info('ISOFile', 'Seeking to ' + (t ? 'RAP' : '') + ' sample #' + n.nextSample + ' on track ' + n.tkhd.track_id + ', time ' + i.getDurationString(e, o) + ' and offset: ' + s), {
        offset: s,
        time: e / o
    };
}, E.prototype.seek = function (e, t) {
    var n, r, a, o = this.moov, s = {
            offset: 1 / 0,
            time: 1 / 0
        };
    if (this.moov) {
        for (a = 0; a < o.traks.length; a++)
            n = o.traks[a], (r = this.seekTrack(e, t, n)).offset < s.offset && (s.offset = r.offset), r.time < s.time && (s.time = r.time);
        return i.info('ISOFile', 'Seeking at time ' + i.getDurationString(s.time, 1) + ' needs a buffer with a fileStart position of ' + s.offset), s.offset === 1 / 0 ? s = {
            offset: this.nextParsePosition,
            time: 0
        } : s.offset = this.stream.getEndFilePositionAfter(s.offset), i.info('ISOFile', 'Adjusted seek position (after checking data already in buffer): ' + s.offset), s;
    }
    throw 'Cannot seek: moov not received!';
}, E.prototype.equal = function (e) {
    for (var t = 0; t < this.boxes.length && t < e.boxes.length;) {
        var n = this.boxes[t], r = e.boxes[t];
        if (!u.boxEqual(n, r))
            return !1;
        t++;
    }
    return !0;
};
t.ISOFile = E, E.prototype.lastBoxStartPosition = 0, E.prototype.parsingMdat = null, E.prototype.nextParsePosition = 0, E.prototype.discardMdatData = !1, E.prototype.processIncompleteBox = function (e) {
    var t;
    if ('mdat' === e.type)
        return (t = new u[e.type + 'Box'](e.size), this.parsingMdat = t, this.boxes.push(t), this.mdats.push(t), t.start = e.start, t.hdr_size = e.hdr_size, this.stream.addUsedBytes(t.hdr_size), this.lastBoxStartPosition = t.start + t.size, this.stream.seek(t.start + t.size, !1, this.discardMdatData)) ? (this.parsingMdat = null, !0) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = t.start + t.size, !1);
    return ('moov' === e.type && (this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) ? (this.nextParsePosition = this.stream.getEndPosition(), !0) : (e.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + e.size : this.nextParsePosition = this.stream.getEndPosition(), !1);
}, E.prototype.hasIncompleteMdat = function () {
    return null !== this.parsingMdat;
}, E.prototype.processIncompleteMdat = function () {
    var e;
    return (e = this.parsingMdat, this.stream.seek(e.start + e.size, !1, this.discardMdatData)) ? (i.debug('ISOFile', 'Found \'mdat\' end in buffered data'), this.parsingMdat = null, !0) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), !1);
}, E.prototype.restoreParsePosition = function () {
    return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData);
}, E.prototype.saveParsePosition = function () {
    this.lastBoxStartPosition = this.stream.getPosition();
}, E.prototype.updateUsedBytes = function (e, t) {
    this.stream.addUsedBytes && ('mdat' === e.type ? (this.stream.addUsedBytes(e.hdr_size), this.discardMdatData && this.stream.addUsedBytes(e.size - e.hdr_size)) : this.stream.addUsedBytes(e.size));
}, E.prototype.add = u.Box.prototype.add, E.prototype.addBox = u.Box.prototype.addBox, E.prototype.init = function (e) {
    var t = e || {};
    this.add('ftyp').set('major_brand', t.brands && t.brands[0] || 'iso4').set('minor_version', 0).set('compatible_brands', t.brands || ['iso4']);
    var n = this.add('moov');
    return n.add('mvhd').set('timescale', t.timescale || 600).set('rate', t.rate || 65536).set('creation_time', 0).set('modification_time', 0).set('duration', t.duration || 0).set('volume', t.width ? 0 : 256).set('matrix', [
        65536,
        0,
        0,
        0,
        65536,
        0,
        0,
        0,
        1073741824
    ]).set('next_track_id', 1), n.add('mvex'), this;
}, E.prototype.addTrack = function (e) {
    !this.moov && this.init(e);
    var t = e || {};
    t.width = t.width || 320, t.height = t.height || 320, t.id = t.id || this.moov.mvhd.next_track_id, t.type = t.type || 'avc1';
    var n = this.moov.add('trak');
    this.moov.mvhd.next_track_id = t.id + 1, n.add('tkhd').set('flags', u.TKHD_FLAG_ENABLED | u.TKHD_FLAG_IN_MOVIE | u.TKHD_FLAG_IN_PREVIEW).set('creation_time', 0).set('modification_time', 0).set('track_id', t.id).set('duration', t.duration || 0).set('layer', t.layer || 0).set('alternate_group', 0).set('volume', 1).set('matrix', [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]).set('width', t.width << 16).set('height', t.height << 16);
    var r = n.add('mdia');
    r.add('mdhd').set('creation_time', 0).set('modification_time', 0).set('timescale', t.timescale || 1).set('duration', t.media_duration || 0).set('language', t.language || 'und'), r.add('hdlr').set('handler', t.hdlr || 'vide').set('name', t.name || 'Track created with MP4Box.js'), r.add('elng').set('extended_language', t.language || 'fr-FR');
    var i = r.add('minf');
    if (void 0 !== u[t.type + 'SampleEntry']) {
        var o = new u[t.type + 'SampleEntry']();
        o.data_reference_index = 1;
        var s = '';
        for (var l in u.sampleEntryCodes) {
            for (var c = u.sampleEntryCodes[l], d = 0; d < c.length; d++)
                if (c.indexOf(t.type) > -1) {
                    s = l;
                    break;
                }
        }
        switch (s) {
        case 'Visual':
            if (i.add('vmhd').set('graphicsmode', 0).set('opcolor', [
                    0,
                    0,
                    0
                ]), o.set('width', t.width).set('height', t.height).set('horizresolution', 4718592).set('vertresolution', 4718592).set('frame_count', 1).set('compressorname', t.type + ' Compressor').set('depth', 24), t.avcDecoderConfigRecord) {
                var _ = new u.avcCBox(), E = new a(t.avcDecoderConfigRecord);
                _.parse(E), o.addBox(_);
            }
            break;
        case 'Audio':
            i.add('smhd').set('balance', t.balance || 0), o.set('channel_count', t.channel_count || 2).set('samplesize', t.samplesize || 16).set('samplerate', t.samplerate || 65536);
            break;
        case 'Hint':
            i.add('hmhd');
            break;
        case 'Subtitle':
            if (i.add('sthd'), 'stpp' === t.type)
                o.set('namespace', t.namespace || 'nonamespace').set('schema_location', t.schema_location || '').set('auxiliary_mime_types', t.auxiliary_mime_types || '');
            break;
        case 'Metadata':
        case 'System':
            i.add('nmhd');
            break;
        default:
            i.add('nmhd');
        }
        t.description && o.addBox(t.description), t.description_boxes && t.description_boxes.forEach(function (e) {
            o.addBox(e);
        }), i.add('dinf').add('dref').addEntry(new u['url Box']().set('flags', 1));
        var f = i.add('stbl');
        return f.add('stsd').addEntry(o), f.add('stts').set('sample_counts', []).set('sample_deltas', []), f.add('stsc').set('first_chunk', []).set('samples_per_chunk', []).set('sample_description_index', []), f.add('stco').set('chunk_offsets', []), f.add('stsz').set('sample_sizes', []), this.moov.mvex.add('trex').set('track_id', t.id).set('default_sample_description_index', t.default_sample_description_index || 1).set('default_sample_duration', t.default_sample_duration || 0).set('default_sample_size', t.default_sample_size || 0).set('default_sample_flags', t.default_sample_flags || 0), this.buildTrakSampleLists(n), t.id;
    }
}, u.Box.prototype.computeSize = function (e) {
    var t = e || new o();
    t.endianness = o.BIG_ENDIAN, this.write(t);
}, E.prototype.addSample = function (e, t, n) {
    var r = n || {}, i = {}, a = this.getTrackById(e);
    if (null !== a) {
        i.number = a.samples.length, i.track_id = a.tkhd.track_id, i.timescale = a.mdia.mdhd.timescale, i.description_index = r.sample_description_index ? r.sample_description_index - 1 : 0, i.description = a.mdia.minf.stbl.stsd.entries[i.description_index], i.data = t, i.size = t.byteLength, i.alreadyRead = i.size, i.duration = r.duration || 1, i.cts = r.cts || 0, i.dts = r.dts || 0, i.is_sync = r.is_sync || !1, i.is_leading = r.is_leading || 0, i.depends_on = r.depends_on || 0, i.is_depended_on = r.is_depended_on || 0, i.has_redundancy = r.has_redundancy || 0, i.degradation_priority = r.degradation_priority || 0, i.offset = 0, i.subsamples = r.subsamples, a.samples.push(i), a.samples_size += i.size, a.samples_duration += i.duration, !a.first_dts && (a.first_dts = r.dts), this.processSamples();
        var o = this.createSingleSampleMoof(i);
        return this.addBox(o), o.computeSize(), o.trafs[0].truns[0].data_offset = o.size + 8, this.add('mdat').data = new Uint8Array(t), i;
    }
}, E.prototype.createSingleSampleMoof = function (e) {
    var t = 0;
    t = e.is_sync ? 33554432 : 65536;
    var n = new u.moofBox();
    n.add('mfhd').set('sequence_number', this.nextMoofNumber), this.nextMoofNumber++;
    var r = n.add('traf'), i = this.getTrackById(e.track_id);
    return r.add('tfhd').set('track_id', e.track_id).set('flags', u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), r.add('tfdt').set('baseMediaDecodeTime', e.dts - (i.first_dts || 0)), r.add('trun').set('flags', u.TRUN_FLAGS_DATA_OFFSET | u.TRUN_FLAGS_DURATION | u.TRUN_FLAGS_SIZE | u.TRUN_FLAGS_FLAGS | u.TRUN_FLAGS_CTS_OFFSET).set('data_offset', 0).set('first_sample_flags', 0).set('sample_count', 1).set('sample_duration', [e.duration]).set('sample_size', [e.size]).set('sample_flags', [t]).set('sample_composition_time_offset', [e.cts - e.dts]), n;
}, E.prototype.lastMoofIndex = 0, E.prototype.samplesDataSize = 0, E.prototype.resetTables = function () {
    for (e = 0, this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0; e < this.moov.traks.length; e++) {
        (t = this.moov.traks[e]).tkhd.duration = 0, t.mdia.mdhd.duration = 0, (t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64).chunk_offsets = [], (n = t.mdia.minf.stbl.stsc).first_chunk = [], n.samples_per_chunk = [], n.sample_description_index = [], (t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2).sample_sizes = [], (r = t.mdia.minf.stbl.stts).sample_counts = [], r.sample_deltas = [], (i = t.mdia.minf.stbl.ctts) && (i.sample_counts = [], i.sample_offsets = []), a = t.mdia.minf.stbl.stss;
        var e, t, n, r, i, a, o = t.mdia.minf.stbl.boxes.indexOf(a);
        -1 != o && (t.mdia.minf.stbl.boxes[o] = null);
    }
}, E.initSampleGroups = function (e, t, n, r, i) {
    var a, o, s, l;
    function u(e, t, n) {
        this.grouping_type = e, this.grouping_type_parameter = t, this.sbgp = n, this.last_sample_in_run = -1, this.entry_index = -1;
    }
    for (t && (t.sample_groups_info = []), !e.sample_groups_info && (e.sample_groups_info = []), o = 0; o < n.length; o++) {
        for (l = n[o].grouping_type + '/' + n[o].grouping_type_parameter, s = new u(n[o].grouping_type, n[o].grouping_type_parameter, n[o]), t && (t.sample_groups_info[l] = s), !e.sample_groups_info[l] && (e.sample_groups_info[l] = s), a = 0; a < r.length; a++)
            r[a].grouping_type === n[o].grouping_type && (s.description = r[a], s.description.used = !0);
        if (i)
            for (a = 0; a < i.length; a++)
                i[a].grouping_type === n[o].grouping_type && (s.fragment_description = i[a], s.fragment_description.used = !0, s.is_fragment = !0);
    }
    if (t) {
        if (i)
            for (o = 0; o < i.length; o++)
                !i[o].used && i[o].version >= 2 && (l = i[o].grouping_type + '/0', (s = new u(i[o].grouping_type, 0)).is_fragment = !0, !t.sample_groups_info[l] && (t.sample_groups_info[l] = s));
    } else
        for (o = 0; o < r.length; o++)
            !r[o].used && r[o].version >= 2 && (l = r[o].grouping_type + '/0', s = new u(r[o].grouping_type, 0), !e.sample_groups_info[l] && (e.sample_groups_info[l] = s));
}, E.setSampleGroupProperties = function (e, t, n, r) {
    var i, a, o;
    for (i in (t.sample_groups = [], r))
        t.sample_groups[i] = {}, t.sample_groups[i].grouping_type = r[i].grouping_type, t.sample_groups[i].grouping_type_parameter = r[i].grouping_type_parameter, n >= r[i].last_sample_in_run && (r[i].last_sample_in_run < 0 && (r[i].last_sample_in_run = 0), r[i].entry_index++, r[i].entry_index <= r[i].sbgp.entries.length - 1 && (r[i].last_sample_in_run += r[i].sbgp.entries[r[i].entry_index].sample_count)), r[i].entry_index <= r[i].sbgp.entries.length - 1 ? t.sample_groups[i].group_description_index = r[i].sbgp.entries[r[i].entry_index].group_description_index : t.sample_groups[i].group_description_index = -1, 0 !== t.sample_groups[i].group_description_index && (o = r[i].fragment_description ? r[i].fragment_description : r[i].description, t.sample_groups[i].group_description_index > 0 ? (a = t.sample_groups[i].group_description_index > 65535 ? (t.sample_groups[i].group_description_index >> 16) - 1 : t.sample_groups[i].group_description_index - 1, o && a >= 0 && (t.sample_groups[i].description = o.entries[a])) : o && o.version >= 2 && o.default_group_description_index > 0 && (t.sample_groups[i].description = o.entries[o.default_group_description_index - 1]));
}, E.process_sdtp = function (e, t, n) {
    if (!!t)
        e ? (t.is_leading = e.is_leading[n], t.depends_on = e.sample_depends_on[n], t.is_depended_on = e.sample_is_depended_on[n], t.has_redundancy = e.sample_has_redundancy[n]) : (t.is_leading = 0, t.depends_on = 0, t.is_depended_on = 0, t.has_redundancy = 0);
}, E.prototype.buildSampleLists = function () {
    var e, t;
    for (e = 0; e < this.moov.traks.length; e++)
        t = this.moov.traks[e], this.buildTrakSampleLists(t);
}, E.prototype.buildTrakSampleLists = function (e) {
    if (e.samples = [], e.samples_duration = 0, e.samples_size = 0, n = e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64, r = e.mdia.minf.stbl.stsc, i = e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2, a = e.mdia.minf.stbl.stts, o = e.mdia.minf.stbl.ctts, s = e.mdia.minf.stbl.stss, l = e.mdia.minf.stbl.stsd, u = e.mdia.minf.stbl.subs, _ = e.mdia.minf.stbl.stdp, c = e.mdia.minf.stbl.sbgps, d = e.mdia.minf.stbl.sgpds, T = -1, g = -1, S = -1, A = -1, N = 0, v = 0, O = 0, E.initSampleGroups(e, null, c, d), void 0 !== i) {
        for (t = 0; t < i.sample_sizes.length; t++) {
            var t, n, r, i, a, o, s, l, u, c, d, _, f, h, p, m, I, T, g, S, A, N, v, O, R = {};
            R.number = t, R.track_id = e.tkhd.track_id, R.timescale = e.mdia.mdhd.timescale, R.alreadyRead = 0, e.samples[t] = R, R.size = i.sample_sizes[t], e.samples_size += R.size, 0 === t ? (h = 1, f = 0, R.chunk_index = h, R.chunk_run_index = f, I = r.samples_per_chunk[f], m = 0, p = f + 1 < r.first_chunk.length ? r.first_chunk[f + 1] - 1 : 1 / 0) : t < I ? (R.chunk_index = h, R.chunk_run_index = f) : (h++, R.chunk_index = h, m = 0, h <= p || (p = ++f + 1 < r.first_chunk.length ? r.first_chunk[f + 1] - 1 : 1 / 0), R.chunk_run_index = f, I += r.samples_per_chunk[f]), R.description_index = r.sample_description_index[R.chunk_run_index] - 1, R.description = l.entries[R.description_index], R.offset = n.chunk_offsets[R.chunk_index - 1] + m, m += R.size, t > T && (g++, T < 0 && (T = 0), T += a.sample_counts[g]), t > 0 ? (e.samples[t - 1].duration = a.sample_deltas[g], e.samples_duration += e.samples[t - 1].duration, R.dts = e.samples[t - 1].dts + e.samples[t - 1].duration) : R.dts = 0, o ? (t >= S && (A++, S < 0 && (S = 0), S += o.sample_counts[A]), R.cts = e.samples[t].dts + o.sample_offsets[A]) : R.cts = R.dts, s ? (t == s.sample_numbers[N] - 1 ? (R.is_sync = !0, N++) : (R.is_sync = !1, R.degradation_priority = 0), u && u.entries[v].sample_delta + O == t + 1 && (R.subsamples = u.entries[v].subsamples, O += u.entries[v].sample_delta, v++)) : R.is_sync = !0, E.process_sdtp(e.mdia.minf.stbl.sdtp, R, R.number), _ ? R.degradation_priority = _.priority[t] : R.degradation_priority = 0, u && u.entries[v].sample_delta + O == t && (R.subsamples = u.entries[v].subsamples, O += u.entries[v].sample_delta), (c.length > 0 || d.length > 0) && E.setSampleGroupProperties(e, R, t, e.sample_groups_info);
        }
        t > 0 && (e.samples[t - 1].duration = Math.max(e.mdia.mdhd.duration - e.samples[t - 1].dts, 0), e.samples_duration += e.samples[t - 1].duration);
    }
}, E.prototype.updateSampleLists = function () {
    if (void 0 !== this.moov) {
        for (; this.lastMoofIndex < this.moofs.length;)
            if (l = this.moofs[this.lastMoofIndex], this.lastMoofIndex++, 'moof' == l.type)
                for (e = 0; e < l.trafs.length; e++) {
                    for (c = l.trafs[e], d = this.getTrackById(c.tfhd.track_id), _ = this.getTrexById(c.tfhd.track_id), r = c.tfhd.flags & u.TFHD_FLAG_SAMPLE_DESC ? c.tfhd.default_sample_description_index : _ ? _.default_sample_description_index : 1, i = c.tfhd.flags & u.TFHD_FLAG_SAMPLE_DUR ? c.tfhd.default_sample_duration : _ ? _.default_sample_duration : 0, a = c.tfhd.flags & u.TFHD_FLAG_SAMPLE_SIZE ? c.tfhd.default_sample_size : _ ? _.default_sample_size : 0, o = c.tfhd.flags & u.TFHD_FLAG_SAMPLE_FLAGS ? c.tfhd.default_sample_flags : _ ? _.default_sample_flags : 0, c.sample_number = 0, c.sbgps.length > 0 && E.initSampleGroups(d, c, c.sbgps, d.mdia.minf.stbl.sgpds, c.sgpds), t = 0; t < c.truns.length; t++) {
                        var e, t, n, r, i, a, o, s, l, c, d, _, f, h, p = c.truns[t];
                        for (n = 0; n < p.sample_count; n++) {
                            (f = {}).moof_number = this.lastMoofIndex, f.number_in_traf = c.sample_number, c.sample_number++, f.number = d.samples.length, c.first_sample_index = d.samples.length, d.samples.push(f), f.track_id = d.tkhd.track_id, f.timescale = d.mdia.mdhd.timescale, f.description_index = r - 1, f.description = d.mdia.minf.stbl.stsd.entries[f.description_index], f.size = a, p.flags & u.TRUN_FLAGS_SIZE && (f.size = p.sample_size[n]), d.samples_size += f.size, f.duration = i, p.flags & u.TRUN_FLAGS_DURATION && (f.duration = p.sample_duration[n]), d.samples_duration += f.duration, d.first_traf_merged || n > 0 ? f.dts = d.samples[d.samples.length - 2].dts + d.samples[d.samples.length - 2].duration : (c.tfdt ? f.dts = c.tfdt.baseMediaDecodeTime : f.dts = 0, d.first_traf_merged = !0), f.cts = f.dts, p.flags & u.TRUN_FLAGS_CTS_OFFSET && (f.cts = f.dts + p.sample_composition_time_offset[n]), h = o, p.flags & u.TRUN_FLAGS_FLAGS ? h = p.sample_flags[n] : 0 === n && p.flags & u.TRUN_FLAGS_FIRST_FLAG && (h = p.first_sample_flags), f.is_sync = !(h >> 16 & 1), f.is_leading = h >> 26 & 3, f.depends_on = h >> 24 & 3, f.is_depended_on = h >> 22 & 3, f.has_redundancy = h >> 20 & 3, f.degradation_priority = 65535 & h;
                            var m = !!(c.tfhd.flags & u.TFHD_FLAG_BASE_DATA_OFFSET), I = !!(c.tfhd.flags & u.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), T = !!(p.flags & u.TRUN_FLAGS_DATA_OFFSET), g = 0;
                            g = m ? c.tfhd.base_data_offset : I ? l.start : 0 === t ? l.start : s, 0 === t && 0 === n ? T ? f.offset = g + p.data_offset : f.offset = g : f.offset = s, s = f.offset + f.size, (c.sbgps.length > 0 || c.sgpds.length > 0 || d.mdia.minf.stbl.sbgps.length > 0 || d.mdia.minf.stbl.sgpds.length > 0) && E.setSampleGroupProperties(d, f, f.number_in_traf, c.sample_groups_info);
                        }
                    }
                    if (c.subs) {
                        d.has_fragment_subsamples = !0;
                        var S = c.first_sample_index;
                        for (t = 0; t < c.subs.entries.length; t++)
                            S += c.subs.entries[t].sample_delta, (f = d.samples[S - 1]).subsamples = c.subs.entries[t].subsamples;
                    }
                }
    }
}, E.prototype.getSample = function (e, t) {
    var n, r = e.samples[t];
    if (!this.moov)
        return null;
    if (r.data) {
        if (r.alreadyRead == r.size)
            return r;
    } else
        r.data = new Uint8Array(r.size), r.alreadyRead = 0, this.samplesDataSize += r.size, i.debug('ISOFile', 'Allocating sample #' + t + ' on track #' + e.tkhd.track_id + ' of size ' + r.size + ' (total: ' + this.samplesDataSize + ')');
    for (;;) {
        var a = this.stream.findPosition(!0, r.offset + r.alreadyRead, !1);
        if (!(a > -1))
            return null;
        var s = (n = this.stream.buffers[a]).byteLength - (r.offset + r.alreadyRead - n.fileStart);
        if (r.size - r.alreadyRead <= s)
            return i.debug('ISOFile', 'Getting sample #' + t + ' data (alreadyRead: ' + r.alreadyRead + ' offset: ' + (r.offset + r.alreadyRead - n.fileStart) + ' read size: ' + (r.size - r.alreadyRead) + ' full size: ' + r.size + ')'), o.memcpy(r.data.buffer, r.alreadyRead, n, r.offset + r.alreadyRead - n.fileStart, r.size - r.alreadyRead), n.usedBytes += r.size - r.alreadyRead, this.stream.logBufferLevel(), r.alreadyRead = r.size, r;
        if (0 === s)
            return null;
        i.debug('ISOFile', 'Getting sample #' + t + ' partial data (alreadyRead: ' + r.alreadyRead + ' offset: ' + (r.offset + r.alreadyRead - n.fileStart) + ' read size: ' + s + ' full size: ' + r.size + ')'), o.memcpy(r.data.buffer, r.alreadyRead, n, r.offset + r.alreadyRead - n.fileStart, s), r.alreadyRead += s, n.usedBytes += s, this.stream.logBufferLevel();
    }
}, E.prototype.releaseSample = function (e, t) {
    var n = e.samples[t];
    return n.data ? (this.samplesDataSize -= n.size, n.data = null, n.alreadyRead = 0, n.size) : 0;
}, E.prototype.getAllocatedSampleDataSize = function () {
    return this.samplesDataSize;
}, E.prototype.getCodecs = function () {
    var e, t = '';
    for (e = 0; e < this.moov.traks.length; e++) {
        var n = this.moov.traks[e];
        e > 0 && (t += ','), t += n.mdia.minf.stbl.stsd.entries[0].getCodec();
    }
    return t;
}, E.prototype.getTrexById = function (e) {
    var t;
    if (!this.moov || !this.moov.mvex)
        return null;
    for (t = 0; t < this.moov.mvex.trexs.length; t++) {
        var n = this.moov.mvex.trexs[t];
        if (n.track_id == e)
            return n;
    }
    return null;
}, E.prototype.getTrackById = function (e) {
    if (void 0 === this.moov)
        return null;
    for (var t = 0; t < this.moov.traks.length; t++) {
        var n = this.moov.traks[t];
        if (n.tkhd.track_id == e)
            return n;
    }
    return null;
}, E.prototype.items = [], E.prototype.itemsDataSize = 0, E.prototype.flattenItemInfo = function () {
    var e, t, n, r = this.items, a = this.meta;
    if (null != a && void 0 !== a.hdlr) {
        if (void 0 !== a.iinf) {
            for (e = 0; e < a.iinf.item_infos.length; e++)
                (n = {}).id = a.iinf.item_infos[e].item_ID, r[n.id] = n, n.ref_to = [], n.name = a.iinf.item_infos[e].item_name, a.iinf.item_infos[e].protection_index > 0 && (n.protection = a.ipro.protections[a.iinf.item_infos[e].protection_index - 1]), a.iinf.item_infos[e].item_type ? n.type = a.iinf.item_infos[e].item_type : n.type = 'mime', n.content_type = a.iinf.item_infos[e].content_type, n.content_encoding = a.iinf.item_infos[e].content_encoding;
            if (a.iloc)
                for (e = 0; e < a.iloc.items.length; e++) {
                    var o = a.iloc.items[e];
                    switch (n = r[o.item_ID], 0 !== o.data_reference_index && (i.warn('Item storage with reference to other files: not supported'), n.source = a.dinf.boxes[o.data_reference_index - 1]), o.construction_method) {
                    case 0:
                        break;
                    case 1:
                        i.warn('Item storage with construction_method : not supported');
                        break;
                    case 2:
                        i.warn('Item storage with construction_method : not supported');
                    }
                    for (t = 0, n.extents = [], n.size = 0; t < o.extents.length; t++)
                        n.extents[t] = {}, n.extents[t].offset = o.extents[t].extent_offset + o.base_offset, n.extents[t].length = o.extents[t].extent_length, n.extents[t].alreadyRead = 0, n.size += n.extents[t].length;
                }
            if (a.pitm && (r[a.pitm.item_id].primary = !0), a.iref)
                for (e = 0; e < a.iref.references.length; e++) {
                    var s = a.iref.references[e];
                    for (t = 0; t < s.references.length; t++)
                        r[s.from_item_ID].ref_to.push({
                            type: s.type,
                            id: s.references[t]
                        });
                }
            if (a.iprp)
                for (var l = 0; l < a.iprp.ipmas.length; l++) {
                    var u = a.iprp.ipmas[l];
                    for (e = 0; e < u.associations.length; e++) {
                        var c = u.associations[e];
                        for (void 0 === (n = r[c.id]).properties && (n.properties = {}, n.properties.boxes = []), t = 0; t < c.props.length; t++) {
                            var d = c.props[t];
                            if (d.property_index > 0 && d.property_index - 1 < a.iprp.ipco.boxes.length) {
                                var _ = a.iprp.ipco.boxes[d.property_index - 1];
                                n.properties[_.type] = _, n.properties.boxes.push(_);
                            }
                        }
                    }
                }
        }
    }
}, E.prototype.getItem = function (e) {
    if (!this.meta)
        return null;
    if (!(n = this.items[e]).data && n.size)
        n.data = new Uint8Array(n.size), n.alreadyRead = 0, this.itemsDataSize += n.size, i.debug('ISOFile', 'Allocating item #' + e + ' of size ' + n.size + ' (total: ' + this.itemsDataSize + ')');
    else if (n.alreadyRead === n.size)
        return n;
    for (var t, n, r = 0; r < n.extents.length; r++) {
        var a = n.extents[r];
        if (a.alreadyRead !== a.length) {
            var s = this.stream.findPosition(!0, a.offset + a.alreadyRead, !1);
            if (!(s > -1))
                return null;
            var l = (t = this.stream.buffers[s]).byteLength - (a.offset + a.alreadyRead - t.fileStart);
            if (!(a.length - a.alreadyRead <= l))
                return i.debug('ISOFile', 'Getting item #' + e + ' extent #' + r + ' partial data (alreadyRead: ' + a.alreadyRead + ' offset: ' + (a.offset + a.alreadyRead - t.fileStart) + ' read size: ' + l + ' full extent size: ' + a.length + ' full item size: ' + n.size + ')'), o.memcpy(n.data.buffer, n.alreadyRead, t, a.offset + a.alreadyRead - t.fileStart, l), a.alreadyRead += l, n.alreadyRead += l, t.usedBytes += l, this.stream.logBufferLevel(), null;
            i.debug('ISOFile', 'Getting item #' + e + ' extent #' + r + ' data (alreadyRead: ' + a.alreadyRead + ' offset: ' + (a.offset + a.alreadyRead - t.fileStart) + ' read size: ' + (a.length - a.alreadyRead) + ' full extent size: ' + a.length + ' full item size: ' + n.size + ')'), o.memcpy(n.data.buffer, n.alreadyRead, t, a.offset + a.alreadyRead - t.fileStart, a.length - a.alreadyRead), t.usedBytes += a.length - a.alreadyRead, this.stream.logBufferLevel(), n.alreadyRead += a.length - a.alreadyRead, a.alreadyRead = a.length;
        }
    }
    return n.alreadyRead === n.size ? n : null;
}, E.prototype.releaseItem = function (e) {
    var t = this.items[e];
    if (!t.data)
        return 0;
    this.itemsDataSize -= t.size, t.data = null, t.alreadyRead = 0;
    for (var n = 0; n < t.extents.length; n++)
        t.extents[n].alreadyRead = 0;
    return t.size;
}, E.prototype.processItems = function (e) {
    for (var t in this.items) {
        var n = this.items[t];
        this.getItem(n.id), e && !n.sent && (e(n), n.sent = !0, n.data = null);
    }
}, E.prototype.hasItem = function (e) {
    for (var t in this.items) {
        var n = this.items[t];
        if (n.name === e)
            return n.id;
    }
    return -1;
}, E.prototype.getMetaHandler = function () {
    return this.meta ? this.meta.hdlr.handler : null;
}, E.prototype.getPrimaryItem = function () {
    return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null;
}, E.prototype.itemToFragmentedTrackFile = function (e) {
    var t = e || {}, n = null;
    if (null == (n = t.itemId ? this.getItem(t.itemId) : this.getPrimaryItem()))
        return null;
    var r = new E();
    r.discardMdatData = !1;
    var i = {
        type: n.type,
        description_boxes: n.properties.boxes
    };
    n.properties.ispe && (i.width = n.properties.ispe.image_width, i.height = n.properties.ispe.image_height);
    var a = r.addTrack(i);
    return a ? (r.addSample(a, n.data), r) : null;
}, E.prototype.write = function (e) {
    for (var t = 0; t < this.boxes.length; t++)
        this.boxes[t].write(e);
}, E.prototype.createFragment = function (e, t, n) {
    var r = this.getTrackById(e), a = this.getSample(r, t);
    if (null == a)
        return a = r.samples[t], this.nextSeekPosition ? this.nextSeekPosition = Math.min(a.offset + a.alreadyRead, this.nextSeekPosition) : this.nextSeekPosition = r.samples[t].offset + a.alreadyRead, null;
    var s = n || new o();
    s.endianness = o.BIG_ENDIAN;
    var l = this.createSingleSampleMoof(a);
    l.write(s), l.trafs[0].truns[0].data_offset = l.size + 8, i.debug('MP4Box', 'Adjusting data_offset with new value ' + l.trafs[0].truns[0].data_offset), s.adjustUint32(l.trafs[0].truns[0].data_offset_position, l.trafs[0].truns[0].data_offset);
    var c = new u.mdatBox();
    return c.data = a.data, c.write(s), s;
}, E.writeInitializationSegment = function (e, t, n, r) {
    i.debug('ISOFile', 'Generating initialization segment');
    var a, s = new o();
    s.endianness = o.BIG_ENDIAN, e.write(s);
    var l = t.add('mvex');
    for (n && l.add('mehd').set('fragment_duration', n), a = 0; a < t.traks.length; a++)
        l.add('trex').set('track_id', t.traks[a].tkhd.track_id).set('default_sample_description_index', 1).set('default_sample_duration', r).set('default_sample_size', 0).set('default_sample_flags', 65536);
    return t.write(s), s.buffer;
}, E.prototype.save = function (e) {
    var t = new o();
    t.endianness = o.BIG_ENDIAN, this.write(t), t.save(e);
}, E.prototype.getBuffer = function () {
    var e = new o();
    return e.endianness = o.BIG_ENDIAN, this.write(e), e.buffer;
}, E.prototype.initializeSegmentation = function () {
    for (null === this.onSegment && i.warn('MP4Box', 'No segmentation callback set!'), !this.isFragmentationInitialized && (this.isFragmentationInitialized = !0, this.nextMoofNumber = 0, this.resetTables()), t = [], e = 0; e < this.fragmentedTracks.length; e++) {
        var e, t, n, r, a = new u.moovBox();
        a.mvhd = this.moov.mvhd, a.boxes.push(a.mvhd), n = this.getTrackById(this.fragmentedTracks[e].id), a.boxes.push(n), a.traks.push(n), (r = {}).id = n.tkhd.track_id, r.user = this.fragmentedTracks[e].user, r.buffer = E.writeInitializationSegment(this.ftyp, a, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[e].samples.length > 0 ? this.moov.traks[e].samples[0].duration : 0), t.push(r);
    }
    return t;
}, u.Box.prototype.printHeader = function (e) {
    this.size += 8, this.size > 4294967296 && (this.size += 8), 'uuid' === this.type && (this.size += 16), e.log(e.indent + 'size:' + this.size), e.log(e.indent + 'type:' + this.type);
}, u.FullBox.prototype.printHeader = function (e) {
    this.size += 4, u.Box.prototype.printHeader.call(this, e), e.log(e.indent + 'version:' + this.version), e.log(e.indent + 'flags:' + this.flags);
}, u.Box.prototype.print = function (e) {
    this.printHeader(e);
}, u.ContainerBox.prototype.print = function (e) {
    this.printHeader(e);
    for (var t = 0; t < this.boxes.length; t++)
        if (this.boxes[t]) {
            var n = e.indent;
            e.indent += ' ', this.boxes[t].print(e), e.indent = n;
        }
}, E.prototype.print = function (e) {
    e.indent = '';
    for (var t = 0; t < this.boxes.length; t++)
        this.boxes[t] && this.boxes[t].print(e);
}, u.mvhdBox.prototype.print = function (e) {
    u.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + 'creation_time: ' + this.creation_time), e.log(e.indent + 'modification_time: ' + this.modification_time), e.log(e.indent + 'timescale: ' + this.timescale), e.log(e.indent + 'duration: ' + this.duration), e.log(e.indent + 'rate: ' + this.rate), e.log(e.indent + 'volume: ' + (this.volume >> 8)), e.log(e.indent + 'matrix: ' + this.matrix.join(', ')), e.log(e.indent + 'next_track_id: ' + this.next_track_id);
}, u.tkhdBox.prototype.print = function (e) {
    u.FullBox.prototype.printHeader.call(this, e), e.log(e.indent + 'creation_time: ' + this.creation_time), e.log(e.indent + 'modification_time: ' + this.modification_time), e.log(e.indent + 'track_id: ' + this.track_id), e.log(e.indent + 'duration: ' + this.duration), e.log(e.indent + 'volume: ' + (this.volume >> 8)), e.log(e.indent + 'matrix: ' + this.matrix.join(', ')), e.log(e.indent + 'layer: ' + this.layer), e.log(e.indent + 'alternate_group: ' + this.alternate_group), e.log(e.indent + 'width: ' + this.width), e.log(e.indent + 'height: ' + this.height);
};
var f = {};
f.createFile = function (e, t) {
    var n = new E(t);
    return n.discardMdatData = !(void 0 === e || e), n;
};
t.createFile = f.createFile;
