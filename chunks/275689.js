r.d(t, {
	s: function () {
		return d;
	}
});
var n = r(394798),
	a = r(101284),
	o = r(370336),
	i = r(622916),
	_ = r(263449),
	E = r(255768),
	s = r(380132),
	c = r(899195),
	I = r(988097),
	u = r(696486),
	l = r(305625),
	R = r(966497),
	A = r(241225),
	T = r(881243);
class d {
	constructor(e = {}) {
		(this._traceId = e.traceId || (0, n.DM)()),
			(this._spanId = e.spanId || (0, n.DM)().substring(16)),
			(this._startTime = e.startTimestamp || (0, a.ph)()),
			(this._attributes = {}),
			this.setAttributes({
				[I.S3]: 'manual',
				[I.$J]: e.op,
				...e.attributes
			}),
			(this._name = e.name),
			e.parentSpanId && (this._parentSpanId = e.parentSpanId),
			'sampled' in e && (this._sampled = e.sampled),
			e.endTimestamp && (this._endTime = e.endTimestamp),
			(this._events = []),
			(this._isStandaloneSpan = e.isStandalone),
			this._endTime && this._onSpanEnded();
	}
	addLink(e) {
		return this;
	}
	addLinks(e) {
		return this;
	}
	recordException(e, t) {}
	spanContext() {
		let { _spanId: e, _traceId: t, _sampled: r } = this;
		return {
			spanId: e,
			traceId: t,
			traceFlags: r ? u.i0 : u.ve
		};
	}
	setAttribute(e, t) {
		return void 0 === t ? delete this._attributes[e] : (this._attributes[e] = t), this;
	}
	setAttributes(e) {
		return Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this;
	}
	updateStartTime(e) {
		this._startTime = (0, u.$k)(e);
	}
	setStatus(e) {
		return (this._status = e), this;
	}
	updateName(e) {
		return (this._name = e), this;
	}
	end(e) {
		if (!this._endTime) (this._endTime = (0, u.$k)(e)), (0, R.w)(this), this._onSpanEnded();
	}
	getSpanJSON() {
		return (0, o.Jr)({
			data: this._attributes,
			description: this._name,
			op: this._attributes[I.$J],
			parent_span_id: this._parentSpanId,
			span_id: this._spanId,
			start_timestamp: this._startTime,
			status: (0, u._4)(this._status),
			timestamp: this._endTime,
			trace_id: this._traceId,
			origin: this._attributes[I.S3],
			_metrics_summary: (0, c.y)(this),
			profile_id: this._attributes[I.p6],
			exclusive_time: this._attributes[I.JQ],
			measurements: (0, A.l)(this._events),
			is_segment: (this._isStandaloneSpan && (0, u.Gx)(this) === this) || void 0,
			segment_id: this._isStandaloneSpan ? (0, u.Gx)(this).spanContext().spanId : void 0
		});
	}
	isRecording() {
		return !this._endTime && !!this._sampled;
	}
	addEvent(e, t, r) {
		E.X && i.kg.log('[Tracing] Adding an event to span:', e);
		let n = N(t) ? t : r || (0, a.ph)(),
			o = N(t) ? {} : t || {},
			_ = {
				name: e,
				time: (0, u.$k)(n),
				attributes: o
			};
		return this._events.push(_), this;
	}
	isStandaloneSpan() {
		return !!this._isStandaloneSpan;
	}
	_onSpanEnded() {
		let e = (0, _.s3)();
		if ((e && e.emit('spanEnd', this), !(this._isStandaloneSpan || this === (0, u.Gx)(this)))) return;
		if (this._isStandaloneSpan) {
			this._sampled
				? (function (e) {
						let t = (0, _.s3)();
						if (!t) return;
						let r = e[1];
						if (!r || 0 === r.length) {
							t.recordDroppedEvent('before_send', 'span');
							return;
						}
						let n = t.getTransport();
						n &&
							n.send(e).then(null, (e) => {
								E.X && i.kg.error('Error while sending span:', e);
							});
					})((0, s.uE)([this], e))
				: (E.X && i.kg.log('[Tracing] Discarding standalone span because its trace was not chosen to be sampled.'),
					e && e.recordDroppedEvent('sample_rate', 'span'));
			return;
		}
		let t = this._convertSpanToTransaction();
		t && ((0, T.I1)(this).scope || (0, _.nZ)()).captureEvent(t);
	}
	_convertSpanToTransaction() {
		if (!p((0, u.XU)(this))) return;
		!this._name &&
			(E.X && i.kg.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
			(this._name = '<unlabeled transaction>'));
		let { scope: e, isolationScope: t } = (0, T.I1)(this),
			r = (e || (0, _.nZ)()).getClient() || (0, _.s3)();
		if (!0 !== this._sampled) {
			E.X && i.kg.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.'),
				r && r.recordDroppedEvent('sample_rate', 'transaction');
			return;
		}
		let n = (0, u.Dp)(this)
				.filter(
					(e) =>
						e !== this &&
						!(function (e) {
							return e instanceof d && e.isStandaloneSpan();
						})(e)
				)
				.map((e) => (0, u.XU)(e))
				.filter(p),
			a = this._attributes[I.Zj],
			s = {
				contexts: { trace: (0, u.HR)(this) },
				spans: n.length > 1000 ? n.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1000) : n,
				start_timestamp: this._startTime,
				timestamp: this._endTime,
				transaction: this._name,
				type: 'transaction',
				sdkProcessingMetadata: {
					capturedSpanScope: e,
					capturedSpanIsolationScope: t,
					...(0, o.Jr)({ dynamicSamplingContext: (0, l.jC)(this) })
				},
				_metrics_summary: (0, c.y)(this),
				...(a && { transaction_info: { source: a } })
			},
			R = (0, A.l)(this._events);
		return (
			R &&
				Object.keys(R).length &&
				(E.X && i.kg.log('[Measurements] Adding measurements to transaction event', JSON.stringify(R, void 0, 2)),
				(s.measurements = R)),
			s
		);
	}
}
function N(e) {
	return (e && 'number' == typeof e) || e instanceof Date || Array.isArray(e);
}
function p(e) {
	return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
