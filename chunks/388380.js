var i = n(544891), s = n(570140), a = n(981631);
t.Z = {
    async fetch() {
        try {
            let e = await i.tn.get({ url: a.ANM.FRIEND_SUGGESTIONS });
            s.Z.dispatch({
                type: 'LOAD_FRIEND_SUGGESTIONS_SUCCESS',
                suggestions: e.body
            });
        } catch (e) {
            s.Z.dispatch({ type: 'LOAD_FRIEND_SUGGESTIONS_FAILURE' });
        }
    },
    ignore(e) {
        i.tn.del(a.ANM.FRIEND_SUGGESTION(e));
    }
};
