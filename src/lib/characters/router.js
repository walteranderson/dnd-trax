import Router from 'express-promise-router'
import Character from './character.model'

const router = Router()

router.get('/characters', async (req, res) => {
  const characters = await Character.query()

  res.send(characters)
})

export default router
