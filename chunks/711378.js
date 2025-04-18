var i = n(799761),
    a = {
        ordinalNumber: function (t, e) {
            var n = Number(t);
            switch (null == e ? void 0 : e.unit) {
                case 'date':
                    return n.toString() + '日';
                case 'hour':
                    return n.toString() + '时';
                case 'minute':
                    return n.toString() + '分';
                case 'second':
                    return n.toString() + '秒';
                default:
                    return '第 ' + n.toString();
            }
        },
        era: (0, i.Z)({
            values: {
                narrow: ['前', '公元'],
                abbreviated: ['前', '公元'],
                wide: ['公元前', '公元']
            },
            defaultWidth: 'wide'
        }),
        quarter: (0, i.Z)({
            values: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['第一季', '第二季', '第三季', '第四季'],
                wide: ['第一季度', '第二季度', '第三季度', '第四季度']
            },
            defaultWidth: 'wide',
            argumentCallback: function (t) {
                return t - 1;
            }
        }),
        month: (0, i.Z)({
            values: {
                narrow: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                abbreviated: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                wide: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            defaultWidth: 'wide'
        }),
        day: (0, i.Z)({
            values: {
                narrow: ['日', '一', '二', '三', '四', '五', '六'],
                short: ['日', '一', '二', '三', '四', '五', '六'],
                abbreviated: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                wide: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
            defaultWidth: 'wide'
        }),
        dayPeriod: (0, i.Z)({
            values: {
                narrow: {
                    am: '上',
                    pm: '下',
                    midnight: '凌晨',
                    noon: '午',
                    morning: '早',
                    afternoon: '下午',
                    evening: '晚',
                    night: '夜'
                },
                abbreviated: {
                    am: '上午',
                    pm: '下午',
                    midnight: '凌晨',
                    noon: '中午',
                    morning: '早晨',
                    afternoon: '中午',
                    evening: '晚上',
                    night: '夜间'
                },
                wide: {
                    am: '上午',
                    pm: '下午',
                    midnight: '凌晨',
                    noon: '中午',
                    morning: '早晨',
                    afternoon: '中午',
                    evening: '晚上',
                    night: '夜间'
                }
            },
            defaultWidth: 'wide',
            formattingValues: {
                narrow: {
                    am: '上',
                    pm: '下',
                    midnight: '凌晨',
                    noon: '午',
                    morning: '早',
                    afternoon: '下午',
                    evening: '晚',
                    night: '夜'
                },
                abbreviated: {
                    am: '上午',
                    pm: '下午',
                    midnight: '凌晨',
                    noon: '中午',
                    morning: '早晨',
                    afternoon: '中午',
                    evening: '晚上',
                    night: '夜间'
                },
                wide: {
                    am: '上午',
                    pm: '下午',
                    midnight: '凌晨',
                    noon: '中午',
                    morning: '早晨',
                    afternoon: '中午',
                    evening: '晚上',
                    night: '夜间'
                }
            },
            defaultFormattingWidth: 'wide'
        })
    };
e.Z = a;
