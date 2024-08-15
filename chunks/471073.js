let l, u, i, r, a;
n.d(t, {
	i: function () {
		return E;
	}
});
var o,
	d,
	s,
	c,
	E,
	T,
	_ = n(512722),
	I = n.n(_),
	S = n(442837),
	C = n(570140),
	f = n(904245),
	p = n(911969),
	N = n(603721),
	m = n(70956);
((o = E || (E = {}))[(o.IN_FLIGHT = 0)] = 'IN_FLIGHT'), (o[(o.ERRORED = 1)] = 'ERRORED'), (o[(o.SUCCEEDED = 2)] = 'SUCCEEDED');
class g extends (T = S.ZP.Store) {
	getModalState(e) {
		return e !== l ? null : u;
	}
}
(c = 'InteractionModalStore'),
	(s = 'displayName') in (d = g)
		? Object.defineProperty(d, s, {
				value: c,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (d[s] = c),
	(t.Z = new g(C.Z, {
		LOGOUT: function () {
			return (l = null), (u = null), (i = null), (r = null), (a = null), !0;
		},
		INTERACTION_MODAL_CREATE: function (e) {
			let { nonce: t } = e;
			return t === a && (f.Z.deleteMessage(r, i, !0), (i = null), (r = null), (a = null)), !1;
		},
		INTERACTION_IFRAME_MODAL_CREATE: function (e) {
			let { nonce: t } = e;
			return t === a && (f.Z.deleteMessage(r, i, !0), (i = null), (r = null), (a = null)), !1;
		},
		INTERACTION_QUEUE: function (e) {
			let { messageId: t, nonce: n, data: o } = e;
			switch (o.interactionType) {
				case p.B8.APPLICATION_COMMAND:
					return (i = t), (r = o.channelId), (a = n), !1;
				case p.B8.MODAL_SUBMIT:
					return (
						I()(null == l || 1 === u || 2 === u, 'cannot submit multiple modals at once'),
						(l = n),
						(u = 0),
						setTimeout(() => {
							l === n && 0 === u && (0, N.yr)(n);
						}, 10 * m.Z.Millis.SECOND),
						!0
					);
				default:
					return !1;
			}
		},
		INTERACTION_SUCCESS: function (e) {
			let { nonce: t } = e;
			return null != t && t === l && ((u = 2), !0);
		},
		INTERACTION_FAILURE: function (e) {
			let { nonce: t } = e;
			return null != t && t === l && ((u = 1), !0);
		}
	}));
