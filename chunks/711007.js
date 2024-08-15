n.d(t, {
	p: function () {
		return o;
	}
});
var l = n(470079),
	i = n(409813),
	u = n(882712);
function o(e, t, n) {
	l.useEffect(() => {
		null != e && e !== i.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === u.I.PENDING ? n(i.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === i.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === u.I.SUCCESS && n(i.h8.REVIEW);
	}, [e, t, n]);
}
