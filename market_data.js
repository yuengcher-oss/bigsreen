const marketData = {
    // 顶部关键指标
    metrics: [
        { label: "国家足迹", value: "17", unit: "个" },
        { label: "全球业绩", value: "1500", unit: "+" },
        { label: "海外项目占比", value: "25", unit: "%" },
        { label: "海外合作伙伴", value: "3", unit: "家" },
        { label: "集团型客户占比", value: "84.5", unit: "%" },
        { label: "亿元订单占比", value: "49.1", unit: "%" }
    ],

    // 图表数据
    charts: {
        // 近10年装机量走势图
        installedCapacity: {
            years: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            data: [1250, 1380, 1520, 1680, 1850, 2100, 2450, 2800, 3120, 3560]
        },
        // 产品大类业务规模
        businessScale: {
            categories: ['燃煤炉', '油/气炉', '余热炉', '生物质锅炉', '工程总包', '改造及服务', '代工业务'],
            data: [450, 320, 580, 260, 890, 420, 150]
        },
        // 全工况技术适应性
        radar: {
            indicators: [
                { name: '极端高温', max: 100 },
                { name: '强腐蚀环境', max: 100 },
                { name: '超低热值利用', max: 100 },
                { name: '高压稳定性', max: 100 },
                { name: '快速负荷调节', max: 100 },
                { name: '多燃料兼容', max: 100 }
            ],
            data: [92, 88, 96, 90, 94, 98]
        }
    },

    // 客户Logo
    logos: [
        // 央企
        { name: "中国东方电气集团", path: "data/集团性企业logo-分类版/央企/中国东方电气集团有限公司.png" },
        { name: "中国中化集团", path: "data/集团性企业logo-分类版/央企/中国中化集团有限公司.png" },
        { name: "中国五矿集团", path: "data/集团性企业logo-分类版/央企/中国五矿集团有限公司.png" },
        { name: "中国光大集团", path: "data/集团性企业logo-分类版/央企/中国光大集团股份公司.png" },
        { name: "中国华能集团", path: "data/集团性企业logo-分类版/央企/中国华能集团有限公司.png" },
        { name: "中国宝武钢铁", path: "data/集团性企业logo-分类版/央企/中国宝武钢铁集团有限公司.png" },
        { name: "中国核工业集团", path: "data/集团性企业logo-分类版/央企/中国核工业集团有限公司.png" },
        { name: "中国石油化工", path: "data/集团性企业logo-分类版/央企/中国石油化工集团有限公司.jpg" },
        { name: "中国石油天然气", path: "data/集团性企业logo-分类版/央企/中国石油天然气集团有限公司.png" },
        { name: "国家能源投资集团", path: "data/集团性企业logo-分类版/央企/国家能源投资集团有限责任公司.png" },
        // 国企
        { name: "上海城投", path: "data/集团性企业logo-分类版/国企/上海城投（集团）有限公司.png" },
        { name: "上海建工", path: "data/集团性企业logo-分类版/国企/上海建工控股集团有限公司.png" },
        { name: "北京环卫", path: "data/集团性企业logo-分类版/国企/北京环境卫生工程集团有限公司.jpg" },
        { name: "宜宾发展", path: "data/集团性企业logo-分类版/国企/宜宾发展控股集团有限公司.png" },
        { name: "浙江能源", path: "data/集团性企业logo-分类版/国企/浙江省能源集团有限公司.png" },
        // 民营
        { name: "建龙重工", path: "data/集团性企业logo-分类版/民营企业/北京建龙重工集团有限公司.png" },
        { name: "东方希望", path: "data/集团性企业logo-分类版/民营企业/东方希望集团有限公司.png" },
        { name: "吉利科技", path: "data/集团性企业logo-分类版/民营企业/吉利科技集团有限公司.png" },
        { name: "锦江集团", path: "data/集团性企业logo-分类版/民营企业/杭州锦江集团有限公司.png" },
        { name: "美的控股", path: "data/集团性企业logo-分类版/民营企业/美的控股有限公司.png" }
    ]
};
