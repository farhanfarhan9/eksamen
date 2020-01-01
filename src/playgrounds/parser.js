const babel = require('@babel/core');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs-extra');
const path = require('path');

const app = fs.readFileSync(path.resolve(__dirname, '../app.js'), 'utf-8');
try {
  const ast = parser.parse(app, {
    sourceType: 'module'
  });
  traverse(ast, {
    ImportDeclaration: function({node}) {
      console.log(node.source.value);
    }
  });
  babel.transformFromAst(ast, null, {presets: ['@babel/preset-env']}, function(err, result) {
    if (err) console.log(err);
    console.log(result.code);
  });
} catch (err) {
  console.log(err);
}
