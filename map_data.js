// 核心业务分布中心点
// 使用高斯分布模拟自然聚集
// 经纬度中心点 + 扩散范围 [lngSpread, latSpread] + 项目数量
const distributionCenters = [
    // --- 中国 (总量最多) ---
    { name: '中国-华北', center: [116.4, 39.9], spread: [6, 5], count: 50 },
    { name: '中国-华东', center: [121.5, 31.2], spread: [5, 5], count: 60 },
    { name: '中国-华南', center: [113.3, 23.1], spread: [4, 4], count: 40 },
    { name: '中国-西南', center: [104.1, 30.7], spread: [4, 4], count: 50 }, // 川锅大本营
    { name: '中国-西北', center: [108.9, 34.3], spread: [8, 5], count: 30 },
    { name: '中国-东北', center: [126.6, 45.8], spread: [6, 4], count: 20 },

    // --- 东南亚 (密集区，限制每个国家数量) ---
    { name: '越南', center: [105.8, 21.0], spread: [2, 6], count: 25 },
    { name: '泰国', center: [100.5, 13.7], spread: [3, 5], count: 20 },
    { name: '印尼', center: [113.9, -0.7], spread: [15, 3], count: 28 }, // 群岛横向扩散
    { name: '马来西亚', center: [101.9, 4.2], spread: [3, 3], count: 15 },
    { name: '菲律宾', center: [121.7, 12.8], spread: [3, 6], count: 15 },
    { name: '缅甸', center: [95.9, 21.9], spread: [3, 4], count: 10 },

    // --- 南亚 ---
    { name: '印度', center: [78.9, 20.5], spread: [8, 8], count: 28 }, // 限制在30以内
    { name: '巴基斯坦', center: [69.3, 29.6], spread: [4, 4], count: 15 },
    { name: '孟加拉国', center: [90.3, 23.6], spread: [2, 2], count: 10 },

    // --- 中亚/中东 ---
    { name: '哈萨克斯坦', center: [66.9, 48.0], spread: [10, 5], count: 15 },
    { name: '伊朗', center: [53.6, 32.4], spread: [6, 5], count: 20 },
    { name: '土耳其', center: [35.2, 38.9], spread: [6, 3], count: 15 },
    { name: '沙特', center: [45.0, 23.8], spread: [6, 6], count: 12 },
    { name: '阿联酋', center: [53.8, 24.2], spread: [2, 2], count: 8 },

    // --- 欧洲/俄罗斯 ---
    { name: '俄罗斯-欧洲', center: [37.6, 55.7], spread: [10, 6], count: 25 }, // 莫斯科周边
    { name: '俄罗斯-西伯利亚', center: [82.9, 55.0], spread: [15, 5], count: 15 },
    { name: '德国', center: [10.4, 51.1], spread: [3, 3], count: 20 },
    { name: '法国', center: [2.2, 46.2], spread: [4, 4], count: 15 },
    { name: '波兰', center: [19.1, 51.9], spread: [3, 3], count: 10 },
    { name: '意大利', center: [12.5, 41.8], spread: [3, 5], count: 10 },

    // --- 非洲 ---
    { name: '尼日利亚', center: [8.6, 9.0], spread: [4, 4], count: 10 },
    { name: '埃塞俄比亚', center: [40.4, 9.1], spread: [4, 4], count: 10 },
    { name: '南非', center: [22.9, -30.5], spread: [6, 4], count: 10 },
    { name: '埃及', center: [30.8, 26.8], spread: [4, 4], count: 8 },

    // --- 美洲 ---
    { name: '美国-东部', center: [-80.0, 37.0], spread: [8, 8], count: 15 },
    { name: '美国-西部', center: [-115.0, 38.0], spread: [6, 8], count: 12 }, // 总共27 < 30
    { name: '巴西', center: [-51.9, -14.2], spread: [10, 10], count: 25 },
    { name: '阿根廷', center: [-63.6, -38.4], spread: [5, 8], count: 10 },
    { name: '智利', center: [-71.5, -35.6], spread: [2, 10], count: 8 },
    { name: '墨西哥', center: [-102.5, 23.6], spread: [6, 5], count: 15 },

    // --- 澳洲 ---
    { name: '澳大利亚', center: [133.7, -25.2], spread: [12, 10], count: 20 }
];

// 辅助函数：Box-Muller 变换生成正态分布随机数
// 返回值约在 -3 到 3 之间
function randn_bm() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); 
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

// 生成高斯分布坐标
function getGaussianCoord(center, spread) {
    // 限制范围在 +/- 2.5 个标准差内，避免极值
    let z1 = randn_bm();
    let z2 = randn_bm();
    
    // 简单截断，避免太远的点
    if (Math.abs(z1) > 2.5) z1 = z1 > 0 ? 2.5 : -2.5;
    if (Math.abs(z2) > 2.5) z2 = z2 > 0 ? 2.5 : -2.5;

    // spread[0] 是经度扩散度，spread[1] 是纬度扩散度
    // 系数 0.4 控制离散程度
    const lng = center[0] + z1 * spread[0] * 0.4;
    const lat = center[1] + z2 * spread[1] * 0.4;
    
    return [lng, lat];
}

// 模拟项目数据
function generateProjectData() {
    const projects = [];
    const statuses = [
        { name: '设计中', color: '#ffcc00' },
        { name: '制造中', color: '#0066ff' },
        { name: '安装中', color: '#ffcc00' },
        { name: '运行中', color: '#22c55e' }
    ];

    distributionCenters.forEach(area => {
        for (let i = 0; i < area.count; i++) {
            // 随机状态权重（运行中占比最高）
            let statusIdx;
            const r = Math.random();
            if (r < 0.65) statusIdx = 3;
            else if (r < 0.85) statusIdx = 1;
            else if (r < 0.95) statusIdx = 2;
            else statusIdx = 0;

            projects.push({
                name: `Project-${area.name}-${i}`,
                value: getGaussianCoord(area.center, area.spread),
                status: statuses[statusIdx].name,
                color: statuses[statusIdx].color,
                symbol: 'circle'
            });
        }
    });

    return projects;
}

// 模拟服务人员数据
function generateStaffData() {
    const roles = [
        { name: '服务人员', color: '#e60012', iconPath: 'path://M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
        { name: '外检人员', color: '#ffcc00', iconPath: 'path://M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' },
        { name: '销售人员', color: '#0066ff', iconPath: 'path://M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z' },
        { name: '技术人员', color: '#ffffff', iconPath: 'path://M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z' },
        { name: '生产人员', color: '#94a3b8', iconPath: 'path://M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' },
        { name: '管理人员', color: '#ffcc00', iconPath: 'path://M12 2L1 21h22M12 6l7.53 13H4.47' }
    ];

    const staff = [];
    
    // 筛选出重点区域生成人员，避免全球过于分散
    const staffRegions = distributionCenters.filter(r => 
        r.name.includes('中国') || 
        ['越南', '印尼', '印度', '伊朗', '俄罗斯-欧洲', '美国-东部', '巴西'].includes(r.name)
    );

    staffRegions.forEach(area => {
        // 人员数量约为项目数量的 15%-20%
        const staffCount = Math.ceil(area.count * 0.2);
        
        for (let i = 0; i < staffCount; i++) {
            const role = roles[Math.floor(Math.random() * roles.length)];
            const coord = getGaussianCoord(area.center, area.spread);
            
            staff.push({
                name: `Staff-${area.name}-${i}`,
                role: role.name,
                value: coord,
                itemStyle: { color: role.color },
                symbol: role.iconPath
            });
        }
    });

    return staff;
}

const mapData = {
    projects: generateProjectData(),
    staff: generateStaffData()
};
