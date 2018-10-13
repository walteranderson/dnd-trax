import { Router } from 'express'
import Character from './character.model'

const router = Router()

router.get('/characters', async (req, res) => {
  try {
    const characters = await Character.query()

    res.send(characters)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

export default router
