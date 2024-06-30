s.d(n, {
    Bk: function () {
        return L;
    },
    tK: function () {
        return i;
    },
    zC: function () {
        return c;
    }
}), s(47120);
var a = s(735250);
s(470079);
var t = s(300395), r = s(122890);
function c(e) {
    let {
            currentStep: n,
            purchaseState: s,
            className: c,
            pause: i
        } = e, [L, C] = (0, r.z)({
            purchaseState: s,
            currentStep: n,
            initialScene: t.NQ.Scenes.NORMAL,
            purchaseScene: t.NQ.Scenes.SPEED_START,
            errorScene: t.NQ.Scenes.NORMAL,
            successScene: t.NQ.Scenes.FINISH
        });
    return (0, a.jsx)(t.NQ, {
        className: c,
        nextScene: L,
        onScenePlay: e => C(t.NQ.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: i
    });
}
function i(e) {
    let {
            currentStep: n,
            purchaseState: s,
            className: c,
            pause: i
        } = e, [L, C] = (0, r.z)({
            purchaseState: s,
            currentStep: n,
            initialScene: t.HC.Scenes.NORMAL,
            purchaseScene: t.HC.Scenes.SPEED_START,
            errorScene: t.HC.Scenes.NORMAL,
            successScene: t.HC.Scenes.FINISH
        });
    return (0, a.jsx)(t.HC, {
        className: c,
        nextScene: L,
        onScenePlay: e => C(t.HC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: i
    });
}
function L(e) {
    let {
            currentStep: n,
            purchaseState: s,
            className: c,
            pause: i
        } = e, [L, C] = (0, r.z)({
            purchaseState: s,
            currentStep: n,
            initialScene: t.Db.Scenes.IDLE_ENTRY,
            purchaseScene: t.Db.Scenes.BOOST_START,
            errorScene: t.Db.Scenes.ERROR,
            successScene: t.Db.Scenes.BOOST_END
        });
    return (0, a.jsx)(t.Db, {
        className: c,
        nextScene: L,
        onScenePlay: e => C(t.Db.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: i
    });
}
