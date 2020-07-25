import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('forms', table => {
    table.increments('id').primary();
    table.date('data')
    table.boolean('contato com infectado')
    table.boolean('tosse')
    table.boolean('febre')
    table.boolean('fata de ar')
    table.boolean('calafrio')
    table.decimal('temperatura')

    table.integer('user_id').notNullable().references('id').inTable('users')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('forms')
}