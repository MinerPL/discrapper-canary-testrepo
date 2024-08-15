var s = n(544891),
	a = n(981631);
t.Z = {
	fetchTeams() {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		return s.tn.get({
			url: a.ANM.TEAMS,
			query: { include_payout_account_status: e }
		});
	}
};
