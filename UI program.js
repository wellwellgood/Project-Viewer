// UI Program.js
import projects from "./Project.js";

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "hidden";

    const itemBox = document.getElementById("itemBox");
    const template = document.getElementById("item-template");

    const projectImageEl = document.getElementById("projectImage");
    const projectTitleEl = document.getElementById("projectTitle");
    const projectMetaEl = document.getElementById("projectMeta");
    const projectDescEl = document.getElementById("projectDesc");
    const projectlayout = document.getElementById("project-layout");
    const projectTechEl = document.getElementById("projectTech");
    const projectTextEl = document.querySelector(".project-text");

    // 1) nav 카드 자동 생성
    projects.forEach((p, index) => {
        const clone = template.cloneNode(true);
        clone.removeAttribute("id");
        clone.style.display = "flex";
        clone.style.flexDirection = "row";
        clone.style.justifyContent = "flex-start";
        clone.classList.add("nav-item");
        clone.dataset.index = index;

        const titleSpan = clone.querySelector(".nav-title");

        if (titleSpan) titleSpan.textContent = p.title;

        itemBox.appendChild(clone);
    });

    const navItems = Array.from(
        itemBox.querySelectorAll(".nav-item:not(#item-template)")
    );

    // 2) 상세 뷰 렌더 함수
    function renderProject(project) {
        if (!projectTextEl) return;

        const prevBehavior = projectTextEl.style.scrollBehavior;
        projectTextEl.style.scrollBehavior = "auto";

        // 제목
        if (projectTitleEl) {
            projectTitleEl.textContent = project.title || "";
        }

        // 제작일수 + 타입
        if (projectMetaEl) {
            const parts = [];
            if (
                project.days !== undefined &&
                project.days !== null &&
                project.days !== ""
            ) {
                parts.push(`제작기간: ${project.days}`);
            }
            if (project.type) {
                parts.push(`타입: ${project.type}`);
            }
            projectMetaEl.textContent =
                parts.length > 0 ? parts.join('\n') : "메타 정보 없음";
        }

        // 설명
        if (projectDescEl) {
            projectDescEl.textContent =
                project.description || "설명이 아직 등록되지 않았습니다.";
        }

        if (projectTechEl) {
            if (Array.isArray(project.tech) && project.tech.length > 0) {
                // 각 기술을 span으로 감싸기
                projectTechEl.innerHTML = project.tech
                    .map(t => `<span class="tech-tag">${t}</span>`)
                    .join('');
            } else {
                projectTechEl.textContent = project.tech || "";
            }
        }

        // 이미지 (3:1 중 이미지 영역)
        if (projectImageEl) {
            const imgUrl = project.image || project.background || "";

            if (imgUrl) {
                // image 값이 이미 "url("로 시작하면 그대로 사용
                if (imgUrl.startsWith("url(")) {
                    projectImageEl.style.backgroundImage = imgUrl;
                } else {
                    projectImageEl.style.backgroundImage = `url('${imgUrl}')`;
                }
            } else {
                projectImageEl.style.backgroundImage = "none";
            }

            const placeholder = projectImageEl.querySelector(".image-placeholder");
            if (placeholder) {
                placeholder.style.display = imgUrl ? "none" : "block";
            }
        }
        requestAnimationFrame(() => {
            projectTextEl.scrollTo({ top: 0, left: 0, behavior: "auto" });
            projectTextEl.style.scrollBehavior = prevBehavior;
        });
    }

    // 3) nav 카드 클릭 이벤트
    navItems.forEach((li) => {
        li.addEventListener("click", () => {
            if (!projectlayout) return;

            const isActive = li.classList.contains("active");

            // 이미 열려 있던 카드 다시 클릭 → 닫기
            if (isActive) {
                li.classList.remove("active");
                projectlayout.classList.remove("active");

                // 내용 초기화
                if (projectTitleEl) projectTitleEl.textContent = "프로젝트를 선택해 주세요";
                if (projectMetaEl)
                    projectMetaEl.textContent =
                        "왼쪽 카드에서 프로젝트를 선택하면 제작일수와 타입이 표시됩니다.";
                if (projectDescEl)
                    projectDescEl.textContent =
                        "왼쪽 nav의 카드를 클릭하면 여기에서 이미지와 함께 상세 설명이 나타납니다.";

                if (projectImageEl) {
                    projectImageEl.style.backgroundImage = "none";
                    const placeholder =
                        projectImageEl.querySelector(".image-placeholder");
                    if (placeholder) placeholder.style.display = "block";
                }

                return;
            }

            // 다른 카드 active 제거
            navItems.forEach((node) => node.classList.remove("active"));
            li.classList.add("active");

            // 레이아웃 보여주기
            projectlayout.classList.add("active");

            const index = Number(li.dataset.index);
            const project = projects[index];
            renderProject(project);
        });
    });

    // 4) clip로 nav 열고 닫기
    const nav = document.getElementById("nav");
    const clip = document.querySelector(".clip");

    if (nav && clip) {
        clip.addEventListener("click", () => {
            nav.classList.toggle("active");
            clip.classList.toggle("active");
        });
    }
});
