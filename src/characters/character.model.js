import { Model } from 'objection'

// level
// xp
// proficiency bonus?
// class
// race
// subrace
// name
// age
// languages?
// base speed
// ability scores
// background
// personality traits (2)
// chosen proficiencies
// starting equipment
// alignment
// max hitpoints?
// money

export default class Character extends Model {
  static tableName = 'characters'

  static jsonSchema = {
    type: 'object',
    required: ['name']
  }
}
