
function changeLanguage() {
    var lang = document.getElementById('language-selector').value;
    if (lang === 'ar') {
        document.getElementById('main-title').innerText = 'مشروع كشف التسرب لشركة جيزة العربية';
        document.getElementById('description').innerText = 'جيزة العربية هي شركة رائدة في تقديم حلول المياه والبنية التحتية.';
        document.getElementById('section1').innerText = 'جمع البيانات';
        document.getElementById('section2').innerText = 'تقييم الصمامات';
        document.getElementById('section3').innerText = 'كشف التسرب';
        document.getElementById('section4').innerText = 'إصلاح التسرب';
    } else if (lang === 'fr') {
        document.getElementById('main-title').innerText = 'Projet de Détection des Fuites - Giza Arabia';
        document.getElementById('description').innerText = 'Giza Arabia est un leader dans les solutions d'eau et d'infrastructure.';
        document.getElementById('section1').innerText = 'Collecte de données';
        document.getElementById('section2').innerText = 'Évaluation des vannes';
        document.getElementById('section3').innerText = 'Détection des fuites';
        document.getElementById('section4').innerText = 'Réparation des fuites';
    } else {
        document.getElementById('main-title').innerText = 'GIZA ARABIA LEAK DETECTION PROJECT';
        document.getElementById('description').innerText = 'Giza Arabia is a leading company providing water and infrastructure solutions.';
        document.getElementById('section1').innerText = 'DATA GATHERING';
        document.getElementById('section2').innerText = 'VALVE EVALUATION';
        document.getElementById('section3').innerText = 'LEAK DETECTION';
        document.getElementById('section4').innerText = 'LEAK REPAIR';
    }
}
