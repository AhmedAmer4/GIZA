function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

function changeLanguage() {
    const lang = document.getElementById('language-selector').value;
    const translations = {
        en: { title: "GIZA ARABIA LEAK DETECTION PROJECT", description: "Giza Arabia is a leading company specialized in providing innovative solutions for water networks, infrastructure development, and leak detection services.", sections: ["DATA GATHERING", "VALVE EVALUATION", "LEAK DETECTION", "LEAK REPAIR"] },
        ar: { title: "مشروع كشف التسرب لشركة جيزة العربية", description: "جيزة العربية شركة رائدة في تقديم حلول مبتكرة لشبكات المياه وتطوير البنية التحتية وخدمات كشف التسرب.", sections: ["جمع البيانات", "تقييم الصمامات", "كشف التسرب", "إصلاح التسرب"] },
        fr: { title: "Projet de Détection des Fuites - Giza Arabia", description: "Giza Arabia est une entreprise leader spécialisée dans les solutions pour les réseaux d'eau et les infrastructures.", sections: ["Collecte de données", "Évaluation des vannes", "Détection des fuites", "Réparation des fuites"] }
    };

    document.getElementById('main-title').innerText = translations[lang].title;
    document.getElementById('description').innerText = translations[lang].description;
    document.getElementById('section1').innerText = translations[lang].sections[0];
    document.getElementById('section2').innerText = translations[lang].sections[1];
    document.getElementById('section3').innerText = translations[lang].sections[2];
    document.getElementById('section4').innerText = translations[lang].sections[3];
}