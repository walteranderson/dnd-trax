import { Model } from 'objection'

export default class ProficiencyType extends Model {
  static tableName = 'proficiency_types'

  static relationMappings = {
    proficiencies: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/proficiency.model`,
      join: {
        from: 'proficiency_types.id',
        to: 'proficiencies.type_id'
      }
    }
  }
}
