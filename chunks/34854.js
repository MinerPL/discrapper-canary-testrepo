var s = t(544891),
	i = t(981631);
n.Z = {
	updateNote(e, n) {
		s.tn.put({
			url: i.ANM.NOTE(e),
			body: { note: n },
			oldFormErrors: !0
		});
	}
};
