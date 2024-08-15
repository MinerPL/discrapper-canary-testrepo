var r = n(570140);
t.Z = {
	setSection(e) {
		r.Z.dispatch({
			type: 'FRIENDS_SET_SECTION',
			section: e
		});
	},
	setInitialSection(e) {
		r.Z.dispatch({
			type: 'FRIENDS_SET_INITIAL_SECTION',
			section: e
		});
	}
};
