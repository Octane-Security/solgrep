import {
  ASTNode,
  SourceUnit as ParserSourceUnit,
} from '@solidity-parser/parser/dist/src/ast-types';
import { Token } from '@solidity-parser/parser/dist/src/types';

export class SourceUnit {
  constructor();
  /**
   * @param {string} fpath - the path to the file
   * @returns {object} - {filePath, content}
   * */
  static getFileContent(fpath: string): { filePath: string; content: string };
  filePath: string;
  ast: ParserSourceUnit & {
    errors?: any[];
    tokens?: Token[];
  };
  content: string;
  contracts: Contract[];
  pragmas: any[];
  imports: any[];
  /**
   * @returns {string} - the source code of the source unit
   */
  getSource(): string;
  /**
   *
   * @returns {Contract[]}
   */
  getContracts(): Contract[];
  /**
   * @returns the AST of the source unit
   * */
  toJSON(): SourceUnit & {
    errors?: any[];
    tokens?: Token[];
  };
  /**
   * @returns {SourceUnit} - a clone of the current SourceUnit
   * */
  clone(): SourceUnit;
  /**
   * @param {string} fpath - the path to the file
   * @returns {SourceUnit} - the source unit
   */
  fromFile(fpath: string): SourceUnit;
  /**
   * @param {string} content
   * */
  fromSource(content: string): void;
  /**
   * @param {string} input - the source code
   * @returns {SourceUnit} - the source unit
   */
  parseAst(input: string): SourceUnit;

  /**
   * @param {FunctionCall} func - the function node from the ast to fetch the source code for
   * @returns {string} - the raw function string
   * */
  getRawFunctionString(func: FunctionCall): string;
}
export class Contract {
  constructor(sourceUnit: any, node: any);
  sourceUnit: SourceUnit;
  ast: ASTNode;
  name: any;
  dependencies: any;
  stateVars: {};
  enums: {};
  structs: {};
  mappings: {};
  modifiers: {};
  functions: any[];
  fallback: any;
  receiveEther: any;
  events: any[];
  inherited_names: {};
  names: {};
  usingFor: {};
  functionCalls: any[];
  /**
   * @returns {FunctionDef[]} - the functions of the contract
   * */
  getFunctions(): FunctionDef[];
  /**
   * @returns - the AST of the contract
   * */
  toJSON(): ASTNode;
  /**
   * @returns {string} - the source code of the contract
   * */
  getSource(): string;
  _processAst(node: any): void;
}

export class Location {
  constructor(line: number, column: number);
  line: number;
  column: number;
}
export class LocationInfo {
  constructor(start: Location, end: Location);
  start: Location;
  end: Location;
}

export class Identifier {
  constructor(type: any, name: any, loc: LocationInfo);
  type: any;
  name: any;
  loc: LocationInfo;
}
export class InitialValue {
  constructor(
    loc: LocationInfo,
    number: number,
    subdenomination: any,
    type: any
  );
  loc: LocationInfo;
  number: number;
  subdenomination: any;
  type:
    | 'NumberLiteral'
    | 'BooleanLiteral'
    | 'StringLiteral'
    | 'Identifier'
    | 'BinaryOperation';
  left?: Identifier;
  right?: Identifier;
  operator?: string; // +, -, *, /, %
}
export class VariableDeclarationStatementVariable {
  constructor(
    expression: any,
    identifier: Identifier,
    type: any,
    isIndexed: boolean,
    isStateVar: boolean,
    loc: LocationInfo,
    storageLocation: any,
    name: string
  );
  expression: any;
  identifier: Identifier;
  type: any;
  isIndexed: boolean;
  isStateVar: boolean;
  loc: LocationInfo;
  storageLocation: any;
  name: string;
}

export class VariableDeclarationStatement {
  constructor(
    initialValue: InitialValue,
    loc: LocationInfo,
    type: any,
    variables: VariableDeclarationStatementVariable[]
  );
  initialValue: InitialValue;
  loc: LocationInfo;
  type: 'VariableDeclarationStatement';
  variables: VariableDeclarationStatementVariable[];
}
export class StatementBody {
  type: 'Block';
}

export type TypeName =
  | 'ElementaryTypeName'
  | 'UserDefinedTypeName'
  | 'Mapping'
  | 'ArrayTypeName'
  | 'FunctionTypeName';
export type StateMutability = 'pure' | 'view' | 'payable' | 'nonpayable' | null;
export type StorageLocation = 'memory' | 'storage' | 'calldata' | null;

export class ElementaryTypeName {
  constructor(
    name: string,
    loc: LocationInfo,
    stateMutability: StateMutability
  );
  type: TypeName;
  name: string;
  stateMutability: StateMutability;
  loc: LocationInfo;
}

export class VariableDeclaration {
  constructor(
    typeName: ElementaryTypeName,
    name: string,
    identifier: Identifier,
    storageLocation: StorageLocation,
    isStateVar: boolean,
    isIndexed: boolean,
    expression: any,
    loc: LocationInfo
  );
  type: 'VariableDeclaration';
  typeName: ElementaryTypeName;
  name: string;
  identifier: Identifier;
  storageLocation: StorageLocation;
  isStateVar: boolean;
  isIndexed: boolean;
  expression: any;
  loc: LocationInfo;
}

export class Block {
  constructor(statements: Statement[], loc: LocationInfo);
  type: 'Block';
  statements: Statement[];
  loc: LocationInfo;
}

export type Statement =
  | VariableDeclarationStatement
  | ExpressionStatement
  | ForStatement
  | IfStatement
  | EmitStatement
  | ReturnStatement;

export class FunctionDef {
  constructor(
    name: string,
    parameters: VariableDeclaration[],
    returnParameters: VariableDeclaration[],
    body: Block,
    visibility: string,
    modifiers: any[],
    override: any | null,
    isConstructor: boolean,
    isReceiveEther: boolean,
    isFallback: boolean,
    isVirtual: boolean,
    stateMutability: StateMutability,
    loc: LocationInfo
  );
  type: 'FunctionDef';
  name: string;
  parameters: VariableDeclaration[];
  returnParameters: VariableDeclaration[];
  body: Block;
  visibility: string;
  modifiers: any[];
  override: any | null;
  isConstructor: boolean;
  isReceiveEther: boolean;
  isFallback: boolean;
  isVirtual: boolean;
  stateMutability: StateMutability;
  loc: LocationInfo;

  getName(): string;
  /**
   * @returns {string} - the source code of the function
   * */
  getSource(): string;
  /**
   * @param {string} funcName - the name of the function this function may call to
   * @returns {boolean} - true if the function makes a call to funcName
   * */
  callsTo(funcName: string): boolean;
  /**
   * @param {string} funcName - the name of the function this function may call to
   * @param {object} opts - options
   * @param {boolean} opts.findOne - return after first match
   * @returns {FunctionCall[]} - array of function calls
   * */
  getFunctionCalls(
    funcName: string,
    opts: {
      findOne: boolean;
    }
  ): FunctionCall[];

  /**
   * @description get all function calls that are made inside this function
   * @param {number} [depth=1] - the depth of function calls to recursively search for
   * @param {boolean} [includeImports=false] - include function calls to imported functions
   * @param {string[]} [omittableImportPaths=typicalLibraryNames] - array of paths to omit
   * @returns {FunctionCall[]} - array of function call nodes
   * */
  getInnerFunctionCalls(depth?: number, includeImports?: boolean, omittableImportPaths?: string[]): FunctionCall[];

  /**
   * Retrieves the modifiers applied to the function definition.
   * @returns {object} An object containing all the modifiers of the function,
   * where each key is the name of a modifier and the corresponding value is the modifier's node.
   */
  getModifiers(): { [name: string]: ASTNode };

  /**
   * @description get all function calls that are made inside this function (including
   * calls to imported functions but not including calls to solidity macros - see ../src/utils/macros.js)
   * @param {string[]} [omittablePaths=[]] - array of paths to omit
   * @returns {FunctionCall[]} - array of function call nodes
   * */
  getAllFunctionCalls(omittablePaths: string[]): FunctionCall[];

  /**
   * @description filters out nodes in found that are defined in an omittable path
   * @param {FunctionCall[]} nodes - array of function call nodes
   * @param {string[]} omittablePaths - array of paths to omit
   * @returns {FunctionCall[]} - array of function call nodes
   * @private
   * */
  private filterNodesForOmittablePaths(nodes:FunctionCall[], omittablePaths: string[]): FunctionCall[];
}

export class ExpressionStatement {
  constructor(expression: Expression, loc: LocationInfo);
  type: 'ExpressionStatement';
  expression: Expression;
  loc: LocationInfo;
}

export class ForStatement {
  constructor(
    initExpression: VariableDeclarationStatement | null,
    conditionExpression: Expression,
    loopExpression: ExpressionStatement | null,
    body: Block,
    loc: LocationInfo
  );
  type: 'ForStatement';
  initExpression: VariableDeclarationStatement | null;
  conditionExpression: Expression;
  loopExpression: ExpressionStatement | null;
  body: Block;
  loc: LocationInfo;
}

export class IfStatement {
  constructor(
    condition: Expression,
    trueBody: Block,
    falseBody: Block | null,
    loc: LocationInfo
  );
  type: 'IfStatement';
  condition: Expression;
  trueBody: Block;
  falseBody: Block | null;
  loc: LocationInfo;
}

export class EmitStatement {
  constructor(eventCall: FunctionCall, loc: LocationInfo);
  type: 'EmitStatement';
  eventCall: FunctionCall;
  loc: LocationInfo;
}

export class ReturnStatement {
  constructor(expression: Expression, loc: LocationInfo);
  type: 'ReturnStatement';
  expression: Expression;
  loc: LocationInfo;
}

export class FunctionCall {
  constructor(
    expression: Identifier,
    arguments: Expression[],
    names: string[],
    identifiers: Identifier[],
    loc: LocationInfo
  );
  type: 'FunctionCall';
  expression: Identifier;
  arguments: Expression[];
  names: string[];
  identifiers: Identifier[];
  loc: LocationInfo;
}

export type Expression =
  | Identifier
  | Literal
  | BinaryOperation
  | UnaryOperation
  | FunctionCall;

export class BinaryOperation {
  constructor(
    operator: string,
    left: Expression,
    right: Expression,
    loc: LocationInfo
  );
  type: 'BinaryOperation';
  operator: string;
  left: Expression;
  right: Expression;
  loc: LocationInfo;
}

export class UnaryOperation {
  constructor(
    operator: string,
    subExpression: Expression,
    isPrefix: boolean,
    loc: LocationInfo
  );
  type: 'UnaryOperation';
  operator: string;
  subExpression: Expression;
  isPrefix: boolean;
  loc: LocationInfo;
}

export type Literal = NumberLiteral | BooleanLiteral | StringLiteral;

export class NumberLiteral {
  constructor(number: string, subdenomination: any | null, loc: LocationInfo);
  type: 'NumberLiteral';
  number: string;
  subdenomination: any | null;
  loc: LocationInfo;
}

export class BooleanLiteral {
  constructor(value: boolean, loc: LocationInfo);
  type: 'BooleanLiteral';
  value: boolean;
  loc: LocationInfo;
}

export class StringLiteral {
  constructor(value: string, loc: LocationInfo);
  type: 'StringLiteral';
  value: string;
  loc: LocationInfo;
}
