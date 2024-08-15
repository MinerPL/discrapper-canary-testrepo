var n = {
	lastWeek: "'i' EEEE's kl.' p",
	yesterday: "'igår kl.' p",
	today: "'idag kl.' p",
	tomorrow: "'imorgon kl.' p",
	nextWeek: "EEEE 'kl.' p",
	other: 'P'
};
t.Z = function (e, t, a, r) {
	return n[e];
};
