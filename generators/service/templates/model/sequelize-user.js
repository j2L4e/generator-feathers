'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const <%= camelName %> = sequelizeClient.define('<%= kebabName %>', {
  <% if(authentication.strategies.indexOf('local') !== -1) { %>
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true
    },
  <% } %>
  <% authentication.oauthProviders.forEach(provider => { %>
    <%= provider.name %>Id: { type: Sequelize.STRING },
  <% }); %>
  }, {
    classMethods: {
      associate (models) {
      	// Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  });

  return <%= camelName %>;
};