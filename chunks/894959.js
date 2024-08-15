var i = n(45792),
	a = n(914946),
	s = n(238679),
	r = n(981631);
t.Z = {
	[r.Etm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, i.S)(r.Etm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
		scope: s.KW,
		handler(e) {
			let { socket: t } = e;
			return (0, a.bu)(t.transport), (0, s.dO)();
		}
	})
};
