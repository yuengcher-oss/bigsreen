/**
 * 34项行业领先产品数据表
 * 应用领域：冶金、化工、固废及其他
 */
const leadingProducts = [
    // --- 冶金领域 ---
    {
        id: 1,
        name: "双超低焦余热锅炉",
        case: "陕鼓唐山佳驿",
        feature: "行业参数指标最高最好",
        attributes: ["响应客户需求", "建龙关联公司协同"],
        year: "2021",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 2,
        name: "双超干熄焦余热锅炉",
        case: "毕源永创山西新石",
        feature: "国内首台套，参数最高",
        attributes: ["建龙关联公司协同", "联合工艺院开发"],
        year: "2021",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 3,
        name: "CDQ炼铁工艺干法除尘余热蒸汽发电系统",
        case: "内蒙古赛思普",
        feature: "国内首台套",
        attributes: ["响应客户需求", "建龙关联公司协同", "联合工艺院开发"],
        year: "2021",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 4,
        name: "高温球团竖炉固固换热中温中压装置",
        case: "磐石建龙",
        feature: "国内首台套，热效率提高一倍，冶金科技进步二等奖",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合大学开发"],
        year: "2022",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 5,
        name: "干法源头高炉煤气精脱硫项目",
        case: "内蒙古建龙",
        feature: "首台套全系统运行项目",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合大学开发", "联合材料开发"],
        year: "2022",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 6,
        name: "热风炉高温低消耗智能化改造示范",
        case: "建龙阿钢",
        feature: "国内首台套改造项目，冶金科技进步三等奖",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合工艺院开发"],
        year: "2022",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 7,
        name: "APC锅炉优化控制系统",
        case: "内蒙古建龙/黑龙江建龙",
        feature: "国内先进",
        attributes: ["开发客户需求", "建龙关联公司协同"],
        year: "2022",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 8,
        name: "转炉烟气中低温余热锅炉",
        case: "建龙西林",
        feature: "国内首台套稳定运行，冶金科技进步一等奖",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合工艺院开发"],
        year: "2023",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 9,
        name: "高温球团竖炉固固换热中温中压装置",
        case: "龙门钢铁",
        feature: "行业领先，吨矿回收电能量最高",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合大学开发"],
        year: "2024",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 10,
        name: "高温水冷旋风除尘一体化干熄焦余热锅炉",
        case: "毕源永创内蒙古建元",
        feature: "国内首台套，创新高效除尘、高寿命",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合工艺院开发"],
        year: "2024",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 11,
        name: "亚临界超高压 65MW 小容量煤气锅炉",
        case: "建龙西钢/承德建龙",
        feature: "行业领先，效率最高/煤气单耗最低",
        attributes: ["开发客户需求", "建龙关联公司协同"],
        year: "2024",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 12,
        name: "超高温超高压旋风一体化干熄焦余热锅炉",
        case: "毕源永创新石二期",
        feature: "行业领先，效率和寿命最高",
        attributes: ["开发客户需求", "建龙关联公司协同"],
        year: "2026",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 13,
        name: "高炉渣全干法固废处理及余热回收",
        case: "",
        feature: "行业首台套",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合大学开发"],
        year: "2026",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 14,
        name: "立式回转收回焦余热锅炉",
        case: "赛思普",
        feature: "世界首台套",
        attributes: ["响应客户需求", "建龙关联公司协同", "联合工艺院开发"],
        year: "2027",
        field: "冶金",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },

    // --- 化工领域 ---
    {
        id: 15,
        name: "高温兰炭固固换热装置",
        case: "河北龙成",
        feature: "国内首台套，试验装置成功运行多年",
        attributes: ["响应客户需求", "联合工艺院开发", "联合材料开发"],
        year: "2018",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 16,
        name: "3500吨级粉煤气化装置炉辐射废锅",
        case: "山东瑞星",
        feature: "世界规模最大",
        attributes: ["响应客户需求", "联合工艺院开发"],
        year: "2021",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 17,
        name: "13种化工废气清洁燃烧锅炉",
        case: "中石化镇海炼化",
        feature: "燃用燃料气油品种最多的最大容量锅炉",
        attributes: ["响应客户需求"],
        year: "2021",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 18,
        name: "240t/h ERK模块化燃气角管锅炉",
        case: "索莱双洲",
        feature: "ERK角管锅炉大型化，国内首台套",
        attributes: ["响应客户需求", "联合工艺院开发"],
        year: "2021",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 19,
        name: "防结焦煤粉锅炉",
        case: "中石化河南石化",
        feature: "行业先进，效率最高",
        attributes: ["响应客户需求"],
        year: "2022",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 20,
        name: "纯烧准东煤防结焦燃煤粉锅炉",
        case: "新疆广汇",
        feature: "行业领先，连续运行最长，效果最好",
        attributes: ["响应客户需求"],
        year: "2023",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 21,
        name: "准东煤防结焦扩容煤粉锅炉改造",
        case: "新疆广汇",
        feature: "行业领先，提高纯烧准东煤锅炉出力减少结焦，效果最好",
        attributes: ["响应客户需求", "联合大学开发"],
        year: "2025",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 22,
        name: "纯烧准东煤防结焦循环流化床锅炉",
        case: "新疆昊源",
        feature: "行业领先，同参数锅炉出力最大",
        attributes: ["响应客户需求", "联合大学开发"],
        year: "2025",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 23,
        name: "黄磷尾气焚烧CFB锅炉",
        case: "四川攀枝花",
        feature: "行业先进，腐蚀、结焦轻，连续运行最长",
        attributes: ["响应客户需求", "联合工艺院开发"],
        year: "2024",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 24,
        name: "高温兰炭余热收回固固换热装置",
        case: "新疆慧能",
        feature: "规模最大、参数最高的兰炭固态余热直接回收锅炉",
        attributes: ["响应客户需求", "联合工艺院开发"],
        year: "2025",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 25,
        name: "大型粉煤热解配套CFB燃烧煤气发生锅炉",
        case: "",
        feature: "国内首台套",
        attributes: ["响应客户需求"],
        year: "2025",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 26,
        name: "极寒地区大型整装模块化(辅化转化)余热锅炉",
        case: "白俄罗斯",
        feature: "世界最寒冷地区低温钢模块化锅炉",
        attributes: ["响应客户需求", "联合工艺院开发"],
        year: "2025",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 27,
        name: "碳素余热发电锅炉",
        case: "云南神火",
        feature: "行业先进，首次在碳素行业引入智能控制碳素余热锅炉",
        attributes: ["响应客户需求", "联合工艺院开发"],
        year: "2025",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 28,
        name: "超低热值氢氟酸废气焚烧余热锅炉",
        case: "广安诚信",
        feature: "行业领先，产汽量最大的氢氟酸尾气处理角管余热锅炉",
        attributes: ["响应客户需求", "联合工艺院开发"],
        year: "2025",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 29,
        name: "油气两用箱式锅炉",
        case: "吉林石化",
        feature: "行业领先，油气混烧小型超高压箱式锅炉",
        attributes: ["响应客户需求"],
        year: "2025",
        field: "化工",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },

    // --- 固废及其他 ---
    {
        id: 30,
        name: "动力站煤粉锅炉",
        case: "西藏巨龙",
        feature: "国内首台套，世界海拔最高",
        attributes: ["响应客户需求", "联合大学开发"],
        year: "2016",
        field: "固废及其他",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 31,
        name: "超低热值固废物(煤矸石脱硫)装置",
        case: "达州石板",
        feature: "国内首台套，工业运行煤基固废热值最低",
        attributes: ["响应客户需求", "联合大学开发"],
        year: "2017",
        field: "固废及其他",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 32,
        name: "抗结焦高效率垃圾焚烧余热锅炉",
        case: "康恒南宁",
        feature: "国内首台套，抗结焦挂砖工艺首次采用",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合工艺院开发"],
        year: "2022",
        field: "固废及其他",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 33,
        name: "抗结焦挂砖改造垃圾焚烧余热锅炉",
        case: "昆明五华",
        feature: "国内首次在现有项目通过改造实现效率提升",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合工艺院开发"],
        year: "2023",
        field: "固废及其他",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    },
    {
        id: 34,
        name: "超高压抗结焦垃圾焚烧余热锅炉",
        case: "康恒广州新会",
        feature: "国内首台套，行业发电参数最高",
        attributes: ["开发客户需求", "建龙关联公司协同", "联合工艺院开发"],
        year: "2024",
        field: "固废及其他",
        image: "https://minio-api.cgboiler.com/form-test/11-%E6%96%B0%E7%96%86%E5%B9%BF%E6%B1%87--%E7%BA%AF%E7%83%A7%E5%87%86%E4%B8%9C%E7%85%A4%E9%94%85%E7%82%89%28%E8%A1%8C%E4%B8%9A%E5%85%88%E8%BF%9B%29.jpg"
    }
];
