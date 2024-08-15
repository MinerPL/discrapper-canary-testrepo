n.d(t, {
	CV: function () {
		return d;
	},
	JX: function () {
		return c;
	},
	mt: function () {
		return u;
	},
	yK: function () {
		return _;
	}
});
var r = n(544891),
	i = n(570140),
	a = n(881052),
	s = n(206583),
	o = n(981631),
	l = n(689938);
let u = async (e) => {
		let { token: t, feedId: n } = e;
		try {
			let e = (
					await r.tn.get({
						url: o.ANM.MY_CONTENT_INVENTORY(t),
						...(n === s.YN.GAME_PROFILE_FEED && { query: { for_game_profile: !0 } })
					})
				).body,
				i = e.wait_ms_until_next_fetch;
			if (null != i) {
				let t = new Date(Date.now() + i);
				e.expired_at = t.toISOString();
			}
			return e;
		} catch (e) {
			throw new a.Hx(e);
		}
	},
	c = async (e, t) => {
		try {
			i.Z.dispatch({
				type: 'CONTENT_INVENTORY_FETCH_OUTBOX_START',
				userId: e
			});
			let n = (
				await r.tn.get({
					url: o.ANM.CONTENT_INVENTORY_OUTBOX(e),
					signal: t
				})
			).body;
			return (
				i.Z.dispatch({
					type: 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS',
					outbox: n,
					userId: e
				}),
				n
			);
		} catch (t) {
			throw (
				(i.Z.dispatch({
					type: 'CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE',
					userId: e
				}),
				new a.Hx(t))
			);
		}
	},
	d = async (e, t, n) => {
		try {
			i.Z.dispatch({ type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START' }),
				await r.tn.del({ url: o.ANM.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(e.id) }),
				i.Z.dispatch({
					type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS',
					userId: t,
					entry: e
				}),
				null == n || n();
		} catch (t) {
			var a, s;
			let e =
				null !== (s = null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.message) && void 0 !== s
					? s
					: l.Z.Messages.USER_ACTIVITY_DELETE_HISTORY_ERROR;
			i.Z.dispatch({
				type: 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE',
				error: e
			});
		}
	};
async function _(e, t) {
	try {
		await r.tn.post({
			url: o.ANM.MY_SPOTIFY_CONTENT_INVENTORY,
			body: {
				connection_id: e,
				tracks: [t]
			}
		});
	} catch (e) {
		throw new a.Hx(e);
	}
}
