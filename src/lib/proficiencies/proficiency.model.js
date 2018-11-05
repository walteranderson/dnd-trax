import { Model } from 'objection'
import path from 'path'


export default class Proficiency extends Model {
  static tableName = 'proficiencies'

  static relationMappings = {
    classes: {
      relation: Model.ManyToManyRelation,
      modelClass: path.resolve(__dirname, '../classes/class.model'),
      join: {
        from: 'proficiencies.id',
        through: {
          from: 'classes_proficiencies.proficiency_id',
          to: 'classes_proficiencies.class_id',
        },
        to: 'classes.id'
      }
    },
    type: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/proficiency-type.model`,
      join: {
        from: 'proficiencies.type_id',
        to: 'proficiency_types.id'
      }
    }
  }

  static get modifiers () {
    return {
      armor: typeFilter('Armor'),
      weapons: typeFilter('Weapons'),
      savingThrows: typeFilter('Saving Throws'),
      skills: typeFilter('Skills'),
      other: typeFilter('Other')
    }
  }
}

/**
 * Returns a modifier function to apply
 * a filter based on the proficiency type.
 *
 * @param  {String} name
 * @return {Function}
 */
function typeFilter(name) {
  return builder => {
    return builder.joinRelation('type').where('type.name', name)
  }
}
