const React = require('react');
const Layout = require('./src/components/templates/Layout/Layout').default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
};
