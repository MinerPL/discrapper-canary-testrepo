var n = {
	lastWeek: "'forrige' eeee 'kl.' p",
	yesterday: "'i går kl.' p",
	today: "'i dag kl.' p",
	tomorrow: "'i morgen kl.' p",
	nextWeek: "EEEE 'kl.' p",
	other: 'P'
};
t.Z = function (e, t, a, r) {
	return n[e];
};
