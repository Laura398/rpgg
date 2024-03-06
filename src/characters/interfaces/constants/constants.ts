import { Alignments } from "../enums/alignments.enum";
import { Classes } from "../enums/classes.enum";
import { Contries, FamilySituation, SocialStatus } from "../enums/contries.enum";
import { Gender, Sexuality } from "../enums/enums";

export const GENDERS = Object.values(Gender);

export const ALIGNEMENT = Object.values(Alignments);

export const SEXUALITY = Object.values(Sexuality);

export const ORIGIN = Object.values(Contries);

export const SOCIAL_STATUS = Object.values(SocialStatus);

export const FAMILY_SITUATION = Object.values(FamilySituation);

export const CLASSES = Object.values(Classes);

export const MAGIC_CLASSES = ["Druide", "Mage", "Moine", "Prêtre", "Sorcier"];

export const NON_MAGIC_CLASSES = ["Barbare", "Bersherker", "Guerrier", "Mercenaire", "Paladin"];

export const POLYVALENT_CLASSES = ["Assassin-Voleur", "Aventurier", "Cavalier", "Chasseur"];

export const ARTS = ["Agriculture et Elevage", "Art de la scène", "Art martiaux", "Chant et Danse", "Couture et Tannerie", "Crochetage", "Cuisine et Dépeçage", "Ebenisterie", "Métallurgie", "Mixologie", "Musique", "Navigation", "Orfèvrerie", "Pratique des nœuds", "Sculpture"] as const;
export const KNOWLEDGES = ["Alchimie", "Anatomie", "Astrologie et Astronomie", "Biologie", "Botanique et Herbologie", "Culture ésotérique", "Culture générale", "Chimie", "Géologie", "Histoire et Géographie", "Littérature et Poésie", "Mathématiques", "Mécanique", "Moeurs et Traditions", "Physique", "Religion"] as const;
export const INTELLECTS = ["Analyse critique", "Concentration", "Conscience", "Deduction et Raisonnement", "Détermination", "Empathie", "Gestion du stress", "Imagination", "Improvisation", "Lecture et Ecriture", "Maîtrise de ses émotions", "Mémoire", "Philosophie", "Rethorique et Répartie", "Résiliance", "Tempérament"] as const;
export const PHYSICALS = ["Acrobatie", "Archerie", "Coordination", "Corps à corps", "Démonstration", "Destruction", "Endurance", "Eqiilibre", "Escalade", "Esquive", "Intrusion", "Natation", "Projection", "Respiration", "Souplesse"] as const;
export const SOCIALS = ["Commandement", "Communication", "Convaincre", "Démagogie", "Diplomatie", "Dissuasion", "Education", "Eloquence", "Encouragement", "Estimation", "Humour", "Intimidation", "Négociation", "Pédagogie", "Provocation", "Séduction"] as const;
export const SURVIVALS = ["Analyse de l'environnement", "Camouflage", "Campement", "Cartographie", "Chasse et Pêche", "Conservation des vivres", "Cryptozoologie", "Discrétion et Furtivité", "Dressage", "Drogues et Poisons", "Equitation", "Orientation", "Pistage", "Pose de pièges", "Vigilance", "Zoologie"] as const; 
export const ALL_SKILLS = [...ARTS, ...KNOWLEDGES, ...INTELLECTS, ...PHYSICALS, ...SOCIALS, ...SURVIVALS] as const;
