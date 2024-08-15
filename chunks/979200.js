n.d(t, {
	PM: function () {
		return u;
	},
	ZC: function () {
		return i.u$;
	},
	de: function () {
		return o;
	},
	x9: function () {
		return l;
	}
});
var r = n(544891),
	i = n(921072),
	a = n(981631),
	s = n(689938);
async function o(e) {
	let t = a.ANM.APPLICATION_DISCLOSURES(e),
		n = await r.tn.get({
			url: t,
			retries: 3
		}),
		i = n.body.disclosures,
		s = n.body.acked_disclosures;
	return {
		disclosures: i,
		ackedDisclosures: s,
		allAcked: n.body.all_acked
	};
}
async function l(e, t) {
	let n = a.ANM.APPLICATION_DISCLOSURES(e);
	await r.tn.post({
		url: n,
		body: { disclosures: t }
	});
}
function u(e) {
	switch (e) {
		case i.u$.IP_LOCATION:
			return s.Z.Messages.OAUTH2_IP_LOCATION_DISCLOSURE;
		case i.u$.DISPLAYS_ADVERTISEMENTS:
			return s.Z.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE;
		default:
			return null;
	}
}
