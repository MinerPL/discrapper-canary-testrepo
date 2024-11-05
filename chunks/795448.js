n.d(t, {
    Gk: function () {
        return o;
    },
    Ni: function () {
        return s;
    },
    PV: function () {
        return a;
    },
    d$: function () {
        return i;
    }
});
var r = n(570140);
function i() {
    r.Z.dispatch({ type: 'FRIENDS_LIST_GIFT_INTENTS_SHOWN' });
}
function a(e) {
    r.Z.dispatch({
        type: 'MESSAGE_GIFT_INTENT_SHOWN',
        recipientUserId: e
    });
}
function s(e) {
    r.Z.dispatch({
        type: 'GIFT_INTENT_FLOW_PURCHASED_GIFT',
        recipientUserId: e
    });
}
function o() {
    r.Z.dispatch({ type: 'FRIENDS_TAB_BADGE_DISMISS' });
}
