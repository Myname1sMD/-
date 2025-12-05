const universities = [
    {
        name: "КБТУ",
        city: "Алматы",
        rating: 9.1,
        programs: "IT, Oil&Gas, Finance, Maritime",
        
        // Дополнительные данные
        website: "https://kbtu.edu.kz",
        instagram: "https://instagram.com/kbtu_official",
        email: "admission@kbtu.kz",
        mapLink: "https://goo.gl/maps/kM6Y7ZJtH7F2", 
        virtualTourLink: "https://www.kbtu.edu.kz/ru/tour/",
        
        hostels: [
            { name: "Общежитие №1 (ул. Толе би)", price: "25 000 тг/мес", distance: "300 м" },
            { name: "Общежитие №2 (ул. Шевченко)", price: "30 000 тг/мес", distance: "500 м" }
        ],
        partners: [
            "University of Reading (UK)",
            "Tokyo Tech (Japan)",
            "Korea University (South Korea)",
            "NUS (Singapore)"
        ],
        news: [
            "КБТУ вошел в топ-200 вузов Азии по версии QS.",
            "Новый IT-хаб открыт при факультете ИКТ.",
            "Запущена двойная дипломная программа с Reading University."
        ],
        faculties: [
            { name: "Факультет Информационных Технологий", specialties: ["ПО", "Кибербезопасность", "МД"] },
            { name: "Факультет Геологии и Нефтегазовой Индустрии", specialties: ["Нефтегазовое дело", "Геология"] },
            { name: "Бизнес Школа", specialties: ["Финансы", "Маркетинг", "Учет и аудит"] }
        ]
    },
    {
        name: "КазНУ им. аль-Фараби",
        city: "Алматы",
        rating: 8.8,
        programs: "Humanities, Natural Sciences, Law, Economics",

        // Дополнительные данные
        website: "https://www.kaznu.kz",
        instagram: "https://instagram.com/kaznu_farabi",
        email: "info@kaznu.kz",
        mapLink: "https://goo.gl/maps/8GjB9JdG3K7Q", 
        virtualTourLink: "https://www.kaznu.kz/ru/tour-360/",
        
        hostels: [
            { name: "Студенческий Дом №10", price: "15 000 тг/мес", distance: "На территории" },
            { name: "Студенческий Дом №17", price: "18 000 тг/мес", distance: "На территории" }
        ],
        partners: [
            "Lomonosov Moscow State University (Russia)",
            "University of Cambridge (UK)",
            "Peking University (China)"
        ],
        news: [
            "КазНУ стал лидером среди вузов Центральной Азии в рейтинге THE.",
            "Открыта новая лаборатория нанотехнологий.",
            "Проведена международная конференция по устойчивому развитию."
        ],
        faculties: [
            { name: "Механико-математический факультет", specialties: ["Математика", "Механика"] },
            { name: "Факультет Философии и Политологии", specialties: ["Философия", "Религиоведение"] },
            { name: "Высшая Школа Экономики и Бизнеса", specialties: ["Менеджмент", "Экономика"] }
        ]
    },
    {
        name: "SDU (Suleyman Demirel University)",
        city: "Каскелен, Алматинская область",
        rating: 8.5,
        programs: "IT, Engineering, Education, Law",

        // Дополнительные данные
        website: "https://sdu.edu.kz",
        instagram: "https://instagram.com/sdu_kz",
        email: "admissions@sdu.edu.kz",
        mapLink: "https://goo.gl/maps/R3kX5GzM7L4X", 
        virtualTourLink: "https://sdu.edu.kz/360-tour/",
        
        hostels: [
            { name: "Главное общежитие кампуса", price: "35 000 тг/мес", distance: "На территории" }
        ],
        partners: [
            "Rochester Institute of Technology (USA)",
            "Koc University (Turkey)",
            "University of Illinois at Urbana-Champaign (USA)"
        ],
        news: [
            "Команда SDU победила в республиканском хакатоне.",
            "Запущен новый магистерский курс по Data Science.",
            "SDU получил международную аккредитацию ABET для инженерных программ."
        ],
        faculties: [
            { name: "Инженерно-технологический факультет", specialties: ["Компьютерные науки", "Электротехника"] },
            { name: "Юридический факультет", specialties: ["Международное право", "Общее право"] }
        ]
    },
    {
        name: "Astana IT University",
        city: "Астана",
        rating: 8.9,
        programs: "Pure IT, Cybersecurity, AI, Big Data",

        // Дополнительные данные
        website: "https://astanait.edu.kz",
        instagram: "https://instagram.com/astanait_university",
        email: "info@astanait.edu.kz",
        mapLink: "https://goo.gl/maps/2d7C9hM8F5Z9", 
        virtualTourLink: "Нет данных", // Реалистичное отсутствие 3D-тура
        
        hostels: [
            { name: "Студенческий Дом №1 (на территории EXPO)", price: "20 000 тг/мес", distance: "На территории" }
        ],
        partners: [
            "Inha University (South Korea)",
            "University of Arizona (USA)",
            "Moscow Institute of Physics and Technology (Russia)"
        ],
        news: [
            "AITU стал частью программы Microsoft Imagine Academy.",
            "Студенты разработали приложение для Smart City.",
            "Проведен первый в Казахстане чемпионат по киберспорту среди вузов."
        ],
        faculties: [
            { name: "Школа Информационных Технологий", specialties: ["ПО", "Big Data", "Мобильная разработка"] },
            { name: "Школа Инженерии", specialties: ["Робототехника", "Электроника"] }
        ]
    },
    {
        name: "ЕНУ им. Л.Н. Гумилева",
        city: "Астана",
        rating: 8.3,
        programs: "Technical, Natural, Social Sciences, Military",

        // Дополнительные данные
        website: "https://www.enu.kz",
        instagram: "https://instagram.com/enu_university",
        email: "pr@enu.kz",
        mapLink: "https://goo.gl/maps/vT6YgH8F3J5R", 
        virtualTourLink: "Нет данных",
        
        hostels: [
            { name: "Дом студентов №3", price: "12 000 тг/мес", distance: "На территории" },
            { name: "Дом студентов №6", price: "15 000 тг/мес", distance: "На территории" }
        ],
        partners: [
            "University of Bologna (Italy)",
            "University of Warsaw (Poland)",
            "Purdue University (USA)"
        ],
        news: [
            "ЕНУ открыл военную кафедру по новым специальностям.",
            "Профессор ЕНУ получил государственную премию.",
            "Университет поднялся в рейтинге QS EECA."
        ],
        faculties: [
            { name: "Факультет Информационных Технологий", specialties: ["Информатика", "Радиоэлектроника"] },
            { name: "Юридический факультет", specialties: ["Правоведение", "Международное право"] },
            { name: "Архитектурно-строительный факультет", specialties: ["Архитектура", "Строительство"] }
        ]
    }
];

// 4️⃣ Функция рендеринга карточек
function renderUniversities() {
    let html = "";
    universities.forEach((u, i) => {
        html += `
        <div class="university-card">
            <h3>${u.name}</h3>
            <p><b>Город:</b> ${u.city}</p>
            <p><b>Рейтинг:</b> ${u.rating}</p>
            <p><b>Направления:</b> ${u.programs}</p>

            <button onclick="openModal(${i})" class="details-btn">Подробнее</button>
            <button onclick="addToCompare(${i})" class="compare-btn">Сравнить</button>
        </div>`;
    });
    document.getElementById("universityList").innerHTML = html;
}

// 5️⃣ Логика модального окна
function openModal(i) {
    const u = universities[i];

    // Подготовка HTML для Общаг
    let hostelsHtml = u.hostels.map(h => `
        <li>${h.name} — ${h.price} (расстояние: ${h.distance})</li>
    `).join("");

    // Подготовка HTML для Партнеров
    let partnersHtml = u.partners.map(p => `<li>${p}</li>`).join("");
    
    // Подготовка HTML для Новостей
    let newsHtml = u.news.map(n => `<li>${n}</li>`).join("");

    // Подготовка HTML для Таблицы Факультетов
    let facultiesHtml = "<table>";
    facultiesHtml += "<thead><tr><th>Факультет</th><th>Специальности</th></tr></thead><tbody>";
    u.faculties.forEach(f => {
        facultiesHtml += `
            <tr>
                <td>${f.name}</td>
                <td>${f.specialties.join(", ")}</td>
            </tr>
        `;
    });
    facultiesHtml += "</tbody></table>";
    
    // Ссылки на медиа/гео
    const mediaLinks = `
        <p>
            <a href="${u.mapLink}" target="_blank">🗺️ Посмотреть расположение на карте</a> 
            ${u.virtualTourLink && u.virtualTourLink !== 'Нет данных' ? 
                ` | <a href="${u.virtualTourLink}" target="_blank">📸 3D-тур по кампусу</a>` : 
                ' | 📸 3D-тур недоступен'
            }
        </p>
    `;

    document.getElementById("modalBody").innerHTML = `
        <h2 class="modal-title">${u.name}</h2>
        <p><b>Город:</b> ${u.city} | <b>Рейтинг:</b> ${u.rating}</p>
        <hr>

        <h3>🔗 Контакты и Ресурсы</h3>
        <p><b>Официальный сайт:</b> <a href="${u.website}" target="_blank">${u.website}</a></p>
        <p><b>Instagram:</b> <a href="${u.instagram}" target="_blank">${u.instagram}</a></p>
        <p><b>Email/Приемная комиссия:</b> <a href="mailto:${u.email}">${u.email}</a></p>
        ${mediaLinks}

        <hr>
        <h3>🏠 Общежития</h3>
        <ul>${hostelsHtml}</ul>

        <h3>🌍 Международные партнёры</h3>
        <ul>${partnersHtml}</ul>
        
        <h3>📰 Последние новости</h3>
        <ul>${newsHtml}</ul>
        
        <h3>🎓 Факультеты и специальности</h3>
        ${facultiesHtml}
    `;

    document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden"; // Запретить прокрутку фона
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto"; // Вернуть прокрутку
}

// Заглушка для функции сравнения
function addToCompare(i) {
    alert(`Университет ${universities[i].name} добавлен в сравнение! (Функционал сравнения пока не реализован)`);
}

// Запуск рендеринга при загрузке страницы
document.addEventListener("DOMContentLoaded", renderUniversities);
