var t, i;
(t = globalThis),
    (i = function () {
        return (() => {
            var e,
                t,
                i,
                r,
                o,
                n,
                a,
                s,
                u,
                d = {
                    506: (e) => {
                        (e.exports = function (e) {
                            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e;
                        }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports);
                    },
                    575: (e) => {
                        (e.exports = function (e, t) {
                            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                        }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports);
                    },
                    913: (e) => {
                        function t(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var r = t[i];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        (e.exports = function (e, i, r) {
                            return i && t(e.prototype, i), r && t(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
                        }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports);
                    },
                    525: (e, t, i) => {
                        var r = i(331);
                        function o() {
                            return (
                                'undefined' != typeof Reflect && Reflect.get
                                    ? (e.exports = o = Reflect.get)
                                    : (e.exports = o =
                                          function (e, t, i) {
                                              var o = r(e, t);
                                              if (o) {
                                                  var n = Object.getOwnPropertyDescriptor(o, t);
                                                  return n.get ? n.get.call(arguments.length < 3 ? e : i) : n.value;
                                              }
                                          }),
                                (e.exports.__esModule = !0),
                                (e.exports.default = e.exports),
                                o.apply(this, arguments)
                            );
                        }
                        (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
                    },
                    754: (e) => {
                        function t(i) {
                            return (
                                (e.exports = t =
                                    Object.setPrototypeOf
                                        ? Object.getPrototypeOf
                                        : function (e) {
                                              return e.__proto__ || Object.getPrototypeOf(e);
                                          }),
                                (e.exports.__esModule = !0),
                                (e.exports.default = e.exports),
                                t(i)
                            );
                        }
                        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
                    },
                    205: (e, t, i) => {
                        var r = i(489);
                        (e.exports = function (e, t) {
                            if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
                            (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            })),
                                Object.defineProperty(e, 'prototype', { writable: !1 }),
                                t && r(e, t);
                        }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports);
                    },
                    318: (e) => {
                        (e.exports = function (e) {
                            return e && e.__esModule ? e : { default: e };
                        }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports);
                    },
                    585: (e, t, i) => {
                        var r = i(8).default,
                            o = i(506);
                        (e.exports = function (e, t) {
                            if (t && ('object' === r(t) || 'function' == typeof t)) return t;
                            if (void 0 !== t) throw TypeError('Derived constructors may only return object or undefined');
                            return o(e);
                        }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports);
                    },
                    489: (e) => {
                        function t(i, r) {
                            return (
                                (e.exports = t =
                                    Object.setPrototypeOf ||
                                    function (e, t) {
                                        return (e.__proto__ = t), e;
                                    }),
                                (e.exports.__esModule = !0),
                                (e.exports.default = e.exports),
                                t(i, r)
                            );
                        }
                        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
                    },
                    331: (e, t, i) => {
                        var r = i(754);
                        (e.exports = function (e, t) {
                            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)); );
                            return e;
                        }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports);
                    },
                    8: (e) => {
                        function t(i) {
                            return (
                                (e.exports = t =
                                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                        ? function (e) {
                                              return typeof e;
                                          }
                                        : function (e) {
                                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                                          }),
                                (e.exports.__esModule = !0),
                                (e.exports.default = e.exports),
                                t(i)
                            );
                        }
                        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
                    },
                    848: (e) => {
                        window,
                            (e.exports = (function (e) {
                                var t = {};
                                function i(r) {
                                    if (t[r]) return t[r].exports;
                                    var o = (t[r] = {
                                        i: r,
                                        l: !1,
                                        exports: {}
                                    });
                                    return e[r].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
                                }
                                return (
                                    (i.m = e),
                                    (i.c = t),
                                    (i.d = function (e, t, r) {
                                        i.o(e, t) ||
                                            Object.defineProperty(e, t, {
                                                enumerable: !0,
                                                get: r
                                            });
                                    }),
                                    (i.r = function (e) {
                                        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
                                    }),
                                    (i.t = function (e, t) {
                                        if ((1 & t && (e = i(e)), 8 & t || (4 & t && 'object' == typeof e && e && e.__esModule))) return e;
                                        var r = Object.create(null);
                                        if (
                                            (i.r(r),
                                            Object.defineProperty(r, 'default', {
                                                enumerable: !0,
                                                value: e
                                            }),
                                            2 & t && 'string' != typeof e)
                                        )
                                            for (var o in e)
                                                i.d(
                                                    r,
                                                    o,
                                                    function (t) {
                                                        return e[t];
                                                    }.bind(null, o)
                                                );
                                        return r;
                                    }),
                                    (i.n = function (e) {
                                        var t =
                                            e && e.__esModule
                                                ? function () {
                                                      return e.default;
                                                  }
                                                : function () {
                                                      return e;
                                                  };
                                        return i.d(t, 'a', t), t;
                                    }),
                                    (i.o = function (e, t) {
                                        return Object.prototype.hasOwnProperty.call(e, t);
                                    }),
                                    (i.p = ''),
                                    i((i.s = 1))
                                );
                            })([
                                function (e, t) {
                                    function i(e, t) {
                                        if (e < 1 || e !== Math.round(e)) throw 'Invalid channel count for BufferQueue';
                                        (this.channels = e), (this.bufferSize = t), this.flush();
                                    }
                                    (i.prototype.flush = function () {
                                        (this._buffers = []), (this._pendingBuffer = this.createBuffer(this.bufferSize)), (this._pendingPos = 0);
                                    }),
                                        (i.prototype.sampleCount = function () {
                                            var e = 0;
                                            return (
                                                this._buffers.forEach(function (t) {
                                                    e += t[0].length;
                                                }),
                                                e
                                            );
                                        }),
                                        (i.prototype.createBuffer = function (e) {
                                            for (var t = [], i = 0; i < this.channels; i++) t[i] = new Float32Array(e);
                                            return t;
                                        }),
                                        (i.prototype.validate = function (e) {
                                            if (e.length !== this.channels) return !1;
                                            for (var t, i = 0; i < e.length; i++) {
                                                var r = e[i];
                                                if (!(r instanceof Float32Array)) return !1;
                                                if (0 == i) t = r.length;
                                                else if (r.length !== t) return !1;
                                            }
                                            return !0;
                                        }),
                                        (i.prototype.appendBuffer = function (e) {
                                            if (!this.validate(e)) throw 'Invalid audio buffer passed to BufferQueue.appendBuffer';
                                            for (var t = e[0].length, i = this.channels, r = this._pendingPos, o = this._pendingBuffer, n = this.bufferSize, a = 0; a < t; a++) {
                                                for (var s = 0; s < i; s++) o[s][r] = e[s][a];
                                                ++r == n && (this._buffers.push(o), (r = this._pendingPos = 0), (o = this._pendingBuffer = this.createBuffer(n)));
                                            }
                                            this._pendingPos = r;
                                        }),
                                        (i.prototype.prependBuffer = function (e) {
                                            if (!this.validate(e)) throw 'Invalid audio buffer passed to BufferQueue.prependBuffer';
                                            var t = this._buffers.slice(0);
                                            t.push(this.trimBuffer(this._pendingBuffer, 0, this._pendingPos)), this.flush(), this.appendBuffer(e);
                                            for (var i = 0; i < t.length; i++) this.appendBuffer(t[i]);
                                        }),
                                        (i.prototype.nextBuffer = function () {
                                            if (this._buffers.length) return this._buffers.shift();
                                            var e = this.trimBuffer(this._pendingBuffer, 0, this._pendingPos);
                                            return (this._pendingBuffer = this.createBuffer(this.bufferSize)), (this._pendingPos = 0), e;
                                        }),
                                        (i.prototype.trimBuffer = function (e, t, i) {
                                            var r = e[0].length,
                                                o = t + Math.min(i, r);
                                            if (0 == t && o >= r) return e;
                                            for (var n = [], a = 0; a < this.channels; a++) n[a] = e[a].subarray(t, o);
                                            return n;
                                        }),
                                        (e.exports = i);
                                },
                                function (e, t, i) {
                                    !(function () {
                                        i(0);
                                        var t = i(2),
                                            r = i(4);
                                        function o(e) {
                                            (this._options = e || {}), (this._backend = null), (this._resampleFractional = 0), (this._resampleLastSampleData = void 0), (this._tempoChanger = null);
                                        }
                                        (o.prototype.rate = 0),
                                            (o.prototype.targetRate = 0),
                                            (o.prototype.channels = 0),
                                            (o.prototype.bufferSize = 0),
                                            Object.defineProperty(o.prototype, 'bufferDuration', {
                                                get: function () {
                                                    return this.targetRate ? this.bufferSize / this.targetRate : 0;
                                                }
                                            }),
                                            Object.defineProperty(o.prototype, 'bufferThreshold', {
                                                get: function () {
                                                    return this._backend ? this._backend.bufferThreshold / this.targetRate : 0;
                                                },
                                                set: function (e) {
                                                    if (!this._backend) throw 'Invalid state: AudioFeeder cannot set bufferThreshold before init';
                                                    this._backend.bufferThreshold = Math.round(e * this.targetRate);
                                                }
                                            }),
                                            Object.defineProperty(o.prototype, 'playbackPosition', {
                                                get: function () {
                                                    return this._backend ? this.getPlaybackState().playbackPosition : 0;
                                                }
                                            }),
                                            Object.defineProperty(o.prototype, 'outputPlaybackPosition', {
                                                get: function () {
                                                    return this._backend ? this.getPlaybackState().outputPlaybackPosition : 0;
                                                }
                                            }),
                                            Object.defineProperty(o.prototype, 'durationBuffered', {
                                                get: function () {
                                                    return this._backend ? this.getPlaybackState().samplesQueued / this.targetRate : 0;
                                                }
                                            }),
                                            Object.defineProperty(o.prototype, 'muted', {
                                                get: function () {
                                                    if (this._backend) return this._backend.muted;
                                                    throw 'Invalid state: cannot get mute before init';
                                                },
                                                set: function (e) {
                                                    if (!this._backend) throw 'Invalid state: cannot set mute before init';
                                                    this._backend.muted = e;
                                                }
                                            }),
                                            (o.prototype.mute = function () {
                                                this.muted = !0;
                                            }),
                                            (o.prototype.unmute = function () {
                                                this.muted = !1;
                                            }),
                                            Object.defineProperty(o.prototype, 'volume', {
                                                get: function () {
                                                    if (this._backend) return this._backend.volume;
                                                    throw 'Invalid state: cannot get volume before init';
                                                },
                                                set: function (e) {
                                                    if (!this._backend) throw 'Invalid state: cannot set volume before init';
                                                    this._backend.volume = e;
                                                }
                                            }),
                                            Object.defineProperty(o.prototype, 'tempo', {
                                                get: function () {
                                                    if (this._tempoChanger) return this._tempoChanger.getTempo();
                                                    throw 'Invalid state: cannot get tempo before init';
                                                },
                                                set: function (e) {
                                                    if (!this._tempoChanger) throw 'Invalid state: cannot set tempo before init';
                                                    this._tempoChanger.setTempo(e);
                                                }
                                            }),
                                            (o.prototype.init = function (e, i) {
                                                if (((this.channels = e), (this.rate = i), this._options.backendFactory)) this._backend = this._options.backendFactory(e, i, this._options);
                                                else {
                                                    if (!t.isSupported()) throw 'No supported backend';
                                                    this._backend = new t(e, i, this._options);
                                                }
                                                (this.targetRate = this._backend.rate),
                                                    (this.bufferSize = this._backend.bufferSize),
                                                    (this._tempoChanger = r({
                                                        sampleRate: this.targetRate,
                                                        numChannels: e,
                                                        tempo: 1
                                                    })),
                                                    (this._backend.onstarved = function () {
                                                        this.onstarved && this.onstarved();
                                                    }.bind(this)),
                                                    (this._backend.onbufferlow = function () {
                                                        this.onbufferlow && this.onbufferlow();
                                                    }.bind(this));
                                            }),
                                            (o.prototype._resample = function (e) {
                                                var t = this.rate,
                                                    i = this.channels,
                                                    r = this._backend.rate,
                                                    o = this._backend.channels;
                                                if (t == r && i == o) return e;
                                                var n,
                                                    a = [],
                                                    s = e[0].length,
                                                    u = this._resampleFractional,
                                                    d = (s * r) / t + u,
                                                    c = Math.floor(d),
                                                    h = d - c;
                                                n =
                                                    t < r
                                                        ? function (e, i, o, n) {
                                                              for (
                                                                  var a = function (t) {
                                                                          return t < 0 ? (o && o.length + t > 0 ? o[o.length + t] : e[0]) : e[t];
                                                                      },
                                                                      s = 0;
                                                                  s < i.length;
                                                                  s++
                                                              ) {
                                                                  var d,
                                                                      c = ((s + 1 - u) * t) / r - 1,
                                                                      h = Math.floor(c),
                                                                      f = Math.ceil(c);
                                                                  (d = h == f ? a(h) : a(h) * (f - c) + a(f) * (c - h)), (i[s] = n * d);
                                                              }
                                                          }
                                                        : function (e, t, i, r) {
                                                              for (var o = 0; o < t.length; o++) t[o] = r * e[((o * e.length) / t.length) | 0];
                                                          };
                                                var f = 1;
                                                o > i && (f = Math.SQRT1_2);
                                                for (var l = 0; l < o; l++) {
                                                    var _ = l;
                                                    l >= i && (_ = 0);
                                                    var p = e[_],
                                                        m = new Float32Array(c);
                                                    n(p, m, this._resampleLastSampleData ? this._resampleLastSampleData[_] : void 0, f), a.push(m);
                                                }
                                                return (this._resampleFractional = h), (this._resampleLastSampleData = e), a;
                                            }),
                                            (o.prototype.bufferData = function (e) {
                                                if (!this._backend) throw 'Invalid state: AudioFeeder cannot bufferData before init';
                                                var t = this._resample(e);
                                                (t = this._tempoChanger.process(t)), this._backend.appendBuffer(t);
                                            }),
                                            (o.prototype.getPlaybackState = function () {
                                                if (this._backend) {
                                                    var e = this._backend.getPlaybackState();
                                                    return (e.outputPlaybackPosition = e.playbackPosition), (e.playbackPosition = this._tempoChanger.mapOutputToInputTime(e.outputPlaybackPosition)), e;
                                                }
                                                throw 'Invalid state: AudioFeeder cannot getPlaybackState before init';
                                            }),
                                            (o.prototype.waitUntilReady = function (e) {
                                                if (!this._backend) throw 'Invalid state: AudioFeeder cannot waitUntilReady before init';
                                                this._backend.waitUntilReady(e);
                                            }),
                                            (o.prototype.start = function () {
                                                if (!this._backend) throw 'Invalid state: AudioFeeder cannot start before init';
                                                this._backend.start();
                                            }),
                                            (o.prototype.stop = function () {
                                                if (!this._backend) throw 'Invalid state: AudioFeeder cannot stop before init';
                                                this._backend.stop();
                                            }),
                                            (o.prototype.flush = function () {
                                                if (((this._resampleFractional = 0), (this._resampleLastSampleData = void 0), !this._backend)) throw 'Invalid state: AudioFeeder cannot flush before init';
                                                this._tempoChanger.flush(this.durationBuffered), this._backend.flush();
                                            }),
                                            (o.prototype.close = function () {
                                                this._backend && (this._backend.close(), (this._backend = null));
                                            }),
                                            (o.prototype.onstarved = null),
                                            (o.prototype.onbufferlow = null),
                                            (o.isSupported = function () {
                                                return !!Float32Array && t.isSupported();
                                            }),
                                            (o.initSharedAudioContext = function () {
                                                return t.isSupported() ? t.initSharedAudioContext() : null;
                                            }),
                                            (e.exports = o);
                                    })();
                                },
                                function (e, t, i) {
                                    !(function () {
                                        var t = window.AudioContext || window.webkitAudioContext,
                                            r = i(0),
                                            o = i(3);
                                        function n(e, t, i) {
                                            var o = i.audioContext || n.initSharedAudioContext();
                                            if (((this._context = o), (this.output = i.output || o.destination), (this.rate = o.sampleRate), (this.channels = 2), i.bufferSize && (this.bufferSize = 0 | i.bufferSize), (this.bufferThreshold = 2 * this.bufferSize), (this._bufferQueue = new r(this.channels, this.bufferSize)), (this._playbackTimeAtBufferTail = o.currentTime), (this._queuedTime = 0), (this._delayedTime = 0), (this._dropped = 0), (this._liveBuffer = this._bufferQueue.createBuffer(this.bufferSize)), o.createScriptProcessor)) this._node = o.createScriptProcessor(this.bufferSize, 0, this.channels);
                                            else {
                                                if (!o.createJavaScriptNode) throw Error('Bad version of web audio API?');
                                                this._node = o.createJavaScriptNode(this.bufferSize, 0, this.channels);
                                            }
                                        }
                                        (n.prototype.bufferSize = 4096),
                                            (n.prototype.bufferThreshold = 8192),
                                            (n.prototype._volume = 1),
                                            Object.defineProperty(n.prototype, 'volume', {
                                                get: function () {
                                                    return this._volume;
                                                },
                                                set: function (e) {
                                                    this._volume = +e;
                                                }
                                            }),
                                            (n.prototype._muted = !1),
                                            Object.defineProperty(n.prototype, 'muted', {
                                                get: function () {
                                                    return this._muted;
                                                },
                                                set: function (e) {
                                                    this._muted = !!e;
                                                }
                                            }),
                                            (n.prototype._audioProcess = function (e) {
                                                a = 'number' == typeof e.playbackTime ? e.playbackTime : this._context.currentTime + this.bufferSize / this.rate;
                                                var t,
                                                    i,
                                                    r,
                                                    n,
                                                    a,
                                                    s = this._playbackTimeAtBufferTail;
                                                if ((s < a && (this._delayedTime += a - s), this._bufferQueue.sampleCount() < this.bufferSize && this.onstarved && this.onstarved(), this._bufferQueue.sampleCount() < this.bufferSize)) {
                                                    for (t = 0; t < this.channels; t++) for (r = e.outputBuffer.getChannelData(t), n = 0; n < this.bufferSize; n++) r[n] = 0;
                                                    this._dropped++;
                                                } else {
                                                    var u = this.muted ? 0 : this.volume,
                                                        d = this._bufferQueue.nextBuffer();
                                                    if (d[0].length < this.bufferSize) throw 'Audio buffer not expected length.';
                                                    for (t = 0; t < this.channels; t++) for (i = d[t], this._liveBuffer[t].set(d[t]), r = e.outputBuffer.getChannelData(t), n = 0; n < i.length; n++) r[n] = i[n] * u;
                                                    (this._queuedTime += this.bufferSize / this.rate), (this._playbackTimeAtBufferTail = a + this.bufferSize / this.rate), this._bufferQueue.sampleCount() < Math.max(this.bufferSize, this.bufferThreshold) && this.onbufferlow && o(this.onbufferlow.bind(this));
                                                }
                                            }),
                                            (n.prototype._samplesQueued = function () {
                                                return this._bufferQueue.sampleCount() + Math.floor(this._timeAwaitingPlayback() * this.rate);
                                            }),
                                            (n.prototype._timeAwaitingPlayback = function () {
                                                return Math.max(0, this._playbackTimeAtBufferTail - this._context.currentTime);
                                            }),
                                            (n.prototype.getPlaybackState = function () {
                                                return {
                                                    playbackPosition: this._queuedTime - this._timeAwaitingPlayback(),
                                                    samplesQueued: this._samplesQueued(),
                                                    dropped: this._dropped,
                                                    delayed: this._delayedTime
                                                };
                                            }),
                                            (n.prototype.waitUntilReady = function (e) {
                                                e();
                                            }),
                                            (n.prototype.appendBuffer = function (e) {
                                                this._bufferQueue.appendBuffer(e);
                                            }),
                                            (n.prototype.start = function () {
                                                (this._node.onaudioprocess = this._audioProcess.bind(this)), this._node.connect(this.output), (this._playbackTimeAtBufferTail = this._context.currentTime);
                                            }),
                                            (n.prototype.stop = function () {
                                                if (this._node) {
                                                    var e = this._timeAwaitingPlayback();
                                                    if (e > 0) {
                                                        var t = Math.round(e * this.rate),
                                                            i = this._liveBuffer ? this._liveBuffer[0].length : 0;
                                                        t > i ? (this._bufferQueue.prependBuffer(this._liveBuffer), this._bufferQueue.prependBuffer(this._bufferQueue.createBuffer(t - i))) : this._bufferQueue.prependBuffer(this._bufferQueue.trimBuffer(this._liveBuffer, i - t, t)), (this._playbackTimeAtBufferTail -= e);
                                                    }
                                                    (this._node.onaudioprocess = null), this._node.disconnect();
                                                }
                                            }),
                                            (n.prototype.flush = function () {
                                                this._bufferQueue.flush();
                                            }),
                                            (n.prototype.close = function () {
                                                this.stop(), (this._context = null);
                                            }),
                                            (n.prototype.onstarved = null),
                                            (n.prototype.onbufferlow = null),
                                            (n.isSupported = function () {
                                                return !!t;
                                            }),
                                            (n.sharedAudioContext = null),
                                            (n.initSharedAudioContext = function () {
                                                if (!n.sharedAudioContext && n.isSupported()) {
                                                    var e,
                                                        i = new t();
                                                    if (i.createScriptProcessor) e = i.createScriptProcessor(1024, 0, 2);
                                                    else {
                                                        if (!i.createJavaScriptNode) throw Error('Bad version of web audio API?');
                                                        e = i.createJavaScriptNode(1024, 0, 2);
                                                    }
                                                    e.connect(i.destination), e.disconnect(), (n.sharedAudioContext = i);
                                                }
                                                return n.sharedAudioContext;
                                            }),
                                            (e.exports = n);
                                    })();
                                },
                                function (e, t) {
                                    e.exports = (function () {
                                        if (void 0 !== window.setImmediate) return window.setImmediate;
                                        if (window && window.postMessage) {
                                            var e = [];
                                            return (
                                                window.addEventListener('message', function (t) {
                                                    if (t.source === window) {
                                                        var i = t.data;
                                                        if ('object' == typeof i && i.nextTickBrowserPingMessage) {
                                                            var r = e.pop();
                                                            r && r();
                                                        }
                                                    }
                                                }),
                                                function (t) {
                                                    e.push(t), window.postMessage({ nextTickBrowserPingMessage: !0 }, document.location.toString());
                                                }
                                            );
                                        }
                                        return function (e) {
                                            setTimeout(e, 0);
                                        };
                                    })();
                                },
                                function (e, t, i) {
                                    var r;
                                    window,
                                        (r = function () {
                                            return (function (e) {
                                                var t = {};
                                                function i(r) {
                                                    if (t[r]) return t[r].exports;
                                                    var o = (t[r] = {
                                                        i: r,
                                                        l: !1,
                                                        exports: {}
                                                    });
                                                    return e[r].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
                                                }
                                                return (
                                                    (i.m = e),
                                                    (i.c = t),
                                                    (i.d = function (e, t, r) {
                                                        i.o(e, t) ||
                                                            Object.defineProperty(e, t, {
                                                                enumerable: !0,
                                                                get: r
                                                            });
                                                    }),
                                                    (i.r = function (e) {
                                                        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
                                                    }),
                                                    (i.t = function (e, t) {
                                                        if ((1 & t && (e = i(e)), 8 & t || (4 & t && 'object' == typeof e && e && e.__esModule))) return e;
                                                        var r = Object.create(null);
                                                        if (
                                                            (i.r(r),
                                                            Object.defineProperty(r, 'default', {
                                                                enumerable: !0,
                                                                value: e
                                                            }),
                                                            2 & t && 'string' != typeof e)
                                                        )
                                                            for (var o in e)
                                                                i.d(
                                                                    r,
                                                                    o,
                                                                    function (t) {
                                                                        return e[t];
                                                                    }.bind(null, o)
                                                                );
                                                        return r;
                                                    }),
                                                    (i.n = function (e) {
                                                        var t =
                                                            e && e.__esModule
                                                                ? function () {
                                                                      return e.default;
                                                                  }
                                                                : function () {
                                                                      return e;
                                                                  };
                                                        return i.d(t, 'a', t), t;
                                                    }),
                                                    (i.o = function (e, t) {
                                                        return Object.prototype.hasOwnProperty.call(e, t);
                                                    }),
                                                    (i.p = ''),
                                                    i((i.s = 1))
                                                );
                                            })([
                                                function (e, t) {
                                                    e.exports = {
                                                        float_array: function (e) {
                                                            return new Float32Array(e);
                                                        },
                                                        blit: function (e, t, i, r, o) {
                                                            i.set(e.subarray(t, t + o), r);
                                                        }
                                                    };
                                                },
                                                function (e, t, i) {
                                                    var r, o;
                                                    (r = i(0)),
                                                        (o = i(2)),
                                                        (e.exports = function (e) {
                                                            var t = (e = e || {}).sampleRate || 44100,
                                                                i = e.wsizeLog || 11,
                                                                n = e.tempo || 1,
                                                                a = (e.numChannels, Math.pow(2, 50 / 1200) - 1),
                                                                s = 1 << i,
                                                                u = o(i),
                                                                d = 1 << (i - 2);
                                                            d -= d % 100;
                                                            for (var c = r.float_array(s + d + 5), h = r.float_array(s + d + 5), f = d, l = d, _ = r.float_array(s), p = 0; p < s; p++) _[p] = 0.5 * (1 - Math.cos((2 * Math.PI * p) / s));
                                                            var m = 1 + (s >> 1),
                                                                V = r.float_array(m),
                                                                v = r.float_array(m),
                                                                g = r.float_array(m),
                                                                y = r.float_array(m),
                                                                b = r.float_array(m),
                                                                T = r.float_array(m),
                                                                A = 1 + (m >> 1),
                                                                k = [0, 0],
                                                                E = [],
                                                                P = [],
                                                                w = [],
                                                                x = [];
                                                            for (p = 0; p < 2; p++) E.push(r.float_array(A)), P.push(r.float_array(A)), w.push(r.float_array(A)), x.push(r.float_array(m));
                                                            var R = r.float_array(A),
                                                                F = r.float_array(A),
                                                                O = 0,
                                                                S = 0,
                                                                C = [
                                                                    {
                                                                        in_time: 0,
                                                                        out_time: 0,
                                                                        tempo: n
                                                                    }
                                                                ],
                                                                D = 0,
                                                                M = 0,
                                                                B = 1,
                                                                I = 0,
                                                                j = 0,
                                                                L = 0,
                                                                U = 0,
                                                                G = {
                                                                    mapOutputToInputTime: function (e) {
                                                                        for (var t = C.length - 1; e < C[t].out_time && t > 0; ) t--;
                                                                        var i = C[t];
                                                                        return i.in_time + i.tempo * (e - i.out_time);
                                                                    },
                                                                    flush: function (e) {
                                                                        (I = 0), (k = [0, 0]), (M = 0), (U = 0), (L = 0);
                                                                        for (var t = 0; t < 2; t++) for (var i = 0; i < m; i++) x[t][i] = 0;
                                                                        for (t = 0; t < c.length; t++) c[t] = 0;
                                                                        for (t = 0; t < h.length; t++) h[t] = 0;
                                                                        if (e) {
                                                                            (S = Math.max(0, S - e)), (O = G.mapOutputToInputTime(S));
                                                                            for (var r = C.length - 1; S <= C[r].out_time && r >= 0; ) C.pop(), r--;
                                                                            C.push({
                                                                                in_time: O,
                                                                                out_time: S,
                                                                                tempo: n
                                                                            });
                                                                        }
                                                                    },
                                                                    getTempo: function () {
                                                                        return n;
                                                                    },
                                                                    setTempo: function (e) {
                                                                        (f = l = d),
                                                                            e >= 1 ? (l = Math.round(f / e)) : (f = Math.round(l * e)),
                                                                            (j = (1 / e - (1 * l) / f) * f),
                                                                            (B = (function (e, t) {
                                                                                for (var i = (e.length / t) | 0, r = 0, o = 0; o < i; o++) r += e[o * t];
                                                                                return 0.9 / r;
                                                                            })(_, l)),
                                                                            (n = e);
                                                                        var t = C[C.length - 1];
                                                                        t.out_time == S
                                                                            ? (t.tempo = e)
                                                                            : C.push({
                                                                                  in_time: O,
                                                                                  out_time: S,
                                                                                  tempo: e
                                                                              });
                                                                    }
                                                                };
                                                            G.flush(0), G.setTempo(n);
                                                            var W = function (e, t, i) {
                                                                    var r = Math.floor(i),
                                                                        o = r % 2 == 1 ? -1 : 1;
                                                                    return Math.atan2(o * (t[r] - t[r + 1]), o * (e[r] - e[r + 1]));
                                                                },
                                                                N = function (e, t, i, r, o) {
                                                                    var n,
                                                                        a = ((2 * Math.PI) / s) * 0.5 * (r + t) * f;
                                                                    return ((n = e - i - a) - 2 * Math.PI * Math.round(n / (2 * Math.PI)) + a) * o;
                                                                },
                                                                X = function (e, t, i, r, o, n) {
                                                                    for (var u = e % 2, d = 1 - u, c = x[d], h = k[d], f = E[d], l = P[d], _ = w[d], p = x[u], m = 1; m < p.length; m++) p[m] = t[m] * t[m] + i[m] * i[m];
                                                                    var V = E[u],
                                                                        v = (k[u] = (function (e, t) {
                                                                            for (var i = 0, r = 0; r < e.length; r++) e[r] > i && (i = e[r]);
                                                                            var o = 1e-8 * i,
                                                                                n = 1,
                                                                                s = 1;
                                                                            for (t[0] = 1, r = 2; r < e.length; r++) {
                                                                                var u = r * a;
                                                                                if (e[r] > o && e[r] > e[r - 1] && e[r] >= e[r + 1]) {
                                                                                    var d = r + (e[r - 1] - e[r + 1]) / (2 * (e[r - 1] - 2 * e[r] + e[r + 1]));
                                                                                    d - t[n - 1] > u ? ((t[n++] = d), (s = r)) : e[r] > e[s] && ((t[n - 1] = d), (s = r));
                                                                                }
                                                                            }
                                                                            return n;
                                                                        })(p, V)),
                                                                        g = P[u],
                                                                        y = w[u];
                                                                    if (0 != e && 0 != v) {
                                                                        var b = 0;
                                                                        for (L = 0; L < v; L++) {
                                                                            for (U = V[L]; V[L] > f[b] && b != h; ) ++b;
                                                                            var T = b;
                                                                            b > 0 && U - f[b - 1] < f[b] - U && (T = b - 1);
                                                                            var A = U * a;
                                                                            if (Math.abs(f[T] - U) < A && c[Math.round(f[T])] > 0.1 * p[Math.round(U)]) {
                                                                                var O = W(t, i, U),
                                                                                    S = l[T] + _[T] + N(O, U, l[T], f[T], n) - O;
                                                                                (g[L] = O), (y[L] = S), (R[L] = Math.cos(S)), (F[L] = Math.sin(S));
                                                                            } else (g[L] = W(t, i, U)), (y[L] = 0), (R[L] = 1), (F[L] = 0);
                                                                        }
                                                                        V[v] = 2 * s;
                                                                        var C = V[(T = 0)],
                                                                            D = V[T + 1],
                                                                            M = R[T],
                                                                            B = F[T];
                                                                        for (m = 1; m < t.length - 1; m++) {
                                                                            m >= C && m - C > D - m && ((C = V[++T]), (D = V[T + 1]), (M = R[T]), (B = F[T]));
                                                                            var I = t[m] * M - i[m] * B,
                                                                                j = t[m] * B + i[m] * M;
                                                                            (t[m] = I), (i[m] = j);
                                                                        }
                                                                    } else
                                                                        for (var L = 0; L < v; L++) {
                                                                            var U = V[L];
                                                                            l[L] = _[L] = W(t, i, U);
                                                                        }
                                                                },
                                                                H = function () {
                                                                    var e = 0 | (I += 2 * j);
                                                                    I -= e;
                                                                    for (var t = 0; t < s; t++) (u.m_re[t] = _[t] * c[t]), (u.m_im[t] = _[t] * c[f + t]);
                                                                    r.blit(c, 2 * f, c, 0, s - f), u.inplace(!1), u.unpack(V, v, g, y), X(D, V, v, 0, 0, (1 * l) / f), X(D + 1, g, y, 0, 0, (1 * (l + e)) / f), r.blit(g, 0, b, 0, m), r.blit(y, 0, T, 0, m), u.repack(V, v, g, y), u.inplace(!0);
                                                                    var i = h.length;
                                                                    for (r.blit(h, M, h, 0, i - M), t = i - M; t < i; t++) h[t] = 0;
                                                                    var o = 0,
                                                                        n = B;
                                                                    for (t = 0; t < l; t++) Math.abs(2 * u.m_re[t]) > o && (o = Math.abs(2 * u.m_re[t]));
                                                                    for (t = 0; t < s - l; t++) Math.abs(u.m_re[t + l + e] + u.m_im[t]) > o && (o = Math.abs(u.m_re[t + l + e] + u.m_im[t]));
                                                                    for (t = s - l; t < s; t++) Math.abs(2 * u.m_im[t]) > o && (o = Math.abs(2 * u.m_im[t]));
                                                                    var a = 1 / Math.floor((1 * s) / (2 * l));
                                                                    for (n * o > a && (n = a / o), t = 0; t < s; t++) (h[t] += n * u.m_re[t]), (h[t + l + e] += n * u.m_im[t]);
                                                                    return (D += 2), (M = 2 * l + e);
                                                                };
                                                            return (
                                                                (G.process = function (e) {
                                                                    var i = e[0].length,
                                                                        o = e[0];
                                                                    if (e.length > 1) {
                                                                        o = r.float_array(e[0].length);
                                                                        for (var a = 1 / e.length, u = 0; u < e.length; u++) for (var d = 0; d < i; d++) o[d] += a * e[u][d];
                                                                    }
                                                                    if (1 == n) {
                                                                        if (U + L > 0) {
                                                                            var _ = U + L + i,
                                                                                p = [];
                                                                            for (u = 0; u < e.length; u++) {
                                                                                var m = r.float_array(_);
                                                                                r.blit(h, 0, m, 0, U), r.blit(c, 0, m, U, L), r.blit(e[u], 0, m, U + L, i), p.push(m);
                                                                            }
                                                                            G.flush(0), (i = _), (e = p);
                                                                        }
                                                                        return (O += i / t), (S += i / t), e;
                                                                    }
                                                                    var V = 2 * Math.floor(Math.max(0, L + i - (s - f)) / (2 * f)),
                                                                        v = U + l * V + Math.floor(I + j * V);
                                                                    U > v && (v = U);
                                                                    var g = r.float_array(v);
                                                                    r.blit(h, 0, g, 0, U);
                                                                    for (var y = 0, b = U, T = 0, A = 0; ; ) {
                                                                        var k = s + f - L;
                                                                        if (y + k > i) {
                                                                            r.blit(o, y, c, L, i - y), (L += i - y), (y = i);
                                                                            break;
                                                                        }
                                                                        k <= 0 ? (L -= 2 * f) : (r.blit(o, y, c, L, k), (y += k), (L = s - f)), (A = H()), (O += (2 * f) / t), (S += A / t), (T = b + A - v) < 0 && (T = 0), r.blit(h, 0, g, b, A - T), (b += A);
                                                                    }
                                                                    r.blit(h, A - T, h, 0, T), (U = T);
                                                                    var E = [];
                                                                    for (u = 0; u < e.length; u++) E.push(g);
                                                                    return E;
                                                                }),
                                                                G
                                                            );
                                                        });
                                                },
                                                function (e, t, i) {
                                                    var r = i(0);
                                                    e.exports = function (e) {
                                                        for (
                                                            var t = 1 << e,
                                                                i = {
                                                                    m_logN: e,
                                                                    m_N: t,
                                                                    m_invN: 1 / t,
                                                                    m_re: r.float_array(t),
                                                                    m_im: r.float_array(t),
                                                                    m_revTgt: Array(t)
                                                                },
                                                                o = 0;
                                                            o < t;
                                                            o++
                                                        ) {
                                                            for (var n = o, a = 0, s = 0; s < e; s++) (a <<= 1), (a |= 1 & n), (n >>= 1);
                                                            i.m_revTgt[o] = a;
                                                        }
                                                        (i.twiddleRe = r.float_array(i.m_logN)), (i.twiddleIm = r.float_array(i.m_logN));
                                                        for (var u = 1, d = 0; d < i.m_logN; d++) {
                                                            var c = 2 * u * Math.PI * i.m_invN;
                                                            (i.twiddleRe[d] = Math.cos(c)), (i.twiddleIm[d] = Math.sin(c)), (u <<= 1);
                                                        }
                                                        i.inplace = function (e) {
                                                            var t = i.m_re,
                                                                r = i.m_im,
                                                                o = i.m_N,
                                                                n = i.m_logN,
                                                                a = o >> 1,
                                                                s = o >> 1,
                                                                u = o;
                                                            if (e) for (var d = 1 / o, c = 0; c < o; c++) (t[c] *= d), (r[c] *= d);
                                                            for (var h = 0; h < n; h++) {
                                                                var f = i.twiddleRe[h],
                                                                    l = i.twiddleIm[h];
                                                                e || (l *= -1);
                                                                for (var _ = 0; _ < o; ) {
                                                                    for (var p = _, m = _ + s, V = 1, v = 0, g = 0; g < a; g++) {
                                                                        var y = t[p],
                                                                            b = r[p],
                                                                            T = t[m],
                                                                            A = r[m];
                                                                        (t[p] = y + T), (r[p] = b + A), (T = y - T), (A = b - A), (t[m] = T * V - A * v), (r[m] = T * v + A * V), p++, m++;
                                                                        var k = V;
                                                                        (V = V * f - v * l), (v = k * l + v * f);
                                                                    }
                                                                    _ += u;
                                                                }
                                                                (a >>= 1), (s >>= 1), (u >>= 1);
                                                            }
                                                            for (var E, P, w = i.m_revTgt, x = 0; x < o; x++) w[x] > x && ((P = t[(E = w[x])]), (t[E] = t[x]), (t[x] = P), (P = r[E]), (r[E] = r[x]), (r[x] = P));
                                                        };
                                                        var h = t >> 1;
                                                        return (
                                                            (i.unpack = function (e, r, o, n) {
                                                                (e[0] = i.m_re[0]), (o[0] = i.m_im[0]), (r[0] = n[0] = 0), (e[h] = i.m_re[h]), (o[h] = i.m_im[h]), (r[h] = n[h] = 0);
                                                                for (var a = 1; a < h; a++) (e[a] = (i.m_re[a] + i.m_re[t - a]) / 2), (r[a] = (i.m_im[a] - i.m_im[t - a]) / 2), (o[a] = (i.m_im[a] + i.m_im[t - a]) / 2), (n[a] = (-i.m_re[a] + i.m_re[t - a]) / 2);
                                                            }),
                                                            (i.repack = function (e, r, o, n) {
                                                                (i.m_re[0] = e[0]), (i.m_im[0] = o[0]), (i.m_re[h] = e[h]), (i.m_im[h] = o[h]);
                                                                for (var a = 1; a < h; a++) (i.m_re[a] = e[a] - n[a]), (i.m_im[a] = r[a] + o[a]), (i.m_re[t - a] = e[a] + n[a]), (i.m_im[t - a] = -r[a] + o[a]);
                                                            }),
                                                            i
                                                        );
                                                    };
                                                }
                                            ]);
                                        }),
                                        (e.exports = r());
                                }
                            ]));
                    },
                    893: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = (function () {
                                function e(t) {
                                    (0, o.default)(this, e), (this.lower = t.start), (this.upper = t.end), (this.onprocess = t.process), (this.position = 0), (this.n = 0);
                                }
                                return (
                                    (0, n.default)(e, [
                                        {
                                            key: 'iterate',
                                            value: function () {
                                                return this.n++, (this.position = Math.floor((this.lower + this.upper) / 2)), this.onprocess(this.lower, this.upper, this.position);
                                            }
                                        },
                                        {
                                            key: 'start',
                                            value: function () {
                                                return this.iterate(), this;
                                            }
                                        },
                                        {
                                            key: 'left',
                                            value: function () {
                                                return (this.upper = this.position), this.iterate();
                                            }
                                        },
                                        {
                                            key: 'right',
                                            value: function () {
                                                return (this.lower = this.position), this.iterate();
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();
                        t.default = a;
                    },
                    523: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = new ((function () {
                                function e() {
                                    (0, o.default)(this, e);
                                }
                                return (
                                    (0, n.default)(e, [
                                        {
                                            key: 'hasTypedArrays',
                                            value: function () {
                                                return !!window.Uint32Array;
                                            }
                                        },
                                        {
                                            key: 'hasWebAssembly',
                                            value: function () {
                                                return !!window.WebAssembly;
                                            }
                                        },
                                        {
                                            key: 'hasWebAudio',
                                            value: function () {
                                                return !(!window.AudioContext && !window.webkitAudioContext);
                                            }
                                        },
                                        {
                                            key: 'hasFlash',
                                            value: function () {
                                                return !1;
                                            }
                                        },
                                        {
                                            key: 'hasAudio',
                                            value: function () {
                                                return this.hasWebAudio();
                                            }
                                        },
                                        {
                                            key: 'isBlacklisted',
                                            value: function (e) {
                                                return !1;
                                            }
                                        },
                                        {
                                            key: 'isSlow',
                                            value: function () {
                                                return !1;
                                            }
                                        },
                                        {
                                            key: 'isTooSlow',
                                            value: function () {
                                                return !1;
                                            }
                                        },
                                        {
                                            key: 'supported',
                                            value: function (e) {
                                                return 'OGVDecoder' === e ? this.hasWebAssembly() : 'OGVPlayer' === e && this.supported('OGVDecoder') && this.hasAudio();
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })())();
                        t.default = a;
                    },
                    408: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = r(i(205)),
                            s = r(i(585)),
                            u = r(i(754)),
                            d = (function (e) {
                                (0, a.default)(d, e);
                                var t,
                                    i,
                                    r =
                                        ((t = d),
                                        (i = (function () {
                                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                            if ('function' == typeof Proxy) return !0;
                                            try {
                                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                            } catch (e) {
                                                return !1;
                                            }
                                        })()),
                                        function () {
                                            var e,
                                                r = (0, u.default)(t);
                                            return (e = i ? Reflect.construct(r, arguments, (0, u.default)(this).constructor) : r.apply(this, arguments)), (0, s.default)(this, e);
                                        });
                                function d() {
                                    return (0, o.default)(this, d), r.apply(this, arguments);
                                }
                                return (
                                    (0, n.default)(d, [
                                        {
                                            key: 'init',
                                            value: function (e) {
                                                this.proxy('init', [], e);
                                            }
                                        },
                                        {
                                            key: 'processHeader',
                                            value: function (e, t) {
                                                this.proxy('processHeader', [e], t, [e]);
                                            }
                                        },
                                        {
                                            key: 'processAudio',
                                            value: function (e, t) {
                                                this.proxy('processAudio', [e], t, [e]);
                                            }
                                        },
                                        {
                                            key: 'close',
                                            value: function () {
                                                this.terminate();
                                            }
                                        }
                                    ]),
                                    d
                                );
                            })(
                                (0, r(i(580)).default)({
                                    loadedMetadata: !1,
                                    audioFormat: null,
                                    audioBuffer: null,
                                    cpuTime: 0
                                })
                            );
                        t.default = d;
                    },
                    319: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = r(i(205)),
                            s = r(i(585)),
                            u = r(i(754)),
                            d = (function (e) {
                                (0, a.default)(d, e);
                                var t,
                                    i,
                                    r =
                                        ((t = d),
                                        (i = (function () {
                                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                            if ('function' == typeof Proxy) return !0;
                                            try {
                                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                            } catch (e) {
                                                return !1;
                                            }
                                        })()),
                                        function () {
                                            var e,
                                                r = (0, u.default)(t);
                                            return (e = i ? Reflect.construct(r, arguments, (0, u.default)(this).constructor) : r.apply(this, arguments)), (0, s.default)(this, e);
                                        });
                                function d() {
                                    return (0, o.default)(this, d), r.apply(this, arguments);
                                }
                                return (
                                    (0, n.default)(d, [
                                        {
                                            key: 'init',
                                            value: function (e) {
                                                this.proxy('init', [], e);
                                            }
                                        },
                                        {
                                            key: 'processHeader',
                                            value: function (e, t) {
                                                this.proxy('processHeader', [e], t, [e]);
                                            }
                                        },
                                        {
                                            key: 'processFrame',
                                            value: function (e, t) {
                                                this.proxy('processFrame', [e], t, [e]);
                                            }
                                        },
                                        {
                                            key: 'close',
                                            value: function () {
                                                this.terminate();
                                            }
                                        },
                                        {
                                            key: 'sync',
                                            value: function () {
                                                this.proxy('sync', [], function () {});
                                            }
                                        },
                                        {
                                            key: 'recycleFrame',
                                            value: function (e) {
                                                this.proxy('recycleFrame', [e], function () {}, [e.y.bytes.buffer, e.u.bytes.buffer, e.v.bytes.buffer]);
                                            }
                                        }
                                    ]),
                                    d
                                );
                            })(
                                (0, r(i(580)).default)({
                                    loadedMetadata: !1,
                                    videoFormat: null,
                                    frameBuffer: null,
                                    cpuTime: 0
                                })
                            );
                        t.default = d;
                    },
                    445: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = r(i(539)),
                            s = '1.8.9-20220406232920-cb5f7ff',
                            u = {
                                OGVDemuxerOggW: 'ogv-demuxer-ogg-wasm.js',
                                OGVDemuxerWebMW: 'ogv-demuxer-webm-wasm.js',
                                OGVDecoderAudioOpusW: 'ogv-decoder-audio-opus-wasm.js',
                                OGVDecoderAudioVorbisW: 'ogv-decoder-audio-vorbis-wasm.js',
                                OGVDecoderVideoTheoraW: 'ogv-decoder-video-theora-wasm.js',
                                OGVDecoderVideoVP8W: 'ogv-decoder-video-vp8-wasm.js',
                                OGVDecoderVideoVP8MTW: 'ogv-decoder-video-vp8-mt-wasm.js',
                                OGVDecoderVideoVP9W: 'ogv-decoder-video-vp9-wasm.js',
                                OGVDecoderVideoVP9SIMDW: 'ogv-decoder-video-vp9-simd-wasm.js',
                                OGVDecoderVideoVP9MTW: 'ogv-decoder-video-vp9-mt-wasm.js',
                                OGVDecoderVideoVP9SIMDMTW: 'ogv-decoder-video-vp9-simd-mt-wasm.js',
                                OGVDecoderVideoAV1W: 'ogv-decoder-video-av1-wasm.js',
                                OGVDecoderVideoAV1SIMDW: 'ogv-decoder-video-av1-simd-wasm.js',
                                OGVDecoderVideoAV1MTW: 'ogv-decoder-video-av1-mt-wasm.js',
                                OGVDecoderVideoAV1SIMDMTW: 'ogv-decoder-video-av1-simd-mt-wasm.js'
                            },
                            d = (function () {
                                function e() {
                                    (0, o.default)(this, e), (this.base = this.defaultBase());
                                }
                                return (
                                    (0, n.default)(e, [
                                        {
                                            key: 'defaultBase',
                                            value: function () {}
                                        },
                                        {
                                            key: 'wasmSupported',
                                            value: function () {
                                                return a.default.wasmSupported();
                                            }
                                        },
                                        {
                                            key: 'scriptForClass',
                                            value: function (e) {
                                                return u[e];
                                            }
                                        },
                                        {
                                            key: 'urlForClass',
                                            value: function (e) {
                                                var t = this.scriptForClass(e);
                                                if (t) return this.urlForScript(t);
                                                throw Error('asked for URL for unknown class ' + e);
                                            }
                                        },
                                        {
                                            key: 'urlForScript',
                                            value: function (e) {
                                                if (e) {
                                                    var t = this.base;
                                                    return void 0 === t ? (t = '') : (t += '/'), t + e + '?version=' + encodeURIComponent(s);
                                                }
                                                throw Error('asked for URL for unknown script ' + e);
                                            }
                                        },
                                        {
                                            key: 'loadClass',
                                            value: function (e, t, i) {
                                                var r = this;
                                                i = i || {};
                                                var o = this.getGlobal(),
                                                    n = this.urlForClass(e),
                                                    a = function (t) {
                                                        return (
                                                            ((t = t || {}).locateFile = function (e) {
                                                                return 'data:' === e.slice(0, 5) ? e : r.urlForScript(e);
                                                            }),
                                                            (t.mainScriptUrlOrBlob = r.scriptForClass(e) + '?version=' + encodeURIComponent(s)),
                                                            o[e](t)
                                                        );
                                                    };
                                                'function' == typeof o[e]
                                                    ? t(a)
                                                    : this.loadScript(n, function () {
                                                          t(a);
                                                      });
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();
                        t.default = d;
                    },
                    964: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = r(i(525)),
                            s = r(i(205)),
                            u = r(i(585)),
                            d = r(i(754)),
                            c = r(i(408)),
                            h = r(i(319)),
                            f = r(i(445)),
                            l = {
                                audio: {
                                    proxy: c.default,
                                    worker: 'ogv-worker-audio.js'
                                },
                                video: {
                                    proxy: h.default,
                                    worker: 'ogv-worker-video.js'
                                }
                            },
                            _ = {
                                OGVDecoderAudioOpusW: 'audio',
                                OGVDecoderAudioVorbisW: 'audio',
                                OGVDecoderVideoTheoraW: 'video',
                                OGVDecoderVideoVP8W: 'video',
                                OGVDecoderVideoVP9W: 'video',
                                OGVDecoderVideoVP9SIMDW: 'video',
                                OGVDecoderVideoAV1W: 'video',
                                OGVDecoderVideoAV1SIMDW: 'video'
                            },
                            p = new ((function (e) {
                                (0, s.default)(c, e);
                                var t,
                                    i,
                                    r =
                                        ((t = c),
                                        (i = (function () {
                                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                            if ('function' == typeof Proxy) return !0;
                                            try {
                                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                            } catch (e) {
                                                return !1;
                                            }
                                        })()),
                                        function () {
                                            var e,
                                                r = (0, d.default)(t);
                                            return (e = i ? Reflect.construct(r, arguments, (0, d.default)(this).constructor) : r.apply(this, arguments)), (0, u.default)(this, e);
                                        });
                                function c() {
                                    var e;
                                    return (0, o.default)(this, c), ((e = r.call(this)).scriptStatus = {}), (e.scriptCallbacks = {}), e;
                                }
                                return (
                                    (0, n.default)(c, [
                                        {
                                            key: 'getGlobal',
                                            value: function () {
                                                return window;
                                            }
                                        },
                                        {
                                            key: 'defaultBase',
                                            value: function () {
                                                for (var e, t, i = document.querySelectorAll('script'), r = /^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/, o = 0; o < i.length; o++) if ((e = i[o].getAttribute('src')) && (t = e.match(r))) return t[1];
                                            }
                                        },
                                        {
                                            key: 'loadClass',
                                            value: function (e, t, i) {
                                                (i = i || {}).worker ? this.workerProxy(e, t) : (0, a.default)((0, d.default)(c.prototype), 'loadClass', this).call(this, e, t, i);
                                            }
                                        },
                                        {
                                            key: 'loadScript',
                                            value: function (e, t) {
                                                var i = this;
                                                if ('done' == this.scriptStatus[e]) t();
                                                else if ('loading' == this.scriptStatus[e]) this.scriptCallbacks[e].push(t);
                                                else {
                                                    (this.scriptStatus[e] = 'loading'), (this.scriptCallbacks[e] = [t]);
                                                    var r = document.createElement('script'),
                                                        o = function (t) {
                                                            var r = i.scriptCallbacks[e];
                                                            delete i.scriptCallbacks[e],
                                                                (i.scriptStatus[e] = 'done'),
                                                                r.forEach(function (e) {
                                                                    e();
                                                                });
                                                        };
                                                    r.addEventListener('load', o), r.addEventListener('error', o), (r.src = e), document.querySelector('head').appendChild(r);
                                                }
                                            }
                                        },
                                        {
                                            key: 'workerProxy',
                                            value: function (e, t) {
                                                var i = l[_[e]];
                                                if (!i) throw Error('Requested worker for class with no proxy: ' + e);
                                                var r,
                                                    o = i.proxy,
                                                    n = i.worker,
                                                    a = this.urlForScript(this.scriptForClass(e)),
                                                    s = this.urlForScript(n),
                                                    u = function (t) {
                                                        return new o(r, e, t);
                                                    };
                                                if (s.match(/^https?:|\/\//i)) {
                                                    var d,
                                                        c,
                                                        h,
                                                        f,
                                                        m,
                                                        V = function () {
                                                            if (1 == v && 1 == g) {
                                                                var e = h + ' ' + f + '\nOGVLoader.base = ' + JSON.stringify(p.base);
                                                                try {
                                                                    m = new Blob([e], { type: 'application/javascript' });
                                                                } catch (t) {
                                                                    (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder), (m = new BlobBuilder()).append(e), (m = m.getBlob());
                                                                }
                                                                (r = new Worker(URL.createObjectURL(m))),
                                                                    t(function (e) {
                                                                        return Promise.resolve(new u(e));
                                                                    });
                                                            }
                                                        },
                                                        v = !1,
                                                        g = !1;
                                                    (d = new XMLHttpRequest()).open('GET', a, !0),
                                                        (d.onreadystatechange = function () {
                                                            4 == d.readyState && 200 == d.status && ((h = d.responseText), (v = !0), V());
                                                        }),
                                                        d.send(),
                                                        (c = new XMLHttpRequest()).open('GET', s, !0),
                                                        (c.onreadystatechange = function () {
                                                            4 == c.readyState && 200 == c.status && ((f = c.responseText), (g = !0), V());
                                                        }),
                                                        c.send();
                                                } else
                                                    (r = new Worker(s)),
                                                        t(function (e) {
                                                            return Promise.resolve(new u(e));
                                                        });
                                            }
                                        }
                                    ]),
                                    c
                                );
                            })(f.default))();
                        t.default = p;
                    },
                    759: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(913)),
                            n = r(i(575)),
                            a = r(i(309)),
                            s = {
                                MEDIA_ERR_ABORTED: 1,
                                MEDIA_ERR_NETWORK: 2,
                                MEDIA_ERR_DECODE: 3,
                                MEDIA_ERR_SRC_NOT_SUPPORTED: 4
                            },
                            u = (0, o.default)(function e(t, i) {
                                (0, n.default)(this, e), (this.code = t), (this.message = i);
                            });
                        (0, a.default)(u, s), (0, a.default)(u.prototype, s);
                        t.default = u;
                    },
                    278: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(913)),
                            n = r(i(575));
                        function a(e, t, i) {
                            var r = e.split(t, i).map(function (e) {
                                return e.replace(/^\s+/, '').replace(/\s+$/, '');
                            });
                            if ('number' == typeof i) for (; r.length < i; ) r.push(null);
                            return r;
                        }
                        var s = (0, o.default)(function e(t) {
                            (0, n.default)(this, e), (t = String(t)), (this.major = null), (this.minor = null), (this.codecs = null);
                            var i = a(t, ';');
                            if (i.length) {
                                var r = i.shift();
                                if (r) {
                                    var o = a(r, '/', 2);
                                    (this.major = o[0]), (this.minor = o[1]);
                                }
                                for (var s in i) {
                                    var u = i[s].match(/^codecs\s*=\s*"(.*?)"$/);
                                    if (u) {
                                        this.codecs = a(u[1], ',');
                                        break;
                                    }
                                }
                            }
                        });
                        t.default = s;
                    },
                    869: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = r(i(506)),
                            s = r(i(205)),
                            u = r(i(585)),
                            d = r(i(754)),
                            c = r(i(8)),
                            h = r(i(731)),
                            f = r(i(936)),
                            l = r(i(848)),
                            _ = r(i(964)),
                            p = r(i(893)),
                            m = r(i(309)),
                            V = r(i(759)),
                            v = r(i(278)),
                            g = r(i(168)),
                            y = r(i(625)),
                            b = r(i(302)),
                            T,
                            A = (function () {
                                if ('function' == typeof setImmediate) return setImmediate;
                                var e = new MessageChannel(),
                                    t = [];
                                return (
                                    (e.port1.onmessage = function (e) {
                                        t.shift()();
                                    }),
                                    function (i) {
                                        t.push(i), e.port2.postMessage({});
                                    }
                                );
                            })(),
                            k = {
                                NETWORK_EMPTY: 0,
                                NETWORK_IDLE: 1,
                                NETWORK_LOADING: 2,
                                NETWORK_NO_SOURCE: 3,
                                HAVE_NOTHING: 0,
                                HAVE_METADATA: 1,
                                HAVE_CURRENT_DATA: 2,
                                HAVE_FUTURE_DATA: 3,
                                HAVE_ENOUGH_DATA: 4
                            },
                            E = 'INITIAL',
                            P = 'SEEKING_END',
                            w = 'LOADED',
                            x = 'PRELOAD',
                            R = 'READY',
                            F = 'PLAYING',
                            O = 'SEEKING',
                            S = 'ERROR',
                            C = 'NOT_SEEKING',
                            D = 'BISECT_TO_TARGET',
                            M = 'BISECT_TO_KEYPOINT',
                            B = 'LINEAR_TO_TARGET',
                            I = 'fast';
                        function j() {
                            var e = document.createElement('ogvjs');
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, Object.getPrototypeOf(this)) : (e.__proto__ = this.__proto__), e;
                        }
                        (T = 'undefined' == typeof performance || void 0 === (0, c.default)(performance.now) ? Date.now : performance.now.bind(performance)), (j.prototype = Object.create(HTMLElement.prototype, {}));
                        var L = (function (e) {
                            (0, s.default)(c, e);
                            var t,
                                i,
                                r =
                                    ((t = c),
                                    (i = (function () {
                                        if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                        if ('function' == typeof Proxy) return !0;
                                        try {
                                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                                        } catch (e) {
                                            return !1;
                                        }
                                    })()),
                                    function () {
                                        var e,
                                            r = (0, d.default)(t);
                                        return (e = i ? Reflect.construct(r, arguments, (0, d.default)(this).constructor) : r.apply(this, arguments)), (0, u.default)(this, e);
                                    });
                            function c(e) {
                                var t;
                                if (((0, o.default)(this, c), (t = r.call(this)), ((e = e || {}).base = e.base || _.default.base), (t._options = e), (t._instanceId = 'ogvjs' + ++c.instanceCount), void 0 !== e.worker ? (t._enableWorker = !!e.worker) : (t._enableWorker = !!window.Worker), !_.default.wasmSupported())) throw Error('WebAssembly not supported');
                                return (
                                    (t._enableThreading = !!e.threading),
                                    (t._enableSIMD = !!e.simd),
                                    (t._state = E),
                                    (t._seekState = C),
                                    (t._detectedType = null),
                                    (t._canvas = document.createElement('canvas')),
                                    (t._frameSink = null),
                                    (t.className = t._instanceId),
                                    (0, m.default)((0, a.default)(t), k),
                                    (t._view = t._canvas),
                                    (t._view.style.position = 'absolute'),
                                    (t._view.style.top = '0'),
                                    (t._view.style.left = '0'),
                                    (t._view.style.width = '100%'),
                                    (t._view.style.height = '100%'),
                                    (t._view.style.objectFit = 'contain'),
                                    t.appendChild(t._view),
                                    (t._startTime = T()),
                                    (t._codec = null),
                                    (t._audioInfo = null),
                                    (t._videoInfo = null),
                                    (t._actionQueue = []),
                                    (t._audioFeeder = null),
                                    (t._muted = !1),
                                    (t._initialPlaybackPosition = 0),
                                    (t._initialPlaybackOffset = 0),
                                    (t._prebufferingAudio = !1),
                                    (t._initialSeekTime = 0),
                                    (t._currentSrc = ''),
                                    (t._crossOrigin = null),
                                    (t._streamEnded = !1),
                                    (t._mediaError = null),
                                    (t._dataEnded = !1),
                                    (t._byteLength = 0),
                                    (t._duration = null),
                                    (t._lastSeenTimestamp = null),
                                    t._nextProcessingTimer,
                                    (t._nextFrameTimer = null),
                                    (t._loading = !1),
                                    (t._started = !1),
                                    (t._paused = !0),
                                    (t._ended = !1),
                                    (t._startedPlaybackInDocument = !1),
                                    (t._stream = void 0),
                                    (t._framesProcessed = 0),
                                    (t._targetPerFrameTime = 1000 / 60),
                                    (t._actualPerFrameTime = 0),
                                    (t._totalFrameTime = 0),
                                    (t._totalFrameCount = 0),
                                    (t._playTime = 0),
                                    (t._bufferTime = 0),
                                    (t._drawingTime = 0),
                                    (t._proxyTime = 0),
                                    (t._totalJitter = 0),
                                    (t._droppedAudio = 0),
                                    (t._delayedAudio = 0),
                                    (t._lateFrames = 0),
                                    (t._poster = ''),
                                    (t._thumbnail = null),
                                    (t._frameEndTimestamp = 0),
                                    (t._audioEndTimestamp = 0),
                                    (t._decodedFrames = []),
                                    (t._pendingFrames = []),
                                    (t._lastFrameDecodeTime = 0),
                                    (t._lastFrameVideoCpuTime = 0),
                                    (t._lastFrameAudioCpuTime = 0),
                                    (t._lastFrameDemuxerCpuTime = 0),
                                    (t._lastFrameDrawingTime = 0),
                                    (t._lastFrameBufferTime = 0),
                                    (t._lastFrameProxyTime = 0),
                                    (t._lastVideoCpuTime = 0),
                                    (t._lastAudioCpuTime = 0),
                                    (t._lastDemuxerCpuTime = 0),
                                    (t._lastBufferTime = 0),
                                    (t._lastProxyTime = 0),
                                    (t._lastDrawingTime = 0),
                                    (t._lastFrameTimestamp = 0),
                                    (t._currentVideoCpuTime = 0),
                                    (t._lastTimeUpdate = 0),
                                    (t._timeUpdateInterval = 250),
                                    (t._seekTargetTime = 0),
                                    (t._bisectTargetTime = 0),
                                    (t._seekMode = null),
                                    (t._lastSeekPosition = null),
                                    (t._seekBisector = null),
                                    (t._didSeek = null),
                                    (t._depth = 0),
                                    (t._needProcessing = !1),
                                    (t._pendingFrame = 0),
                                    (t._pendingAudio = 0),
                                    (t._framePipelineDepth = 8),
                                    (t._frameParallelism = t._enableThreading ? Math.min(16, navigator.hardwareConcurrency) || 1 : 0),
                                    (t._audioPipelineDepth = 12),
                                    (t._videoInfo = null),
                                    (t._audioInfo = null),
                                    (t._width = 0),
                                    (t._height = 0),
                                    (t._volume = 1),
                                    (t._playbackRate = 1),
                                    Object.defineProperties((0, a.default)(t), {
                                        src: {
                                            get: function () {
                                                return this.getAttribute('src') || '';
                                            },
                                            set: function (e) {
                                                this.setAttribute('src', e), (this._loading = !1), this._prepForLoad('interactive');
                                            }
                                        },
                                        buffered: {
                                            get: function () {
                                                var e,
                                                    t = this;
                                                return (
                                                    (e =
                                                        this._stream && this._byteLength && this._duration
                                                            ? this._stream.getBufferedRanges().map(function (e) {
                                                                  return e.map(function (e) {
                                                                      return (e / t._stream.length) * t._duration;
                                                                  });
                                                              })
                                                            : [[0, 0]]),
                                                    new g.default(e)
                                                );
                                            }
                                        },
                                        seekable: {
                                            get: function () {
                                                return new g.default(this.duration < 1 / 0 && this._stream && this._stream.seekable && this._codec && this._codec.seekable ? [[0, this._duration]] : []);
                                            }
                                        },
                                        currentTime: {
                                            get: function () {
                                                return this._state == O ? this._seekTargetTime : this._codec ? (this._state != F || this._paused ? this._initialPlaybackOffset : this._getPlaybackTime()) : this._initialSeekTime;
                                            },
                                            set: function (e) {
                                                this._seek(e, 'exact');
                                            }
                                        },
                                        duration: {
                                            get: function () {
                                                return this._codec && this._codec.loadedMetadata ? (null !== this._duration ? this._duration : 1 / 0) : NaN;
                                            }
                                        },
                                        paused: {
                                            get: function () {
                                                return this._paused;
                                            }
                                        },
                                        ended: {
                                            get: function () {
                                                return this._ended;
                                            }
                                        },
                                        seeking: {
                                            get: function () {
                                                return this._state == O;
                                            }
                                        },
                                        muted: {
                                            get: function () {
                                                return this._muted;
                                            },
                                            set: function (e) {
                                                (this._muted = e), this._audioFeeder ? (this._audioFeeder.muted = this._muted) : this._started && !this._muted && this._codec && this._codec.hasAudio && (this._log('unmuting: switching from timer to audio clock'), this._initAudioFeeder(), this._startPlayback(this._audioEndTimestamp)), this._fireEventAsync('volumechange');
                                            }
                                        },
                                        poster: {
                                            get: function () {
                                                return this._poster;
                                            },
                                            set: function (e) {
                                                var t = this;
                                                if (((this._poster = e), !this._started)) {
                                                    this._thumbnail && this.removeChild(this._thumbnail);
                                                    var i = new Image();
                                                    (i.crossOrigin = this.crossOrigin),
                                                        (i.src = this._poster),
                                                        (i.className = 'ogvjs-poster'),
                                                        (i.style.position = 'absolute'),
                                                        (i.style.top = '0'),
                                                        (i.style.left = '0'),
                                                        (i.style.width = '100%'),
                                                        (i.style.height = '100%'),
                                                        (i.style.objectFit = 'contain'),
                                                        (i.style.visibility = 'hidden'),
                                                        i.addEventListener('load', function () {
                                                            t._thumbnail === i &&
                                                                (c.styleManager.appendRule('.' + t._instanceId, {
                                                                    width: i.naturalWidth + 'px',
                                                                    height: i.naturalHeight + 'px'
                                                                }),
                                                                (i.style.visibility = 'visible'));
                                                        }),
                                                        (this._thumbnail = i),
                                                        this.appendChild(i);
                                                }
                                            }
                                        },
                                        videoWidth: {
                                            get: function () {
                                                return this._videoInfo ? this._videoInfo.displayWidth : 0;
                                            }
                                        },
                                        videoHeight: {
                                            get: function () {
                                                return this._videoInfo ? this._videoInfo.displayHeight : 0;
                                            }
                                        },
                                        ogvjsVideoFrameRate: {
                                            get: function () {
                                                return this._videoInfo ? (0 == this._videoInfo.fps ? this._totalFrameCount / (this._totalFrameTime / 1000) : this._videoInfo.fps) : 0;
                                            }
                                        },
                                        ogvjsAudioChannels: {
                                            get: function () {
                                                return this._audioInfo ? this._audioInfo.channels : 0;
                                            }
                                        },
                                        ogvjsAudioSampleRate: {
                                            get: function () {
                                                return this._audioInfo ? this._audioInfo.rate : 0;
                                            }
                                        },
                                        width: {
                                            get: function () {
                                                return this._width;
                                            },
                                            set: function (e) {
                                                (this._width = parseInt(e, 10)), (this.style.width = this._width + 'px');
                                            }
                                        },
                                        height: {
                                            get: function () {
                                                return this._height;
                                            },
                                            set: function (e) {
                                                (this._height = parseInt(e, 10)), (this.style.height = this._height + 'px');
                                            }
                                        },
                                        autoplay: {
                                            get: function () {
                                                return !1;
                                            },
                                            set: function (e) {}
                                        },
                                        controls: {
                                            get: function () {
                                                return !1;
                                            },
                                            set: function (e) {}
                                        },
                                        loop: {
                                            get: function () {
                                                return !1;
                                            },
                                            set: function (e) {}
                                        },
                                        crossOrigin: {
                                            get: function () {
                                                return this._crossOrigin;
                                            },
                                            set: function (e) {
                                                switch (e) {
                                                    case null:
                                                        (this._crossOrigin = e), this.removeAttribute('crossorigin');
                                                        break;
                                                    default:
                                                        e = 'anonymous';
                                                    case '':
                                                    case 'anonymous':
                                                    case 'use-credentials':
                                                        (this._crossOrigin = e), this.setAttribute('crossorigin', e);
                                                }
                                                this._thumbnail && (this._thumbnail.crossOrigin = e);
                                            }
                                        },
                                        currentSrc: {
                                            get: function () {
                                                return this._currentSrc;
                                            }
                                        },
                                        defaultMuted: {
                                            get: function () {
                                                return !1;
                                            }
                                        },
                                        defaultPlaybackRate: {
                                            get: function () {
                                                return 1;
                                            }
                                        },
                                        error: {
                                            get: function () {
                                                return this._state === S ? (this._mediaError ? this._mediaError : new V.default('unknown error occurred in media procesing')) : null;
                                            }
                                        },
                                        preload: {
                                            get: function () {
                                                return this.getAttribute('preload') || '';
                                            },
                                            set: function (e) {
                                                this.setAttribute('preload', e);
                                            }
                                        },
                                        readyState: {
                                            get: function () {
                                                return this._stream && this._codec && this._codec.loadedMetadata ? c.HAVE_ENOUGH_DATA : c.HAVE_NOTHING;
                                            }
                                        },
                                        networkState: {
                                            get: function () {
                                                return this._stream ? (this._stream.waiting ? c.NETWORK_LOADING : c.NETWORK_IDLE) : this.readyState == c.HAVE_NOTHING ? c.NETWORK_EMPTY : c.NETWORK_NO_SOURCE;
                                            }
                                        },
                                        playbackRate: {
                                            get: function () {
                                                return this._playbackRate;
                                            },
                                            set: function (e) {
                                                var t = Number(e) || 1;
                                                this._audioFeeder ? (this._audioFeeder.tempo = t) : this._paused || ((this._initialPlaybackOffset = this._getPlaybackTime()), (this._initialPlaybackPosition = (t * T()) / 1000)), (this._playbackRate = t), this._fireEventAsync('ratechange');
                                            }
                                        },
                                        played: {
                                            get: function () {
                                                return new g.default([[0, this.currentTime]]);
                                            }
                                        },
                                        volume: {
                                            get: function () {
                                                return this._volume;
                                            },
                                            set: function (e) {
                                                (this._volume = +e), this._audioFeeder && (this._audioFeeder.volume = this._volume), this._fireEventAsync('volumechange');
                                            }
                                        }
                                    }),
                                    (t.onframecallback = null),
                                    (t.onloadstate = null),
                                    (t.onprogress = null),
                                    (t.onsuspend = null),
                                    (t.onabort = null),
                                    (t.onemptied = null),
                                    (t.onstalled = null),
                                    (t.onloadedmetadata = null),
                                    (t.onloadeddata = null),
                                    (t.oncanplay = null),
                                    (t.oncanplaythrough = null),
                                    (t.onplaying = null),
                                    (t.onwaiting = null),
                                    (t.onseeking = null),
                                    (t.onseeked = null),
                                    (t.onended = null),
                                    (t.ondurationchange = null),
                                    (t.ontimeupdate = null),
                                    (t.onplay = null),
                                    (t.onpause = null),
                                    (t.onratechange = null),
                                    (t.onresize = null),
                                    (t.onvolumechange = null),
                                    (t.onaudiofeedercreated = null),
                                    t
                                );
                            }
                            return (
                                (0, n.default)(
                                    c,
                                    [
                                        {
                                            key: '_time',
                                            value: function (e) {
                                                var t = T();
                                                e();
                                                var i = T() - t;
                                                return (this._lastFrameDecodeTime += i), i;
                                            }
                                        },
                                        {
                                            key: '_log',
                                            value: function (e) {
                                                var t = this._options;
                                                if (t.debug) {
                                                    var i = T() - this._startTime;
                                                    (t.debugFilter && !e.match(t.debugFilter)) || console.log('[' + Math.round(10 * i) / 10 + 'ms] ' + e);
                                                }
                                            }
                                        },
                                        {
                                            key: '_fireEvent',
                                            value: function (e) {
                                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                this._log('fireEvent ' + e);
                                                var i,
                                                    r = 'function' == typeof Event;
                                                for (var o in (r ? (i = new CustomEvent(e)) : (i = document.createEvent('Event')).initEvent(e, !1, !1), t)) t.hasOwnProperty(o) && (i[o] = t[o]);
                                                var n = this.dispatchEvent(i);
                                                !r && 'resize' === e && this.onresize && n && this.onresize.call(this, i);
                                            }
                                        },
                                        {
                                            key: '_fireEventAsync',
                                            value: function (e) {
                                                var t = this,
                                                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                this._log('fireEventAsync ' + e),
                                                    A(function () {
                                                        t._fireEvent(e, i);
                                                    });
                                            }
                                        },
                                        {
                                            key: '_initAudioFeeder',
                                            value: function () {
                                                var e = this,
                                                    t = this._options,
                                                    i = { bufferSize: 8192 };
                                                t.audioContext && (i.audioContext = t.audioContext), t.audioDestination && (i.output = t.audioDestination), t.audioBackendFactory && (i.backendFactory = t.audioBackendFactory);
                                                var r = (this._audioFeeder = new l.default(i));
                                                r.init(this._audioInfo.channels, this._audioInfo.rate),
                                                    this.onaudiofeedercreated && this.onaudiofeedercreated(this._audioFeeder),
                                                    (r.bufferThreshold = 1),
                                                    (r.volume = this.volume),
                                                    (r.muted = this.muted),
                                                    (r.tempo = this.playbackRate),
                                                    (r.onbufferlow = function () {
                                                        e._log('onbufferlow'), (e._stream && (e._stream.buffering || e._stream.seeking)) || e._pendingAudio || e._pingProcessing();
                                                    }),
                                                    (r.onstarved = function () {
                                                        e._dataEnded ? e._log('onstarved: appear to have reached end of audio') : (e._log('onstarved: halting audio due to starvation'), e._stopPlayback(), (e._prebufferingAudio = !0)), e._isProcessing() || e._pingProcessing(0);
                                                    });
                                            }
                                        },
                                        {
                                            key: '_startPlayback',
                                            value: function (e) {
                                                if (this._audioFeeder) {
                                                    this._audioFeeder.start();
                                                    var t = this._audioFeeder.getPlaybackState();
                                                    this._initialPlaybackPosition = t.playbackPosition;
                                                } else this._initialPlaybackPosition = (this._playbackRate * T()) / 1000;
                                                void 0 !== e && (this._initialPlaybackOffset = e), (this._prebufferingAudio = !1), this._log('continuing at ' + this._initialPlaybackPosition + ', ' + this._initialPlaybackOffset);
                                            }
                                        },
                                        {
                                            key: '_stopPlayback',
                                            value: function () {
                                                (this._initialPlaybackOffset = this._getPlaybackTime()), this._log('pausing at ' + this._initialPlaybackOffset), this._audioFeeder && this._audioFeeder.stop();
                                            }
                                        },
                                        {
                                            key: '_getPlaybackTime',
                                            value: function (e) {
                                                return this._prebufferingAudio || this._paused ? this._initialPlaybackOffset : (this._audioFeeder ? (e = e || this._audioFeeder.getPlaybackState()).playbackPosition : (this._playbackRate * T()) / 1000) - this._initialPlaybackPosition + this._initialPlaybackOffset;
                                            }
                                        },
                                        {
                                            key: '_stopVideo',
                                            value: function () {
                                                this._log('STOPPING'), (this._state = E), (this._seekState = C), (this._started = !1), (this._ended = !1), (this._frameEndTimestamp = 0), (this._audioEndTimestamp = 0), (this._lastFrameDecodeTime = 0), (this._prebufferingAudio = !1), this._actionQueue.splice(0, this._actionQueue.length), this._stream && (this._stream.abort(), (this._stream = null), (this._streamEnded = !1)), this._codec && (this._codec.close(), (this._codec = null), (this._pendingFrame = 0), (this._pendingAudio = 0), (this._dataEnded = !1)), (this._videoInfo = null), (this._audioInfo = null), this._audioFeeder && (this._audioFeeder.close(), (this._audioFeeder = null)), this._nextProcessingTimer && (clearTimeout(this._nextProcessingTimer), (this._nextProcessingTimer = null)), this._nextFrameTimer && (clearTimeout(this._nextFrameTimer), (this._nextFrameTimer = null)), this._frameSink && (this._frameSink.clear(), (this._frameSink = null)), this._decodedFrames && (this._decodedFrames = []), this._pendingFrames && (this._pendingFrames = []), (this._initialSeekTime = 0), (this._initialPlaybackPosition = 0), (this._initialPlaybackOffset = 0), (this._duration = null);
                                            }
                                        },
                                        {
                                            key: '_doFrameComplete',
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                this._startedPlaybackInDocument &&
                                                    !document.body.contains(this) &&
                                                    A(function () {
                                                        e.stop();
                                                    });
                                                var i = T(),
                                                    r = i - this._lastFrameTimestamp,
                                                    o = this._actualPerFrameTime - this._targetPerFrameTime;
                                                (this._totalJitter += Math.abs(o)), (this._playTime += r);
                                                var n = {
                                                    cpuTime: this._lastFrameDecodeTime,
                                                    drawingTime: this._drawingTime - this._lastFrameDrawingTime,
                                                    bufferTime: this._bufferTime - this._lastFrameBufferTime,
                                                    proxyTime: this._proxyTime - this._lastFrameProxyTime,
                                                    demuxerTime: 0,
                                                    videoTime: 0,
                                                    audioTime: 0,
                                                    clockTime: this._actualPerFrameTime,
                                                    late: t.dropped,
                                                    dropped: t.dropped
                                                };
                                                function a(e) {
                                                    return Math.round(10 * e) / 10;
                                                }
                                                this._codec && ((n.demuxerTime = this._codec.demuxerCpuTime - this._lastFrameDemuxerCpuTime), (n.videoTime += this._currentVideoCpuTime - this._lastFrameVideoCpuTime), (n.audioTime += this._codec.audioCpuTime - this._lastFrameAudioCpuTime)), (n.cpuTime += n.demuxerTime), (this._lastFrameDecodeTime = 0), (this._lastFrameTimestamp = i), this._codec ? ((this._lastFrameVideoCpuTime = this._currentVideoCpuTime), (this._lastFrameAudioCpuTime = this._codec.audioCpuTime), (this._lastFrameDemuxerCpuTime = this._codec.demuxerCpuTime)) : ((this._lastFrameVideoCpuTime = 0), (this._lastFrameAudioCpuTime = 0), (this._lastFrameDemuxerCpuTime = 0)), (this._lastFrameDrawingTime = this._drawingTime), (this._lastFrameBufferTime = this._bufferTime), (this._lastFrameProxyTime = this._proxyTime), this._log('drew frame ' + t.frameEndTimestamp + ': clock time ' + a(r) + ' (jitter ' + a(o) + ') cpu: ' + a(n.cpuTime) + ' (mux: ' + a(n.demuxerTime) + ' buf: ' + a(n.bufferTime) + ' draw: ' + a(n.drawingTime) + ' proxy: ' + a(n.proxyTime) + ') vid: ' + a(n.videoTime) + ' aud: ' + a(n.audioTime)), this._fireEventAsync('framecallback', n), (!this._lastTimeUpdate || i - this._lastTimeUpdate >= this._timeUpdateInterval) && ((this._lastTimeUpdate = i), this._fireEventAsync('timeupdate')), this._codec && t.yCbCrBuffer && this._codec.recycleFrame(t.yCbCrBuffer);
                                            }
                                        },
                                        {
                                            key: '_seekStream',
                                            value: function (e) {
                                                var t = this;
                                                this._stream.seeking && this._stream.abort(),
                                                    this._stream.buffering && this._stream.abort(),
                                                    (this._streamEnded = !1),
                                                    (this._dataEnded = !1),
                                                    (this._ended = !1),
                                                    this._stream
                                                        .seek(e)
                                                        .then(function () {
                                                            t._readBytesAndWait();
                                                        })
                                                        .catch(function (e) {
                                                            t._onStreamError(e);
                                                        });
                                            }
                                        },
                                        {
                                            key: '_onStreamError',
                                            value: function (e) {
                                                'AbortError' === e.name ? this._log('i/o promise canceled; ignoring') : (this._log('i/o error: ' + e), (this._mediaError = new V.default(V.default.MEDIA_ERR_NETWORK, String(e))), (this._state = S), this._stopPlayback());
                                            }
                                        },
                                        {
                                            key: '_seek',
                                            value: function (e, t) {
                                                var i = this;
                                                if ((this._log('requested seek to ' + e + ', mode ' + t), this.readyState == this.HAVE_NOTHING)) return this._log('not yet loaded; saving seek position for later'), void (this._initialSeekTime = e);
                                                if (this._stream && !this._stream.seekable) throw Error('Cannot seek a non-seekable stream');
                                                if (this._codec && !this._codec.seekable) throw Error('Cannot seek in a non-seekable file');
                                                var r = function (r) {
                                                    i._stream && i._stream.buffering && i._stream.abort(), i._stream && i._stream.seeking && i._stream.abort(), i._actionQueue.splice(0, i._actionQueue.length), i._stopPlayback(), (i._prebufferingAudio = !1), i._audioFeeder && i._audioFeeder.flush(), (i._state = O), (i._seekTargetTime = e), (i._seekMode = t), i._codec ? i._codec.flush(r) : r();
                                                };
                                                r(function () {
                                                    i._isProcessing() || i._pingProcessing(0);
                                                }),
                                                    this._actionQueue.push(function () {
                                                        r(function () {
                                                            i._doSeek(e);
                                                        });
                                                    });
                                            }
                                        },
                                        {
                                            key: '_doSeek',
                                            value: function (e) {
                                                var t = this;
                                                (this._streamEnded = !1),
                                                    (this._dataEnded = !1),
                                                    (this._ended = !1),
                                                    (this._state = O),
                                                    (this._seekTargetTime = e),
                                                    (this._lastSeekPosition = -1),
                                                    (this._decodedFrames = []),
                                                    (this._pendingFrames = []),
                                                    (this._pendingFrame = 0),
                                                    (this._pendingAudio = 0),
                                                    (this._didSeek = !1),
                                                    this._codec.seekToKeypoint(e, function (i) {
                                                        if (i) return (t._seekState = B), t._fireEventAsync('seeking'), t._didSeek ? void 0 : void t._pingProcessing();
                                                        t._codec.getKeypointOffset(e, function (e) {
                                                            e > 0 ? ((t._seekState = B), t._seekStream(e)) : ((t._seekState = D), t._startBisection(t._seekTargetTime)), t._fireEventAsync('seeking');
                                                        });
                                                    });
                                            }
                                        },
                                        {
                                            key: '_startBisection',
                                            value: function (e) {
                                                var t = this,
                                                    i = Math.max(0, this._stream.length - 65536);
                                                (this._bisectTargetTime = e),
                                                    (this._seekBisector = new p.default({
                                                        start: 0,
                                                        end: i,
                                                        process: function (e, i, r) {
                                                            return (
                                                                r != t._lastSeekPosition &&
                                                                ((t._lastSeekPosition = r),
                                                                t._codec.flush(function () {
                                                                    t._seekStream(r);
                                                                }),
                                                                !0)
                                                            );
                                                        }
                                                    })),
                                                    this._seekBisector.start();
                                            }
                                        },
                                        {
                                            key: '_continueSeekedPlayback',
                                            value: function () {
                                                var e = this;
                                                (this._seekState = C), (this._state = R), (this._frameEndTimestamp = this._codec.frameTimestamp), (this._audioEndTimestamp = this._codec.audioTimestamp), this._codec.hasAudio ? (this._seekTargetTime = this._codec.audioTimestamp) : (this._seekTargetTime = this._codec.frameTimestamp), (this._initialPlaybackOffset = this._seekTargetTime);
                                                var t = function () {
                                                    (e._lastTimeUpdate = e._seekTargetTime), e._fireEventAsync('timeupdate'), e._fireEventAsync('seeked'), e._isProcessing() || e._pingProcessing();
                                                };
                                                if (this._codec.hasVideo && this._decodedFrames.length) {
                                                    var i = this._decodedFrames.shift();
                                                    this._drawFrame(i.yCbCrBuffer), t();
                                                } else {
                                                    if (this._codec.hasVideo && this._codec.frameReady)
                                                        return (
                                                            this._codec.decodeFrame(function (i) {
                                                                i && e._drawFrame(e._codec.frameBuffer), t();
                                                            }),
                                                            void this._codec.sync()
                                                        );
                                                    t();
                                                }
                                            }
                                        },
                                        {
                                            key: '_drawFrame',
                                            value: function (e) {
                                                this._thumbnail && (this.removeChild(this._thumbnail), (this._thumbnail = null)), this._frameSink.drawFrame(e);
                                            }
                                        },
                                        {
                                            key: '_doProcessLinearSeeking',
                                            value: function () {
                                                var e,
                                                    t = this;
                                                if (((e = this._codec.hasVideo ? this._targetPerFrameTime / 1000 : 1 / 256), this._codec.hasVideo)) {
                                                    if (this._pendingFrame) return;
                                                    if (!this._codec.frameReady)
                                                        return void this._codec.process(function (e) {
                                                            e ? t._pingProcessing() : t._streamEnded ? (t._log('stream ended during linear seeking on video'), (t._dataEnded = !0), t._continueSeekedPlayback()) : t._readBytesAndWait();
                                                        });
                                                    if (this._seekMode === I && this._codec.keyframeTimestamp == this._codec.frameTimestamp) return void this._continueSeekedPlayback();
                                                    if (this._codec.frameTimestamp <= this._seekTargetTime) {
                                                        var i = this._codec.frameTimestamp;
                                                        return (
                                                            this._pendingFrame++,
                                                            this._pendingFrames.push({ frameEndTimestamp: i }),
                                                            this._decodedFrames.splice(0, this._decodedFrames.length),
                                                            this._codec.decodeFrame(function (e) {
                                                                t._pendingFrame--,
                                                                    t._pendingFrames.shift(),
                                                                    t._decodedFrames.push({
                                                                        yCbCrBuffer: t._codec.frameBuffer,
                                                                        videoCpuTime: t._codec.videoCpuTime,
                                                                        frameEndTimestamp: i
                                                                    }),
                                                                    t._pingProcessing();
                                                            }),
                                                            void this._codec.sync()
                                                        );
                                                    }
                                                    if (!this._codec.hasAudio) return void this._continueSeekedPlayback();
                                                }
                                                if (this._codec.hasAudio) {
                                                    if (this._pendingAudio) return;
                                                    return this._codec.audioReady
                                                        ? this._codec.audioTimestamp + e < this._seekTargetTime
                                                            ? void this._codec.decodeAudio(function () {
                                                                  t._pingProcessing();
                                                              })
                                                            : void this._continueSeekedPlayback()
                                                        : void this._codec.process(function (e) {
                                                              e ? t._pingProcessing() : t._streamEnded ? (t._log('stream ended during linear seeking on audio'), (t._dataEnded = !0), t._continueSeekedPlayback()) : t._readBytesAndWait();
                                                          });
                                                }
                                            }
                                        },
                                        {
                                            key: '_doProcessBisectionSeek',
                                            value: function () {
                                                var e,
                                                    t,
                                                    i = this;
                                                if (this._codec.hasVideo) (t = this._codec.frameTimestamp), (e = this._targetPerFrameTime / 1000);
                                                else {
                                                    if (!this._codec.hasAudio) throw Error('Invalid seek state; no audio or video track available');
                                                    (t = this._codec.audioTimestamp), (e = 1 / 256);
                                                }
                                                t < 0
                                                    ? this._codec.process(function (e) {
                                                          if (e) i._pingProcessing();
                                                          else if (i._streamEnded) {
                                                              if ((i._log('stream ended during bisection seek'), !i._seekBisector.right())) throw (i._log('failed going back'), Error('not sure what to do'));
                                                          } else i._readBytesAndWait();
                                                      })
                                                    : t - e / 2 > this._bisectTargetTime
                                                      ? this._seekBisector.left() || (this._log('close enough (left)'), (this._seekTargetTime = t), this._continueSeekedPlayback())
                                                      : t + e / 2 < this._bisectTargetTime
                                                        ? this._seekBisector.right() || (this._log('close enough (right)'), (this._seekState = B), this._pingProcessing())
                                                        : this._seekState == D && this._codec.hasVideo && this._codec.keyframeTimestamp < this._codec.frameTimestamp
                                                          ? (this._log('finding the keypoint now'), (this._seekState = M), this._startBisection(this._codec.keyframeTimestamp))
                                                          : (this._log('straight seeking now'), (this._seekState = B), this._pingProcessing());
                                            }
                                        },
                                        {
                                            key: '_setupVideo',
                                            value: function () {
                                                this._videoInfo.fps > 0 ? (this._targetPerFrameTime = 1000 / this._videoInfo.fps) : (this._targetPerFrameTime = 16.667),
                                                    (this._canvas.width = this._videoInfo.displayWidth),
                                                    (this._canvas.height = this._videoInfo.displayHeight),
                                                    c.styleManager.appendRule('.' + this._instanceId, {
                                                        width: this._videoInfo.displayWidth + 'px',
                                                        height: this._videoInfo.displayHeight + 'px'
                                                    });
                                                var e = {};
                                                void 0 !== this._options.webGL && (e.webGL = this._options.webGL), this._options.forceWebGL && (e.webGL = 'required'), (this._frameSink = h.default.attach(this._canvas, e));
                                            }
                                        },
                                        {
                                            key: '_doProcessing',
                                            value: function () {
                                                if ((this._didSeek && (this._didSeek = !1), (this._nextProcessingTimer = null), this._isProcessing(), this._depth > 0)) throw Error('REENTRANCY FAIL: doProcessing recursing unexpectedly');
                                                var e = 0;
                                                do {
                                                    if (((this._needProcessing = !1), this._depth++, this._doProcessingLoop(), this._depth--, this._needProcessing && this._isProcessing())) throw Error('REENTRANCY FAIL: waiting on input or codec but asked to keep processing');
                                                    ++e > 500 && (this._log('stuck in processing loop; breaking with timer'), (this._needProcessing = 0), this._pingProcessing(0));
                                                } while (this._needProcessing);
                                            }
                                        },
                                        {
                                            key: '_doProcessingLoop',
                                            value: function () {
                                                if (this._actionQueue.length) this._actionQueue.shift()();
                                                else if (this._state == E) this._doProcessInitial();
                                                else if (this._state == P) this._doProcessSeekingEnd();
                                                else if (this._state == w) this._doProcessLoaded();
                                                else if (this._state == x) this._doProcessPreload();
                                                else if (this._state == R) this._doProcessReady();
                                                else if (this._state == O) this._doProcessSeeking();
                                                else if (this._state == F) this._doProcessPlay();
                                                else {
                                                    if (this._state != S) throw Error('Unexpected OGVPlayer state ' + this._state);
                                                    this._doProcessError();
                                                }
                                            }
                                        },
                                        {
                                            key: '_doProcessInitial',
                                            value: function () {
                                                var e = this;
                                                if (this._codec.loadedMetadata) {
                                                    if (!this._codec.hasVideo && !this._codec.hasAudio) throw Error('No audio or video found, something is wrong');
                                                    this._codec.hasAudio && (this._audioInfo = this._codec.audioFormat),
                                                        this._codec.hasVideo && ((this._videoInfo = this._codec.videoFormat), this._setupVideo()),
                                                        isNaN(this._codec.duration) || (this._duration = this._codec.duration),
                                                        null === this._duration && this._stream.seekable && 'video/ogg' == this._detectedType
                                                            ? ((this._state = P),
                                                              (this._lastSeenTimestamp = -1),
                                                              this._codec.flush(function () {
                                                                  e._seekStream(Math.max(0, e._stream.length - 131072));
                                                              }))
                                                            : ((this._state = w), this._pingProcessing());
                                                } else
                                                    this._codec.process(function (t) {
                                                        if (t) e._pingProcessing();
                                                        else {
                                                            if (e._streamEnded) throw Error('end of file before headers found');
                                                            e._log('reading more cause we are out of data'), e._readBytesAndWait();
                                                        }
                                                    });
                                            }
                                        },
                                        {
                                            key: '_doProcessSeekingEnd',
                                            value: function () {
                                                var e = this;
                                                this._codec.frameReady
                                                    ? (this._log('saw frame with ' + this._codec.frameTimestamp),
                                                      (this._lastSeenTimestamp = Math.max(this._lastSeenTimestamp, this._codec.frameTimestamp)),
                                                      this._codec.discardFrame(function () {
                                                          e._pingProcessing();
                                                      }))
                                                    : this._codec.audioReady
                                                      ? (this._log('saw audio with ' + this._codec.audioTimestamp),
                                                        (this._lastSeenTimestamp = Math.max(this._lastSeenTimestamp, this._codec.audioTimestamp)),
                                                        this._codec.discardAudio(function () {
                                                            e._pingProcessing();
                                                        }))
                                                      : this._codec.process(function (t) {
                                                            t
                                                                ? e._pingProcessing()
                                                                : e._stream.eof
                                                                  ? (e._log('seek-duration: we are at the end: ' + e._lastSeenTimestamp),
                                                                    e._lastSeenTimestamp > 0 && (e._duration = e._lastSeenTimestamp),
                                                                    (e._state = w),
                                                                    e._codec.flush(function () {
                                                                        (e._streamEnded = !1), (e._dataEnded = !1), e._seekStream(0);
                                                                    }))
                                                                  : e._readBytesAndWait();
                                                        });
                                            }
                                        },
                                        {
                                            key: '_doProcessLoaded',
                                            value: function () {
                                                (this._state = x), this._fireEventAsync('loadedmetadata'), this._fireEventAsync('durationchange'), this._codec.hasVideo && this._fireEventAsync('resize'), this._pingProcessing(0);
                                            }
                                        },
                                        {
                                            key: '_doProcessPreload',
                                            value: function () {
                                                var e = this;
                                                (!this._codec.frameReady && this._codec.hasVideo) || (!this._codec.audioReady && this._codec.hasAudio)
                                                    ? this._codec.process(function (t) {
                                                          t ? e._pingProcessing() : e._streamEnded ? (e._ended = !0) : e._readBytesAndWait();
                                                      })
                                                    : ((this._state = R), this._fireEventAsync('loadeddata'), this._pingProcessing());
                                            }
                                        },
                                        {
                                            key: '_doProcessReady',
                                            value: function () {
                                                var e = this;
                                                if ((this._log('initial seek to ' + this._initialSeekTime), this._initialSeekTime > 0)) {
                                                    var t = this._initialSeekTime;
                                                    (this._initialSeekTime = 0), this._log('initial seek to ' + t), this._doSeek(t);
                                                } else if (this._paused) this._log('paused while in ready');
                                                else {
                                                    var i = function () {
                                                        e._log('finishStartPlaying'), (e._state = F), (e._lastFrameTimestamp = T()), e._codec.hasAudio && e._audioFeeder ? (e._prebufferingAudio = !0) : e._startPlayback(), e._pingProcessing(0), e._fireEventAsync('play'), e._fireEventAsync('playing');
                                                    };
                                                    !this._codec.hasAudio || this._audioFeeder || this._muted ? i() : (this._initAudioFeeder(), this._audioFeeder.waitUntilReady(i));
                                                }
                                            }
                                        },
                                        {
                                            key: '_doProcessSeeking',
                                            value: function () {
                                                if (this._seekState == C) throw Error('seeking in invalid state (not seeking?)');
                                                if (this._seekState == D) this._doProcessBisectionSeek();
                                                else if (this._seekState == M) this._doProcessBisectionSeek();
                                                else {
                                                    if (this._seekState != B) throw Error('Invalid seek state ' + this._seekState);
                                                    this._doProcessLinearSeeking();
                                                }
                                            }
                                        },
                                        {
                                            key: '_doProcessPlay',
                                            value: function () {
                                                var e = this,
                                                    t = this._codec;
                                                if (this._paused) this._log('paused during playback; stopping loop');
                                                else if ((!t.hasAudio || t.audioReady || this._pendingAudio || this._dataEnded) && (!t.hasVideo || t.frameReady || this._pendingFrame || this._decodedFrames.length || this._dataEnded)) {
                                                    var i,
                                                        r,
                                                        o,
                                                        n = null,
                                                        a = 0,
                                                        s = !1,
                                                        u = 0;
                                                    if ((t.hasAudio && this._audioFeeder ? ((n = this._audioFeeder.getPlaybackState()), (a = this._getPlaybackTime(n)), (s = this._dataEnded && 0 == this._audioFeeder.durationBuffered), this._prebufferingAudio && ((this._audioFeeder.durationBuffered >= 2 * this._audioFeeder.bufferThreshold && (!t.hasVideo || this._decodedFrames.length >= this._framePipelineDepth)) || this._dataEnded) && (this._log('prebuffering audio done; buffered to ' + this._audioFeeder.durationBuffered), this._startPlayback(a), (this._prebufferingAudio = !1)), n.dropped != this._droppedAudio && this._log('dropped ' + (n.dropped - this._droppedAudio)), n.delayed != this._delayedAudio && this._log('delayed ' + (n.delayed - this._delayedAudio)), (this._droppedAudio = n.dropped), (this._delayedAudio = n.delayed), (i = this._audioFeeder.durationBuffered <= 2 * this._audioFeeder.bufferThreshold) && (this._codec.audioReady ? this._pendingAudio >= this._audioPipelineDepth && (this._log('audio decode disabled: ' + this._pendingAudio + ' packets in flight'), (i = !1)) : (i = !1))) : ((a = this._getPlaybackTime()), (i = this._codec.audioReady && this._audioEndTimestamp < a)), this._codec.hasVideo)) {
                                                        (r = this._decodedFrames.length > 0), (o = this._pendingFrame + this._decodedFrames.length < this._framePipelineDepth + this._frameParallelism && this._codec.frameReady), r && ((u = 1000 * (this._decodedFrames[0].frameEndTimestamp - a)), (this._actualPerFrameTime = this._targetPerFrameTime - u));
                                                        var d = this._targetPerFrameTime;
                                                        if (this._prebufferingAudio) o && this._log('decoding a frame during prebuffering'), (r = !1);
                                                        else if (r && this._dataEnded && s) this._log('audio timeline ended? ready to draw frame');
                                                        else if (r && -u >= d) {
                                                            for (var c = -1, h = 0; h < this._decodedFrames.length - 1; h++) this._decodedFrames[h].frameEndTimestamp < a && (c = h - 1);
                                                            if (c >= 0)
                                                                for (; c-- >= 0; ) {
                                                                    this._lateFrames++;
                                                                    var f = this._decodedFrames.shift();
                                                                    this._log('skipping already-decoded late frame at ' + f.frameEndTimestamp), (u = 1000 * (f.frameEndTimestamp - a)), (this._frameEndTimestamp = f.frameEndTimestamp), (this._actualPerFrameTime = this._targetPerFrameTime - u), this._framesProcessed++, (f.dropped = !0), this._doFrameComplete(f);
                                                                }
                                                            var l = this._codec.nextKeyframeTimestamp,
                                                                _ = l - (this._targetPerFrameTime / 1000) * (this._framePipelineDepth + this._pendingFrame);
                                                            if (l >= 0 && l != this._codec.frameTimestamp && a >= _) {
                                                                this._log('skipping late frame at ' + this._decodedFrames[0].frameEndTimestamp + ' vs ' + a + ', expect to see keyframe at ' + l);
                                                                for (var p = 0; p < this._decodedFrames.length; p++) {
                                                                    var m = this._decodedFrames[p];
                                                                    this._lateFrames++, this._framesProcessed++, (this._frameEndTimestamp = m.frameEndTimestamp), (u = 1000 * (m.frameEndTimestamp - a)), (this._actualPerFrameTime = this._targetPerFrameTime - u), (m.dropped = !0), this._doFrameComplete(m);
                                                                }
                                                                this._decodedFrames = [];
                                                                for (var V = 0; V < this._pendingFrames.length; V++) {
                                                                    var v = this._pendingFrames[V];
                                                                    this._lateFrames++, this._framesProcessed++, (this._frameEndTimestamp = v.frameEndTimestamp), (u = 1000 * (v.frameEndTimestamp - a)), (this._actualPerFrameTime = this._targetPerFrameTime - u), (v.dropped = !0), this._doFrameComplete(v);
                                                                }
                                                                for (this._pendingFrames = [], this._pendingFrame = 0; this._codec.frameReady && this._codec.frameTimestamp < l; ) {
                                                                    var g = {
                                                                        frameEndTimestamp: this._codec.frameTimestamp,
                                                                        dropped: !0
                                                                    };
                                                                    (u = 1000 * (g.frameEndTimestamp - a)), (this._actualPerFrameTime = this._targetPerFrameTime - u), this._lateFrames++, this._codec.discardFrame(function () {}), this._framesProcessed++, this._doFrameComplete(g);
                                                                }
                                                                return void (this._isProcessing() || this._pingProcessing());
                                                            }
                                                        } else (r && u <= 4) || (r = !1);
                                                    }
                                                    if (o) {
                                                        this._log('play loop: ready to decode frame; thread depth: ' + this._pendingFrame + ', have buffered: ' + this._decodedFrames.length), 0 == this._videoInfo.fps && this._codec.frameTimestamp - this._frameEndTimestamp > 0 && (this._targetPerFrameTime = 1000 * (this._codec.frameTimestamp - this._frameEndTimestamp)), (this._totalFrameTime += this._targetPerFrameTime), this._totalFrameCount++;
                                                        var y = (this._frameEndTimestamp = this._codec.frameTimestamp);
                                                        this._pendingFrame++, this._pendingFrames.push({ frameEndTimestamp: y });
                                                        var b = this._pendingFrames,
                                                            T = !1,
                                                            A = this._time(function () {
                                                                e._codec.decodeFrame(function (t) {
                                                                    b === e._pendingFrames
                                                                        ? (e._log('play loop callback: decoded frame'),
                                                                          e._pendingFrame--,
                                                                          e._pendingFrames.shift(),
                                                                          t
                                                                              ? e._decodedFrames.push({
                                                                                    yCbCrBuffer: e._codec.frameBuffer,
                                                                                    videoCpuTime: e._codec.videoCpuTime,
                                                                                    frameEndTimestamp: y
                                                                                })
                                                                              : e._log('Bad video packet or something'),
                                                                          e._codec.process(function () {
                                                                              e._isProcessing() || e._pingProcessing(T ? void 0 : 0);
                                                                          }))
                                                                        : e._log('play loop callback after flush, discarding');
                                                                });
                                                            });
                                                        this._pendingFrame && ((T = !0), (this._proxyTime += A), this._pingProcessing(), this._dataEnded && this._codec.sync());
                                                    } else if (i) {
                                                        this._log('play loop: ready for audio; depth: ' + this._pendingAudio), this._pendingAudio++;
                                                        var k = this._codec.audioTimestamp,
                                                            E = this._time(function () {
                                                                e._codec.decodeAudio(function (t) {
                                                                    if ((e._pendingAudio--, e._log('play loop callback: decoded audio'), (e._audioEndTimestamp = k), t)) {
                                                                        var i = e._codec.audioBuffer;
                                                                        if (
                                                                            i &&
                                                                            ((e._bufferTime += e._time(function () {
                                                                                e._audioFeeder && e._audioFeeder.bufferData(i);
                                                                            })),
                                                                            !e._codec.hasVideo)
                                                                        ) {
                                                                            e._framesProcessed++;
                                                                            var r = { frameEndTimestamp: e._audioEndTimestamp };
                                                                            e._doFrameComplete(r);
                                                                        }
                                                                    }
                                                                    e._isProcessing() || e._pingProcessing();
                                                                });
                                                            });
                                                        this._pendingAudio && ((this._proxyTime += E), this._codec.audioReady ? this._pingProcessing() : this._doProcessPlayDemux());
                                                    } else if (r) {
                                                        this._log('play loop: ready to draw frame'), this._nextFrameTimer && (clearTimeout(this._nextFrameTimer), (this._nextFrameTimer = null)), this._thumbnail && (this.removeChild(this._thumbnail), (this._thumbnail = null));
                                                        var P = this._decodedFrames.shift();
                                                        (this._currentVideoCpuTime = P.videoCpuTime),
                                                            (this._drawingTime += this._time(function () {
                                                                e._drawFrame(P.yCbCrBuffer);
                                                            })),
                                                            this._framesProcessed++,
                                                            this._doFrameComplete(P),
                                                            this._pingProcessing();
                                                    } else if (!this._decodedFrames.length || this._nextFrameTimer || this._prebufferingAudio) {
                                                        if (this._dataEnded && !(this._pendingAudio || this._pendingFrame || this._decodedFrames.length)) {
                                                            this._log('play loop: playback reached end of data ' + [this._pendingAudio, this._pendingFrame, this._decodedFrames.length]);
                                                            var w = 0;
                                                            this._codec.hasAudio && this._audioFeeder && (w = 1000 * this._audioFeeder.durationBuffered), w > 0 ? (this._log('play loop: ending pending ' + w + ' ms'), this._pingProcessing(Math.max(0, w))) : (this._log('play loop: ENDING NOW: playback time ' + this._getPlaybackTime() + '; frameEndTimestamp: ' + this._frameEndTimestamp), this._stopPlayback(), (this._prebufferingAudio = !1), (this._initialPlaybackOffset = Math.max(this._audioEndTimestamp, this._frameEndTimestamp)), (this._ended = !0), (this._paused = !0), this._fireEventAsync('pause'), this._fireEventAsync('ended'));
                                                        } else this._prebufferingAudio && ((t.hasVideo && !t.frameReady) || (t.hasAudio && !t.audioReady)) ? (this._log('play loop: prebuffering demuxing'), this._doProcessPlayDemux()) : this._log('play loop: waiting on async/timers');
                                                    } else {
                                                        var x = u;
                                                        this._log('play loop: setting a timer for drawing ' + x),
                                                            (this._nextFrameTimer = setTimeout(function () {
                                                                (e._nextFrameTimer = null), e._pingProcessing();
                                                            }, x));
                                                    }
                                                } else this._log('play loop: demuxing'), this._doProcessPlayDemux();
                                            }
                                        },
                                        {
                                            key: '_doProcessPlayDemux',
                                            value: function () {
                                                var e = this,
                                                    t = this._codec.frameReady,
                                                    i = this._codec.audioReady;
                                                this._codec.process(function (r) {
                                                    (e._codec.frameReady && !t) || (e._codec.audioReady && !i) ? (e._log('demuxer has packets'), e._pingProcessing()) : r ? (e._log('demuxer processing to find more packets'), e._pingProcessing()) : (e._log('demuxer ran out of data'), e._streamEnded ? (e._log('demuxer reached end of data stream'), (e._dataEnded = !0), e._pingProcessing()) : (e._log('demuxer loading more data'), e._readBytesAndWait()));
                                                });
                                            }
                                        },
                                        {
                                            key: '_doProcessError',
                                            value: function () {}
                                        },
                                        {
                                            key: '_isProcessing',
                                            value: function () {
                                                return (this._stream && (this._stream.buffering || this._stream.seeking)) || (this._codec && this._codec.processing);
                                            }
                                        },
                                        {
                                            key: '_readBytesAndWait',
                                            value: function () {
                                                var e = this;
                                                this._stream.buffering || this._stream.seeking
                                                    ? this._log('readBytesAndWait during i/o')
                                                    : this._stream
                                                          .read(32768)
                                                          .then(function (t) {
                                                              e._log('got input ' + [t.byteLength]),
                                                                  t.byteLength &&
                                                                      e._actionQueue.push(function () {
                                                                          e._codec.receiveInput(t, function () {
                                                                              e._pingProcessing();
                                                                          });
                                                                      }),
                                                                  e._stream.eof && (e._log('stream is at end!'), (e._streamEnded = !0)),
                                                                  e._isProcessing() || e._pingProcessing();
                                                          })
                                                          .catch(function (t) {
                                                              e._onStreamError(t);
                                                          });
                                            }
                                        },
                                        {
                                            key: '_pingProcessing',
                                            value: function () {
                                                var e = this,
                                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                                                if (this._stream && this._stream.waiting) this._log('waiting on input');
                                                else {
                                                    this._nextProcessingTimer && (this._log('canceling old processing timer'), clearTimeout(this._nextProcessingTimer), (this._nextProcessingTimer = null));
                                                    t > -1 / 256
                                                        ? (this._nextProcessingTimer = setTimeout(function () {
                                                              e._pingProcessing();
                                                          }, t))
                                                        : this._depth
                                                          ? (this._needProcessing = !0)
                                                          : this._doProcessing();
                                                }
                                            }
                                        },
                                        {
                                            key: '_startProcessingVideo',
                                            value: function (e) {
                                                var t = this;
                                                if (!this._started && !this._codec) {
                                                    (this._framesProcessed = 0), (this._bufferTime = 0), (this._drawingTime = 0), (this._proxyTime = 0), (this._started = !0), (this._ended = !1);
                                                    var i = {
                                                        base: this._options.base,
                                                        worker: this._enableWorker,
                                                        threading: this._enableThreading,
                                                        simd: this._enableSIMD
                                                    };
                                                    this._detectedType && (i.type = this._detectedType),
                                                        (this._codec = new y.default(i)),
                                                        (this._lastVideoCpuTime = 0),
                                                        (this._lastAudioCpuTime = 0),
                                                        (this._lastDemuxerCpuTime = 0),
                                                        (this._lastBufferTime = 0),
                                                        (this._lastDrawingTime = 0),
                                                        (this._lastProxyTime = 0),
                                                        (this._lastFrameVideoCpuTime = 0),
                                                        (this._lastFrameAudioCpuTime = 0),
                                                        (this._lastFrameDemuxerCpuTime = 0),
                                                        (this._lastFrameBufferTime = 0),
                                                        (this._lastFrameProxyTime = 0),
                                                        (this._lastFrameDrawingTime = 0),
                                                        (this._currentVideoCpuTime = 0),
                                                        (this._codec.onseek = function (e) {
                                                            (t._didSeek = !0), t._stream && t._seekStream(e);
                                                        }),
                                                        this._codec.init(function () {
                                                            t._codec.receiveInput(e, function () {
                                                                t._readBytesAndWait();
                                                            });
                                                        });
                                                }
                                            }
                                        },
                                        {
                                            key: '_loadCodec',
                                            value: function (e) {
                                                var t = this;
                                                this._stream.read(1024).then(function (i) {
                                                    var r = new Uint8Array(i);
                                                    r.length > 4 && 79 == r[0] && 103 == r[1] && 103 == r[2] && 83 == r[3] ? (t._detectedType = 'video/ogg') : r.length > 4 && 26 == r[0] && 69 == r[1] && 223 == r[2] && 163 == r[3] ? (t._detectedType = 'video/webm') : (t._detectedType = 'video/ogg'), e(i);
                                                });
                                            }
                                        },
                                        {
                                            key: '_prepForLoad',
                                            value: function (e) {
                                                var t = this;
                                                this._stopVideo(),
                                                    (this._currentSrc = ''),
                                                    (this._loading = !0),
                                                    this._actionQueue.push(function () {
                                                        e && 'none' === t.preload
                                                            ? (t._loading = !1)
                                                            : (t._options.stream
                                                                  ? (t._stream = t._options.stream)
                                                                  : (t._stream = new f.default({
                                                                        url: t.src,
                                                                        cacheSize: 16777216,
                                                                        progressive: !1
                                                                    })),
                                                              t._stream
                                                                  .load()
                                                                  .then(function () {
                                                                      (t._loading = !1), (t._currentSrc = t.src), (t._byteLength = t._stream.seekable ? t._stream.length : 0);
                                                                      var e = t._stream.headers['x-content-duration'];
                                                                      'string' == typeof e && (t._duration = parseFloat(e)),
                                                                          t._loadCodec(function (e) {
                                                                              t._startProcessingVideo(e);
                                                                          });
                                                                  })
                                                                  .catch(function (e) {
                                                                      t._onStreamError(e);
                                                                  }));
                                                    }),
                                                    this._pingProcessing(0);
                                            }
                                        },
                                        {
                                            key: 'load',
                                            value: function () {
                                                this._prepForLoad();
                                            }
                                        },
                                        {
                                            key: 'canPlayType',
                                            value: function (e) {
                                                var t = new v.default(e);
                                                function i(e) {
                                                    if (t.codecs) {
                                                        var i = 0,
                                                            r = 0;
                                                        return (
                                                            t.codecs.forEach(function (t) {
                                                                e.indexOf(t) >= 0 ? i++ : r++;
                                                            }),
                                                            0 === i || r > 0 ? '' : 'probably'
                                                        );
                                                    }
                                                    return 'maybe';
                                                }
                                                return 'ogg' !== t.minor || ('audio' !== t.major && 'video' !== t.major && 'application' !== t.major) ? ('webm' !== t.minor || ('audio' !== t.major && 'video' !== t.major) ? '' : i(['vorbis', 'opus', 'vp8', 'vp9'])) : i(['vorbis', 'opus', 'theora']);
                                            }
                                        },
                                        {
                                            key: 'play',
                                            value: function () {
                                                this._muted || this._options.audioContext || c.initSharedAudioContext(), this._paused && ((this._startedPlaybackInDocument = document.body.contains(this)), (this._paused = !1), this._state == O || (this._started && this._codec && this._codec.loadedMetadata ? (this._ended && this._stream && this._byteLength ? (this._log('.play() starting over after end'), this._seek(0)) : this._log('.play() while already started'), (this._state = R), this._isProcessing() || this._pingProcessing()) : this._loading ? this._log('.play() while loading') : (this._log('.play() before started'), this._stream || this.load())));
                                            }
                                        },
                                        {
                                            key: 'getPlaybackStats',
                                            value: function () {
                                                return {
                                                    targetPerFrameTime: this._targetPerFrameTime,
                                                    framesProcessed: this._framesProcessed,
                                                    videoBytes: this._codec ? this._codec.videoBytes : 0,
                                                    audioBytes: this._codec ? this._codec.audioBytes : 0,
                                                    playTime: this._playTime,
                                                    demuxingTime: this._codec ? this._codec.demuxerCpuTime - this._lastDemuxerCpuTime : 0,
                                                    videoDecodingTime: this._codec ? this._codec.videoCpuTime - this._lastVideoCpuTime : 0,
                                                    audioDecodingTime: this._codec ? this._codec.audioCpuTime - this._lastAudioCpuTime : 0,
                                                    bufferTime: this._bufferTime - this._lastBufferTime,
                                                    drawingTime: this._drawingTime - this._lastDrawingTime,
                                                    proxyTime: this._proxyTime - this._lastProxyTime,
                                                    droppedAudio: this._droppedAudio,
                                                    delayedAudio: this._delayedAudio,
                                                    jitter: this._totalJitter / this._framesProcessed,
                                                    lateFrames: this._lateFrames
                                                };
                                            }
                                        },
                                        {
                                            key: 'resetPlaybackStats',
                                            value: function () {
                                                (this._framesProcessed = 0), (this._playTime = 0), this._codec && ((this._lastDemuxerCpuTime = this._codec.demuxerCpuTime), (this._lastVideoCpuTime = this._codec.videoCpuTime), (this._lastAudioCpuTime = this._codec.audioCpuTime), (this._codec.videoBytes = 0), (this._codec.audioBytes = 0)), (this._lastBufferTime = this._bufferTime), (this._lastDrawingTime = this._drawingTime), (this._lastProxyTime = this._proxyTime), (this._totalJitter = 0), (this._totalFrameTime = 0), (this._totalFrameCount = 0);
                                            }
                                        },
                                        {
                                            key: 'getVideoFrameSink',
                                            value: function () {
                                                return this._frameSink;
                                            }
                                        },
                                        {
                                            key: 'getCanvas',
                                            value: function () {
                                                return this._canvas;
                                            }
                                        },
                                        {
                                            key: 'getVideo',
                                            value: function () {
                                                return null;
                                            }
                                        },
                                        {
                                            key: 'pause',
                                            value: function () {
                                                this._paused || (this._nextProcessingTimer && (clearTimeout(this._nextProcessingTimer), (this._nextProcessingTimer = null)), this._stopPlayback(), (this._prebufferingAudio = !1), (this._paused = !0), this._fireEvent('pause'));
                                            }
                                        },
                                        {
                                            key: 'stop',
                                            value: function () {
                                                this._stopVideo(), (this._paused = !0);
                                            }
                                        },
                                        {
                                            key: 'fastSeek',
                                            value: function (e) {
                                                this._seek(+e, I);
                                            }
                                        }
                                    ],
                                    [
                                        {
                                            key: 'initSharedAudioContext',
                                            value: function () {
                                                var e = document.createElement('audio');
                                                (e.src = b.default), e.play(), l.default.initSharedAudioContext();
                                            }
                                        }
                                    ]
                                ),
                                c
                            );
                        })(j);
                        (0, m.default)(L, k),
                            (L.instanceCount = 0),
                            (L.styleManager = new (function () {
                                var e = document.createElement('style');
                                (e.type = 'text/css'), (e.textContent = 'ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); '), document.head.appendChild(e);
                                var t = e.sheet;
                                this.appendRule = function (e, i) {
                                    var r = [];
                                    for (var o in i) i.hasOwnProperty(o) && r.push(o + ':' + i[o]);
                                    var n = e + '{' + r.join(';') + '}';
                                    t.insertRule(n, t.cssRules.length - 1);
                                };
                            })());
                        t.default = L;
                    },
                    580: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913));
                        t.default = function (e) {
                            return (function () {
                                function t(i, r, n) {
                                    var a = this;
                                    for (var s in ((0, o.default)(this, t),
                                    (n = n || {}),
                                    (this.worker = i),
                                    (this.transferables = (function () {
                                        var e = new ArrayBuffer(1024),
                                            t = new Uint8Array(e);
                                        try {
                                            return (
                                                i.postMessage(
                                                    {
                                                        action: 'transferTest',
                                                        bytes: t
                                                    },
                                                    [e]
                                                ),
                                                !e.byteLength
                                            );
                                        } catch (e) {
                                            return !1;
                                        }
                                    })()),
                                    e))
                                        e.hasOwnProperty(s) && (this[s] = e[s]);
                                    (this.processingQueue = 0),
                                        Object.defineProperty(this, 'processing', {
                                            get: function () {
                                                return this.processingQueue > 0;
                                            }
                                        }),
                                        (this.messageCount = 0),
                                        (this.pendingCallbacks = {}),
                                        this.worker.addEventListener('message', function (e) {
                                            a.handleMessage(e);
                                        }),
                                        this.proxy('construct', [r, n], function () {});
                                }
                                return (
                                    (0, n.default)(t, [
                                        {
                                            key: 'proxy',
                                            value: function (e, t, i) {
                                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                                                if (!this.worker) throw 'Tried to call "' + e + '" method on closed proxy object';
                                                var o = 'callback-' + ++this.messageCount + '-' + e;
                                                i && (this.pendingCallbacks[o] = i);
                                                var n = {
                                                    action: e,
                                                    callbackId: o,
                                                    args: t || []
                                                };
                                                this.processingQueue++, this.transferables ? this.worker.postMessage(n, r) : this.worker.postMessage(n);
                                            }
                                        },
                                        {
                                            key: 'terminate',
                                            value: function () {
                                                this.worker && (this.worker.terminate(), (this.worker = null), (this.processingQueue = 0), (this.pendingCallbacks = {}));
                                            }
                                        },
                                        {
                                            key: 'handleMessage',
                                            value: function (e) {
                                                if ((this.processingQueue--, 'callback' === e.data.action)) {
                                                    var t = e.data,
                                                        i = t.callbackId,
                                                        r = t.args,
                                                        o = this.pendingCallbacks[i];
                                                    if (t.props) for (var n in t.props) t.props.hasOwnProperty(n) && (this[n] = t.props[n]);
                                                    o && (delete this.pendingCallbacks[i], o.apply(this, r));
                                                }
                                            }
                                        }
                                    ]),
                                    t
                                );
                            })();
                        };
                    },
                    168: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = (function () {
                                function e(t) {
                                    (0, o.default)(this, e), (this._ranges = t), (this.length = t.length);
                                }
                                return (
                                    (0, n.default)(e, [
                                        {
                                            key: 'start',
                                            value: function (e) {
                                                if (e < 0 || e > this.length || e !== (0 | e)) throw RangeError('Invalid index');
                                                return this._ranges[e][0];
                                            }
                                        },
                                        {
                                            key: 'end',
                                            value: function (e) {
                                                if (e < 0 || e > this.length || e !== (0 | e)) throw RangeError('Invalid index');
                                                return this._ranges[e][1];
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();
                        t.default = a;
                    },
                    625: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(575)),
                            n = r(i(913)),
                            a = r(i(964));
                        function s(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                            return r;
                        }
                        var u = (function () {
                            function e(t) {
                                return (
                                    (0, o.default)(this, e),
                                    (this.options = t || {}),
                                    (this.demuxer = null),
                                    (this.videoDecoder = null),
                                    (this.audioDecoder = null),
                                    (this.flushIter = 0),
                                    (this.loadedMetadata = !1),
                                    (this.processing = !1),
                                    Object.defineProperties(this, {
                                        duration: {
                                            get: function () {
                                                return this.loadedMetadata ? this.demuxer.duration : NaN;
                                            }
                                        },
                                        hasAudio: {
                                            get: function () {
                                                return this.loadedMetadata && !!this.audioDecoder;
                                            }
                                        },
                                        audioReady: {
                                            get: function () {
                                                return this.hasAudio && this.demuxer.audioReady;
                                            }
                                        },
                                        audioTimestamp: {
                                            get: function () {
                                                return this.demuxer.audioTimestamp;
                                            }
                                        },
                                        audioFormat: {
                                            get: function () {
                                                return this.hasAudio ? this.audioDecoder.audioFormat : null;
                                            }
                                        },
                                        audioBuffer: {
                                            get: function () {
                                                return this.hasAudio ? this.audioDecoder.audioBuffer : null;
                                            }
                                        },
                                        hasVideo: {
                                            get: function () {
                                                return this.loadedMetadata && !!this.videoDecoder;
                                            }
                                        },
                                        frameReady: {
                                            get: function () {
                                                return this.hasVideo && this.demuxer.frameReady;
                                            }
                                        },
                                        frameTimestamp: {
                                            get: function () {
                                                return this.demuxer.frameTimestamp;
                                            }
                                        },
                                        keyframeTimestamp: {
                                            get: function () {
                                                return this.demuxer.keyframeTimestamp;
                                            }
                                        },
                                        nextKeyframeTimestamp: {
                                            get: function () {
                                                return this.demuxer.nextKeyframeTimestamp;
                                            }
                                        },
                                        videoFormat: {
                                            get: function () {
                                                return this.hasVideo ? this.videoDecoder.videoFormat : null;
                                            }
                                        },
                                        frameBuffer: {
                                            get: function () {
                                                return this.hasVideo ? this.videoDecoder.frameBuffer : null;
                                            }
                                        },
                                        seekable: {
                                            get: function () {
                                                return this.demuxer.seekable;
                                            }
                                        },
                                        demuxerCpuTime: {
                                            get: function () {
                                                return this.demuxer ? this.demuxer.cpuTime : 0;
                                            }
                                        },
                                        audioCpuTime: {
                                            get: function () {
                                                return this.audioDecoder ? this.audioDecoder.cpuTime : 0;
                                            }
                                        },
                                        videoCpuTime: {
                                            get: function () {
                                                return this.videoDecoder ? this.videoDecoder.cpuTime : 0;
                                            }
                                        }
                                    }),
                                    (this.loadedDemuxerMetadata = !1),
                                    (this.loadedAudioMetadata = !1),
                                    (this.loadedVideoMetadata = !1),
                                    (this.loadedAllMetadata = !1),
                                    (this.onseek = null),
                                    (this.videoBytes = 0),
                                    (this.audioBytes = 0),
                                    this
                                );
                            }
                            return (
                                (0, n.default)(e, [
                                    {
                                        key: 'flushSafe',
                                        value: function (e) {
                                            var t = this,
                                                i = this.flushIter;
                                            return function (r) {
                                                t.flushIter <= i && e(r);
                                            };
                                        }
                                    },
                                    {
                                        key: 'init',
                                        value: function (e) {
                                            var t,
                                                i = this;
                                            (this.processing = !0),
                                                (t = 'video/webm' === this.options.type || 'audio/webm' === this.options.type ? 'OGVDemuxerWebMW' : 'OGVDemuxerOggW'),
                                                a.default.loadClass(t, function (t) {
                                                    t().then(function (t) {
                                                        (i.demuxer = t),
                                                            (t.onseek = function (e) {
                                                                i.onseek && i.onseek(e);
                                                            }),
                                                            t.init(function () {
                                                                (i.processing = !1), e();
                                                            });
                                                    });
                                                });
                                        }
                                    },
                                    {
                                        key: 'close',
                                        value: function () {
                                            this.demuxer && (this.demuxer.close(), (this.demuxer = null)), this.videoDecoder && (this.videoDecoder.close(), (this.videoDecoder = null)), this.audioDecoder && (this.audioDecoder.close(), (this.audioDecoder = null));
                                        }
                                    },
                                    {
                                        key: 'receiveInput',
                                        value: function (e, t) {
                                            this.demuxer.receiveInput(e, t);
                                        }
                                    },
                                    {
                                        key: 'process',
                                        value: function (e) {
                                            var t = this;
                                            if (this.processing) throw Error('reentrancy fail on OGVWrapperCodec.process');
                                            this.processing = !0;
                                            var i = function (i) {
                                                    (t.processing = !1), e(i);
                                                },
                                                r = function () {
                                                    t.demuxer.process(i);
                                                };
                                            this.demuxer.loadedMetadata && !this.loadedDemuxerMetadata
                                                ? this.loadAudioCodec(function () {
                                                      t.loadVideoCodec(function () {
                                                          (t.loadedDemuxerMetadata = !0), (t.loadedAudioMetadata = !t.audioDecoder), (t.loadedVideoMetadata = !t.videoDecoder), (t.loadedAllMetadata = t.loadedAudioMetadata && t.loadedVideoMetadata), i(!0);
                                                      });
                                                  })
                                                : this.loadedDemuxerMetadata && !this.loadedAudioMetadata
                                                  ? this.audioDecoder.loadedMetadata
                                                      ? ((this.loadedAudioMetadata = !0), (this.loadedAllMetadata = this.loadedAudioMetadata && this.loadedVideoMetadata), i(!0))
                                                      : this.demuxer.audioReady
                                                        ? this.demuxer.dequeueAudioPacket(function (e, r) {
                                                              (t.audioBytes += e.byteLength),
                                                                  t.audioDecoder.processHeader(e, function (e) {
                                                                      i(!0);
                                                                  });
                                                          })
                                                        : r()
                                                  : this.loadedAudioMetadata && !this.loadedVideoMetadata
                                                    ? this.videoDecoder.loadedMetadata
                                                        ? ((this.loadedVideoMetadata = !0), (this.loadedAllMetadata = this.loadedAudioMetadata && this.loadedVideoMetadata), i(!0))
                                                        : this.demuxer.frameReady
                                                          ? ((this.processing = !0),
                                                            this.demuxer.dequeueVideoPacket(function (e) {
                                                                (t.videoBytes += e.byteLength),
                                                                    t.videoDecoder.processHeader(e, function () {
                                                                        i(!0);
                                                                    });
                                                            }))
                                                          : r()
                                                    : this.loadedVideoMetadata && !this.loadedMetadata && this.loadedAllMetadata
                                                      ? ((this.loadedMetadata = !0), i(!0))
                                                      : this.loadedMetadata && (!this.hasAudio || this.demuxer.audioReady) && (!this.hasVideo || this.demuxer.frameReady)
                                                        ? i(!0)
                                                        : r();
                                        }
                                    },
                                    {
                                        key: 'decodeFrame',
                                        value: function (e) {
                                            var t = this,
                                                i = this.flushSafe(e),
                                                r = this.frameTimestamp,
                                                o = this.keyframeTimestamp;
                                            this.demuxer.dequeueVideoPacket(function (e) {
                                                (t.videoBytes += e.byteLength),
                                                    t.videoDecoder.processFrame(e, function (e) {
                                                        var n = t.videoDecoder.frameBuffer;
                                                        n && ((n.timestamp = r), (n.keyframeTimestamp = o)), i(e);
                                                    });
                                            });
                                        }
                                    },
                                    {
                                        key: 'decodeAudio',
                                        value: function (e) {
                                            var t = this,
                                                i = this.flushSafe(e);
                                            this.demuxer.dequeueAudioPacket(function (e, r) {
                                                (t.audioBytes += e.byteLength),
                                                    t.audioDecoder.processAudio(e, function (e) {
                                                        if (r) {
                                                            var o,
                                                                n = [],
                                                                a = (function (e, t) {
                                                                    var i = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                                                    if (!i) {
                                                                        if (
                                                                            Array.isArray(e) ||
                                                                            (i = (function (e, t) {
                                                                                if (e) {
                                                                                    if ('string' == typeof e) return s(e, void 0);
                                                                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                                                                    if (('Object' === i && e.constructor && (i = e.constructor.name), 'Map' === i || 'Set' === i)) return Array.from(e);
                                                                                    if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t);
                                                                                }
                                                                            })(e))
                                                                        ) {
                                                                            i && (e = i);
                                                                            var r = 0,
                                                                                o = function () {};
                                                                            return {
                                                                                s: o,
                                                                                n: function () {
                                                                                    return r >= e.length
                                                                                        ? { done: !0 }
                                                                                        : {
                                                                                              done: !1,
                                                                                              value: e[r++]
                                                                                          };
                                                                                },
                                                                                e: function (e) {
                                                                                    throw e;
                                                                                },
                                                                                f: o
                                                                            };
                                                                        }
                                                                        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                                                                    }
                                                                    var n,
                                                                        a = !0,
                                                                        u = !1;
                                                                    return {
                                                                        s: function () {
                                                                            i = i.call(e);
                                                                        },
                                                                        n: function () {
                                                                            var e = i.next();
                                                                            return (a = e.done), e;
                                                                        },
                                                                        e: function (e) {
                                                                            (u = !0), (n = e);
                                                                        },
                                                                        f: function () {
                                                                            try {
                                                                                a || null == i.return || i.return();
                                                                            } finally {
                                                                                if (u) throw n;
                                                                            }
                                                                        }
                                                                    };
                                                                })(t.audioDecoder.audioBuffer);
                                                            try {
                                                                for (a.s(); !(o = a.n()).done; ) {
                                                                    var u = o.value,
                                                                        d = Math.round((r * t.audioFormat.rate) / 1000000000);
                                                                    d > 0 ? n.push(u.subarray(0, u.length - Math.min(d, u.length))) : n.push(u.subarray(Math.min(Math.abs(d), u.length), u.length));
                                                                }
                                                            } catch (e) {
                                                                a.e(e);
                                                            } finally {
                                                                a.f();
                                                            }
                                                            t.audioDecoder.audioBuffer = n;
                                                        }
                                                        return i(e);
                                                    });
                                            });
                                        }
                                    },
                                    {
                                        key: 'discardFrame',
                                        value: function (e) {
                                            var t = this;
                                            this.demuxer.dequeueVideoPacket(function (i) {
                                                (t.videoBytes += i.byteLength), e();
                                            });
                                        }
                                    },
                                    {
                                        key: 'discardAudio',
                                        value: function (e) {
                                            var t = this;
                                            this.demuxer.dequeueAudioPacket(function (i, r) {
                                                (t.audioBytes += i.byteLength), e();
                                            });
                                        }
                                    },
                                    {
                                        key: 'flush',
                                        value: function (e) {
                                            this.flushIter++, this.demuxer.flush(e);
                                        }
                                    },
                                    {
                                        key: 'sync',
                                        value: function () {
                                            this.videoDecoder && this.videoDecoder.sync();
                                        }
                                    },
                                    {
                                        key: 'recycleFrame',
                                        value: function (e) {
                                            this.videoDecoder && this.videoDecoder.recycleFrame(e);
                                        }
                                    },
                                    {
                                        key: 'getKeypointOffset',
                                        value: function (e, t) {
                                            this.demuxer.getKeypointOffset(e, t);
                                        }
                                    },
                                    {
                                        key: 'seekToKeypoint',
                                        value: function (e, t) {
                                            this.demuxer.seekToKeypoint(e, this.flushSafe(t));
                                        }
                                    },
                                    {
                                        key: 'loadAudioCodec',
                                        value: function (e) {
                                            var t = this;
                                            if (this.demuxer.audioCodec) {
                                                var i = {
                                                    vorbis: 'OGVDecoderAudioVorbisW',
                                                    opus: 'OGVDecoderAudioOpusW'
                                                }[this.demuxer.audioCodec];
                                                (this.processing = !0),
                                                    a.default.loadClass(
                                                        i,
                                                        function (i) {
                                                            var r = {};
                                                            t.demuxer.audioFormat && (r.audioFormat = t.demuxer.audioFormat),
                                                                i(r).then(function (i) {
                                                                    (t.audioDecoder = i),
                                                                        i.init(function () {
                                                                            (t.loadedAudioMetadata = i.loadedMetadata), (t.processing = !1), e();
                                                                        });
                                                                });
                                                        },
                                                        { worker: this.options.worker }
                                                    );
                                            } else e();
                                        }
                                    },
                                    {
                                        key: 'loadVideoCodec',
                                        value: function (e) {
                                            var t = this;
                                            if (this.demuxer.videoCodec) {
                                                var i = !!this.options.simd,
                                                    r = !!this.options.threading,
                                                    o = {
                                                        theora: 'OGVDecoderVideoTheoraW',
                                                        vp8: r ? 'OGVDecoderVideoVP8MTW' : 'OGVDecoderVideoVP8W',
                                                        vp9: r ? (i ? 'OGVDecoderVideoVP9SIMDMTW' : 'OGVDecoderVideoVP9MTW') : i ? 'OGVDecoderVideoVP9SIMDW' : 'OGVDecoderVideoVP9W',
                                                        av1: r ? (i ? 'OGVDecoderVideoAV1SIMDMTW' : 'OGVDecoderVideoAV1MTW') : i ? 'OGVDecoderVideoAV1SIMDW' : 'OGVDecoderVideoAV1W'
                                                    }[this.demuxer.videoCodec];
                                                (this.processing = !0),
                                                    a.default.loadClass(
                                                        o,
                                                        function (i) {
                                                            var o = {};
                                                            t.demuxer.videoFormat && (o.videoFormat = t.demuxer.videoFormat),
                                                                r && delete window.ENVIRONMENT_IS_PTHREAD,
                                                                i(o).then(function (i) {
                                                                    (t.videoDecoder = i),
                                                                        i.init(function () {
                                                                            (t.loadedVideoMetadata = i.loadedMetadata), (t.processing = !1), e();
                                                                        });
                                                                });
                                                        },
                                                        { worker: this.options.worker && !this.options.threading }
                                                    );
                                            } else e();
                                        }
                                    }
                                ]),
                                e
                            );
                        })();
                        t.default = u;
                    },
                    539: (e, t, i) => {
                        var r = i(318);
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        var o = r(i(8)),
                            n = r(i(575)),
                            a = r(i(913)),
                            s = new ((function () {
                                function e() {
                                    (0, n.default)(this, e), (this.tested = !1), (this.testResult = void 0);
                                }
                                return (
                                    (0, a.default)(e, [
                                        {
                                            key: 'wasmSupported',
                                            value: function () {
                                                if (!this.tested) {
                                                    try {
                                                        var e, t;
                                                        'object' === ('undefined' == typeof WebAssembly ? 'undefined' : (0, o.default)(WebAssembly)) ? (this.testResult = ((e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11])), (t = new WebAssembly.Module(e)), 0 !== new WebAssembly.Instance(t, {}).exports.test(4))) : (this.testResult = !1);
                                                    } catch (e) {
                                                        console.log('Exception while testing WebAssembly', e), (this.testResult = !1);
                                                    }
                                                    this.tested = !0;
                                                }
                                                return this.testResult;
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })())();
                        t.default = s;
                    },
                    309: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                        t.default = function (e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                        };
                    },
                    431: (e, t, i) => {
                        var r = (function () {
                                function e(e, t) {
                                    for (var i = 0; i < t.length; i++) {
                                        var r = t[i];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, i, r) {
                                    return i && e(t.prototype, i), r && e(t, r), t;
                                };
                            })(),
                            o = function e(t, i, r) {
                                null === t && (t = Function.prototype);
                                var o = Object.getOwnPropertyDescriptor(t, i);
                                if (void 0 === o) {
                                    var n = Object.getPrototypeOf(t);
                                    return null === n ? void 0 : e(n, i, r);
                                }
                                if ('value' in o) return o.value;
                                var a = o.get;
                                return void 0 !== a ? a.call(r) : void 0;
                            },
                            n = i(828),
                            a = 'arraybuffer',
                            s = (function (e) {
                                function t() {
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                        })(this, t),
                                        (function (e, t) {
                                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                enumerable: !1,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, e),
                                    r(t, [
                                        {
                                            key: 'initXHR',
                                            value: function () {
                                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initXHR', this).call(this), (this.xhr.responseType = a);
                                            }
                                        },
                                        {
                                            key: 'onXHRProgress',
                                            value: function () {}
                                        },
                                        {
                                            key: 'onXHRLoad',
                                            value: function () {
                                                var e = this.xhr.response;
                                                (this.bytesRead += e.byteLength), this.emit('buffer', e), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'onXHRLoad', this).call(this);
                                            }
                                        }
                                    ]),
                                    t
                                );
                            })(n);
                        (s.supported = function () {
                            try {
                                var e = new XMLHttpRequest();
                                return (e.responseType = a), e.responseType === a;
                            } catch (e) {
                                return !1;
                            }
                        }),
                            (e.exports = s);
                    },
                    306: (e, t, i) => {
                        var r = (function () {
                            function e(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, i, r) {
                                return i && e(t.prototype, i), r && e(t, r), t;
                            };
                        })();
                        function o(e) {
                            var t = e.getResponseHeader('Content-Range');
                            return t && t.match(/^bytes (\d+)-(\d+)\/(\d+)/);
                        }
                        var n = (function (e) {
                            function t(e) {
                                var i = e.url,
                                    r = e.offset,
                                    o = e.length,
                                    n = e.cachever;
                                !(function (e, t) {
                                    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                })(this, t);
                                var a = (function (e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                                return (a.url = i), (a.offset = r), (a.length = o), (a.cachever = void 0 === n ? 0 : n), (a.loaded = !1), (a.seekable = !1), (a.headers = {}), (a.eof = !1), (a.bytesRead = 0), (a.xhr = new XMLHttpRequest()), a;
                            }
                            return (
                                (function (e, t) {
                                    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                r(t, [
                                    {
                                        key: 'load',
                                        value: function () {
                                            var e = this;
                                            return new Promise(function (t, i) {
                                                var r = null;
                                                e._onAbort = function (e) {
                                                    r(), i(e);
                                                };
                                                var n = function () {
                                                        if (2 == e.xhr.readyState) {
                                                            if (206 == e.xhr.status) {
                                                                var n,
                                                                    a,
                                                                    s,
                                                                    u = (s = o(e.xhr)) ? parseInt(s[1], 10) : 0;
                                                                if (e.offset != u) return console.log('Expected start at ' + e.offset + ' but got ' + u + '; working around Safari range caching bug: https://bugs.webkit.org/show_bug.cgi?id=82672'), e.cachever++, e.emit('cachever'), e.abort(), r(), void e.load().then(t).catch(i);
                                                                e.seekable = !0;
                                                            }
                                                            e.xhr.status >= 200 && e.xhr.status < 300
                                                                ? ((e.length = (function (e) {
                                                                      if (206 == e.status) {
                                                                          var t;
                                                                          return (t = o(e)) ? parseInt(t[3], 10) : -1;
                                                                      }
                                                                      var i = e.getResponseHeader('Content-Length');
                                                                      return null === i || '' === i ? -1 : parseInt(i, 10);
                                                                  })(e.xhr)),
                                                                  (e.headers =
                                                                      ((n = e.xhr),
                                                                      (a = {}),
                                                                      n
                                                                          .getAllResponseHeaders()
                                                                          .split(/\r?\n/)
                                                                          .forEach(function (e) {
                                                                              var t = e.split(/:\s*/, 2);
                                                                              t.length > 1 && (a[t[0].toLowerCase()] = t[1]);
                                                                          }),
                                                                      a)),
                                                                  e.onXHRStart())
                                                                : (r(), i(Error('HTTP error ' + e.xhr.status)));
                                                        }
                                                    },
                                                    a = function () {
                                                        r(), i(Error('network error'));
                                                    },
                                                    s = function () {
                                                        r(), t();
                                                    };
                                                (r = function () {
                                                    e.xhr.removeEventListener('readystatechange', n), e.xhr.removeEventListener('error', a), e.off('open', s), (e._onAbort = null);
                                                }),
                                                    e.initXHR(),
                                                    e.xhr.addEventListener('readystatechange', n),
                                                    e.xhr.addEventListener('error', a),
                                                    e.on('open', s),
                                                    e.xhr.send();
                                            });
                                        }
                                    },
                                    {
                                        key: 'bufferToOffset',
                                        value: function (e) {
                                            return Promise.reject(Error('abstract'));
                                        }
                                    },
                                    {
                                        key: 'abort',
                                        value: function () {
                                            if ((this.xhr.abort(), this._onAbort)) {
                                                var e = this._onAbort;
                                                this._onAbort = null;
                                                var t = Error('Aborted');
                                                (t.name = 'AbortError'), e(t);
                                            }
                                        }
                                    },
                                    {
                                        key: 'initXHR',
                                        value: function () {
                                            var e = this.url;
                                            this.cachever && (e += '?buggy_cachever=' + this.cachever), this.xhr.open('GET', e);
                                            var t = null;
                                            (this.offset || this.length) && (t = 'bytes=' + this.offset + '-'), this.length && (t += this.offset + this.length - 1), null !== t && this.xhr.setRequestHeader('Range', t);
                                        }
                                    },
                                    {
                                        key: 'onXHRStart',
                                        value: function () {
                                            throw Error('abstract');
                                        }
                                    }
                                ]),
                                t
                            );
                        })(i(566));
                        e.exports = n;
                    },
                    810: (e, t, i) => {
                        var r = (function () {
                                function e(e, t) {
                                    for (var i = 0; i < t.length; i++) {
                                        var r = t[i];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, i, r) {
                                    return i && e(t.prototype, i), r && e(t, r), t;
                                };
                            })(),
                            o = function e(t, i, r) {
                                null === t && (t = Function.prototype);
                                var o = Object.getOwnPropertyDescriptor(t, i);
                                if (void 0 === o) {
                                    var n = Object.getPrototypeOf(t);
                                    return null === n ? void 0 : e(n, i, r);
                                }
                                if ('value' in o) return o.value;
                                var a = o.get;
                                return void 0 !== a ? a.call(r) : void 0;
                            },
                            n = (function (e) {
                                function t() {
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                        })(this, t),
                                        (function (e, t) {
                                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                enumerable: !1,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, e),
                                    r(t, [
                                        {
                                            key: 'initXHR',
                                            value: function () {
                                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initXHR', this).call(this), (this.xhr.responseType = 'text'), this.xhr.overrideMimeType('text/plain; charset=x-user-defined');
                                            }
                                        },
                                        {
                                            key: 'onXHRProgress',
                                            value: function () {
                                                var e = this.xhr.responseText.slice(this.bytesRead);
                                                e.length > 0 && ((this.bytesRead += e.length), this.emit('buffer', e));
                                            }
                                        },
                                        {
                                            key: 'onXHRLoad',
                                            value: function () {
                                                this.onXHRProgress(), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'onXHRLoad', this).call(this);
                                            }
                                        }
                                    ]),
                                    t
                                );
                            })(i(828));
                        (n.supported = function () {
                            try {
                                return !!new XMLHttpRequest().overrideMimeType;
                            } catch (e) {
                                return !1;
                            }
                        }),
                            (e.exports = n);
                    },
                    828: (e, t, i) => {
                        var r = (function () {
                                function e(e, t) {
                                    for (var i = 0; i < t.length; i++) {
                                        var r = t[i];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, i, r) {
                                    return i && e(t.prototype, i), r && e(t, r), t;
                                };
                            })(),
                            o = function e(t, i, r) {
                                null === t && (t = Function.prototype);
                                var o = Object.getOwnPropertyDescriptor(t, i);
                                if (void 0 === o) {
                                    var n = Object.getPrototypeOf(t);
                                    return null === n ? void 0 : e(n, i, r);
                                }
                                if ('value' in o) return o.value;
                                var a = o.get;
                                return void 0 !== a ? a.call(r) : void 0;
                            },
                            n = (function (e) {
                                function t() {
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                        })(this, t),
                                        (function (e, t) {
                                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                enumerable: !1,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, e),
                                    r(t, [
                                        {
                                            key: 'bufferToOffset',
                                            value: function (e) {
                                                var t = this;
                                                return new Promise(function (i, r) {
                                                    if (t.eof || t.offset >= e) i();
                                                    else {
                                                        var o = null;
                                                        t._onAbort = function (e) {
                                                            o(), r(e);
                                                        };
                                                        var n = function () {
                                                                t.offset >= e && !t.eof && (o(), i());
                                                            },
                                                            a = function () {
                                                                o(), i();
                                                            },
                                                            s = function () {
                                                                o(), r(Error('error streaming'));
                                                            };
                                                        (o = function () {
                                                            (t.buffering = !1), t.off('buffer', n), t.off('done', a), t.off('error', s), (t._onAbort = null);
                                                        }),
                                                            (t.buffering = !0),
                                                            t.on('buffer', n),
                                                            t.on('done', a),
                                                            t.on('error', s);
                                                    }
                                                });
                                            }
                                        },
                                        {
                                            key: 'initXHR',
                                            value: function () {
                                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initXHR', this).call(this);
                                            }
                                        },
                                        {
                                            key: 'onXHRStart',
                                            value: function () {
                                                var e = this;
                                                this.xhr.addEventListener('progress', function () {
                                                    return e.onXHRProgress();
                                                }),
                                                    this.xhr.addEventListener('error', function () {
                                                        return e.onXHRError();
                                                    }),
                                                    this.xhr.addEventListener('load', function () {
                                                        return e.onXHRLoad();
                                                    }),
                                                    this.emit('open');
                                            }
                                        },
                                        {
                                            key: 'onXHRProgress',
                                            value: function () {
                                                throw Error('abstract');
                                            }
                                        },
                                        {
                                            key: 'onXHRError',
                                            value: function () {
                                                this.emit('error');
                                            }
                                        },
                                        {
                                            key: 'onXHRLoad',
                                            value: function () {
                                                (this.eof = !0), this.emit('done');
                                            }
                                        }
                                    ]),
                                    t
                                );
                            })(i(306));
                        e.exports = n;
                    },
                    761: (e, t, i) => {
                        var r = i(855),
                            o = i(810),
                            n = i(431),
                            a = null;
                        e.exports = function (e) {
                            if (!1 === e.progressive) return new n(e);
                            if ((a || (a = r.supported() ? r : o.supported() ? o : null), !a)) throw Error('No supported backend class');
                            return new a(e);
                        };
                    },
                    855: (e, t, i) => {
                        var r = (function () {
                                function e(e, t) {
                                    for (var i = 0; i < t.length; i++) {
                                        var r = t[i];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, i, r) {
                                    return i && e(t.prototype, i), r && e(t, r), t;
                                };
                            })(),
                            o = function e(t, i, r) {
                                null === t && (t = Function.prototype);
                                var o = Object.getOwnPropertyDescriptor(t, i);
                                if (void 0 === o) {
                                    var n = Object.getPrototypeOf(t);
                                    return null === n ? void 0 : e(n, i, r);
                                }
                                if ('value' in o) return o.value;
                                var a = o.get;
                                return void 0 !== a ? a.call(r) : void 0;
                            },
                            n = i(828),
                            a = 'moz-chunked-arraybuffer',
                            s = (function (e) {
                                function t() {
                                    return (
                                        (function (e, t) {
                                            if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                        })(this, t),
                                        (function (e, t) {
                                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                                    );
                                }
                                return (
                                    (function (e, t) {
                                        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                        (e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                enumerable: !1,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        })),
                                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                    })(t, e),
                                    r(t, [
                                        {
                                            key: 'initXHR',
                                            value: function () {
                                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initXHR', this).call(this), (this.xhr.responseType = a);
                                            }
                                        },
                                        {
                                            key: 'onXHRProgress',
                                            value: function () {
                                                var e = this.xhr.response;
                                                (this.bytesRead += e.byteLength), this.emit('buffer', e);
                                            }
                                        }
                                    ]),
                                    t
                                );
                            })(n);
                        (s.supported = function () {
                            try {
                                var e = new XMLHttpRequest();
                                return (e.responseType = a), e.responseType === a;
                            } catch (e) {
                                return !1;
                            }
                        }),
                            (e.exports = s);
                    },
                    503: (e) => {
                        var t = (function () {
                                function e(e, t) {
                                    for (var i = 0; i < t.length; i++) {
                                        var r = t[i];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, i, r) {
                                    return i && e(t.prototype, i), r && e(t, r), t;
                                };
                            })(),
                            i = (function () {
                                function e() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        i = t.buffer,
                                        r = void 0 === i ? void 0 : i,
                                        o = t.string,
                                        n = void 0 === o ? void 0 : o,
                                        a = t.start,
                                        s = void 0 === a ? 0 : a,
                                        u = t.end,
                                        d = void 0 === u ? s + (r ? r.byteLength : n ? n.length : 0) : u,
                                        c = t.prev,
                                        h = t.next,
                                        f = t.eof,
                                        l = t.empty,
                                        _ = void 0 === l ? !(r || n) : l,
                                        p = t.timestamp,
                                        m = void 0 === p ? Date.now() : p;
                                    (function (e, t) {
                                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                    })(this, e),
                                        (this.start = s),
                                        (this.end = d),
                                        (this.prev = void 0 === c ? null : c),
                                        (this.next = void 0 === h ? null : h),
                                        (this.eof = void 0 !== f && f),
                                        (this.empty = _),
                                        (this.timestamp = m),
                                        (this.buffer = r),
                                        (this.string = n),
                                        Object.defineProperty(this, 'length', {
                                            get: function () {
                                                return this.end - this.start;
                                            }
                                        });
                                }
                                return (
                                    t(e, [
                                        {
                                            key: 'contains',
                                            value: function (e) {
                                                return e >= this.start && (e < this.end || this.eof);
                                            }
                                        },
                                        {
                                            key: 'readBytes',
                                            value: function (e, t, i) {
                                                var r = t - this.start,
                                                    o = i - t;
                                                if (this.buffer) {
                                                    var n = new Uint8Array(this.buffer, r, o);
                                                    e.set(n);
                                                } else {
                                                    if (!this.string) throw Error('invalid state');
                                                    for (var a = this.string, s = 0; s < o; s++) e[s] = a.charCodeAt(r + s);
                                                }
                                                this.timestamp = Date.now();
                                            }
                                        },
                                        {
                                            key: 'split',
                                            value: function (t) {
                                                if (!this.empty || !this.contains(t)) throw Error('invalid split');
                                                var i = new e({
                                                        start: this.start,
                                                        end: t
                                                    }),
                                                    r = new e({
                                                        start: t,
                                                        end: this.eof ? t : this.end,
                                                        eof: this.eof
                                                    });
                                                return (i.next = r), (r.prev = i), [i, r];
                                            }
                                        },
                                        {
                                            key: 'first',
                                            value: function (e) {
                                                for (var t = this; t; t = t.next) if (e(t)) return t;
                                                return null;
                                            }
                                        },
                                        {
                                            key: 'last',
                                            value: function (e) {
                                                for (var t = null, i = this; i && e(i); i = i.next) t = i;
                                                return t;
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();
                        e.exports = i;
                    },
                    91: (e, t, i) => {
                        var r = (function () {
                                function e(e, t) {
                                    for (var i = 0; i < t.length; i++) {
                                        var r = t[i];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, i, r) {
                                    return i && e(t.prototype, i), r && e(t, r), t;
                                };
                            })(),
                            o = i(503),
                            n = (function () {
                                function e() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        i = t.cacheSize;
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                    })(this, e);
                                    var r = new o({ eof: !0 });
                                    (this.head = r), (this.tail = r), (this.readOffset = 0), (this.readCursor = r), (this.writeOffset = 0), (this.writeCursor = r), (this.cacheSize = void 0 === i ? 0 : i);
                                }
                                return (
                                    r(e, [
                                        {
                                            key: 'bytesReadable',
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                                                    t = this.readOffset,
                                                    i = this.readCursor.last(function (i) {
                                                        return !i.empty && i.start <= t + e;
                                                    });
                                                return i ? Math.min(e, i.end - t) : 0;
                                            }
                                        },
                                        {
                                            key: 'bytesWritable',
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                                                    t = this.writeOffset,
                                                    i = this.writeCursor;
                                                if (i.eof) return e;
                                                var r = i.last(function (i) {
                                                    return i.empty && i.start <= t + e;
                                                });
                                                return r ? Math.min(e, r.end - t) : 0;
                                            }
                                        },
                                        {
                                            key: 'seekRead',
                                            value: function (e) {
                                                var t = this.head.first(function (t) {
                                                    return t.contains(e);
                                                });
                                                if (!t) throw Error('read seek out of range');
                                                (this.readOffset = e), (this.readCursor = t);
                                            }
                                        },
                                        {
                                            key: 'seekWrite',
                                            value: function (e) {
                                                var t = this.head.first(function (t) {
                                                    return t.contains(e);
                                                });
                                                if (!t) throw Error('write seek out of range');
                                                (this.writeOffset = e), (this.writeCursor = t);
                                            }
                                        },
                                        {
                                            key: 'readBytes',
                                            value: function (e) {
                                                for (var t = e.byteLength, i = this.bytesReadable(t), r = this.readOffset, o = r + i, n = r, a = this.readCursor; a && !a.empty && !(a.start >= o); a = a.next) {
                                                    var s = Math.min(o, a.end),
                                                        u = e.subarray(n - r, s - r);
                                                    a.readBytes(u, n, s), (n = s);
                                                }
                                                return (
                                                    (this.readOffset = n),
                                                    (this.readCursor = this.readCursor.first(function (e) {
                                                        return e.contains(n);
                                                    })),
                                                    i
                                                );
                                            }
                                        },
                                        {
                                            key: 'write',
                                            value: function (e) {
                                                var t = this.bufferItem(e),
                                                    i = this.writeCursor;
                                                if (!i.empty) throw Error('write cursor not empty');
                                                if (!i.contains(t.end) && i.end !== t.end) throw Error('write cursor too small');
                                                i.start < t.start && (this.split(i, t.start), (i = this.writeCursor)), (t.end < i.end || i.eof) && (this.split(i, t.end), (i = this.writeCursor)), this.splice(i, i, t, t), (this.writeOffset = t.end), (this.writeCursor = t.next), this.gc();
                                            }
                                        },
                                        {
                                            key: 'bufferItem',
                                            value: function (e) {
                                                if (e instanceof ArrayBuffer)
                                                    return new o({
                                                        start: this.writeOffset,
                                                        end: this.writeOffset + e.byteLength,
                                                        buffer: e
                                                    });
                                                if ('string' == typeof e)
                                                    return new o({
                                                        start: this.writeOffset,
                                                        end: this.writeOffset + e.length,
                                                        string: e
                                                    });
                                                throw Error('invalid input to write');
                                            }
                                        },
                                        {
                                            key: 'split',
                                            value: function (e, t) {
                                                var i = e.split(t);
                                                this.splice(e, e, i[0], i[1]);
                                            }
                                        },
                                        {
                                            key: 'ranges',
                                            value: function () {
                                                for (var e = [], t = this.head; t; t = t.next)
                                                    if (!t.empty) {
                                                        var i = t;
                                                        (t = t.last(function (e) {
                                                            return !e.empty;
                                                        })),
                                                            e.push([i.start, t.end]);
                                                    }
                                                return e;
                                            }
                                        },
                                        {
                                            key: 'gc',
                                            value: function () {
                                                for (var e = 0, t = [], i = this.head; i; i = i.next) i.empty || ((e += i.length), (i.end < this.readOffset || i.start > this.readOffset + this.chunkSize) && t.push(i));
                                                if (e > this.cacheSize) {
                                                    t.sort(function (e, t) {
                                                        return e.timestamp - t.timestamp;
                                                    });
                                                    for (var r = 0; r < t.length; r++) {
                                                        var o = t[r];
                                                        if (e <= this.cacheSize) break;
                                                        this.remove(o), (e -= o.length);
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            key: 'remove',
                                            value: function (e) {
                                                var t = new o({
                                                    start: e.start,
                                                    end: e.end
                                                });
                                                this.splice(e, e, t, t), (e = t).prev && e.prev.empty && (e = this.consolidate(e.prev)), e.next && e.next.empty && !e.next.eof && (e = this.consolidate(e)), 0 === e.start && (this.head = e);
                                            }
                                        },
                                        {
                                            key: 'consolidate',
                                            value: function (e) {
                                                var t = e.last(function (e) {
                                                        return e.empty && !e.eof;
                                                    }),
                                                    i = new o({
                                                        start: e.start,
                                                        end: t.end
                                                    });
                                                return this.splice(e, t, i, i), i;
                                            }
                                        },
                                        {
                                            key: 'splice',
                                            value: function (e, t, i, r) {
                                                var o = this;
                                                if (e.start !== i.start) throw Error('invalid splice head');
                                                if (!(t.end === r.end || (t.eof && r.eof))) throw Error('invalid splice tail');
                                                var n = e.prev,
                                                    a = t.next;
                                                (e.prev = null),
                                                    (t.next = null),
                                                    n && ((n.next = i), (i.prev = n)),
                                                    a && ((a.prev = r), (r.next = a)),
                                                    e === this.head && (this.head = i),
                                                    t === this.tail && (this.tail = r),
                                                    (this.readCursor = this.head.first(function (e) {
                                                        return e.contains(o.readOffset);
                                                    })),
                                                    (this.writeCursor = this.head.first(function (e) {
                                                        return e.contains(o.writeOffset);
                                                    }));
                                            }
                                        },
                                        {
                                            key: 'eof',
                                            get: function () {
                                                return this.readCursor.eof;
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();
                        e.exports = n;
                    },
                    814: (e, t, i) => {
                        e.exports = i(91);
                    },
                    566: (e) => {
                        var t = (function () {
                                function e(e, t) {
                                    for (var i = 0; i < t.length; i++) {
                                        var r = t[i];
                                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                    }
                                }
                                return function (t, i, r) {
                                    return i && e(t.prototype, i), r && e(t, r), t;
                                };
                            })(),
                            i = (function () {
                                function e() {
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                    })(this, e),
                                        (this._e = {});
                                }
                                return (
                                    t(e, [
                                        {
                                            key: 'on',
                                            value: function (e, t) {
                                                (this._e[e] || (this._e[e] = [])).push(t);
                                            }
                                        },
                                        {
                                            key: 'off',
                                            value: function (e, t) {
                                                var i = this._e[e] || [],
                                                    r = i.indexOf(t);
                                                t >= 0 && i.splice(r, 1);
                                            }
                                        },
                                        {
                                            key: 'emit',
                                            value: function (e, t) {
                                                (this._e[e] || []).slice().forEach(function (e) {
                                                    return e(t);
                                                });
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();
                        e.exports = i;
                    },
                    936: (e, t, i) => {
                        var r = (function () {
                            function e(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, i, r) {
                                return i && e(t.prototype, i), r && e(t, r), t;
                            };
                        })();
                        i(566);
                        var o = i(814),
                            n = i(761),
                            a = (function () {
                                function e(t) {
                                    var i = t.url,
                                        r = t.chunkSize,
                                        n = t.cacheSize,
                                        a = t.progressive;
                                    !(function (e, t) {
                                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                                    })(this, e),
                                        (this.length = -1),
                                        (this.loaded = !1),
                                        (this.loading = !1),
                                        (this.seekable = !1),
                                        (this.buffering = !1),
                                        (this.seeking = !1),
                                        (this.progressive = void 0 === a || a),
                                        Object.defineProperties(this, {
                                            offset: {
                                                get: function () {
                                                    return this._cache.readOffset;
                                                }
                                            },
                                            eof: {
                                                get: function () {
                                                    return this.length === this._cache.readOffset;
                                                }
                                            }
                                        }),
                                        (this.url = void 0 === i ? '' : i),
                                        (this.headers = {}),
                                        (this._cache = new o({ cacheSize: void 0 === n ? 0 : n })),
                                        (this._backend = null),
                                        (this._cachever = 0),
                                        (this._chunkSize = void 0 === r ? 1048576 : r);
                                }
                                return (
                                    r(e, [
                                        {
                                            key: 'load',
                                            value: function () {
                                                var e = this;
                                                return new Promise(function (t, i) {
                                                    if (e.loading) throw Error('cannot load when loading');
                                                    if (e.loaded) throw Error('cannot load when loaded');
                                                    (e.loading = !0),
                                                        e
                                                            ._openBackend()
                                                            .then(function (i) {
                                                                (e.seekable = i.seekable), (e.headers = i.headers), (e.length = i.length), (e.loaded = !0), (e.loading = !1), t();
                                                            })
                                                            .catch(function (t) {
                                                                'AbortError' !== t.name && (e.loading = !1), i(t);
                                                            });
                                                });
                                            }
                                        },
                                        {
                                            key: '_openBackend',
                                            value: function () {
                                                var e = this;
                                                return new Promise(function (t, i) {
                                                    if (e._backend) t(e._backend);
                                                    else if (e.eof) i(Error('cannot open at end of file'));
                                                    else {
                                                        var r = e._cache,
                                                            o = e._chunkSize,
                                                            a = r.bytesReadable(o),
                                                            s = r.readOffset + a;
                                                        if ((r.seekWrite(s), e.length >= 0 && s >= e.length)) return void t(null);
                                                        var u = e._clampToLength(r.writeOffset + r.bytesWritable(o)) - r.writeOffset;
                                                        if (0 === u) t(null);
                                                        else {
                                                            var d = (e._backend = new n({
                                                                    url: e.url,
                                                                    offset: e._cache.writeOffset,
                                                                    length: u,
                                                                    cachever: e._cachever,
                                                                    progressive: e.progressive
                                                                })),
                                                                c = null,
                                                                h = function () {
                                                                    d !== e._backend
                                                                        ? (c(), i(Error('invalid state')))
                                                                        : (d.on('buffer', function (t) {
                                                                              d === e._backend && e._cache.write(t);
                                                                          }),
                                                                          d.on('done', function () {
                                                                              d === e._backend && (-1 === e.length && (e.length = e._backend.offset + e._backend.bytesRead), (e._backend = null));
                                                                          }),
                                                                          t(d));
                                                                },
                                                                f = function (t) {
                                                                    d !== e._backend ? i(Error('invalid state')) : ((e._backend = null), i(t));
                                                                };
                                                            (c = function () {
                                                                d.off('open', h), d.off('error', f);
                                                            }),
                                                                d.on('open', h),
                                                                d.on('error', f),
                                                                d.on('cachever', function () {
                                                                    e._cachever++;
                                                                }),
                                                                d.load();
                                                        }
                                                    }
                                                });
                                            }
                                        },
                                        {
                                            key: '_readAhead',
                                            value: function () {
                                                var e = this;
                                                return new Promise(function (t, i) {
                                                    e._backend || e.eof
                                                        ? t()
                                                        : e
                                                              ._openBackend()
                                                              .then(function () {
                                                                  t();
                                                              })
                                                              .catch(function (e) {
                                                                  i(e);
                                                              });
                                                });
                                            }
                                        },
                                        {
                                            key: 'seek',
                                            value: function (e) {
                                                var t = this;
                                                return new Promise(function (i, r) {
                                                    if (!t.loaded || t.buffering || t.seeking) throw Error('invalid state');
                                                    if (e !== (0 | e) || e < 0) throw Error('invalid input');
                                                    if (t.length >= 0 && e > t.length) throw Error('seek past end of file');
                                                    if (!t.seekable) throw Error('seek on non-seekable stream');
                                                    t._backend && t.abort(), t._cache.seekRead(e), t._cache.seekWrite(e), t._readAhead().then(i).catch(r);
                                                });
                                            }
                                        },
                                        {
                                            key: 'read',
                                            value: function (e) {
                                                var t = this;
                                                return this.buffer(e).then(function (e) {
                                                    return t.readSync(e);
                                                });
                                            }
                                        },
                                        {
                                            key: 'readSync',
                                            value: function (e) {
                                                var t = this.bytesAvailable(e),
                                                    i = new Uint8Array(t);
                                                if (this.readBytes(i) !== t) throw Error('failed to read expected data');
                                                return i.buffer;
                                            }
                                        },
                                        {
                                            key: 'readBytes',
                                            value: function (e) {
                                                if (!this.loaded || this.buffering || this.seeking) throw Error('invalid state');
                                                if (!(e instanceof Uint8Array)) throw Error('invalid input');
                                                var t = this._cache.readBytes(e);
                                                return this._readAhead(), t;
                                            }
                                        },
                                        {
                                            key: 'buffer',
                                            value: function (e) {
                                                var t = this;
                                                return new Promise(function (i, r) {
                                                    if (!t.loaded || t.buffering || t.seeking) throw Error('invalid state');
                                                    if (e !== (0 | e) || e < 0) throw Error('invalid input');
                                                    var o = t._clampToLength(t.offset + e),
                                                        n = o - t.offset,
                                                        a = t.bytesAvailable(n);
                                                    a >= n
                                                        ? i(a)
                                                        : ((t.buffering = !0),
                                                          t
                                                              ._openBackend()
                                                              .then(function (i) {
                                                                  return i
                                                                      ? i.bufferToOffset(o).then(function () {
                                                                            return (t.buffering = !1), t.buffer(e);
                                                                        })
                                                                      : Promise.resolve(a);
                                                              })
                                                              .then(function (e) {
                                                                  (t.buffering = !1), i(e);
                                                              })
                                                              .catch(function (e) {
                                                                  'AbortError' !== e.name && (t.buffering = !1), r(e);
                                                              }));
                                                });
                                            }
                                        },
                                        {
                                            key: 'bytesAvailable',
                                            value: function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                                                return this._cache.bytesReadable(e);
                                            }
                                        },
                                        {
                                            key: 'abort',
                                            value: function () {
                                                this.loading && (this.loading = !1), this.buffering && (this.buffering = !1), this.seeking && (this.seeking = !1), this._backend && (this._backend.abort(), (this._backend = null));
                                            }
                                        },
                                        {
                                            key: 'getBufferedRanges',
                                            value: function () {
                                                return this._cache.ranges();
                                            }
                                        },
                                        {
                                            key: '_clampToLength',
                                            value: function (e) {
                                                return this.length < 0 ? e : Math.min(this.length, e);
                                            }
                                        }
                                    ]),
                                    e
                                );
                            })();
                        e.exports = a;
                    },
                    302: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = 'data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU5LjE2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAAEEwCZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ//////////////////////////////////////////////////////////////////8AAAAATGF2YzU5LjE4AAAAAAAAAAAAAAAAJAZAAAAAAAAABBMIw3vfAAAAAAAAAAAAAAAAAAAAAP/7kGQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=';
                    },
                    826: (e) => {
                        e.exports = {
                            vertex: 'precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n',
                            fragment: '// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n',
                            vertexStripe: 'precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n',
                            fragmentStripe: "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n"
                        };
                    },
                    487: (e) => {
                        !(function () {
                            function t(e, t) {
                                throw Error('abstract');
                            }
                            (t.prototype.drawFrame = function (e) {
                                throw Error('abstract');
                            }),
                                (t.prototype.clear = function () {
                                    throw Error('abstract');
                                }),
                                (e.exports = t);
                        })();
                    },
                    926: (e, t, i) => {
                        !(function () {
                            var t = i(487),
                                r = i(627);
                            function o(e) {
                                var t = e.getContext('2d'),
                                    i = null,
                                    o = null,
                                    n = null;
                                return (
                                    (this.drawFrame = function (a) {
                                        var s,
                                            u,
                                            d = a.format;
                                        (e.width === d.displayWidth && e.height === d.displayHeight) || ((e.width = d.displayWidth), (e.height = d.displayHeight)),
                                            (null !== i && i.width == d.width && i.height == d.height) ||
                                                (function (e, r) {
                                                    for (var o = (i = t.createImageData(e, r)).data, n = e * r * 4, a = 0; a < n; a += 4) o[a + 3] = 255;
                                                })(d.width, d.height),
                                            r.convertYCbCr(a, i.data);
                                        var c,
                                            h = d.cropWidth != d.displayWidth || d.cropHeight != d.displayHeight;
                                        h ? (o || ((s = d.cropWidth), (u = d.cropHeight), ((o = document.createElement('canvas')).width = s), (o.height = u), (n = o.getContext('2d'))), (c = n)) : (c = t), c.putImageData(i, -d.cropLeft, -d.cropTop, d.cropLeft, d.cropTop, d.cropWidth, d.cropHeight), h && t.drawImage(o, 0, 0, d.displayWidth, d.displayHeight);
                                    }),
                                    (this.clear = function () {
                                        t.clearRect(0, 0, e.width, e.height);
                                    }),
                                    this
                                );
                            }
                            (o.prototype = Object.create(t.prototype)), (e.exports = o);
                        })();
                    },
                    895: (e, t, i) => {
                        !(function () {
                            var t = i(487),
                                r = i(826);
                            function o(e) {
                                var t,
                                    i,
                                    n = this,
                                    a = o.contextForCanvas(e);
                                if (null === a) throw Error('WebGL unavailable');
                                function s(e, t) {
                                    var i = a.createShader(e);
                                    if ((a.shaderSource(i, t), a.compileShader(i), !a.getShaderParameter(i, a.COMPILE_STATUS))) {
                                        var r = a.getShaderInfoLog(i);
                                        throw (a.deleteShader(i), Error('GL shader compilation for ' + e + ' failed: ' + r));
                                    }
                                    return i;
                                }
                                var u,
                                    d,
                                    c,
                                    h,
                                    f,
                                    l,
                                    _,
                                    p,
                                    m,
                                    V,
                                    v = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                                    g = {},
                                    y = {},
                                    b = {};
                                function T(e, t) {
                                    return (g[e] && !t) || (g[e] = a.createTexture()), g[e];
                                }
                                function A(e, t, i, r, n) {
                                    var s = !g[e] || t,
                                        u = T(e, t);
                                    if ((a.activeTexture(a.TEXTURE0), o.stripe)) {
                                        var d = !g[e + '_temp'] || t,
                                            c = T(e + '_temp', t);
                                        a.bindTexture(a.TEXTURE_2D, c), d ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, i / 4, r, 0, a.RGBA, a.UNSIGNED_BYTE, n)) : a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, i / 4, r, a.RGBA, a.UNSIGNED_BYTE, n);
                                        var h = g[e + '_stripe'],
                                            f = !h || t;
                                        f && (h = T(e + '_stripe', t)),
                                            a.bindTexture(a.TEXTURE_2D, h),
                                            f &&
                                                (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                                                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                                                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST),
                                                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST),
                                                a.texImage2D(
                                                    a.TEXTURE_2D,
                                                    0,
                                                    a.RGBA,
                                                    i,
                                                    1,
                                                    0,
                                                    a.RGBA,
                                                    a.UNSIGNED_BYTE,
                                                    (function (e) {
                                                        if (b[e]) return b[e];
                                                        for (var t = new Uint32Array(e), i = 0; i < e; i += 4) (t[i] = 255), (t[i + 1] = 65280), (t[i + 2] = 16711680), (t[i + 3] = 4278190080);
                                                        return (b[e] = new Uint8Array(t.buffer));
                                                    })(i)
                                                ));
                                    } else a.bindTexture(a.TEXTURE_2D, u), s ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texImage2D(a.TEXTURE_2D, 0, a.ALPHA, i, r, 0, a.ALPHA, a.UNSIGNED_BYTE, n)) : a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, i, r, a.ALPHA, a.UNSIGNED_BYTE, n);
                                }
                                function k(e, t, r, o) {
                                    var n = g[e];
                                    a.useProgram(i);
                                    var s = y[e];
                                    (s && !t) || (a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, n), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, r, o, 0, a.RGBA, a.UNSIGNED_BYTE, null), (s = y[e] = a.createFramebuffer())), a.bindFramebuffer(a.FRAMEBUFFER, s), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, n, 0);
                                    var _ = g[e + '_temp'];
                                    a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, _), a.uniform1i(l, 1);
                                    var p = g[e + '_stripe'];
                                    a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, p), a.uniform1i(f, 2), a.bindBuffer(a.ARRAY_BUFFER, u), a.enableVertexAttribArray(d), a.vertexAttribPointer(d, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, c), a.enableVertexAttribArray(h), a.vertexAttribPointer(h, 2, a.FLOAT, !1, 0, 0), a.viewport(0, 0, r, o), a.drawArrays(a.TRIANGLES, 0, v.length / 2), a.bindFramebuffer(a.FRAMEBUFFER, null);
                                }
                                function E(e, i, r) {
                                    a.activeTexture(i), a.bindTexture(a.TEXTURE_2D, g[e]), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.uniform1i(a.getUniformLocation(t, e), r);
                                }
                                function P(e, t) {
                                    var i = s(a.VERTEX_SHADER, e),
                                        r = s(a.FRAGMENT_SHADER, t),
                                        o = a.createProgram();
                                    if ((a.attachShader(o, i), a.attachShader(o, r), a.linkProgram(o), !a.getProgramParameter(o, a.LINK_STATUS))) {
                                        var n = a.getProgramInfoLog(o);
                                        throw (a.deleteProgram(o), Error('GL program linking failed: ' + n));
                                    }
                                    return o;
                                }
                                return (
                                    (n.drawFrame = function (s) {
                                        var g = s.format,
                                            y = !t || e.width !== g.displayWidth || e.height !== g.displayHeight;
                                        if (
                                            (y && ((e.width = g.displayWidth), (e.height = g.displayHeight), n.clear()),
                                            t ||
                                                (function () {
                                                    if (o.stripe) {
                                                        (i = P(r.vertexStripe, r.fragmentStripe)), a.getAttribLocation(i, 'aPosition'), (c = a.createBuffer());
                                                        var e = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
                                                        a.bindBuffer(a.ARRAY_BUFFER, c), a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW), (h = a.getAttribLocation(i, 'aTexturePosition')), (f = a.getUniformLocation(i, 'uStripe')), (l = a.getUniformLocation(i, 'uTexture'));
                                                    }
                                                    (t = P(r.vertex, r.fragment)), (u = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, u), a.bufferData(a.ARRAY_BUFFER, v, a.STATIC_DRAW), (d = a.getAttribLocation(t, 'aPosition')), (_ = a.createBuffer()), (p = a.getAttribLocation(t, 'aLumaPosition')), (m = a.createBuffer()), (V = a.getAttribLocation(t, 'aChromaPosition'));
                                                })(),
                                            y)
                                        ) {
                                            var b = function (e, t, i) {
                                                var r = g.cropLeft / i,
                                                    o = (g.cropLeft + g.cropWidth) / i,
                                                    n = (g.cropTop + g.cropHeight) / g.height,
                                                    s = g.cropTop / g.height,
                                                    u = new Float32Array([r, n, o, n, r, s, r, s, o, n, o, s]);
                                                a.bindBuffer(a.ARRAY_BUFFER, e), a.bufferData(a.ARRAY_BUFFER, u, a.STATIC_DRAW);
                                            };
                                            b(_, 0, s.y.stride), b(m, 0, (s.u.stride * g.width) / g.chromaWidth);
                                        }
                                        A('uTextureY', y, s.y.stride, g.height, s.y.bytes), A('uTextureCb', y, s.u.stride, g.chromaHeight, s.u.bytes), A('uTextureCr', y, s.v.stride, g.chromaHeight, s.v.bytes), o.stripe && (k('uTextureY', y, s.y.stride, g.height), k('uTextureCb', y, s.u.stride, g.chromaHeight), k('uTextureCr', y, s.v.stride, g.chromaHeight)), a.useProgram(t), a.viewport(0, 0, e.width, e.height), E('uTextureY', a.TEXTURE0, 0), E('uTextureCb', a.TEXTURE1, 1), E('uTextureCr', a.TEXTURE2, 2), a.bindBuffer(a.ARRAY_BUFFER, u), a.enableVertexAttribArray(d), a.vertexAttribPointer(d, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, _), a.enableVertexAttribArray(p), a.vertexAttribPointer(p, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, m), a.enableVertexAttribArray(V), a.vertexAttribPointer(V, 2, a.FLOAT, !1, 0, 0), a.drawArrays(a.TRIANGLES, 0, v.length / 2);
                                    }),
                                    (n.clear = function () {
                                        a.viewport(0, 0, e.width, e.height), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT);
                                    }),
                                    n.clear(),
                                    n
                                );
                            }
                            (o.stripe = !1),
                                (o.contextForCanvas = function (e) {
                                    var t = {
                                        preferLowPowerToHighPerformance: !0,
                                        powerPreference: 'low-power',
                                        failIfMajorPerformanceCaveat: !0,
                                        preserveDrawingBuffer: !0
                                    };
                                    return e.getContext('webgl', t) || e.getContext('experimental-webgl', t);
                                }),
                                (o.isAvailable = function () {
                                    var e,
                                        t = document.createElement('canvas');
                                    (t.width = 1), (t.height = 1);
                                    try {
                                        e = o.contextForCanvas(t);
                                    } catch (e) {
                                        return !1;
                                    }
                                    if (e) {
                                        var i = e.TEXTURE0,
                                            r = e.createTexture(),
                                            n = new Uint8Array(16),
                                            a = o.stripe ? 1 : 4,
                                            s = o.stripe ? e.RGBA : e.ALPHA,
                                            u = o.stripe ? e.NEAREST : e.LINEAR;
                                        return e.activeTexture(i), e.bindTexture(e.TEXTURE_2D, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, u), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, u), e.texImage2D(e.TEXTURE_2D, 0, s, a, 4, 0, s, e.UNSIGNED_BYTE, n), !e.getError();
                                    }
                                    return !1;
                                }),
                                (o.prototype = Object.create(t.prototype)),
                                (e.exports = o);
                        })();
                    },
                    627: (e, t, i) => {
                        var r;
                        (r = i(877)),
                            (e.exports = {
                                convertYCbCr: function (e, t) {
                                    var i = 0 | e.format.width,
                                        o = 0 | e.format.height,
                                        n = 0 | r(e.format.width / e.format.chromaWidth),
                                        a = 0 | r(e.format.height / e.format.chromaHeight),
                                        s = e.y.bytes,
                                        u = e.u.bytes,
                                        d = e.v.bytes,
                                        c = 0 | e.y.stride,
                                        h = 0 | e.u.stride,
                                        f = 0 | e.v.stride,
                                        l = i << 2,
                                        _ = 0,
                                        p = 0,
                                        m = 0,
                                        V = 0,
                                        v = 0,
                                        g = 0,
                                        y = 0,
                                        b = 0,
                                        T = 0,
                                        A = 0,
                                        k = 0,
                                        E = 0,
                                        P = 0,
                                        w = 0,
                                        x = 0,
                                        R = 0,
                                        F = 0,
                                        O = 0;
                                    if (1 == n && 1 == a)
                                        for (y = 0, b = l, O = 0, R = 0; R < o; R += 2) {
                                            for (m = ((p = (R * c) | 0) + c) | 0, V = (O * h) | 0, v = (O * f) | 0, x = 0; x < i; x += 2) (T = 0 | u[V++]), (E = (((409 * (A = 0 | d[v++])) | 0) - 57088) | 0), (P = (((100 * T) | 0) + ((208 * A) | 0) - 34816) | 0), (w = (((516 * T) | 0) - 70912) | 0), (k = (298 * s[p++]) | 0), (t[y] = (k + E) >> 8), (t[y + 1] = (k - P) >> 8), (t[y + 2] = (k + w) >> 8), (y += 4), (k = (298 * s[p++]) | 0), (t[y] = (k + E) >> 8), (t[y + 1] = (k - P) >> 8), (t[y + 2] = (k + w) >> 8), (y += 4), (k = (298 * s[m++]) | 0), (t[b] = (k + E) >> 8), (t[b + 1] = (k - P) >> 8), (t[b + 2] = (k + w) >> 8), (b += 4), (k = (298 * s[m++]) | 0), (t[b] = (k + E) >> 8), (t[b + 1] = (k - P) >> 8), (t[b + 2] = (k + w) >> 8), (b += 4);
                                            (y += l), (b += l), O++;
                                        }
                                    else for (g = 0, R = 0; R < o; R++) for (F = 0, _ = (R * c) | 0, V = ((O = R >> a) * h) | 0, v = (O * f) | 0, x = 0; x < i; x++) (T = 0 | u[V + (F = x >> n)]), (E = (((409 * (A = 0 | d[v + F])) | 0) - 57088) | 0), (P = (((100 * T) | 0) + ((208 * A) | 0) - 34816) | 0), (w = (((516 * T) | 0) - 70912) | 0), (k = (298 * s[_++]) | 0), (t[g] = (k + E) >> 8), (t[g + 1] = (k - P) >> 8), (t[g + 2] = (k + w) >> 8), (g += 4);
                                }
                            });
                    },
                    877: (e) => {
                        e.exports = function (e) {
                            for (var t = 0, i = e >> 1; 0 != i; ) (i >>= 1), t++;
                            if (e !== 1 << t) throw 'chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got ' + e;
                            return t;
                        };
                    },
                    731: (e, t, i) => {
                        var r, o, n;
                        (r = i(487)),
                            (o = i(926)),
                            (n = i(895)),
                            (e.exports = {
                                FrameSink: r,
                                SoftwareFrameSink: o,
                                WebGLFrameSink: n,
                                attach: function (e, t) {
                                    return ('webGL' in (t = t || {}) ? t.webGL : n.isAvailable()) ? new n(e, t) : new o(e, t);
                                }
                            });
                    }
                },
                c = {};
            function h(e) {
                var t = c[e];
                if (void 0 !== t) return t.exports;
                var i = (c[e] = { exports: {} });
                return d[e](i, i.exports, h), i.exports;
            }
            (h.d = (e, t) => {
                for (var i in t)
                    h.o(t, i) &&
                        !h.o(e, i) &&
                        Object.defineProperty(e, i, {
                            enumerable: !0,
                            get: t[i]
                        });
            }),
                (h.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (h.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var f = {};
            return (
                (e = h(318)),
                Object.defineProperty(f, '__esModule', { value: !0 }),
                Object.defineProperty(f, 'OGVCompat', {
                    enumerable: !0,
                    get: function () {
                        return i.default;
                    }
                }),
                Object.defineProperty(f, 'OGVLoader', {
                    enumerable: !0,
                    get: function () {
                        return r.default;
                    }
                }),
                Object.defineProperty(f, 'OGVMediaError', {
                    enumerable: !0,
                    get: function () {
                        return o.default;
                    }
                }),
                Object.defineProperty(f, 'OGVMediaType', {
                    enumerable: !0,
                    get: function () {
                        return n.default;
                    }
                }),
                Object.defineProperty(f, 'OGVPlayer', {
                    enumerable: !0,
                    get: function () {
                        return a.default;
                    }
                }),
                Object.defineProperty(f, 'OGVTimeRanges', {
                    enumerable: !0,
                    get: function () {
                        return s.default;
                    }
                }),
                (f.OGVVersion = void 0),
                (t = e(h(8))),
                (i = e(h(523))),
                (r = e(h(964))),
                (o = e(h(759))),
                (n = e(h(278))),
                (a = e(h(869))),
                (s = e(h(168))),
                (u = '1.8.9-20220406232920-cb5f7ff'),
                (f.OGVVersion = u),
                'object' === ('undefined' == typeof window ? 'undefined' : (0, t.default)(window)) && ((window.OGVCompat = i.default), (window.OGVLoader = r.default), (window.OGVMediaError = o.default), (window.OGVMediaType = n.default), (window.OGVTimeRanges = s.default), (window.OGVPlayer = a.default), (window.OGVVersion = u)),
                f
            );
        })();
    }),
    (e.exports = i());
