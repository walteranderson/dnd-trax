import { Model } from 'objection'

export default class Subrace extends Model {
  static tableName = 'subraces'

  static relationMapping = {
    race: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/race.model`,
      join: {
        from: 'subraces.race_id',
        to: 'races.id'
      }
    }
  }
}
