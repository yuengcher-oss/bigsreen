// 页面内容配置
const pageData = {
    'company': {
        title: '关于川锅',
        left: 'file:1-1.html',
        center: 'file:1-2.html',
        right: 'file:1-3.html'
    },
    'product': {
        title: '产品创新',
        left: 'file:2-1.html',
        center: 'file:2-2.html',
        right: 'file:2-3.html'
    },
    'cases': {
        title: '客户案例',
        left: 'file:3-1.html',
        center: 'file:3-2.html',
        right: 'file:3-3.html'
    },
    'manufacturing': {
        title: '制造引擎',
        left: 'file:4-1.html',
        center: 'file:4-2.html',
        right: 'file:4-3.html'
    },
    'supply': {
        title: '供应链生态',
        left: 'file:5-1.html',
        center: 'file:5-2.html',
        right: 'file:5-3.html'
    },
    'delivery': {
        title: '交付管理',
        left: 'file:6-1.html',
        center: 'file:6-2.html',
        right: 'file:6-3.html'
    },
    'service': {
        title: '服务运营',
        left: 'file:7-1.html',
        center: 'file:7-2.html',
        right: 'file:7-3.html'
    },
    'party': {
        title: '红色内核',
        left: 'file:8-1.html',
        center: 'file:8-2.html',
        right: 'file:8-3.html'
    }
};



document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const leftPanel = document.querySelector('.left-panel');
    const centerPanel = document.querySelector('.center-panel');
    const rightPanel = document.querySelector('.right-panel');

    // 切换页面函数
    async function switchPage(pageKey) {
        const data = pageData[pageKey];
        if (!data) return;

        // 更新导航状态
        navItems.forEach(item => {
            if (item.dataset.page) {
                item.classList.toggle('active', item.dataset.page === pageKey);
            }
        });

        // 异步填充三个板块
        await Promise.all([
            loadPanelContent(leftPanel, data.left, '模块一'),
            loadPanelContent(centerPanel, data.center, '模块二'),
            loadPanelContent(rightPanel, data.right, '模块三')
        ]);
    }

    async function loadPanelContent(panel, contentSource, defaultTitle) {
        const headerEl = panel.querySelector('h2');
        const bodyEl = panel.querySelector('.card-body') || panel.querySelector('.placeholder-content');

        if (contentSource && contentSource.startsWith('file:')) {
            const fileName = contentSource.replace('file:', '');

            // 清空容器并添加 iframe
            bodyEl.innerHTML = `<iframe src="${fileName}" style="width:100%; height:100%; border:none; background:transparent;" allowtransparency="true"></iframe>`;

            if (headerEl) {
                headerEl.textContent = getSectionTitle(fileName) || defaultTitle;
            }
        } else {
            bodyEl.innerHTML = `<div class="placeholder-content">${contentSource || '暂无内容'}</div>`;
            if (headerEl) headerEl.textContent = defaultTitle;
        }

        // 刷新动画
        panel.classList.remove('active-pulse');
        void panel.offsetWidth;
        panel.classList.add('active-pulse');
        setTimeout(() => panel.classList.remove('active-pulse'), 1000);
    }

    function getSectionTitle(fileName) {
        const titleMap = {
            '1-1.html': '公司概况',
            '1-2.html': '核心文化',
            '1-3.html': '荣誉资质',
            '2-1.html': '工业锅炉',
            '2-2.html': '电力装备',
            '2-3.html': '新能源技术',
            '3-1.html': '客户业绩',
            '3-2.html': '全球分布',
            '3-3.html': '项目案例',
            '4-1.html': '智能工厂',
            '4-2.html': '工艺研发',
            '4-3.html': '质量控制',
            '5-1.html': '供应商管理',
            '5-2.html': '仓储物流',
            '5-3.html': '协同采购',
            '6-1.html': '项目进度',
            '6-2.html': '施工动态',
            '6-3.html': '验收闭环',
            '7-1.html': '远程运维',
            '7-2.html': '售后保障',
            '7-3.html': '增值服务',
            '8-1.html': '组织建设',
            '8-2.html': '先锋模范',
            '8-3.html': '文化活动'
        };
        return titleMap[fileName];
    }

    // 绑定事件
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.dataset.page) {
                switchPage(item.dataset.page);
            }
        });
    });

    // 数字人交互逻辑
    const keyiBtn = document.getElementById('btn-keyi');
    const digitalHumanContainer = document.getElementById('digital-human');

    if (keyiBtn && digitalHumanContainer) {
        keyiBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = keyiBtn.classList.toggle('active');
            digitalHumanContainer.classList.toggle('active', isActive);
        });
    }

    // 默认打开第一页
    switchPage('company');

    // 全局手电筒光斑跟随逻辑
    const spotlight = document.getElementById('spotlight');
    if (spotlight) {
        document.addEventListener('mousemove', (e) => {
            spotlight.style.setProperty('--x', `${e.clientX}px`);
            spotlight.style.setProperty('--y', `${e.clientY}px`);
        });
    }
});
