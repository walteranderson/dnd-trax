import { Model } from 'objection'
import path from 'path'

export default class Class extends Model {
  static tableName = 'classes'

  static jsonSchema = {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      hit_die: { type: 'integer' },
      base_health: { type: 'integer' }
    }
  }

  static relationMappings = {
    proficiencies: {
      relation: Model.ManyToManyRelation,
      modelClass: path.resolve(__dirname, '../proficiencies/proficiency.model'),
      join: {
        from: 'classes.id',
        through: {
          from: 'classes_proficiencies.class_id',
          to: 'classes_proficiencies.proficiency_id'
        },
        to: 'proficiencies.id'
      }
    }
  }
}
