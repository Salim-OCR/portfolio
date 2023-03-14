//----------
//My Text AUTOMATIQUE
//---------
const texte =
  "Bonjour, je m'appelle Salim et je suis un développeur web en front-end passionné et autodidacte. Avec plus de 2 ans d'expérience, je suis en mesure de créer des interfaces utilisateur captivantes et dynamiques qui répondent aux besoins et aux exigences des clients. Je possède une expertise approfondie dans les technologies de développement web modernes telles que HTML, CSS-SASS, JavaScript etc... J'ai travaillé sur une variété de projets allant des sites web statiques aux applications web dynamiques en utilisant ces technologies et en veillant toujours à ce que l'expérience utilisateur soit optimale. Si vous cherchez un développeur web en front-end créatif, compétent et passionné, n'hésitez pas à me contacter pour discuter de votre projet.";


const myText = document.getElementById("myText");
let textePartiel = "";
let compteur = 0;

setInterval(function () {
  textePartiel += texte.charAt(compteur);

  document.getElementById("myText").innerHTML = textePartiel;

  compteur++;

  if (compteur == texte.length) {
    clearInterval(intervalId);
  }
}, 60);
