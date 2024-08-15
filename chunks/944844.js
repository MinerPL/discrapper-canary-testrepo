n.d(e, {
	t: function () {
		return f;
	}
}),
	n(411104);
var a = n(470079),
	r = n(512722),
	o = n.n(r),
	s = n(478677),
	c = n(457330),
	u = n(275759),
	l = n(489863),
	i = n(497350);
async function d(t, e, n) {
	var a, r, l, d;
	let f = (0, i.B)(t);
	if (null == f) throw (await _(n, 1, 'authorize'), Error('Unsupported client_id for two way link'));
	let I = null;
	try {
		let { body: t } = await c.Z.authorize(f, {
			twoWayLinkType: s.g.DEVICE_CODE,
			userCode: n
		});
		I = t.url;
	} catch (t) {
		throw (
			(await _(
				n,
				null !== (r = null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.code) && void 0 !== r
					? r
					: 0,
				'authorize'
			),
			Error('error during two way authorize'))
		);
	}
	let C = null;
	try {
		o()(null != I, 'No URL in authorize response');
		let { state: t } = (0, u.xp)(I);
		o()(null != t, 'Authorize URL state query parameter must be present'), (C = t);
	} catch (t) {
		throw (await _(n, 2, 'authorize'), Error('error parsing callback params'));
	}
	try {
		await c.Z.callback(f, {
			code: e,
			state: C
		});
	} catch (t) {
		throw (
			(await _(
				n,
				null !== (d = null == t ? void 0 : null === (l = t.body) || void 0 === l ? void 0 : l.code) && void 0 !== d
					? d
					: 0,
				'callback'
			),
			Error('error during two way callback'))
		);
	}
}
async function _(t, e, n) {
	try {
		await (0, l.i2)(t, e, n);
	} catch (t) {}
}
function f(t, e, n, r) {
	return a.useCallback(
		async (a) => {
			if (!a) {
				try {
					await (0, l.tR)(t.userCode, 'denied');
				} catch (t) {}
				e();
				return;
			}
			if (null == t.twoWayLinkCode)
				try {
					await (0, l.tR)(t.userCode, 'granted'), r(t);
				} catch (e) {
					n(t);
				}
			else
				try {
					await d(t.clientId, t.twoWayLinkCode, t.userCode), r(t);
				} catch (e) {
					n(t);
				}
		},
		[t, e, n, r]
	);
}
