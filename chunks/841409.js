var s = n(399606),
	a = n(626135),
	r = n(280570),
	i = n(914788),
	l = n(292352),
	o = n(981631);
t.Z = () => {
	let e = (0, s.e7)([i.Z], () => i.Z.getSelectedTab());
	return {
		selectedTab: e,
		handleTabChange: (e) => {
			r.ZP.selectTab(e),
				a.default.track(o.rMx.FAMILY_CENTER_ACTION, {
					action: l.YC.TabChange,
					tab: e
				});
		}
	};
};
