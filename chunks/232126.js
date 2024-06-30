var i = n(735250);
n(470079);
var s = n(120356), a = n.n(s), r = n(981631), l = n(195872);
let o = {
        EVERYONE: '1',
        EVERYONE_TEN_PLUS: '2',
        TEEN: '3',
        MATURE: '4',
        ADULT: '5',
        RATING_PENDING: '6'
    }, c = {
        THREE: '1',
        SEVEN: '2',
        TWELVE: '3',
        SIXTEEN: '4',
        EIGHTEEN: '5'
    }, d = {
        [r.aIt.ESRB]: {
            [o.EVERYONE]: l.esrbEveryone,
            [o.EVERYONE_TEN_PLUS]: l.esrbEveryoneTenPlus,
            [o.TEEN]: l.esrbTeen,
            [o.MATURE]: l.esrbMature,
            [o.ADULT]: l.esrbAdult,
            [o.RATING_PENDING]: l.esrbRatingPending
        },
        [r.aIt.PEGI]: {
            [c.THREE]: l.pegiThree,
            [c.SEVEN]: l.pegiSeven,
            [c.TWELVE]: l.pegiTwelve,
            [c.SIXTEEN]: l.pegiSixteen,
            [c.EIGHTEEN]: l.pegiEighteen
        }
    };
t.Z = e => {
    let {
            agency: t,
            rating: n,
            className: s
        } = e, r = d[t][n];
    return null == r ? null : (0, i.jsx)('div', { className: a()(l.contentRating, r, s) });
};
