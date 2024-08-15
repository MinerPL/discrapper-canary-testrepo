var r = n(570140);
t.Z = {
	show(e, t, n, i, a) {
		r.Z.dispatch({
			type: 'NOTICE_SHOW',
			notice: {
				id: a,
				type: e,
				message: t,
				buttonText: n,
				callback: i
			}
		});
	},
	dismiss(e) {
		r.Z.dispatch({
			type: 'NOTICE_DISMISS',
			...e
		});
	}
};
