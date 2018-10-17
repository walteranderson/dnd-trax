import Router from 'express-promise-router'
import Class from './class.model'

const router = Router()

router.get('/classes', async (req, res) => {
  const classes = await Class.query()

  res.send(classes)
})

router.get('/classes/:id', async (req, res) => {
  const klass = await Class.query()
    .findById(req.params.id)
    .throwIfNotFound()
    .eager(`[
      proficiencies(filterArmor) as armor,
      proficiencies(filterWeapons) as weapons,
      proficiencies(filterSavingThrows) as savingThrows,
      proficiencies(filterSkills) as skills
    ]`)

  res.send(klass)
})

export default router
