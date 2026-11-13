const stats = ["HP", "STR", "MAG", "SKL", "SPD", "LCK", "DEF", "RES", "MOV"];
const statsfull = ["HP", "Strength", "Magic", "Skill", "Speed", "Luck", "Defense", "Resistance", "Movement"];

const characters = ["Robin (M)", "Robin (F)", "Chrom", "Lissa", "Frederick", "Sully", "Virion", "Vaike", "Stahl", "Miriel", "Sumia", "Kellam", "Lonqu", "Donnel", "Ricken", 
	"Maribelle", "Panne", "Gaius", "Cordelia", "Gregor", "Nowi", "Libra", "Tharja", "Anna", "Olivia", "Cherche", "Henry", "Sayri", "Tiki", "Basilio", "Flavia", "Gangrel", "Walhart", 
	"Emmeryn", "Yenfay", "Aversa", "Priam", "Lucina", "Owain", "Inigo", "Brady", "Kjelle", "Cynthia", "Severa", "Gerome", "Morgan", "Marc", "Yarne", "Laurent", "Noire", "Nah"];

const defaultParents = new Map([
	["Robin (M)", 	"Morgan"],
	["Robin (F)", 	"Marc"],
	["Chrom", 		"Lucina"],
	["Lissa", 		"Owain"],
	["Sully", 		"Kjelle"],
	["Miriel", 		"Laurent"],
	["Sumia", 		"Cynthia"],
	["Maribelle", 	"Brady"],
	["Panne", 		"Yarne"],
	["Cordelia", 	"Severa"],
	["Nowi", 		"Nah"],
	["Tharja", 		"Noire"],
	["Olivia", 		"Inigo"],
	["Cherche", 	"Gerome"]
]);

const genders = new Map([
	["Robin (M)", 	"M"],
	["Robin (F)", 	"F"],
	["Chrom", 		"M"],
	["Lissa", 		"F"],
	["Frederick", 	"M"],
	["Sully", 		"F"],
	["Virion", 		"M"],
	["Vaike", 		"M"],
	["Stahl", 		"M"],
	["Miriel", 		"F"],
	["Sumia", 		"F"],
	["Kellam", 		"M"],
	["Lonqu",		"M"],
	["Donnel", 		"M"],
	["Ricken", 		"M"],
	["Maribelle", 	"F"],
	["Panne", 		"F"],
	["Gaius", 		"M"],
	["Cordelia", 	"F"],
	["Gregor", 		"M"],
	["Nowi", 		"F"],
	["Libra", 		"M"],
	["Tharja", 		"F"],
	["Anna", 		"F"],
	["Olivia", 		"F"],
	["Cherche", 	"F"],
	["Henry", 		"M"],
	["Sayri", 		"F"],
	["Tiki", 		"F"],
	["Basilio", 	"M"],
	["Flavia", 		"F"],
	["Gangrel", 	"M"],
	["Walhart", 	"M"],
	["Emmeryn", 	"F"],
	["Yenfay", 		"M"],
	["Aversa", 		"F"],
	["Priam", 		"M"],
	["Lucina", 		"F"],
	["Owain", 		"M"],
	["Inigo", 		"M"],
	["Brady", 		"M"],
	["Kjelle", 		"F"],
	["Cynthia", 	"F"],
	["Severa", 		"F"],
	["Gerome", 		"M"],
	["Morgan", 		"F"],
	["Marc", 		"M"],
	["Yarne", 		"M"],
	["Laurent", 	"M"],
	["Noire", 		"F"],
	["Nah", 		"F"]
]);

const assetGrowths = new Map([
	["HP", 			[30, 0, 0, 0, 0, 0, 5, 5]],
	["Strength",	[0, 15, 0, 5, 0, 0, 5, 0]],
	["Magic",		[0, 0, 15, 0, 5, 0, 0, 5]],
	["Skill",		[0, 5, 0, 15, 0, 0, 5, 0]],
	["Speed",		[0, 0, 0, 5, 15, 5, 0, 0]],
	["Luck",		[0, 5, 5, 0, 0, 15, 0, 0]],
	["Defense",		[0, 0, 0, 0, 0, 5, 15, 5]],
	["Resistance",	[0, 0, 5, 0, 5, 0, 0, 15]]
]);

const flawGrowths = new Map([
	["HP", 			[-20, 0, 0, 0, 0, 0, -5, -5]],
	["Strength",	[0, -10, 0, -5, 0, 0, -5, 0]],
	["Magic",		[0, 0, -10, 0, -5, 0, 0, -5]],
	["Skill",		[0, -5, 0, -10, 0, 0, -5, 0]],
	["Speed",		[0, 0, 0, -5, -10, -5, 0, 0]],
	["Luck",		[0, -5, -5, 0, 0, -10, 0, 0]],
	["Defense",		[0, 0, 0, 0, 0, -5, -10, -5]],
	["Resistance",	[0, 0, -5, 0, -5, 0, 0, -10]]
]);

const assetCaps = new Map([
	["HP", 			[0, 1, 1, 0, 0, 2, 2, 2]],
	["Strength",	[0, 4, 0, 2, 0, 0, 2, 0]],
	["Magic",		[0, 0, 4, 0, 2, 0, 0, 2]],
	["Skill",		[0, 2, 0, 4, 0, 0, 2, 0]],
	["Speed",		[0, 0, 0, 2, 4, 2, 0, 0]],
	["Luck",		[0, 2, 2, 0, 0, 4, 0, 0]],
	["Defense",		[0, 0, 0, 0, 0, 2, 4, 2]],
	["Resistance",	[0, 0, 2, 0, 2, 0, 0, 4]]
]);

const flawCaps = new Map([
	["HP", 			[0,-1,-1, 0, 0, -1, -1, -1]],
	["Strength",	[0, -3, 0, -1, 0, 0, -1, 0]],
	["Magic",		[0, 0, -3, 0, -1, 0, 0, -1]],
	["Skill",		[0, -1, 0, -3, 0, 0, -1, 0]],
	["Speed",		[0, 0, 0, -1, -3, -1, 0, 0]],
	["Luck",		[0, -1, -1, 0, 0, -3, 0, 0]],
	["Defense",		[0, 0, 0, 0, 0, -1, -3, -1]],
	["Resistance",	[0, 0, -1, 0, -1, 0, 0, -3]]
]);

var charGrowths = new Map([
	["Robin", 		[40, 40, 35, 35, 35, 55, 30, 20, 0]],
	["Robin (M)", 	[40, 40, 35, 35, 35, 55, 30, 20, 0]],
	["Robin (F)", 	[40, 40, 35, 35, 35, 55, 30, 20, 0]],
	["Chrom", 		[45, 40, 10, 40, 40, 70, 35, 20, 0]],
	["Lissa", 		[35, 25, 35, 30, 35, 65, 15, 35, 0]],
	["Frederick", 	[60, 40, 10, 40, 35, 40, 40, 20, 0]],
	["Sully", 		[40, 35, 20, 40, 40, 60, 35, 20, 0]],
	["Virion", 		[35, 40, 30, 40, 45, 40, 25, 25, 0]],
	["Vaike", 		[60, 50, 10, 45, 35, 45, 40,  5, 0]],
	["Stahl", 		[50, 45, 10, 35, 30, 50, 50, 10, 0]],
	["Miriel", 		[35, 15, 40, 40, 40, 50, 20, 30, 0]],
	["Sumia", 		[35, 30, 20, 45, 45, 60, 25, 30, 0]],
	["Kellam", 		[50, 40, 15, 40, 35, 35, 55, 30, 0]],
	["Lonqu", 		[40, 35, 20, 50, 50, 55, 25, 20, 0]],
	["Donnel", 		[50, 45, 15, 40, 45, 80, 35, 15, 0]],
	["Ricken", 		[50, 20, 35, 30, 30, 65, 30, 25, 0]],
	["Maribelle", 	[30, 20, 40, 40, 30, 80, 10, 40, 0]],
	["Panne", 		[60, 45, 15, 50, 55, 40, 40, 15, 0]],
	["Gaius", 		[50, 45, 15, 45, 45, 35, 25, 15, 0]],
	["Cordelia", 	[50, 45, 15, 35, 35, 45, 40, 25, 0]],
	["Gregor", 		[60, 40, 10, 40, 30, 45, 40, 10, 0]],
	["Nowi", 		[70, 45, 35, 30, 30, 65, 50, 35, 0]],
	["Libra", 		[45, 25, 35, 45, 35, 45, 25, 30, 0]],
	["Tharja", 		[40, 25, 45, 25, 45, 40, 35, 20, 0]],
	["Anna", 		[45, 30, 30, 35, 35, 80, 30, 30, 0]],
	["Olivia", 		[40, 35, 25, 45, 45, 60, 20, 20, 0]],
	["Cherche", 	[55, 40, 20, 40, 35, 50, 45, 10, 0]],
	["Henry", 		[45, 35, 35, 45, 40, 40, 40, 20, 0]],
	["Sayri", 		[50, 35, 20, 40, 40, 45, 35, 30, 0]],
	["Tiki", 		[80, 40, 40, 35, 30, 80, 45, 45, 0]],
	["Basilio", 	[65, 45, 10, 40, 35, 45, 40, 15, 0]],
	["Flavia", 		[50, 35, 20, 45, 45, 55, 30, 25, 0]],
	["Gangrel", 	[40, 40, 30, 50, 50, 30, 30, 30, 0]],
	["Walhart", 	[75, 60, 10, 30, 30, 45, 45, 25, 0]],
	["Emmeryn", 	[45, 10, 55, 40, 40, 70, 25, 35, 0]],
	["Yenfay", 		[60, 45, 10, 45, 50, 60, 30, 20, 0]],
	["Aversa", 		[45, 25, 45, 35, 40, 65, 30, 30, 0]],
	["Priam", 		[80, 60, 10, 40, 30, 50, 40, 10, 0]],
	["Lucina", 		[45, 35, 20, 45, 45, 80, 25, 25, 0]],
	["Owain", 		[45, 40, 30, 45, 35, 50, 30, 30, 0]],
	["Inigo", 		[50, 35, 15, 35, 45, 65, 30, 20, 0]],
	["Brady", 		[55, 30, 40, 25, 30, 60, 30, 30, 0]],
	["Kjelle", 		[40, 35, 25, 40, 45, 55, 40, 20, 0]],
	["Cynthia", 	[45, 35, 20, 25, 45, 70, 30, 30, 0]],
	["Severa", 		[45, 40, 10, 45, 35, 35, 40, 30, 0]],
	["Gerome", 		[65, 50, 15, 40, 40, 30, 40, 10, 0]],
	["Morgan", 		[35, 35, 40, 40, 40, 50, 25, 25, 0]],
	["Marc", 		[35, 35, 40, 40, 40, 50, 25, 25, 0]],
	["Yarne", 		[70, 50, 10, 45, 40, 60, 45, 10, 0]],
	["Laurent", 	[45, 20, 40, 40, 30, 50, 25, 35, 0]],
	["Noire", 		[30, 45, 40, 35, 50, 40, 30, 40, 0]],
	["Nah", 		[70, 35, 35, 45, 35, 70, 45, 40, 0]]
]);

var charBases = new Map([
	["Robin", 		["Tactician", 		 1, 19,  6,  5,  5,  6,  4,  6,  4, 5]],
	["Robin (M)", 	["Tactician", 		 1, 19,  6,  5,  5,  6,  4,  6,  4, 5]],
	["Robin (F)", 	["Tactician", 		 1, 19,  6,  5,  5,  6,  4,  6,  4, 5]],
	["Chrom", 		["Lord (M)", 		 1, 20,  7,  1,  8,  8,  5,  7,  1, 5]],
	["Lissa", 		["Cleric", 			 1, 17,  1,  5,  4,  4,  8,  3,  4, 5]],
	["Frederick", 	["Great Knight", 	 1, 28, 13,  2, 12, 10,  6, 14,  3, 7]],
	["Sully", 		["Cavalier", 		 2, 20,  7,  1,  8 , 8,  6,  7,  2, 7]],
	["Virion", 		["Archer", 			 2, 19,  6,  0,  9,  5,  7,  6,  1, 5]],
	["Vaike", 		["Fighter", 		 3, 24,  9,  0,  8,  6,  4,  5,  0, 5]],
	["Stahl", 		["Cavalier", 		 2, 22,  8,  0,  7,  6,  5,  8,  1, 7]],
	["Miriel", 		["Mage", 			 1, 18,  0,  6,  5,  7,  6,  3,  4, 5]],
	["Sumia", 		["Pegasus Knight", 	 1, 18,  6,  3, 11, 11,  8,  5,  7, 7]],
	["Kellam", 		["Knight", 			 5, 21, 10,  0,  7,  5,  3, 12,  2, 4]],
	["Lonqu", 		["Myrmidon", 		 4, 20,  6,  1, 12, 13,  7,  7,  2, 5]],
	["Donnel", 		["Villager", 		 1, 16,  4,  0,  2,  3, 11,  3,  0, 5]],
	["Ricken", 		["Mage", 			 3, 20,  3,  8,  6,  5, 10,  6,  3, 5]],
	["Maribelle", 	["Troubador", 		 3, 18,  0,  5,  4,  6,  5,  3,  6, 7]],
	["Panne", 		["Taguel (F)", 		 6, 28,  8,  1,  9, 10,  8,  7,  3, 6]],
	["Gaius", 		["Thief", 			 5, 22,  7,  0, 13, 15,  6,  5,  2, 5]],
	["Cordelia", 	["Pegasus Knight", 	 7, 25,  9,  3, 13, 12,  9,  8,  8, 7]],
	["Gregor", 		["Mercenary", 		10, 30, 12,  0, 13, 11,  8, 10,  2, 5]],
	["Nowi", 		["Manakete", 		 3, 18,  4,  0,  2,  3,  8,  2,  2, 6]],
	["Libra", 		["War Monk", 		 1, 38, 14, 15, 13, 13, 10, 11, 16, 6]],
	["Tharja", 		["Dark Mage", 		10, 25,  4, 11,  5, 12,  3, 10,  7, 5]],
	["Anna", 		["Trickster", 		 1, 35, 12, 17, 22, 21, 25,  8, 10, 6]],
	["Olivia", 		["Dancer", 			 1, 18,  3,  1,  8,  9,  5,  3,  2, 5]],
	["Cherche", 	["Wyvern Rider", 	12, 30, 14,  1, 12, 11,  8, 15,  2, 7]],
	["Henry", 		["Dark Mage", 		12, 28,  6, 13, 14,  8, 10, 12,  5, 5]],
	["Sayri", 		["Swordmaster", 	 1, 39, 17,  7, 23, 26, 20, 12, 10, 6]],
	["Tiki", 		["Manakete", 		20, 39, 18, 10, 14, 16, 18, 15, 12, 6]],
	["Basilio", 	["Warrior", 		10, 56, 30,  3, 25, 21, 18, 20,  8, 6]],
	["Flavia", 		["Hero", 			10, 48, 25,  5, 28, 26, 21, 23, 11, 6]],
	["Gangrel", 	["Trickster", 		15, 49, 21, 20, 29, 33, 15, 18, 17, 6]],
	["Walhart", 	["Conqueror", 		30, 71, 39, 15, 33, 32, 30, 35, 19, 8]],
	["Emmeryn", 	["Sage", 			10, 42,  5, 26, 23, 25, 13, 12, 20, 6]],
	["Yenfay", 		["Swordmaster", 	20, 60, 30,  5, 39, 40, 28, 21, 18, 6]],
	["Aversa", 		["Dark Flier", 		20, 55, 24, 31, 29, 32, 26, 21, 28, 8]],
	["Priam", 		["Hero", 			20, 74, 40,  3, 44, 38, 35, 39, 25, 6]],
	["Lucina", 		["Lord (F)", 		10, 12,  5,  1,  8,  4, 13,  3,  3, 5]],
	["Owain", 		["Myrmidon", 		10, 10,  4,  4,  5,  6,  9,  6,  5, 5]],
	["Inigo", 		["Mercenary", 		10, 11,  5,  2,  4,  9, 12,  4,  4, 5]],
	["Brady", 		["Priest", 			10,  9,  6,  5,  4,  2, 10,  7,  4, 5]],
	["Kjelle", 		["Knight", 			10, 10,  6,  2,  6,  5, 11,  3,  3, 4]],
	["Cynthia", 	["Pegasus Knight", 	10,  7,  5,  2,  4, 10, 17,  6,  6, 7]],
	["Severa", 		["Mercenary", 		10,  8,  6,  1,  7,  6,  6,  6,  5, 5]],
	["Gerome", 		["Wyvern Rider", 	10, 13,  8,  0,  4,  8,  5,  5,  1, 7]],
	["Morgan", 		["Tactician", 		10,  9,  6,  8,  7,  6,  7,  3,  7, 5]],
	["Marc", 		["Tactician", 		10,  9,  6,  8,  7,  6,  7,  3,  7, 5]],
	["Yarne", 		["Taguel (M)", 		10, 16,  9,  1,  4,  4, 13,  6,  1, 6]],
	["Laurent", 	["Mage", 			10, 10,  3,  7,  7,  4, 11,  4,  5, 5]],
	["Noire", 		["Archer", 			10,  8,  5,  3,  4,  7, 10,  4,  6, 5]],
	["Nah", 		["Manakete", 		10,  5,  3,  3,  5,  6,  8,  3,  3, 6]]
]);

const charBonuses = new Map([
	["Gregor", 		[0, 1]],
	["Nowi", 		[0, 1]],
	["Libra", 		[1, 2]],
	["Tharja", 		[0, 1]],
	["Anna", 		[1, 2]],
	["Cherche", 	[1, 3]],
	["Henry", 		[1, 3]],
	["Sayri", 		[2, 4]],
	["Tiki", 		[4, 8]],
	["Basilio", 	[5, 10]],
	["Flavia", 		[5, 10]],
	["Gangrel", 	[6, 12]],
	["Walhart", 	[6, 12]],
	["Emmeryn", 	[6, 12]],
	["Yenfay", 		[6, 12]],
	["Aversa", 		[6, 12]],
	["Priam", 		[6, 12]]
]);

var charCaps = new Map([
	["Robin", 		[0,  0,  0,  0,  0,  0,  0,  0, 0]],
	["Robin (M)", 	[0,  0,  0,  0,  0,  0,  0,  0, 0]],
	["Robin (F)", 	[0,  0,  0,  0,  0,  0,  0,  0, 0]],
	["Chrom", 		[0,  1,  0,  1,  1,  1, -1, -1, 0]],
	["Lissa", 		[0, -2,  2, -1,  0,  2, -1,  1, 0]],
	["Frederick", 	[0,  2, -2,  2, -2,  0,  2,  0, 0]],
	["Sully", 		[0, -1, -1,  2,  2,  0, -1,  0, 0]],
	["Virion", 		[0,  0,  0,  2,  2, -1, -2,  0, 0]],
	["Vaike", 		[0,  3, -2,  1,  1, -1,  0, -2, 0]],
	["Stahl", 		[0,  2, -1,  1,  0, -2,  2, -1, 0]],
	["Miriel", 		[0, -2,  3,  1,  1,  0, -2,  0, 0]],
	["Sumia", 		[0, -2,  0,  2,  3,  0, -2,  1, 0]],
	["Kellam", 		[0,  1,  0,  1, -2, -2,  3,  0, 0]],
	["Lonqu", 		[0,  0,  0,  3,  3,  0, -2, -2, 0]],
	["Donnel", 		[0,  1, -1, -1, -1,  3,  1, -1, 0]],
	["Ricken", 		[0, -1,  2,  0,  0,  1, -1,  0, 0]],
	["Maribelle", 	[0, -3,  2,  1,  0,  3, -3,  2, 0]],
	["Panne", 		[0,  2, -1,  2,  3, -1,  1, -1, 0]],
	["Gaius", 		[0,  1, -1,  2,  2, -2, -1,  0, 0]],
	["Cordelia", 	[0,  1, -1,  2,  2, -1,  0, -1, 0]],
	["Gregor", 		[0,  2, -1,  2,  0, -1,  1, -2, 0]],
	["Nowi", 		[0,  1,  1, -1, -2,  1,  3,  2, 0]],
	["Libra", 		[0,  0,  1,  1,  0, -1,  0,  1, 0]],
	["Tharja", 		[0,  0,  3, -1,  1, -3,  1,  0, 0]],
	["Anna", 		[0, -1,  0,  1,  0,  3, -1,  0, 0]],
	["Olivia", 		[0,  0,  0,  1,  1,  0, -1, -1, 0]],
	["Cherche", 	[0,  3,  0, -1, -1,  0,  2, -2, 0]],
	["Henry", 		[0,  1,  1,  2,  0, -2,  1, -1, 0]],
	["Sayri", 		[0,  1, -1,  1,  1, -1,  0,  1, 0]],
	["Tiki", 		[0,  0, -1,  0,  1,  2,  1,  2, 0]],
	["Basilio", 	[0,  3, -2,  1,  1, -1,  1, -1, 0]],
	["Flavia", 		[0,  1, -1,  2,  1,  0, -1,  0, 0]],
	["Gangrel", 	[0, -2,  0,  3,  3, -1, -1,  0, 0]],
	["Walhart", 	[0,  4, -2,  0, -1, -1,  4, -2, 0]],
	["Emmeryn", 	[0, -2,  3,  0,  1,  0, -2,  1, 0]],
	["Yenfay", 		[0,  1, -2,  2,  4,  0, -1, -2, 0]],
	["Aversa", 		[0, -1,  3,  1,  1, -2,  0,  0, 0]],
	["Priam", 		[0,  3, -2,  1,  0,  0,  2, -2, 0]]
]);

const classGrowths = new Map([
	["Tactician",		[40, 15, 15, 15, 15, 0, 10, 10, 0]],
	["Grandmaster",		[40, 15, 15, 15, 15, 0, 10, 10, 0]],
	["Lord (M)",		[40, 20,  0, 20, 20, 0, 10,  5, 0]],
	["Lord (F)",		[40, 20,  0, 20, 20, 0, 10,  5, 0]],
	["Great Lord (M)",	[40, 20,  0, 20, 20, 0, 10,  5, 0]],
	["Great Lord (F)",	[40, 20,  0, 20, 20, 0, 10,  5, 0]],
	["Cavalier",		[45, 20,  0, 20, 20, 0, 10,  5, 0]],
	["Paladin",			[45, 20,  0, 20, 20, 0, 10, 10, 0]],
	["Knight",			[50, 25,  0, 15, 10, 0, 15,  5, 0]],
	["Great Knight",	[50, 25,  0, 15, 15, 0, 15,  5, 0]],
	["General",			[50, 25,  0, 15, 10, 0, 15, 10, 0]],
	["Barbarian",		[50, 25,  0, 15, 20, 0,  5,  5, 0]],
	["Berserker",		[50, 25,  0, 15, 20, 0,  5,  5, 0]],
	["Fighter",			[45, 25,  0, 20, 15, 0, 10,  5, 0]],
	["Warrior",			[45, 25,  0, 20, 15, 0, 10,  5, 0]],
	["Mercenary",		[45, 20,  0, 25, 20, 0, 10,  5, 0]],
	["Hero",			[45, 20,  0, 25, 20, 0, 10,  5, 0]],
	["Archer",			[45, 15,  0, 30, 15, 0, 10,  5, 0]],
	["Bow Knight",		[50, 20,  0, 25, 20, 0,  5,  5, 0]],
	["Sniper",			[45, 15,  0, 30, 15, 0, 15,  5, 0]],
	["Myrmidon",		[40, 20,  0, 25, 25, 0,  5,  5, 0]],
	["Swordmaster",		[40, 20,  0, 25, 25, 0,  5, 10, 0]],
	["Thief",			[35, 15,  5, 25, 25, 0,  5,  5, 0]],
	["Assassin",		[40, 20,  0, 30, 25, 0,  5,  5, 0]],
	["Trickster",		[35, 10, 15, 25, 20, 0,  5, 10, 0]],
	["Pegasus Knight",	[40, 15,  5, 25, 25, 0,  5, 10, 0]],
	["Falcon Knight",	[40, 15, 10, 25, 25, 0,  5, 10, 0]],
	["Dark Flier",		[40, 10, 15, 20, 20, 0,  5, 10, 0]],
	["Wyvern Rider",	[45, 30,  0, 15, 15, 0, 10,  5, 0]],
	["Wyvern Lord",		[45, 30,  0, 15, 15, 0, 10,  5, 0]],
	["Griffon Rider",	[45, 25,  0, 20, 20, 0,  5,  5, 0]],
	["Troubador",		[35,  0, 20, 10, 20, 0,  5, 15, 0]],
	["Valkyrie",		[35,  0, 20, 10, 20, 0,  5, 15, 0]],
	["Cleric",			[35,  5, 15, 15, 15, 0,  5, 15, 0]],
	["Priest",			[35,  5, 15, 15, 15, 0,  5, 15, 0]],
	["War Cleric",		[45, 15, 15, 10, 15, 0, 10, 10, 0]],
	["War Monk",		[45, 15, 15, 10, 15, 0, 10, 10, 0]],
	["Mage",			[35,  0, 20, 20, 20, 0,  5, 10, 0]],
	["Sage",			[35,  0, 20, 20, 20, 0,  5, 10, 0]],
	["Dark Mage",		[50,  5, 15, 15, 15, 0, 10, 10, 0]],
	["Dark Knight",		[50, 15, 15, 15, 15, 0, 10,  5, 0]],
	["Sorcerer",		[45,  0, 20, 15, 15, 0, 10, 10, 0]],
	["Villager",		[35, 10,  0,  5,  5, 0, 10,  5, 0]],
	["Dancer",			[35,  5,  0, 25, 25, 0,  5,  5, 0]],
	["Taguel (F)",		[40, 15,  0, 20, 20, 0, 10,  5, 0]],
	["Taguel (M)",		[45, 20,  0, 15, 15, 0, 15,  5, 0]],
	["Manakete",		[50, 20,  5, 20, 20, 0, 15, 15, 0]],
	["Conqueror",		[50, 20,  5, 15, 15, 0, 10, 10, 0]],
	["Dread Fighter",	[40, 20, 10, 20, 20, 0, 10, 10, 0]],
	["Bride",			[40, 20, 10, 20, 20, 0, 10, 10, 0]],
	["Groom",			[40, 20, 10, 20, 20, 0, 10, 10, 0]],
	["Base stats",		[ 0,  0,  0,  0,  0, 0,  0,  0, 0]]
]);

const classCaps = new Map([
	["Tactician",		[60, 25, 25, 25, 25, 30, 25, 25, 10]],
	["Grandmaster",		[80, 40, 40, 40, 40, 45, 40, 40, 10]],
	["Lord (M)",		[60, 25, 20, 26, 28, 30, 25, 25, 10]],
	["Lord (F)",		[60, 25, 20, 26, 28, 30, 25, 25, 10]],
	["Great Lord (M)",	[80, 43, 30, 40, 41, 45, 42, 40, 10]],
	["Great Lord (F)",	[80, 40, 30, 42, 44, 45, 40, 40, 10]],
	["Cavalier",		[60, 26, 20, 25, 25, 30, 26, 26, 10]],
	["Paladin",			[80, 42, 30, 40, 40, 45, 42, 42, 10]],
	["Knight",			[60, 30, 20, 26, 23, 30, 30, 22, 10]],
	["Great Knight",	[80, 48, 20, 34, 37, 45, 48, 30, 10]],
	["General",			[80, 50, 30, 41, 35, 45, 50, 35, 10]],
	["Barbarian",		[60, 30, 20, 23, 27, 30, 22, 20, 10]],
	["Berserker",		[80, 50, 30, 35, 44, 45, 34, 30, 10]],
	["Fighter",			[60, 29, 20, 26, 25, 30, 25, 23, 10]],
	["Warrior",			[80, 48, 30, 42, 40, 45, 40, 35, 10]],
	["Mercenary",		[60, 26, 20, 28, 26, 30, 25, 23, 10]],
	["Hero",			[80, 42, 30, 46, 42, 45, 40, 36, 10]],
	["Archer",			[60, 26, 20, 29, 25, 30, 25, 21, 10]],
	["Bow Knight",		[80, 40, 30, 43, 41, 45, 35, 30, 10]],
	["Sniper",			[80, 41, 30, 48, 40, 45, 40, 31, 10]],
	["Myrmidon",		[60, 24, 22, 27, 28, 40, 22, 24, 10]],
	["Swordmaster",		[80, 38, 34, 44, 46, 45, 33, 38, 10]],
	["Thief",			[60, 22, 20, 30, 28, 30, 21, 20, 10]],
	["Assassin",		[80, 40, 30, 48, 46, 45, 31, 30, 10]],
	["Trickster",		[80, 35, 38, 45, 43, 45, 30, 40, 10]],
	["Pegasus Knight",	[60, 24, 23, 28, 27, 30, 22, 25, 10]],
	["Falcon Knight",	[80, 38, 35, 45, 44, 45, 33, 40, 10]],
	["Dark Flier",		[80, 36, 42, 41, 42, 45, 32, 41, 10]],
	["Wyvern Rider",	[60, 28, 20, 24, 24, 30, 28, 20, 10]],
	["Wyvern Lord",		[80, 46, 30, 38, 38, 45, 46, 30, 10]],
	["Griffon Rider",	[80, 40, 30, 43, 41, 45, 40, 30, 10]],
	["Troubador",		[60, 20, 26, 24, 26, 30, 20, 28, 10]],
	["Valkyrie",		[80, 30, 42, 38, 43, 45, 30, 45, 10]],
	["Cleric",			[60, 22, 25, 24, 25, 30, 22, 27, 10]],
	["Priest",			[60, 22, 25, 24, 25, 30, 22, 27, 10]],
	["War Cleric",		[80, 40, 40, 38, 41, 45, 38, 43, 10]],
	["War Monk",		[80, 40, 40, 38, 41, 45, 38, 43, 10]],
	["Mage",			[60, 20, 28, 27, 26, 30, 21, 25, 10]],
	["Sage",			[80, 30, 46, 43, 42, 45, 31, 40, 10]],
	["Dark Mage",		[60, 20, 27, 25, 25, 30, 25, 27, 10]],
	["Dark Knight",		[80, 38, 41, 40, 40, 45, 42, 38, 10]],
	["Sorcerer",		[80, 30, 44, 38, 40, 45, 41, 44, 10]],
	["Villager",		[60, 20, 20, 20, 20, 30, 20, 20, 10]],
	["Dancer",			[80, 30, 30, 40, 40, 45, 30, 30, 10]],
	["Taguel (F)",		[80, 35, 30, 40, 40, 45, 35, 30, 10]],
	["Taguel (M)",		[80, 35, 30, 40, 40, 45, 35, 30, 10]],
	["Manakete",		[80, 40, 35, 35, 35, 45, 40, 40, 10]],
	["Conqueror",		[80, 45, 25, 40, 40, 45, 45, 35, 10]],
	["Dread Fighter",	[80, 42, 38, 40, 41, 45, 39, 43, 10]],
	["Bride",			[40, 40, 39, 42, 42, 45, 41, 40, 10]],
	["Groom",			[40, 40, 39, 42, 42, 45, 41, 40, 10]],
]);

const classBases = new Map([
	["Tactician",		[16, 4, 3, 5, 5, 0, 5, 3, 5]],
	["Grandmaster",		[20, 7, 6, 7, 7, 0, 7, 5, 6]],
	["Lord (M)",		[18, 6, 0, 5, 7, 0, 7, 0, 5]],
	["Lord (F)",		[16, 5, 1, 6, 8, 0, 6, 1, 5]],
	["Great Lord (M)",	[23,10, 0, 7, 9, 0,10, 3, 6]],
	["Great Lord (F)",	[20, 8, 1, 9,11, 0, 8, 4, 6]],
	["Cavalier",		[18, 6, 0, 5, 6, 0, 7, 0, 7]],
	["Paladin",			[25, 9, 1, 7, 8, 0,10, 6, 8]],
	["Knight",			[18, 8, 0, 4, 2, 0,11, 0, 4]],
	["Great Knight",	[26,11, 0, 6, 5, 0,14, 1, 7]],
	["General",			[28,12, 0, 7, 4, 0,15, 3, 5]],
	["Barbarian",		[22, 8, 0, 3, 8, 0, 3, 0, 5]],
	["Berserker",		[30,13, 0, 5,11, 0, 5, 1, 6]],
	["Fighter",			[20, 8, 0, 5, 5, 0, 4, 0, 5]],
	["Warrior",			[28,12, 0, 8, 7, 0, 7, 3, 6]],
	["Mercenary",		[18, 5, 0, 8, 7, 0, 5, 0, 5]],
	["Hero",			[22, 8, 1,11,10, 0, 8, 3, 6]],
	["Archer",			[16, 5, 0, 8, 6, 0, 5, 0, 5]],
	["Bow Knight",		[24, 8, 0,10,10, 0, 6, 2, 8]],
	["Sniper",			[20, 7, 1,12, 9, 0,10, 3, 6]],
	["Myrmidon",		[16, 4, 1, 9,10, 0, 4, 1, 5]],
	["Swordmaster",		[20, 7, 2,11,13, 0, 6, 4, 6]],
	["Thief",			[16, 3, 0, 6, 8, 0, 2, 0, 5]],
	["Assassin",		[21, 8, 0,13,12, 0, 5, 1, 6]],
	["Trickster",		[19, 4, 4,10,11, 0, 3, 5, 6]],
	["Pegasus Knight",	[16, 4, 2, 7, 8, 0, 4, 6, 7]],
	["Falcon Knight",	[20, 6, 3,10,11, 0, 6, 9, 8]],
	["Dark Flier",		[19, 5, 6, 8,10, 0, 5, 9, 8]],
	["Wyvern Rider",	[19, 7, 0, 6, 5, 0, 8, 0, 7]],
	["Wyvern Lord",		[24,11, 0, 8, 7, 0,11, 3, 8]],
	["Griffon Rider",	[22, 9, 0,10, 9, 0, 8, 3, 8]],
	["Troubador",		[16, 0, 3, 2, 5, 0, 1, 5, 7]],
	["Valkyrie",		[19, 0, 5, 4, 8, 0, 3, 8, 8]],
	["Cleric/Priest",	[16, 0, 3, 2, 4, 0, 1, 6, 5]],
	["Cleric",			[16, 0, 3, 2, 4, 0, 1, 6, 5]],
	["Priest",			[16, 0, 3, 2, 4, 0, 1, 6, 5]],
	["War Cleric/Monk",	[24, 5, 5, 4, 6, 0, 6, 6, 6]],
	["War Cleric",		[24, 5, 5, 4, 6, 0, 6, 6, 6]],
	["War Monk",		[24, 5, 5, 4, 6, 0, 6, 6, 6]],
	["Mage",			[16, 0, 4, 3, 4, 0, 2, 3, 5]],
	["Sage",			[20, 1, 7, 5, 7, 0, 4, 5, 6]],
	["Dark Mage",		[18, 1, 3, 2, 3, 0, 4, 4, 5]],
	["Dark Knight",		[25, 4, 5, 6, 5, 0, 9, 5, 8]],
	["Sorcerer",		[23, 2, 6, 4, 4, 0, 7, 7, 6]],
	["Villager",		[16, 1, 0, 1, 1, 0, 1, 0, 5]],
	["Dancer",			[16, 1, 1, 5, 8, 0, 3, 1, 5]],
	["Taguel (F)",		[18, 2, 0, 4, 5, 0, 3, 2, 6]],
	["Taguel (M)",		[18, 2, 0, 4, 5, 0, 3, 2, 6]],
	["Manakete",		[18, 2, 0, 1, 1, 0, 2, 2, 6]],
	["Conqueror",		[24,10, 3, 9, 8, 0,12, 5, 8]],
	["Dread Fighter",	[22, 8, 4, 7, 9, 0, 7,10, 6]],
	["Bride/Groom",		[21, 7, 6,11,10, 0, 7, 6, 6]],
	["Bride",			[21, 7, 6,11,10, 0, 7, 6, 6]],
	["Groom",			[21, 7, 6,11,10, 0, 7, 6, 6]]
]);

const pairUpBonuses = new Map([
	["Tactician",		[0, 1, 1, 2, 2, 0, 0, 0, 0]],
	["Grandmaster",		[0, 2, 2, 2, 2, 0, 0, 0, 0]],
	["Lord (M)",		[0, 0, 0, 0, 3, 3, 0, 0, 0]],
	["Lord (F)",		[0, 0, 0, 0, 3, 3, 0, 0, 0]],
	["Great Lord (M)",	[0, 0, 0, 0, 4, 4, 0, 0, 0]],
	["Great Lord (F)",	[0, 0, 0, 0, 4, 4, 0, 0, 0]],
	["Cavalier",		[0, 2, 0, 1, 1, 0, 2, 0, 0]],
	["Paladin",			[0, 2, 0, 2, 2, 0, 2, 0, 0]],
	["Knight",			[0, 2, 0, 0, 0, 0, 4, 0, 0]],
	["Great Knight",	[0, 3, 0, 0, 0, 0, 3, 0, 1]],
	["General",			[0, 3, 0, 0, 0, 0, 5, 0, 0]],
	["Barbarian",		[0, 4, 0, 0, 2, 0, 0, 0, 0]],
	["Berserker",		[0, 5, 0, 0, 3, 0, 0, 0, 0]],
	["Fighter",			[0, 4, 0, 0, 0, 0, 2, 0, 0]],
	["Warrior",			[0, 5, 0, 0, 0, 0, 3, 0, 0]],
	["Mercenary",		[0, 0, 0, 2, 3, 0, 1, 0, 0]],
	["Hero",			[0, 0, 0, 3, 3, 0, 2, 0, 0]],
	["Archer",			[0, 2, 0, 2, 0, 0, 2, 0, 0]],
	["Bow Knight",		[0, 0, 0, 3, 3, 0, 0, 0, 1]],
	["Sniper",			[0, 3, 0, 3, 0, 0, 2, 0, 0]],
	["Myrmidon",		[0, 0, 0, 0, 4, 2, 0, 0, 0]],
	["Swordmaster",		[0, 0, 0, 0, 5, 3, 0, 0, 0]],
	["Thief",			[0, 0, 0, 0, 2, 2, 0, 0, 1]],
	["Assassin",		[0, 2, 0, 0, 2, 4, 0, 0, 0]],
	["Trickster",		[0, 0, 2, 1, 3, 0, 0, 0, 1]],
	["Pegasus Knight",	[0, 0, 0, 0, 3, 0, 0, 3, 0]],
	["Falcon Knight",	[0, 0, 0, 0, 4, 0, 0, 4, 0]],
	["Dark Flier",		[0, 0, 3, 0, 3, 0, 0, 2, 0]],
	["Wyvern Rider",	[0, 3, 0, 0, 0, 0, 3, 0, 0]],
	["Wyvern Lord",		[0, 4, 0, 0, 0, 0, 4, 0, 0]],
	["Griffon Rider",	[0, 3, 0, 0, 0, 1, 2, 0, 1]],
	["Troubador",		[0, 0, 2, 0, 1, 0, 0, 3, 0]],
	["Valkyrie",		[0, 0, 3, 0, 2, 0, 0, 3, 0]],
	["Cleric/Priest",	[0, 0, 2, 0, 0, 2, 0, 2, 0]],
	["Cleric",			[0, 0, 2, 0, 0, 2, 0, 2, 0]],
	["Priest",			[0, 0, 2, 0, 0, 2, 0, 2, 0]],
	["War Cleric/Monk",	[0, 2, 2, 0, 0, 2, 0, 2, 0]],
	["War Cleric",		[0, 2, 2, 0, 0, 2, 0, 2, 0]],
	["War Monk",		[0, 2, 2, 0, 0, 2, 0, 2, 0]],
	["Mage",			[0, 0, 4, 2, 0, 0, 0, 0, 0]],
	["Sage",			[0, 0, 4, 2, 0, 0, 0, 2, 0]],
	["Dark Mage",		[0, 0, 3, 0, 0, 0, 3, 0, 0]],
	["Dark Knight",		[0, 0, 2, 0, 0, 0, 3, 1, 1]],
	["Sorcerer",		[0, 0, 3, 0, 0, 0, 2, 3, 0]],
	["Villager",		[0, 0, 0, 3, 0, 3, 0, 0, 0]],
	["Dancer",			[0, 0, 0, 0, 3, 3, 0, 0, 0]],
	["Taguel (F)",		[0, 3, 0, 2, 3, 0, 0, 0, 0]],
	["Taguel (M)",		[0, 3, 0, 2, 3, 0, 0, 0, 0]],
	["Manakete",		[0, 2, 2, 0, 0, 0, 2, 2, 0]],
	["Conqueror",		[0, 2, 0, 0, 2, 0, 2, 0, 1]],
	["Dread Fighter",	[0, 3, 1, 0, 1, 0, 0, 3, 0]],
	["Bride/Groom",		[0, 0, 2, 0, 2, 2, 0, 2, 0]],
	["Bride",			[0, 0, 2, 0, 2, 2, 0, 2, 0]],
	["Groom",			[0, 0, 2, 0, 2, 2, 0, 2, 0]],
]);

const classes =	["Tactician", "Grandmaster", "Lord (M)", "Lord (F)", "Great Lord (M)", "Great Lord (F)", "Cavalier", "Paladin", "Knight", "Great Knight", "General", 
	"Barbarian", "Berserker", "Fighter", "Warrior", "Mercenary", "Hero", "Archer", "Bow Knight", "Sniper", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Trickster", 
	"Pegasus Knight", "Falcon Knight", "Dark Flier", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Troubador", "Valkyrie", "Cleric", "Priest", "War Cleric", "War Monk", 
	"Mage", "Sage", "Dark Mage", "Dark Knight", "Sorcerer", "Villager", "Dancer", "Taguel (F)", "Taguel (M)", "Manakete", "Conqueror", "Dread Fighter", "Bride", "Groom"];

const baseClasses =	["Tactician", "Lord (M)", "Lord (F)", "Cavalier", "Knight", "Barbarian", "Fighter", "Mercenary", 
	"Archer", "Myrmidon", "Thief", "Pegasus Knight", "Wyvern Rider", "Troubador", "Cleric", "Priest", "Mage", "Dark Mage"];

const promotedClasses =	["Grandmaster", "Great Lord (M)", "Great Lord (F)", "Paladin", "Great Knight", "General", "Berserker", "Warrior", "Hero", "Bow Knight", "Sniper", 
	"Swordmaster", "Assassin", "Trickster", "Falcon Knight", "Dark Flier", "Wyvern Lord", "Griffon Rider", "Valkyrie", "War Cleric", "War Monk", "Sage", "Dark Knight", "Sorcerer"];

const specialClasses = ["Villager", "Dancer", "Taguel (F)", "Taguel (M)", "Manakete", "Conqueror", "Dread Fighter", "Bride", "Groom"];

const promotions = new Map([
	["Tactician", 		["Grandmaster"]],
	["Lord (M)", 		["Great Lord (M)"]],
	["Lord (F)", 		["Great Lord (F)"]],
	["Cavalier", 		["Paladin", "Great Knight"]],
	["Knight", 			["General", "Great Knight"]],
	["Barbarian", 		["Berserker", "Warrior"]],
	["Fighter", 		["Warrior", "Hero"]],
	["Mercenary", 		["Hero", "Bow Knight"]],
	["Archer", 			["Sniper", "Bow Knight"]],
	["Myrmidon", 		["Swordmaster", "Assassin"]],
	["Thief", 			["Assassin", "Trickster"]],
	["Pegasus Knight", 	["Falcon Knight", "Dark Flier"]],
	["Wyvern Rider", 	["Wyvern Lord", "Griffon Rider"]],
	["Troubador", 		["Valkyrie", "War Cleric"]],
	["Cleric", 			["War Cleric", "Sage"]],
	["Priest", 			["War Monk", "Sage"]],
	["Mage", 			["Sage", "Dark Knight"]],
	["Dark Mage", 		["Sorcerer", "Dark Knight"]]
]);

const classPools = new Map([
	["Robin (M)", 	["Tactician", "Grandmaster", "Cavalier", "Paladin", "Knight", "Great Knight", "General", "Barbarian", "Berserker", "Fighter", "Warrior", "Mercenary", "Hero", 
					"Archer", "Bow Knight", "Sniper", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Trickster", "Pegasus Knight", "Dark Flier", "Falcon Knight", "Wyvern Rider", 
					"Wyvern Lord", "Griffon Rider", "Troubador", "Valkyrie", "Priest", "War Monk", "Mage", "Sage", "Dark Mage", "Dark Knight", "Sorcerer", "Dread Fighter", "Groom",]],
	["Robin (F)", 	["Tactician", "Grandmaster", "Cavalier", "Paladin", "Knight", "Great Knight", "General", "Barbarian", "Berserker", "Fighter", "Warrior", "Mercenary", "Hero", 
					"Archer", "Bow Knight", "Sniper", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Trickster", "Pegasus Knight", "Dark Flier", "Falcon Knight", "Wyvern Rider", 
					"Wyvern Lord", "Griffon Rider", "Troubador", "Valkyrie", "Priest", "War Monk", "Mage", "Sage", "Dark Mage", "Sorcerer", "Dark Knight", "Dread Fighter", "Bride"]],
	["Chrom", 		["Lord (M)", "Great Lord (M)", "Cavalier", "Paladin", "Great Knight", "Archer", "Bow Knight", "Sniper", "Dread Fighter", "Groom"]],
	["Lissa", 		["Cleric", "War Cleric", "Sage", "Troubador", "Valkyrie", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Dread Fighter", "Bride"]],
	["Frederick", 	["Cavalier", "Great Knight", "Paladin", "Knight", "General", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Groom"]],
	["Sully", 		["Cavalier", "Paladin", "Great Knight", "Myrmidon", "Swordmaster", "Assassin", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Bride"]],
	["Virion", 		["Archer", "Sniper", "Bow Knight", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Groom"]],
	["Vaike", 		["Fighter", "Warrior", "Hero", "Barbarian", "Berserker", "Thief", "Assassin", "Trickster", "Dread Fighter", "Groom"]],
	["Stahl", 		["Cavalier", "Paladin", "Great Knight", "Myrmidon", "Swordmaster", "Assassin", "Archer", "Bow Knight", "Sniper", "Dread Fighter", "Groom"]],
	["Miriel", 		["Mage", "Sage", "Dark Knight", "Dark Mage", "Sorcerer", "Troubador", "Valkyrie", "War Cleric", "Dread Fighter", "Bride"]],
	["Sumia", 		["Pegasus Knight", "Dark Flier", "Falcon Knight", "Cleric", "War Cleric", "Sage", "Knight", "Great Knight", "General", "Dread Fighter", "Bride"]],
	["Kellam", 		["Knight", "General", "Great Knight", "Thief", "Assassin", "Trickster", "Priest", "War Monk", "Sage", "Dread Fighter", "Groom"]],
	["Lonqu", 		["Myrmidon", "Swordmaster", "Assassin", "Thief", "Trickster", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Groom"]],
	["Donnel", 		["Villager", "Mercenary", "Hero", "Bow Knight", "Fighter", "Warrior", "Dread Fighter", "Groom"]],
	["Ricken", 		["Mage", "Sage", "Dark Knight", "Cavalier", "Paladin", "Great Knight", "Archer", "Bow Knight", "Sniper", "Dread Fighter", "Groom"]],
	["Maribelle", 	["Troubador", "Valkyrie", "War Cleric", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Bride"]],
	["Panne", 		["Taguel (F)", "Thief", "Assassin", "Trickster", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Bride"]],
	["Gaius", 		["Thief", "Assassin", "Trickster", "Myrmidon", "Swordmaster", "Fighter", "Hero", "Warrior", "Dread Fighter", "Groom"]],
	["Cordelia", 	["Pegasus Knight", "Falcon Knight", "Dark Flier", "Mercenary", "Hero", "Bow Knight", "Dark Mage", "Sorcerer", "Dark Knight", "Dread Fighter", "Bride"]],
	["Gregor", 		["Mercenary", "Hero", "Bow Knight", "Myrmidon", "Swordmaster", "Assassin", "Barbarian", "Berserker", "Warrior", "Dread Fighter", "Groom"]],
	["Nowi", 		["Manakete", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Bride"]],
	["Libra", 		["Priest", "War Monk", "Sage", "Mage", "Dark Knight", "Dark Mage", "Sorcerer", "Dread Fighter", "Groom"]],
	["Tharja", 		["Dark Mage", "Sorcerer", "Dark Knight", "Archer", "Sniper", "Bow Knight", "Knight", "General", "Great Knight", "Dread Fighter", "Bride"]],
	["Anna", 		["Thief", "Trickster", "Assassin", "Archer", "Bow Knight", "Sniper", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Bride"]],
	["Olivia", 		["Dancer", "Myrmidon", "Swordmaster", "Assassin", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Dread Fighter", "Bride"]],
	["Cherche", 	["Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Cleric", "War Cleric", "Sage", "Troubador", "Valkyrie", "Dread Fighter", "Bride"]],
	["Henry", 		["Dark Mage", "Sorcerer", "Dark Knight", "Thief", "Trickster", "Assassin", "Barbarian", "Berserker", "Warrior", "Dread Fighter", "Groom"]],
	["Sayri", 		["Myrmidon", "Swordmaster", "Assassin", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Bride"]],
	["Tiki", 		["Manakete", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Mage", "Sage", "Dark Knight", "Dread Fighter", "Bride"]],
	["Basilio", 	["Fighter", "Warrior", "Hero", "Barbarian", "Berserker", "Knight", "General", "Great Knight", "Dread Fighter", "Groom"]],
	["Flavia", 		["Mercenary", "Hero", "Bow Knight", "Thief", "Assassin", "Trickster", "Knight", "General", "Great Knight", "Dread Fighter", "Bride"]],
	["Gangrel", 	["Thief", "Trickster", "Assassin", "Barbarian", "Berserker", "Warrior", "Dark Mage", "Dark Knight", "Sorcerer", "Dread Fighter", "Groom"]],
	["Walhart", 	["Conqueror", "Knight", "Great Knight", "General", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Groom"]],
	["Emmeryn", 	["Cleric", "Sage", "War Cleric", "Troubador", "Valkyrie", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Dread Fighter", "Bride"]],
	["Yenfay", 		["Myrmidon", "Swordmaster", "Assassin", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Archer", "Bow Knight", "Sniper", "Dread Fighter", "Groom"]],
	["Aversa", 		["Pegasus Knight", "Dark Flier", "Falcon Knight", "Dark Mage", "Sorcerer", "Dark Knight", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Dread Fighter", "Bride"]],
	["Priam", 		["Mercenary", "Hero", "Bow Knight", "Myrmidon", "Swordmaster", "Assassin", "Fighter", "Warrior", "Dread Fighter", "Groom"]],
	["Lucina", 		["Lord (F)", "Great Lord (F)", "Cavalier", "Paladin", "Great Knight", "Archer", "Bow Knight", "Sniper"]],
	["Owain", 		["Myrmidon", "Swordmaster", "Assassin", "Priest", "War Monk", "Sage", "Barbarian", "Berserker", "Warrior", "Troubador", "Valkyrie", "Pegasus Knight", "Falcon Knight", "Dark Flier"]],
	["Inigo", 		["Mercenary", "Hero", "Bow Knight", "Myrmidon", "Swordmaster", "Assassin", "Barbarian", "Berserker", "Warrior", "Pegasus Knight", "Falcon Knight", "Dark Flier"]],
	["Brady", 		["Priest", "Sage", "War Monk", "Mage", "Dark Knight", "Cavalier", "Paladin", "Great Knight", "Troubador", "Valkyrie", "Pegasus Knight", "Falcon Knight", "Dark Flier"]],
	["Kjelle", 		["Knight", "General", "Great Knight", "Cavalier", "Paladin", "Myrmidon", "Swordmaster", "Assassin", "Wyvern Rider", "Wyvern Lord", "Griffon Rider"]],
	["Cynthia", 	["Pegasus Knight", "Falcon Knight", "Dark Flier", "Cleric", "War Cleric", "Sage", "Knight", "Great Knight", "General"]],
	["Severa", 		["Mercenary", "Hero", "Bow Knight", "Pegasus Knight", "Falcon Knight", "Dark Flier", "Dark Mage", "Dark Knight", "Sorcerer"]],
	["Gerome", 		["Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Fighter", "Warrior", "Hero", "Priest", "War Monk", "Sage", "Troubador", "Valkyrie"]],
	["Morgan", 		["Tactician", "Grandmaster", "Cavalier", "Paladin", "Knight", "Great Knight", "General", "Barbarian", "Berserker", "Fighter", "Warrior", "Mercenary", 
					"Hero", "Archer", "Bow Knight", "Sniper", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Trickster", "Pegasus Knight", "Dark Flier", "Falcon Knight", 
					"Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Troubador", "Valkyrie", "Cleric", "War Cleric", "Mage", "Sage", "Dark Mage", "Sorcerer", "Dark Knight"]],
	["Marc", 		["Tactician", "Grandmaster", "Cavalier", "Paladin", "Knight", "Great Knight", "General", "Barbarian", "Berserker", "Fighter", "Warrior", "Mercenary", 
					"Hero", "Archer", "Bow Knight", "Sniper", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Trickster", "Pegasus Knight", "Dark Flier", "Falcon Knight", 
					"Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Troubador", "Valkyrie", "Priest", "War Monk", "Mage", "Sage", "Dark Mage", "Dark Knight", "Sorcerer"]],
	["Yarne", 		["Taguel (M)", "Thief", "Assassin", "Trickster", "Barbarian", "Berserker", "Warrior", "Wyvern Rider", "Wyvern Lord", "Griffon Rider"]],
	["Laurent", 	["Mage", "Dark Knight", "Sage", "Dark Mage", "Sorcerer", "Barbarian", "Warrior", "Berserker", "Troubador", "War Monk", "Valkyrie"]],
	["Noire", 		["Archer", "Sniper", "Bow Knight", "Dark Mage", "Sorcerer", "Dark Knight", "Knight", "General", "Great Knight"]],
	["Nah", 		["Manakete", "Wyvern Rider", "Wyvern Lord", "Griffon Rider", "Mage", "Sage", "Dark Knight"]],
]);

const childBases = new Map([
	["Lucina", 		[12, 5, 1, 8, 4, 13, 3, 3]],
	["Owain", 		[10, 4, 4, 5, 6,  9, 6, 5]],
	["Inigo", 		[11, 5, 2, 4, 9, 12, 4, 4]],
	["Brady", 		[ 9, 6, 5, 4, 2, 10, 7, 4]],
	["Kjelle", 		[10, 6, 2, 6, 5, 11, 3, 3]],
	["Cynthia", 	[ 7, 5, 2, 4,10, 17, 6, 6]],
	["Severa", 		[ 8, 6, 1, 7, 6,  6, 6, 5]],
	["Gerome", 		[13, 8, 0, 4, 8,  5, 5, 1]],
	["Morgan", 		[10, 9, 6, 8, 7,  6, 7, 3]],
	["Marc", 		[10, 9, 6, 8, 7,  6, 7, 3]],
	["Yarne", 		[16, 9, 1, 4, 4, 13, 6, 1]],
	["Laurent", 	[10, 3, 7, 7, 4, 11, 4, 6]],
	["Noire", 		[ 8, 5, 3, 4, 7, 10, 4, 6]],
	["Nah", 		[ 5, 3, 3, 5, 6,  8, 3, 3]]
]);

const dragonstone = [0, 8, 5, 3, 2, 0, 10, 7, 0];
const dragonstonePlus = [0, 11, 6, 5, 4, 0, 13, 9, 0];
const beaststone = [0, 3, 0, 5, 5, 4, 1, 0, 0];
const beaststonePlus = [0, 5, 0, 8, 8, 6, 4, 2, 0];

var childParents = ["Robin (M)", "Sumia"];
var childGrowths = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var childCaps = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var childBaseStats = [];
var childClasses = [];
var siblingParents = ["Sumia", "Robin (M)"];
var siblingGrowths = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var siblingCaps = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var siblingBaseStats = [];
var siblingClasses = [];

var parentReclasses = [[]];
var spouseReclasses = [[]];
var childReclasses = [[]];
var siblingReclasses = [[]];

var parentCurrentStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var spouseCurrentStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var childCurrentStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var siblingCurrentStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var parentStatGrowth = [];
var spouseStatGrowth = [];
var childStatGrowth = [];
var siblingStatGrowth = [];

function updateGrowthsMode(){
	generateParentTable();
	generateSpouseTable();
	if (childStatGrowth.length > 0){
		generateChildTable();
	}
	if (siblingStatGrowth.length > 0){
		generateSiblingTable();
	}
}

function updateAssetFlaw(){
	let robinGrowths = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	let robinCaps = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	let robinBases = [];
	for (let i = 0; i < 8; i++){
		robinGrowths[i] = charGrowths.get("Robin")[i] + assetGrowths.get(asset.value)[i] + flawGrowths.get(flaw.value)[i];
		robinCaps[i] = charCaps.get("Robin")[i] + assetCaps.get(asset.value)[i] + flawCaps.get(flaw.value)[i];
		robinBases[i] = charBases.get("Robin")[i];
	}
	for (let i = 8; i < 11; i++){
		robinBases[i] = charBases.get("Robin")[i];
	}
	if (asset.value == "HP"){
		robinBases[2] += 5;
	}
	else if (asset.value == "Luck"){
		robinBases[7] += 4;
	}
	else {
		robinBases[statsfull.indexOf(asset.value) + 2] += 2;
	}
	if (flaw.value == "HP"){
		robinBases[2] -= 3;
	}
	else if (flaw.value == "Luck"){
		robinBases[7] -= 2;
	}
	else {
		robinBases[statsfull.indexOf(flaw.value) + 2] -= 1;
	}
	charGrowths.set("Robin (M)", robinGrowths);
	charGrowths.set("Robin (F)", robinGrowths);
	charCaps.set("Robin (M)", robinCaps);
	charCaps.set("Robin (F)", robinCaps);
	charBases.set("Robin (M)", robinBases);
	charBases.set("Robin (F)", robinBases);
	if (["Morgan", "Marc"].includes(child.innerHTML) || ["Robin (M)", "Robin (F)"].includes(childParents[1])){
		for (let i = 0; i < 8; i++){
			childGrowths[i] = Math.floor((charGrowths.get(childParents[0])[i] + charGrowths.get(childParents[1])[i] + charGrowths.get(child.innerHTML)[i]) / 3);
			childCaps[i] = (charCaps.get(childParents[0])[i] + charCaps.get(childParents[1])[i]);
			if (i > 0){
				childCaps[i]++;
			}
		}
	}
	if (["Morgan", "Marc"].includes(sibling.innerHTML) || ["Robin (M)", "Robin (F)"].includes(siblingParents[1])){
		for (let i = 0; i < 8; i++){
			siblingGrowths[i] = Math.floor((charGrowths.get(siblingParents[0])[i] + charGrowths.get(siblingParents[1])[i] + charGrowths.get(sibling.innerHTML)[i]) / 3);
			siblingCaps[i] = (charCaps.get(siblingParents[0])[i] + charCaps.get(siblingParents[1])[i]);
			if (i > 0){
				siblingCaps[i]++;
			}
		}
	}
	if (["Robin (M)", "Robin (F)"].includes(parent.value)){
		generateParentTable();
	}
	else if (["Robin (M)", "Robin (F)"].includes(spouse.value)){
		generateSpouseTable();
	}
	if ((childParents.includes("Robin (M)") || childParents.includes("Robin (F)")) && childStatGrowth.length > 0){
		generateChildTable();
	}
	if ((siblingParents.includes("Robin (M)") || siblingParents.includes("Robin (F)")) && siblingStatGrowth.length > 0){
		generateSiblingTable();
	}
}

function updateAptitude(){
	if (parent.value == "Donnel"){
		generateParentTable();
	}
	if (spouse.value == "Donnel"){
		generateSpouseTable();
	}
	if (childParents.includes("Donnel") && childStatGrowth.length > 0){
		generateChildTable();
	}
	if (siblingParents.includes("Donnel") && siblingStatGrowth.length > 0){
		generateSiblingTable();
	}
}

function updateDifficulty(){
	levelCap = 20 + difficulty.selectedIndex * 10;
	if (difficulty.selectedIndex == 2){
		levelCap += 10;
	}
	generateParentTable();
	generateSpouseTable();
	if (childStatGrowth.length > 0){
		generateChildTable();
	}
	if (siblingStatGrowth.length > 0){
		generateSiblingTable();
	}
}

function updateTransformations(){
	if (classPools.get(parent.value.replaceAll("'", ""))[0] == "Manakete" || classPools.get(parent.value.replaceAll("'", ""))[0] == "Taguel (F)"){
		generateParentTable();
	}
	if (classPools.get(spouse.value.replaceAll("'", ""))[0] == "Manakete" || classPools.get(spouse.value.replaceAll("'", ""))[0] == "Taguel (F)"){
		generateSpouseTable();
		console.log("test");
	}
	if ((childClasses.includes("Manakete") || childClasses.includes("Taguel (M)") || childClasses.includes("Taguel (F)")) && childStatGrowth.length > 0){
		generateChildTable();
	}
	if ((siblingClasses.includes("Manakete") || siblingClasses.includes("Taguel (M)") || siblingClasses.includes("Taguel (F)")) && siblingStatGrowth.length > 0){
		generateSiblingTable();
	}
}

function generateClassList(fullClassList, currentClass, currentLevel){
	reclassList = [currentClass];
	lowPriority = ["Villager", "Dread Fighter", "Groom", "Bride"];
	if (fullClassList[0] != "Dancer"){
		lowPriority.push("Dancer");
	}
	if (baseClasses.includes(currentClass) && currentLevel >= 10){
		for (let i = 0; i < fullClassList.length; i++){
			if (promotions.get(currentClass).includes(fullClassList[i])){
				reclassList.push(fullClassList[i]);
			}
		}
	}
	if (currentLevel >= 10 || promotedClasses.includes(currentClass)){
		for (let i = 0; i < fullClassList.length; i++){
			if (specialClasses.includes(fullClassList[i]) && !lowPriority.includes(fullClassList[i]) && fullClassList[i] != currentClass){
				reclassList.push(fullClassList[i]);
			}
		}
	}
	if ((promotedClasses.includes(currentClass) && currentLevel >= 10) || (promotedClasses.includes(currentClass) && currentLevel >= 10) || (specialClasses.includes(currentClass) && currentLevel == 30)){
		for (let i = 0; i < fullClassList.length; i++){
			if (promotedClasses.includes(fullClassList[i]) && fullClassList[i] != currentClass){
				reclassList.push(fullClassList[i]);
			}
		}
	}
	if (!promotedClasses.includes(currentClass) && currentLevel >= 10){
		for (let i = 0; i < fullClassList.length; i++){
			if (baseClasses.includes(fullClassList[i]) && fullClassList[i] != currentClass){
				reclassList.push(fullClassList[i]);
			}
		}
	}
	if (promotedClasses.includes(currentClass)){
		for (let i = 0; i < fullClassList.length; i++){
			if (baseClasses.includes(fullClassList[i])){
				reclassList.push(fullClassList[i]);
			}
		}
	}
	if ((currentLevel >= 10 || promotedClasses.includes(currentClass))){
		for (let i = 0; i < fullClassList.length; i++){
			if (specialClasses.includes(fullClassList[i]) && lowPriority.includes(fullClassList[i]) && fullClassList[i] != currentClass){
				reclassList.push(fullClassList[i]);
			}
		}
	}
	return reclassList;
}

function editClassList(kid, parent){
	let classList = classPools.get(kid).concat(classPools.get(parent)).slice(0, -2);
	if (genders.get(kid) == "M" && classList.includes("Cleric")){
		classList[classList.indexOf("Cleric")] = "Priest";
	}
	if (genders.get(kid) == "M" && classList.includes("War Cleric")){
		classList[classList.indexOf("War Cleric")] = "War Monk";
	}
	if (genders.get(kid) == "F" && classList.includes("Priest")){
		classList[classList.indexOf("Priest")] = "Cleric";
	}
	if (genders.get(kid) == "F" && classList.includes("War Monk")){
		classList[classList.indexOf("War Monk")] = "War Cleric";
	}
	if (genders.get(kid) == "F" && classList.includes("Great Lord (M)")){
		classList[classList.indexOf("Great Lord (M)")] = "Great Lord (F)";
	}
	if (genders.get(kid) == "M" && classList.includes("Great Lord (F)")){
		classList[classList.indexOf("Great Lord (F)")] = "Great Lord (M)";
	}
	if (genders.get(kid) == "M" && classList.includes("Taguel (F)")){
		classList[classList.indexOf("Taguel (F)")] = "Taguel (M)";
	}
	if (genders.get(kid) == "F" && classList.includes("Taguel (M)")){
		classList[classList.indexOf("Taguel (M)")] = "Taguel (F)";
	}

	if (genders.get(parent) == "M" && genders.get(kid) == "F"){
		if (classPools.get(parent).includes("Fighter") && parent == "Vaike"){
			if (!classPools.get(kid).includes("Mercenary")){
				classList.push("Mercenary", "Hero", "Bow Knight");
			}
		}
		else if (classPools.get(parent).includes("Fighter") && parent != "Vaike"){
			if (!classPools.get(kid).includes("Pegasus Knight")){
				classList.push("Pegasus Knight", "Falcon Knight", "Dark Flier");
			}
		}
		if (classPools.get(parent).includes("Barbarian") && parent == "Vaike"){
			if (!classPools.get(kid).includes("Knight")){
				classList.push("Knight", "General", "Great Knight");
			}
		}
		else if (classPools.get(parent).includes("Barbarian") && parent != "Vaike"){
			if (!classPools.get(kid).includes("Troubador")){
				classList.push("Troubador", "Valkyrie", "War Cleric");
			}
		}
	}
	if (genders.get(parent) == "F" && genders.get(kid) == "M"){
		if (classPools.get(parent).includes("Pegasus Knight") && parent == "Lissa"){
			if (!classPools.get(kid).includes("Myrmidon")){
				classList.push("Myrmidon", "Swordmaster", "Assassin");
			}
		}
		else if (classPools.get(parent).includes("Pegasus Knight") && parent == "Maribelle"){
			if (!classPools.get(kid).includes("Cavalier")){
				classList.push("Cavalier", "Paladin", "Great Knight");
			}
		}
		else if (classPools.get(parent).includes("Pegasus Knight") && parent == "Olivia"){
			if (!classPools.get(kid).includes("Barbarian")){
				classList.push("Barbarian", "Berserker", "Warrior");
			}
		}
		else if (classPools.get(parent).includes("Pegasus Knight") && !["Lissa", "Maribelle", "Olivia"].includes(parent)){
			if (!classPools.get(kid).includes("Fighter")){
				classList.push("Fighter", "Warrior", "Hero");
			}
		}
		if (classPools.get(parent).includes("Troubador") && parent == "Maribelle"){
			if (!classPools.get(kid).includes("Priest")){
				classList.push("Priest", "Sage", "War Monk");
			}
		}
		else if (classPools.get(parent).includes("Troubador") && parent == "Cherche"){
			if (!classPools.get(kid).includes("Fighter")){
				classList.push("Fighter", "Warrior", "Hero");
			}
		}
		else if (classPools.get(parent).includes("Troubador") && !["Maribelle", "Cherche"].includes(parent)){
			if (!classPools.get(kid).includes("Barbarian")){
				classList.push("Barbarian", "Berserker", "Warrior");
			}
		}
		if (!classPools.get(kid).includes("Mercenary") && parent == "Olivia"){
			classList.push("Mercenary", "Hero", "Bow Knight");
		}
		if (!classPools.get(kid).includes("Barbarian") && parent == "Panne"){
			classList.push("Barbarian", "Berserker", "Warrior");
		}
		if (!classPools.get(kid).includes("Fighter") && parent == "Nowi"){
			classList.push("Fighter", "Warrior", "Hero");
		}
	}
	classList = Array.from(new Set(classList));
	if (parent == "Chrom"){
		classList.push(classList.splice(classList.indexOf("Lord (M)"), 1)[0]);
		classList.push(classList.splice(classList.indexOf("Lord (F)"), 1)[0]);
		classList.push(classList.splice(classList.indexOf("Great Lord (M)"), 1)[0]);
		classList.push(classList.splice(classList.indexOf("Great Lord (F)"), 1)[0]);
	}
	if (parent == "Donnel"){
		classList.push(classList.splice(classList.indexOf("Villager"), 1)[0]);
	}
	if (parent == "Olivia"){
		classList.push(classList.splice(classList.indexOf("Dancer"), 1)[0]);
	}
	if (kid == "Inigo"){
		classList.push("Dancer");
	}
	if (["Nowi", "Tiki"].includes(parent)){
		classList.push(classList.splice(classList.indexOf("Manakete"), 1)[0]);
	}
	if (parent == "Panne"){
		classList.push(classList.splice(classList.indexOf("Taguel (F)"), 1)[0]);
		classList.push(classList.splice(classList.indexOf("Taguel (M)"), 1)[0]);
	}
	if (parent == "Walhart"){
		classList.push(classList.splice(classList.indexOf("Conqueror"), 1)[0]);
	}
	classList.push("Dread Fighter")
	if (genders.get(kid) == "F"){
		classList.push("Bride");
	}
	else if (genders.get(kid) == "M"){
		classList.push("Groom");
	}
	return classList;
}

function updateParentLevels(){
	let currentClass = parentReclasses[parentReclasses.length-1][0];
	if (["Lord", "Great Lord", "Taguel"].includes(currentClass)){
		currentClass += " (" + genders.get(parent.value.replaceAll("'", "")) + ")";
	}
	let selectedClass = parentClass.value;
	if (["Lord", "Great Lord", "Taguel"].includes(selectedClass)){
		selectedClass += " (" + genders.get(parent.value.replaceAll("'", "")) + ")";
	}
	let maxLevel = 20;
	if (specialClasses.includes(selectedClass)){
		maxLevel = 30;
	}
	if (parentLevel[0].value == 20 && maxLevel == 30){
		for (let i = 0; i < 10; i++){
			parentLevel.add(new Option(30 - i), i);
			parentLevel2.add(new Option(30 - i), i);
		}
	}
	else if (parentLevel[0].value == 30 && maxLevel == 20){
		for (let i = 0; i < 10; i++){
			parentLevel.remove(0);
			parentLevel2.remove(0);
		}
	}
	let levelRange = maxLevel;
	if (selectedClass == currentClass && parentReclasses[parentReclasses.length-1][1] < maxLevel){
		levelRange = maxLevel - parentReclasses[parentReclasses.length-1][1];
	}
	if (parentLevel.length > levelRange){
		while (parentLevel.length > levelRange){
			parentLevel.remove(parentLevel.length-1);
			parentLevel2.remove(parentLevel2.length-1);
		}
	}
	else if (parentLevel.length < levelRange){
		while (parentLevel.length < levelRange){
			parentLevel[parentLevel.length] = new Option(maxLevel - parentLevel.length);
			parentLevel2[parentLevel2.length] = new Option(maxLevel - parentLevel2.length);
		}
	}
	parentLevel.value = 10;
	if (parentLevel.selectedIndex < 0){
		parentLevel.selectedIndex = parentLevel.length - 1;
	}
	parentLevel2.selectedIndex = parentLevel.selectedIndex;
}

function updateSpouseLevels(){
	let currentClass = spouseReclasses[spouseReclasses.length-1][0];
	if (["Lord", "Great Lord", "Taguel"].includes(currentClass)){
		currentClass += " (" + genders.get(spouse.value.replaceAll("'", "")) + ")";
	}
	let selectedClass = spouseClass.value;
	if (["Lord", "Great Lord", "Taguel"].includes(selectedClass)){
		selectedClass += " (" + genders.get(spouse.value.replaceAll("'", "")) + ")";
	}
	let maxLevel = 20;
	if (specialClasses.includes(selectedClass)){
		maxLevel = 30;
	}
	if (spouseLevel[0].value == 20 && maxLevel == 30){
		for (let i = 0; i < 10; i++){
			spouseLevel.add(new Option(30 - i), i);
			spouseLevel2.add(new Option(30 - i), i);
		}
	}
	else if (spouseLevel[0].value == 30 && maxLevel == 20){
		for (let i = 0; i < 10; i++){
			spouseLevel.remove(0);
			spouseLevel2.remove(0);
		}
	}
	let levelRange = maxLevel;
	if (selectedClass == currentClass && spouseReclasses[spouseReclasses.length-1][1] < maxLevel){
		levelRange = maxLevel - spouseReclasses[spouseReclasses.length-1][1];
	}
	if (spouseLevel.length > levelRange){
		while (spouseLevel.length > levelRange){
			spouseLevel.remove(spouseLevel.length-1);
			spouseLevel2.remove(spouseLevel2.length-1);
		}
	}
	else if (spouseLevel.length < levelRange){
		while (spouseLevel.length < levelRange){
			spouseLevel[spouseLevel.length] = new Option(maxLevel - spouseLevel.length);
			spouseLevel2[spouseLevel2.length] = new Option(maxLevel - spouseLevel2.length);
		}
	}
	spouseLevel.value = 10;
	if (spouseLevel.selectedIndex < 0){
		spouseLevel.selectedIndex = spouseLevel.length - 1;
	}
	spouseLevel2.selectedIndex = spouseLevel.selectedIndex;
}

function updateChildLevels(){
	let currentClass = childReclasses[childReclasses.length-1][0];
	if (["Lord", "Great Lord", "Taguel"].includes(currentClass)){
		currentClass += " (" + genders.get(child.innerHTML) + ")";
	}
	let selectedClass = childClass.value;
	if (["Lord", "Great Lord", "Taguel"].includes(selectedClass)){
		selectedClass += " (" + genders.get(child.innerHTML) + ")";
	}
	let maxLevel = 20;
	if (specialClasses.includes(selectedClass)){
		maxLevel = 30;
	}
	if (childLevel[0].value == 20 && maxLevel == 30){
		for (let i = 0; i < 10; i++){
			childLevel.add(new Option(30 - i), i);
			childLevel2.add(new Option(30 - i), i);
		}
	}
	else if (childLevel[0].value == 30 && maxLevel == 20){
		for (let i = 0; i < 10; i++){
			childLevel.remove(0);
			childLevel2.remove(0);
		}
	}
	let levelRange = maxLevel;
	if (selectedClass == currentClass && childReclasses[childReclasses.length-1][1] < maxLevel){
		levelRange = maxLevel - childReclasses[childReclasses.length-1][1];
	}
	if (childLevel.length > levelRange){
		while (childLevel.length > levelRange){
			childLevel.remove(childLevel.length-1);
			childLevel2.remove(childLevel2.length-1);
		}
	}
	else if (childLevel.length < levelRange){
		while (childLevel.length < levelRange){
			childLevel[childLevel.length] = new Option(maxLevel - childLevel.length);
			childLevel2[childLevel2.length] = new Option(maxLevel - childLevel2.length);
		}
	}
	childLevel.value = 10;
	if (childLevel.selectedIndex < 0){
		childLevel.selectedIndex = childLevel.length - 1;
	}
	childLevel2.selectedIndex = childLevel.selectedIndex;
}

function updateSiblingLevels(){
	let currentClass = siblingReclasses[siblingReclasses.length-1][0];
	if (["Lord", "Great Lord", "Taguel"].includes(currentClass)){
		currentClass += " (" + genders.get(sibling.innerHTML) + ")";
	}
	let selectedClass = siblingClass.value;
	if (["Lord", "Great Lord", "Taguel"].includes(selectedClass)){
		selectedClass += " (" + genders.get(sibling.innerHTML) + ")";
	}
	let maxLevel = 20;
	if (specialClasses.includes(selectedClass)){
		maxLevel = 30;
	}
	if (siblingLevel[0].value == 20 && maxLevel == 30){
		for (let i = 0; i < 10; i++){
			siblingLevel.add(new Option(30 - i), i);
			siblingLevel2.add(new Option(30 - i), i);
		}
	}
	else if (siblingLevel[0].value == 30 && maxLevel == 20){
		for (let i = 0; i < 10; i++){
			siblingLevel.remove(0);
			siblingLevel2.remove(0);
		}
	}
	let levelRange = maxLevel;
	if (selectedClass == currentClass && siblingReclasses[siblingReclasses.length-1][1] < maxLevel){
		levelRange = maxLevel - siblingReclasses[siblingReclasses.length-1][1];
	}
	if (siblingLevel.length > levelRange){
		while (siblingLevel.length > levelRange){
			siblingLevel.remove(siblingLevel.length-1);
			siblingLevel2.remove(siblingLevel2.length-1);
		}
	}
	else if (siblingLevel.length < levelRange){
		while (siblingLevel.length < levelRange){
			siblingLevel[siblingLevel.length] = new Option(maxLevel - siblingLevel.length);
			siblingLevel2[siblingLevel2.length] = new Option(maxLevel - siblingLevel2.length);
		}
	}
	siblingLevel.value = 10;
	if (siblingLevel.selectedIndex < 0){
		siblingLevel.selectedIndex = siblingLevel.length - 1;
	}
	siblingLevel2.selectedIndex = siblingLevel.selectedIndex;
}

function updateParent(){
	parentName = parent.value.replaceAll("'", "");
	parentReclasses = [[charBases.get(parentName)[0], charBases.get(parentName)[1]]];
	if (promotedClasses.includes(parentReclasses[0][0])){
		parentClass.selectedIndex = 1;
	}
	while (parentClass.length > 0){
		parentClass.remove(0);
		parentClass2.remove(0);
	}
	reclassList = generateClassList(classPools.get(parentName), parentReclasses[0][0], parentReclasses[0][1]);
	for (let i = 0; i < reclassList.length; i++){
		if (reclassList[i].includes("(")){
			parentClass[i] = new Option(reclassList[i].slice(0, -4));
			parentClass2[i] = new Option(reclassList[i].slice(0, -4));
		}
		else {
			parentClass[i] = new Option(reclassList[i]);
			parentClass2[i] = new Option(reclassList[i]);
		}
	}
	generateParentTable();
	updateParentLevels();
}

function updateSpouse(){
	spouseName = spouse.value.replaceAll("'", "");
	spouseReclasses = [[charBases.get(spouseName)[0], charBases.get(spouseName)[1]]];
	if (promotedClasses.includes(spouseReclasses[0][0])){
		spouseClass.selectedIndex = 1;
	}
	while (spouseClass.length > 0){
		spouseClass.remove(0);
		spouseClass2.remove(0);
	}
	reclassList = generateClassList(classPools.get(spouseName), spouseReclasses[0][0], spouseReclasses[0][1]);
	for (let i = 0; i < reclassList.length; i++){
		if (reclassList[i].includes("(")){
			spouseClass[i] = new Option(reclassList[i].slice(0, -4));
			spouseClass2[i] = new Option(reclassList[i].slice(0, -4));
		}
		else {
			spouseClass[i] = new Option(reclassList[i]);
			spouseClass2[i] = new Option(reclassList[i]);
		}
	}
	generateSpouseTable();
	updateSpouseLevels();
}

function generateChildBases(){
	let childName;
	let parentName = parent.value.replaceAll("'", "");
	let spouseName = spouse.value.replaceAll("'", "");
	if ((parentName == spouseName) || (parentName.includes("Robin") && spouseName.includes("Robin")) || (["Chrom", "Lissa", "Emmeryn"].includes(parentName) && ["Chrom", "Lissa", "Emmeryn"].includes(spouseName))){
		return;
	}
	if (![...defaultParents.keys()].includes(parentName) && ![...defaultParents.keys()].includes(spouseName)){
		return;
	}
	else if ([...defaultParents.keys()].includes(parentName)){
		childName = defaultParents.get(parentName);
		childParents[0] = parentName;
		childParents[1] = spouseName;
	}
	else {
		childName = defaultParents.get(spouseName);
		childParents[0] = spouseName;
		childParents[1] = parentName;
	}
	child.innerHTML = childName;
	child2.innerHTML = childName;
	for (let i = 0; i < 8; i++){
		childGrowths[i] = Math.floor((charGrowths.get(childParents[0])[i] + charGrowths.get(childParents[1])[i] + charGrowths.get(childName)[i]) / 3);
		childCaps[i] = (charCaps.get(childParents[0])[i] + charCaps.get(childParents[1])[i]);
		if (i > 0){
			childCaps[i]++;
		}
	}
	childClasses = editClassList(childName, childParents[1]);
	if ((childName == "Morgan" && !["Chrom", "Vaike", "Donnel", "Olivia", "Basilio", "Walhart"].includes(childParents[1])) || (childName == "Marc" && !["Chrom", "Sumia", "Maribelle", "Cordelia", "Olivia", "Walhart", "Aversa"].includes(childParents[1]))){
		if (childName == "Marc" && childParents[1] == "Lissa"){
			childReclasses = [["Priest", charBases.get(childName)[1]]];
		}
		else if (childName == "Morgan" && childParents[1] == "Libra"){
			childReclasses = [["Cleric", charBases.get(childName)[1]]];
		}
		else {
			childReclasses = [[classPools.get(childParents[1])[0], charBases.get(childName)[1]]];
		}
	}
	else {
		childReclasses = [[charBases.get(childName)[0], charBases.get(childName)[1]]];
	}
	while (childClass.length > 0){
		childClass.remove(0);
		childClass2.remove(0);
	}
	reclassList = generateClassList(childClasses, childReclasses[0][0], childReclasses[0][1]);
	for (let i = 0; i < reclassList.length; i++){
		if (reclassList[i].includes("(")){
			childClass[i] = new Option(reclassList[i].slice(0, -4));
			childClass2[i] = new Option(reclassList[i].slice(0, -4));
		}
		else {
			childClass[i] = new Option(reclassList[i]);
			childClass2[i] = new Option(reclassList[i]);
		}
	}
	for (let i = 0; i < 8; i++){
		childStatGrowth[i] = Math.round((parentStatGrowth[i] + spouseStatGrowth[i] + charBases.get(child.innerHTML)[i+2]) / 3);
		childBaseStats[i] = childStatGrowth[i] + classBases.get(childReclasses[0][0])[i];
	}
	childBaseStats[8] = classBases.get(childReclasses[0][0])[8];
	generateChildTable();
	updateChildLevels();
	childPairUp();
	childHP.innerHTML = 0;
}

function generateSiblingBases(){
	let siblingName;
	let parentName = parent.value.replaceAll("'", "");
	let spouseName = spouse.value.replaceAll("'", "");
	if ((parentName == spouseName) || (parentName.includes("Robin") && spouseName.includes("Robin")) || (["Chrom", "Lissa", "Emmeryn"].includes(parentName) && ["Chrom", "Lissa", "Emmeryn"].includes(spouseName))){
		return;
	}
	if (![...defaultParents.keys()].includes(parentName) && ![...defaultParents.keys()].includes(spouseName.replaceAll("'", ""))){
		return;
	}
	else if ([...defaultParents.keys()].includes(spouseName.replaceAll("'", ""))){
		siblingName = defaultParents.get(spouseName);
		siblingParents[0] = spouseName.replaceAll("'", "");
		siblingParents[1] = parentName;
	}
	else {
		siblingName = defaultParents.get(parentName);
		siblingParents[0] = parentName;
		siblingParents[1] = spouseName.replaceAll("'", "");
	}
	sibling.innerHTML = siblingName;
	sibling2.innerHTML = siblingName;
	for (let i = 0; i < 8; i++){
		siblingGrowths[i] = Math.floor((charGrowths.get(siblingParents[0])[i] + charGrowths.get(siblingParents[1])[i] + charGrowths.get(siblingName)[i]) / 3);
		siblingCaps[i] = (charCaps.get(siblingParents[0])[i] + charCaps.get(siblingParents[1])[i]);
		if (i > 0){
			siblingCaps[i]++;
		}
	}
	siblingClasses = editClassList(siblingName, siblingParents[1]);
	if ((siblingName == "Morgan" && !["Chrom", "Vaike", "Donnel", "Olivia", "Basilio", "Walhart"].includes(siblingParents[1])) || (siblingName == "Marc" && !["Chrom", "Sumia", "Maribelle", "Cordelia", "Olivia", "Walhart", "Aversa"].includes(siblingParents[1]))){
		if (siblingName == "Marc" && siblingParents[1] == "Lissa"){
			siblingReclasses = [["Priest", charBases.get(siblingName)[1]]];
		}
		else if (siblingName == "Morgan" && siblingParents[1] == "Libra"){
			siblingReclasses = [["Cleric", charBases.get(siblingName)[1]]];
		}
		else {
			siblingReclasses = [[classPools.get(siblingParents[1])[0], charBases.get(siblingName)[1]]];
		}
	}
	else {
		siblingReclasses = [[charBases.get(siblingName)[0], charBases.get(siblingName)[1]]];
	}
	while (siblingClass.length > 0){
		siblingClass.remove(0);
		siblingClass2.remove(0);
	}
	reclassList = generateClassList(siblingClasses, siblingReclasses[0][0], siblingReclasses[0][1]);
	for (let i = 0; i < reclassList.length; i++){
		if (reclassList[i].includes("(")){
			siblingClass[i] = new Option(reclassList[i].slice(0, -4));
			siblingClass2[i] = new Option(reclassList[i].slice(0, -4));
		}
		else {
			siblingClass[i] = new Option(reclassList[i]);
			siblingClass2[i] = new Option(reclassList[i]);
		}
	}
	for (let i = 0; i < 8; i++){
		siblingStatGrowth[i] = Math.round((parentStatGrowth[i] + spouseStatGrowth[i] + charBases.get(sibling.innerHTML)[i+2]) / 3);
		siblingBaseStats[i] = siblingStatGrowth[i] + classBases.get(siblingReclasses[0][0])[i];
	}
	siblingBaseStats[8] = classBases.get(siblingReclasses[0][0])[8];
	generateSiblingTable();
	updateSiblingLevels();
	siblingPairUp();
	siblingHP.innerHTML = 0;
}

function generateParentTable(){
	let parentName = parent.value.replaceAll("'", "");
	aptitudeStats = parentName == "Donnel" && aptitude.selectedIndex <= 1;
	for (let i = 0; i < 9; i++){
		parentCurrentStats[i] = charBases.get(parentName)[i+2];
		if ([...charBonuses.keys()].includes(parentName) && difficulty.selectedIndex > 0){
			if (parentName != "Libra" || i != 3){
				if ((parentName == "Tiki" && i == 3) || (["Tiki", "Basilio", "Flavia"].includes(parentName) && i == 4)){
					parentCurrentStats[i] += Math.round((charGrowths.get(parentName)[i] + classGrowths.get(charBases.get(parentName)[0])[i] + 20) / 100 * (charBonuses.get(parentName)[difficulty.selectedIndex - 1]));
				}
				else if ((parentName == "Gangrel" && [1, 2].includes(i))){
					parentCurrentStats[i] += Math.round((charGrowths.get(parentName)[i] + classGrowths.get(charBases.get(parentName)[0])[i] + 30) / 100 * (charBonuses.get(parentName)[difficulty.selectedIndex - 1]));
				}
				else {
					parentCurrentStats[i] += Math.round((charGrowths.get(parentName)[i] + classGrowths.get(charBases.get(parentName)[0])[i]) / 100 * (charBonuses.get(parentName)[difficulty.selectedIndex - 1]));
				}
			}
		}
		parentStatGrowth[i] = parentCurrentStats[i] - classBases.get(charBases.get(parentName)[0])[i];
	}
	parentCurrentStats[9] = 0;
	while (parentStats.rows.length > 2){
		parentStats.deleteRow(1);
	}
	for (let i = 0; i < parentReclasses.length; i++){
		stone = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		if (transformations.selectedIndex == 1){
			if (parentReclasses[i][0] == "Manakete"){
				stone = dragonstone;
			}
			else if (parentReclasses[i][0] == "Taguel (F)"){
				stone = beaststone;
			}
		}
		else if (transformations.selectedIndex == 2){
			if (parentReclasses[i][0] == "Manakete"){
				stone = dragonstonePlus;
			}
			else if (parentReclasses[i][0] == "Taguel (F)"){
				stone = beaststonePlus;
			}
		}
		if (i > 0){
			let row = parentStats.insertRow(parentStats.rows.length - 1);
			let currentClass = row.insertCell(0).outerHTML = "<th>Class</th>";
			let level = row.insertCell(1).outerHTML = "<th>Level</th>";
			let hp = row.insertCell(2).outerHTML = "<th>HP</th>";
			let str = row.insertCell(3).outerHTML = "<th>Str</th>";
			let mag = row.insertCell(4).outerHTML = "<th>Mag</th>";
			let skl = row.insertCell(5).outerHTML = "<th>Skl</th>";
			let spd = row.insertCell(6).outerHTML = "<th>Spd</th>";
			let lck = row.insertCell(7).outerHTML = "<th>Lck</th>";
			let def = row.insertCell(8).outerHTML = "<th>Def</th>";
			let res = row.insertCell(9).outerHTML = "<th>Res</th>";
			let mov = row.insertCell(10).outerHTML = "<th>Mov</th>";
			let internal = row.insertCell(11).outerHTML = "<th>Internal</th>";
		}
		let row = parentStats.insertRow(parentStats.rows.length - 1);
		let currentClass = row.insertCell(0).innerHTML = '<span id="parentRow'+parentStats.rows.length+'class"></span>';
		let level = row.insertCell(1).innerHTML = '<span id="parentRow'+parentStats.rows.length+'level"></span>';
		let hp = row.insertCell(2).innerHTML = '<span id="parentRow'+parentStats.rows.length+'HP"></span>';
		let str = row.insertCell(3).innerHTML = '<span id="parentRow'+parentStats.rows.length+'STR"></span>';
		let mag = row.insertCell(4).innerHTML = '<span id="parentRow'+parentStats.rows.length+'MAG"></span>';
		let skl = row.insertCell(5).innerHTML = '<span id="parentRow'+parentStats.rows.length+'SKL"></span>';
		let spd = row.insertCell(6).innerHTML = '<span id="parentRow'+parentStats.rows.length+'SPD"></span>';
		let lck = row.insertCell(7).innerHTML = '<span id="parentRow'+parentStats.rows.length+'LCK"></span>';
		let def = row.insertCell(8).innerHTML = '<span id="parentRow'+parentStats.rows.length+'DEF"></span>';
		let res = row.insertCell(9).innerHTML = '<span id="parentRow'+parentStats.rows.length+'RES"></span>';
		let mov = row.insertCell(10).innerHTML = '<span id="parentRow'+parentStats.rows.length+'MOV"></span>';
		let internal = row.insertCell(11).innerHTML = '<span id="parentRow'+parentStats.rows.length+'internal"></span>';
		parentClassName = parentReclasses[i][0];
		this["parentRow" + parentStats.rows.length + "class"].innerHTML = parentClassName;
		if (parentClassName.includes("(")){
			this["parentRow" + parentStats.rows.length + "class"].innerHTML = parentClassName.slice(0, -4);
		}
		let startingLevel = 1;
		if (i == 0){
			startingLevel = charBases.get(parentName)[1] ;
		}
		this["parentRow" + parentStats.rows.length + "level"].innerHTML = "<b><u>"+startingLevel+"</u></b>";
		for (let k = 0; k < 9; k++){
			if (i > 0){
				parentCurrentStats[k] += classBases.get(parentReclasses[i][0])[k] - classBases.get(parentReclasses[i-1][0])[k];
				parentCurrentStats[k] = Math.round(parentCurrentStats[k] * 100) / 100;
			}
			this["parentRow" + parentStats.rows.length + stats[k]].innerHTML = (1 * Math.min(parentCurrentStats[k], classCaps.get(parentReclasses[i][0])[k] + charCaps.get(parentName)[k]) + 1*stone[k]);
			if (parentCurrentStats[k] >= classCaps.get(parentReclasses[i][0])[k] + charCaps.get(parentName)[k]){
				this["parentRow" + parentStats.rows.length + stats[k]].innerHTML = "<"+capFormat+">" + this["parentRow" + parentStats.rows.length + stats[k]].innerHTML +"</"+capFormat+">";
			}
		}
		if (i > 0){
			if ([...promotions.keys()].includes(parentReclasses[i-1][0])){
				if (!promotions.get(parentReclasses[i-1][0]).includes(parentReclasses[i][0])){
					parentCurrentStats[9] += Math.floor((1*parentReclasses[i-1][1] + 20*promotedClasses.includes(parentReclasses[i-1][0]) - 1) / 2);
				}
			}
			else {
				parentCurrentStats[9] += Math.floor((1*parentReclasses[i-1][1] + 20*promotedClasses.includes(parentReclasses[i-1][0]) - 1) / 2);
			}
		}
		this["parentRow" + parentStats.rows.length + "internal"].innerHTML = "<b>"+(1*Math.min(parentCurrentStats[9], levelCap) + 1*startingLevel + 20*promotedClasses.includes(parentClassName))+"</b>";
		for (let j = startingLevel+1; j <= parentReclasses[i][1]; j++){
			let row = parentStats.insertRow(parentStats.rows.length - 1);
			let currentClass = row.insertCell(0).innerHTML = '<span id="parentRow'+parentStats.rows.length+'class"></span>';
			let level = row.insertCell(1).innerHTML = '<span id="parentRow'+parentStats.rows.length+'level"></span>';
			let hp = row.insertCell(2).innerHTML = '<span id="parentRow'+parentStats.rows.length+'HP"></span>';
			let str = row.insertCell(3).innerHTML = '<span id="parentRow'+parentStats.rows.length+'STR"></span>';
			let mag = row.insertCell(4).innerHTML = '<span id="parentRow'+parentStats.rows.length+'MAG"></span>';
			let skl = row.insertCell(5).innerHTML = '<span id="parentRow'+parentStats.rows.length+'SKL"></span>';
			let spd = row.insertCell(6).innerHTML = '<span id="parentRow'+parentStats.rows.length+'SPD"></span>';
			let lck = row.insertCell(7).innerHTML = '<span id="parentRow'+parentStats.rows.length+'LCK"></span>';
			let def = row.insertCell(8).innerHTML = '<span id="parentRow'+parentStats.rows.length+'DEF"></span>';
			let res = row.insertCell(9).innerHTML = '<span id="parentRow'+parentStats.rows.length+'RES"></span>';
			let mov = row.insertCell(10).innerHTML = '<span id="parentRow'+parentStats.rows.length+'MOV"></span>';
			let internal = row.insertCell(11).innerHTML = '<span id="parentRow'+parentStats.rows.length+'internal"></span>';
			this["parentRow" + parentStats.rows.length + "class"].innerHTML = parentClassName;
			if (parentClassName.includes("(")){
				this["parentRow" + parentStats.rows.length + "class"].innerHTML = parentClassName.slice(0, -4);
			}
			this["parentRow" + parentStats.rows.length + "level"].innerHTML = "<b><u>"+j+"</u></b>";
			for (let k = 0; k < 9; k++){
				let statIncrease = 0;
				if (parentCurrentStats[k] < classCaps.get(parentReclasses[i][0])[k] + charCaps.get(parentName)[k]){
					if (growthsMode.selectedIndex == 0){
						statIncrease = (charGrowths.get(parentName)[k] + classGrowths.get(parentReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100;
					}
					else {
						statIncrease = Math.round((j-1) * (charGrowths.get(parentName)[k] + classGrowths.get(parentReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100) - Math.round((j-2) * (charGrowths.get(parentName)[k] + classGrowths.get(parentReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100);
					}
					if (parentCurrentStats[k] + statIncrease > classCaps.get(parentReclasses[i][0])[k] + charCaps.get(parentName)[k]){
						statIncrease = classCaps.get(parentReclasses[i][0])[k] + charCaps.get(parentName)[k] - parentCurrentStats[k];
					}
				}
				parentCurrentStats[k] += statIncrease;
				parentStatGrowth[k] += statIncrease;
				if (growthsMode.selectedIndex == 0){
					parentCurrentStats[k] = Math.round(parentCurrentStats[k] * 100) / 100;
					parentStatGrowth[k] = Math.round(parentStatGrowth[k] * 100) / 100;
				}
				this["parentRow" + parentStats.rows.length + stats[k]].innerHTML = Math.min(parentCurrentStats[k], classCaps.get(parentReclasses[i][0])[k] + charCaps.get(parentName)[k]) + stone[k];
				if (parentCurrentStats[k] >= classCaps.get(parentReclasses[i][0])[k] + charCaps.get(parentName)[k]){
					this["parentRow" + parentStats.rows.length + stats[k]].innerHTML = "<"+capFormat+">" + this["parentRow" + parentStats.rows.length + stats[k]].innerHTML +"</"+capFormat+">";
				}
				if (growthsMode.selectedIndex == 1){
					if (statIncrease >= 1){
						this["parentRow" + parentStats.rows.length + stats[k]].innerHTML = "<b>" + this["parentRow" + parentStats.rows.length + stats[k]].innerHTML +"</b>";
					}
					if (statIncrease >= 2){
						this["parentRow" + parentStats.rows.length + stats[k]].innerHTML = "<i>" + this["parentRow" + parentStats.rows.length + stats[k]].innerHTML +"</b>";
					}
				}
			}
			this["parentRow" + parentStats.rows.length + "internal"].innerHTML = "<b>"+(1*Math.min(parentCurrentStats[9], levelCap) + 1*j + 20*promotedClasses.includes(parentClassName))+"</b>";
		}
	}
	parentPairUp();
}

function generateSpouseTable(){
	let spouseName = spouse.value.replaceAll("'", "");
	aptitudeStats = spouseName == "Donnel" && aptitude.selectedIndex <= 1;
	for (let i = 0; i < 9; i++){
		spouseCurrentStats[i] = charBases.get(spouseName)[i+2];
		if ([...charBonuses.keys()].includes(spouseName) && difficulty.selectedIndex > 0){
			if (spouseName != "Libra" || i != 3){
				if ((spouseName == "Tiki" && i == 3) || (["Tiki", "Basilio", "Flavia"].includes(spouseName) && i == 4)){
					spouseCurrentStats[i] += Math.round((charGrowths.get(spouseName)[i] + classGrowths.get(charBases.get(spouseName)[0])[i] + 20) / 100 * (charBonuses.get(spouseName)[difficulty.selectedIndex - 1]));
				}
				else if ((spouseName == "Gangrel" && [1, 2].includes(i))){
					spouseCurrentStats[i] += Math.round((charGrowths.get(spouseName)[i] + classGrowths.get(charBases.get(spouseName)[0])[i] + 30) / 100 * (charBonuses.get(spouseName)[difficulty.selectedIndex - 1]));
				}
				else {
					spouseCurrentStats[i] += Math.round((charGrowths.get(spouseName)[i] + classGrowths.get(charBases.get(spouseName)[0])[i]) / 100 * (charBonuses.get(spouseName)[difficulty.selectedIndex - 1]));
				}
			}
		}
		spouseStatGrowth[i] = spouseCurrentStats[i] - classBases.get(charBases.get(spouseName)[0])[i];
	}
	spouseCurrentStats[9] = 0;
	while (spouseStats.rows.length > 2){
		spouseStats.deleteRow(1);
	}
	for (let i = 0; i < spouseReclasses.length; i++){
		stone = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		if (transformations.selectedIndex == 1){
			if (spouseReclasses[i][0] == "Manakete"){
				stone = dragonstone;
			}
			else if (spouseReclasses[i][0] == "Taguel (F)"){
				stone = beaststone;
			}
		}
		else if (transformations.selectedIndex == 2){
			if (spouseReclasses[i][0] == "Manakete"){
				stone = dragonstonePlus;
			}
			else if (spouseReclasses[i][0] == "Taguel (F)"){
				stone = beaststonePlus;
			}
		}
		if (i > 0){
			let row = spouseStats.insertRow(spouseStats.rows.length - 1);
			let currentClass = row.insertCell(0).outerHTML = "<th>Class</th>";
			let level = row.insertCell(1).outerHTML = "<th>Level</th>";
			let hp = row.insertCell(2).outerHTML = "<th>HP</th>";
			let str = row.insertCell(3).outerHTML = "<th>Str</th>";
			let mag = row.insertCell(4).outerHTML = "<th>Mag</th>";
			let skl = row.insertCell(5).outerHTML = "<th>Skl</th>";
			let spd = row.insertCell(6).outerHTML = "<th>Spd</th>";
			let lck = row.insertCell(7).outerHTML = "<th>Lck</th>";
			let def = row.insertCell(8).outerHTML = "<th>Def</th>";
			let res = row.insertCell(9).outerHTML = "<th>Res</th>";
			let mov = row.insertCell(10).outerHTML = "<th>Mov</th>";
			let internal = row.insertCell(11).outerHTML = "<th>Internal</th>";
		}
		let row = spouseStats.insertRow(spouseStats.rows.length - 1);
		let currentClass = row.insertCell(0).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'class"></span>';
		let level = row.insertCell(1).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'level"></span>';
		let hp = row.insertCell(2).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'HP"></span>';
		let str = row.insertCell(3).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'STR"></span>';
		let mag = row.insertCell(4).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'MAG"></span>';
		let skl = row.insertCell(5).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'SKL"></span>';
		let spd = row.insertCell(6).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'SPD"></span>';
		let lck = row.insertCell(7).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'LCK"></span>';
		let def = row.insertCell(8).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'DEF"></span>';
		let res = row.insertCell(9).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'RES"></span>';
		let mov = row.insertCell(10).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'MOV"></span>';
		let internal = row.insertCell(11).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'internal"></span>';
		spouseClassName = spouseReclasses[i][0];
		this["spouseRow" + spouseStats.rows.length + "class"].innerHTML = spouseClassName;
		if (spouseClassName.includes("(")){
			this["spouseRow" + spouseStats.rows.length + "class"].innerHTML = spouseClassName.slice(0, -4);
		}
		let startingLevel = 1;
		if (i == 0){
			startingLevel = charBases.get(spouseName)[1] ;
		}
		this["spouseRow" + spouseStats.rows.length + "level"].innerHTML = "<b><u>"+startingLevel+"</u></b>";
		for (let k = 0; k < 9; k++){
			if (i > 0){
				spouseCurrentStats[k] += classBases.get(spouseReclasses[i][0])[k] - classBases.get(spouseReclasses[i-1][0])[k];
				spouseCurrentStats[k] = Math.round(spouseCurrentStats[k] * 100) / 100;
			}
			this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML = (1 * Math.min(spouseCurrentStats[k], classCaps.get(spouseReclasses[i][0])[k] + charCaps.get(spouseName)[k]) + 1*stone[k]);
			if (spouseCurrentStats[k] >= classCaps.get(spouseReclasses[i][0])[k] + charCaps.get(spouseName)[k]){
				this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML = "<"+capFormat+">" + this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML +"</"+capFormat+">";
			}
		}
		if (i > 0){
			if ([...promotions.keys()].includes(spouseReclasses[i-1][0])){
				if (!promotions.get(spouseReclasses[i-1][0]).includes(spouseReclasses[i][0])){
					spouseCurrentStats[9] += Math.floor((1*spouseReclasses[i-1][1] + 20*promotedClasses.includes(spouseReclasses[i-1][0]) - 1) / 2);
				}
			}
			else {
				spouseCurrentStats[9] += Math.floor((1*spouseReclasses[i-1][1] + 20*promotedClasses.includes(spouseReclasses[i-1][0]) - 1) / 2);
			}
		}
		this["spouseRow" + spouseStats.rows.length + "internal"].innerHTML = "<b>"+(1*Math.min(spouseCurrentStats[9], levelCap) + 1*startingLevel + 20*promotedClasses.includes(spouseClassName))+"</b>";
		for (let j = startingLevel+1; j <= spouseReclasses[i][1]; j++){
			let row = spouseStats.insertRow(spouseStats.rows.length - 1);
			let currentClass = row.insertCell(0).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'class"></span>';
			let level = row.insertCell(1).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'level"></span>';
			let hp = row.insertCell(2).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'HP"></span>';
			let str = row.insertCell(3).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'STR"></span>';
			let mag = row.insertCell(4).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'MAG"></span>';
			let skl = row.insertCell(5).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'SKL"></span>';
			let spd = row.insertCell(6).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'SPD"></span>';
			let lck = row.insertCell(7).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'LCK"></span>';
			let def = row.insertCell(8).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'DEF"></span>';
			let res = row.insertCell(9).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'RES"></span>';
			let mov = row.insertCell(10).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'MOV"></span>';
			let internal = row.insertCell(11).innerHTML = '<span id="spouseRow'+spouseStats.rows.length+'internal"></span>';
			this["spouseRow" + spouseStats.rows.length + "class"].innerHTML = spouseClassName;
			if (spouseClassName.includes("(")){
				this["spouseRow" + spouseStats.rows.length + "class"].innerHTML = spouseClassName.slice(0, -4);
			}
			this["spouseRow" + spouseStats.rows.length + "level"].innerHTML = "<b><u>"+j+"</u></b>";
			for (let k = 0; k < 9; k++){
				let statIncrease = 0;
				if (spouseCurrentStats[k] < classCaps.get(spouseReclasses[i][0])[k] + charCaps.get(spouseName)[k]){
					if (growthsMode.selectedIndex == 0){
						statIncrease = (charGrowths.get(spouseName)[k] + classGrowths.get(spouseReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100;
					}
					else {
						statIncrease = Math.round((j-1) * (charGrowths.get(spouseName)[k] + classGrowths.get(spouseReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100) - Math.round((j-2) * (charGrowths.get(spouseName)[k] + classGrowths.get(spouseReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100);
					}
					if (spouseCurrentStats[k] + statIncrease > classCaps.get(spouseReclasses[i][0])[k] + charCaps.get(spouseName)[k]){
						statIncrease = classCaps.get(spouseReclasses[i][0])[k] + charCaps.get(spouseName)[k] - spouseCurrentStats[k];
					}
				}
				spouseCurrentStats[k] += statIncrease;
				spouseStatGrowth[k] += statIncrease;
				if (growthsMode.selectedIndex == 0){
					spouseCurrentStats[k] = Math.round(spouseCurrentStats[k] * 100) / 100;
					spouseStatGrowth[k] = Math.round(spouseStatGrowth[k] * 100) / 100;
				}
				this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML = Math.min(spouseCurrentStats[k], classCaps.get(spouseReclasses[i][0])[k] + charCaps.get(spouseName)[k]) + stone[k];
				if (spouseCurrentStats[k] >= classCaps.get(spouseReclasses[i][0])[k] + charCaps.get(spouseName)[k]){
					this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML = "<"+capFormat+">" + this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML +"</"+capFormat+">";
				}
				if (growthsMode.selectedIndex == 1){
					if (statIncrease >= 1){
						this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML = "<b>" + this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML +"</b>";
					}
					if (statIncrease >= 2){
						this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML = "<i>" + this["spouseRow" + spouseStats.rows.length + stats[k]].innerHTML +"</b>";
					}
				}
			}
			this["spouseRow" + spouseStats.rows.length + "internal"].innerHTML = "<b>"+(1*Math.min(spouseCurrentStats[9], levelCap) + 1*j + 20*promotedClasses.includes(spouseClassName))+"</b>";
		}
	}
	spousePairUp();
}

function generateChildTable(){
	aptitudeStats = childParents[1] == "Donnel" && aptitude.selectedIndex % 2 == 0;
	for (let i = 0; i < 9; i++){
		childCurrentStats[i] = childBaseStats[i];
		childStatGrowth[i] = childBaseStats[i] - classBases.get(charBases.get(child.innerHTML)[0])[i];
	}
	childCurrentStats[9] = 0;
	while (childStats.rows.length > 2){
		childStats.deleteRow(1);
	}
	for (let i = 0; i < childReclasses.length; i++){
		stone = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		if (transformations.selectedIndex == 1){
			if (childReclasses[i][0] == "Manakete"){
				stone = dragonstone;
			}
			else if (childReclasses[i][0] == "Taguel (F)"){
				stone = beaststone;
			}
		}
		else if (transformations.selectedIndex == 2){
			if (childReclasses[i][0] == "Manakete"){
				stone = dragonstonePlus;
			}
			else if (childReclasses[i][0] == "Taguel (F)"){
				stone = beaststonePlus;
			}
		}
		if (i > 0){
			let row = childStats.insertRow(childStats.rows.length - 1);
			let currentClass = row.insertCell(0).outerHTML = "<th>Class</th>";
			let level = row.insertCell(1).outerHTML = "<th>Level</th>";
			let hp = row.insertCell(2).outerHTML = "<th>HP</th>";
			let str = row.insertCell(3).outerHTML = "<th>Str</th>";
			let mag = row.insertCell(4).outerHTML = "<th>Mag</th>";
			let skl = row.insertCell(5).outerHTML = "<th>Skl</th>";
			let spd = row.insertCell(6).outerHTML = "<th>Spd</th>";
			let lck = row.insertCell(7).outerHTML = "<th>Lck</th>";
			let def = row.insertCell(8).outerHTML = "<th>Def</th>";
			let res = row.insertCell(9).outerHTML = "<th>Res</th>";
			let mov = row.insertCell(10).outerHTML = "<th>Mov</th>";
			let internal = row.insertCell(11).outerHTML = "<th>Internal</th>";
		}
		let row = childStats.insertRow(childStats.rows.length - 1);
		let currentClass = row.insertCell(0).innerHTML = '<span id="childRow'+childStats.rows.length+'class"></span>';
		let level = row.insertCell(1).innerHTML = '<span id="childRow'+childStats.rows.length+'level"></span>';
		let hp = row.insertCell(2).innerHTML = '<span id="childRow'+childStats.rows.length+'HP"></span>';
		let str = row.insertCell(3).innerHTML = '<span id="childRow'+childStats.rows.length+'STR"></span>';
		let mag = row.insertCell(4).innerHTML = '<span id="childRow'+childStats.rows.length+'MAG"></span>';
		let skl = row.insertCell(5).innerHTML = '<span id="childRow'+childStats.rows.length+'SKL"></span>';
		let spd = row.insertCell(6).innerHTML = '<span id="childRow'+childStats.rows.length+'SPD"></span>';
		let lck = row.insertCell(7).innerHTML = '<span id="childRow'+childStats.rows.length+'LCK"></span>';
		let def = row.insertCell(8).innerHTML = '<span id="childRow'+childStats.rows.length+'DEF"></span>';
		let res = row.insertCell(9).innerHTML = '<span id="childRow'+childStats.rows.length+'RES"></span>';
		let mov = row.insertCell(10).innerHTML = '<span id="childRow'+childStats.rows.length+'MOV"></span>';
		let internal = row.insertCell(11).innerHTML = '<span id="childRow'+childStats.rows.length+'internal"></span>';
		childClassName = childReclasses[i][0];
		this["childRow" + childStats.rows.length + "class"].innerHTML = childClassName;
		if (childClassName.includes("(")){
			this["childRow" + childStats.rows.length + "class"].innerHTML = childClassName.slice(0, -4);
		}
		let startingLevel = 1;
		if (i == 0){
			startingLevel = 10;
		}
		this["childRow" + childStats.rows.length + "level"].innerHTML = "<b><u>"+startingLevel+"</u></b>";
		for (let k = 0; k < 9; k++){
			if (i > 0){
				childCurrentStats[k] += classBases.get(childReclasses[i][0])[k] - classBases.get(childReclasses[i-1][0])[k];
				childCurrentStats[k] = Math.round(childCurrentStats[k] * 100) / 100;
			}
			this["childRow" + childStats.rows.length + stats[k]].innerHTML = 1 * Math.min(childCurrentStats[k], classCaps.get(childReclasses[i][0])[k] + childCaps[k]) + 1*stone[k];
			if (childCurrentStats[k] >= classCaps.get(childReclasses[i][0])[k] + childCaps[k]){
				this["childRow" + childStats.rows.length + stats[k]].innerHTML = "<"+capFormat+">" + this["childRow" + childStats.rows.length + stats[k]].innerHTML +"</"+capFormat+">";
			}
		}
		if (i > 0){
			if ([...promotions.keys()].includes(childReclasses[i-1][0])){
				if (!promotions.get(childReclasses[i-1][0]).includes(childReclasses[i][0])){
					childCurrentStats[9] += Math.floor((1*childReclasses[i-1][1] + 20*promotedClasses.includes(childReclasses[i-1][0]) - 1) / 2);
				}
			}
			else {
				childCurrentStats[9] += Math.floor((1*childReclasses[i-1][1] + 20*promotedClasses.includes(childReclasses[i-1][0]) - 1) / 2);
			}
		}
		this["childRow" + childStats.rows.length + "internal"].innerHTML = "<b>"+(1*Math.min(childCurrentStats[9], levelCap) + 1*startingLevel + 20*promotedClasses.includes(childClassName))+"</b>";
		for (let j = startingLevel+1; j <= childReclasses[i][1]; j++){
			let row = childStats.insertRow(childStats.rows.length - 1);
			let currentClass = row.insertCell(0).innerHTML = '<span id="childRow'+childStats.rows.length+'class"></span>';
			let level = row.insertCell(1).innerHTML = '<span id="childRow'+childStats.rows.length+'level"></span>';
			let hp = row.insertCell(2).innerHTML = '<span id="childRow'+childStats.rows.length+'HP"></span>';
			let str = row.insertCell(3).innerHTML = '<span id="childRow'+childStats.rows.length+'STR"></span>';
			let mag = row.insertCell(4).innerHTML = '<span id="childRow'+childStats.rows.length+'MAG"></span>';
			let skl = row.insertCell(5).innerHTML = '<span id="childRow'+childStats.rows.length+'SKL"></span>';
			let spd = row.insertCell(6).innerHTML = '<span id="childRow'+childStats.rows.length+'SPD"></span>';
			let lck = row.insertCell(7).innerHTML = '<span id="childRow'+childStats.rows.length+'LCK"></span>';
			let def = row.insertCell(8).innerHTML = '<span id="childRow'+childStats.rows.length+'DEF"></span>';
			let res = row.insertCell(9).innerHTML = '<span id="childRow'+childStats.rows.length+'RES"></span>';
			let mov = row.insertCell(10).innerHTML = '<span id="childRow'+childStats.rows.length+'MOV"></span>';
			let internal = row.insertCell(11).innerHTML = '<span id="childRow'+childStats.rows.length+'internal"></span>';
			this["childRow" + childStats.rows.length + "class"].innerHTML = childClassName;
			if (childClassName.includes("(")){
				this["childRow" + childStats.rows.length + "class"].innerHTML = childClassName.slice(0, -4);
			}
			this["childRow" + childStats.rows.length + "level"].innerHTML = "<b><u>"+j+"</u></b>";
			for (let k = 0; k < 9; k++){
				let statIncrease = 0;
				if (childCurrentStats[k] < classCaps.get(childReclasses[i][0])[k] + childCaps[k]){
					if (growthsMode.selectedIndex == 0){
						statIncrease = (childGrowths[k] + classGrowths.get(childReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100;
					}
					else {
						statIncrease = Math.round((j-1) * (childGrowths[k] + classGrowths.get(childReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100) - Math.round((j-2) * (childGrowths[k] + classGrowths.get(childReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100);
					}
					if (childCurrentStats[k] + statIncrease > classCaps.get(childReclasses[i][0])[k] + childCaps[k]){
						statIncrease = classCaps.get(childReclasses[i][0])[k] + childCaps[k] - childCurrentStats[k];
					}
				}
				childCurrentStats[k] += statIncrease;
				childStatGrowth[k] += statIncrease;
				if (growthsMode.selectedIndex == 0){
					childCurrentStats[k] = Math.round(childCurrentStats[k] * 100) / 100;
					childStatGrowth[k] = Math.round(childStatGrowth[k] * 100) / 100;
				}
				this["childRow" + childStats.rows.length + stats[k]].innerHTML = Math.round((Math.min(childCurrentStats[k], classCaps.get(childReclasses[i][0])[k] + childCaps[k]) + stone[k]) * 100) / 100;
				if (childCurrentStats[k] >= classCaps.get(childReclasses[i][0])[k] + childCaps[k]){
					this["childRow" + childStats.rows.length + stats[k]].innerHTML = "<"+capFormat+">" + this["childRow" + childStats.rows.length + stats[k]].innerHTML +"</"+capFormat+">";
				}
				if (growthsMode.selectedIndex == 1){
					if (statIncrease >= 1){
						this["childRow" + childStats.rows.length + stats[k]].innerHTML = "<b>" + this["childRow" + childStats.rows.length + stats[k]].innerHTML +"</b>";
					}
					if (statIncrease >= 2){
						this["childRow" + childStats.rows.length + stats[k]].innerHTML = "<i>" + this["childRow" + childStats.rows.length + stats[k]].innerHTML +"</b>";
					}
				}
			}
			this["childRow" + childStats.rows.length + "internal"].innerHTML = "<b>"+(1*Math.min(childCurrentStats[9], levelCap) + 1*j + 20*promotedClasses.includes(childClassName))+"</b>";
		}
	}
	childPairUp();
}

function generateSiblingTable(){
	aptitudeStats = siblingParents[1] == "Donnel" && aptitude.selectedIndex % 2 == 0;
	for (let i = 0; i < 9; i++){
		siblingCurrentStats[i] = siblingBaseStats[i];
		siblingStatGrowth[i] = siblingBaseStats[i] - classBases.get(charBases.get(sibling.innerHTML)[0])[i];
	}
	siblingCurrentStats[9] = 0;
	while (siblingStats.rows.length > 2){
		siblingStats.deleteRow(1);
	}
	for (let i = 0; i < siblingReclasses.length; i++){
		stone = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		if (transformations.selectedIndex == 1){
			if (siblingReclasses[i][0] == "Manakete"){
				stone = dragonstone;
			}
			else if (siblingReclasses[i][0] == "Taguel (F)"){
				stone = beaststone;
			}
		}
		else if (transformations.selectedIndex == 2){
			if (siblingReclasses[i][0] == "Manakete"){
				stone = dragonstonePlus;
			}
			else if (siblingReclasses[i][0] == "Taguel (F)"){
				stone = beaststonePlus;
			}
		}
		if (i > 0){
			let row = siblingStats.insertRow(siblingStats.rows.length - 1);
			let currentClass = row.insertCell(0).outerHTML = "<th>Class</th>";
			let level = row.insertCell(1).outerHTML = "<th>Level</th>";
			let hp = row.insertCell(2).outerHTML = "<th>HP</th>";
			let str = row.insertCell(3).outerHTML = "<th>Str</th>";
			let mag = row.insertCell(4).outerHTML = "<th>Mag</th>";
			let skl = row.insertCell(5).outerHTML = "<th>Skl</th>";
			let spd = row.insertCell(6).outerHTML = "<th>Spd</th>";
			let lck = row.insertCell(7).outerHTML = "<th>Lck</th>";
			let def = row.insertCell(8).outerHTML = "<th>Def</th>";
			let res = row.insertCell(9).outerHTML = "<th>Res</th>";
			let mov = row.insertCell(10).outerHTML = "<th>Mov</th>";
			let internal = row.insertCell(11).outerHTML = "<th>Internal</th>";
		}
		let row = siblingStats.insertRow(siblingStats.rows.length - 1);
		let currentClass = row.insertCell(0).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'class"></span>';
		let level = row.insertCell(1).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'level"></span>';
		let hp = row.insertCell(2).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'HP"></span>';
		let str = row.insertCell(3).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'STR"></span>';
		let mag = row.insertCell(4).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'MAG"></span>';
		let skl = row.insertCell(5).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'SKL"></span>';
		let spd = row.insertCell(6).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'SPD"></span>';
		let lck = row.insertCell(7).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'LCK"></span>';
		let def = row.insertCell(8).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'DEF"></span>';
		let res = row.insertCell(9).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'RES"></span>';
		let mov = row.insertCell(10).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'MOV"></span>';
		let internal = row.insertCell(11).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'internal"></span>';
		siblingClassName = siblingReclasses[i][0];
		this["siblingRow" + siblingStats.rows.length + "class"].innerHTML = siblingClassName;
		if (siblingClassName.includes("(")){
			this["siblingRow" + siblingStats.rows.length + "class"].innerHTML = siblingClassName.slice(0, -4);
		}
		let startingLevel = 1;
		if (i == 0){
			startingLevel = 10;
		}
		this["siblingRow" + siblingStats.rows.length + "level"].innerHTML = "<b><u>"+startingLevel+"</u></b>";
		for (let k = 0; k < 9; k++){
			if (i > 0){
				siblingCurrentStats[k] += classBases.get(siblingReclasses[i][0])[k] - classBases.get(siblingReclasses[i-1][0])[k];
				siblingCurrentStats[k] = Math.round(siblingCurrentStats[k] * 100) / 100;
			}
			this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML = 1 * Math.min(siblingCurrentStats[k], classCaps.get(siblingReclasses[i][0])[k] + siblingCaps[k]) + 1*stone[k];
			if (siblingCurrentStats[k] >= classCaps.get(siblingReclasses[i][0])[k] + siblingCaps[k]){
				this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML = "<"+capFormat+">" + this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML +"</"+capFormat+">";
			}
		}
		if (i > 0){
			if ([...promotions.keys()].includes(siblingReclasses[i-1][0])){
				if (!promotions.get(siblingReclasses[i-1][0]).includes(siblingReclasses[i][0])){
					siblingCurrentStats[9] += Math.floor((1*siblingReclasses[i-1][1] + 20*promotedClasses.includes(siblingReclasses[i-1][0]) - 1) / 2);
				}
			}
			else {
				siblingCurrentStats[9] += Math.floor((1*siblingReclasses[i-1][1] + 20*promotedClasses.includes(siblingReclasses[i-1][0]) - 1) / 2);
			}
		}
		this["siblingRow" + siblingStats.rows.length + "internal"].innerHTML = "<b>"+(1*Math.min(siblingCurrentStats[9], levelCap) + 1*startingLevel + 20*promotedClasses.includes(siblingClassName))+"</b>";
		for (let j = startingLevel+1; j <= siblingReclasses[i][1]; j++){
			let row = siblingStats.insertRow(siblingStats.rows.length - 1);
			let currentClass = row.insertCell(0).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'class"></span>';
			let level = row.insertCell(1).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'level"></span>';
			let hp = row.insertCell(2).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'HP"></span>';
			let str = row.insertCell(3).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'STR"></span>';
			let mag = row.insertCell(4).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'MAG"></span>';
			let skl = row.insertCell(5).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'SKL"></span>';
			let spd = row.insertCell(6).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'SPD"></span>';
			let lck = row.insertCell(7).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'LCK"></span>';
			let def = row.insertCell(8).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'DEF"></span>';
			let res = row.insertCell(9).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'RES"></span>';
			let mov = row.insertCell(10).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'MOV"></span>';
			let internal = row.insertCell(11).innerHTML = '<span id="siblingRow'+siblingStats.rows.length+'internal"></span>';
			this["siblingRow" + siblingStats.rows.length + "class"].innerHTML = siblingClassName;
			if (siblingClassName.includes("(")){
				this["siblingRow" + siblingStats.rows.length + "class"].innerHTML = siblingClassName.slice(0, -4);
			}
			this["siblingRow" + siblingStats.rows.length + "level"].innerHTML = "<b><u>"+j+"</u></b>";
			for (let k = 0; k < 9; k++){
				let statIncrease = 0;
				if (siblingCurrentStats[k] < classCaps.get(siblingReclasses[i][0])[k] + siblingCaps[k]){
					if (growthsMode.selectedIndex == 0){
						statIncrease = (siblingGrowths[k] + classGrowths.get(siblingReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100;
					}
					else {
						statIncrease = Math.round((j-1) * (siblingGrowths[k] + classGrowths.get(siblingReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100) - Math.round((j-2) * (siblingGrowths[k] + classGrowths.get(siblingReclasses[i][0])[k] + 20 * (aptitudeStats && k != 8)) / 100);
					}
					if (siblingCurrentStats[k] + statIncrease > classCaps.get(siblingReclasses[i][0])[k] + siblingCaps[k]){
						statIncrease = classCaps.get(siblingReclasses[i][0])[k] + siblingCaps[k] - siblingCurrentStats[k];
					}
				}
				siblingCurrentStats[k] += statIncrease;
				siblingStatGrowth[k] += statIncrease;
				if (growthsMode.selectedIndex == 0){
					siblingCurrentStats[k] = Math.round(siblingCurrentStats[k] * 100) / 100;
					siblingStatGrowth[k] = Math.round(siblingStatGrowth[k] * 100) / 100;
				}
				this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML = Math.round((Math.min(siblingCurrentStats[k], classCaps.get(siblingReclasses[i][0])[k] + siblingCaps[k]) + stone[k]) * 100 ) / 100;
				if (siblingCurrentStats[k] >= classCaps.get(siblingReclasses[i][0])[k] + siblingCaps[k]){
					this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML = "<"+capFormat+">" + this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML +"</"+capFormat+">";
				}
				if (growthsMode.selectedIndex == 1){
					if (statIncrease >= 1){
						this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML = "<b>" + this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML +"</b>";
					}
					if (statIncrease >= 2){
						this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML = "<i>" + this["siblingRow" + siblingStats.rows.length + stats[k]].innerHTML +"</b>";
					}
				}
			}
			this["siblingRow" + siblingStats.rows.length + "internal"].innerHTML = "<b>"+(1*Math.min(siblingCurrentStats[9], levelCap) + 1*j + 20*promotedClasses.includes(siblingClassName))+"</b>";
		}
	}
	siblingPairUp();
}

function levelParent(){
	parentName = parent.value.replace("'", "");
	className = parentClass.value;
	if (["Lord", "Great Lord", "Taguel"].includes(className)){
		className += " (" + genders.get(parentName) + ")";
	}
	let maxLevel = 20;
	if (specialClasses.includes(parentReclasses[parentReclasses.length-1][0])){
		maxLevel = 30;
	}
	if (className == parentReclasses[parentReclasses.length-1][0] && parentReclasses[parentReclasses.length-1][1] < maxLevel){
		parentReclasses[parentReclasses.length-1][1] = parentLevel.value;
	}
	else {
		parentReclasses.push([className, parentLevel.value * 1]);
	}
	while (parentClass.length > 0){
		parentClass.remove(0);
		parentClass2.remove(0);
	}
	classList = generateClassList(classPools.get(parentName), parentReclasses[parentReclasses.length-1][0], parentReclasses[parentReclasses.length-1][1]);
	for (let i = 0; i < classList.length; i++){
		if (classList[i].includes("(")){
			parentClass[i] = new Option(classList[i].slice(0, -4));
			parentClass2[i] = new Option(classList[i].slice(0, -4));
		}
		else {
			parentClass[i] = new Option(classList[i]);
			parentClass2[i] = new Option(classList[i]);
		}
	}
	generateParentTable();
	updateParentLevels();
}

function levelSpouse(){
	spouseName = spouse.value.replace("'", "");
	className = spouseClass.value;
	if (["Lord", "Great Lord", "Taguel"].includes(className)){
		className += " (" + genders.get(spouseName) + ")";
	}
	let maxLevel = 20;
	if (specialClasses.includes(spouseReclasses[spouseReclasses.length-1][0])){
		maxLevel = 30;
	}
	if (className == spouseReclasses[spouseReclasses.length-1][0] && spouseReclasses[spouseReclasses.length-1][1] < maxLevel){
		spouseReclasses[spouseReclasses.length-1][1] = spouseLevel.value;
	}
	else {
		spouseReclasses.push([className, spouseLevel.value * 1]);
	}
	while (spouseClass.length > 0){
		spouseClass.remove(0);
		spouseClass2.remove(0);
	}
	classList = generateClassList(classPools.get(spouseName), spouseReclasses[spouseReclasses.length-1][0], spouseReclasses[spouseReclasses.length-1][1]);
	for (let i = 0; i < classList.length; i++){
		if (classList[i].includes("(")){
			spouseClass[i] = new Option(classList[i].slice(0, -4));
			spouseClass2[i] = new Option(classList[i].slice(0, -4));
		}
		else {
			spouseClass[i] = new Option(classList[i]);
			spouseClass2[i] = new Option(classList[i]);
		}
	}
	generateSpouseTable();
	updateSpouseLevels();
}

function levelChild(){
	className = childClass.value;
	if (["Lord", "Great Lord", "Taguel"].includes(className)){
		className += " (" + genders.get(child.innerHTML) + ")";
	}
	let maxLevel = 20;
	if (specialClasses.includes(childReclasses[childReclasses.length-1][0])){
		maxLevel = 30;
	}
	if (childStatGrowth.length == 0){
		generateChildBases();
	}
	if (className == childReclasses[childReclasses.length-1][0] && childReclasses[childReclasses.length-1][1] < maxLevel){
		childReclasses[childReclasses.length-1][1] = childLevel.value;
	}
	else {
		childReclasses.push([className, childLevel.value * 1]);
	}
	while (childClass.length > 0){
		childClass.remove(0);
		childClass2.remove(0);
	}
	classList = generateClassList(childClasses, childReclasses[childReclasses.length-1][0], childReclasses[childReclasses.length-1][1]);
	for (let i = 0; i < classList.length; i++){
		if (classList[i].includes("(")){
			childClass[i] = new Option(classList[i].slice(0, -4));
			childClass2[i] = new Option(classList[i].slice(0, -4));
		}
		else {
			childClass[i] = new Option(classList[i]);
			childClass2[i] = new Option(classList[i]);
		}
	}
	generateChildTable();
	updateChildLevels();
}

function levelSibling(){
	className = siblingClass.value;
	if (["Lord", "Great Lord", "Taguel"].includes(className)){
		className += " (" + genders.get(sibling.innerHTML) + ")";
	}
	let maxLevel = 20;
	if (specialClasses.includes(siblingReclasses[siblingReclasses.length-1][0])){
		maxLevel = 30;
	}
	if (siblingStatGrowth.length == 0){
		generateSiblingBases();
	}
	if (className == siblingReclasses[siblingReclasses.length-1][0] && siblingReclasses[siblingReclasses.length-1][1] < maxLevel){
		siblingReclasses[siblingReclasses.length-1][1] = siblingLevel.value;
	}
	else {
		siblingReclasses.push([className, siblingLevel.value * 1]);
	}
	while (siblingClass.length > 0){
		siblingClass.remove(0);
		siblingClass2.remove(0);
	}
	classList = generateClassList(siblingClasses, siblingReclasses[siblingReclasses.length-1][0], siblingReclasses[siblingReclasses.length-1][1]);
	for (let i = 0; i < classList.length; i++){
		if (classList[i].includes("(")){
			siblingClass[i] = new Option(classList[i].slice(0, -4));
			siblingClass2[i] = new Option(classList[i].slice(0, -4));
		}
		else {
			siblingClass[i] = new Option(classList[i]);
			siblingClass2[i] = new Option(classList[i]);
		}
	}
	generateSiblingTable();
	updateSiblingLevels();
}

function resetParent(){
	let parentName = parent.value.replace("'", "");
	parentReclasses = [[parentReclasses[0][0], charBases.get(parentName)[1]]];
	while (parentClass.length > 0){
		parentClass.remove(0);
		parentClass2.remove(0);
	}
	classList = generateClassList(classPools.get(parentName), parentReclasses[0][0], parentReclasses[0][1]);
	for (let i = 0; i < classList.length; i++){
		if (classList[i].includes("(")){
			parentClass[i] = new Option(classList[i].slice(0, -4));
			parentClass2[i] = new Option(classList[i].slice(0, -4));
		}
		else {
			parentClass[i] = new Option(classList[i]);
			parentClass2[i] = new Option(classList[i]);
		}
	}
	generateParentTable();
	updateParentLevels();
}

function resetSpouse(){
	let spouseName = spouse.value.replace("'", "");
	spouseReclasses = [[spouseReclasses[0][0], charBases.get(spouseName)[1]]];
	while (spouseClass.length > 0){
		spouseClass.remove(0);
		spouseClass2.remove(0);
	}
	classList = generateClassList(classPools.get(spouseName), spouseReclasses[0][0], spouseReclasses[0][1]);
	for (let i = 0; i < classList.length; i++){
		if (classList[i].includes("(")){
			spouseClass[i] = new Option(classList[i].slice(0, -4));
			spouseClass2[i] = new Option(classList[i].slice(0, -4));
		}
		else {
			spouseClass[i] = new Option(classList[i]);
			spouseClass2[i] = new Option(classList[i]);
		}
	}
	generateSpouseTable();
	updateSpouseLevels();
}

function resetChild(){
	if (childStatGrowth.length > 0){
		childReclasses = [[childReclasses[0][0], charBases.get(child.innerHTML)[1]]];
		while (childClass.length > 0){
			childClass.remove(0);
			childClass2.remove(0);
		}
		classList = generateClassList(childClasses, childReclasses[0][0], childReclasses[0][1]);
		for (let i = 0; i < classList.length; i++){
			if (classList[i].includes("(")){
				childClass[i] = new Option(classList[i].slice(0, -4));
				childClass2[i] = new Option(classList[i].slice(0, -4));
			}
			else {
				childClass[i] = new Option(classList[i]);
				childClass2[i] = new Option(classList[i]);
			}
		}
		generateChildTable();
		updateChildLevels();
	}
}

function resetSibling(){
	if (siblingStatGrowth.length > 0){
		siblingReclasses = [[siblingReclasses[0][0], charBases.get(sibling.innerHTML)[1]]];
		while (siblingClass.length > 0){
			siblingClass.remove(0);
			siblingClass2.remove(0);
		}
		classList = generateClassList(siblingClasses, siblingReclasses[0][0], siblingReclasses[0][1]);
		for (let i = 0; i < classList.length; i++){
			if (classList[i].includes("(")){
				siblingClass[i] = new Option(classList[i].slice(0, -4));
				siblingClass2[i] = new Option(classList[i].slice(0, -4));
			}
			else {
				siblingClass[i] = new Option(classList[i]);
				siblingClass2[i] = new Option(classList[i]);
			}
		}
		generateSiblingTable();
		updateSiblingLevels();
	}
}

function parentPairUp(){
	for (let i = 1; i < 9; i++){
		this["parent"+stats[i]].innerHTML = pairUpBonuses.get(parentReclasses[parentReclasses.length-1][0])[i] + Math.min(Math.floor(Math.round(parentCurrentStats[i]) / 10), 3) * (i < 8) + (pairUpBonuses.get(parentReclasses[parentReclasses.length-1][0])[i] > 0 && i < 8) * parentRank.selectedIndex;
	}
}

function spousePairUp(){
	for (let i = 1; i < 9; i++){
		this["spouse"+stats[i]].innerHTML = pairUpBonuses.get(spouseReclasses[spouseReclasses.length-1][0])[i] + Math.min(Math.floor(Math.round(spouseCurrentStats[i]) / 10), 3) * (i < 8) + (pairUpBonuses.get(spouseReclasses[spouseReclasses.length-1][0])[i] > 0 && i < 8) * spouseRank.selectedIndex;
	}
}

function childPairUp(){
	if (childStats.rows.length > 2){
		for (let i = 1; i < 9; i++){
			this["child"+stats[i]].innerHTML = pairUpBonuses.get(childReclasses[childReclasses.length-1][0])[i] + Math.min(Math.floor(Math.round(childCurrentStats[i]) / 10), 3) * (i < 8) + (pairUpBonuses.get(childReclasses[childReclasses.length-1][0])[i] > 0 && i < 8) * childRank.selectedIndex;
		}
	}
}

function siblingPairUp(){
	if (siblingStats.rows.length > 2){
		for (let i = 1; i < 9; i++){
			this["sibling"+stats[i]].innerHTML = pairUpBonuses.get(siblingReclasses[siblingReclasses.length-1][0])[i] + Math.min(Math.floor(Math.round(siblingCurrentStats[i]) / 10), 3) * (i < 8) + (pairUpBonuses.get(siblingReclasses[siblingReclasses.length-1][0])[i] > 0 && i < 8) * siblingRank.selectedIndex;
		}
	}
}

var difficulty = document.getElementById("difficulty");
var growthsMode = document.getElementById("growthsMode");
var asset = document.getElementById("asset");
var flaw = document.getElementById("flaw");
var aptitude = document.getElementById("aptitude");
var transformations = document.getElementById("transformations");
var difficulty2 = document.getElementById("difficulty2");
var growthsMode2 = document.getElementById("growthsMode2");
var asset2 = document.getElementById("asset2");
var flaw2 = document.getElementById("flaw2");
var aptitude2 = document.getElementById("aptitude2");
var transformations2 = document.getElementById("transformations2");
difficulty.selectedIndex = 2;
growthsMode.selectedIndex = 0;
asset.selectedIndex = 4;
flaw.selectedIndex = 5;
aptitude.selectedIndex = 0;
transformations.selectedIndex = 1;
difficulty2.selectedIndex = 2;
growthsMode2.selectedIndex = 0;
asset2.selectedIndex = 4;
flaw2.selectedIndex = 5;
aptitude2.selectedIndex = 0;
transformations2.selectedIndex = 1;
var capFormat = "u";

var parent = document.getElementById("parent");
var parentClass = document.getElementById("parentClass");
var parentLevel = document.getElementById("parentLevel");
var parent2 = document.getElementById("parent2");
var parentClass2 = document.getElementById("parentClass2");
var parentLevel2 = document.getElementById("parentLevel2");
var spouse = document.getElementById("spouse");
var spouseClass = document.getElementById("spouseClass");
var spouseLevel = document.getElementById("spouseLevel");
var spouse2 = document.getElementById("spouse2");
var spouseClass2 = document.getElementById("spouseClass2");
var spouseLevel2 = document.getElementById("spouseLevel2");
var child = document.getElementById("child");
var childClass = document.getElementById("childClass");
var childLevel = document.getElementById("childLevel");
var child2 = document.getElementById("child2");
var childClass2 = document.getElementById("childClass2");
var childLevel2 = document.getElementById("childLevel2");
var sibling = document.getElementById("sibling");
var siblingClass = document.getElementById("siblingClass");
var siblingLevel = document.getElementById("siblingLevel");
var sibling2 = document.getElementById("sibling2");
var siblingClass2 = document.getElementById("siblingClass2");
var siblingLevel2 = document.getElementById("siblingLevel2");

var parentStats = document.getElementById("parentStats");
var spouseStats = document.getElementById("spouseStats");
var childStats = document.getElementById("childStats");
var siblingStats = document.getElementById("siblingStats");

var parentRank = document.getElementById("parentRank");
var parentSTR = document.getElementById("parentSTR");
var parentMAG = document.getElementById("parentMAG");
var parentSKL = document.getElementById("parentSKL");
var parentSPD = document.getElementById("parentSPD");
var parentLCK = document.getElementById("parentLCK");
var parentDEF = document.getElementById("parentDEF");
var parentRES = document.getElementById("parentRES");
var parentMOV = document.getElementById("parentMOV");
var spouseRank = document.getElementById("spouseRank");
var spouseSTR = document.getElementById("spouseSTR");
var spouseMAG = document.getElementById("spouseMAG");
var spouseSKL = document.getElementById("spouseSKL");
var spouseSPD = document.getElementById("spouseSPD");
var spouseLCK = document.getElementById("spouseLCK");
var spouseDEF = document.getElementById("spouseDEF");
var spouseRES = document.getElementById("spouseRES");
var spouseMOV = document.getElementById("spouseMOV");
var childRank = document.getElementById("childRank");
var childHP = document.getElementById("childHP");
var childSTR = document.getElementById("childSTR");
var childMAG = document.getElementById("childMAG");
var childSKL = document.getElementById("childSKL");
var childSPD = document.getElementById("childSPD");
var childLCK = document.getElementById("childLCK");
var childDEF = document.getElementById("childDEF");
var childRES = document.getElementById("childRES");
var childMOV = document.getElementById("childMOV");
var siblingRank = document.getElementById("siblingRank");
var siblingHP = document.getElementById("siblingHP");
var siblingSTR = document.getElementById("siblingSTR");
var siblingMAG = document.getElementById("siblingMAG");
var siblingSKL = document.getElementById("siblingSKL");
var siblingSPD = document.getElementById("siblingSPD");
var siblingLCK = document.getElementById("siblingLCK");
var siblingDEF = document.getElementById("siblingDEF");
var siblingRES = document.getElementById("siblingRES");
var siblingMOV = document.getElementById("siblingMOV");
parentRank.selectedIndex = 0;
spouseRank.selectedIndex = 0;
childRank.selectedIndex = 0;
siblingRank.selectedIndex = 0;

var levelCap = 50;

spouse.remove(0);
spouse2.remove(0);
for (let i = 1; i < 37; i++){
	if (["Lonqu", "Sayri", "Yenfay"].includes(characters[i])){
		parent[i] = new Option(characters[i].slice(0, 3) + "'" + characters[i].slice(3));
		parent2[i] = new Option(characters[i].slice(0, 3) + "'" + characters[i].slice(3));
		spouse[i] = new Option(characters[i].slice(0, 3) + "'" + characters[i].slice(3));
		spouse2[i] = new Option(characters[i].slice(0, 3) + "'" + characters[i].slice(3));
	}
	else {
		parent[i] = new Option(characters[i]);
		parent2[i] = new Option(characters[i]);
		spouse[i] = new Option(characters[i]);
		spouse2[i] = new Option(characters[i]);
	}
}
spouse.selectedIndex = 10;
spouse2.selectedIndex = 10;

updateParent();
updateSpouse();
generateChildBases();
generateSiblingBases();
updateAssetFlaw();
childStats.deleteRow(1);
childCurrentStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
childStatGrowth = [];
siblingStats.deleteRow(1);
siblingCurrentStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
siblingStatGrowth = [];

for (let i = 0; i < 9; i++){
	this["child"+stats[i]].innerHTML = "–"
	this["sibling"+stats[i]].innerHTML = "–"
}