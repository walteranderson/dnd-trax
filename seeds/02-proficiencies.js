const TABLE_NAME = 'proficiencies'

exports.seed = knex => {
  return knex(TABLE_NAME).truncate()
    .then(() => {
      const data = [].concat(
        format(1, armor),
        format(2, weapons),
        format(3, artisanTools),
        format(4, gamingSets),
        format(5, musicalInstruments),
        format(6, vehicles),
        format(7, savingThrows),
        format(8, skills),
        format(9, other),
      )

      return knex(TABLE_NAME).insert(data)
    })
}

function format(type_id, names) {
  return names().map(name => {
    return {
      type_id,
      name
    }
  })
}

function armor() {
  return [
    "Light armor",
    "Medium armor",
    "Heavy armor",
    "All armor",
    "Padded",
    "Leather",
    "Studded Leather",
    "Hide",
    "Chain Shirt",
    "Scale Mail",
    "Breastplate",
    "Half Plate",
    "Ring Mail",
    "Chain Mail",
    "Splint",
    "Plate",
    "Shield",
    "Shields"
  ]
}

function weapons() {
  return [
    "Simple weapons",
    "Martial weapons",
    "Clubs",
    "Daggers",
    "Greatclubs",
    "Handaxes",
    "Javelins",
    "Light hammers",
    "Maces",
    "Quarterstaffs",
    "Sickles",
    "Spears",
    "Crossbows, light",
    "Darts",
    "Shortbows",
    "Slings",
    "Battleaxes",
    "Flails",
    "Glaives",
    "Greataxes",
    "Greatswords",
    "Halberds",
    "Lances",
    "Longswords",
    "Mauls",
    "Morningstars",
    "Pikes",
    "Rapiers",
    "Scimitars",
    "Shortswords",
    "Tridents",
    "War picks",
    "Warhammers",
    "Whips",
    "Blowguns",
    "Crossbows, hand",
    "Crossbows, heavy",
    "Longbows",
    "Nets"
  ]
}

function artisanTools() {
  return [
    "Alchemist's supplies",
    "Brewer's supplies",
    "Calligrapher's supplies",
    "Carpenter's tools",
    "Cartographer's tools",
    "Cobbler's tools",
    "Cook's utensils",
    "Glassblower's tools",
    "Jeweler's tools",
    "Leatherworker's tools",
    "Mason's tools",
    "Painter's supplies",
    "Potter's tools",
    "Smith's tools",
    "Tinker's tools",
    "Weaver's tools",
    "Woodcarver's tools",
    "Disguise kit",
    "Forgery kit"
  ]
}

function gamingSets() {
  return [
    "Dice Set",
    "Dragonchess set",
    "Playing card set",
    "Three-Dragon Ante set",
  ]
}

function musicalInstruments() {
  return [
    "Bagpipes",
    "Drum",
    "Dulcimer",
    "Flute",
    "Lute",
    "Lyre",
    "Horn",
    "Pan flute",
    "Shawm",
    "Viol"
  ]
}

function vehicles() {
  return [
    "Land Vehicles",
    "Water Vehicles"
  ]
}

function savingThrows() {
  return [
    "STR",
    "DEX",
    "CON",
    "INT",
    "WIS",
    "CHA"
  ]
}

function skills() {
  return [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight of Hand",
    "Stealth",
    "Survival"
  ]
}

function other() {
  return [
    "Disguise Kit",
    "Forgery Kit",
    "Herbalism Kit",
    "Navigator's Tools",
    "Poisoner's Kit",
    "Thieves' Tools"
  ]
}
