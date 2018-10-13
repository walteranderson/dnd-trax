import { Model } from 'objection'
import Proficiency from '../proficiencies/proficiency.model'

export default class Class extends Model {
  static tableName = 'classes'

  static jsonSchema = {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      hit_die: { type: 'integer' },
      base_hit_points: { type: 'integer' }, // or base_health?
    }
  }

  static relationMappings = {
    proficiencies: {
      relation: Model.ManyToManyRelation,
      modelClass: Proficiency,
      join: {
        from: 'classes.id',
        through: {
          from: 'classes_proficiencies.class_id',
          to: 'classes_proficiencies.proficiency_id'
        },
        to: 'proficiencies.id''
      }
    }
  }
}
