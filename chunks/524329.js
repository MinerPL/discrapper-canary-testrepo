E.d(_, {
    Es: function () {
        return N;
    },
    RM: function () {
        return t;
    },
    VP: function () {
        return a;
    },
    Xb: function () {
        return A;
    },
    sm: function () {
        return r;
    },
    y0: function () {
        return n;
    }
});
var s = E(544891),
    T = E(570140),
    I = E(981631);
let n = function (e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        T.Z.dispatch({
            type: 'WELCOME_SCREEN_VIEW',
            guildId: e,
            isLurking: _
        });
    },
    t = async (e) => {
        T.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_START' });
        try {
            let _ = await s.tn.get({
                url: I.ANM.GUILD_WELCOME_SCREEN(e),
                oldFormErrors: !0
            });
            return (
                T.Z.dispatch({
                    type: 'WELCOME_SCREEN_FETCH_SUCCESS',
                    guildId: e,
                    welcomeScreen: _.body
                }),
                _.body
            );
        } catch (e) {
            T.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_FAIL' });
        }
    },
    A = () => {
        T.Z.dispatch({ type: 'WELCOME_SCREEN_SETTINGS_RESET' });
    },
    r = () => {
        T.Z.dispatch({ type: 'WELCOME_SCREEN_SETTINGS_CLEAR' });
    },
    a = (e) => {
        T.Z.dispatch({
            type: 'WELCOME_SCREEN_SETTINGS_UPDATE',
            settings: e
        });
    },
    N = async (e, _) => {
        T.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT' });
        try {
            let E = await s.tn.patch({
                url: I.ANM.GUILD_WELCOME_SCREEN(e),
                body: {
                    description: _.description,
                    welcome_channels: _.channels,
                    enabled: _.enabled
                },
                oldFormErrors: !0
            });
            T.Z.dispatch({
                type: 'WELCOME_SCREEN_SUBMIT_SUCCESS',
                guildId: e,
                welcomeScreen: E.body
            });
        } catch (e) {
            T.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT_FAILURE' });
        }
    };
