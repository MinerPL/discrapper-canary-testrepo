n.d(t, { Z: () => i });
var a = {
    lessThanXSeconds: {
        one: '1초 미만',
        other: '{{count}}초 미만'
    },
    xSeconds: {
        one: '1초',
        other: '{{count}}초'
    },
    halfAMinute: '30초',
    lessThanXMinutes: {
        one: '1분 미만',
        other: '{{count}}분 미만'
    },
    xMinutes: {
        one: '1분',
        other: '{{count}}분'
    },
    aboutXHours: {
        one: '약 1시간',
        other: '약 {{count}}시간'
    },
    xHours: {
        one: '1시간',
        other: '{{count}}시간'
    },
    xDays: {
        one: '1일',
        other: '{{count}}일'
    },
    aboutXWeeks: {
        one: '약 1주',
        other: '약 {{count}}주'
    },
    xWeeks: {
        one: '1주',
        other: '{{count}}주'
    },
    aboutXMonths: {
        one: '약 1개월',
        other: '약 {{count}}개월'
    },
    xMonths: {
        one: '1개월',
        other: '{{count}}개월'
    },
    aboutXYears: {
        one: '약 1년',
        other: '약 {{count}}년'
    },
    xYears: {
        one: '1년',
        other: '{{count}}년'
    },
    overXYears: {
        one: '1년 이상',
        other: '{{count}}년 이상'
    },
    almostXYears: {
        one: '거의 1년',
        other: '거의 {{count}}년'
    }
};
let i = function (e, t, n) {
    var i,
        r = a[e];
    if (((i = 'string' == typeof r ? r : 1 === t ? r.one : r.other.replace('{{count}}', t.toString())), null != n && n.addSuffix))
        if (n.comparison && n.comparison > 0) return i + ' 후';
        else return i + ' 전';
    return i;
};
