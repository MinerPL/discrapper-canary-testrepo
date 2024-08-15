n.d(e, {
	c: function () {
		return c;
	}
}),
	n(47120);
var a = n(470079),
	r = n(489863),
	o = n(828878),
	s = n(689938);
function c(t, e, n) {
	let [c, u] = a.useState(!1),
		[l, i] = a.useState(null),
		d = a.useCallback(async () => {
			try {
				u(!0);
				let n = await (0, r.tV)(t);
				u(!1),
					e({
						userCode: t,
						clientId: n.body.client_id,
						scopes: n.body.scopes,
						twoWayLinkCode: n.body.two_way_link_code
					});
			} catch (t) {
				var a;
				i(
					429 === (a = null == t ? void 0 : t.status)
						? s.Z.Messages.ACTIVATE_DEVICE_ERROR_RATE_LIMIT
						: 404 === a || 400 === a
							? s.Z.Messages.ACTIVATE_DEVICE_ERROR_BAD_CODE
							: s.Z.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN
				),
					u(!1),
					(null == t ? void 0 : t.status) === 401 && n();
			}
		}, [t, e, n]);
	return (
		a.useEffect(() => {
			t.length === o.A.USER_CODE_LENGTH ? d() : i(null);
		}, [t, d]),
		{
			manualSubmit: d,
			error: l,
			submitting: c
		}
	);
}
