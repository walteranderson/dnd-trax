import { Model } from 'objection'

export default class Character extends Model {
  static tableName = 'characters'

  static jsonSchema = {
    type: 'object',
    required: ['name']
  }
}
