var r = n(442837),
	i = n(481060),
	a = n(38618),
	s = n(84615),
	o = n(272423),
	l = n(823385),
	u = n(819640);
t.Z = () => {
	let e = (0, r.e7)([u.Z], () => u.Z.hasLayers()),
		t = (0, s.QP)((e) => e.fullScreenLayers.length > 0),
		n = (0, o.EV)(),
		c = (0, i.useModalsStore)(i.hasAnyModalOpen),
		d = (0, r.e7)([a.Z], () => a.Z.isConnected()),
		_ = (0, r.e7)([l.Z], () => l.Z.isOpen());
	return e || t || c || n || !d || _;
};
