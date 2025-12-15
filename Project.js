const projects = [
    {
        title: "Snake Arcade Game",
        type: "game",
        days: "2025.09 ~ 2025.11",
        description:
            "설명: 네온 HUD 스타일을 입힌 레트로 스네이크 게임으로, 단순 조작에서도 시각적 몰입감을 높이는 것이 목표였습니다.\n\n문제: 기존 스네이크 게임은 단순 UI와 낮은 가시성 때문에 반복 플레이 동기가 약했고, 플레이 난이도 조절과 점수 피드백 요소도 부족했습니다.\n\n해결: 네온 HUD 테마를 적용해 시각적 임팩트를 강화하고, 점수 시스템·속도 상승·경계 애니메이션을 추가해 플레이 몰입도와 반복성을 높였습니다.",
        image: "./img/snake.png",
        url: "",
        tech: ["React",
            "HTML Canvas",
            "Game Loop",
            "State Management",
            "Keyboard Input",
            "Audio Control",
            "Responsive Web"],
    },
    {
        title: "HUD Navigation UI",
        type: "web app",
        days: "2025.10 ~ 2025.11",
        description:
            "설명: 실제 내비게이션 HUD 감성을 웹 환경에서 재현해, 길 안내 정보를 시각적으로 직관적인 형태로 표현한 UI 프로젝트입니다.\n문제: 기존 지도 라이브러리는 정보 노출이 과하거나 시각적 집중도가 낮아, 실제 주행 HUD처럼 핵심 정보만 분리해 보여주는 구조가 부족했습니다.\n\n해결: 경로·다음 턴·거리·남은 시간 등의 요소를 HUD 레이어로 재구성하고, 지도 API와 조합해 불필요한 요소를 제거한 상태에서 필요한 정보만 선명하게 전달되도록 디자인했습니다.",
        image: "./img/navi.png",
        url: "",
        tech: [
            "React",
            "Geolocation API",
            "Map API",
            "Route Data Parsing",
            "HUD Navigation UI",
            "Real-time Data Rendering",
            "Responsive Web",
            "HUD UI",
        ],
    },
    {
        title: "Dashboard",
        type: "web app",
        days: "2025.08 ~ 2025.11",
        description:
            "설명: 개인 정보를 한 화면에서 빠르게 확인할 수 있는 미니 대시보드를 네온 스타일로 구성한 프로젝트입니다.\n\n문제: 기존 대시보드 UI들은 요소가 많고 무겁게 구성되어 있어, 간단한 정보 확인에도 시야가 복잡해지는 문제가 있었습니다.\n\n해결: 카드 기반 위젯 구조로 기능을 분리하고, 최소한의 인터랙션으로 정보 접근이 가능하도록 설계했으며, 네온 컬러 포인트를 활용해 사용자 시선 흐름을 자연스럽게 유도했습니다.",
        image: "./img/dashboard.png",
        tech: [
            "React",
            "Tailwind CSS",
            "Widget UI",
            "Theme Management",
            "State Management",
            "LocalStorage",
            "Responsive Layout",
        ],

    },
    {
        title: "Toss",
        type: "mobile web",
        days: "2025.06 ~ 2025.08",
        tech: "",
        description:
            "설명: 토스의 심플한 UI·UX를 웹 형태로 재현해보는 실험적 프로젝트입니다.\n\n문제: 토스 UI는 간결함이 핵심이지만, 이를 웹에서 그대로 구현하려 하면 여백·타이포·모션의 균형이 무너져 UX가 부자연스러워지는 이슈가 있었습니다.\n\n해결: 핵심 인터랙션과 레이아웃 원리를 분해해 적용하고, 여백·정렬·전환 애니메이션을 최소 단위로 재구성해 실제 토스의 ‘가벼운 흐름’을 최대한 복제했습니다.",
        image: "./img/toss.png",
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Layout",
            "Scroll Interaction",
            "Semantic Markup",
            "SEO Basics",
        ],
    },
];

export default projects;
