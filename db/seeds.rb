# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Derivative.create!(symbol: 'AAPL', name: 'Apple')
Derivative.create!(symbol: 'MSFT', name: 'Microsoft')
Derivative.create!(symbol: 'GOOG', name: 'Google')
Derivative.create!(symbol: "BARC.L", name: 'Barclays')
Derivative.create!(symbol: 'TWTR', name: 'Twitter')
Derivative.create!(symbol: 'FB', name: 'Facebook')
Derivative.create!(symbol: "SIE.DE", name: "Siemens")
