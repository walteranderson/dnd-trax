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
}
