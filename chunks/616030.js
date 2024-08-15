t.d(n, {
	Bk: function () {
		return l;
	},
	tK: function () {
		return c;
	},
	zC: function () {
		return i;
	}
}),
	t(47120);
var s = t(735250);
t(470079);
var r = t(122890),
	a = t(110818);
function i(e) {
	let { currentStep: n, purchaseState: t, className: i, pause: c } = e,
		[l, L] = (0, r.z)({
			purchaseState: t,
			currentStep: n,
			initialScene: a.NQ.Scenes.NORMAL,
			purchaseScene: a.NQ.Scenes.SPEED_START,
			errorScene: a.NQ.Scenes.NORMAL,
			successScene: a.NQ.Scenes.FINISH
		});
	return (0, s.jsx)(a.NQ, {
		className: i,
		nextScene: l,
		onScenePlay: (e) => L(a.NQ.getNextScene(e)),
		pauseWhileUnfocused: !1,
		pause: c
	});
}
function c(e) {
	let { currentStep: n, purchaseState: t, className: i, pause: c } = e,
		[l, L] = (0, r.z)({
			purchaseState: t,
			currentStep: n,
			initialScene: a.HC.Scenes.NORMAL,
			purchaseScene: a.HC.Scenes.SPEED_START,
			errorScene: a.HC.Scenes.NORMAL,
			successScene: a.HC.Scenes.FINISH
		});
	return (0, s.jsx)(a.HC, {
		className: i,
		nextScene: l,
		onScenePlay: (e) => L(a.HC.getNextScene(e)),
		pauseWhileUnfocused: !1,
		pause: c
	});
}
function l(e) {
	let { currentStep: n, purchaseState: t, className: i, pause: c } = e,
		[l, L] = (0, r.z)({
			purchaseState: t,
			currentStep: n,
			initialScene: a.Db.Scenes.IDLE_ENTRY,
			purchaseScene: a.Db.Scenes.BOOST_START,
			errorScene: a.Db.Scenes.ERROR,
			successScene: a.Db.Scenes.BOOST_END
		});
	return (0, s.jsx)(a.Db, {
		className: i,
		nextScene: l,
		onScenePlay: (e) => L(a.Db.getNextScene(e)),
		pauseWhileUnfocused: !1,
		pause: c
	});
}
