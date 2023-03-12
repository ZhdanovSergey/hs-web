import { CardClass, CardSet, CardType, Faction, Race, Rarity } from "./origin-enums";

export type Card = Hero | Minion | Spell | Weapon;

export interface GameEntity {
    cardClass: CardClass;
    dbfId: number;
    id: string;
    name: string;
    set: CardSet;
    type: CardType;
    artist: string;
    mechanics: string[];
    rarity: Rarity;
    referencedTags: string[];
    text: string;
    classes: string[];
}

export interface Hero extends GameEntity {
    type: CardType.HERO;
    health: number;
    armor?: number;
    collectible?: boolean;
    cost?: number;
    elite?: boolean;
    flavor: string;
    battlegroundsArmorTier?: number;
    battlegroundsBuddyDbfId?: number;
    battlegroundsHero?: boolean;
    battlegroundsSkinParentId?: number;
    hideCost?: boolean;
    race: Race;
    races: Race[];
    hideStats?: boolean;
    howToEarn: string;
    howToEarnGolden: string;
}

export interface Minion extends GameEntity {
    type: CardType.MINION;
    attack: number;
    cost: number;
    faction: Faction;
    health: number;
    collectible?: boolean;
    flavor: string;
    race: Race;
    races: Race[];
    elite?: boolean;
    targetingArrowText: string;
    overload?: number;
    spellDamage?: number;
    battlegroundsPremiumDbfId?: number;
    techLevel?: number;
    hasDiamondSkin?: boolean;
    howToEarnGolden: string;
    howToEarn: string;
    collectionText: string;
    hideCost?: boolean;
    hideStats?: boolean;
    mercenariesRole?: number;
    battlegroundsNormalDbfId?: number;
    isBattlegroundsPoolMinion?: boolean;
    isBattlegroundsBuddy?: boolean;
    battlegroundsDarkmoonPrizeTurn?: number;
    multiClassGroup: string;
    isMiniSet?: boolean;
    spellSchool: string;
    mercenariesAbilityCooldown?: number;
    durability?: number;
}

export interface Spell extends GameEntity {
    type: CardType.SPELL;
    collectible: boolean;
    cost: number;
    flavor: string;
    spellSchool: string;
    overload?: number;
    elite?: boolean;
    howToEarnGolden: string;
    spellDamage?: number;
    hideCost?: boolean;
    battlegroundsDarkmoonPrizeTurn?: number;
    attack?: number;
    puzzleType?: number;
    howToEarn: string;
    health?: number;
    collectionText: string;
    targetingArrowText: string;
    hideStats?: boolean;
    isMiniSet?: boolean;
    faction: Faction;
    mercenariesAbilityCooldown?: number;
    multiClassGroup: string;
    durability?: number;
    questReward: string;
}

export interface Weapon extends GameEntity {
    type: CardType.WEAPON;
    attack: number;
    collectible: boolean;
    cost: number;
    durability: number;
    flavor: string;
    elite?: boolean;
    overload?: number;
    howToEarn: string;
    howToEarnGolden: string;
    race: Race;
    races: Race[];
    isMiniSet?: boolean;
    targetingArrowText: string;
    health?: number;
    multiClassGroup: string;
    spellDamage?: number;
}

export interface HeroPower extends GameEntity {
    type: CardType.HERO_POWER;
    cost: number;
    collectionText: string;
    howToEarn: string;
    hideCost?: boolean;
    armor?: number;
    hideStats?: boolean;
    spellSchool: string;
    targetingArrowText: string;
    overload?: number;
    attack?: number;
    flavor: string;
}

export interface Enchantment extends GameEntity {
    type: CardType.ENCHANTMENT;
    collectionText: string;
    spellDamage?: number;
    elite?: boolean;
    health?: number;
    faction: Faction;
    race: Race;
    races: Race[];
    hideStats?: boolean;
    cost?: number;
    isMiniSet?: boolean;
    hideCost?: boolean;
    attack?: number;
    spellSchool: string;
    durability?: number;
    multiClassGroup: string;
}