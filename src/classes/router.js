import Router from 'express-promise-router'
import Class from './class.model'

const router = Router()

router.get('/classes', async (req, res) => {
  const classes = await Class.query()
    .eager(`[
      proficiencies(armor) as armor,
      proficiencies(weapons) as weapons,
      proficiencies(savingThrows) as savingThrows,
      proficiencies(skills) as skills
    ]`)

  res.send(classes)
})

router.get('/classes/:id', async (req, res) => {
  const klass = await Class.query()
    .findById(req.params.id)
    .throwIfNotFound()
    .eager(`[
      proficiencies(armor) as armor,
      proficiencies(weapons) as weapons,
      proficiencies(savingThrows) as savingThrows,
      proficiencies(skills) as skills
    ]`)

  res.send(klass)
})

export default router
