/**
 * 2-3 屏：产品系列与解决方案数据
 * 升级版：增加业绩数量 (Track Record) 与 典型案例 (Typical Cases)
 */
const categorySectionData = [
    {
        id: "cat-1",
        title: "燃煤炉",
        subCategories: ["循环床", "煤粉炉"],
        techDrawing: "https://minio-api.cgboiler.com/form-test/iShot_2026-02-03_17.12.56.png",
        description: "四川锅炉厂传统优势燃煤产品，涵盖高效循环流化床锅炉与先进煤粉燃烧锅炉技术，支持极低排放与燃料广谱适应。",
        highlights: [
            "自研专利：ZL202110452311.5",
            "锅炉热效率提升：1.5% - 2.0%",
            "入选国家重大技术装备目录",
            "CFB运行记录：连续运行超400天"
        ],
        metrics: [
            { label: "业绩合计", value: "850+", sub: "（行业领先的市场存量规模）", percent: 95 },
            { label: "热效率达标", value: "92.5%", sub: "（年节约标准煤约 3.2万吨）", percent: 92.5 },
            { label: "NOx排放", value: "35mg", sub: "（低于国家超低排放标准 30%）", percent: 85 }
        ],
        cases: [
            { name: "晋能控股煤泥发电项目", image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80" },
            { name: "内蒙古赛思普节能改造", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    {
        id: "cat-2",
        title: "油/气炉",
        subCategories: ["气炉", "油炉", "油气混烧炉", "角管式油/气炉"],
        techDrawing: "https://minio-api.cgboiler.com/form-test/iShot_2026-02-03_17.12.56.png",
        description: "极致紧凑的模块化结构与高效冷凝技术，适应城市中心、大型公建及精密工业园区的高端供热需求。",
        highlights: [
            "30年行业沉淀",
            "10项自主专利",
            "最多可同时掺烧13种燃料",
            "NOx排放：恒定低于30mg/m³",
            "全工况智能联动控制系统",
            "交付周期缩短：约 25%"
        ],
        metrics: [
            { label: "项目业绩", value: "175+", sub: "（覆盖全国 30+ 核心城市）", percent: 88 },
            { label: "综合利用率", value: "105.2%", sub: "（冷凝回收热量提升约 12%）", percent: 98 },
            { label: "占地节省", value: "32%", sub: "（空间占用最小化设计）", percent: 92 }
        ],
        cases: [
            { name: "中石化镇海炼化供热站", image: "https://images.unsplash.com/photo-1574621100236-d25b64cfd647?auto=format&fit=crop&w=800&q=80" },
            { name: "某制药中心洁净蒸汽项目", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    {
        id: "cat-3",
        title: "余热炉",
        subCategories: ["石化余热炉", "冶金余热炉", "垃圾焚烧余热炉", "煤气化废锅", "其它余热炉"],
        techDrawing: "https://minio-api.cgboiler.com/form-test/iShot_2026-02-03_17.12.56.png",
        description: "专注工业废弃能量深度回收，川锅在干熄焦与粉煤气化废锅领域拥有绝对的市场占有率与多项技术世界纪录。",
        highlights: [
            "世界之最：第一台超临界CDQ锅炉",
            "煤气化废锅国产化领跑者",
            "中石化/中石油一级定点供应商",
            "入选工信部绿色制造名单"
        ],
        metrics: [
            { label: "交付总量", value: "1200+", sub: "（单机年产值提升约 1500 万元）", percent: 98 },
            { label: "废热回收率", value: "96.8%", sub: "（行业平均水平的 1.25 倍）", percent: 96 },
            { label: "非计划停炉", value: "0.02%", sub: "（极致稳定的工艺运行）", percent: 99 }
        ],
        cases: [
            { name: "唐山建龙干熄焦产值示范", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80" },
            { name: "新疆广汇粉煤气化废锅", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    {
        id: "cat-4",
        title: "生物质锅炉",
        subCategories: ["生物质锅炉"],
        techDrawing: "https://minio-api.cgboiler.com/form-test/iShot_2026-02-03_17.12.56.png",
        description: "变废为宝的典型应用，支持农林废弃物、市政固废、污泥等混合燃料的高效率、防结焦燃烧处理。",
        highlights: [
            "自研V型生物质低氮燃烧技术",
            "抗腐蚀受热面涂层工艺专利",
            "多燃料自适应模糊控制算法",
            "累计减少碳排放：超 200万吨"
        ],
        metrics: [
            { label: "投用台数", value: "150+", sub: "（年处理生物质燃料超 50万吨）", percent: 85 },
            { label: "燃料兼容性", value: "15种+", sub: "（支持稻草、树皮、污泥混合）", percent: 95 },
            { label: "减排达标率", value: "100%", sub: "（SO2/NOx均远低于新规）", percent: 100 }
        ],
        cases: [
            { name: "康恒南宁垃圾焚烧项目", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80" },
            { name: "县域生物质能站示范", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    {
        id: "cat-5",
        title: "工程总包",
        subCategories: ["EPC", "PC"],
        description: "提供EPC（设计-采购-施工）与PC（采购-施工）的一站式总承包交钥匙工程，具备全产业链资源整合能力。",
        highlights: [
            "全流程BIM数字建造模型应用",
            "供应链金融与风控体系支撑",
            "海外项目本地化合规管理体系",
            "建设工期优化：平均 3-6 个月"
        ],
        metrics: [
            { label: "总包业绩", value: "45+", sub: "（足迹遍布全球 12 个国家）", percent: 92 },
            { label: "一次交验合格", value: "100%", sub: "（工程质量零瑕疵承诺）", percent: 100 },
            { label: "复购满意度", value: "85%", sub: "（深度品牌背书体现）", percent: 85 }
        ],
        cases: [
            { name: "一带一路成套出口项目", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
            { name: "某工业园智慧能源站项目", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    {
        id: "cat-6",
        title: "改造及服务",
        subCategories: ["改造业务", "备品备件", "技术服务", "运营服务", "精脱硫"],
        description: "基于川锅云平台的智慧管家。通过数字化手段为老旧机组续航，提供全生命周期的贴心保障。",
        highlights: [
            "智慧管家：AI预测性维护系统",
            "逆向工程：对非川锅老炉精准体检",
            "全省首家“5G+智慧锅炉”示范",
            "精脱硫效率：稳定达 99.5%"
        ],
        metrics: [
            { label: "服务点位数", value: "5000+", sub: "（24h 在线专家响应系统）", percent: 99 },
            { label: "改造再升值", value: "20%", sub: "（延长设备服役寿命 10年以上）", percent: 85 },
            { label: "库储备件率", value: "95%", sub: "（核心易损件全覆盖库存）", percent: 95 }
        ],
        cases: [
            { name: "数字化运维管理中心", image: "https://images.unsplash.com/photo-1551288049-bbbda5366fd9?auto=format&fit=crop&w=800&q=80" },
            { name: "某大型老旧机组低氮改造", image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    {
        id: "cat-7",
        title: "代工业务",
        subCategories: ["非标定制", "OEM制造"],
        description: "依托集团强大的制造能力与军核两用的资质底蕴，为高端装备企业提供高标准、高精度的定制化智造服务。",
        highlights: [
            "国家级“单项冠军”产品车间",
            "核电/特压/宇航级制造资质",
            "数字化焊接全流程可追溯",
            "探伤一次合格率：100%"
        ],
        metrics: [
            { label: "定制产件量", value: "10000+", sub: "（军核级精密工艺交付保障）", percent: 96 },
            { label: "制造吨位上限", value: "500t", sub: "（支持超大型容器整体发运）", percent: 90 },
            { label: "加工精度", value: "μm级", sub: "（满足航天及精密石化组件）", percent: 95 }
        ],
        cases: [
            { name: "高端容器定制生产线", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" },
            { name: "某核电机组关键组件加工", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" }
        ]
    }
];
