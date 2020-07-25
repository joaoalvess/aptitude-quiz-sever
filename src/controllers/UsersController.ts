import { Request, Response } from 'express'
import knex from '../database/connection'

class UsersController{
  async create(request : Request, response: Response) {
    const {
      nome,
      email,
      senha,
      cpf,
      matricula,
    } = request.body

    const user = {
      nome,
      email,
      senha,
      cpf,
      matricula,
    }

    const insertId = await knex('users').insert(user)

    const user_id = insertId[0]

    return response.json({
      id: user_id,
      ...user
    })
  }
}

export default UsersController