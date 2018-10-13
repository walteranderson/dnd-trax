import { Model } from 'objection'
import Class from '../classes/class.model'
import ProficiencyType from './proficiency-type.model'


export default class Proficiency extends Model {
  static tableName = 'proficiencies'

  static relationMappings = {
    classes: {
      relation: Model.ManyToManyRelation,
      modelClass: Class,
      join: {
        from: 'proficiencies.id'
        through: {
          from: 'classes_proficiencies.proficiency_id'
          to: 'classes_proficiencies.class_id',
        },
        to: 'classes.id',
      }
    },
    type: {
      relation: Model.BelongsToOneRelation,
      modelClass: ProficiencyType,
      join: {
        from: 'proficiencies.type_id',
        to: 'proficiency_types.id'
      }
    }
  }
}
