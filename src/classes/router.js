import { Router } from 'express'
import Class from './class.model'

const router = Router()

router.get('/classes', async (req, res) => {
  try {
    const classes = await Class
      .query()
      .eager('[proficiencies.[type]]')

    res.send(classes)
  } catch(err) {
    console.error(err)
  }
})

router.get('/classes/:id', async (req, res) => {
  try {
    const klass = await Class
      .query()
      .findById(req.params.id)
      // .eager('proficiencies.type(skills) as skills')

    res.send(klass)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

export default router
