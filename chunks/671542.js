var i = {
    lessThanXSeconds: {
        one: 'น้อยกว่า 1 วินาที',
        other: 'น้อยกว่า {{count}} วินาที'
    },
    xSeconds: {
        one: '1 วินาที',
        other: '{{count}} วินาที'
    },
    halfAMinute: 'ครึ่งนาที',
    lessThanXMinutes: {
        one: 'น้อยกว่า 1 นาที',
        other: 'น้อยกว่า {{count}} นาที'
    },
    xMinutes: {
        one: '1 นาที',
        other: '{{count}} นาที'
    },
    aboutXHours: {
        one: 'ประมาณ 1 ชั่วโมง',
        other: 'ประมาณ {{count}} ชั่วโมง'
    },
    xHours: {
        one: '1 ชั่วโมง',
        other: '{{count}} ชั่วโมง'
    },
    xDays: {
        one: '1 วัน',
        other: '{{count}} วัน'
    },
    aboutXWeeks: {
        one: 'ประมาณ 1 สัปดาห์',
        other: 'ประมาณ {{count}} สัปดาห์'
    },
    xWeeks: {
        one: '1 สัปดาห์',
        other: '{{count}} สัปดาห์'
    },
    aboutXMonths: {
        one: 'ประมาณ 1 เดือน',
        other: 'ประมาณ {{count}} เดือน'
    },
    xMonths: {
        one: '1 เดือน',
        other: '{{count}} เดือน'
    },
    aboutXYears: {
        one: 'ประมาณ 1 ปี',
        other: 'ประมาณ {{count}} ปี'
    },
    xYears: {
        one: '1 ปี',
        other: '{{count}} ปี'
    },
    overXYears: {
        one: 'มากกว่า 1 ปี',
        other: 'มากกว่า {{count}} ปี'
    },
    almostXYears: {
        one: 'เกือบ 1 ปี',
        other: 'เกือบ {{count}} ปี'
    }
};
t.Z = function (e, t, n) {
    var a,
        o = i[e];
    if (((a = 'string' == typeof o ? o : 1 === t ? o.one : o.other.replace('{{count}}', String(t))), null != n && n.addSuffix)) return n.comparison && n.comparison > 0 ? ('halfAMinute' === e ? 'ใน' + a : 'ใน ' + a) : a + 'ที่ผ่านมา';
    return a;
};
