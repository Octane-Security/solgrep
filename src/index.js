/**
 * @author github.com/tintinweb
 * @license MIT
 * */
const {SolGrep} = require('./solgrep');
const rules = require('../src/rules');
const solidity = require('../src/solidity');
const { SourceUnit, Contract, FunctionDef } = solidity;
const { BaseRule, Stats, GenericGrep } = rules;

module.exports = {
    SolGrep,
    rules,
    solidity,
    SourceUnit,
    Contract,
    FunctionDef,
    BaseRule,
    Stats,
    GenericGrep,
}
