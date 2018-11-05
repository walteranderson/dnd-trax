import { Model } from 'objection'

export default class Race extends Model {
  static tableName = 'races'

  static relationMapping = {
    subraces: {
      relation: Model.HasManyRelation
      modelClass: `${__dirname}/subrace.model`,
      join: {
        from: 'races.id',
        to: 'subraces.race_id'
      }
    }
  }
}
