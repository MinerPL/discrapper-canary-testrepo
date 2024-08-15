r.d(e, {
	_: function () {
		return N;
	}
});
var n,
	i,
	o = r(146150),
	a = r(827671),
	s = r(928125),
	u = r(387004),
	c = r(927882),
	l = r(944990),
	h = new RegExp('^'.concat(u.p.source, '*')),
	f = new RegExp(''.concat(u.p.source, '*$'));
function p(t, e) {
	return {
		start: t,
		end: e
	};
}
var d = !!String.prototype.startsWith && '_a'.startsWith('a', 1),
	m = !!String.fromCodePoint,
	v = !!Object.fromEntries,
	g = !!String.prototype.codePointAt,
	y = !!String.prototype.trimStart,
	b = !!String.prototype.trimEnd,
	E = Number.isSafeInteger
		? Number.isSafeInteger
		: function (t) {
				return 'number' == typeof t && isFinite(t) && Math.floor(t) === t && 9007199254740991 >= Math.abs(t);
			},
	T = !0;
try {
	var _ = B('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
	T = (null === (n = _.exec('a')) || void 0 === n ? void 0 : n[0]) === 'a';
} catch (t) {
	T = !1;
}
var A = d
		? function (t, e, r) {
				return t.startsWith(e, r);
			}
		: function (t, e, r) {
				return t.slice(r, r + e.length) === e;
			},
	I = m
		? String.fromCodePoint
		: function () {
				for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
				for (var n = '', i = e.length, o = 0; i > o; ) {
					if ((t = e[o++]) > 1114111) throw RangeError(t + ' is not a valid code point');
					n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10) + 55296, (t % 1024) + 56320);
				}
				return n;
			},
	S = v
		? Object.fromEntries
		: function (t) {
				for (var e = {}, r = 0; r < t.length; r++) {
					var n = t[r],
						i = n[0],
						o = n[1];
					e[i] = o;
				}
				return e;
			},
	L = g
		? function (t, e) {
				return t.codePointAt(e);
			}
		: function (t, e) {
				var r,
					n = t.length;
				if (!(e < 0) && !(e >= n)) {
					var i = t.charCodeAt(e);
					return i < 55296 || i > 56319 || e + 1 === n || (r = t.charCodeAt(e + 1)) < 56320 || r > 57343 ? i : ((i - 55296) << 10) + (r - 56320) + 65536;
				}
			},
	H = y
		? function (t) {
				return t.trimStart();
			}
		: function (t) {
				return t.replace(h, '');
			},
	P = b
		? function (t) {
				return t.trimEnd();
			}
		: function (t) {
				return t.replace(f, '');
			};
function B(t, e) {
	return new RegExp(t, e);
}
if (T) {
	var w = B('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
	i = function (t, e) {
		var r;
		return (w.lastIndex = e), null !== (r = w.exec(t)[1]) && void 0 !== r ? r : '';
	};
} else
	i = function (t, e) {
		for (var r = []; ; ) {
			var n = L(t, e);
			if (
				void 0 === n ||
				M(n) ||
				(function (t) {
					return (
						(t >= 33 && t <= 35) ||
						36 === t ||
						(t >= 37 && t <= 39) ||
						40 === t ||
						41 === t ||
						42 === t ||
						43 === t ||
						44 === t ||
						45 === t ||
						(t >= 46 && t <= 47) ||
						(t >= 58 && t <= 59) ||
						(t >= 60 && t <= 62) ||
						(t >= 63 && t <= 64) ||
						91 === t ||
						92 === t ||
						93 === t ||
						94 === t ||
						96 === t ||
						123 === t ||
						124 === t ||
						125 === t ||
						126 === t ||
						161 === t ||
						(t >= 162 && t <= 165) ||
						166 === t ||
						167 === t ||
						169 === t ||
						171 === t ||
						172 === t ||
						174 === t ||
						176 === t ||
						177 === t ||
						182 === t ||
						187 === t ||
						191 === t ||
						215 === t ||
						247 === t ||
						(t >= 8208 && t <= 8213) ||
						(t >= 8214 && t <= 8215) ||
						8216 === t ||
						8217 === t ||
						8218 === t ||
						(t >= 8219 && t <= 8220) ||
						8221 === t ||
						8222 === t ||
						8223 === t ||
						(t >= 8224 && t <= 8231) ||
						(t >= 8240 && t <= 8248) ||
						8249 === t ||
						8250 === t ||
						(t >= 8251 && t <= 8254) ||
						(t >= 8257 && t <= 8259) ||
						8260 === t ||
						8261 === t ||
						8262 === t ||
						(t >= 8263 && t <= 8273) ||
						8274 === t ||
						8275 === t ||
						(t >= 8277 && t <= 8286) ||
						(t >= 8592 && t <= 8596) ||
						(t >= 8597 && t <= 8601) ||
						(t >= 8602 && t <= 8603) ||
						(t >= 8604 && t <= 8607) ||
						8608 === t ||
						(t >= 8609 && t <= 8610) ||
						8611 === t ||
						(t >= 8612 && t <= 8613) ||
						8614 === t ||
						(t >= 8615 && t <= 8621) ||
						8622 === t ||
						(t >= 8623 && t <= 8653) ||
						(t >= 8654 && t <= 8655) ||
						(t >= 8656 && t <= 8657) ||
						8658 === t ||
						8659 === t ||
						8660 === t ||
						(t >= 8661 && t <= 8691) ||
						(t >= 8692 && t <= 8959) ||
						(t >= 8960 && t <= 8967) ||
						8968 === t ||
						8969 === t ||
						8970 === t ||
						8971 === t ||
						(t >= 8972 && t <= 8991) ||
						(t >= 8992 && t <= 8993) ||
						(t >= 8994 && t <= 9000) ||
						9001 === t ||
						9002 === t ||
						(t >= 9003 && t <= 9083) ||
						9084 === t ||
						(t >= 9085 && t <= 9114) ||
						(t >= 9115 && t <= 9139) ||
						(t >= 9140 && t <= 9179) ||
						(t >= 9180 && t <= 9185) ||
						(t >= 9186 && t <= 9254) ||
						(t >= 9255 && t <= 9279) ||
						(t >= 9280 && t <= 9290) ||
						(t >= 9291 && t <= 9311) ||
						(t >= 9472 && t <= 9654) ||
						9655 === t ||
						(t >= 9656 && t <= 9664) ||
						9665 === t ||
						(t >= 9666 && t <= 9719) ||
						(t >= 9720 && t <= 9727) ||
						(t >= 9728 && t <= 9838) ||
						9839 === t ||
						(t >= 9840 && t <= 10087) ||
						10088 === t ||
						10089 === t ||
						10090 === t ||
						10091 === t ||
						10092 === t ||
						10093 === t ||
						10094 === t ||
						10095 === t ||
						10096 === t ||
						10097 === t ||
						10098 === t ||
						10099 === t ||
						10100 === t ||
						10101 === t ||
						(t >= 10132 && t <= 10175) ||
						(t >= 10176 && t <= 10180) ||
						10181 === t ||
						10182 === t ||
						(t >= 10183 && t <= 10213) ||
						10214 === t ||
						10215 === t ||
						10216 === t ||
						10217 === t ||
						10218 === t ||
						10219 === t ||
						10220 === t ||
						10221 === t ||
						10222 === t ||
						10223 === t ||
						(t >= 10224 && t <= 10239) ||
						(t >= 10240 && t <= 10495) ||
						(t >= 10496 && t <= 10626) ||
						10627 === t ||
						10628 === t ||
						10629 === t ||
						10630 === t ||
						10631 === t ||
						10632 === t ||
						10633 === t ||
						10634 === t ||
						10635 === t ||
						10636 === t ||
						10637 === t ||
						10638 === t ||
						10639 === t ||
						10640 === t ||
						10641 === t ||
						10642 === t ||
						10643 === t ||
						10644 === t ||
						10645 === t ||
						10646 === t ||
						10647 === t ||
						10648 === t ||
						(t >= 10649 && t <= 10711) ||
						10712 === t ||
						10713 === t ||
						10714 === t ||
						10715 === t ||
						(t >= 10716 && t <= 10747) ||
						10748 === t ||
						10749 === t ||
						(t >= 10750 && t <= 11007) ||
						(t >= 11008 && t <= 11055) ||
						(t >= 11056 && t <= 11076) ||
						(t >= 11077 && t <= 11078) ||
						(t >= 11079 && t <= 11084) ||
						(t >= 11085 && t <= 11123) ||
						(t >= 11124 && t <= 11125) ||
						(t >= 11126 && t <= 11157) ||
						11158 === t ||
						(t >= 11159 && t <= 11263) ||
						(t >= 11776 && t <= 11777) ||
						11778 === t ||
						11779 === t ||
						11780 === t ||
						11781 === t ||
						(t >= 11782 && t <= 11784) ||
						11785 === t ||
						11786 === t ||
						11787 === t ||
						11788 === t ||
						11789 === t ||
						(t >= 11790 && t <= 11798) ||
						11799 === t ||
						(t >= 11800 && t <= 11801) ||
						11802 === t ||
						11803 === t ||
						11804 === t ||
						11805 === t ||
						(t >= 11806 && t <= 11807) ||
						11808 === t ||
						11809 === t ||
						11810 === t ||
						11811 === t ||
						11812 === t ||
						11813 === t ||
						11814 === t ||
						11815 === t ||
						11816 === t ||
						11817 === t ||
						(t >= 11818 && t <= 11822) ||
						11823 === t ||
						(t >= 11824 && t <= 11833) ||
						(t >= 11834 && t <= 11835) ||
						(t >= 11836 && t <= 11839) ||
						11840 === t ||
						11841 === t ||
						11842 === t ||
						(t >= 11843 && t <= 11855) ||
						(t >= 11856 && t <= 11857) ||
						11858 === t ||
						(t >= 11859 && t <= 11903) ||
						(t >= 12289 && t <= 12291) ||
						12296 === t ||
						12297 === t ||
						12298 === t ||
						12299 === t ||
						12300 === t ||
						12301 === t ||
						12302 === t ||
						12303 === t ||
						12304 === t ||
						12305 === t ||
						(t >= 12306 && t <= 12307) ||
						12308 === t ||
						12309 === t ||
						12310 === t ||
						12311 === t ||
						12312 === t ||
						12313 === t ||
						12314 === t ||
						12315 === t ||
						12316 === t ||
						12317 === t ||
						(t >= 12318 && t <= 12319) ||
						12320 === t ||
						12336 === t ||
						64830 === t ||
						64831 === t ||
						(t >= 65093 && t <= 65094)
					);
				})(n)
			)
				break;
			r.push(n), (e += n >= 65536 ? 2 : 1);
		}
		return I.apply(void 0, r);
	};
var N = (function () {
	function t(t, e) {
		void 0 === e && (e = {}),
			(this.message = t),
			(this.position = {
				offset: 0,
				line: 1,
				column: 1
			}),
			(this.ignoreTag = !!e.ignoreTag),
			(this.locale = e.locale),
			(this.requiresOtherClause = !!e.requiresOtherClause),
			(this.shouldParseSkeletons = !!e.shouldParseSkeletons);
	}
	return (
		(t.prototype.parse = function () {
			if (0 !== this.offset()) throw Error('parser can only be used once');
			return this.parseMessage(0, '', !1);
		}),
		(t.prototype.parseMessage = function (t, e, r) {
			for (var n = []; !this.isEOF(); ) {
				var i = this.char();
				if (123 === i) {
					var o = this.parseArgument(t, r);
					if (o.err) return o;
					n.push(o.val);
				} else if (125 === i && t > 0) break;
				else if (35 === i && ('plural' === e || 'selectordinal' === e)) {
					var u = this.clonePosition();
					this.bump(),
						n.push({
							type: s.wD.pound,
							location: p(u, this.clonePosition())
						});
				} else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
					if (60 === i && !this.ignoreTag && R(this.peek() || 0)) {
						var o = this.parseTag(t, e);
						if (o.err) return o;
						n.push(o.val);
					} else {
						var o = this.parseLiteral(t, e);
						if (o.err) return o;
						n.push(o.val);
					}
				} else {
					if (!r) return this.error(a.o.UNMATCHED_CLOSING_TAG, p(this.clonePosition(), this.clonePosition()));
					break;
				}
			}
			return {
				val: n,
				err: null
			};
		}),
		(t.prototype.parseTag = function (t, e) {
			var r = this.clonePosition();
			this.bump();
			var n = this.parseTagName();
			if ((this.bumpSpace(), this.bumpIf('/>')))
				return {
					val: {
						type: s.wD.literal,
						value: '<'.concat(n, '/>'),
						location: p(r, this.clonePosition())
					},
					err: null
				};
			if (!this.bumpIf('>')) return this.error(a.o.INVALID_TAG, p(r, this.clonePosition()));
			var i = this.parseMessage(t + 1, e, !0);
			if (i.err) return i;
			var o = i.val,
				u = this.clonePosition();
			if (!this.bumpIf('</')) return this.error(a.o.UNCLOSED_TAG, p(r, this.clonePosition()));
			if (this.isEOF() || !R(this.char())) return this.error(a.o.INVALID_TAG, p(u, this.clonePosition()));
			var c = this.clonePosition();
			return n !== this.parseTagName()
				? this.error(a.o.UNMATCHED_CLOSING_TAG, p(c, this.clonePosition()))
				: (this.bumpSpace(), this.bumpIf('>'))
					? {
							val: {
								type: s.wD.tag,
								value: n,
								children: o,
								location: p(r, this.clonePosition())
							},
							err: null
						}
					: this.error(a.o.INVALID_TAG, p(u, this.clonePosition()));
		}),
		(t.prototype.parseTagName = function () {
			var t = this.offset();
			for (
				this.bump();
				!this.isEOF() &&
				(function (t) {
					return 45 === t || 46 === t || (t >= 48 && t <= 57) || 95 === t || (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || 183 == t || (t >= 192 && t <= 214) || (t >= 216 && t <= 246) || (t >= 248 && t <= 893) || (t >= 895 && t <= 8191) || (t >= 8204 && t <= 8205) || (t >= 8255 && t <= 8256) || (t >= 8304 && t <= 8591) || (t >= 11264 && t <= 12271) || (t >= 12289 && t <= 55295) || (t >= 63744 && t <= 64975) || (t >= 65008 && t <= 65533) || (t >= 65536 && t <= 983039);
				})(this.char());

			)
				this.bump();
			return this.message.slice(t, this.offset());
		}),
		(t.prototype.parseLiteral = function (t, e) {
			for (var r = this.clonePosition(), n = ''; ; ) {
				var i = this.tryParseQuote(e);
				if (i) {
					n += i;
					continue;
				}
				var o = this.tryParseUnquoted(t, e);
				if (o) {
					n += o;
					continue;
				}
				var a = this.tryParseLeftAngleBracket();
				if (a) {
					n += a;
					continue;
				}
				break;
			}
			var u = p(r, this.clonePosition());
			return {
				val: {
					type: s.wD.literal,
					value: n,
					location: u
				},
				err: null
			};
		}),
		(t.prototype.tryParseLeftAngleBracket = function () {
			return !this.isEOF() &&
				60 === this.char() &&
				(this.ignoreTag ||
					!(function (t) {
						return R(t) || 47 === t;
					})(this.peek() || 0))
				? (this.bump(), '<')
				: null;
		}),
		(t.prototype.tryParseQuote = function (t) {
			if (this.isEOF() || 39 !== this.char()) return null;
			switch (this.peek()) {
				case 39:
					return this.bump(), this.bump(), "'";
				case 123:
				case 60:
				case 62:
				case 125:
					break;
				case 35:
					if ('plural' === t || 'selectordinal' === t) break;
					return null;
				default:
					return null;
			}
			this.bump();
			var e = [this.char()];
			for (this.bump(); !this.isEOF(); ) {
				var r = this.char();
				if (39 === r) {
					if (39 === this.peek()) e.push(39), this.bump();
					else {
						this.bump();
						break;
					}
				} else e.push(r);
				this.bump();
			}
			return I.apply(void 0, e);
		}),
		(t.prototype.tryParseUnquoted = function (t, e) {
			if (this.isEOF()) return null;
			var r = this.char();
			return 60 === r || 123 === r || (35 === r && ('plural' === e || 'selectordinal' === e)) || (125 === r && t > 0) ? null : (this.bump(), I(r));
		}),
		(t.prototype.parseArgument = function (t, e) {
			var r = this.clonePosition();
			if ((this.bump(), this.bumpSpace(), this.isEOF())) return this.error(a.o.EXPECT_ARGUMENT_CLOSING_BRACE, p(r, this.clonePosition()));
			if (125 === this.char()) return this.bump(), this.error(a.o.EMPTY_ARGUMENT, p(r, this.clonePosition()));
			var n = this.parseIdentifierIfPossible().value;
			if (!n) return this.error(a.o.MALFORMED_ARGUMENT, p(r, this.clonePosition()));
			if ((this.bumpSpace(), this.isEOF())) return this.error(a.o.EXPECT_ARGUMENT_CLOSING_BRACE, p(r, this.clonePosition()));
			switch (this.char()) {
				case 125:
					return (
						this.bump(),
						{
							val: {
								type: s.wD.argument,
								value: n,
								location: p(r, this.clonePosition())
							},
							err: null
						}
					);
				case 44:
					if ((this.bump(), this.bumpSpace(), this.isEOF())) return this.error(a.o.EXPECT_ARGUMENT_CLOSING_BRACE, p(r, this.clonePosition()));
					return this.parseArgumentOptions(t, e, n, r);
				default:
					return this.error(a.o.MALFORMED_ARGUMENT, p(r, this.clonePosition()));
			}
		}),
		(t.prototype.parseIdentifierIfPossible = function () {
			var t = this.clonePosition(),
				e = this.offset(),
				r = i(this.message, e),
				n = e + r.length;
			return (
				this.bumpTo(n),
				{
					value: r,
					location: p(t, this.clonePosition())
				}
			);
		}),
		(t.prototype.parseArgumentOptions = function (t, e, r, n) {
			var i,
				u = this.clonePosition(),
				h = this.parseIdentifierIfPossible().value,
				f = this.clonePosition();
			switch (h) {
				case '':
					return this.error(a.o.EXPECT_ARGUMENT_TYPE, p(u, f));
				case 'number':
				case 'date':
				case 'time':
					this.bumpSpace();
					var d = null;
					if (this.bumpIf(',')) {
						this.bumpSpace();
						var m = this.clonePosition(),
							v = this.parseSimpleArgStyleIfPossible();
						if (v.err) return v;
						var g = P(v.val);
						if (0 === g.length) return this.error(a.o.EXPECT_ARGUMENT_STYLE, p(this.clonePosition(), this.clonePosition()));
						d = {
							style: g,
							styleLocation: p(m, this.clonePosition())
						};
					}
					var y = this.tryParseArgumentClose(n);
					if (y.err) return y;
					var b = p(n, this.clonePosition());
					if (d && A(null == d ? void 0 : d.style, '::', 0)) {
						var E = H(d.style.slice(2));
						if ('number' === h) {
							var v = this.parseNumberSkeletonFromString(E, d.styleLocation);
							if (v.err) return v;
							return {
								val: {
									type: s.wD.number,
									value: r,
									location: b,
									style: v.val
								},
								err: null
							};
						}
						if (0 === E.length) return this.error(a.o.EXPECT_DATE_TIME_SKELETON, b);
						var T = E;
						this.locale && (T = (0, l.T)(E, this.locale));
						var g = {
							type: s.aV.dateTime,
							pattern: T,
							location: d.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? (0, c.TE)(T) : {}
						};
						return {
							val: {
								type: 'date' === h ? s.wD.date : s.wD.time,
								value: r,
								location: b,
								style: g
							},
							err: null
						};
					}
					return {
						val: {
							type: 'number' === h ? s.wD.number : 'date' === h ? s.wD.date : s.wD.time,
							value: r,
							location: b,
							style: null !== (i = null == d ? void 0 : d.style) && void 0 !== i ? i : null
						},
						err: null
					};
				case 'plural':
				case 'selectordinal':
				case 'select':
					var _ = this.clonePosition();
					if ((this.bumpSpace(), !this.bumpIf(','))) return this.error(a.o.EXPECT_SELECT_ARGUMENT_OPTIONS, p(_, (0, o.pi)({}, _)));
					this.bumpSpace();
					var I = this.parseIdentifierIfPossible(),
						L = 0;
					if ('select' !== h && 'offset' === I.value) {
						if (!this.bumpIf(':')) return this.error(a.o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, p(this.clonePosition(), this.clonePosition()));
						this.bumpSpace();
						var v = this.tryParseDecimalInteger(a.o.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, a.o.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
						if (v.err) return v;
						this.bumpSpace(), (I = this.parseIdentifierIfPossible()), (L = v.val);
					}
					var B = this.tryParsePluralOrSelectOptions(t, h, e, I);
					if (B.err) return B;
					var y = this.tryParseArgumentClose(n);
					if (y.err) return y;
					var w = p(n, this.clonePosition());
					if ('select' === h)
						return {
							val: {
								type: s.wD.select,
								value: r,
								options: S(B.val),
								location: w
							},
							err: null
						};
					return {
						val: {
							type: s.wD.plural,
							value: r,
							options: S(B.val),
							offset: L,
							pluralType: 'plural' === h ? 'cardinal' : 'ordinal',
							location: w
						},
						err: null
					};
				default:
					return this.error(a.o.INVALID_ARGUMENT_TYPE, p(u, f));
			}
		}),
		(t.prototype.tryParseArgumentClose = function (t) {
			return this.isEOF() || 125 !== this.char()
				? this.error(a.o.EXPECT_ARGUMENT_CLOSING_BRACE, p(t, this.clonePosition()))
				: (this.bump(),
					{
						val: !0,
						err: null
					});
		}),
		(t.prototype.parseSimpleArgStyleIfPossible = function () {
			for (var t = 0, e = this.clonePosition(); !this.isEOF(); )
				switch (this.char()) {
					case 39:
						this.bump();
						var r = this.clonePosition();
						if (!this.bumpUntil("'")) return this.error(a.o.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, p(r, this.clonePosition()));
						this.bump();
						break;
					case 123:
						(t += 1), this.bump();
						break;
					case 125:
						if (!(t > 0))
							return {
								val: this.message.slice(e.offset, this.offset()),
								err: null
							};
						t -= 1;
						break;
					default:
						this.bump();
				}
			return {
				val: this.message.slice(e.offset, this.offset()),
				err: null
			};
		}),
		(t.prototype.parseNumberSkeletonFromString = function (t, e) {
			var r = [];
			try {
				r = (0, c.OG)(t);
			} catch (t) {
				return this.error(a.o.INVALID_NUMBER_SKELETON, e);
			}
			return {
				val: {
					type: s.aV.number,
					tokens: r,
					location: e,
					parsedOptions: this.shouldParseSkeletons ? (0, c.Iu)(r) : {}
				},
				err: null
			};
		}),
		(t.prototype.tryParsePluralOrSelectOptions = function (t, e, r, n) {
			for (var i, o = !1, s = [], u = new Set(), c = n.value, l = n.location; ; ) {
				if (0 === c.length) {
					var h = this.clonePosition();
					if ('select' !== e && this.bumpIf('=')) {
						var f = this.tryParseDecimalInteger(a.o.EXPECT_PLURAL_ARGUMENT_SELECTOR, a.o.INVALID_PLURAL_ARGUMENT_SELECTOR);
						if (f.err) return f;
						(l = p(h, this.clonePosition())), (c = this.message.slice(h.offset, this.offset()));
					} else break;
				}
				if (u.has(c)) return this.error('select' === e ? a.o.DUPLICATE_SELECT_ARGUMENT_SELECTOR : a.o.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
				'other' === c && (o = !0), this.bumpSpace();
				var d = this.clonePosition();
				if (!this.bumpIf('{')) return this.error('select' === e ? a.o.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : a.o.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, p(this.clonePosition(), this.clonePosition()));
				var m = this.parseMessage(t + 1, e, r);
				if (m.err) return m;
				var v = this.tryParseArgumentClose(d);
				if (v.err) return v;
				s.push([
					c,
					{
						value: m.val,
						location: p(d, this.clonePosition())
					}
				]),
					u.add(c),
					this.bumpSpace(),
					(c = (i = this.parseIdentifierIfPossible()).value),
					(l = i.location);
			}
			return 0 === s.length
				? this.error('select' === e ? a.o.EXPECT_SELECT_ARGUMENT_SELECTOR : a.o.EXPECT_PLURAL_ARGUMENT_SELECTOR, p(this.clonePosition(), this.clonePosition()))
				: this.requiresOtherClause && !o
					? this.error(a.o.MISSING_OTHER_CLAUSE, p(this.clonePosition(), this.clonePosition()))
					: {
							val: s,
							err: null
						};
		}),
		(t.prototype.tryParseDecimalInteger = function (t, e) {
			var r = 1,
				n = this.clonePosition();
			this.bumpIf('+') || (this.bumpIf('-') && (r = -1));
			for (var i = !1, o = 0; !this.isEOF(); ) {
				var a = this.char();
				if (a >= 48 && a <= 57) (i = !0), (o = 10 * o + (a - 48)), this.bump();
				else break;
			}
			var s = p(n, this.clonePosition());
			return i
				? E((o *= r))
					? {
							val: o,
							err: null
						}
					: this.error(e, s)
				: this.error(t, s);
		}),
		(t.prototype.offset = function () {
			return this.position.offset;
		}),
		(t.prototype.isEOF = function () {
			return this.offset() === this.message.length;
		}),
		(t.prototype.clonePosition = function () {
			return {
				offset: this.position.offset,
				line: this.position.line,
				column: this.position.column
			};
		}),
		(t.prototype.char = function () {
			var t = this.position.offset;
			if (t >= this.message.length) throw Error('out of bound');
			var e = L(this.message, t);
			if (void 0 === e) throw Error('Offset '.concat(t, ' is at invalid UTF-16 code unit boundary'));
			return e;
		}),
		(t.prototype.error = function (t, e) {
			return {
				val: null,
				err: {
					kind: t,
					message: this.message,
					location: e
				}
			};
		}),
		(t.prototype.bump = function () {
			if (!this.isEOF()) {
				var t = this.char();
				10 === t ? ((this.position.line += 1), (this.position.column = 1), (this.position.offset += 1)) : ((this.position.column += 1), (this.position.offset += t < 65536 ? 1 : 2));
			}
		}),
		(t.prototype.bumpIf = function (t) {
			if (A(this.message, t, this.offset())) {
				for (var e = 0; e < t.length; e++) this.bump();
				return !0;
			}
			return !1;
		}),
		(t.prototype.bumpUntil = function (t) {
			var e = this.offset(),
				r = this.message.indexOf(t, e);
			return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
		}),
		(t.prototype.bumpTo = function (t) {
			if (this.offset() > t) throw Error('targetOffset '.concat(t, ' must be greater than or equal to the current offset ').concat(this.offset()));
			for (t = Math.min(t, this.message.length); ; ) {
				var e = this.offset();
				if (e === t) break;
				if (e > t) throw Error('targetOffset '.concat(t, ' is at invalid UTF-16 code unit boundary'));
				if ((this.bump(), this.isEOF())) break;
			}
		}),
		(t.prototype.bumpSpace = function () {
			for (; !this.isEOF() && M(this.char()); ) this.bump();
		}),
		(t.prototype.peek = function () {
			if (this.isEOF()) return null;
			var t = this.char(),
				e = this.offset(),
				r = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
			return null != r ? r : null;
		}),
		t
	);
})();
function R(t) {
	return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
}
function M(t) {
	return (t >= 9 && t <= 13) || 32 === t || 133 === t || (t >= 8206 && t <= 8207) || 8232 === t || 8233 === t;
}
