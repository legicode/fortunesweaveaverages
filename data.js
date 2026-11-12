const stats = ["HP", "STR", "MAG", "SPD", "DEX", "DEF", "RES", "LCK", "CHA", "MOV"];
const statsfull = ["HP", "Strength", "Magic", "Speed", "Dexterity", "Defense", "Resistance", "Luck", "Charisma", "Movement"];
const statPriority = [0, 1, 2, 4, 3, 7, 5, 6, 8, 9];

const characters = ["Cai", "Tialla", "Peter", "Ultand", "Bertrand", "Gaitz", "Jester", "Goliath", "Dante", 
	"Dietrich", "Fabio", "Esmeralda", "Mikaela", "Orchel", "Diego", "Loretta", "Seteth", "Ninae", 
	"Theodora", "Bonaventure", "Tobias", "Lilian", "Lysander", "Talimun", "Ursula", "Ludia", "Simon", "Fianna",
	"Leda", "Buccar", "Sirocco", "Mu", "Olympia", "Anatolia", "Nezha", "Sha Lan", "Dadao", "Halvin", 
	"Guzran", "Yang Jie", "Io", "Peppe", "Noctula", "Sofia", "Catania", "Nydine",
	"Zarcone", "Majide", "Benditz", "Inyoni", "Jasmine", "Alexandra", "Nuzzuo", "Kiroc"];

const classList = new Map([
	["Base", ["Commoner", "Noble", "God"]],
	["Beginner", ["Gladiator", "Hunter", "Soldier", "Ornius Rider", "Diviner"]],
	["Specialty", ["Myrmidon", "Brigand", "Pugilist", "Archer", "Rogue", "Armored Knight", "Light Cavalry", "Charioteer", "Armored Ornius", "Wing Soldier", "Shaman", "Priest"]],
	["Advanced", ["Shido", "Dancer", "Warrior", "Blacksmith", "Sniper", "Forest Knight", "Ranger", "Guardian", "Dreadnought", "Bardinger", "Cataphract", "Elephant Rider", "Charioteer", "Caladrius", "Dragoon", "Ovate", "Bishop", "Troubador"]],
	["Master", ["Swordmaster", "High Savant", "Battlemaster", "War Monk", "Bow Adept", "Bow Knight", "Shadow Seeker", "Sentinel", "Castle Knight", "Orichaldia", "Great Knight", "Elephant Rider", "Charioteer", "Celestial Trooper", "Bau Lord", "Druid", "Wiseman", "Valkyrium"]],
	["Divine", ["The Blade", "The Apsara", "The Eternal", "The Godhand", "The Calamity", "The Trident", "The Cavalier", "The Avatar"]]
]);

const classLevels = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

const defaultClasses = new Map([
	["Cai", 		["Commoner", "Ornius Rider", "Light Cavalry", "Bardinger", "Orichaldia"]],
	["Tialla", 		["Commoner", "Diviner", "Priest", "Ovate", "Wiseman"]],
	["Peter", 		["Commoner", "Hunter", "Archer", "Sniper", "Bow Adept"]],
	["Ultand", 		["Commoner", "Diviner", "Priest", "Guardian", "Sentinel"]],
	["Bertrand", 	["Noble", "Gladiator", "Brigand", "Warrior", "Battlemaster"]],
	["Gaitz", 		["Commoner", "Soldier", "Light Cavalry", "Bardinger", "Orichaldia"]],
	["Jester", 		["Commoner", "Gladiator", "Myrmidon", "Shido", "Swordmaster"]],
	["Goliath", 	["Commoner", "Soldier", "Armored Knight", "Dreadnought", "Castle Knight"]],
	["Dante", 		["Commoner", "Diviner", "Shaman", "Ovate", "Druid"]],
	["Dietrich", 	["Commoner", "Gladiator", "Myrmidon", "Shido", "Swordmaster"]],
	["Fabio", 		["Commoner", "Diviner", "Shaman", "Ovate", "Druid"]],
	["Esmeralda", 	["Commoner", "Soldier", "Armored Knight", "Guardian", "Sentinel"]],
	["Mikaela", 	["Commoner", "Gladiator", "Brigand", "Warrior", "Battlemaster"]],
	["Orchel", 		["Commoner", "Diviner", "Priest", "Bishop", "Wiseman"]],
	["Diego", 		["Commoner", "Hunter", "Rogue", "Ranger", "Shadow Seeker"]],
	["Loretta", 	["Commoner", "Gladiator", "Wing Soldier", "Shido", "Celestial Trooper"]],
	["Seteth", 		["Commoner", "Soldier", "Light Cavalry", "Dragoon", "Bau Lord"]],
	["Ninae", 		["Commoner", "Soldier", "Light Cavalry", "Bardinger", "Celestial Trooper"]],
	["Theodora", 	["Noble", "Soldier", "Armored Knight", "Guardian", "Sentinel"]],
	["Bonaventure", ["Noble", "Diviner", "Shaman", "Ovate", "High Savant"]],
	["Tobias", 		["Noble", "Soldier", "Armored Knight", "Cataphract", "Great Knight"]],
	["Lilian", 		["Commoner", "Hunter", "Archer", "Sniper", "Bow Adept"]],
	["Lysander", 	["Noble", "Ornius Rider", "Light Cavalry", "Dragoon", "Bau Lord"]],
	["Talimun", 	["Commoner", "Diviner", "Shaman", "Ovate", "Ovate"]],
	["Ursula", 		["Commoner", "Hunter", "Rogue", "Ranger", "Shadow Seeker"]],
	["Ludia", 		["Noble", "Gladiator", "Myrmidon", "Shido", "Swordmaster"]],
	["Simon", 		["Commoner", "Gladiator", "Brigand", "Blacksmith", "Battlemaster"]],
	["Fianna", 		["Commoner", "Diviner", "Priest", "Troubador", "Valkyrium"]],
	["Leda", 		["Commoner", "Hunter", "Rogue", "Dancer", "Shadow Seeker"]],
	["Buccar", 		["Commoner", "Soldier", "Armored Knight", "Cataphract", "Great Knight"]],
	["Sirocco", 	["Commoner", "Diviner", "Myrmidon", "Shido", "Shadow Seeker"]],
	["Mu", 			["Commoner", "Gladiator", "Pugilist", "Warrior", "Battlemaster"]],
	["Olympia", 	["Noble", "Diviner", "Priest", "Bishop", "Wiseman"]],
	["Anatolia", 	["Commoner", "Diviner", "Shaman", "Ovate", "Druid"]],
	["Nezha", 		["Commoner", "Gladiator", "Myrmidon", "Shido", "Swordmaster"]],
	["Sha Lan", 	["Commoner", "Diviner", "Priest", "Bishop", "Wiseman"]],
	["Dadao", 		["Commoner", "Gladiator", "Brigand", "Warrior", "Battlemaster"]],
	["Halvin", 		["Commoner", "Hunter", "Archer", "Forest Knight", "Bow Knight"]],
	["Guzran", 		["Commoner", "Gladiator", "Myrmidon", "Shido", "Orichaldia"]],
	["Yang Jie", 	["Commoner", "Diviner", "Priest", "Bishop", "War Monk"]],
	["Io", 			["Commoner", "Soldier", "Light Cavalry", "Cataphract", "Great Knight"]],
	["Peppe", 		["Noble", "Hunter", "Rogue", "Ranger", "Shadow Seeker"]],
	["Noctula", 	["Commoner", "Gladiator", "Pugilist", "Warrior", "War Monk"]],
	["Sofia", 		["Commoner", "Diviner", "Priest", "Bishop", "Wiseman"]],
	["Catania", 	["Commoner", "Soldier", "Wing Soldier", "Dragoon", "Celestial Trooper"]],
	["Nydine", 		["Commoner", "Ornius Rider", "Armored Ornius", "Caladrius", "Bau Lord"]],
	["Zarcone", 	["Commoner", "Gladiator", "Brigand", "Warrior", "Battlemaster"]],
	["Majide", 		["Commoner", "Gladiator", "Brigand", "Warrior", "Battlemaster"]],
	["Benditz", 	["Commoner", "Soldier", "Charioteer", "Charioteer", "Charioteer"]],
	["Inyoni", 		["Commoner", "Hunter", "Archer", "Sniper", "Bow Adept"]],
	["Jasmine", 	["Commoner", "Soldier", "Armored Knight", "Dreadnought", "Castle Knight"]],
	["Alexandra", 	["Noble", "Ornius Rider", "Wing Soldier", "Wing Soldier", "Celestial Trooper"]],
	["Nuzzuo", 		["Commoner", "Hunter", "Rogue", "Forest Knight", "Forest Knight"]],
	["Centurio", 	["Commoner", "Soldier", "Armored Knight", "Dreadnought", "Castle Knight"]],
	["Aswan", 		["Noble", "Hunter", "Archer", "Sniper", "Bow Knight"]],
	["Nathan", 		["Noble", "Soldier", "Light Cavalry", "Bardinger", "Great Knight"]],
	["Creek", 		["Noble", "Soldier", "Light Cavalry", "Bardinger", "Orichaldia"]],
	["Kiroc", 		["Commoner", "Hunter", "Rogue", "Sniper", "Bow Knight"]]
]);

const charBases = new Map([
	["Cai", 		[27, 10,  7,  8,  8,  6,  5,  6,  5,  0]],
	["Tialla", 		[24,  5,  8,  6,  6,  4,  6,  7,  5,  0]],
	["Peter", 		[25,  9,  3,  6, 10,  5,  4,  5,  4,  0]],
	["Ultand", 		[24,  7,  9,  6,  5,  6,  5,  8,  9,  0]],
	["Bertrand", 	[28, 11,  4,  7, 10,  7,  3,  4,  9,  0]],
	["Gaitz", 		[27, 10,  3,  7,  7,  6,  3,  5,  7,  0]],
	["Jester", 		[25,  8,  5, 10,  9,  4,  4,  6,  8,  0]],
	["Goliath", 	[32, 14,  2,  5,  4,  8,  2,  5,  4,  0]],
	["Dante", 		[25,  5,  9,  9,  6,  5,  8,  7,  5,  0]],
	["Dietrich", 	[27, 11,  6, 10, 11,  6,  4,  9, 10,  0]],
	["Fabio", 		[25,  6, 10,  7,  6,  4,  8,  6,  5,  0]],
	["Esmeralda", 	[28, 12,  4,  6,  5,  7,  3,  7,  6,  0]],
	["Mikaela", 	[26, 10,  3,  6,  7,  6,  4,  6,  8,  0]],
	["Orchel", 		[22, 15,  9,  4,  3, 12, 12,  5, 10,  0]],
	["Diego", 		[25,  9,  4,  8,  9,  5,  3,  7,  5,  0]],
	["Loretta", 	[23,  7,  6,  9,  6,  5,  4,  6,  4,  0]],
	["Seteth", 		[26, 10,  7,  8,  7,  6,  6,  6,  8,  0]],
	["Ninae", 		[28,  8,  5,  6,  8,  6,  9,  7,  6,  0]],
	["Theodora", 	[30,  6,  6,  6,  6,  7,  5,  6,  8,  0]],
	["Bonaventure", [25,  7, 10,  7,  8,  6,  8,  5,  7,  0]],
	["Tobias", 		[28, 14,  4,  5,  5,  8,  3,  6,  5,  0]],
	["Lilian", 		[24,  7,  5,  8,  8,  5,  4,  5,  5,  0]],
	["Lysander", 	[26,  8,  5,  6,  7,  7,  5,  7,  6,  0]],
	["Talimun", 	[27,  9, 11,  9,  8,  6,  7, 12,  9,  0]],
	["Ursula", 		[24,  8,  7,  8, 10,  5,  5,  7,  8,  0]],
	["Ludia", 		[25,  7,  4, 12,  7,  6,  3,  5,  5,  0]],
	["Simon", 		[28, 11,  4,  6,  7,  7,  3, 10,  4,  0]],
	["Fianna", 		[22,  4, 11,  5,  6,  4,  8,  4,  7,  0]],
	["Leda", 		[25,  8,  6, 12,  8,  6,  6,  5, 10,  0]],
	["Buccar", 		[29, 12,  4,  5,  6,  8,  3,  6,  6,  0]],
	["Sirocco", 	[26,  8,  8,  9,  8,  6,  7,  8,  8,  0]],
	["Mu", 			[23,  7,  3,  7,  8,  5,  5,  4,  4,  0]],
	["Olympia", 	[24,  5, 11,  7,  6,  5,  6,  6,  8,  0]],
	["Anatolia", 	[25,  6, 11, 10,  8,  6,  6,  6,  8,  0]],
	["Nezha", 		[26,  8,  5, 12,  6,  7,  5,  7,  5,  0]],
	["Sha Lan", 	[23,  6,  9,  5,  6,  6,  8,  8,  7,  0]],
	["Dadao", 		[28, 13,  4,  5,  5,  9,  4,  8,  5,  0]],
	["Halvin", 		[24,  7,  5,  8,  9,  5,  5,  7,  6,  0]],
	["Guzran", 		[26, 11,  4,  9,  7,  6,  3,  9,  6,  0]],
	["Yang Jie", 	[24,  6, 10,  5,  6,  5,  7,  6,  5,  0]],
	["Io", 			[27,  9,  4,  6,  7,  7,  5,  8,  6,  0]],
	["Peppe", 		[23,  6,  5, 10,  8,  5,  5,  7,  4,  0]],
	["Noctula", 	[27,  9,  3,  8,  6,  7,  4,  6,  5,  0]],
	["Sofia", 		[23,  5, 11,  5,  6,  5,  9,  6,  5,  0]],
	["Catania", 	[25,  8,  6,  9,  9,  5,  7,  6,  8,  0]],
	["Nydine", 		[26,  8,  7,  9,  7,  5,  6,  6,  6,  0]],
	["Zarcone", 	[26,  7,  3,  8, 10,  5,  4,  6,  4,  0]],
	["Majide", 		[30, 12,  3,  6,  5,  7,  3,  5,  3,  0]],
	["Benditz", 	[27,  9,  4,  6,  9,  6,  4,  6,  4,  0]],
	["Inyoni", 		[26, 12,  6,  6,  5,  6,  4,  6,  5,  0]],
	["Jasmine", 	[28,  9,  4,  5,  7,  8,  3,  7,  7,  0]],
	["Alexandra", 	[24,  7,  5,  9,  7,  5,  8,  9, 10,  0]],
	["Nuzzuo", 		[26,  9,  3, 10,  8,  6,  5,  6,  5,  0]],
	["Centurio", 	[]],
	["Aswan", 		[]],
	["Nathan", 		[]],
	["Creek", 		[]],
	["Kiroc", 		[26,  8,  3, 10, 10,  6,  4,  7,  4,  0]]
]);

const charGrowths = new Map([
	["Cai", 		[45, 45, 40, 45, 45, 35, 35, 40, 40, 0]],
	["Tialla", 		[30, 25, 45, 35, 40, 20, 40, 50, 45, 0]],
	["Peter", 		[40, 35, 20, 45, 60, 30, 25, 35, 30, 0]],
	["Ultand", 		[45, 40, 40, 35, 40, 35, 45, 55, 50, 0]],
	["Bertrand", 	[50, 55, 15, 45, 50, 45, 20, 30, 50, 0]],
	["Gaitz", 		[50, 50, 20, 40, 45, 45, 25, 40, 45, 0]],
	["Jester", 		[40, 35, 15, 60, 45, 35, 25, 40, 40, 0]],
	["Goliath", 	[55, 60,  5, 15, 30, 50, 20, 35, 20, 0]],
	["Dante", 		[30, 30, 45, 40, 40, 20, 40, 45, 30, 0]],
	["Dietrich", 	[50, 45, 30, 50, 60, 40, 30, 50, 60, 0]],
	["Fabio", 		[40, 25, 50, 35, 40, 30, 45, 35, 30, 0]],
	["Esmeralda", 	[55, 55, 20, 35, 35, 45, 25, 35, 30, 0]],
	["Mikaela", 	[50, 45, 30, 40, 35, 40, 25, 30, 40, 0]],
	["Orchel", 		[30, 60, 45, 10, 20, 60, 60, 20, 60, 0]],
	["Diego", 		[45, 40, 20, 45, 60, 35, 20, 35, 30, 0]],
	["Loretta", 	[35, 35, 35, 55, 40, 30, 40, 30, 30, 0]],
	["Seteth", 		[45, 45, 30, 40, 45, 40, 35, 30, 50, 0]],
	["Ninae", 		[45, 45, 35, 35, 45, 35, 45, 50, 40, 0]],
	["Theodora", 	[70, 50, 30, 40, 40, 40, 30, 30, 50, 0]],
	["Bonaventure", [35, 35, 45, 40, 50, 30, 40, 35, 40, 0]],
	["Tobias", 		[55, 60, 15, 25, 30, 45, 20, 40, 35, 0]],
	["Lilian", 		[35, 35, 30, 40, 55, 30, 35, 50, 25, 0]],
	["Lysander", 	[45, 40, 25, 50, 35, 40, 25, 30, 30, 0]],
	["Talimun", 	[45, 40, 45, 40, 45, 35, 40, 60, 50, 0]],
	["Ursula", 		[40, 35, 35, 50, 50, 35, 30, 40, 45, 0]],
	["Ludia", 		[40, 35, 20, 55, 45, 30, 20, 30, 30, 0]],
	["Simon", 		[50, 50, 20, 35, 40, 40, 25, 50, 35, 0]],
	["Fianna", 		[30, 35, 55, 30, 40, 20, 45, 25, 40, 0]],
	["Leda", 		[40, 35, 35, 65, 50, 30, 35, 25, 55, 0]],
	["Buccar", 		[50, 50, 20, 25, 40, 45, 20, 30, 35, 0]],
	["Sirocco", 	[40, 40, 40, 45, 50, 35, 35, 50, 45, 0]],
	["Mu", 			[50, 50, 25, 50, 50, 40, 30, 30, 40, 0]],
	["Olympia", 	[35, 35, 50, 35, 35, 30, 40, 40, 40, 0]],
	["Anatolia", 	[40, 35, 50, 50, 45, 35, 40, 40, 50, 0]],
	["Nezha", 		[45, 45, 25, 45, 50, 35, 25, 30, 25, 0]],
	["Sha Lan", 	[35, 30, 45, 35, 50, 30, 45, 35, 40, 0]],
	["Dadao", 		[50, 55, 20, 30, 35, 45, 20, 25, 30, 0]],
	["Halvin", 		[35, 35, 30, 45, 60, 30, 25, 40, 35, 0]],
	["Guzran", 		[45, 45, 20, 50, 45, 35, 20, 45, 30, 0]],
	["Yang Jie", 	[50, 35, 40, 35, 35, 30, 40, 40, 25, 0]],
	["Io", 			[45, 40, 25, 35, 45, 40, 25, 35, 35, 0]],
	["Peppe", 		[30, 30, 25, 60, 45, 30, 30, 45, 30, 0]],
	["Noctula", 	[50, 45, 20, 45, 40, 40, 20, 35, 30, 0]],
	["Sofia", 		[35, 30, 45, 30, 40, 25, 40, 30, 40, 0]],
	["Catania", 	[35, 35, 35, 55, 50, 30, 35, 40, 45, 0]],
	["Nydine", 		[45, 40, 30, 45, 40, 30, 25, 35, 35, 0]],
	["Zarcone", 	[40, 30, 20, 35, 50, 30, 25, 30, 15, 0]],
	["Majide", 		[65, 50, 15, 20, 30, 40, 10, 25,  5, 0]],
	["Benditz", 	[50, 35, 20, 35, 50, 35, 25, 30, 35, 0]],
	["Inyoni", 		[40, 50, 20, 35, 40, 40, 30, 40, 30, 0]],
	["Jasmine", 	[50, 40, 20, 30, 45, 45, 25, 40, 45, 0]],
	["Alexandra", 	[30, 35, 35, 55, 45, 30, 40, 50, 50, 0]],
	["Nuzzuo", 		[50, 50, 15, 55, 45, 20, 15, 25, 35, 0]],
	["Centurio", 	[45, 45, 25, 40, 50, 55, 30, 30, 30, 0]],
	["Aswan", 		[40, 35, 10, 40, 50, 30, 15, 30, 20, 0]],
	["Nathan", 		[55, 60, 15, 25, 60, 45, 15, 25, 30, 0]],
	["Creek", 		[45, 50, 15, 60, 50, 35, 20, 30, 35, 0]],
	["Kiroc", 		[55, 40, 15, 55, 50, 30, 15, 30, 25, 0]]
]);

const classStats = new Map([
	["Commoner", 			[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 4]],
	["Noble", 				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 4]],
	["God", 				[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 4]],
	["Gladiator", 			[ 1, 1, 0, 0, 0, 0, 0, 0, 0, 4]],
	["Hunter", 				[ 0, 0, 0, 1, 1, 0, 0, 0, 0, 4]],
	["Soldier", 			[ 0, 1, 0, 0, 0, 1, 0, 0, 0, 4]],
	["Ornius Rider", 		[ 0, 0, 0, 3, 1, 0, 0, 1, 0, 5]],
	["Diviner", 			[ 0, 0, 1, 0, 0, 0, 1, 0, 0, 4]],
	["Myrmidon",			[ 1, 0, 0, 2, 0, 0,-1, 0, 0, 5]],
	["Brigand",				[ 3, 2, 0, 0, 0, 1,-1, 0, 0, 5]],
	["Pugilist",			[ 2, 1, 0, 1, 0, 2,-1, 0, 0, 5]],
	["Archer",				[ 0, 0, 0, 2, 2, 1, 0, 0, 0, 5]],
	["Rogue",				[ 0, 0, 0, 3, 1, 0, 1, 1,-1, 5]],
	["Armored Knight", 		[ 2, 1, 0,-2, 0, 4, 0, 0, 0, 4]],
	["Light Cavalry", 		[ 1, 1, 0, 1, 0, 2, 0, 0, 1, 6]],
	["Charioteer", 			[ 3, 1, 0,-2, 3, 3, 0, 0, 1, 5]],
	["Armored Ornius", 		[ 1, 0, 0, 2, 0, 2, 0, 0, 0, 6]],
	["Wing Soldier", 		[ 0, 0, 0, 4, 1, 1, 2, 0, 1, 6]],
	["Shaman", 				[ 0, 0, 2, 1, 1, 0, 2, 0,-1, 5]],
	["Priest", 				[ 0, 0, 1, 0, 0, 0, 3, 2, 1, 5]],
	["Shido", 				[ 3, 0, 0, 7, 3, 0, 0, 0, 0, 5]],
	["Dancer", 				[ 4, 0, 0, 9, 5, 0, 0, 0, 5, 5]],
	["Warrior", 			[ 4, 4, 0, 1, 0, 0, 0, 0, 0, 5]],
	["Blacksmith", 			[ 5, 1, 1, 1, 0, 3, 1, 0, 0, 5]],
	["Sniper", 				[ 1, 0, 0, 5, 5, 0, 0, 0, 0, 5]],
	["Forest Knight", 		[ 1, 0, 0, 5, 2, 1, 0, 0, 0, 6]],
	["Ranger", 				[ 1, 0, 0, 7, 4, 0, 1, 1,-1, 5]],
	["Guardian", 			[ 3, 1, 0, 1, 0, 3, 4, 0, 0, 5]],
	["Dreadnought", 		[ 5, 3, 0,-5, 0, 9,-1, 0, 0, 4]],
	["Bardinger", 			[ 3, 0, 0, 1, 0, 1, 0, 0, 3, 6]],
	["Cataphract", 			[ 5, 2, 0,-1, 0, 5, 0, 0, 0, 5]],
	["Elephant Rider", 		[10, 2, 0,-5, 3, 7, 0, 0, 3, 5]],
	["Caladrius", 			[ 2, 0, 1, 3, 0, 1, 2, 0, 0, 6]],
	["Dragoon", 			[ 2, 1, 0, 3, 1, 1, 0, 0, 0, 6]],
	["Ovate", 				[ 1, 0, 4, 3, 4, 0, 4, 0,-1, 5]],
	["Bishop", 				[ 1, 0, 3, 1, 0, 0, 5, 3, 3, 5]],
	["Troubador", 			[ 0, 0, 1, 1, 1, 1, 2, 0, 3, 6]],
	["Swordmaster", 		[ 5, 2, 0, 7, 7, 0, 0, 0, 0, 5]],
	["High Savant", 		[ 5, 2, 2, 3, 3, 2, 0, 0, 0, 7]],
	["Battlemaster", 		[13, 6, 0, 2, 0, 4, 0, 0, 0, 5]],
	["War Monk", 			[ 5, 2, 0, 5, 2, 2, 4, 0, 0, 5]],
	["Bow Adept", 			[ 4, 2, 0, 5, 9, 0, 0, 0, 0, 5]],
	["Bow Knight", 			[ 3, 2, 0, 7, 5, 2, 0, 0, 0, 7]],
	["Shadow Seeker", 		[ 4, 0, 0, 9, 7, 0, 0, 2,-2, 5]],
	["Sentinel", 			[ 5, 4, 0, 2, 4, 4, 5, 0, 0, 5]],
	["Castle Knight", 		[ 9, 6, 0,-6, 4,13,-2, 0, 0, 4]],
	["Orichaldia", 			[ 7, 3, 0, 2, 3, 2, 0, 0, 2, 7]],
	["Great Knight", 		[12, 5, 0,-4, 2, 5, 0, 0, 0, 6]],
	["Celestial Trooper", 	[ 3, 0, 0, 5, 3, 0, 5, 0, 2, 7]],
	["Bau Lord", 			[ 5, 2, 0, 3, 3, 3, 0, 0, 0, 7]],
	["Druid", 				[ 4, 0, 7, 4, 7, 0, 5, 0,-2, 5]],
	["Wiseman", 			[ 4, 0, 5, 2, 2, 0, 8, 4, 2, 5]],
	["Valkyrium", 			[ 2, 0, 2, 2, 3, 2, 3, 0, 2, 7]],
	["The Blade", 			[ 7, 4, 4, 7, 7, 0, 0, 0, 2, 6]],
	["The Apsara", 			[ 5, 2, 4, 7, 5, 0, 0, 0, 9, 6]],
	["The Eternal", 		[12, 6, 0, 2, 1, 5, 0, 0, 2, 6]],
	["The Godhand", 		[ 7, 4, 4, 5, 2, 4, 5, 0, 2, 6]],
	["The Calamity", 		[ 5, 2, 4, 7, 5, 0, 4, 4, 0, 6]],
	["The Trident", 		[ 7, 4, 4, 2, 4, 5, 5, 0, 2, 6]],
	["The Cavalier", 		[11, 3, 0, 4, 5, 5, 1, 0, 2, 8]],
	["The Avatar", 			[ 5, 0, 9, 2, 2, 0, 9, 5, 2, 6]]
]);

const classGrowths = new Map([
	["Commoner", 			[ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
	["Noble", 				[ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
	["God", 				[ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
	["Gladiator", 			[10, 10,  0,  0,  0,  0,  0,  0,  0,  0]],
	["Hunter", 				[10,  0,  0, 10, 10,  0,  0,  0,  0,  0]],
	["Soldier", 			[10,  5,  0, -5,  5, 10,  0,  0,  0,  0]],
	["Ornius Rider", 		[10,  0,  0, 10,  0,  0,  5,  5,  0,  0]],
	["Diviner", 			[ 5, -5, 15,  0,  5, -5, 10,  0,  0,  0]],
	["Myrmidon",			[10,  0,  0, 15, 10,  0,  0,  5,  5,  0]],
	["Brigand",				[15, 15, -5,  5,  0,  5,  0,  0,  5,  0]],
	["Pugilist",			[15, 10, -5, 10,  5, 10,  0,  0,  5,  0]],
	["Archer",				[10,  0,  0, 10, 15,  5,  0,  5,  5,  0]],
	["Rogue",				[10,  0,  0, 15, 10,  0,  5,  5,  0,  0]],
	["Armored Knight", 		[10, 10, -5, -5,  5, 25, -5,  0,  5,  0]],
	["Light Cavalry", 		[10,  5, -5,  5,  0,  5,  0,  5, 10,  0]],
	["Charioteer 1", 		[10,  5, -5, -5, 15, 10,  0,  5, 10,  0]],
	["Charioteer 2", 		[20, 10,  0,  0, 20, 20,  0,  5, 15,  0]],
	["Charioteer 3", 		[20, 20,  0,  0, 25, 30,  5, 10, 20,  0]],
	["Armored Ornius",		[10,  0, -5, 10,  5, 10,  0,  5,  5,  0]],
	["Wing Soldier", 		[10,  0,  5,  0,  5,  5,  5,  5, 10,  0]],
	["Shaman", 				[ 5, -5, 15, 10, 10,-10, 10, 10,  0,  0]],
	["Priest", 				[ 5, -5, 10,  5,  5,-10, 15, 15, 10,  0]],
	["Shido", 				[10,  5,  0, 15, 10,  0, -5,  5,  5,  0]],
	["Dancer", 				[15,  5,  0, 25, 10,  0,  5, 10, 20,  0]],
	["Warrior", 			[20, 20, -5,  0,  0,  5, -5,  0,  5,  0]],
	["Blacksmith", 			[15, 10, 10,  0,  5, 10, 10,  0,  5,  0]],
	["Sniper", 				[10,  5,  0, 10, 20,  5,  5,  5,  5,  0]],
	["Forest Knight", 		[10,  5,  0, 10, 10,  5,  5,  5,  5,  0]],
	["Ranger", 				[10,  5,  0, 15, 15,  0, 10, 15,  0,  0]],
	["Guardian", 			[10, 10,  0,  0,  5, 10, 15,  5,  5,  0]],
	["Dreadnought", 		[15, 15, -5,-10,  5, 30,-10,  0,  5,  0]],
	["Bardinger", 			[10, 10, -5,  0,  0,  5, 10,  5, 10,  0]],
	["Cataphract", 			[15, 15, -5,-10,  0, 10, -5,  0,  5,  0]],
	["Elephant Rider 1", 	[20, 10, -5,-10, 20, 15, -5,  5, 10,  0]],
	["Elephant Rider 2", 	[30, 20, -5,-10, 35, 25,  5, 10, 10,  0]],
	["Caladrius", 			[15,  0, 10, 10,  5, 10, 10,  5,  5,  0]],
	["Dragoon", 			[15,  5,  0,  5,  0, 10, 10, 10,  5,  0]],
	["Ovate", 				[10, -5, 20,  5, 15,-10, 15, 10,  0,  0]],
	["Bishop", 				[10, -5, 15,  0,  5,-10, 20, 20, 10,  0]],
	["Troubador", 			[10,  0, 15,  0,  5,  5, 15, 15, 10,  0]],
	["Swordmaster", 		[15, 10,  0, 20, 15,  0,  0,  5,  5,  0]],
	["High Savant", 		[10, 15, 15, 10,  5,  5,  5,  5,  5,  0]],
	["Battlemaster", 		[25, 25, -5,  5, -5, 10, -5, -5,  5,  0]],
	["War Monk", 			[15, 10,  0, 15,  0,  5, 15,  5,  5,  0]],
	["Bow Adept", 			[15,  5,  0, 15, 20,  5,  5,  5,  5,  0]],
	["Bow Knight", 			[10, 10,  0, 15, 10,  5,  0,  5,  5,  0]],
	["Shadow Seeker", 		[15,  5,  0, 25, 15,  0, 10, 15,  0,  0]],
	["Sentinel", 			[15, 15,  0,  5,  5, 10, 15,  5,  5,  0]],
	["Castle Knight", 		[25, 20, -5,-15,  5, 30,-10,  0,  5,  0]],
	["Orichaldia", 			[15, 15, -5,  5,  0,  5,  5,  5, 10,  0]],
	["Great Knight", 		[20, 20, -5,-10,  0, 15,-10,  0,  5,  0]],
	["Celestial Trooper", 	[15,  5, -5, 10,  5,  5, 15, 15, 10,  0]],
	["Bau Lord", 			[15,  5,  0,  5,  0, 10, 10, 10,  5,  0]],
	["Druid", 				[10, -5, 30, 10, 15,-10, 20, 10,  0,  0]],
	["Wiseman", 			[10, -5, 20,  5,  0,-10, 25, 20, 10,  0]],
	["Valkyrium", 			[10,  0, 15,  5,  5,  5, 10, 15, 10,  0]],
	["The Blade", 			[15, 10, 10, 20, 20,  5,  5,  5, 10,  0]],
	["The Apsara", 			[15,  5, 10, 25, 15,  5,  5, 10, 30,  0]],
	["The Eternal", 		[30, 30,  0, 10,  0, 15,  0,  0, 10,  0]],
	["The Godhand", 		[15, 10, 10, 15,  5, 10, 15,  5, 10,  0]],
	["The Calamity", 		[15,  5, 15, 25, 20,  5, 15, 15,  5,  0]],
	["The Trident", 		[15, 15,  5, 10, 10, 15, 15,  5, 10,  0]],
	["The Cavalier", 		[20, 15,  5, 10, 10, 15, 10,  5, 15,  0]],
	["The Avatar", 			[10, -5, 30, 10,  5, -5, 30, 20, 10,  0]]
]);

const classMins = new Map([
	["Commoner", 			[ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
	["Noble", 				[ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
	["God", 				[ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0]],
	["Gladiator", 			[20,  8,  0,  3,  3,  3,  0,  0,  0,  0]],
	["Hunter", 				[20,  3,  0,  8,  5,  3,  3,  3,  0,  0]],
	["Soldier", 			[20,  5,  0,  3,  5,  5,  0,  0,  0,  0]],
	["Ornius Rider", 		[20,  5,  0,  8,  5,  3,  3,  3,  0,  0]],
	["Diviner", 			[20,  0,  8,  5,  5,  0,  5,  5,  0,  0]],
	["Myrmidon",			[25, 10,  2, 10, 10,  3,  0,  3,  0,  0]],
	["Brigand",				[30, 10,  0,  5,  3,  3,  0,  0,  0,  0]],
	["Pugilist",			[28, 10,  0, 10,  5,  5,  0,  3,  0,  0]],
	["Archer",				[23,  5,  2,  8, 10,  5,  3,  5,  0,  0]],
	["Rogue",				[23,  5,  2, 10, 10,  3,  3,  5,  0,  0]],
	["Armored Knight", 		[25, 10,  0,  0,  5, 10,  0,  0,  0,  0]],
	["Light Cavalry", 		[28, 10,  0, 10, 10, 10,  3,  8,  0,  0]],
	["Charioteer", 			[25, 10,  0,  0, 10,  8,  0,  3,  0,  0]],
	["Armored Ornius",		[28,  8,  0, 10, 10,  8,  3,  5,  0,  0]],
	["Wing Soldier", 		[25,  8,  5, 10, 10,  5, 10, 10,  0,  0]],
	["Shaman", 				[20,  2, 10, 10, 10,  0,  8,  8,  0,  0]],
	["Priest", 				[20,  2, 10,  5,  5,  0, 10, 10,  0,  0]],
	["Shido", 				[27, 11,  3, 13, 12,  4,  0,  4,  0,  0]],
	["Dancer", 				[29, 13,  4, 16, 15,  5,  1,  6,  0,  0]],
	["Warrior", 			[33, 13,  0,  7,  4,  4,  0,  1,  0,  0]],
	["Blacksmith", 			[33, 13,  8,  7,  4,  4,  0,  1,  0,  0]],
	["Sniper", 				[24,  6,  3, 10, 13,  6,  4,  6,  0,  0]],
	["Forest Knight", 		[24,  6,  3, 10, 13,  4,  4,  6,  0,  0]],
	["Ranger", 				[24,  6,  3, 13, 12,  4,  4,  7,  0,  0]],
	["Guardian", 			[27, 12,  8,  0,  7, 13,  8,  1,  0,  0]],
	["Dreadnought", 		[27, 12,  0,  0,  7, 13,  0,  1,  0,  0]],
	["Bardinger", 			[30, 12,  0, 12, 12, 12,  4,  9,  0,  0]],
	["Cataphract", 			[30, 12,  0, 12, 12, 12,  4,  9,  0,  0]],
	["Elephant Rider", 		[26, 12,  0,  0, 13, 10,  0,  4,  0,  0]],
	["Caladrius", 			[30,  9,  8, 12, 12, 10,  8,  6,  0,  0]],
	["Dragoon", 			[27,  9,  6, 13, 12,  6, 12, 12,  0,  0]],
	["Ovate", 				[21,  2, 13, 12, 12,  0, 10, 10,  0,  0]],
	["Bishop", 				[21,  2, 12,  7,  7,  0, 12, 13,  0,  0]],
	["Troubador", 			[21,  2, 12,  7,  7,  0, 12, 13,  0,  0]],
	["Swordmaster", 		[29, 13,  4, 16, 15,  5,  1,  6,  0,  0]],
	["High Savant", 		[29, 13, 10, 16, 15, 10,  1,  6,  0,  0]],
	["Battlemaster", 		[36, 16,  1,  8,  5,  6,  1,  2,  0,  0]],
	["War Monk", 			[36, 16,  1,  8,  5,  6,  1,  2,  0,  0]],
	["Bow Adept", 			[26,  8,  4, 13, 16,  8,  5,  8,  0,  0]],
	["Bow Knight", 			[26,  8,  4, 13, 16,  8,  5,  8,  0,  0]],
	["Shadow Seeker", 		[26,  8,  4, 16, 15,  5,  6,  9,  0,  0]],
	["Sentinel", 			[29, 15, 10,  2,  9, 15, 10,  2,  0,  0]],
	["Castle Knight", 		[30, 15,  1,  0,  9, 17,  0,  2,  0,  0]],
	["Orichaldia", 			[33, 14,  1, 14, 14, 14,  6, 11,  0,  0]],
	["Great Knight", 		[34, 15,  1, 13, 14, 14,  4, 10,  0,  0]],
	["Celestial Trooper", 	[29, 12,  8, 15, 14,  8, 14, 14,  0,  0]],
	["Bau Lord", 			[29, 12,  8, 15, 14,  8, 14, 14,  0,  0]],
	["Druid", 				[22,  3, 16, 14, 15,  0, 12, 12,  0,  0]],
	["Wiseman", 			[22,  3, 15,  8,  9,  0, 15, 16,  0,  0]],
	["Valkyrium", 			[22,  3, 15,  9,  9,  2, 15, 15,  0,  0]],
	["The Blade", 			[31, 15,  5, 19, 18,  6,  5,  8,  0,  0]],
	["The Apsara", 			[30, 15,  5, 20, 17,  6,  5,  8,  0,  0]],
	["The Eternal", 		[40, 20,  5, 10,  6,  8,  5,  5,  0,  0]],
	["The Godhand", 		[38, 18,  5, 11,  6,  8,  5,  5,  0,  0]],
	["The Calamity", 		[28,  9,  5, 20, 18,  6,  8, 12,  0,  0]],
	["The Trident", 		[32, 17, 11,  5, 11, 18, 13,  4,  0,  0]],
	["The Cavalier", 		[36, 17,  5, 17, 16, 16,  8, 13,  0,  0]],
	["The Avatar", 			[23,  5, 18, 10, 10, 5,  19, 19,  0,  0]]
]);

const mounted = new Map([
	["Commoner", 			"None"],
	["Noble", 				"None"],
	["God", 				"None"],
	["Gladiator", 			"None"],
	["Hunter", 				"None"],
	["Soldier", 			"None"],
	["Ornius Rider", 		"Ornius"],
	["Diviner", 			"None"],
	["Myrmidon",			"None"],
	["Brigand",				"None"],
	["Pugilist",			"None"],
	["Archer",				"None"],
	["Rogue",				"None"],
	["Armored Knight", 		"None"],
	["Light Cavalry", 		"Horse"],
	["Charioteer", 			"Horse"],
	["Armored Ornius", 		"Ornius"],
	["Wing Soldier", 		"Pegasus"],
	["Shaman", 				"None"],
	["Priest", 				"None"],
	["Shido", 				"None"],
	["Dancer", 				"None"],
	["Warrior", 			"None"],
	["Blacksmith", 			"None"],
	["Sniper", 				"None"],
	["Forest Knight", 		"Horse"],
	["Ranger", 				"None"],
	["Guardian", 			"None"],
	["Dreadnought", 		"None"],
	["Bardinger", 			"Horse"],
	["Cataphract", 			"Horse"],
	["Elephant Rider", 		"Elephant"],
	["Caladrius", 			"Ornius"],
	["Dragoon", 			"Bau"],
	["Ovate", 				"None"],
	["Bishop", 				"None"],
	["Troubador", 			"Horse"],
	["Swordmaster", 		"None"],
	["High Savant", 		"Horse"],
	["Battlemaster", 		"None"],
	["War Monk", 			"None"],
	["Bow Adept", 			"None"],
	["Bow Knight", 			"Horse"],
	["Shadow Seeker", 		"None"],
	["Sentinel", 			"None"],
	["Castle Knight", 		"None"],
	["Orichaldia", 			"Horse"],
	["Great Knight", 		"Horse"],
	["Celestial Trooper", 	"Pegasus"],
	["Bau Lord", 			"Bau"],
	["Druid", 				"None"],
	["Wiseman", 			"None"],
	["Valkyrium", 			"Horse"],
	["The Blade", 			"None"],
	["The Apsara", 			"None"],
	["The Eternal", 		"None"],
	["The Godhand", 		"None"],
	["The Calamity", 		"None"],
	["The Trident", 		"None"],
	["The Cavalier", 		"Horse"],
	["The Avatar", 			"None"]
]);

const mounts = new Map([
	["Horse", 		["Wild Horse 5", "Wild Horse 4", "Wild Horse 3", "Wild Horse 2", "Wild Horse 1",
					"Monoceros 5", "Monoceros 4", "Monoceros 3", "Monoceros 2", "Monoceros 1",
					"Ferghanan Horse 5", "Ferghanan Horse 4", "Ferghanan Horse 3", "Ferghanan Horse 2", "Ferghanan Horse 1",
					"Black Horse 5", "Black Horse 4", "Black Horse 3", "Black Horse 2", "Black Horse 1",
					"Rocinan 5", "Rocinan 4", "Rocinan 3", "Rocinan 2", "Rocinan 1"]],
	["Ornius", 		["Wild Ornius 5", "Wild Ornius 4", "Wild Ornius 3", "Wild Ornius 2", "Wild Ornius 1",
					"White Ornius 5", "White Ornius 4", "White Ornius 3", "White Ornius 2", "White Ornius 1",
					"Meganius 5", "Meganius 5", "Meganius 3", "Meganius 2", "Meganius 1",
					"Red Meganius 5", "Red Meganius 4", "Red Meganius 3", "Red Meganius 2", "Red Meganius 1",
					"Magonius 5", "Magonius 4", "Magonius 3", "Magonius 2", "Magonius 1",
					"Black Magonius 5", "Black Magonius 4", "Black Magonius 3", "Black Magonius 2", "Black Magonius 1"]],
	["Pegasus", 	["Wild Pegasus 5", "Wild Pegasus 4", "Wild Pegasus 3", "Wild Pegasus 2", "Wild Pegasus 1",
					"Dark Pegasus 5", "Dark Pegasus 4", "Dark Pegasus 3", "Dark Pegasus 2", "Dark Pegasus 1",
					"Falicorn 5", "Falicorn 4", "Falicorn 3", "Falicorn 2", "Falicorn 1",
					"Red Falicorn 5", "Red Falicorn 4", "Red Falicorn 3", "Red Falicorn 2", "Red Falicorn 1",
					"Bucephalus 5", "Bucephalus 4", "Bucephalus 3", "Bucephalus 2", "Bucephalus 1"]],
	["Bau", 		["Wild Bau 5", "Wild Bau 4", "Wild Bau 3", "Wild Bau 2", "Wild Bau 1",
					"Red Bau 5", "Red Bau 4", "Red Bau 3", "Red Bau 2", "Red Bau 1",
					"Black Bau 5", "Black Bau 4", "Black Bau 3", "Black Bau 2", "Black Bau 1"]],
	["Elephant", 	["Saramis Elephant 5", "Saramis Elephant 4", "Saramis Elephant 3", "Saramis Elephant 2", "Saramis Elephant 1"]]
]);

const mountStats = new Map([
	["Standard", 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Wild Horse 1", 		[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Wild Horse 2", 		[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]],
	["Wild Horse 3", 		[0, 0, 0, 0, 2, 1, 0, 0, 0, 0]],
	["Wild Horse 4", 		[0, 0, 0, 1, 2, 1, 0, 0, 0, 0]],
	["Wild Horse 5", 		[0, 0, 0, 1, 3, 1, 0, 0, 0, 0]],
	["Monoceros 1", 		[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Monoceros 2", 		[0, 0, 0, 0, 1, 0, 0, 1, 0, 0]],
	["Monoceros 3", 		[0, 0, 0, 0, 1, 0, 0, 2, 0, 0]],
	["Monoceros 4", 		[0, 0, 0, 1, 1, 0, 0, 2, 0, 0]],
	["Monoceros 5", 		[0, 0, 0, 1, 1, 0, 0, 3, 0, 0]],
	["Ferghanan Horse 1", 	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Ferghanan Horse 2", 	[0, 1, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Ferghanan Horse 3", 	[0, 1, 0, 0, 1, 1, 0, 0, 0, 0]],
	["Ferghanan Horse 4", 	[0, 2, 0, 0, 1, 1, 0, 0, 0, 0]],
	["Ferghanan Horse 5", 	[0, 2, 0, 0, 1, 2, 0, 0, 0, 0]],
	["Black Horse 1", 		[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Black Horse 2", 		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0]],
	["Black Horse 3", 		[0, 1, 0, 1, 1, 0, 0, 0, 0, 0]],
	["Black Horse 4", 		[0, 1, 0, 2, 1, 0, 0, 0, 0, 0]],
	["Black Horse 5", 		[0, 1, 0, 3, 1, 0, 0, 0, 0, 0]],
	["Rocinan 1", 			[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]],
	["Rocinan 2", 			[0, 0, 0, 0, 1, 2, 0, 0, 0, 0]],
	["Rocinan 3", 			[0, 0, 0, 0, 2, 2, 0, 0, 0, 0]],
	["Rocinan 4", 			[0, 0, 0, 1, 2, 2, 0, 0, 0, 0]],
	["Rocinan 5", 			[0, 0, 0, 1, 3, 2, 0, 0, 0, 0]],
	["Wild Ornius 1", 		[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Wild Ornius 2", 		[0, 0, 0, 1, 1, 0, 0, 0, 0, 0]],
	["Wild Ornius 3", 		[0, 0, 0, 1, 2, 0, 0, 0, 0, 0]],
	["Wild Ornius 4", 		[0, 0, 0, 2, 2, 0, 0, 0, 0, 0]],
	["Wild Ornius 5", 		[0, 0, 0, 2, 3, 0, 0, 0, 0, 0]],
	["White Ornius 1", 		[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["White Ornius 2", 		[0, 0, 0, 0, 1, 0, 1, 0, 0, 0]],
	["White Ornius 3", 		[0, 0, 0, 0, 1, 0, 2, 0, 0, 0]],
	["White Ornius 4", 		[0, 0, 0, 1, 1, 0, 2, 0, 0, 0]],
	["White Ornius 5", 		[0, 0, 0, 1, 1, 0, 3, 0, 0, 0]],
	["Meganius 1", 			[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Meganius 2", 			[0, 0, 0, 0, 1, 1, 0, 0, 0, 0]],
	["Meganius 3", 			[0, 0, 0, 0, 1, 2, 0, 0, 0, 0]],
	["Meganius 4", 			[0, 0, 0, 0, 1, 3, 0, 0, 0, 0]],
	["Meganius 5", 			[0, 1, 0, 0, 1, 3, 0, 0, 0, 0]],
	["Red Meganius 1", 		[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Red Meganius 2", 		[0, 1, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Red Meganius 3", 		[0, 1, 0, 0, 1, 1, 0, 0, 0, 0]],
	["Red Meganius 4", 		[0, 2, 0, 0, 1, 1, 0, 0, 0, 0]],
	["Red Meganius 5", 		[0, 3, 0, 0, 1, 1, 0, 0, 0, 0]],
	["Magonius 1", 			[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Magonius 2", 			[0, 0, 1, 0, 1, 0, 0, 0, 0, 0]],
	["Magonius 3", 			[0, 0, 2, 0, 1, 0, 0, 0, 0, 0]],
	["Magonius 4", 			[0, 0, 2, 0, 2, 0, 0, 0, 0, 0]],
	["Magonius 5", 			[0, 0, 3, 0, 2, 0, 0, 0, 0, 0]],
	["Black Magonius 1", 	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Black Magonius 2", 	[0, 0, 1, 0, 1, 0, 0, 0, 0, 0]],
	["Black Magonius 3", 	[0, 0, 2, 0, 1, 0, 0, 0, 0, 0]],
	["Black Magonius 4", 	[0, 0, 2, 1, 1, 0, 0, 0, 0, 0]],
	["Black Magonius 5", 	[0, 0, 2, 2, 1, 0, 0, 0, 0, 0]],
	["Wild Pegasus 1", 		[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Wild Pegasus 2", 		[0, 0, 0, 1, 0, 0, 1, 0, 0, 0]],
	["Wild Pegasus 3", 		[0, 0, 0, 2, 0, 0, 1, 0, 0, 0]],
	["Wild Pegasus 4", 		[0, 0, 0, 3, 0, 0, 1, 0, 0, 0]],
	["Wild Pegasus 5", 		[0, 0, 0, 3, 0, 0, 2, 0, 0, 0]],
	["Dark Pegasus 1", 		[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Dark Pegasus 2", 		[0, 0, 1, 1, 0, 0, 0, 0, 0, 0]],
	["Dark Pegasus 3", 		[0, 0, 2, 1, 0, 0, 0, 0, 0, 0]],
	["Dark Pegasus 4", 		[0, 0, 2, 2, 0, 0, 0, 0, 0, 0]],
	["Dark Pegasus 5", 		[0, 0, 3, 2, 0, 0, 0, 0, 0, 0]],
	["Falicorn 1", 			[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Falicorn 2", 			[0, 0, 0, 2, 0, 0, 0, 0, 0, 0]],
	["Falicorn 3", 			[0, 0, 0, 2, 1, 0, 0, 0, 0, 0]],
	["Falicorn 4", 			[0, 0, 0, 3, 1, 0, 0, 0, 0, 0]],
	["Falicorn 5", 			[0, 1, 0, 3, 1, 0, 0, 0, 0, 0]],
	["Red Falicorn 1", 		[0, 0, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Red Falicorn 2", 		[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Red Falicorn 3", 		[0, 2, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Red Falicorn 4", 		[0, 2, 0, 1, 1, 0, 0, 0, 0, 0]],
	["Red Falicorn 5", 		[0, 2, 0, 2, 1, 0, 0, 0, 0, 0]],
	["Bucephalus 1", 		[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Bucephalus 2", 		[0, 1, 0, 1, 0, 0, 1, 0, 0, 0]],
	["Bucephalus 3", 		[0, 1, 0, 2, 0, 0, 1, 0, 0, 0]],
	["Bucephalus 4", 		[0, 1, 0, 3, 0, 0, 1, 0, 0, 0]],
	["Bucephalus 5", 		[0, 1, 0, 3, 0, 0, 2, 0, 0, 0]],
	["Wild Bau 1", 			[0, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Wild Bau 2", 			[0, 1, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Wild Bau 3", 			[0, 1, 0, 1, 1, 0, 0, 0, 0, 0]],
	["Wild Bau 4", 			[0, 2, 0, 1, 1, 0, 0, 0, 0, 0]],
	["Wild Bau 5", 			[0, 2, 0, 1, 2, 0, 0, 0, 0, 0]],
	["Red Bau 1", 			[0, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Red Bau 2", 			[0, 2, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Red Bau 3", 			[0, 2, 0, 0, 1, 0, 0, 0, 0, 0]],
	["Red Bau 4", 			[0, 2, 0, 0, 2, 0, 0, 0, 0, 0]],
	["Red Bau 5", 			[0, 3, 0, 0, 2, 0, 0, 0, 0, 0]],
	["Black Bau 1", 		[0, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Black Bau 2", 		[0, 1, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Black Bau 3", 		[0, 2, 0, 1, 0, 0, 0, 0, 0, 0]],
	["Black Bau 4", 		[0, 2, 0, 2, 0, 0, 0, 0, 0, 0]],
	["Black Bau 5", 		[0, 2, 0, 3, 0, 0, 0, 0, 0, 0]],
	["Saramis Elephant 1",	[0, 1, 0, 0, 1, 1, 0, 1, 0, 0]],
	["Saramis Elephant 2",	[0, 2, 0, 0, 2, 2, 0, 2, 0, 0]],
	["Saramis Elephant 3",	[0, 3, 0, 0, 3, 3, 0, 3, 0, 0]],
	["Saramis Elephant 4",	[0, 4, 0, 0, 4, 4, 0, 4, 0, 0]],
	["Saramis Elephant 5",	[0, 5, 0, 0, 5, 5, 0, 5, 0, 0]],
	["N/A", 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
]);

const mountGrowths = new Map([
	["Standard", 			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Wild Horse 1", 		[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Wild Horse 2", 		[0, 0, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Wild Horse 3", 		[0, 0, 0, 5, 5, 5, 0, 0, 0, 0]],
	["Wild Horse 4", 		[5, 0, 0, 5, 5, 5, 0, 0, 0, 0]],
	["Wild Horse 5", 		[5, 0, 0, 5, 5, 5, 5, 0, 0, 0]],
	["Monoceros 1", 		[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Monoceros 2", 		[0, 0, 0, 0, 5, 0, 5, 0, 0, 0]],
	["Monoceros 3", 		[0, 0, 0, 0, 5, 0,10, 0, 0, 0]],
	["Monoceros 4", 		[0, 0, 0, 5, 5, 0,10, 0, 0, 0]],
	["Monoceros 5", 		[5, 0, 0, 5, 5, 0,10, 0, 0, 0]],
	["Ferghanan Horse 1", 	[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Ferghanan Horse 2", 	[0, 5, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Ferghanan Horse 3", 	[0, 5, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Ferghanan Horse 4", 	[5, 5, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Ferghanan Horse 5", 	[5, 5, 0, 0, 5,10, 0, 0, 0, 0]],
	["Black Horse 1", 		[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Black Horse 2", 		[0, 0, 0, 5, 5, 0, 0, 0, 0, 0]],
	["Black Horse 3", 		[0, 5, 0, 5, 5, 0, 0, 0, 0, 0]],
	["Black Horse 4", 		[5, 5, 0, 5, 5, 0, 0, 0, 0, 0]],
	["Black Horse 5", 		[5, 5, 0,10, 5, 0, 0, 0, 0, 0]],
	["Rocinan 1", 			[0, 0, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Rocinan 2", 			[0, 0, 0, 5, 5, 5, 0, 0, 0, 0]],
	["Rocinan 3", 			[0, 0, 0, 5, 5, 5, 5, 0, 0, 0]],
	["Rocinan 4", 			[5, 0, 0, 5, 5, 5, 5, 0, 0, 0]],
	["Rocinan 5", 			[5, 0, 0, 5, 5,10, 5, 0, 0, 0]],
	["Wild Ornius 1", 		[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Wild Ornius 2", 		[0, 0, 0, 5, 5, 0, 0, 0, 0, 0]],
	["Wild Ornius 3", 		[0, 0, 0, 5,10, 0, 0, 0, 0, 0]],
	["Wild Ornius 4", 		[0, 0, 0,10,10, 0, 0, 0, 0, 0]],
	["Wild Ornius 5", 		[0, 0, 0,10,15, 0, 0, 0, 0, 0]],
	["White Ornius 1", 		[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["White Ornius 2", 		[0, 0, 0, 0, 5, 0, 5, 0, 0, 0]],
	["White Ornius 3", 		[0, 0, 0, 5, 5, 0, 5, 0, 0, 0]],
	["White Ornius 4", 		[0, 0, 0, 5, 5, 0,10, 0, 0, 0]],
	["White Ornius 5", 		[0, 0, 0, 5, 5, 0,15, 0, 0, 0]],
	["Meganius 1", 			[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Meganius 2", 			[0, 0, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Meganius 3", 			[0, 0, 0, 0, 5,10, 0, 0, 0, 0]],
	["Meganius 4", 			[0, 0, 0, 0, 5,15, 0, 0, 0, 0]],
	["Meganius 5", 			[0, 5, 0, 0, 5,15, 0, 0, 0, 0]],
	["Red Meganius 1", 		[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Red Meganius 2", 		[0, 5, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Red Meganius 3", 		[0, 5, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Red Meganius 4", 		[0,10, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Red Meganius 5", 		[0,15, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Magonius 1", 			[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Magonius 2", 			[0, 0, 5, 0, 5, 0, 0, 0, 0, 0]],
	["Magonius 3", 			[0, 0,10, 0, 5, 0, 0, 0, 0, 0]],
	["Magonius 4", 			[0, 0,10, 0,10, 0, 0, 0, 0, 0]],
	["Magonius 5", 			[0, 0,15, 0,10, 0, 0, 0, 0, 0]],
	["Black Magonius 1", 	[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Black Magonius 2", 	[0, 0, 5, 0, 5, 0, 0, 0, 0, 0]],
	["Black Magonius 3", 	[0, 0, 5, 5, 5, 0, 0, 0, 0, 0]],
	["Black Magonius 4", 	[0, 0,10, 5, 5, 0, 0, 0, 0, 0]],
	["Black Magonius 5", 	[0, 0,10,10, 5, 0, 0, 0, 0, 0]],
	["Wild Pegasus 1", 		[0, 0, 0, 5, 0, 0, 0, 0, 0, 0]],
	["Wild Pegasus 2", 		[0, 0, 0, 5, 0, 0, 5, 0, 0, 0]],
	["Wild Pegasus 3", 		[0, 0, 0,10, 0, 0, 5, 0, 0, 0]],
	["Wild Pegasus 4", 		[0, 0, 0,15, 0, 0, 5, 0, 0, 0]],
	["Wild Pegasus 5", 		[0, 0, 0,15, 0, 0,10, 0, 0, 0]],
	["Dark Pegasus 1", 		[0, 0, 0, 5, 0, 0, 0, 0, 0, 0]],
	["Dark Pegasus 2", 		[0, 0, 5, 5, 0, 0, 0, 0, 0, 0]],
	["Dark Pegasus 3", 		[0, 0,10, 5, 0, 0, 0, 0, 0, 0]],
	["Dark Pegasus 4", 		[0, 0,10,10, 0, 0, 0, 0, 0, 0]],
	["Dark Pegasus 5", 		[0, 0,15,10, 0, 0, 0, 0, 0, 0]],
	["Falicorn 1", 			[0, 0, 0, 5, 0, 0, 0, 0, 0, 0]],
	["Falicorn 2", 			[0, 0, 0,10, 0, 0, 0, 0, 0, 0]],
	["Falicorn 3", 			[0, 0, 0,10, 5, 0, 0, 0, 0, 0]],
	["Falicorn 4", 			[0, 0, 0,15, 5, 0, 0, 0, 0, 0]],
	["Falicorn 5", 			[0, 5, 0,15, 5, 0, 0, 0, 0, 0]],
	["Red Falicorn 1", 		[0, 0, 0, 5, 0, 0, 0, 0, 0, 0]],
	["Red Falicorn 2", 		[0, 5, 0, 5, 0, 0, 0, 0, 0, 0]],
	["Red Falicorn 3", 		[0, 5, 0, 5, 5, 0, 0, 0, 0, 0]],
	["Red Falicorn 4", 		[0,10, 0, 5, 5, 0, 0, 0, 0, 0]],
	["Red Falicorn 5", 		[0,10, 0,10, 5, 0, 0, 0, 0, 0]],
	["Bucephalus 1", 		[0, 5, 0, 5, 0, 0, 0, 0, 0, 0]],
	["Bucephalus 2", 		[0, 5, 0, 5, 0, 0, 5, 0, 0, 0]],
	["Bucephalus 3", 		[0, 5, 0,10, 0, 0, 5, 0, 0, 0]],
	["Bucephalus 4", 		[0, 5, 0,15, 0, 0, 5, 0, 0, 0]],
	["Bucephalus 5", 		[0, 5, 0,15, 0, 0,10, 0, 0, 0]],
	["Wild Bau 1", 			[0, 5, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Wild Bau 2", 			[0, 5, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Wild Bau 3", 			[0, 5, 0, 5, 5, 0, 0, 0, 0, 0]],
	["Wild Bau 4", 			[0,10, 0, 5, 5, 0, 0, 0, 0, 0]],
	["Wild Bau 5", 			[0,10, 0, 5,10, 0, 0, 0, 0, 0]],
	["Red Bau 1", 			[0, 5, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Red Bau 2", 			[0,10, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Red Bau 3", 			[0,10, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Red Bau 4", 			[0,10, 0, 0,10, 0, 0, 0, 0, 0]],
	["Red Bau 5", 			[0,15, 0, 0,10, 0, 0, 0, 0, 0]],
	["Black Bau 1", 		[0, 5, 0, 0, 0, 0, 0, 0, 0, 0]],
	["Black Bau 2", 		[0, 5, 0, 5, 0, 0, 0, 0, 0, 0]],
	["Black Bau 3", 		[0, 5, 0,10, 0, 0, 0, 0, 0, 0]],
	["Black Bau 4", 		[0,10, 0,10, 0, 0, 0, 0, 0, 0]],
	["Black Bau 5", 		[0,10, 0,15, 0, 0, 0, 0, 0, 0]],
	["Saramis Elephant 1", 	[0, 0, 0, 0, 5, 0, 0, 0, 0, 0]],
	["Saramis Elephant 2", 	[0, 0, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Saramis Elephant 3", 	[5, 0, 0, 0, 5, 5, 0, 0, 0, 0]],
	["Saramis Elephant 4", 	[5, 0, 0, 0, 5, 5, 0, 5, 0, 0]],
	["Saramis Elephant 5", 	[5, 5, 0, 0, 5, 5, 0, 5, 0, 0]],
	["N/A", 				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
]);

const genders = new Map([
	["Cai", 		"M"],
	["Tialla", 		"F"],
	["Peter", 		"M"],
	["Ultand", 		"F"],
	["Bertrand", 	"M"],
	["Gaitz", 		"M"],
	["Jester", 		"M"],
	["Goliath", 	"M"],
	["Dante", 		"F"],
	["Dietrich", 	"M"],
	["Fabio", 		"M"],
	["Esmeralda", 	"F"],
	["Mikaela", 	"F"],
	["Orchel", 		"F"],
	["Diego", 		"M"],
	["Loretta", 	"F"],
	["Seteth", 		"M"],
	["Ninae", 		"F"],
	["Theodora", 	"F"],
	["Bonaventure", "M"],
	["Tobias", 		"M"],
	["Lilian", 		"F"],
	["Lysander", 	"M"],
	["Talimnun", 	"M"],
	["Ursula", 		"F"],
	["Ludia", 		"F"],
	["Simon", 		"M"],
	["Fianna", 		"F"],
	["Leda", 		"F"],
	["Buccar", 		"M"],
	["Sirocco", 	"M"],
	["Mu", 			"F"],
	["Olympia", 	"F"],
	["Anatolia", 	"F"],
	["Nezha", 		"M"],
	["Sha Lan", 	"F"],
	["Dadao", 		"M"],
	["Halvin", 		"F"],
	["Guzran", 		"M"],
	["Yang Jie", 	"M"],
	["Io", 			"M"],
	["Peppe", 		"M"],
	["Noctula", 	"F"],
	["Sofia", 		"F"],
	["Catania", 	"F"],
	["Nydine", 		"F"],
	["Zarcone", 	"M"],
	["Majide", 		"M"],
	["Benditz", 	"M"],
	["Inyoni", 		"F"],
	["Jasmine", 	"F"],
	["Alexandra", 	"F"],
	["Nuzzuo", 		"M"],
	["Kiroc", 		"M"],
]);

const maxLevel = 75;

var leftStats = [[],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var rightStats = [[],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function generateRow(table, level){
	let row = table.insertRow(table.rows.length);
	let side;
	if (table == leftCharStats){
		side = "left";
	}
	else if (table == rightCharStats){
		side = "right";
	}
	let classSelect = row.insertCell(0).innerHTML = '<select id="'+side+'Class'+level+'" onChange="classChange(\''+side+'\', '+level+')"></select>';
	let mountSelect = row.insertCell(1).innerHTML = '<select id="'+side+'Mount'+level+'" onChange="mountChange(\''+side+'\', '+level+')">></select>';
	let lv = row.insertCell(2).innerHTML = '<b>'+level+'</b>';
	let hp = row.insertCell(3).innerHTML = '<span id="'+side+'HP'+level+'">–</span>';
	let str = row.insertCell(4).innerHTML = '<span id="'+side+'STR'+level+'">–</span>';
	let mag = row.insertCell(5).innerHTML = '<span id="'+side+'MAG'+level+'">–</span>';
	let spd = row.insertCell(6).innerHTML = '<span id="'+side+'SPD'+level+'">–</span>';
	let dex = row.insertCell(7).innerHTML = '<span id="'+side+'DEX'+level+'">–</span>';
	let def = row.insertCell(8).innerHTML = '<span id="'+side+'DEF'+level+'">–</span>';
	let res = row.insertCell(9).innerHTML = '<span id="'+side+'RES'+level+'">–</span>';
	let lck = row.insertCell(10).innerHTML = '<span id="'+side+'LCK'+level+'">–</span>';
	let cha = row.insertCell(11).innerHTML = '<span id="'+side+'CHA'+level+'">–</span>';
	let mov = row.insertCell(12).innerHTML = '<span id="'+side+'MOV'+level+'">–</span>';
}

function generateHeader(table, tier){
	let row = table.insertRow(table.rows.length);
	let classSelect = row.insertCell(0).outerHTML = '<th class="classes"><u>'+tier+'</u></th>';
	let mountSelect = row.insertCell(1).outerHTML = '<th class="mount"><u>Mount</u></th>';
	let lv = row.insertCell(2).outerHTML = '<th>Lv.</th>';
	let hp = row.insertCell(3).outerHTML = '<th>HP</th>';
	let str = row.insertCell(4).outerHTML = '<th>Str</th>';
	let mag = row.insertCell(5).outerHTML = '<th>Mag</th>';
	let spd = row.insertCell(6).outerHTML = '<th>Spd</th>';
	let dex = row.insertCell(7).outerHTML = '<th>Dex</th>';
	let def = row.insertCell(8).outerHTML = '<th>Def</th>';
	let res = row.insertCell(9).outerHTML = '<th>Res</th>';
	let lck = row.insertCell(10).outerHTML = '<th>Lck</th>';
	let cha = row.insertCell(11).outerHTML = '<th>Cha</th>';
	let mov = row.insertCell(12).outerHTML = '<th>Mov</th>';
}

function listClasses(table, baseLevel=1){
	if (table == leftCharStats){
		side = "left";
	}
	else if (table == rightCharStats){
		side = "right";
	}
	for (let i = 1; i < baseLevel; i++){
		while (this[side+"Class"+i].length > 0){
			this[side+"Class"+i].remove(0);
		}
		this[side+"Class"+i].add(new Option("Unavailable"));
		this[side+"Class"+i].disabled = true;
		this[side+"Mount"+i].add(new Option("N/A"));
		this[side+"Mount"+i].disabled = true;
	}
	for (let i = baseLevel; i <= maxLevel; i++){
		while (this[side+"Class"+i].length > 0){
			this[side+"Class"+i].remove(0);
		}
		if (i < 5){
			this[side+"Class"+i].add(new Option(defaultClasses.get(this[side+"Char"+1].value)[0]));
			for (let j = 0; j < classList.get("Beginner").length; j++){
				if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Beginner")[j]) == "None"){
					this[side+"Class"+i].add(new Option(classList.get("Beginner")[j]));
				}
			}
			if (this[side+"Char"+1].value == "Leda"){
				this[side+"Class"+i].add(new Option("Dancer"));
			}
		}
		if (i >= 5 && i < 20){
			for (let j = 0; j < classList.get("Beginner").length; j++){
				if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Beginner")[j]) == "None"){
					this[side+"Class"+i].add(new Option(classList.get("Beginner")[j]));
				}
			}
			this[side+"Class"+i].add(new Option(defaultClasses.get(this[side+"Char"+1].value)[0]));
			if (i < 15 && this[side+"Char"+1].value == "Leda"){
				this[side+"Class"+i].add(new Option("Dancer"));
			}
			this[side+"Class"+i].value = defaultClasses.get(this[side+"Char"+1].value)[1];
		}
		if (i >= 15 && i < 20){
			for (let j = 0; j < classList.get("Specialty").length; j++){
				if (genders.get(this[side+"Char"+1].value) == "F" || classList.get("Specialty")[j] != "Wing Soldier"){
					if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Specialty")[j]) == "None"){
						this[side+"Class"+i].add(new Option(classList.get("Specialty")[j]));
					}
				}
			}
			if (this[side+"Char"+1].value == "Leda"){
				this[side+"Class"+i].add(new Option("Dancer"));
			}
		}
		if (i >= 20 && i < 35){
			for (let j = 0; j < classList.get("Specialty").length; j++){
				if (genders.get(this[side+"Char"+1].value) == "F" || classList.get("Specialty")[j] != "Wing Soldier"){
					if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Specialty")[j]) == "None"){
						this[side+"Class"+i].add(new Option(classList.get("Specialty")[j]));
					}
				}
			}
			for (let j = 0; j < classList.get("Beginner").length; j++){
				if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Beginner")[j]) == "None"){
					this[side+"Class"+i].add(new Option(classList.get("Beginner")[j]));
				}
			}
			this[side+"Class"+i].add(new Option(defaultClasses.get(this[side+"Char"+1].value)[0]));
			if (i < 30 && this[side+"Char"+1].value == "Leda"){
				if (this[side+"Char"+1].value == "Leda"){
					this[side+"Class"+i].add(new Option("Dancer"));
				}
			}
			this[side+"Class"+i].value = defaultClasses.get(this[side+"Char"+1].value)[2];
		}
		if (i >= 30 && i < 35){
			for (let j = 0; j < classList.get("Advanced").length; j++){
				if (classList.get("Advanced")[j] != "Charioteer"){
					if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Advanced")[j]) == "None"){
						this[side+"Class"+i].add(new Option(classList.get("Advanced")[j]));
					}
				}
			}
		}
		if (i >= 35 && i < 45){
			for (let j = 0; j < classList.get("Advanced").length; j++){
				if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Advanced")[j]) == "None"){
					this[side+"Class"+i].add(new Option(classList.get("Advanced")[j]));
				}
			}
			for (let j = 0; j < classList.get("Specialty").length; j++){
				if (classList.get("Advanced")[j] != "Charioteer"){
					if (genders.get(this[side+"Char"+1].value) == "F" || classList.get("Specialty")[j] != "Wing Soldier"){
						if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Specialty")[j]) == "None"){
							this[side+"Class"+i].add(new Option(classList.get("Specialty")[j]));
						}
					}
				}
			}
			for (let j = 0; j < classList.get("Beginner").length; j++){
				if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Beginner")[j]) == "None"){
					this[side+"Class"+i].add(new Option(classList.get("Beginner")[j]));
				}
			}
			this[side+"Class"+i].add(new Option(defaultClasses.get(this[side+"Char"+1].value)[0]));
			this[side+"Class"+i].value = defaultClasses.get(this[side+"Char"+1].value)[3];
		}
		if (i >= 40 && i < 45){
			for (let j = 0; j < classList.get("Master").length; j++){
				if (!["Charioteer", "Elephant Rider"].includes(classList.get("Master")[j])){
					if (genders.get(this[side+"Char"+1].value) == "F" || classList.get("Master")[j] != "Celestial Trooper"){
						if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Master")[j]) == "None"){
							this[side+"Class"+i].add(new Option(classList.get("Master")[j]));
						}
					}
				}
			}
		}
		if (i >= 45){
			for (let j = 0; j < classList.get("Master").length; j++){
				if (genders.get(this[side+"Char"+1].value) == "F" || classList.get("Master")[j] != "Celestial Trooper"){
					if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Master")[j]) == "None"){
						this[side+"Class"+i].add(new Option(classList.get("Master")[j]));
					}
				}
			}
			for (let j = 0; j < classList.get("Divine").length; j++){
				if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Divine")[j]) == "None"){
					this[side+"Class"+i].add(new Option(classList.get("Divine")[j]));
				}
			}
			for (let j = 0; j < classList.get("Advanced").length; j++){
				if (!["Charioteer", "Elephant Rider"].includes(classList.get("Advanced")[j])){
					if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Advanced")[j]) == "None"){
						this[side+"Class"+i].add(new Option(classList.get("Advanced")[j]));
					}
				}
			}
			for (let j = 0; j < classList.get("Specialty").length; j++){
				if (classList.get("Specialty")[j] != "Charioteer"){
					if (genders.get(this[side+"Char"+1].value) == "F" || classList.get("Specialty")[j] != "Wing Soldier"){
						if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Specialty")[j]) == "None"){
							this[side+"Class"+i].add(new Option(classList.get("Specialty")[j]));
						}
					}
				}
			}
			for (let j = 0; j < classList.get("Beginner").length; j++){
				if (!["Orchel", "Goliath"].includes(this[side+"Char"+1].value) || mounted.get(classList.get("Beginner")[j]) == "None"){
					this[side+"Class"+i].add(new Option(classList.get("Beginner")[j]));
				}
			}
			this[side+"Class"+i].add(new Option(defaultClasses.get(this[side+"Char"+1].value)[0]));
			this[side+"Class"+i].value = defaultClasses.get(this[side+"Char"+1].value)[4];
		}
		listMounts(side, i);
	}
}

function listMounts(side, level){
	while (this[side+"Mount"+level].length > 0){
		this[side+"Mount"+level].remove(0);
	}
	if (mounted.get(this[side+"Class"+level].value) == "None"){
		this[side+"Mount"+level].add(new Option("N/A"));
		this[side+"Mount"+level].disabled = true;
	}
	else{
		this[side+"Mount"+level].disabled = false;
		this[side+"Mount"+level].add(new Option("Standard"));
		for (let i = 0; i < mounts.get(mounted.get(this[side+"Class"+level].value)).length; i++){
			this[side+"Mount"+level].add(new Option(mounts.get(mounted.get(this[side+"Class"+level].value))[i]));
		}
	}
	if (this[side+"Char"+1].value == "Alexandra" && mounted.get(this[side+"Class"+level].value) == "Pegasus"){
		if (level <= 25){
			this[side+"Mount"+level].value = "Bucephalus 2";
		}
		else{
			this[side+"Mount"+level].value = "Bucephalus 3";
		}
	}
	if (this[side+"Char"+1].value == "Io" && mounted.get(this[side+"Class"+level].value) == "Horse"){
		if (level <= 25){
			this[side+"Mount"+level].value = "Rocinan 2";
		}
		else{
			this[side+"Mount"+level].value = "Rocinan 3";
		}
	}
	if (level > 1){
		if (!["Io", "Alexandra"].includes(this[side+"Char"+1].value) || level != 26){
			if (mounted.get(this[side+"Class"+level].value) == mounted.get(this[side+"Class"+(level-1)].value)){
				this[side+"Mount"+level].value = this[side+"Mount"+(level-1)].value;
			}
		}
	}
}

function classChange(side, level, update=true){
	listMounts(side, level);
	if (![4, 19, 34, 44, maxLevel].includes(level)){
		this[side+"Class"+(level*1+1)].value = this[side+"Class"+level].value;
		classChange(side, level+1, false);
	}
	if (update){
		updateStats(side, level);
	}
}

function mountChange(side, level, update=true){
	if (level < maxLevel && mounted.get(this[side+"Class"+(level*1+1)].value) == mounted.get(this[side+"Class"+level].value)){
		this[side+"Mount"+(level*1+1)].value = this[side+"Mount"+level].value;
		mountChange(side, level+1, false);
	}
	if (update){
		updateStats(side, level);
	}
}

function generateTable(table){
	for (let i = 1; i <= 4; i++){
		generateRow(table, i);
	}
	generateHeader(table, "Beginner")
	for (let i = 5; i <= 19; i++){
		generateRow(table, i);
	}
	generateHeader(table, "Specialty")
	for (let i = 20; i <= 34; i++){
		generateRow(table, i);
	}
	generateHeader(table, "Advanced")
	for (let i = 35; i <= 44; i++){
		generateRow(table, i);
	}
	generateHeader(table, "Master")
	for (let i = 45; i <= maxLevel; i++){
		generateRow(table, i);
	}
	generateHeader(table, "Master")
	listClasses(table);
}

function updateChar(side){
	while (this[side+"CharRecruit1"].length > 0){
		this[side+"CharRecruit1"].options.remove(0);
		this[side+"CharRecruit2"].options.remove(0);
	}
	if (this[side+"Char1"].value == "Ultand"){
		this[side+"CharRecruit1"].options.add(new Option("Cai"));
		this[side+"CharRecruit2"].options.add(new Option("Cai"));
	}
	if (!["Io", "Alexandra"].includes(this[side+"Char1"].value)){
		this[side+"CharRecruit1"].options.add(new Option("1"));
		this[side+"CharRecruit2"].options.add(new Option("1"));
	}
	if (!["Cai", "Bertrand", "Dietrich", "Orchel", "Theodora", "Talimun", "Leda", "Anatolia", "Io", "Alexandra"].includes(this[side+"Char1"].value)){
		for (let i = 2; i <= 35; i++){
			this[side+"CharRecruit1"].options.add(new Option(i));
			this[side+"CharRecruit2"].options.add(new Option(i));
		}
	}
	if (["Io", "Alexandra"].includes(this[side+"Char1"].value)){
		for (let i = 20; i <= 35; i++){
			this[side+"CharRecruit1"].options.add(new Option(i));
			this[side+"CharRecruit2"].options.add(new Option(i));
		}
	}
	listClasses(this[side+"CharStats"]);
	autoLevel(side);
}

function autoLevel(side){
	let level = this[side+"CharRecruit"+1].value;
	let ultand = false;
	if (level == "Cai"){
		level = 13;
		ultand = true;
	}
	for (let i = 0; i < 10; i++){
		this[side+"Stats"][1][i] = charBases.get(this[side+"Char1"].value)[i] * 1;
	}
	if (level > 1){
		this[side+"Class"+1].value = defaultClasses.get(this[side+"Char"+1].value)[0];
		this[side+"Class"+1].disabled = true;
		listMounts(side, level);
		if (["Io", "Alexandra"].includes(this[side+"Char1"].value)){
			this[side+"Mount"+1].selectedIndex = this[side+"Mount"+1].length - 1;
		}
		else{
			this[side+"Mount"+1].selectedIndex = 0;
		}
		this[side+"Mount"+1].disabled = true;
	}
	for (let j = 0; j < 10; j++){
		this[side+stats[j]+1].innerHTML = "–";
	}
	for (let i = 2; i <= level; i++){
		if (i < level){
			this[side+"Class"+i].value = defaultClasses.get(this[side+"Char"+1].value)[classLevels[i]];
			this[side+"Class"+i].disabled = true;
			listMounts(side, i);
			if (this[side+"Char1"].value == "Io" && i >= 20 && i <= 25){
				this[side+"Mount"+i].value = "Rocinan 2"
			}
			else if (this[side+"Char1"].value == "Io" && i > 25){
				this[side+"Mount"+i].value = "Rocinan 3";
			}
			else if (this[side+"Char1"].value == "Alexandra" && i >= 20 && i <= 25){
				this[side+"Mount"+i].value = "Bucephalus 2";
			}
			else if (this[side+"Char1"].value == "Alexandra" && i > 25){
				this[side+"Mount"+i].value = "Bucephalus 3";
			}
			else{
				this[side+"Mount"+i].selectedIndex = 0;
			}
			this[side+"Mount"+i].disabled = true;
		}
		let statsRaised = 0;
		for (let j = 0; j < 9; j++){
			let cap = 99;
			if (j == 0){
				cap = 120;
			}
			if (this[side+"Char1"].value == "Io" && i > 20 && i <= 25){
				this[side+"Stats"][i][j] = Math.min(Math.round((this[side+"Stats"][i-1][j] + (charGrowths.get(this[side+"Char1"].value)[j] + classGrowths.get(this[side+"Class"+(i-1)].value)[j] + mountGrowths.get("Rocinan 2")[j]) * 0.008 - 0.01) * 100) / 100, cap);
			}
			else if (this[side+"Char1"].value == "Io" && i > 25){
				this[side+"Stats"][i][j] = Math.min(Math.round((this[side+"Stats"][i-1][j] + (charGrowths.get(this[side+"Char1"].value)[j] + classGrowths.get(this[side+"Class"+(i-1)].value)[j] + mountGrowths.get("Rocinan 3")[j]) * 0.008 - 0.01) * 100) / 100, cap);
			}
			else if (this[side+"Char1"].value == "Alexandra" && i > 20 && i <= 25){
				this[side+"Stats"][i][j] = Math.min(Math.round((this[side+"Stats"][i-1][j] + (charGrowths.get(this[side+"Char1"].value)[j] + classGrowths.get(this[side+"Class"+(i-1)].value)[j] + mountGrowths.get("Bucephalus 2")[j]) * 0.008 - 0.01) * 100) / 100, cap);
			}
			else if (this[side+"Char1"].value == "Alexandra" && i > 25){
				this[side+"Stats"][i][j] = Math.min(Math.round((this[side+"Stats"][i-1][j] + (charGrowths.get(this[side+"Char1"].value)[j] + classGrowths.get(this[side+"Class"+(i-1)].value)[j] + mountGrowths.get("Bucephalus 3")[j]) * 0.008 - 0.01) * 100) / 100, cap);
			}
			else{
				this[side+"Stats"][i][j] = Math.min(Math.round((this[side+"Stats"][i-1][j] + (charGrowths.get(this[side+"Char1"].value)[j] + classGrowths.get(this[side+"Class"+(i-1)].value)[j]) * 0.008 - 0.01) * 100) / 100, cap);
			}
			if (Math.floor(this[side+"Stats"][i][j]) - Math.floor(this[side+"Stats"][i-1][j]) > 0){
				statsRaised++;
			}
			this[side+stats[j]+i].innerHTML = "–";
		}
		this[side+"MOV"+i].innerHTML = "–";
		while (statsRaised < 2){
			let peak = 0;
			let highestStat;
			for (let j = 0; j < 9; j++){
				let check = Math.round((this[side+"Stats"][i][statPriority[j]] - Math.floor(this[side+"Stats"][i][statPriority[j]])) * 100) / 100
				if (check > peak){
					peak = check;
					highestStat = statPriority[j];
				}
			}
			this[side+"Stats"][i][highestStat] = Math.ceil(this[side+"Stats"][i][highestStat]);
			statsRaised++;
		}
	}
	this[side+"Class"+level].disabled = false;
	listMounts(side, level);
	if (mounted.get(this[side+"Class"+level].value) != "None"){
		this[side+"Mount"+level].disabled = false;
	}
	if (ultand){
		this[side+"Stats"][level] = [30, 11, 16, 10, 10, 9, 12, 15, 15, 0];
	}
	for (let i = 0; i < 10; i++){
		this[side+"Stats"][level][i] = Math.floor(this[side+"Stats"][level][i]);
	}
	updateStats(side, level);
}

function updateStats(side, level){
	for (let i = 0; i < 10; i++){
		if (level == 1){
			this[side+"Stats"][1][i] = charBases.get(this[side+"Char1"].value)[i] * 1;
		}
		else {
			let autoLevel = this[side+"CharRecruit1"].value;
			if (autoLevel == "Cai"){
				autoLevel = 13;
			}
			if (level == autoLevel){
				this[side+"Stats"][level][i] = Math.floor(this[side+"Stats"][level][i]);
			}
			else{
				let cap = 99;
				if (i == 0){
					cap = 120;
				}
				let lastClass = this[side+"Class"+(level-1)].value;
				if (lastClass == "Charioteer"){
					if (i <= 35){
						lastClass += " 1";
					}
					else if (i > 35 && i <= 45){
						lastClass += " 2";
					}
					else{
						lastClass += " 3";
					}
				}
				else if (this[side+"Class"+(level-1)].value == "Elephant Rider"){
					if (i <= 45){
						lastClass += " 1";
					}
					else{
						lastClass += " 2";
					}
				}
				if (this[side+"Class"+(level-1)].value == "Charioteer"){
					this[side+"Stats"][level][i] = Math.min(Math.round((this[side+"Stats"][level-1][i] + (charGrowths.get(this[side+"Char1"].value)[i] + classGrowths.get(lastClass)[i] + mountGrowths.get(this[side+"Mount"+(level-1)].value)[i] * 2) * 0.01) * 100) / 100, cap);
				}
				else {
					this[side+"Stats"][level][i] = Math.min(Math.round((this[side+"Stats"][level-1][i] + (charGrowths.get(this[side+"Char1"].value)[i] + classGrowths.get(lastClass)[i] + mountGrowths.get(this[side+"Mount"+(level-1)].value)[i]) * 0.01) * 100) / 100, cap);
				}
			}
		}
		let min = false;
		if (this[side+"Char1"].value != "Leda" || this[side+"Class"+(level)].value != "Dancer"){
			if (this[side+"Stats"][level][i] < classMins.get(this[side+"Class"+(level)].value)[i]){
				this[side+"Stats"][level][i] = classMins.get(this[side+"Class"+(level)].value)[i];
				min = true;
			}
		}
		if (this[side+"Class"+(level)].value == "Charioteer"){
			this[side+stats[i]+level].innerHTML = Math.round((this[side+"Stats"][level][i] + classStats.get(this[side+"Class"+level].value)[i] + mountStats.get(this[side+"Mount"+level].value)[i] * 2) * 100) / 100;
		}
		else{
			this[side+stats[i]+level].innerHTML = Math.round((this[side+"Stats"][level][i] + classStats.get(this[side+"Class"+level].value)[i] + mountStats.get(this[side+"Mount"+level].value)[i]) * 100) / 100;
		}
		if (display1.value == "Rounded"){
			this[side+stats[i]+level].innerHTML = Math.round(this[side+stats[i]+level].innerHTML);
		}
		if (min == true){
			this[side+stats[i]+level].innerHTML = "<b><u>"+this[side+stats[i]+level].innerHTML+"</u></b></span";
		}
	}
	for (let i = level*1+1; i <= maxLevel; i++){
		this[side+"Class"+i].disabled = false;
		if (mounted.get(this[side+"Class"+i].value) != "None"){
			this[side+"Mount"+i].disabled = false;
		}
		for (let j = 0; j < 10; j++){
			let cap = 99;
			if (j == 0){
				cap = 120;
			}
			let lastClass = this[side+"Class"+(i-1)].value;
			if (lastClass == "Charioteer"){
				if (i <= 35){
					lastClass += " 1";
				}
				else if (i > 35 && i <= 45){
					lastClass += " 2";
				}
				else{
					lastClass += " 3";
				}
			}
			else if (this[side+"Class"+(i-1)].value == "Elephant Rider"){
				if (i <= 45){
					lastClass += " 1";
				}
				else{
					lastClass += " 2";
				}
			}
			if (this[side+"Class"+(i-1)].value == "Charioteer"){
				this[side+"Stats"][i][j] = Math.min(Math.round((this[side+"Stats"][i-1][j] + (charGrowths.get(this[side+"Char1"].value)[j] + classGrowths.get(lastClass)[j] + mountGrowths.get(this[side+"Mount"+(i-1)].value)[j] * 2) * 0.01) * 100) / 100, cap);
			}
			else {
				this[side+"Stats"][i][j] = Math.min(Math.round((this[side+"Stats"][i-1][j] + (charGrowths.get(this[side+"Char1"].value)[j] + classGrowths.get(lastClass)[j] + mountGrowths.get(this[side+"Mount"+(i-1)].value)[j]) * 0.01) * 100) / 100, cap);
			}
			let min = false;
			if (this[side+"Char1"].value != "Leda" || this[side+"Class"+(level)].value != "Dancer"){
				if (this[side+"Stats"][i][j] < classMins.get(this[side+"Class"+(i)].value)[j]){
					this[side+"Stats"][i][j] = classMins.get(this[side+"Class"+(i)].value)[j];
					min = true;
				}
			}
			if (this[side+"Class"+(i)].value == "Charioteer"){
				this[side+stats[j]+i].innerHTML = Math.round((this[side+"Stats"][i][j] + classStats.get(this[side+"Class"+i].value)[j] + mountStats.get(this[side+"Mount"+i].value)[j] * 2) * 100) / 100;
			}
			else {
				this[side+stats[j]+i].innerHTML = Math.round((this[side+"Stats"][i][j] + classStats.get(this[side+"Class"+i].value)[j] + mountStats.get(this[side+"Mount"+i].value)[j]) * 100) / 100;
			}
			if (display1.value == "Rounded"){
				this[side+stats[j]+i].innerHTML = Math.round(this[side+stats[j]+i].innerHTML);
			}
			if (min == true){
				this[side+stats[j]+i].innerHTML = "<b><u>"+this[side+stats[j]+i].innerHTML+"</u></b></span";
			}
		}
	}
}

function updateDisplay(){
	let leftlevel = leftCharRecruit1.value;
	let rightlevel = rightCharRecruit1.value;
	if (leftlevel == "Cai"){
		leftlevel = 13;
	}
	if (rightlevel == "Cai"){
		rightlevel = 13;
	}
	updateStats("left", leftlevel);
	updateStats("right", rightlevel);
}

var leftChar1 = document.getElementById("leftChar1");
var leftChar2 = document.getElementById("leftChar2");
var rightChar1 = document.getElementById("rightChar1");
var rightChar2 = document.getElementById("rightChar2");
var leftCharRecruit1 = document.getElementById("leftCharRecruit1");
var leftCharRecruit2 = document.getElementById("leftCharRecruit2");
var rightCharRecruit1 = document.getElementById("rightCharRecruit1");
var rightCharRecruit2 = document.getElementById("rightCharRecruit2");
var display1 = document.getElementById("display1");
var display2 = document.getElementById("display2");
var display3 = document.getElementById("display3");
var display4 = document.getElementById("display4");
var leftCharStats = document.getElementById("leftCharStats");
var rightCharStats = document.getElementById("rightCharStats");

leftChar1.remove(0);
leftChar2.remove(0);
rightChar1.remove(0);
rightChar2.remove(0);
for (let i = 0; i < characters.length; i++){
	leftChar1.add(new Option(characters[i]));
	leftChar2.add(new Option(characters[i]));
	rightChar1.add(new Option(characters[i]));
	rightChar2.add(new Option(characters[i]));
}
leftChar1.value = "Cai";
leftChar2.value = "Cai";
rightChar1.value = "Alexandra";
rightChar2.value = "Alexandra";

display1.value = "Decimal";
display2.value = "Decimal";
display3.value = "Decimal";
display4.value = "Decimal";

generateTable(leftCharStats);
generateTable(rightCharStats);

updateChar("left");
updateChar("right");
autoLevel("left");
autoLevel("right");