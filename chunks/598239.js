var n = {
	lastWeek: "'afgelopen' eeee 'om' p",
	yesterday: "'gisteren om' p",
	today: "'vandaag om' p",
	tomorrow: "'morgen om' p",
	nextWeek: "eeee 'om' p",
	other: 'P'
};
a.Z = function (e, a, t, r) {
	return n[e];
};
