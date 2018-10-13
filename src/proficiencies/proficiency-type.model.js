import { Model } from 'objection'
import Proficiency from './proficiency.model'


export default class ProficiencyType extends Model {
  static tableName = 'proficiency_types'

  static relationMappings = {
    classes: {
      relation: Model.HasManyRelation,
      modelClass: Proficiency,
      join: {
        from: 'proficiency_types.id'
        to: 'proficiencies.type_id',
      }
    }
  }
}
