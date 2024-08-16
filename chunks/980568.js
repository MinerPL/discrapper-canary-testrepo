var i = n(570140),
    s = n(626135),
    o = n(981631);
t.Z = {
    dismissForApplicationId(e) {
        i.Z.dispatch({
            type: 'ACTIVITY_INVITE_EDUCATION_DISMISS',
            key: e,
            value: !0
        }),
            s.default.track(o.rMx.CLOSE_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e,
                acknowledged: !0
            });
    }
};
