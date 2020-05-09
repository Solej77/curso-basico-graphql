'use strict'

const { graphql, buildSchema } = require('graphql')

// definiendo el esquema
const schema = buildSchema(`
	type Query {
		hello: String
	}
`)

// Ejecutar query
graphql(schema, '{ hello }')
.then((data) => console.log(data))