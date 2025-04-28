
function hideLoader() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 1500);
}

function changeLanguage() {
    const lang = document.getElementById('language-selector').value;
    const translations = {
        en: {
            title: "GIZA ARABIA LEAK DETECTION PROJECT",
            description: "Giza Arabia is a leading company specialized in providing innovative solutions for water networks, infrastructure development, and leak detection services. With a strong commitment to quality and excellence, Giza Arabia has become a trusted partner for major cities and municipalities, ensuring sustainable water management and advanced infrastructure solutions across the region.",
            sections: ["DATA GATHERING", "VALVE EVALUATION", "LEAK DETECTION", "LEAK REPAIR"]
        },
        ar: {
            title: "مشروع كشف التسرب لشركة جيزة العربية",
            description: "جيزة العربية شركة رائدة في تقديم حلول مبتكرة لشبكات المياه وتطوير البنية التحتية وخدمات كشف التسرب. من خلال التزام قوي بالجودة والتميز، أصبحت جيزة العربية شريكًا موثوقًا به للمدن والبلديات الكبرى، مما يضمن إدارة مستدامة للمياه وحلول بنية تحتية متقدمة في جميع أنحاء المنطقة. مهمتنا هي تقديم تقنيات متطورة وخدمات موثوقة تسهم في بناء مجتمعات أفضل وأكثر أمانًا للأجيال القادمة.",
            sections: ["جمع البيانات", "تقييم الصمامات", "كشف التسرب", "إصلاح التسرب"]
        },
        fr: {
            title: "Projet de Détection des Fuites - Giza Arabia",
            description: "Giza Arabia est une entreprise leader spécialisée dans la fourniture de solutions innovantes pour les réseaux d'eau, le développement des infrastructures et les services de détection de fuites. Grâce à un engagement fort envers la qualité et l'excellence, Giza Arabia est devenue un partenaire de confiance pour les grandes villes et municipalités, garantissant une gestion durable de l'eau et des infrastructures avancées à travers la région.",
            sections: ["Collecte de données", "Évaluation des vannes", "Détection des fuites", "Réparation des fuites"]
        }
    };

    document.getElementById('main-title').innerText = translations[lang].title;
    document.getElementById('description').innerText = translations[lang].description;
    document.getElementById('section1').innerText = translations[lang].sections[0];
    document.getElementById('section2').innerText = translations[lang].sections[1];
    document.getElementById('section3').innerText = translations[lang].sections[2];
    document.getElementById('section4').innerText = translations[lang].sections[3];
}
