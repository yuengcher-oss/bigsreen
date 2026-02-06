const factoryData = {
    // 1. 能源消耗
    energy: {
        metrics: [
            { label: '周成本', value: '5.91', unit: '万元' },
            { label: '月成本', value: '28.78', unit: '万元' },
            { label: '年泄露告警', value: '86', unit: '次' },
            { label: '周水吨耗', value: '0.00', unit: 't/吨' },
            { label: '周电吨耗', value: '21.59', unit: 'KWh/吨' },
            { label: '周气吨耗', value: '24.48', unit: 'm³/吨' }
        ],
        alerts: [
            { time: '2026-01-12', device: 'JXQB2_01', area: '集箱分厂', type: '天然气', status: '处理中' },
            { time: '2026-01-01', device: 'GZQB2_01', area: '管子分厂', type: '天然气', status: '处理中' },
            { time: '2026-01-01', device: 'RQQB_08', area: '容器分厂', type: '天然气', status: '处理中' },
            { time: '2025-10-20', device: 'JXQB2_01', area: '集箱分厂', type: '天然气', status: '已完成' },
            { time: '2025-10-20', device: 'RQQB_08', area: '容器分厂', type: '天然气', status: '已完成' }
        ],
        pieChart: [
            { value: 45, name: '集箱分厂' },
            { value: 30, name: '管子分厂' },
            { value: 25, name: '容器分厂' }
        ],
        stats: [
            { name: '管子分厂', cost: 1.20, output: 454.900, water: 0, elec: 2, gas: 10.480 },
            { name: '容器分厂', cost: 2.49, output: 222.100, water: 0, elec: 67, gas: 24.490 },
            { name: '集箱分厂', cost: 2.22, output: 100.900, water: 0, elec: 12, gas: 87.510 },
            { name: '合计', cost: 5.91, output: 777.90, water: 0.00, elec: 21.59, gas: 24.48 }
        ]
    },

    // 2. TPM 设备监控
    tpm: [
        {
            name: '管子分厂',
            rate: '27条/秒',
            run: 13, idle: 52, off: 78,
            hours: 217.5
        },
        {
            name: '核容分厂',
            rate: '0条/秒',
            run: 0, idle: 0, off: 0,
            hours: 0
        },
        {
            name: '集箱分厂',
            rate: '10条/秒',
            run: 6, idle: 23, off: 44,
            hours: 101.5
        }
    ],

    // 3. 光伏发电
    pv: {
        metrics: [
            { label: '装机容量', value: '4.03', unit: 'MWp' },
            { label: '总逆变器', value: '10', unit: '个' },
            { label: '运行天数', value: '572', unit: '天' },
            { label: '当前功率', value: '537.56', unit: 'kW' },
            { label: '当前辐射量', value: '1.62', unit: 'MJ/m²' },
            { label: '当前风速', value: '0.000', unit: 'm/s' }
        ],
        cards: [
            { label: '今日发电量(kWh)', value: '810.38', color: '#dc2626' }, // 红
            { label: '本月发电量(万kWh)', value: '13.97', color: '#d97706' }, // 橙（褐）
            { label: '累计发电量(万kWh)', value: '480.75', color: '#2563eb' } // 蓝
        ],
        social: [
            { label: '减少碳排放', value: '3515.82吨' },
            { label: '减少标准煤', value: '1428.45吨' },
            { label: '等于种树', value: '201041.28棵' }
        ],
        economic: [
            { label: '今日效益', value: '¥ 405.3' },
            { label: '本月效益', value: '¥ 70864.93' },
            { label: '累计效益', value: '¥ 2404800' }
        ],
        trend: {
            dates: ['01-06', '01-08', '01-10', '01-12', '01-14', '01-16', '01-18', '01-20', '01-22', '01-24', '01-26', '01-28', '01-30', '02-01'],
            values: [600, 620, 610, 500, 520, 530, 520, 150, 300, 100, 600, 150, 550, 480]
        }
    }
};
