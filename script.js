
function changeLanguage() {
    var lang = document.getElementById('language-selector').value;
    if (lang === 'ar') {
        document.getElementById('main-title').innerText = 'مشروع كشف التسرب لشركة جيزة العربية';
        document.getElementById('description').innerText = 'جيزة العربية شركة رائدة في تقديم حلول مبتكرة لشبكات المياه وتطوير البنية التحتية وخدمات كشف التسرب. من خلال التزام قوي بالجودة والتميز، أصبحت جيزة العربية شريكًا موثوقًا به للمدن والبلديات الكبرى، مما يضمن إدارة مستدامة للمياه وحلول بنية تحتية متقدمة في جميع أنحاء المنطقة. مهمتنا هي تقديم تقنيات متطورة وخدمات موثوقة تسهم في بناء مجتمعات أفضل وأكثر أمانًا للأجيال القادمة.';
        document.getElementById('section1').innerText = 'جمع البيانات';
        document.getElementById('section2').innerText = 'تقييم الصمامات';
        document.getElementById('section3').innerText = 'كشف التسرب';
        document.getElementById('section4').innerText = 'إصلاح التسرب';
    } else if (lang === 'fr') {
        document.getElementById('main-title').innerText = 'Projet de Détection des Fuites - Giza Arabia';
        document.getElementById('description').innerText = 'Giza Arabia est une entreprise leader spécialisée dans la fourniture de solutions innovantes pour les réseaux d'eau, le développement des infrastructures et les services de détection de fuites. Grâce à un engagement fort envers la qualité et l'excellence, Giza Arabia est devenue un partenaire de confiance pour les grandes villes et municipalités, garantissant une gestion durable de l'eau et des infrastructures avancées à travers la région. Notre mission est de fournir des technologies de pointe et des services fiables pour construire des communautés meilleures et plus sûres pour les générations futures.';
        document.getElementById('section1').innerText = 'Collecte de données';
        document.getElementById('section2').innerText = 'Évaluation des vannes';
        document.getElementById('section3').innerText = 'Détection des fuites';
        document.getElementById('section4').innerText = 'Réparation des fuites';
    } else {
        document.getElementById('main-title').innerText = 'GIZA ARABIA LEAK DETECTION PROJECT';
        document.getElementById('description').innerText = 'Giza Arabia is a leading company specialized in providing innovative solutions for water networks, infrastructure development, and leak detection services. With a strong commitment to quality and excellence, Giza Arabia has become a trusted partner for major cities and municipalities, ensuring sustainable water management and advanced infrastructure solutions across the region. Our mission is to deliver cutting-edge technologies and reliable services that contribute to building better, safer communities for future generations.';
        document.getElementById('section1').innerText = 'DATA GATHERING';
        document.getElementById('section2').innerText = 'VALVE EVALUATION';
        document.getElementById('section3').innerText = 'LEAK DETECTION';
        document.getElementById('section4').innerText = 'LEAK REPAIR';
    }
}
