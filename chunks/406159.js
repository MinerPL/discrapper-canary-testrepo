var i = {
	lastWeek: "eeee'ที่แล้วเวลา' p",
	yesterday: "'เมื่อวานนี้เวลา' p",
	today: "'วันนี้เวลา' p",
	tomorrow: "'พรุ่งนี้เวลา' p",
	nextWeek: "eeee 'เวลา' p",
	other: 'P'
};
t.Z = function (e, t, n, a) {
	return i[e];
};
