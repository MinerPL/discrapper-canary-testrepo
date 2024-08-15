n(627494), n(757143);
let r = /[<>:"/\\|?*\.]/g;
t.Z = function (e) {
	return e.replaceAll(r, '').trim().replaceAll(' ', '_');
};
