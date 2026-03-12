// ==========================================
// 1. BASE DE DONNÉES : MONDES (35 937 combinaisons)
// ==========================================

const mondes_structure = [
  "Métropole",
  "Forêt",
  "Océan",
  "Désert",
  "Labyrinthe",
  "Station",
  "Planète",
  "Archipel",
  "Caverne",
  "Ruines",
  "Château",
  "Toundra",
  "Nécropole",
  "Abysses",
  "Montagne",
  "Cité-usine",
  "Sanctuaire",
  "Vaisseau",
  "Dimension",
  "Marais",
  "Île",
  "Chapiteau",
  "Temple",
  "Nébuleuse",
  "Grotte",
  "Prison",
  "Cratère",
  "Vallée",
  "Jungle",
  "Dôme",
  "Tour",
  "Égouts",
  "Arbre-monde",
];

const mondes_element = [
  "Cristal",
  "Néon",
  "Lave",
  "Cendres",
  "Sang",
  "Acier",
  "Os",
  "Brume",
  "Glace",
  "Laiton",
  "Chair",
  "Sable",
  "Électricité",
  "Ombre",
  "Verre",
  "Cuivre",
  "Végétation",
  "Plasma",
  "Ronces",
  "Onde",
  "Corail",
  "Poison",
  "Papier",
  "Caouchoue",
  "Vide",
  "Goudron",
  "Lumière",
  "Fumée",
  "Rouille",
  "Or",
  "Spores",
  "Nuages",
  "Pluie",
];

const mondes_ambiance = [
  "Magique",
  "Cyberpunk",
  "Maudit",
  "Flottant",
  "Toxique",
  "Sacré",
  "Infini",
  "Oublié",
  "Ardent",
  "Souterrain",
  "Céleste",
  "Corrompu",
  "Divin",
  "Synthétique",
  "Glacial",
  "Mystique",
  "Ancestral",
  "Fracturé",
  "Luminescent",
  "Abyssal",
  "Éternel",
  "Onirique",
  "Dystopique",
  "Steampunk",
  "Chaotique",
  "Silencieux",
  "Mortel",
  "Invisible",
  "Artificiel",
  "Cosmique",
  "Solaire",
  "Lunaire",
  "Instable",
];

// ==========================================
// ⏳ ÉPOQUES (35 937 combinaisons)
// ==========================================

const epoques_periode = [
  "Futur",
  "Antiquité",
  "Moyen-Âge",
  "Renaissance",
  "Jurassique",
  "Préhistoire",
  "Rétro",
  "Cyber-ère",
  "Far-West",
  "Glaciation",
  "Ère-Stellaire",
  "Âge-Sombre",
  "Présent",
  "Âge-d'Or",
  "Révolution",
  "Victorien",
  "Genèse",
  "Crépuscule",
  "Féodal",
  "Belle-Époque",
  "Atomique",
  "Ancien",
  "Mythique",
  "Âge-de-Bronze",
  "Millénaire",
  "Industriel",
  "Temps-Zéro",
  "Prohibition",
  "Aube",
  "Galactique",
  "Origines",
  "Piraterie",
  "Post-Histoire",
];

const epoques_evenement = [
  "Apocalypse",
  "Guerre",
  "Découverte",
  "Invasion",
  "Hiver",
  "Chute",
  "Ascension",
  "Rébellion",
  "Éveil",
  "Contact",
  "Fléau",
  "Exode",
  "Renouveau",
  "Croisade",
  "Cataclysme",
  "Prospérité",
  "Extinction",
  "Singularité",
  "Fracture",
  "Miracle",
  "Famine",
  "Inquisition",
  "Lumières",
  "Mutation",
  "Faille",
  "Rupture",
  "Conquête",
  "Déclin",
  "Purge",
  "Trêve",
  "Naissance",
  "Effondrement",
  "Révélation",
];

const epoques_ton = [
  "Glacial",
  "Utopique",
  "Dystopique",
  "Magique",
  "Sombre",
  "Radieux",
  "Sanglant",
  "Oublié",
  "Mystique",
  "Mécanique",
  "Toxique",
  "Divin",
  "Hanté",
  "Corrompu",
  "Cybernétique",
  "Steampunk",
  "Paisible",
  "Maudit",
  "Éternel",
  "Instable",
  "Arcanique",
  "Cosmique",
  "Synthétique",
  "Sauvage",
  "Sacré",
  "Profane",
  "Onirique",
  "Temporel",
  "Fracturé",
  "Mortel",
  "Silencieux",
  "Lumineux",
  "Chaotique",
];

// ==========================================
// 🦸‍♂️ PROTAGONISTES (35 937 combinaisons)
// ==========================================

const persos_role = [
  "Mercenaire",
  "Androïde",
  "Félin",
  "Clown",
  "Humain",
  "Sorcier",
  "Chevalier",
  "Voleur",
  "Explorateur",
  "Fermier",
  "Détective",
  "Prince",
  "Orphelin",
  "Fantôme",
  "Mutant",
  "Artificier",
  "Pirate",
  "Chasseur",
  "Musicien",
  "Moine",
  "Nécromancien",
  "Érudit",
  "Cyborg",
  "Gardien",
  "Assassin",
  "Vagabond",
  "Alchimiste",
  "Rebelle",
  "Messager",
  "Gladiateur",
  "Empereur",
  "Paladin",
  "Hacker",
];

const persos_pouvoir = [
  "Gravité",
  "Ombres",
  "Temps",
  "Feu",
  "Électricité",
  "Glace",
  "Métamorphose",
  "Télékinésie",
  "Illusion",
  "Sang",
  "Lumière",
  "Son",
  "Végétation",
  "Acier",
  "Esprits",
  "Chaos",
  "Vide",
  "Rêves",
  "Toxines",
  "Cristaux",
  "Téléportation",
  "Guérison",
  "Nécromancie",
  "Magnétisme",
  "Runes",
  "Chronomancie",
  "Mimétisme",
  "Boucliers",
  "Portails",
  "Illusions",
  "Âmes",
  "Bêtes",
  "Mécanique",
];

const persos_trait = [
  "Amnésique",
  "Cynique",
  "Maudit",
  "Aveugle",
  "Muet",
  "Vengeur",
  "Héroïque",
  "Lâche",
  "Sanguinaire",
  "Pacifique",
  "Arrogant",
  "Solitaire",
  "Fou",
  "Brisé",
  "Joyeux",
  "Stoïque",
  "Maniaque",
  "Imprévisible",
  "Loyal",
  "Traître",
  "Obsédé",
  "Curieux",
  "Naïf",
  "Corrompu",
  "Divin",
  "Exilé",
  "Silencieux",
  "Mystérieux",
  "Vénérable",
  "Instable",
  "Éthéré",
  "Sauvage",
  "Mélancolique",
];

// ==========================================
// 🎯 ENJEUX (35 937 combinaisons)
// ==========================================

const enjeux_action = [
  "Sauver",
  "Détruire",
  "Retrouver",
  "Protéger",
  "Escorter",
  "Venger",
  "Conquérir",
  "Explorer",
  "Fuir",
  "Empêcher",
  "Survivre",
  "Purifier",
  "Corrompre",
  "Déchiffrer",
  "Bannir",
  "Libérer",
  "Assassiner",
  "Réparer",
  "Sceller",
  "Infiltrer",
  "Voler",
  "Prouver",
  "Réveiller",
  "Unifier",
  "Anéantir",
  "Restaurer",
  "Traquer",
  "Maîtriser",
  "Saboter",
  "Construire",
  "Échapper",
  "Racheter",
  "Dominer",
];

const enjeux_cible = [
  "Rosanova",
  "Artefact",
  "Dimension",
  "Divinité",
  "Virus",
  "Prophétie",
  "Souverain",
  "Flotte",
  "Entité",
  "Couronne",
  "Relique",
  "Machine",
  "Vérité",
  "IA",
  "Grimoire",
  "Faille",
  "Âme",
  "Trône",
  "Source",
  "Éclipse",
  "Continent",
  "Planète",
  "Remède",
  "Alliance",
  "Héritier",
  "Traître",
  "Code",
  "Trésor",
  "Mémoire",
  "Énergie",
  "Portail",
  "Bête",
  "Fléau",
];

const enjeux_twist = [
  "Trahison",
  "Urgence",
  "Sacrifice",
  "Folie",
  "Contre-la-montre",
  "Illusion",
  "Fatalité",
  "Dilemme",
  "Malédiction",
  "Oubli",
  "Vengeance",
  "Révélation",
  "Piège",
  "Paradoxe",
  "Amnésie",
  "Corruption",
  "Hérésie",
  "Sabotage",
  "Inconnu",
  "Impossible",
  "Mortel",
  "Secret",
  "Infini",
  "Invisible",
  "Mensonge",
  "Destin",
  "Clandestin",
  "Éphémère",
  "Instable",
  "Interdit",
  "Sacré",
  "Brutal",
  "Divin",
];

// ==========================================
// 🎵 AMBIANCES SONORES (35 937 combinaisons)
// ==========================================

const sons_genre = [
  "Synthwave",
  "Orchestral",
  "Chiptune",
  "Ambient",
  "Metal",
  "Lo-Fi",
  "Cyberpunk",
  "Jazz",
  "Classique",
  "Folk",
  "Industriel",
  "Électro",
  "Tribal",
  "Post-Rock",
  "Grunge",
  "Dubstep",
  "Trance",
  "Acoustique",
  "Rétro",
  "Symphonique",
  "Funk",
  "Blues",
  "Punk",
  "Drone",
  "Cinématique",
  "Glitch",
  "Trap",
  "Pop",
  "Gothique",
  "Synthpop",
  "Rock",
  "Reggae",
  "Opéra",
];

const sons_instrument = [
  "Basse",
  "Synthé",
  "Piano",
  "Violon",
  "Guitare",
  "Batterie",
  "Flûte",
  "Harpe",
  "Chœurs",
  "Boîte-à-rythmes",
  "Violoncelle",
  "Saxophone",
  "Trompette",
  "Luth",
  "Tambour",
  "Thérémine",
  "Orgue",
  "Clavecin",
  "Synthé-FM",
  "Guitare-Élec",
  "Banjo",
  "Accordéon",
  "Carillon",
  "Cuivres",
  "Percussions",
  "Ocarina",
  "Modulaire",
  "Contrebasse",
  "Xylophone",
  "Cloches",
  "Voix",
  "Ondes",
  "Sitar",
];

const sons_mood = [
  "Épique",
  "Mélancolique",
  "Sombre",
  "Joyeux",
  "Nerveux",
  "Éthéré",
  "Lourd",
  "Nostalgique",
  "Triomphant",
  "Chaotique",
  "Frénétique",
  "Planant",
  "Oppressant",
  "Mystérieux",
  "Hanté",
  "Dissonant",
  "Magique",
  "Agressif",
  "Paisible",
  "Envoûtant",
  "Funeste",
  "Hypnotique",
  "Rêveur",
  "Cybernétique",
  "Spatial",
  "Sauvage",
  "Serein",
  "Angoissant",
  "Mystique",
  "Poétique",
  "Brisé",
  "Lumineux",
  "Intense",
];

// ==========================================
// 🎮 GENRE (La structure du jeu)
// ==========================================
// J'ai remplacé "Rythme" par "Vibe/Direction Artistique", c'est plus visuel !
const types_genre = [
  "Rogue-like",
  "Metroidvania",
  "FPS",
  "Puzzle",
  "Plateforme",
  "Farming-Sim",
  "Survie",
  "Hack-n-Slash",
  "Tactique",
  "Gestion",
  "Tower-Defense",
  "Visual-Novel",
  "Bac-à-sable",
  "Point-n-Click",
  "Course",
  "Infiltration",
  "Aventure",
  "Horreur",
  "Die-and-Retry",
  "Jeu-de-Cartes",
];

const types_vue = [
  "2D-Latérale",
  "Vue-de-Haut",
  "Isométrique",
  "1ère-Personne",
  "3ème-Personne",
  "Texte",
  "Écran-Fixe",
  "Caméra-Épaule",
  "Hybride",
  "VR",
  "Défilement-Auto",
  "Vignette",
  "Split-Screen",
  "Caméra-Libre",
  "Vue-Satellite",
];

const types_rythme = [
  // Devenu "Direction Artistique / Vibe"
  "Pixel-Art",
  "Low-Poly",
  "Réaliste",
  "Cell-Shading",
  "Noir-et-Blanc",
  "Néon/Cyber",
  "Gothique",
  "Pastel",
  "Aquarelle",
  "Dessin-Animé",
  "Gore",
  "Mignon",
  "Minimaliste",
  "Rétro-PS1",
  "Voxel",
  "Monochrome",
  "Hyper-Coloré",
  "Crayonné",
  "Glitch-Art",
  "Abstrait",
];

// ==========================================
// 2. MOTEUR D'ANIMATION (SLOT MACHINE)
// ==========================================

// Fonction de base pour piocher un mot
function piocher(tableau) {
  return tableau[Math.floor(Math.random() * tableau.length)];
}

// Fonction qui fait défiler les mots à toute vitesse sur un rouleau spécifique
function animerRouleau(elementId, tableau, tempsArret) {
  const element = document.getElementById(elementId);
  element.classList.add("spinning"); // Ajoute l'effet de tremblement/lumière

  let tempsEcoule = 0;

  // On change le mot toutes les 50 millisecondes
  const intervalle = setInterval(() => {
    element.innerText = piocher(tableau);
    tempsEcoule += 50;

    // Quand le temps d'arrêt est atteint, on stoppe la machine
    if (tempsEcoule >= tempsArret) {
      clearInterval(intervalle); // Arrête la boucle
      element.innerText = piocher(tableau); // Tirage définitif
      element.classList.remove("spinning"); // Retire l'effet visuel
    }
  }, 50);
}

// Fonction appelée quand on clique sur le bouton "Tourner" d'une machine
function lancerMachine(theme) {
  // Les temps d'arrêt (en millisecondes) créent l'effet de suspense
  const temps1 = 800; // Le 1er rouleau s'arrête vite
  const temps2 = 1400; // Le 2ème un peu plus tard
  const temps3 = 2000; // Le 3ème s'arrête en dernier

  // --- ROUE 1 : HISTOIRE ---
  if (theme === "monde") {
    animerRouleau("monde-1", mondes_structure, temps1);
    animerRouleau("monde-2", mondes_element, temps2);
    animerRouleau("monde-3", mondes_ambiance, temps3);
  } else if (theme === "epoque") {
    animerRouleau("epoque-1", epoques_periode, temps1);
    animerRouleau("epoque-2", epoques_evenement, temps2);
    animerRouleau("epoque-3", epoques_ton, temps3);
  } else if (theme === "perso") {
    animerRouleau("perso-1", persos_role, temps1);
    animerRouleau("perso-2", persos_pouvoir, temps2);
    animerRouleau("perso-3", persos_trait, temps3);
  } else if (theme === "enjeu") {
    animerRouleau("enjeu-1", enjeux_action, temps1);
    animerRouleau("enjeu-2", enjeux_cible, temps2);
    animerRouleau("enjeu-3", enjeux_twist, temps3);
  }

  // --- ROUE 2 : GAME DESIGN ---
  else if (theme === "son") {
    animerRouleau("son-1", sons_genre, temps1);
    animerRouleau("son-2", sons_instrument, temps2);
    animerRouleau("son-3", sons_mood, temps3);
  } else if (theme === "type") {
    animerRouleau("type-1", types_genre, temps1);
    animerRouleau("type-2", types_vue, temps2);
    animerRouleau("type-3", types_rythme, temps3);
  }
}
