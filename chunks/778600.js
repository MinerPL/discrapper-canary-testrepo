let n;
r.d(t, {
	m: function () {
		return v;
	}
});
var a,
	o,
	i,
	_ = r(507690),
	E = r(151122);
((a = i || (i = {}))[(a.Document = 0)] = 'Document'), (a[(a.DocumentType = 1)] = 'DocumentType'), (a[(a.Element = 2)] = 'Element'), (a[(a.Text = 3)] = 'Text'), (a[(a.CDATA = 4)] = 'CDATA'), (a[(a.Comment = 5)] = 'Comment');
function s(e, t, r = 1 / 0, n = 0) {
	return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : s(e.parentNode, t, r, n + 1);
}
function c(e, t) {
	return (r) => {
		if (null === r) return !1;
		try {
			if (e) {
				if ('string' == typeof e) {
					if (r.matches(`.${e}`)) return !0;
				} else if (
					(function (e, t) {
						for (let r = e.classList.length; r--; ) {
							let n = e.classList[r];
							if (t.test(n)) return !0;
						}
						return !1;
					})(r, e)
				)
					return !0;
			}
			if (t && r.matches(t)) return !0;
			return !1;
		} catch (e) {
			return !1;
		}
	};
}
let I = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
	u = {
		map: {},
		getId: () => (console.error(I), -1),
		getNode: () => (console.error(I), null),
		removeNodeFromMap() {
			console.error(I);
		},
		has: () => (console.error(I), !1),
		reset() {
			console.error(I);
		}
	};
function l(e, t, r, n, a = window) {
	let o = a.Object.getOwnPropertyDescriptor(e, t);
	return (
		a.Object.defineProperty(
			e,
			t,
			n
				? r
				: {
						set(e) {
							p(() => {
								r.set.call(this, e);
							}, 0),
								o && o.set && o.set.call(this, e);
						}
					}
		),
		() => l(e, t, o || {}, !0)
	);
}
function R(e, t, r) {
	try {
		if (!(t in e)) return () => {};
		let n = e[t],
			a = r(n);
		return (
			'function' == typeof a &&
				((a.prototype = a.prototype || {}),
				Object.defineProperties(a, {
					__rrweb_original__: {
						enumerable: !1,
						value: n
					}
				})),
			(e[t] = a),
			() => {
				e[t] = n;
			}
		);
	} catch (e) {
		return () => {};
	}
}
'undefined' != typeof window && window.Proxy && window.Reflect && (u = new Proxy(u, { get: (e, t, r) => ('map' === t && console.error(I), Reflect.get(e, t, r)) })), /[1-9][0-9]{12}/.test(Date.now().toString());
function A(e, t, r, n, a) {
	var o;
	if (!e) return !1;
	let i = (o = e) ? (o.nodeType === o.ELEMENT_NODE ? o : o.parentElement) : null;
	if (!i) return !1;
	let _ = c(t, r);
	if (!a) {
		let e = n && i.matches(n);
		return _(i) && !e;
	}
	let E = s(i, _),
		I = -1;
	return !(E < 0) && (n && (I = s(i, c(null, n))), (!!(E > -1) && !!(I < 0)) || E < I);
}
let T = {};
function d(e) {
	let t = T[e];
	if (t) return t;
	let r = window.document,
		n = window[e];
	if (r && 'function' == typeof r.createElement)
		try {
			let t = r.createElement('iframe');
			(t.hidden = !0), r.head.appendChild(t);
			let a = t.contentWindow;
			a && a[e] && (n = a[e]), r.head.removeChild(t);
		} catch (e) {}
	return (T[e] = n.bind(window));
}
function N(...e) {
	return d('requestAnimationFrame')(...e);
}
function p(...e) {
	return d('setTimeout')(...e);
}
var O = (((o = O || {})[(o['2D'] = 0)] = '2D'), (o[(o.WebGL = 1)] = 'WebGL'), (o[(o.WebGL2 = 2)] = 'WebGL2'), o);
let f = (e) =>
	n
		? (...t) => {
				try {
					return e(...t);
				} catch (e) {
					if (n && !0 === n(e)) return () => {};
					throw e;
				}
			}
		: e;
for (var S = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', D = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256), L = 0; L < S.length; L++) D[S.charCodeAt(L)] = L;
var h = function (e) {
	var t,
		r = new Uint8Array(e),
		n = r.length,
		a = '';
	for (t = 0; t < n; t += 3) a += S[r[t] >> 2] + S[((3 & r[t]) << 4) | (r[t + 1] >> 4)] + S[((15 & r[t + 1]) << 2) | (r[t + 2] >> 6)] + S[63 & r[t + 2]];
	return n % 3 == 2 ? (a = a.substring(0, a.length - 1) + '=') : n % 3 == 1 && (a = a.substring(0, a.length - 2) + '=='), a;
};
let C = new Map(),
	g = (e, t, r) => {
		var n, a;
		let o;
		if (!e || !(P(e, t) || 'object' == typeof e)) return;
		let i = e.constructor.name;
		let _ = ((n = r), (a = i), !(o = C.get(n)) && ((o = new Map()), C.set(n, o)), !o.has(a) && o.set(a, []), o.get(a)),
			E = _.indexOf(e);
		return -1 === E && ((E = _.length), _.push(e)), E;
	},
	M = (e, t, r) =>
		e.map((e) =>
			(function e(t, r, n) {
				if (t instanceof Array) return t.map((t) => e(t, r, n));
				if (null === t);
				else if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray)
					return {
						rr_type: t.constructor.name,
						args: [Object.values(t)]
					};
				else if (t instanceof ArrayBuffer) {
					let e = t.constructor.name;
					return {
						rr_type: e,
						base64: h(t)
					};
				} else if (t instanceof DataView)
					return {
						rr_type: t.constructor.name,
						args: [e(t.buffer, r, n), t.byteOffset, t.byteLength]
					};
				else if (t instanceof HTMLImageElement) {
					let e = t.constructor.name,
						{ src: r } = t;
					return {
						rr_type: e,
						src: r
					};
				} else if (t instanceof HTMLCanvasElement)
					return {
						rr_type: 'HTMLImageElement',
						src: t.toDataURL()
					};
				else if (t instanceof ImageData)
					return {
						rr_type: t.constructor.name,
						args: [e(t.data, r, n), t.width, t.height]
					};
				else if (P(t, r) || 'object' == typeof t) {
					let e = t.constructor.name;
					return {
						rr_type: e,
						index: g(t, r, n)
					};
				}
				return t;
			})(e, t, r)
		),
	P = (e, t) => !!['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject', 'WebGLVertexArrayObjectOES'].filter((e) => 'function' == typeof t[e]).find((r) => e instanceof t[r]);
function m(e, t, r, n, a) {
	let o = [];
	try {
		let i = R(e.HTMLCanvasElement.prototype, 'getContext', function (e) {
			return function (o, ...i) {
				if (!A(this, t, r, n, !0)) {
					var _;
					let e = ((_ = o), 'experimental-webgl' === _ ? 'webgl' : _);
					if ((!('__context' in this) && (this.__context = e), a && ['webgl', 'webgl2'].includes(e))) {
						if (i[0] && 'object' == typeof i[0]) {
							let e = i[0];
							!e.preserveDrawingBuffer && (e.preserveDrawingBuffer = !0);
						} else i.splice(0, 1, { preserveDrawingBuffer: !0 });
					}
				}
				return e.apply(this, [o, ...i]);
			};
		});
		o.push(i);
	} catch (e) {
		console.error('failed to patch HTMLCanvasElement.prototype.getContext');
	}
	return () => {
		o.forEach((e) => e());
	};
}
function U(e, t, r, n, a, o, i, _) {
	let E = [];
	for (let i of Object.getOwnPropertyNames(e)) {
		if (!['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'].includes(i))
			try {
				if ('function' != typeof e[i]) continue;
				let s = R(e, i, function (e) {
					return function (...E) {
						let s = e.apply(this, E);
						if ((g(s, _, this), 'tagName' in this.canvas && !A(this.canvas, n, a, o, !0))) {
							let e = M(E, _, this),
								n = {
									type: t,
									property: i,
									args: e
								};
							r(this.canvas, n);
						}
						return s;
					};
				});
				E.push(s);
			} catch (a) {
				let n = l(e, i, {
					set(e) {
						r(this.canvas, {
							type: t,
							property: i,
							args: [e],
							setter: !0
						});
					}
				});
				E.push(n);
			}
	}
	return E;
}
class G {
	reset() {
		this.pendingCanvasMutations.clear(),
			this.restoreHandlers.forEach((e) => {
				try {
					e();
				} catch (e) {}
			}),
			(this.restoreHandlers = []),
			(this.windowsSet = new WeakSet()),
			(this.windows = []),
			(this.shadowDoms = new Set()),
			(0, _.x)([this, 'access', (e) => e.worker, 'optionalAccess', (e) => e.terminate, 'call', (e) => e()]),
			(this.worker = null),
			(this.snapshotInProgressMap = new Map()),
			((this.options.recordCanvas && 'number' == typeof this.options.sampling) || this.options.enableManualSnapshot) && (this.worker = this.initFPSWorker());
	}
	freeze() {
		this.frozen = !0;
	}
	unfreeze() {
		this.frozen = !1;
	}
	lock() {
		this.locked = !0;
	}
	unlock() {
		this.locked = !1;
	}
	constructor(e) {
		(this.pendingCanvasMutations = new Map()),
			(this.rafStamps = {
				latestId: 0,
				invokeId: null
			}),
			(this.shadowDoms = new Set()),
			(this.windowsSet = new WeakSet()),
			(this.windows = []),
			(this.restoreHandlers = []),
			(this.frozen = !1),
			(this.locked = !1),
			(this.snapshotInProgressMap = new Map()),
			(this.worker = null),
			(this.processMutation = (e, t) => {
				((this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(e) && this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t);
			});
		let { sampling: t = 'all', win: r, blockClass: a, blockSelector: o, unblockSelector: i, maxCanvasSize: _, recordCanvas: E, dataURLOptions: s, errorHandler: c } = e;
		if (((this.mutationCb = e.mutationCb), (this.mirror = e.mirror), (this.options = e), c)) n = c;
		if ((((E && 'number' == typeof t) || e.enableManualSnapshot) && (this.worker = this.initFPSWorker()), this.addWindow(r), e.enableManualSnapshot)) return;
		f(() => {
			E && 'all' === t && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), E && 'number' == typeof t && this.initCanvasFPSObserver(t, a, o, i, _, { dataURLOptions: s });
		})();
	}
	addWindow(e) {
		let { sampling: t = 'all', blockClass: r, blockSelector: n, unblockSelector: a, recordCanvas: o, enableManualSnapshot: i } = this.options;
		if (!this.windowsSet.has(e)) {
			if (i) {
				this.windowsSet.add(e), this.windows.push(new WeakRef(e));
				return;
			}
			f(() => {
				if ((o && 'all' === t && this.initCanvasMutationObserver(e, r, n, a), o && 'number' == typeof t)) {
					let t = m(e, r, n, a, !0);
					this.restoreHandlers.push(() => {
						t();
					});
				}
			})(),
				this.windowsSet.add(e),
				this.windows.push(new WeakRef(e));
		}
	}
	addShadowRoot(e) {
		this.shadowDoms.add(new WeakRef(e));
	}
	resetShadowRoots() {
		this.shadowDoms = new Set();
	}
	initFPSWorker() {
		let e = new Worker(
			(function () {
				let e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']);
				return URL.createObjectURL(e);
			})()
		);
		return (
			(e.onmessage = (e) => {
				let t = e.data,
					{ id: r } = t;
				if ((this.snapshotInProgressMap.set(r, !1), !('base64' in t))) return;
				let { base64: n, type: a, width: o, height: i } = t;
				this.mutationCb({
					id: r,
					type: O['2D'],
					commands: [
						{
							property: 'clearRect',
							args: [0, 0, o, i]
						},
						{
							property: 'drawImage',
							args: [
								{
									rr_type: 'ImageBitmap',
									args: [
										{
											rr_type: 'Blob',
											data: [
												{
													rr_type: 'ArrayBuffer',
													base64: n
												}
											],
											type: a
										}
									]
								},
								0,
								0,
								o,
								i
							]
						}
					]
				});
			}),
			e
		);
	}
	initCanvasFPSObserver(e, t, r, n, a, o) {
		let i = this.takeSnapshot(!1, e, t, r, n, a, o.dataURLOptions);
		this.restoreHandlers.push(() => {
			cancelAnimationFrame(i);
		});
	}
	initCanvasMutationObserver(e, t, r, n) {
		let a = m(e, t, r, n, !1),
			o = (function (e, t, r, n, a) {
				let o = [];
				for (let i of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype))
					try {
						if ('function' != typeof t.CanvasRenderingContext2D.prototype[i]) continue;
						let _ = R(t.CanvasRenderingContext2D.prototype, i, function (o) {
							return function (..._) {
								return (
									!A(this.canvas, r, n, a, !0) &&
										p(() => {
											let r = M(_, t, this);
											e(this.canvas, {
												type: O['2D'],
												property: i,
												args: r
											});
										}, 0),
									o.apply(this, _)
								);
							};
						});
						o.push(_);
					} catch (n) {
						let r = l(t.CanvasRenderingContext2D.prototype, i, {
							set(t) {
								e(this.canvas, {
									type: O['2D'],
									property: i,
									args: [t],
									setter: !0
								});
							}
						});
						o.push(r);
					}
				return () => {
					o.forEach((e) => e());
				};
			})(this.processMutation.bind(this), e, t, r, n),
			i = (function (e, t, r, n, a, o) {
				let i = [];
				return (
					i.push(...U(t.WebGLRenderingContext.prototype, O.WebGL, e, r, n, a, o, t)),
					void 0 !== t.WebGL2RenderingContext && i.push(...U(t.WebGL2RenderingContext.prototype, O.WebGL2, e, r, n, a, o, t)),
					() => {
						i.forEach((e) => e());
					}
				);
			})(this.processMutation.bind(this), e, t, r, n, this.mirror);
		this.restoreHandlers.push(() => {
			a(), o(), i();
		});
	}
	snapshot(e) {
		let { options: t } = this,
			r = this.takeSnapshot(!0, 'all' === t.sampling ? 2 : t.sampling || 2, t.blockClass, t.blockSelector, t.unblockSelector, t.maxCanvasSize, t.dataURLOptions, e);
		this.restoreHandlers.push(() => {
			cancelAnimationFrame(r);
		});
	}
	takeSnapshot(e, t, r, n, a, o, i, E) {
		let s;
		let c = 1000 / t,
			I = 0,
			u = (e) => {
				if (e) return [e];
				let t = [],
					o = (e) => {
						e.querySelectorAll('canvas').forEach((e) => {
							!A(e, r, n, a, !0) && t.push(e);
						});
					};
				for (let e of this.windows) {
					let t = e.deref();
					t && o(t.document);
				}
				for (let e of this.shadowDoms) {
					let t = e.deref();
					t && o(t);
				}
				return t;
			},
			l = (t) => {
				if (!!this.windows.length) {
					if (I && t - I < c) {
						s = N(l);
						return;
					}
					(I = t),
						u(E).forEach((t) => {
							if (!this.mirror.hasNode(t)) return;
							let r = this.mirror.getId(t);
							if (!this.snapshotInProgressMap.get(r)) {
								if (t.width && t.height) {
									if ((this.snapshotInProgressMap.set(r, !0), !e && ['webgl', 'webgl2'].includes(t.__context))) {
										let e = t.getContext(t.__context);
										!1 === (0, _.x)([e, 'optionalAccess', (e) => e.getContextAttributes, 'call', (e) => e(), 'optionalAccess', (e) => e.preserveDrawingBuffer]) && e.clear(e.COLOR_BUFFER_BIT);
									}
									createImageBitmap(t)
										.then((e) => {
											(0, _.x)([
												this,
												'access',
												(e) => e.worker,
												'optionalAccess',
												(e) => e.postMessage,
												'call',
												(n) =>
													n(
														{
															id: r,
															bitmap: e,
															width: t.width,
															height: t.height,
															dataURLOptions: i,
															maxCanvasSize: o
														},
														[e]
													)
											]);
										})
										.catch((e) => {
											f(() => {
												throw e;
											})();
										});
								}
							}
						}),
						(s = N(l));
				}
			};
		return (s = N(l));
	}
	startPendingCanvasMutationFlusher() {
		N(() => this.flushPendingCanvasMutations());
	}
	startRAFTimestamping() {
		let e = (t) => {
			(this.rafStamps.latestId = t), N(e);
		};
		N(e);
	}
	flushPendingCanvasMutations() {
		this.pendingCanvasMutations.forEach((e, t) => {
			let r = this.mirror.getId(t);
			this.flushPendingCanvasMutationFor(t, r);
		}),
			N(() => this.flushPendingCanvasMutations());
	}
	flushPendingCanvasMutationFor(e, t) {
		if (this.frozen || this.locked) return;
		let r = this.pendingCanvasMutations.get(e);
		if (!r || -1 === t) return;
		let n = r.map((e) => {
				let { type: t, ...r } = e;
				return r;
			}),
			{ type: a } = r[0];
		this.mutationCb({
			id: t,
			type: a,
			commands: n
		}),
			this.pendingCanvasMutations.delete(e);
	}
}
let y = {
		low: {
			sampling: { canvas: 1 },
			dataURLOptions: {
				type: 'image/webp',
				quality: 0.25
			}
		},
		medium: {
			sampling: { canvas: 2 },
			dataURLOptions: {
				type: 'image/webp',
				quality: 0.4
			}
		},
		high: {
			sampling: { canvas: 4 },
			dataURLOptions: {
				type: 'image/webp',
				quality: 0.5
			}
		}
	},
	v = (0, E._I)((e = {}) => {
		let t;
		let [r, n] = e.maxCanvasSize || [],
			a = {
				quality: e.quality || 'medium',
				enableManualSnapshot: e.enableManualSnapshot,
				maxCanvasSize: [r ? Math.min(r, 1280) : 1280, n ? Math.min(n, 1280) : 1280]
			},
			o = new Promise((e) => (t = e));
		return {
			name: 'ReplayCanvas',
			getOptions() {
				let { quality: e, enableManualSnapshot: r, maxCanvasSize: n } = a;
				return {
					enableManualSnapshot: r,
					recordCanvas: !0,
					getCanvasManager: (e) => {
						let a = new G({
							...e,
							enableManualSnapshot: r,
							maxCanvasSize: n,
							errorHandler: (e) => {
								try {
									'object' == typeof e && (e.__rrweb__ = !0);
								} catch (e) {}
							}
						});
						return t(a), a;
					},
					...(y[e || 'medium'] || y.medium)
				};
			},
			async snapshot(e) {
				(await o).snapshot(e);
			}
		};
	});
