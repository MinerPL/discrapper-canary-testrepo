t.Z = function (e) {
	var t = {};
	return function (r) {
		return void 0 === t[r] && (t[r] = e(r)), t[r];
	};
};
